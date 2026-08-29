import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { build as esbuild, transform as esbuildTransform } from "esbuild";
import { accessSync, constants } from "node:fs";
import {
  closedGraph,
  exportOwners,
  officialModules,
  officialSrc,
  moduleOrder,
} from "../layers/official-graph.mjs";
import { allLayers } from "../layers/lil-map.mjs";
import { minifyLanes } from "./minify-lanes.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lilscriptRoot = process.env.LILSCRIPT_ROOT ?? resolve(root, "..", "lilscript");
const codec = process.env.LILSCRIPT_CODEC ?? resolve(lilscriptRoot, "target/release/lilscript-codec");

function compilerPath() {
  const candidates = [
    process.env.LILSCRIPT_COMPILER,
    resolve(lilscriptRoot, "target/release/lilscript"),
  ].filter(Boolean);
  for (const candidate of candidates) {
    try {
      accessSync(candidate, constants.X_OK);
      return candidate;
    } catch {
      // next
    }
  }
  throw new Error("lilscript compiler not found");
}

function measureFile(path) {
  const result = spawnSync(codec, ["--json", path], { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(`codec failed ${path}\n${result.stderr}`);
  }
  const parsed = JSON.parse(result.stdout);
  const artifact = parsed.artifacts?.[0] ?? parsed;
  return {
    raw: artifact.raw,
    gzip: artifact.gzip9 ?? artifact.gzip,
    brotli: artifact.brotli11 ?? artifact.brotli,
  };
}

async function officialFileOnly(mod, buildRoot) {
  if (mod.exports.size === 0) {
    return { skip: "types-only" };
  }
  try {
    const source = readFileSync(mod.file, "utf8");
    const transformed = await esbuildTransform(source, {
      loader: "ts",
      format: "esm",
      target: "esnext",
      define: { __DEV__: "false" },
    });
    const path = join(buildRoot, "official.file.js");
    writeFileSync(path, transformed.code);
    const minified = await minifyLanes(transformed.code, `${mod.id}.file.js`);
    const oxcPath = join(buildRoot, "official.file.oxc.js");
    writeFileSync(oxcPath, minified.oxc);
    return {
      extracted: measureFile(path),
      oxc: measureFile(oxcPath),
    };
  } catch (error) {
    return { error: String(error.message ?? error) };
  }
}

function rewriteInternalImports(source, owners) {
  return source
    .replace(/^\s*import\s+type\s+[\s\S]*?;\s*$/gm, "")
    .replace(
      /(import|export)\s+\{([\s\S]*?)\}\s+from\s+["']([^"']+)["']/g,
      (all, kind, list, spec) => {
        if (!(spec === "../internal" || spec === "./internal" || spec.endsWith("/internal"))) {
          return all;
        }
        const groups = new Map();
        for (const item of list
          .split(",")
          .map((part) => part.trim())
          .filter((part) => part && !part.startsWith("type "))) {
          const aliased = item.match(/^(\$?[A-Za-z_][\w$]*)\s+as\s+(\$?[A-Za-z_][\w$]*)$/);
          const imported = aliased ? aliased[1] : item.match(/^(\$?[A-Za-z_][\w$]*)$/)?.[1];
          const local = aliased ? aliased[2] : imported;
          if (!imported) {
            continue;
          }
          const owner = owners.get(imported);
          if (!owner) {
            continue;
          }
          if (!groups.has(owner)) {
            groups.set(owner, []);
          }
          groups.get(owner).push(imported === local ? imported : `${imported} as ${local}`);
        }
        if (groups.size === 0) {
          return "/* type-only */";
        }
        return [...groups]
          .map(
            ([owner, names]) =>
              `${kind} { ${names.join(", ")} } from ${JSON.stringify(join(officialSrc, owner))}`,
          )
          .join("\n");
      },
    );
}

async function officialClosed(mod, modules, owners, buildRoot) {
  if (mod.exports.size === 0) {
    return { skip: "types-only" };
  }
  const graph = closedGraph(mod.id, modules, owners);
  const outPath = join(buildRoot, "official.closed.js");
  const exported = [...mod.exports].filter((name) => owners.has(name) && owners.get(name) === mod.id);
  try {
    const stdin =
      mod.id === "mobx.ts"
        ? null
        : {
            contents:
              exported.length > 0
                ? `export { ${exported.join(", ")} } from ${JSON.stringify(mod.file)}`
                : "export {}",
            resolveDir: officialSrc,
            sourcefile: `${mod.id.replaceAll("/", "-")}.entry.ts`,
            loader: "ts",
          };
    await esbuild({
      absWorkingDir: officialSrc,
      ...(stdin ? { stdin } : { entryPoints: [mod.file] }),
      outfile: outPath,
      bundle: true,
      format: "esm",
      platform: "neutral",
      minify: false,
      write: true,
      treeShaking: true,
      define: { __DEV__: "false" },
      plugins: [
        {
          name: "rewrite-mobx-internal",
          setup(build) {
            build.onLoad({ filter: /\.ts$/ }, (args) => {
              if (!args.path.startsWith(officialSrc) || args.path.endsWith("/internal.ts")) {
                return null;
              }
              return {
                contents: rewriteInternalImports(readFileSync(args.path, "utf8"), owners),
                loader: "ts",
              };
            });
          },
        },
      ],
      logOverride: { "import-is-undefined": "silent", "empty-import-meta": "silent" },
    });
    const source = readFileSync(outPath, "utf8");
    const minified = await minifyLanes(source, `${mod.id}.closed.js`);
    const oxcPath = join(buildRoot, "official.closed.oxc.js");
    writeFileSync(oxcPath, minified.oxc);
    return {
      files: graph,
      extracted: measureFile(outPath),
      oxc: measureFile(oxcPath),
    };
  } catch (error) {
    return { files: graph, error: String(error.message ?? error).slice(0, 800) };
  }
}

function compileLil(entry, outPath) {
  const result = spawnSync(
    compilerPath(),
    [resolve(root, entry), "--target", "js-module", "--config", resolve(root, "lilscript.toml"), "-o", outPath],
    { cwd: root, encoding: "utf8", maxBuffer: 32 * 1024 * 1024 },
  );
  if (result.status !== 0) {
    throw new Error((result.stderr || result.stdout || "compile failed").slice(0, 800));
  }
}

async function measureLil(layer, buildRoot) {
  const outPath = join(buildRoot, "lilscript.mjs");
  const started = Date.now();
  try {
    compileLil(layer.lilEntry, outPath);
    const sizes = measureFile(outPath);
    return { sizes, ms: Date.now() - started, bytes: readFileSync(outPath, "utf8").length };
  } catch (error) {
    return { error: String(error.message ?? error).slice(0, 800), ms: Date.now() - started };
  }
}

function classify(row) {
  if (row.lil?.error) {
    return "lil-compile-error";
  }
  if (!row.lil?.sizes || !row.officialFile?.oxc) {
    return row.officialFile?.skip || "incomplete";
  }
  const lil = row.lil.sizes.brotli;
  const fileOxc = row.officialFile.oxc.brotli;
  const closedOxc = row.officialClosed?.oxc?.brotli;
  if (lil <= fileOxc) {
    return "beats-file-oxc";
  }
  if (closedOxc && lil <= closedOxc) {
    return "beats-closed-oxc";
  }
  if (closedOxc && lil > closedOxc * 2) {
    return "likely-tree-shake-or-glue";
  }
  if (lil > fileOxc * 3) {
    return "much-bigger-than-file";
  }
  return "bigger-than-file-oxc";
}

const args = process.argv.slice(2);
const officialOnly = args.includes("--official-only");
const lilOnly = args.includes("--lil-only");
const skipFull = args.includes("--skip-full") || process.env.SKIP_FULL === "1";
const only = args.filter((arg) => !arg.startsWith("--"));
const modules = officialModules();
const owners = exportOwners(modules);
const order = moduleOrder(modules, owners);
const reportsDir = resolve(root, "reports/layers");
mkdirSync(reportsDir, { recursive: true });

writeFileSync(
  resolve(reportsDir, "official-graphs.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      modules: order.map((item) => ({
        id: item.id,
        exports: item.exports,
        closedFiles: closedGraph(item.id, modules, owners),
      })),
    },
    null,
    2,
  ) + "\n",
);

