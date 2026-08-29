import { accessSync, constants, mkdirSync, readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lilscriptRoot = process.env.LILSCRIPT_ROOT ?? resolve(root, "..", "lilscript");

export function compilerPath() {
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

function run(cmd, args, opts = {}) {
  const result = spawnSync(cmd, args, {
    cwd: root,
    stdio: "inherit",
    ...opts,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function compile(dev, config, out) {
  mkdirSync(resolve(root, "dist"), { recursive: true });
  writeFileSync(
    resolve(root, "src", "dev-flag.lil"),
    `export bool DEV = ${dev ? "true" : "false"};\n`,
  );
  run(compilerPath(), [
    resolve(root, "src", "mobx.lil"),
    "--target",
    "js-module",
    "--config",
    resolve(root, config),
    "-o",
    resolve(root, out),
  ]);
  return out;
}

function writeCjs(esmPath, cjsPath) {
  run(resolve(root, "node_modules", ".bin", "esbuild"), [
    resolve(root, esmPath),
    "--bundle",
    "--format=cjs",
    "--platform=neutral",
    "--banner:js=\"use strict\";",
    `--outfile=${resolve(root, cjsPath)}`,
    "--log-level=error",
  ]);
}

function writeUmd(esmPath, umdPath) {
  run(resolve(root, "node_modules", ".bin", "esbuild"), [
    resolve(root, esmPath),
    "--bundle",
    "--format=iife",
    "--global-name=mobx",
    "--banner:js=\"use strict\";",
    "--footer:js=typeof module!==\"undefined\"&&module.exports&&(module.exports=mobx);",
    `--outfile=${resolve(root, umdPath)}`,
    "--log-level=error",
  ]);
}

function writeMinCjs(srcPath, destPath) {
  copyFileSync(resolve(root, srcPath), resolve(root, destPath));
}

function writeMjs(esmPath) {
  copyFileSync(resolve(root, esmPath), resolve(root, "dist", "mobx.mjs"));
}

function writeIndexSwitcher() {
  writeFileSync(
    resolve(root, "dist", "index.js"),
    `'use strict'\n\nif (process.env.NODE_ENV === 'production') {\n  module.exports = require('./mobx.cjs.production.min.js')\n} else {\n  module.exports = require('./mobx.cjs.development.js')\n}\n`,
  );
}

function copyDts() {
  const fromNpm = resolve(root, "node_modules", "mobx", "dist");
  const dest = resolve(root, "dist");
  if (!existsSync(fromNpm)) {
    return;
  }
  run("rsync", ["-a", "--include=*/", "--include=*.d.ts", "--exclude=*", `${fromNpm}/`, `${dest}/`]);
}

const args = process.argv.slice(2);
const devOnly = args.includes("--dev");
const prodOnly = args.includes("--prod");
const minOnly = args.includes("--min");

if (!prodOnly && !minOnly) {
  compile(true, "config/dev.toml", "dist/mobx.dev.esm.js");
  writeCjs("dist/mobx.dev.esm.js", "dist/mobx.cjs.development.js");
  writeUmd("dist/mobx.dev.esm.js", "dist/mobx.umd.development.js");
  copyFileSync(resolve(root, "dist/mobx.dev.esm.js"), resolve(root, "dist/mobx.esm.development.js"));
}
if (!devOnly && !minOnly) {
  compile(false, "lilscript.toml", "dist/mobx.esm.js");
  writeCjs("dist/mobx.esm.js", "dist/mobx.cjs.production.js");
  writeUmd("dist/mobx.esm.js", "dist/mobx.umd.production.js");
  writeMjs("dist/mobx.esm.js");
}
if (!devOnly && !prodOnly) {
  compile(false, "config/production.min.toml", "dist/mobx.esm.production.min.js");
  writeCjs("dist/mobx.esm.production.min.js", "dist/mobx.cjs.production.min.js");
  writeUmd("dist/mobx.esm.production.min.js", "dist/mobx.umd.production.min.js");
}
if (devOnly) {
  writeMjs("dist/mobx.dev.esm.js");
}
if (prodOnly && !existsSync(resolve(root, "dist", "mobx.cjs.production.min.js"))) {
  writeMinCjs("dist/mobx.cjs.production.js", "dist/mobx.cjs.production.min.js");
  writeUmd("dist/mobx.esm.js", "dist/mobx.umd.production.min.js");
  copyFileSync(resolve(root, "dist/mobx.esm.js"), resolve(root, "dist/mobx.esm.production.min.js"));
}
writeIndexSwitcher();
copyDts();
