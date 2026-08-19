import { chromium } from "playwright"
import { createServer } from "node:http"
import { readFileSync, mkdirSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const esm = readFileSync(resolve(root, "dist/mobx.esm.js"), "utf8")
const umd = readFileSync(resolve(root, "dist/mobx.umd.production.min.js"), "utf8")

const esmPage = `<!doctype html>
<html><body>
<script type="module">
window.__pageError = null;
window.addEventListener("error", event => {
  window.__pageError = String(event.error || event.message);
});
try {
  const mobx = await import("/mobx.js");
  window.__mobx = mobx;
  const { observable, computed, autorun, action, flow, when, makeObservable } = mobx;

  const o = observable({ n: 1, arr: [1], map: observable.map([["a", 1]]), set: observable.set([1]) });
  const double = computed(() => o.n * 2);
  const seen = [];
  const d = autorun(() => seen.push(double.get()));
  action(() => {
    o.n = 2;
    o.arr.push(2);
    o.map.set("b", 2);
    o.set.add(2);
  })();
  d();

  class Store {
    x = 1;
    constructor() {
      makeObservable(this, { x: observable });
    }
  }
  const store = new Store();

  const whenP = when(() => o.n === 2);
  const task = flow(function* () {
    const n = yield Promise.resolve(o.n);
    return n + 1;
  });
  const flowValue = await task();
  await whenP;

  window.__results = {
    seen,
    arr: o.arr.slice(),
    map: [...o.map.entries()],
    set: [...o.set.values()],
    storeX: store.x,
    flowValue,
    format: "esm"
  };
} catch (error) {
  window.__pageError = String(error && error.stack ? error.stack : error);
}
</script>
</body></html>`

const umdPage = `<!doctype html>
<html><body>
<script src="/mobx.umd.js"></script>
<script>
window.__mobx = mobx;
const { observable, autorun } = mobx;
const o = observable({ n: 1 });
const seen = [];
const d = autorun(() => seen.push(o.n));
o.n = 2;
d();
window.__results = { seen, format: "umd" };
window.__ready = Promise.resolve();
</script>
</body></html>`

function serve() {
  return new Promise(resolveListen => {
    const server = createServer((req, res) => {
      if (req.url === "/mobx.js") {
        res.writeHead(200, { "content-type": "text/javascript" })
        res.end(esm)
        return
      }
      if (req.url === "/mobx.umd.js") {
        res.writeHead(200, { "content-type": "text/javascript" })
        res.end(umd)
        return
      }
      if (req.url === "/umd") {
        res.writeHead(200, { "content-type": "text/html" })
        res.end(umdPage)
        return
      }
      res.writeHead(200, { "content-type": "text/html" })
      res.end(esmPage)
    })
    server.listen(0, "127.0.0.1", () => resolveListen(server))
  })
}

function assert(cond, message) {
  if (!cond) throw new Error(message)
}

const server = await serve()
const { port } = server.address()
const browser = await chromium.launch({ args: ["--js-flags=--expose-gc"] })

const pageA = await browser.newPage()
const pageB = await browser.newPage()
pageA.on("pageerror", error => console.error("pageA", error))
pageB.on("pageerror", error => console.error("pageB", error))
await pageA.goto(`http://127.0.0.1:${port}/`)
await pageB.goto(`http://127.0.0.1:${port}/`)
await pageA.waitForFunction(() => window.__results || window.__pageError)
await pageB.waitForFunction(() => window.__results || window.__pageError)
const pageError = await pageA.evaluate(() => window.__pageError)
if (pageError) {
  throw new Error(`esm page error: ${pageError}`)
}
const results = await pageA.evaluate(() => window.__results)
const resultsB = await pageB.evaluate(() => window.__results)

assert(JSON.stringify(results.seen) === JSON.stringify([2, 4]), `diamond/autorun mismatch: ${JSON.stringify(results.seen)}`)
assert(JSON.stringify(results.arr) === JSON.stringify([1, 2]), `array mismatch: ${JSON.stringify(results.arr)}`)
assert(JSON.stringify(results.map) === JSON.stringify([["a", 1], ["b", 2]]), `map mismatch: ${JSON.stringify(results.map)}`)
assert(JSON.stringify(results.set) === JSON.stringify([1, 2]), `set mismatch: ${JSON.stringify(results.set)}`)
assert(results.storeX === 1, `decorator/makeObservable mismatch: ${results.storeX}`)
assert(results.flowValue === 3, `flow mismatch: ${results.flowValue}`)
assert(JSON.stringify(resultsB.seen) === JSON.stringify(results.seen), "page isolation: both pages should independently compute")

await pageA.evaluate(() => {
  const { observable, autorun } = window.__mobx
  window.__disposed = []
  const box = observable.box(1)
  const d = autorun(() => window.__disposed.push(box.get()))
  box.set(2)
  d()
  box.set(3)
})
const disposed = await pageA.evaluate(() => window.__disposed)
assert(JSON.stringify(disposed) === JSON.stringify([1, 2]), `disposal mismatch: ${JSON.stringify(disposed)}`)

const umdTab = await browser.newPage()
await umdTab.goto(`http://127.0.0.1:${port}/umd`)
await umdTab.waitForFunction(() => window.__results)
const umdResults = await umdTab.evaluate(() => window.__results)
assert(umdResults.format === "umd", "umd format flag")
assert(JSON.stringify(umdResults.seen) === JSON.stringify([1, 2]), `umd autorun mismatch: ${JSON.stringify(umdResults.seen)}`)

const heap = await pageA.evaluate(() => {
  if (window.gc) window.gc()
  return performance.memory ? performance.memory.usedJSHeapSize : 0
})

await browser.close()
server.close()

const report = { results, umdResults, heap, pages: 2 }
console.log("e2e ok", report)
mkdirSync(resolve(root, "e2e-out"), { recursive: true })
writeFileSync(resolve(root, "e2e-out/report.json"), JSON.stringify(report, null, 2) + "\n")