spawnSync(process.execPath, [resolve(root, "scripts/write-slice-layers.mjs")], {
  cwd: root,
  stdio: "inherit",
});

const officialRows = [];
if (lilOnly) {
  try {
    const previous = JSON.parse(readFileSync(resolve(reportsDir, "summary.json"), "utf8"));
    officialRows.push(...(previous.official ?? []));
    console.log(`reused ${officialRows.length} official rows from summary.json`);
  } catch {
    console.log("no previous official summary; official columns will be empty");
  }
} else {
console.log(`official modules: ${order.length}`);
for (const item of order) {
  const mod = modules.get(item.id);
  const buildRoot = resolve(root, "layers/build/official", item.id.replaceAll("/", "--"));
  mkdirSync(buildRoot, { recursive: true });
  const fileOnly = await officialFileOnly(mod, buildRoot);
  const closed = await officialClosed(mod, modules, owners, buildRoot);
  const row = {
    id: item.id,
    exports: item.exports,
    closedFiles: closed.files ?? closedGraph(item.id, modules, owners),
    officialFile: fileOnly,
    officialClosed: closed,
  };
  officialRows.push(row);
  const fileB = fileOnly.oxc?.brotli ?? fileOnly.skip ?? fileOnly.error ?? "?";
  const closedB = closed.oxc?.brotli ?? closed.skip ?? closed.error ?? "?";
  console.log(`  official ${item.id.padEnd(36)} file=${String(fileB).padStart(6)} closed=${String(closedB).padStart(6)} deps=${row.closedFiles.length}`);
}
}

