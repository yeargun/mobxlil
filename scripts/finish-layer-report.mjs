import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { allLayers } from "../layers/lil-map.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tmp = "/tmp/mobx-layer";
const reportsDir = resolve(root, "reports/layers");
const official = JSON.parse(readFileSync(resolve(reportsDir, "summary.json"), "utf8")).official;
const officialById = new Map(official.map((row) => [row.id, row]));

function measure(path) {
  const result = spawnSync(
    resolve(root, "../lilscript/target/release/lilscript-codec"),
    ["--json", path],
    { encoding: "utf8" },
  );
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout);
  }
  const artifact = JSON.parse(result.stdout).artifacts[0];
  return { raw: artifact.raw, gzip: artifact.gzip9, brotli: artifact.brotli11 };
}

function lilPath(layer) {
  const names = [
    `${layer.id}.mjs`,
    `slice-${layer.id}.mjs`,
    layer.lilEntry.split("/").pop().replace(".lil", ".mjs"),
  ];
  for (const name of names) {
    const path = resolve(tmp, name);
    try {
      readFileSync(path);
      return path;
    } catch {
      // next
    }
  }
  return null;
}

function classify(row) {
  if (row.lil?.error) {
    return "lil-compile-error";
  }
  if (!row.lil?.sizes) {
    return "missing-lil";
  }
  const lil = row.lil.sizes.brotli;
  const fileOxc = row.officialFile?.oxc?.brotli;
  const closedOxc = row.officialClosed?.oxc?.brotli;
  if (fileOxc && lil <= fileOxc && (!closedOxc || lil <= closedOxc)) {
    return "beats-official";
  }
  if (fileOxc && lil <= fileOxc) {
    return "beats-file-oxc";
  }
  if (closedOxc && lil <= closedOxc) {
    return "beats-closed-oxc";
  }
  if (closedOxc && closedOxc < 800 && lil > closedOxc * 3) {
    return "tree-shake-fail";
  }
  if (closedOxc && lil > closedOxc * 1.5) {
    return "much-bigger-than-closed";
  }
  if (fileOxc && lil > fileOxc) {
    return "bigger-than-file-oxc";
  }
  return "no-official";
}

const layers = [];
for (const layer of allLayers) {
  const officialRow = layer.official ? officialById.get(layer.official) : null;
  const path = lilPath(layer);
  const row = {
    id: layer.id,
    title: layer.title,
    kind: layer.kind,
    official: layer.official,
    from: layer.from ?? null,
    exports: layer.exports,
    officialFile: officialRow?.officialFile ?? null,
    officialClosed: officialRow?.officialClosed ?? null,
    closedFiles: officialRow?.closedFiles ?? null,
  };
  if (path) {
    row.lil = { sizes: measure(path), path };
  } else {
    row.lil = { error: "not compiled yet" };
  }
  if (row.lil.sizes && officialRow?.officialFile?.oxc) {
    row.deltaFile = row.lil.sizes.brotli - officialRow.officialFile.oxc.brotli;
  }
  if (row.lil.sizes && officialRow?.officialClosed?.oxc) {
    row.deltaClosed = row.lil.sizes.brotli - officialRow.officialClosed.oxc.brotli;
  }
  row.verdict = classify(row);
  layers.push(row);
}

const compiled = readdirSync(tmp).filter((name) => name.endsWith(".mjs"));
const summary = {
  generatedAt: new Date().toISOString(),
  official,
  layers,
  compiled,
  verdicts: Object.fromEntries(
    layers.reduce((counts, row) => {
      counts.set(row.verdict, (counts.get(row.verdict) ?? 0) + 1);
      return counts;
    }, new Map()),
  ),
};

mkdirSync(reportsDir, { recursive: true });
writeFileSync(resolve(reportsDir, "summary.json"), JSON.stringify(summary, null, 2) + "\n");
writeFileSync(
  resolve(reportsDir, "summary.tsv"),
  [
    "id\tkind\tfrom\tlil_brotli\tfile_oxc\tclosed_oxc\tdelta_closed\tverdict",
    ...layers.map((row) =>
      [
        row.id,
        row.kind,
        row.from ?? row.kind,
        row.lil.sizes?.brotli ?? row.lil.error,
        row.officialFile?.oxc?.brotli ?? "",
        row.officialClosed?.oxc?.brotli ?? "",
        row.deltaClosed ?? "",
        row.verdict,
      ].join("\t"),
    ),
  ].join("\n") + "\n",
);
console.log(layers.map((row) => `${row.id.padEnd(24)} ${String(row.lil.sizes?.brotli ?? row.lil.error).padStart(8)} ${row.verdict}`).join("\n"));
console.log("verdicts", summary.verdicts);
