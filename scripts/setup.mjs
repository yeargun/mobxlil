import { existsSync, mkdirSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const pin = "c9f2e3f8e95bd7b1836bd02734fdcde46800fb6d"
const dest = resolve(root, "upstream", "mobx")

function run(cmd, args, cwd) {
    const result = spawnSync(cmd, args, { cwd, stdio: "inherit" })
    if (result.status !== 0) {
        process.exit(result.status ?? 1)
    }
}

mkdirSync(resolve(root, "upstream"), { recursive: true })
if (!existsSync(resolve(dest, ".git"))) {
    run("git", ["clone", "--filter=blob:none", "https://github.com/mobxjs/mobx.git", dest], root)
}
run("git", ["fetch", "--tags", "--force"], dest)
run("git", ["checkout", "--force", pin], dest)
console.log(`Pinned upstream/mobx at ${pin} (mobx@7.0.0)`)
