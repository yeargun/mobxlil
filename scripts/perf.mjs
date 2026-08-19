import { spawnSync } from "node:child_process"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { symlinkSync, existsSync } from "node:fs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

function run(args, opts = {}) {
    const result = spawnSync(process.execPath, args, {
        cwd: root,
        stdio: "inherit",
        env: { ...process.env, NODE_PATH: resolve(root, "node_modules") },
        ...opts
    })
    if (result.status !== 0) {
        process.exit(result.status ?? 1)
    }
}

const distLink = resolve(root, "tests/dist")
if (!existsSync(distLink)) {
    symlinkSync(resolve(root, "dist"), distLink)
}

run([resolve(root, "tests/upstream/perf/index.js")])

const tsc = spawnSync(
    resolve(root, "node_modules/.bin/tsc"),
    ["-p", resolve(root, "tests/upstream/perf/tsconfig.decorator.json")],
    { cwd: root, stdio: "inherit" }
)
if (tsc.status !== 0) {
    process.exit(tsc.status ?? 1)
}
run(["--expose-gc", resolve(root, "tests/upstream/perf/compiled/lazy-computed-decorator.js")])
run(["--expose-gc", resolve(root, "tests/upstream/perf/compiled/lazy-observable-decorator.js")])
