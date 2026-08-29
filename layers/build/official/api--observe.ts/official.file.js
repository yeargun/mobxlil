import {
  getAdministration,
  isFunction,
  isComputedValue,
  isObservableArray,
  isObservableMap,
  isObservableObject,
  isObservableSet,
  autorun,
  registerListener,
  untrackedEnd,
  untrackedStart,
  UPDATE
} from "../internal";
function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (isFunction(cbOrFire)) {
    return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
  } else {
    return observeObservable(thing, propOrCb, cbOrFire);
  }
}
function observeObservable(thing, listener, fireImmediately) {
  const adm = getAdministration(thing);
  if (isObservableArray(thing)) {
    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: adm.proxy_,
        debugObjectName: adm.atom_.name_,
        type: "splice",
        index: 0,
        added: adm.values_.slice(),
        addedCount: adm.values_.length,
        removed: [],
        removedCount: 0
      });
    }
  } else if (isObservableMap(thing)) {
    if (false) {
      die("`observe` doesn't support fireImmediately=true in combination with maps.");
    }
  } else if (isObservableSet(thing)) {
    if (false) {
      die("`observe` doesn't support fireImmediately=true in combination with sets.");
    }
  } else if (isObservableObject(thing)) {
    if (false) {
      die("`observe` doesn't support the fire immediately property for observable objects.");
    }
  } else {
    return observeValue(adm, listener, fireImmediately);
  }
  return registerListener(adm, listener);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
  return observeValue(getAdministration(thing, property), listener, fireImmediately);
}
function observeValue(adm, listener, fireImmediately) {
  if (isComputedValue(adm)) {
    let firstTime = true;
    let prevValue = void 0;
    return autorun(() => {
      const newValue = adm.get();
      if (!firstTime || fireImmediately) {
        const prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: adm.name_,
          type: UPDATE,
          object: adm,
          newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }
      firstTime = false;
      prevValue = newValue;
    });
  }
  if (fireImmediately) {
    listener({
      observableKind: "value",
      debugObjectName: adm.name_,
      object: adm,
      type: UPDATE,
      newValue: adm.value_,
      oldValue: void 0
    });
  }
  return registerListener(adm, listener);
}
export {
  observe
};
