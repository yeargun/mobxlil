import { globalState } from "../internal";
const assign = Object.assign;
const getDescriptor = Object.getOwnPropertyDescriptor;
const defineProperty = Object.defineProperty;
const objectPrototype = Object.prototype;
const EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
const EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
const plainObjectString = Object.toString();
function getNextId() {
  return ++globalState.mobxGuid;
}
function once(func) {
  let invoked = false;
  return function() {
    if (invoked) {
      return;
    }
    invoked = true;
    return func.apply(this, arguments);
  };
}
const noop = () => {
};
function isFunction(fn) {
  return typeof fn === "function";
}
function isString(value) {
  return typeof value === "string";
}
function isStringish(value) {
  const t = typeof value;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  if (proto == null) {
    return true;
  }
  const protoConstructor = hasProp(proto, "constructor") && proto.constructor;
  return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
}
function isGenerator(obj) {
  const constructor = obj?.constructor;
  if (!constructor) {
    return false;
  }
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
    return true;
  }
  return false;
}
function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value
  });
}
function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value
  });
}
function createInstanceofPredicate(name, theClass) {
  const propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function(x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing != null && Object.prototype.toString.call(thing) === "[object Map]";
}
function isPlainES6Map(thing) {
  const mapProto = Object.getPrototypeOf(thing);
  const objectProto = Object.getPrototypeOf(mapProto);
  const nullProto = Object.getPrototypeOf(objectProto);
  return nullProto === null;
}
function isES6Set(thing) {
  return thing != null && Object.prototype.toString.call(thing) === "[object Set]";
}
function getPlainObjectKeys(object) {
  const keys = Object.keys(object);
  const symbols = Object.getOwnPropertySymbols(object);
  if (!symbols.length) {
    return keys;
  }
  return [...keys, ...symbols.filter((s) => objectPrototype.propertyIsEnumerable.call(object, s))];
}
const ownKeys = Reflect.ownKeys;
function stringifyKey(key) {
  if (typeof key === "string") {
    return key;
  }
  if (typeof key === "symbol") {
    return key.toString();
  }
  return new String(key).toString();
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
}
const getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
function getFlag(flags, mask) {
  return !!(flags & mask);
}
function setFlag(flags, mask, newValue) {
  if (newValue) {
    flags |= mask;
  } else {
    flags &= ~mask;
  }
  return flags;
}
export {
  EMPTY_ARRAY,
  EMPTY_OBJECT,
  addHiddenFinalProp,
  addHiddenProp,
  assign,
  createInstanceofPredicate,
  defineProperty,
  getDescriptor,
  getFlag,
  getNextId,
  getOwnPropertyDescriptors,
  getPlainObjectKeys,
  hasProp,
  isES6Map,
  isES6Set,
  isFunction,
  isGenerator,
  isObject,
  isPlainES6Map,
  isPlainObject,
  isString,
  isStringish,
  noop,
  objectPrototype,
  once,
  ownKeys,
  setFlag,
  stringifyKey,
  toPrimitive
};
