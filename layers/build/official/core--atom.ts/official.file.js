import {
  IDerivationState_,
  createInstanceofPredicate,
  endBatch,
  noop,
  propagateChanged,
  reportObserved,
  startBatch
} from "../internal";
import { getFlag, setFlag } from "../utils/utils";
const $mobx = Symbol("mobx administration");
var AtomFlags = /* @__PURE__ */ ((AtomFlags2) => {
  AtomFlags2[AtomFlags2["isBeingObserved"] = 1] = "isBeingObserved";
  AtomFlags2[AtomFlags2["isPendingUnobservation"] = 2] = "isPendingUnobservation";
  AtomFlags2[AtomFlags2["diffValue"] = 4] = "diffValue";
  return AtomFlags2;
})(AtomFlags || {});
class Atom {
  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  constructor(name_ = false ? "Atom@" + getNextId() : "Atom") {
    this.name_ = name_;
  }
  flags_ = 0;
  observers_ = /* @__PURE__ */ new Set();
  lastAccessedBy_ = 0;
  lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
  // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
  get isBeingObserved() {
    return getFlag(this.flags_, 1 /* isBeingObserved */);
  }
  set isBeingObserved(newValue) {
    this.flags_ = setFlag(this.flags_, 1 /* isBeingObserved */, newValue);
  }
  get isPendingUnobservation() {
    return getFlag(this.flags_, 2 /* isPendingUnobservation */);
  }
  set isPendingUnobservation(newValue) {
    this.flags_ = setFlag(this.flags_, 2 /* isPendingUnobservation */, newValue);
  }
  get diffValue() {
    return getFlag(this.flags_, 4 /* diffValue */) ? 1 : 0;
  }
  set diffValue(newValue) {
    this.flags_ = setFlag(this.flags_, 4 /* diffValue */, newValue === 1 ? true : false);
  }
  // onBecomeObservedListeners
  onBOL;
  // onBecomeUnobservedListeners
  onBUOL;
  onBO() {
    if (this.onBOL) {
      this.onBOL.forEach((listener) => listener());
    }
  }
  onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach((listener) => listener());
    }
  }
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */
  reportObserved() {
    return reportObserved(this);
  }
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */
  reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  }
  toString() {
    return this.name_;
  }
}
const isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler = noop, onBecomeUnobservedHandler = noop) {
  const atom = new Atom(name);
  if (onBecomeObservedHandler !== noop) {
    atom.onBOL = /* @__PURE__ */ new Set([onBecomeObservedHandler]);
  }
  if (onBecomeUnobservedHandler !== noop) {
    atom.onBUOL = /* @__PURE__ */ new Set([onBecomeUnobservedHandler]);
  }
  return atom;
}
export {
  $mobx,
  Atom,
  createAtom,
  isAtom
};
