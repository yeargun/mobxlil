const { observable, isObservable, isObservableArray, keys, values, entries } = require("../../dist/index.js")

test("proxy add update delete enumeration", () => {
    const o = observable({ a: 1 })
    expect(isObservable(o)).toBe(true)
    o.b = 2
    expect(o.b).toBe(2)
    delete o.a
    expect("a" in o).toBe(false)
    expect(keys(o)).toEqual(["b"])
    expect(values(o)).toEqual([2])
    expect(entries(o)).toEqual([["b", 2]])
})

test("sparse arrays keep holes", () => {
    const arr = observable.array(new Array(3))
    expect(isObservableArray(arr)).toBe(true)
    expect(arr.length).toBe(3)
    arr[1] = 8
    expect(1 in arr).toBe(true)
    expect(0 in arr).toBe(true)
    delete arr[0]
    expect(0 in arr).toBe(false)
    expect(arr.length).toBe(3)
    expect(1 in arr).toBe(true)
})

test("symbol keys on objects", () => {
    const s = Symbol("x")
    const o = observable({ [s]: 1, a: 2 })
    expect(o[s]).toBe(1)
    o[s] = 3
    expect(o[s]).toBe(3)
})

test("map and set preserve insertion order", () => {
    const m = observable.map([
        ["z", 1],
        ["a", 2]
    ])
    expect([...m.keys()]).toEqual(["z", "a"])
    m.set("m", 3)
    expect([...m.keys()]).toEqual(["z", "a", "m"])
    const set = observable.set(["z", "a"])
    expect([...set.values()]).toEqual(["z", "a"])
})
