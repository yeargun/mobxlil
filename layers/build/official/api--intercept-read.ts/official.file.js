import {
  getAdministration,
  isObservableArray,
  isObservableMap,
  isObservableObject,
  isObservableValue
} from "../internal";
function interceptReads(thing, propOrHandler, handler) {
  let target;
  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (false) {
      return die(
        `InterceptReads can only be used with a specific property, not with an object in general`
      );
    }
    target = getAdministration(thing, propOrHandler);
  } else if (false) {
    return die(`Expected observable map, object or array as first array`);
  }
  if (false) {
    return die(`An intercept reader was already established`);
  }
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return () => {
    target.dehancer = void 0;
  };
}
export {
  interceptReads
};
