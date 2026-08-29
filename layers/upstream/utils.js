export const assign = Object.assign
export const getDescriptor = Object.getOwnPropertyDescriptor
export const defineProperty = Object.defineProperty
export const objectPrototype = Object.prototype

export const EMPTY_ARRAY = []
Object.freeze(EMPTY_ARRAY)

export const EMPTY_OBJECT = {}
Object.freeze(EMPTY_OBJECT)

const plainObjectString = Object.toString()

export function once(func) {
    let invoked = false
    return function () {
        if (invoked) {
            return
        }
        invoked = true
        return func.apply(this, arguments)
    }
}

export const noop = () => {}

export function isFunction(fn) {
    return typeof fn === "function"
}

export function isString(value) {
    return typeof value === "string"
}

export function isStringish(value) {
    const t = typeof value
    switch (t) {
        case "string":
        case "symbol":
        case "number":
            return true
    }
    return false
}

export function isObject(value) {
    return value !== null && typeof value === "object"
}

export function isPlainObject(value) {
    if (!isObject(value)) {
        return false
    }
    const proto = Object.getPrototypeOf(value)
    if (proto == null) {
        return true
    }
    const protoConstructor = hasProp(proto, "constructor") && proto.constructor
    return (
        typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString
    )
}

export function isGenerator(obj) {
    const constructor = obj == null ? void 0 : obj.constructor
    if (!constructor) {
        return false
    }
    if (
        "GeneratorFunction" === constructor.name ||
        "GeneratorFunction" === constructor.displayName
    ) {
        return true
    }
    return false
}

export function addHiddenProp(object, propName, value) {
    defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value
    })
}

export function addHiddenFinalProp(object, propName, value) {
    defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value
    })
}

export function createInstanceofPredicate(name, theClass) {
    const propName = "isMobX" + name
    theClass.prototype[propName] = true
    return function (x) {
        return isObject(x) && x[propName] === true
    }
}

export function isES6Map(thing) {
    return thing != null && Object.prototype.toString.call(thing) === "[object Map]"
}

export function isPlainES6Map(thing) {
    const mapProto = Object.getPrototypeOf(thing)
    const objectProto = Object.getPrototypeOf(mapProto)
    const nullProto = Object.getPrototypeOf(objectProto)
    return nullProto === null
}

export function isES6Set(thing) {
    return thing != null && Object.prototype.toString.call(thing) === "[object Set]"
}

export function getPlainObjectKeys(object) {
    const keys = Object.keys(object)
    const symbols = Object.getOwnPropertySymbols(object)
    if (!symbols.length) {
        return keys
    }
    return keys.concat(symbols.filter(s => objectPrototype.propertyIsEnumerable.call(object, s)))
}

export const ownKeys = Reflect.ownKeys

export function stringifyKey(key) {
    if (typeof key === "string") {
        return key
    }
    if (typeof key === "symbol") {
        return key.toString()
    }
    return new String(key).toString()
}

export function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value
}

export function hasProp(target, prop) {
    return objectPrototype.hasOwnProperty.call(target, prop)
}

export const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors

export function getFlag(flags, mask) {
    return !!(flags & mask)
}

export function setFlag(flags, mask, newValue) {
    if (newValue) {
        flags |= mask
    } else {
        flags &= ~mask
    }
    return flags
}
