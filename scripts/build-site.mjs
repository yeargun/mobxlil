import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const output = join(root, "_site")
const examplesSrc = join(root, "examples")
const examplesDest = join(output, "examples")

await rm(output, { recursive: true, force: true })
await mkdir(examplesDest, { recursive: true })
await cp(join(root, "site"), output, { recursive: true })
await cp(join(root, "dist", "mobx.esm.js"), join(output, "mobx.js"))
await cp(join(examplesSrc, "app.css"), join(examplesDest, "app.css"))

const pages = ["index.html", "counter.html", "todos.html", "cart.html", "search.html", "reactions.html"]
for (const page of pages) {
  const source = await readFile(join(examplesSrc, page), "utf8")
  const rewritten = source
    .replaceAll("../dist/mobx.esm.js", "../mobx.js")
    .replaceAll("/dist/mobx.esm.js", "../mobx.js")
  await writeFile(join(examplesDest, page), rewritten)
}

await writeFile(join(output, ".nojekyll"), "")
console.log(`Built GitHub Pages site at ${output}`)

// Publish current build facts using the existing page typography.
await import("./build-comparison.mjs").then(({writeComparison}) => writeComparison({root, output}));
