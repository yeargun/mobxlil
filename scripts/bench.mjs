import { writeFileSync, mkdirSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { createRequire } from "node:module"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(import.meta.url)
const official = require("mobx")
const candidate = require(resolve(root, "dist/index.js"))

function checksum(values) {
    let h = 2166136261
    for (const value of values) {
        h ^= value | 0
        h = Math.imul(h, 16777619)
    }
    return h >>> 0
}

function benchBoxes(lib, n) {
    const { observable, autorun } = lib
    const box = observable.box(0)
    let sum = 0
    const d = autorun(() => {
        sum += box.get()
    })
    for (let i = 0; i < n; i++) box.set(i)
    d()
    return checksum([sum, n])
}

function benchDynamicDeps(lib, n) {
    const { observable, autorun } = lib
    const a = observable.box(1)
    const b = observable.box(2)
    const cond = observable.box(true)
    let last = 0
    const d = autorun(() => {
        last = cond.get() ? a.get() : b.get()
    })
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0) cond.set(!cond.get())
        else if (i % 2 === 0) a.set(i)
        else b.set(i)
    }
    d()
    return checksum([last, n])
}

function benchComputedChain(lib, n) {
    const { observable, computed, autorun } = lib
    const box = observable.box(1)
    const c1 = computed(() => box.get() + 1)
    const c2 = computed(() => c1.get() * 2)
    const c3 = computed(() => c2.get() - c1.get())
    let last = 0
    const d = autorun(() => {
        last = c3.get()
    })
    for (let i = 0; i < n; i++) box.set(i)
    d()
    return checksum([last, n])
}

function benchDiamond(lib, n) {
    const { observable, computed, autorun, runInAction } = lib
    const box = observable.box(1)
    const left = computed(() => box.get() + 1)
    const right = computed(() => box.get() * 2)
    const both = computed(() => left.get() + right.get())
    let last = 0
    const d = autorun(() => {
        last = both.get()
    })
    for (let i = 0; i < n; i++) {
        runInAction(() => {
            box.set(i)
            box.set(i + 1)
        })
    }
    d()
    return checksum([last, n])
}

function benchActions(lib, n) {
    const { observable, autorun, action } = lib
    const a = observable.box(0)
    const b = observable.box(0)
    let last = 0
    const d = autorun(() => {
        last = a.get() + b.get()
    })
    const mutate = action(() => {
        a.set(a.get() + 1)
        b.set(b.get() + 2)
    })
    for (let i = 0; i < n; i++) mutate()
    d()
    return checksum([last, n])
}

function benchReactions(lib, n) {
    const { observable, reaction } = lib
    const box = observable.box(0)
    let last = 0
    const d = reaction(
        () => box.get(),
        value => {
            last = value
        },
        { fireImmediately: true }
    )
    for (let i = 0; i < n; i++) box.set(i)
    d()
    return checksum([last, n])
}

function benchObjectProxy(lib, n) {
    const { observable, autorun } = lib
    const o = observable({ a: 0, b: 0 })
    let sum = 0
    const d = autorun(() => {
        sum += o.a + o.b
    })
    for (let i = 0; i < n; i++) {
        o.a = i
        o.b = i * 2
        if (i % 7 === 0) {
            o.c = i
            delete o.c
        }
    }
    d()
    return checksum([sum, n])
}

function benchArray(lib, n) {
    const { observable, autorun } = lib
    const arr = observable.array([0])
    let last = 0
    const d = autorun(() => {
        last = arr.length + (arr[arr.length - 1] || 0)
    })
    for (let i = 0; i < n; i++) arr.push(i)
    d()
    return checksum([last, n])
}

function benchMap(lib, n) {
    const { observable, autorun } = lib
    const m = observable.map([["a", 0]])
    let last = 0
    const d = autorun(() => {
        last = m.size + (m.get("a") || 0)
    })
    for (let i = 0; i < n; i++) m.set("a", i)
    d()
    return checksum([last, n])
}

function benchSet(lib, n) {
    const { observable, autorun } = lib
    const s = observable.set([0])
    let last = 0
    const d = autorun(() => {
        last = s.size
    })
    for (let i = 0; i < n; i++) s.add(i)
    d()
    return checksum([last, n])
}

function benchDecorators(lib, n) {
    const { observable, computed, makeObservable, autorun } = lib
    class Store {
        value = 0
        constructor() {
            makeObservable(this, {
                value: observable,
                doubled: computed
            })
        }
        get doubled() {
            return this.value * 2
        }
    }
    const store = new Store()
    let last = 0
    const d = autorun(() => {
        last = store.doubled
    })
    for (let i = 0; i < n; i++) store.value = i
    d()
    return checksum([last, n])
}

