// utils/utils.ts
var assign = Object.assign;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var plainObjectString = Object.toString();

// utils/iterable.ts
var maybeIteratorPrototype = globalThis.Iterator?.prototype || {};
function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return assign(Object.create(maybeIteratorPrototype), iterator);
}
function getSelf() {
  return this;
}
export {
  makeIterable
};
