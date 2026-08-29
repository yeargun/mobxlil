import {
  $mobx,
  isAtom,
  isComputedValue,
  isObservableObject,
  isReaction
} from "../internal";
function _isObservable(value, property) {
  if (!value) {
    return false;
  }
  if (property !== void 0) {
    if (false) {
      return die(
        "isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead."
      );
    }
    if (isObservableObject(value)) {
      const adm = value[$mobx];
      return adm.values_.has(property) || !!adm.lazyComputedKeys_?.has(property) || !!adm.lazyObservableKeys_?.has(property);
    }
    return false;
  }
  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
  if (false) {
    die(
      `isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property`
    );
  }
  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if (false) {
    return die(`expected a property name as second argument`);
  }
  return _isObservable(value, propName);
}
export {
  isObservable,
  isObservableProp
};
