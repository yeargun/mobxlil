import { mkdirSync, writeFileSync, readFileSync, mkdtempSync, rmSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"
import { tmpdir } from "node:os"
import { minify as terserMinify } from "terser"
import * as esbuild from "esbuild"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const lilscriptRoot = process.env.LILSCRIPT_ROOT ?? resolve(root, "..", "lilscript")
const codec = process.env.LILSCRIPT_CODEC ?? resolve(lilscriptRoot, "target/release/lilscript-codec")

function measure(path) {
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

async function writeTemp(name, source) {
    const dir = mkdtempSync(join(tmpdir(), "mobxlil-size-"))
    const file = join(dir, name)
    writeFileSync(file, source)
    return { dir, file }
}

const officialEsm = readFileSync(resolve(root, "node_modules/mobx/dist/mobx.esm.js"), "utf8")
const officialProd = readFileSync(
    resolve(root, "node_modules/mobx/dist/mobx.esm.production.min.js"),
    "utf8"
)
const lilEsm = readFileSync(resolve(root, "dist/mobx.esm.js"), "utf8")

const terser = await terserMinify(officialEsm, {
    compress: { passes: 3, ecma: 2022 },
    mangle: { toplevel: true },
    format: { comments: false }
})
const esbuildOut = await esbuild.transform(officialEsm, {
    minify: true,
    target: "es2022",
    legalComments: "none"
})

const closureJar = resolve(root, "node_modules/google-closure-compiler-java/compiler.jar")
const closureDir = mkdtempSync(join(tmpdir(), "mobxlil-closure-"))
const closureIn = join(closureDir, "in.js")
const closureOut = join(closureDir, "out.js")
const closureExterns = join(closureDir, "externs.js")
writeFileSync(closureIn, officialEsm)
writeFileSync(
    closureExterns,
    "/** @externs */\n" +
        "/** @type {!Object} */\nvar process;\n" +
        "/** @type {!Object<string, string>} */\nprocess.env;\n" +
        "/** @type {string} */\nprocess.env.NODE_ENV;\n" +
        [
            "$mobx",
            "action",
            "autorun",
            "computed",
            "observable",
            "reaction",
            "when",
            "flow",
            "configure",
            "extendObservable",
            "makeObservable",
            "makeAutoObservable"
        ]
            .map(name => `var ${name};\n`)
            .join("")
)
const closure = spawnSync(
    "java",
    [
        "-jar",
        closureJar,
        "--compilation_level",
        "ADVANCED",
        "--language_in",
        "ECMASCRIPT_2021",
        "--language_out",
        "ECMASCRIPT_2021",
        "--js",
        closureIn,
        "--externs",
        closureExterns,
        "--js_output_file",
        closureOut
    ],
    { encoding: "utf8" }
)

const lanes = []
async function addLane(name, source, diagnostic = false) {
    const tmp = await writeTemp(`${name}.js`, source)
    try {
        lanes.push({ name, diagnostic, ...measure(tmp.file) })
    } finally {
        rmSync(tmp.dir, { recursive: true, force: true })
    }
}

await addLane("official-mobx-esm", officialEsm)
await addLane("official-mobx-esm-production-min", officialProd)
await addLane("vite-esbuild", esbuildOut.code)
await addLane("vite-terser", terser.code)
if (closure.status === 0 && readFileSync(closureOut, "utf8").length > 0) {
    await addLane("closure-advanced", readFileSync(closureOut, "utf8"))
} else {
    lanes.push({
        name: "closure-advanced",
        skipped: true,
        reason: closure.stderr || closure.stdout || "closure failed"
    })
}
await addLane("lilscript-open-world", lilEsm)
const lilEsbuild = await esbuild.transform(lilEsm, {
    minify: true,
    target: "es2022",
    legalComments: "none"
})
await addLane("lilscript-vite-esbuild-diagnostic", lilEsbuild.code, true)
const lilTerser = await terserMinify(lilEsm, {
    compress: { passes: 3, ecma: 2022 },
    mangle: { toplevel: true },
    format: { comments: false }
})
await addLane("lilscript-vite-terser-diagnostic", lilTerser.code, true)
rmSync(closureDir, { recursive: true, force: true })

const report = {
    codec,
    lanes
}
mkdirSync(resolve(root, "reports"), { recursive: true })
writeFileSync(resolve(root, "reports/compression.json"), JSON.stringify(report, null, 2) + "\n")
const summary = lanes
    .map(lane =>
        lane.skipped
            ? `${lane.name}: skipped (${lane.reason})`
            : `${lane.name}: raw=${lane.raw} gzip9=${lane.gzip9} brotli11=${lane.brotli11}`
    )
    .join("\n")
writeFileSync(resolve(root, "reports/compression.txt"), summary + "\n")
console.log(summary)
