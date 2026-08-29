import { isAction } from "../api/action";
import {
  $mobx,
  isAtom,
  isComputedValue,
  isObservableArray,
  isObservableMap,
  isObservableObject,
  isReaction,
  isObservableSet,
  die,
  isFunction,
  untrackedStart,
  untrackedEnd,
  startBatch,
  endBatch
} from "../internal";
function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== void 0) {
        die(23);
      }
      return thing[$mobx].atom_;
    }
    if (isObservableSet(thing)) {
      return thing.atom_;
    }
    if (isObservableMap(thing)) {
      if (property === void 0) {
        return thing.keysAtom_;
      }
      const observable = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable) {
        die(25, property, getDebugName(thing));
      }
      return observable;
    }
    if (property && !thing[$mobx]) {
      thing[property];
    }
    if (isObservableObject(thing)) {
      if (!property) {
        return die(26);
      }
      const adm = thing[$mobx];
      const observable = adm.values_.get(property) ?? adm.materializeLazyComputed_(property) ?? adm.materializeLazyObservable_(property);
      if (!observable) {
        die(27, property, getDebugName(thing));
      }
      return observable;
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      return thing[$mobx];
    }
  }
  die(28);
}
function getAdministration(thing, property) {
  if (!thing) {
    die(29);
  }
  if (property !== void 0) {
    return getAdministration(getAtom(thing, property));
  }
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
    return thing;
  }
  if (isObservableMap(thing) || isObservableSet(thing)) {
    return thing;
  }
  if (thing[$mobx]) {
    return thing[$mobx];
  }
  die(24, thing);
}
function getDebugName(thing, property) {
  let named;
  if (property !== void 0) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    named = getAtom(thing);
  }
  return named.name_;
}
function initObservable(cb) {
  const derivation = untrackedStart();
  const allowStateChanges = false ? allowStateChangesStart(true) : true;
  startBatch();
  try {
    return cb();
  } finally {
    endBatch();
    if (false) {
      allowStateChangesEnd(allowStateChanges);
    }
    untrackedEnd(derivation);
  }
}
export {
  getAdministration,
  getAtom,
  getDebugName,
  initObservable
};
