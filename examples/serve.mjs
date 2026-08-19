import { createServer } from "node:http"
import { existsSync, readFileSync, statSync } from "node:fs"
import { extname, join, normalize, resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const types = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".map": "application/json; charset=utf-8"
}

const server = createServer((req, res) => {
    let pathname = decodeURIComponent((req.url ?? "/").split("?")[0])
    if (pathname === "/" || pathname === "/examples" || pathname === "/examples/") {
        pathname = "/examples/index.html"
    }
    const file = resolve(root, normalize(pathname).replace(/^[/\\]+/, ""))
    if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) {
        res.writeHead(404, { "content-type": "text/plain; charset=utf-8" })
        res.end("not found")
        return
    }
    res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" })
    res.end(readFileSync(file))
})

const port = Number(process.env.PORT ?? 4177)
server.listen(port, () => {
    console.log(`http://127.0.0.1:${port}/examples/`)
})
