const { observable, $mobx } = require("../../dist/index.js")

test("observable object descriptors stay configurable", () => {
    const o = observable({ a: 1 })
    const desc = Object.getOwnPropertyDescriptor(o, "a")
    expect(desc).toEqual(
        expect.objectContaining({
            configurable: true,
            enumerable: true
        })
    )
    expect(typeof desc.get).toBe("function")
    expect(typeof desc.set).toBe("function")
    const hidden = Object.getOwnPropertyDescriptor(o, $mobx)
    expect(hidden.enumerable).toBe(false)
    expect(hidden.configurable).toBe(true)
})

test("symbol keys keep descriptor identity", () => {
    const s = Symbol("k")
    const o = observable({ [s]: 2 })
    expect(o[s]).toBe(2)
    const desc = Object.getOwnPropertyDescriptor(o, s)
    expect(desc.enumerable).toBe(true)
    expect(desc.configurable).toBe(true)
})
