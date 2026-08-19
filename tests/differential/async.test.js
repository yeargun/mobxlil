const { observable, flow, when, isFlowCancellationError } = require("../../dist/index.js")

test("flow yields and returns", async () => {
    const box = observable.box(1)
    const task = flow(function* () {
        const a = yield Promise.resolve(box.get())
        return a + 1
    })
    expect(await task()).toBe(2)
})

test("flow cancel rejects with FlowCancellationError", async () => {
    const task = flow(function* () {
        yield new Promise(() => {})
        return 1
    })
    const p = task()
    p.cancel()
    await expect(p).rejects.toMatchObject({ name: "FlowCancellationError" })
})

test("when promise resolves", async () => {
    const box = observable.box(false)
    const p = when(() => box.get())
    box.set(true)
    await p
})

test("when timeout rejects", async () => {
    const box = observable.box(false)
    await expect(when(() => box.get(), { timeout: 10 })).rejects.toThrow(/WHEN_TIMEOUT/)
})
