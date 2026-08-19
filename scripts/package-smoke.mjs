import { createRequire } from "node:module"
import { dirname, resolve } from "node:path"
import { pathToFileURL, fileURLToPath } from "node:url"
import { readFileSync, existsSync } from "node:fs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(import.meta.url)
const official = require("mobx")

const requiredFiles = [
    "dist/index.js",
    "dist/mobx.d.ts",
    "dist/mobx.mjs",
    "dist/mobx.esm.js",
    "dist/mobx.esm.development.js",
    "dist/mobx.cjs.development.js",
    "dist/mobx.cjs.production.js",
    "dist/mobx.cjs.production.min.js",
    "dist/mobx.umd.development.js",
    "dist/mobx.umd.production.js",
    "dist/mobx.umd.production.min.js"
]
for (const file of requiredFiles) {
    const path = resolve(root, file)
    if (!existsSync(path)) {
        throw new Error(`missing package file: ${file}`)
    }
}

const development = require(resolve(root, "dist/mobx.cjs.development.js"))
const production = require(resolve(root, "dist/mobx.cjs.production.min.js"))
const viaIndex = require(resolve(root, "dist/index.js"))
const esm = await import(pathToFileURL(resolve(root, "dist/mobx.mjs")).href)

const names = Object.keys(official).filter(key => official[key] !== undefined).sort()
function checkSurface(label, mod) {
    const missing = names.filter(name => mod[name] === undefined)
    if (missing.length) {
        throw new Error(`${label} missing exports: ${missing.join(", ")}`)
    }
    const arity = []
    for (const name of names) {
        if (typeof official[name] !== typeof mod[name]) {
            throw new Error(`${label} ${name} kind ${typeof mod[name]} != ${typeof official[name]}`)
        }
        if (typeof official[name] === "function" && typeof mod[name] === "function" && official[name].length !== mod[name].length) {
            arity.push(`${name}:${mod[name].length}!=${official[name].length}`)
        }
    }
    if (arity.length) {
        console.log(`${label} arity differences: ${arity.join(", ")}`)
    }
}

checkSurface("index", viaIndex)
checkSurface("development", development)
checkSurface("production", production)
checkSurface("esm", esm)

if (typeof viaIndex.ObservableMap !== "function") {
    throw new Error("ObservableMap is not constructible")
}
const map = new viaIndex.ObservableMap([["a", 1]])
if (map.get("a") !== 1) {
    throw new Error("ObservableMap construction failed")
}
const set = new viaIndex.ObservableSet([1])
if (!set.has(1)) {
    throw new Error("ObservableSet construction failed")
}

const dts = readFileSync(resolve(root, "dist/mobx.d.ts"), "utf8")
if (!dts.includes("export declare function observable") && !dts.includes("export function observable") && !dts.includes("observable")) {
    throw new Error("mobx.d.ts does not mention observable")
}

console.log(`package smoke ok: ${names.length} exports, ${requiredFiles.length} dist files`)
