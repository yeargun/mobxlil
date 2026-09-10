import assert from "node:assert/strict"
import { spawnSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import { describe, it } from "node:test"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const site = resolve(root, "_site")

describe("github pages artifact", () => {
  it("ships the landing page, runtime, and examples", () => {
    for (const path of [
      "index.html",
      "styles.css",
      "app.js",
      "compiler-comparison.js",
      "results.json",
      "mobx.js",
      ".nojekyll",
      "examples/index.html",
      "examples/counter.html",
      "examples/app.css"
    ]) {
      assert.equal(existsSync(resolve(site, path)), true, path)
    }
  })

  it("does not point examples at the repo-root dist path", () => {
    const counter = readFileSync(resolve(site, "examples/counter.html"), "utf8")
    assert.match(counter, /from ["']\.\.\/mobx\.js["']/)
    assert.doesNotMatch(counter, /\/dist\/mobx/)
  })

  it("headlines complete ESM size and official tests", () => {
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /@itslil\/mobx/)
    assert.match(html, /original ESM \+ Terser/)
    assert.match(html, /769/)
    assert.doesNotMatch(html, /Closure/)
  })

  it("publishes the current ESM comparison and build facts", () => {
    const comparison = JSON.parse(readFileSync(resolve(site, "comparison.json"), "utf8"))
    assert.match(comparison.compiler.commit, /^[0-9a-f]{40}$/)
    assert.ok(comparison.esm.lilscript.brotli11 > 0)
    assert.ok(comparison.esm.original.brotli11 > 0)
    assert.ok(comparison.build.originalSeconds > 0)
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /id="build-comparison"/)
    assert.doesNotMatch(html, /id="(?:build-audit|compiler-progress)"/)
  })
})
