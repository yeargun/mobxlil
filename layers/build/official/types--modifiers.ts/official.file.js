import {
  deepEqual,
  isES6Map,
  isES6Set,
  isObservable,
  isObservableArray,
  isObservableMap,
  isObservableSet,
  isObservableObject,
  isPlainObject,
  observable,
  isAction,
  autoAction,
  flow,
  isFlow,
  isGenerator
} from "../internal";
function deepEnhancer(v, _, name) {
  if (isObservable(v)) {
    return v;
  }
  if (Array.isArray(v)) {
    return observable.array(v, { name });
  }
  if (isPlainObject(v)) {
    return observable.object(v, void 0, { name });
  }
  if (isES6Map(v)) {
    return observable.map(v, { name });
  }
  if (isES6Set(v)) {
    return observable.set(v, { name });
  }
  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }
  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === void 0 || v === null) {
    return v;
  }
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) {
    return v;
  }
  if (Array.isArray(v)) {
    return observable.array(v, { name, deep: false });
  }
  if (isPlainObject(v)) {
    return observable.object(v, void 0, { name, deep: false });
  }
  if (isES6Map(v)) {
    return observable.map(v, { name, deep: false });
  }
  if (isES6Set(v)) {
    return observable.set(v, { name, deep: false });
  }
  if (false) {
    die(
      "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets"
    );
  }
}
function referenceEnhancer(newValue) {
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if (false) {
    die(`observable.struct should not be used with observable values`);
  }
  if (deepEqual(v, oldValue)) {
    return oldValue;
  }
  return v;
}
export {
  deepEnhancer,
  refStructEnhancer,
  referenceEnhancer,
  shallowEnhancer
};
