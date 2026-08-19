import { mkdirSync, writeFileSync, mkdtempSync, rmSync } from "node:fs"
import { createRequire } from "node:module"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"
import { tmpdir } from "node:os"
import { readFileSync } from "node:fs"
import { minify as terserMinify } from "terser"
import * as esbuild from "esbuild"
import { minifyLanes } from "./minify-lanes.mjs"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const lilscriptRoot = process.env.LILSCRIPT_ROOT ?? resolve(root, "..", "lilscript")
const codec = process.env.LILSCRIPT_CODEC ?? resolve(lilscriptRoot, "target/release/lilscript-codec")
const require = createRequire(import.meta.url)

function measurePath(path) {
    const result = spawnSync(codec, ["--json", path], { encoding: "utf8" })
    if (result.status !== 0) {
        throw new Error(`lilscript-codec failed for ${path}\n${result.stderr}`)
    }
    const parsed = JSON.parse(result.stdout)
    const artifact = parsed.artifacts?.[0] ?? parsed
    return {
        raw: artifact.raw,
        gzip9: artifact.gzip9 ?? artifact.gzip,
        brotli11: artifact.brotli11 ?? artifact.brotli
    }
}

function measureSource(name, source) {
    const dir = mkdtempSync(join(tmpdir(), "mobxlil-size-"))
    const file = join(dir, name)
    writeFileSync(file, source)
    try {
        return measurePath(file)
    } finally {
        rmSync(dir, { recursive: true, force: true })
    }
}

function exportNames(path) {
    const mod = require(path)
    return Object.keys(mod)
        .filter(key => mod[key] !== undefined)
        .sort()
}

const officialProd = resolve(root, "node_modules/mobx/dist/mobx.esm.production.min.js")
const officialEsmPath = resolve(root, "node_modules/mobx/dist/mobx.esm.js")
const lilEsm = resolve(root, "dist/mobx.esm.js")
const officialEsm = readFileSync(officialEsmPath, "utf8")

const official = exportNames(resolve(root, "node_modules/mobx/dist/index.js"))
const lil = exportNames(resolve(root, "dist/index.js"))
const missing = official.filter(name => !lil.includes(name))
const extra = lil.filter(name => !official.includes(name))
if (missing.length || extra.length) {
    throw new Error(
        `export surface mismatch vs mobx@7.0.0\nmissing: ${missing.join(", ")}\nextra: ${extra.join(", ")}`
    )
}

const historicTerser = await terserMinify(officialEsm, {
    compress: { passes: 3, ecma: 2022 },
    mangle: { toplevel: true },
    format: { comments: false }
})
const historicEsbuild = await esbuild.transform(officialEsm, {
    minify: true,
    target: "es2022",
    legalComments: "none"
})
const currentLanes = await minifyLanes(officialEsm, "mobx.esm.js")

const lanes = [
    {
        name: "vite-oxc",
        note: "Vite 8 Oxc of official unminified ESM — current Vite client minifier",
        fight: true,
        ...measureSource("vite-oxc.js", currentLanes.oxc)
    },
    {
        name: "vite-terser",
        note: "Terser of official unminified ESM (toplevel, 3 passes) — Vite+Terser library lane",
        fight: true,
        ...measureSource("vite-terser.js", historicTerser.code)
    },
    {
        name: "lilscript",
        note: "LilScript production ESM, same 78 exports as mobx@7.0.0",
        fight: true,
        primary: true,
        ...measurePath(lilEsm)
    },
    {
        name: "vite-esbuild",
        note: "esbuild minify of official unminified ESM",
        diagnostic: true,
        ...measureSource("vite-esbuild.js", historicEsbuild.code)
    },
    {
        name: "official-mobx-esm-production-min",
        note: "official MobX 7.0.0 production ESM — DEV-stripped at compile, not a Vite lane",
        diagnostic: true,
        ...measurePath(officialProd)
    },
    {
        name: "official-mobx-esm-unminified",
        note: "official unminified ESM — not the advertised file",
        diagnostic: true,
        ...measurePath(officialEsmPath)
    }
]

const report = {
    codec,
    pin: "mobx@7.0.0",
    exports: official.length,
    lanes
}
mkdirSync(resolve(root, "reports"), { recursive: true })
writeFileSync(resolve(root, "reports/compression.json"), JSON.stringify(report, null, 2) + "\n")

const oxc = lanes.find(lane => lane.name === "vite-oxc")
const terser = lanes.find(lane => lane.name === "vite-terser")
const lilLane = lanes.find(lane => lane.name === "lilscript")
const summary = [
    `same-code exports: ${official.length}`,
    ...lanes.map(lane =>
        `${lane.name}: raw=${lane.raw} gzip9=${lane.gzip9} brotli11=${lane.brotli11}${lane.fight ? "" : " (diagnostic)"}`
    ),
    `brotli vs vite-oxc ${lilLane.brotli11}/${oxc.brotli11} = ${(lilLane.brotli11 / oxc.brotli11).toFixed(3)}x`,
    `brotli vs vite-terser ${lilLane.brotli11}/${terser.brotli11} = ${(lilLane.brotli11 / terser.brotli11).toFixed(3)}x`
].join("\n")
writeFileSync(resolve(root, "reports/compression.txt"), summary + "\n")
console.log(summary)
if (lilLane.brotli11 > oxc.brotli11 || lilLane.brotli11 > terser.brotli11) {
    console.error("lilscript Brotli lost to a current Vite lane")
    process.exit(1)
}
