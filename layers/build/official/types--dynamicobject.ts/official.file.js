import {
  $mobx,
  die,
  isStringish,
  asObservableObject
} from "../internal";
function getAdm(target) {
  return target[$mobx];
}
const objectProxyTraps = {
  has(target, name) {
    return getAdm(target).has_(name);
  },
  get(target, name) {
    return getAdm(target).get_(name);
  },
  set(target, name, value) {
    if (!isStringish(name)) {
      return false;
    }
    return getAdm(target).set_(name, value, true) ?? true;
  },
  deleteProperty(target, name) {
    if (!isStringish(name)) {
      return false;
    }
    return getAdm(target).delete_(name, true) ?? true;
  },
  defineProperty(target, name, descriptor) {
    return getAdm(target).defineProperty_(name, descriptor) ?? true;
  },
  ownKeys(target) {
    return getAdm(target).ownKeys_();
  },
  preventExtensions(target) {
    die(13);
  }
};
function asDynamicObservableObject(target, options) {
  target = asObservableObject(target, options);
  return target[$mobx].proxy_ ??= new Proxy(target, objectProxyTraps);
}
export {
  asDynamicObservableObject
};
