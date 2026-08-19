const {
    observable,
    computed,
    autorun,
    reaction,
    runInAction,
    action,
    getObserverTree
} = require("../../dist/index.js")

test("dynamic dependency switching drops unused atoms", () => {
    const a = observable.box(1)
    const b = observable.box(10)
    const cond = observable.box(true)
    const values = []
    const d = autorun(() => {
        values.push(cond.get() ? a.get() : b.get())
    })
    a.set(2)
    cond.set(false)
    b.set(11)
    a.set(3)
    d()
    expect(values).toEqual([1, 2, 10, 11])
})

test("computed diamond updates once per batch", () => {
    const a = observable.box(1)
    let calls = 0
    const left = computed(() => a.get() + 1)
    const right = computed(() => a.get() * 2)
    const both = computed(() => {
        calls++
        return left.get() + right.get()
    })
    const seen = []
    const d = autorun(() => seen.push(both.get()))
    runInAction(() => {
        a.set(2)
        a.set(3)
    })
    d()
    expect(seen).toEqual([4, 10])
    expect(calls).toBe(2)
})

test("cycles throw from computed", () => {
    const x = computed(() => y.get())
    const y = computed(() => x.get())
    expect(() => x.get()).toThrow(/Cycle detected/)
})

test("exception in autorun does not poison later reactions", () => {
    const a = observable.box(0)
    const seen = []
    const d = autorun(() => {
        if (a.get() === 1) {
            throw new Error("boom")
        }
        seen.push(a.get())
    })
    expect(() => a.set(1)).not.toThrow()
    a.set(2)
    d()
    expect(seen).toEqual([0, 2])
})

test("action batches nested mutations", () => {
    const a = observable.box(0)
    const b = observable.box(0)
    const seen = []
    const d = autorun(() => seen.push(a.get() + b.get()))
    action(() => {
        a.set(1)
        b.set(2)
    })()
    d()
    expect(seen).toEqual([0, 3])
})

test("reaction equals skips effect", () => {
    const a = observable.box(1)
    let fired = 0
    const d = reaction(
        () => a.get() % 2,
        () => {
            fired++
        }
    )
    a.set(3)
    a.set(5)
    d()
    expect(fired).toBe(0)
})

test("dynamic dependencies stop observing unused boxes", () => {
    const a = observable.box(1)
    const b = observable.box(10)
    const cond = observable.box(true)
    const d = autorun(() => (cond.get() ? a.get() : b.get()))
    expect(getObserverTree(a).observers.length).toBe(1)
    expect(getObserverTree(b).observers).toBeUndefined()
    cond.set(false)
    expect(getObserverTree(a).observers).toBeUndefined()
    expect(getObserverTree(b).observers.length).toBe(1)
    d()
})
