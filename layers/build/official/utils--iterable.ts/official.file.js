import { assign } from "./utils";
const maybeIteratorPrototype = globalThis.Iterator?.prototype || {};
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