function benchFlowWhen(lib, n) {
    const { observable, flow, when } = lib
    const box = observable.box(0)
    const task = flow(function* (start) {
        let i = start
        while (i < start + 4) {
            i = yield Promise.resolve(i + 1)
        }
        return i
    })
    let acc = 0
    const jobs = []
    for (let i = 0; i < n; i++) {
        box.set(i)
        jobs.push(when(() => box.get() >= i))
        jobs.push(task(i).then(value => {
            acc += value
        }))
    }
    return Promise.all(jobs).then(() => checksum([acc, n]))
}

function retained(lib) {
    if (typeof global.gc === "function") global.gc()
    const before = process.memoryUsage().heapUsed
    const { observable, autorun } = lib
    const keep = []
    for (let i = 0; i < 2000; i++) {
        const o = observable({ n: i, nested: { x: i } })
        keep.push(
            autorun(() => o.n + o.nested.x),
            o
        )
    }
    if (typeof global.gc === "function") global.gc()
    const mid = process.memoryUsage().heapUsed
    for (const item of keep) {
        if (typeof item === "function") item()
    }
    keep.length = 0
    if (typeof global.gc === "function") global.gc()
    const after = process.memoryUsage().heapUsed
    return { retained: mid - before, released: mid - after }
}

const suites = [
    { name: "boxes", fn: benchBoxes, n: 80000 },
    { name: "dynamic-deps", fn: benchDynamicDeps, n: 32000 },
    { name: "computed-chain", fn: benchComputedChain, n: 32000 },
    { name: "computed-diamond", fn: benchDiamond, n: 16000 },
    { name: "batching-actions", fn: benchActions, n: 32000 },
    { name: "reactions", fn: benchReactions, n: 32000 },
    { name: "object-proxy", fn: benchObjectProxy, n: 32000 },
    { name: "array", fn: benchArray, n: 16000 },
    { name: "map", fn: benchMap, n: 48000 },
    { name: "set", fn: benchSet, n: 48000 },
    { name: "decorators", fn: benchDecorators, n: 16000 },
    { name: "flow-when", fn: benchFlowWhen, n: 4000, async: true }
]

function time(fn) {
    const start = process.hrtime.bigint()
    const checksumValue = fn()
    if (checksumValue && typeof checksumValue.then === "function") {
        return checksumValue.then(value => {
            const ms = Number(process.hrtime.bigint() - start) / 1e6
            return { ms, checksum: value }
        })
    }
    const ms = Number(process.hrtime.bigint() - start) / 1e6
    return { ms, checksum: checksumValue }
}

function median(values) {
    const sorted = [...values].sort((a, b) => a - b)
    return sorted[Math.floor(sorted.length / 2)]
}

const report = { node: process.version, suites: [] }
for (const suite of suites) {
    const officialSamples = []
    const candidateSamples = []
    for (let i = 0; i < 8; i++) {
        const firstOfficial = i % 2 === 0
        if (firstOfficial) {
            officialSamples.push(await Promise.resolve(time(() => suite.fn(official, suite.n))))
            candidateSamples.push(await Promise.resolve(time(() => suite.fn(candidate, suite.n))))
        } else {
            candidateSamples.push(await Promise.resolve(time(() => suite.fn(candidate, suite.n))))
            officialSamples.push(await Promise.resolve(time(() => suite.fn(official, suite.n))))
        }
    }
    const officialChecksum = officialSamples[officialSamples.length - 1].checksum
    const candidateChecksum = candidateSamples[candidateSamples.length - 1].checksum
    const officialMs = median(officialSamples.slice(2).map(sample => sample.ms))
    const candidateMs = median(candidateSamples.slice(2).map(sample => sample.ms))
    report.suites.push({
        name: suite.name,
        officialMs,
        candidateMs,
        ratio: candidateMs / officialMs,
        officialChecksum,
        candidateChecksum,
        checksumMatch: officialChecksum === candidateChecksum
    })
}

const officialMem = retained(official)
const candidateMem = retained(candidate)
report.memory = {
    official: officialMem,
    candidate: candidateMem,
    retainedRatio: candidateMem.retained / Math.max(officialMem.retained, 1)
}

mkdirSync(resolve(root, "reports"), { recursive: true })
writeFileSync(resolve(root, "reports/bench.json"), JSON.stringify(report, null, 2) + "\n")
console.log(JSON.stringify(report, null, 2))

const failed = report.suites.filter(suite => suite.ratio > 1.05 || !suite.checksumMatch)
if (failed.length) {
    console.error("throughput gate exceeded or checksum mismatch:", failed.map(suite => suite.name).join(", "))
    process.exit(1)
}
if (report.memory.retainedRatio > 1.05) {
    console.error("retained memory gate exceeded:", report.memory.retainedRatio)
    process.exit(1)
}
