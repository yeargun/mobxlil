const {
    observable,
    autorun,
    getObserverTree,
    _getGlobalState,
    configure
} = require("../../dist/index.js")

test("disposing autorun releases observers", () => {
    const a = observable.box(1)
    const d = autorun(() => a.get())
    expect(getObserverTree(a).observers.length).toBe(1)
    d()
    expect(getObserverTree(a).observers).toBeUndefined()
})

test("global state reset restores empty pending reactions", () => {
    const gs = _getGlobalState()
    expect(Array.isArray(gs.pendingReactions)).toBe(true)
    expect(gs.inBatch).toBe(0)
    configure({ isolateGlobalState: false })
    expect(_getGlobalState()).toBe(gs)
})
