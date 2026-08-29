import { accessSync, constants, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";
import { layerById, layers, planned } from "../layers/catalog.mjs";
import { minifyLanes } from "./minify-lanes.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lilscriptRoot = process.env.LILSCRIPT_ROOT ?? resolve(root, "..", "lilscript");
const codec = process.env.LILSCRIPT_CODEC ?? resolve(lilscriptRoot, "target/release/lilscript-codec");

function compilerPath() {
  const candidates = [
    process.env.LILSCRIPT_COMPILER,
    resolve(lilscriptRoot, "target", "release", "lilscript"),
    resolve(lilscriptRoot, "target", "debug", "lilscript"),
  ].filter(Boolean);
  for (const candidate of candidates) {
    try {
      accessSync(candidate, constants.X_OK);
      return candidate;
    } catch {
      // try next
    }
  }
  throw new Error("LilScript compiler not found. Set LILSCRIPT_COMPILER or build lilscript.");
}

function measureFile(path) {
  const result = spawnSync(codec, ["--json", path], { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(`lilscript-codec failed for ${path}\n${result.stderr}`);
  }
  const parsed = JSON.parse(result.stdout);
  const artifact = parsed.artifacts?.[0] ?? parsed;
  return {
    raw: artifact.raw,
    gzip: artifact.gzip9 ?? artifact.gzip,
    brotli: artifact.brotli11 ?? artifact.brotli,
  };
}

function compileLayer(layer, outPath) {
  const result = spawnSync(
    compilerPath(),
    [
      resolve(root, layer.lilEntry),
      "--target",
      "js-module",
      "--config",
      resolve(root, "lilscript.toml"),
      "-o",
      outPath,
    ],
    { cwd: root, encoding: "utf8", maxBuffer: 32 * 1024 * 1024 },
  );
  if (result.status !== 0) {
    throw new Error(`${compilerPath()} ${layer.lilEntry}\n${result.stdout}${result.stderr}`);
  }
}

function pickBest(sizesByLane) {
  let winner = null;
  for (const [lane, sizes] of Object.entries(sizesByLane)) {
    if (!winner || sizes.brotli < winner.sizes.brotli) {
      winner = { lane, sizes };
    }
  }
  return winner;
}

async function exportNames(path) {
  const mod = await import(`${pathToFileURL(path).href}?t=${Date.now()}`);
  return Object.keys(mod)
    .filter((key) => mod[key] !== undefined)
    .sort();
}

async function measureOne(id) {
  const layer = layerById(id);
  const buildRoot = resolve(root, "layers/build", id);
  mkdirSync(buildRoot, { recursive: true });

  const upstreamPath = resolve(root, layer.upstream);
  const upstreamSource = readFileSync(upstreamPath, "utf8");
  const minified = await minifyLanes(upstreamSource, `${id}.upstream.js`);
  const jsLanes = {
    extracted: measureFile(upstreamPath),
  };
  for (const [lane, code] of Object.entries(minified)) {
    const path = resolve(buildRoot, `upstream.${lane}.js`);
    writeFileSync(path, code);
    jsLanes[lane] = measureFile(path);
  }
  const jsBest = pickBest({
    oxc: jsLanes.oxc,
    terser: jsLanes.terser,
    esbuild: jsLanes.esbuild,
  });

  const lilPath = resolve(buildRoot, "lilscript.mjs");
  compileLayer(layer, lilPath);
  const lilSizes = measureFile(lilPath);

  const names = await exportNames(lilPath);
  const missing = layer.exports.filter((name) => !names.includes(name));
  if (missing.length) {
    throw new Error(`${id} missing exports: ${missing.join(", ")}`);
  }

  const delta = lilSizes.brotli - jsBest.sizes.brotli;
  const report = {
    layer: id,
    title: layer.title,
    planned,
    lilscript: lilSizes,
    javascript: {
      extracted: jsLanes.extracted,
      oxc: jsLanes.oxc,
      terser: jsLanes.terser,
      esbuild: jsLanes.esbuild,
      selectedBaseline: {
        lane: jsBest.lane,
        sizes: jsBest.sizes,
      },
    },
    gate: {
      metric: "brotli",
      lilscript: lilSizes.brotli,
      javascript: jsBest.sizes.brotli,
      baseline: jsBest.lane,
      delta,
      pass: delta <= 0,
    },
  };
  mkdirSync(resolve(root, "reports/layers"), { recursive: true });
  writeFileSync(resolve(root, "reports/layers", `${id}.json`), JSON.stringify(report, null, 2) + "\n");
  return report;
}

function printReport(report) {
  const { lilscript: lil, javascript: js, gate } = report;
  const line = (name, sizes) =>
    `${name.padEnd(12)} raw=${String(sizes.raw).padStart(6)} gzip=${String(sizes.gzip).padStart(5)} brotli=${String(sizes.brotli).padStart(5)}`;
  console.log(`${report.layer}: ${report.title}`);
  console.log(line("lilscript", lil));
  console.log(line("oxc", js.oxc));
  console.log(line("terser", js.terser));
  console.log(line("esbuild", js.esbuild));
  console.log(
    `gate brotli ${lil.brotli}/${js.selectedBaseline.sizes.brotli} vs ${js.selectedBaseline.lane}  ${
      gate.pass ? "PASS" : `FAIL +${gate.delta}`
    }`,
  );
}

const id = process.argv[2] ?? layers[0].id;
const report = await measureOne(id);
printReport(report);
if (!report.gate.pass) {
  process.exitCode = 1;
}
