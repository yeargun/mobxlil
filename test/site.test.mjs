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

  it("headlines Vite size and official tests", () => {
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /@itslil\/mobx/)
    assert.match(html, /Vite 8 Oxc/)
    assert.match(html, /769/)
    assert.doesNotMatch(html, /Closure/)
  })

  it("publishes a frozen compiler baseline with provenance", () => {
    const results = JSON.parse(readFileSync(resolve(site, "results.json"), "utf8"))
    const comparison = results.compilerComparison
    const before = comparison.runs.find((run) => run.role === "before")
    assert.equal(comparison.schemaVersion, 1)
    assert.equal(comparison.objective, "brotli11")
    assert.deepEqual(before.artifact.sizes, { raw: 65664, gzip9: 18690, brotli11: 16736 })
    assert.match(before.source.revision, /^[0-9a-f]{40}$/)
    assert.match(before.artifact.sha256, /^[0-9a-f]{64}$/)
    assert.deepEqual(before.timing.samples, [])
    assert.match(readFileSync(resolve(site, "index.html"), "utf8"), /id="compiler-comparison"/)
    const checked = spawnSync(process.execPath, ["--input-type=module", "--check"], {
      encoding: "utf8",
      input: readFileSync(resolve(site, "compiler-comparison.js"), "utf8"),
    })
    assert.equal(checked.status, 0, checked.stderr)
  })
})
