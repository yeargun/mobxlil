import assert from "node:assert/strict"
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

  it("headlines Vite+Terser, official tests, and Closure ADVANCED", () => {
    const html = readFileSync(resolve(site, "index.html"), "utf8")
    assert.match(html, /@itslil\/mobx/)
    assert.match(html, /Vite \+ Terser/)
    assert.match(html, /769/)
    assert.match(html, /Closure ADVANCED/)
  })
})
