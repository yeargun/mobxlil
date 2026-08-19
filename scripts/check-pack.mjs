import { execFileSync } from "node:child_process"
import { readFileSync } from "node:fs"

const json = execFileSync("npm", ["pack", "--dry-run", "--json"], {
  encoding: "utf8"
})
const result = JSON.parse(json)[0]
const required = new Set([
  "dist/index.js",
  "dist/mobx.d.ts",
  "dist/internal.d.ts",
  "dist/mobx.mjs",
  "dist/mobx.esm.js",
  "dist/mobx.esm.development.js",
  "dist/mobx.cjs.development.js",
  "dist/mobx.cjs.production.js",
  "dist/mobx.cjs.production.min.js",
  "dist/mobx.umd.development.js",
  "dist/mobx.umd.production.js",
  "dist/mobx.umd.production.min.js",
  "LICENSE",
  "NOTICE.md",
  "README.md"
])
const files = new Set(result.files.map(({ path }) => path))
for (const path of required) {
  if (!files.has(path)) throw new Error(`npm tarball is missing ${path}`)
}
const manifest = JSON.parse(readFileSync("package.json", "utf8"))
if (manifest.name !== "@itslil/mobx") throw new Error("unexpected package name")
if (manifest.sideEffects !== false) throw new Error("package must remain tree-shakeable")
if (manifest.dependencies && Object.keys(manifest.dependencies).length) {
  throw new Error("package must stay dependency-free")
}
console.log(
  `npm pack: ${result.entryCount} files, ${result.size} bytes packed, ${result.unpackedSize} bytes unpacked`
)
