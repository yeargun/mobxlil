import { writeFileSync, mkdirSync, rmSync, symlinkSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"
import { createRequire } from "node:module"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(import.meta.url)

function run(cmd, args, opts = {}) {
    const result = spawnSync(cmd, args, {
        cwd: root,
        stdio: "inherit",
        ...opts
    })
    if (result.status !== 0) {
        process.exit(result.status ?? 1)
    }
    return result
}

function copyUpstreamTests() {
    const src = resolve(root, "upstream/mobx/packages/mobx/__tests__")
    const dest = resolve(root, "tests/upstream")
    mkdirSync(dest, { recursive: true })
    run("rsync", ["-a", "--delete", `${src}/base/`, `${dest}/base/`])
    run("rsync", ["-a", "--delete", `${src}/utils/`, `${dest}/utils/`])
    run("rsync", ["-a", "--delete", `${src}/mixed-versions/`, `${dest}/mixed-versions/`])
    run("rsync", ["-a", "--delete", `${src}/perf/`, `${dest}/perf/`])
    const distLink = resolve(root, "tests/dist")
    rmSync(distLink, { force: true, recursive: true })
    symlinkSync(resolve(root, "dist"), distLink)
}

function inventoryExports() {
    const official = require(resolve(root, "node_modules/mobx/dist/index.js"))
    const candidate = require(resolve(root, "dist/index.js"))
    const names = Object.keys(official)
        .filter(key => official[key] !== undefined)
        .sort()
    const report = {
        pin: "mobx@7.0.0",
        count: names.length,
        exports: names.map(name => {
            const value = candidate[name]
            const officialValue = official[name]
            return {
                name,
                kind: typeof value,
                officialKind: typeof officialValue,
                arity: typeof value === "function" ? value.length : null,
                officialArity: typeof officialValue === "function" ? officialValue.length : null,
                constructible: typeof value === "function",
                implemented: value !== undefined && typeof value === typeof officialValue
            }
        })
    }
    mkdirSync(resolve(root, "compatibility"), { recursive: true })
    writeFileSync(resolve(root, "compatibility/runtime.json"), JSON.stringify(report, null, 2) + "\n")
    const missing = report.exports.filter(item => !item.implemented)
    if (missing.length) {
        console.error("Missing or mismatched exports:", missing.map(item => item.name).join(", "))
        process.exit(1)
    }
    console.log(`compatibility/runtime.json: ${report.count} exports`)
}

copyUpstreamTests()
run(process.execPath, [resolve(root, "scripts/build.mjs")])
inventoryExports()
run(process.execPath, [resolve(root, "scripts/package-smoke.mjs")])
mkdirSync(resolve(root, "reports"), { recursive: true })
run("sleep", ["12"])
run(process.execPath, ["--expose-gc", resolve(root, "scripts/bench.mjs")], {
    env: { ...process.env, NODE_ENV: "production" }
})
run(process.execPath, [resolve(root, "scripts/measure.mjs")])
run(process.execPath, [
    "--experimental-vm-modules",
    resolve(root, "node_modules/jest/bin/jest.js"),
    "--config",
    resolve(root, "jest.config.cjs"),
    "--runInBand",
    "--json",
    "--outputFile",
    resolve(root, "reports/jest.json")
])
run(process.execPath, [
    "--experimental-vm-modules",
    resolve(root, "node_modules/jest/bin/jest.js"),
    "--config",
    resolve(root, "jest.mixed.config.cjs"),
    "--runInBand"
])
run(resolve(root, "node_modules/.bin/tsc"), ["--noEmit", "-p", resolve(root, "tests/tsconfig.types.json")])
run(process.execPath, [resolve(root, "scripts/perf.mjs")], {
    env: { ...process.env, NODE_OPTIONS: `${process.env.NODE_OPTIONS ?? ""} --expose-gc`.trim() }
})
run(process.execPath, [resolve(root, "e2e/run.mjs")])
console.log("check complete")
