import { $mobx, getAtom, isComputedValue, isObservableObject } from "../internal";
function _isComputed(value, property) {
  if (property === void 0) {
    return isComputedValue(value);
  }
  if (isObservableObject(value) === false) {
    return false;
  }
  const adm = value[$mobx];
  if (adm.lazyComputedKeys_?.has(property)) {
    return true;
  }
  if (!adm.values_.has(property)) {
    return false;
  }
  const atom = getAtom(value, property);
  return isComputedValue(atom);
}
function isComputed(value) {
  if (false) {
    return die(
      `isComputed expects only 1 argument. Use isComputedProp to inspect the observability of a property`
    );
  }
  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if (false) {
    return die(`isComputed expected a property name as second argument`);
  }
  return _isComputed(value, propName);
}
export {
  _isComputed,
  isComputed,
  isComputedProp
};