function persist(officialRows, lilRows) {
  const summary = {
    generatedAt: new Date().toISOString(),
    official: officialRows,
    layers: lilRows,
    verdicts: Object.fromEntries(
      lilRows.reduce((counts, row) => {
        counts.set(row.verdict, (counts.get(row.verdict) ?? 0) + 1);
        return counts;
      }, new Map()),
    ),
  };
  writeFileSync(resolve(reportsDir, "summary.json"), JSON.stringify(summary, null, 2) + "\n");
  const table = [
    "id\tkind\tlil_brotli\tfile_oxc\tclosed_oxc\tdelta_file\tverdict",
    ...lilRows.map((row) =>
      [
        row.id,
        row.kind,
        row.lil.sizes?.brotli ?? row.lil.error ?? "",
        row.officialFile?.oxc?.brotli ?? "",
        row.officialClosed?.oxc?.brotli ?? "",
        row.deltaFile ?? "",
        row.verdict,
      ].join("\t"),
    ),
  ].join("\n");
  writeFileSync(resolve(reportsDir, "summary.tsv"), `${table}\n`);
}

function layerRank(layer) {
  if (layer.kind === "standalone") {
    return 0;
  }
  if (layer.from === "host") {
    return 1;
  }
  if (layer.from === "kernel") {
    return 2;
  }
  if (layer.from === "mixed") {
    return 3;
  }
  if (layer.from === "types") {
    return 4;
  }
  return 5;
}

const lilRows = [];
const lilTargets = (
  only.length ? allLayers.filter((layer) => only.includes(layer.id)) : [...allLayers]
)
  .filter((layer) => !(skipFull && layer.kind === "full"))
  .sort((left, right) => layerRank(left) - layerRank(right) || left.id.localeCompare(right.id));

if (officialOnly) {
  persist(officialRows, []);
  console.log(`wrote official-only reports (${officialRows.length} modules)`);
  process.exit(0);
}
console.log(`lil layers: ${lilTargets.length}`);
for (const layer of lilTargets) {
  const buildRoot = resolve(root, "layers/build", layer.id);
  mkdirSync(buildRoot, { recursive: true });
  const official = layer.official
    ? officialRows.find((row) => row.id === layer.official)
    : null;
  const lil = await measureLil(layer, buildRoot);
  const row = {
    id: layer.id,
    title: layer.title,
    kind: layer.kind,
    official: layer.official,
    from: layer.from ?? null,
    exports: layer.exports,
    lil,
    officialFile: official?.officialFile ?? null,
    officialClosed: official?.officialClosed ?? null,
    closedFiles: official?.closedFiles ?? null,
  };
  row.verdict = classify(row);
  if (lil.sizes && official?.officialFile?.oxc) {
    row.deltaFile = lil.sizes.brotli - official.officialFile.oxc.brotli;
  }
  if (lil.sizes && official?.officialClosed?.oxc) {
    row.deltaClosed = lil.sizes.brotli - official.officialClosed.oxc.brotli;
  }
  lilRows.push(row);
  persist(officialRows, lilRows);
  const lilB = lil.sizes?.brotli ?? lil.error ?? "?";
  console.log(
    `  lil ${layer.id.padEnd(22)} brotli=${String(lilB).padStart(6)} ${row.verdict} ${lil.ms ? `${lil.ms}ms` : ""}`,
  );
}

persist(officialRows, lilRows);
console.log(`wrote reports/layers/summary.json (${lilRows.length} lil, ${officialRows.length} official)`);
