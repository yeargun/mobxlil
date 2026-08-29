import {
  getAtom,
  isFunction
} from "../internal";
const ON_BECOME_OBSERVED = "onBO";
const ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
  const atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  const cb = isFunction(arg3) ? arg3 : arg2;
  const listenersKey = `${hook}L`;
  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = /* @__PURE__ */ new Set([cb]);
  }
  return function() {
    const hookListeners = atom[listenersKey];
    if (hookListeners) {
      hookListeners.delete(cb);
      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}
export {
  onBecomeObserved,
  onBecomeUnobserved
};
