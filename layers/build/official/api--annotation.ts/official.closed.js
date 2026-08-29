// utils/utils.ts
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var plainObjectString = Object.toString();
function isFunction(fn) {
  return typeof fn === "function";
}

// api/annotation.ts
var MakeResult = /* @__PURE__ */ ((MakeResult2) => {
  MakeResult2[MakeResult2["Cancel"] = 0] = "Cancel";
  MakeResult2[MakeResult2["Break"] = 1] = "Break";
  MakeResult2[MakeResult2["Continue"] = 2] = "Continue";
  return MakeResult2;
})(MakeResult || {});
function isAnnotation(thing) {
  return (
    // Can be function
    thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
  );
}
function isAnnotationMapEntry(thing) {
  return typeof thing === "boolean" || isAnnotation(thing);
}
export {
  MakeResult,
  isAnnotation,
  isAnnotationMapEntry
};
