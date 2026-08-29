import {
  isObservable,
  isObservableArray,
  isObservableValue,
  isObservableMap,
  isObservableSet,
  isComputedValue,
  apiOwnKeys,
  objectPrototype
} from "../internal";
function cache(map, key, value) {
  map.set(key, value);
  return value;
}
function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) {
    return source;
  }
  if (isObservableValue(source) || isComputedValue(source)) {
    return toJSHelper(source.get(), __alreadySeen);
  }
  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }
  if (isObservableArray(source)) {
    const res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach((value, idx) => {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }
  if (isObservableSet(source)) {
    const res = cache(__alreadySeen, source, /* @__PURE__ */ new Set());
    source.forEach((value) => {
      res.add(toJSHelper(value, __alreadySeen));
    });
    return res;
  }
  if (isObservableMap(source)) {
    const res = cache(__alreadySeen, source, /* @__PURE__ */ new Map());
    source.forEach((value, key) => {
      res.set(key, toJSHelper(value, __alreadySeen));
    });
    return res;
  } else {
    const res = cache(__alreadySeen, source, {});
    apiOwnKeys(source).forEach((key) => {
      if (objectPrototype.propertyIsEnumerable.call(source, key)) {
        res[key] = toJSHelper(source[key], __alreadySeen);
      }
    });
    return res;
  }
}
function toJS(source, options) {
  if (false) {
    die("toJS no longer supports options");
  }
  return toJSHelper(source, /* @__PURE__ */ new Map());
}
export {
  toJS
};
