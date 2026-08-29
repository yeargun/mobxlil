import {
  $mobx,
  asObservableObject,
  isPlainObject,
  die,
  ownKeys,
  extendObservable,
  addHiddenProp,
  initObservable,
  assertAnnotable,
  getDescriptor,
  MakeResult,
  objectPrototype,
  recordAnnotationApplied
} from "../internal";
function makeObservable(target, annotations, options) {
  initObservable(() => {
    const adm = asObservableObject(target, options)[$mobx];
    ownKeys(annotations).forEach((key) => make_(adm, key, annotations[key]));
  });
  return target;
}
const keysSymbol = Symbol("mobx-keys");
function makeAutoObservable(target, overrides, options) {
  if (false) {
    if (!isPlainObject(target) && !isPlainObject(Object.getPrototypeOf(target))) {
      die(`'makeAutoObservable' can only be used for classes that don't have a superclass`);
    }
    if (isObservableObject(target)) {
      die(`makeAutoObservable can only be used on objects not already made observable`);
    }
  }
  if (isPlainObject(target)) {
    return extendObservable(target, target, overrides, options);
  }
  initObservable(() => {
    const adm = asObservableObject(target, options)[$mobx];
    if (!target[keysSymbol]) {
      const proto = Object.getPrototypeOf(target);
      const keys = /* @__PURE__ */ new Set([...ownKeys(target), ...ownKeys(proto)]);
      keys.delete("constructor");
      keys.delete($mobx);
      addHiddenProp(proto, keysSymbol, keys);
    }
    target[keysSymbol].forEach(
      (key) => make_(
        adm,
        key,
        // must pass "undefined" for { key: undefined }
        !overrides ? true : key in overrides ? overrides[key] : true
      )
    );
  });
  return target;
}
function make_(adm, key, annotation) {
  if (annotation === true) {
    annotation = adm.defaultAnnotation_;
  }
  if (annotation === false) {
    return;
  }
  assertAnnotable(adm, annotation, key);
  if (!(key in adm.target_)) {
    die(1, annotation.annotationType_, `${adm.name_}.${key.toString()}`);
  }
  let source = adm.target_;
  while (source && source !== objectPrototype) {
    const descriptor = getDescriptor(source, key);
    if (descriptor) {
      const outcome = annotation.make_(adm, key, descriptor, source);
      if (outcome === MakeResult.Cancel) {
        return;
      }
      if (outcome === MakeResult.Break) {
        break;
      }
    }
    source = Object.getPrototypeOf(source);
  }
  recordAnnotationApplied(adm, annotation, key);
}
export {
  makeAutoObservable,
  makeObservable
};
