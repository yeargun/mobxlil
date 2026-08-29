import {
  CaughtException,
  IDerivationState_,
  clearObserving,
  compareDefault,
  createAction,
  createInstanceofPredicate,
  endBatch,
  globalState,
  isCaughtException,
  propagateChangeConfirmed,
  propagateMaybeChanged,
  reportObserved,
  shouldCompute,
  startBatch,
  toPrimitive,
  trackDerivedFunction,
  die
} from "../internal";
import { getFlag, setFlag } from "../utils/utils";
var ComputedValueFlags = /* @__PURE__ */ ((ComputedValueFlags2) => {
  ComputedValueFlags2[ComputedValueFlags2["isComputing"] = 1] = "isComputing";
  ComputedValueFlags2[ComputedValueFlags2["isRunningSetter"] = 2] = "isRunningSetter";
  ComputedValueFlags2[ComputedValueFlags2["isBeingObserved"] = 4] = "isBeingObserved";
  ComputedValueFlags2[ComputedValueFlags2["isPendingUnobservation"] = 8] = "isPendingUnobservation";
  ComputedValueFlags2[ComputedValueFlags2["diffValue"] = 16] = "diffValue";
  return ComputedValueFlags2;
})(ComputedValueFlags || {});
class ComputedValue {
  dependenciesState_ = IDerivationState_.NOT_TRACKING_;
  observing_ = [];
  // nodes we are looking at. Our value depends on these nodes
  newObserving_ = null;
  // during tracking it's an array with new observed observers
  observers_ = /* @__PURE__ */ new Set();
  runId_ = 0;
  lastAccessedBy_ = 0;
  lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  unboundDepsCount_ = 0;
  value_ = new CaughtException(null);
  name_;
  triggeredBy_;
  flags_ = 0;
  derivation;
  // N.B: unminified as it is used by MST
  setter_;
  scope_;
  equals_;
  requiresReaction_;
  keepAlive_;
  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function used to determine if a newly produced
   * value differs from the previous value. Structural comparison can be convenient if you always
   * produce a new aggregated object and don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  constructor(options) {
    if (!options.get) {
      die(31);
    }
    this.derivation = options.get;
    this.name_ = options.name || (false ? "ComputedValue@" + getNextId() : "ComputedValue");
    if (options.set) {
      this.setter_ = createAction(
        false ? this.name_ + "-setter" : "ComputedValue-setter",
        options.set
      );
    }
    this.equals_ = options.equals || compareDefault;
    this.scope_ = options.context;
    this.requiresReaction_ = options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }
  onBecomeStale_() {
    propagateMaybeChanged(this);
  }
  onBOL;
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
  // to check for cycles
  get isComputing() {
    return getFlag(this.flags_, 1 /* isComputing */);
  }
  set isComputing(newValue) {
    this.flags_ = setFlag(this.flags_, 1 /* isComputing */, newValue);
  }
  get isRunningSetter() {
    return getFlag(this.flags_, 2 /* isRunningSetter */);
  }
  set isRunningSetter(newValue) {
    this.flags_ = setFlag(this.flags_, 2 /* isRunningSetter */, newValue);
  }
  get isBeingObserved() {
    return getFlag(this.flags_, 4 /* isBeingObserved */);
  }
  set isBeingObserved(newValue) {
    this.flags_ = setFlag(this.flags_, 4 /* isBeingObserved */, newValue);
  }
  get isPendingUnobservation() {
    return getFlag(this.flags_, 8 /* isPendingUnobservation */);
  }
  set isPendingUnobservation(newValue) {
    this.flags_ = setFlag(this.flags_, 8 /* isPendingUnobservation */, newValue);
  }
  get diffValue() {
    return getFlag(this.flags_, 16 /* diffValue */) ? 1 : 0;
  }
  set diffValue(newValue) {
    this.flags_ = setFlag(
      this.flags_,
      16 /* diffValue */,
      newValue === 1 ? true : false
    );
  }
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  get() {
    if (this.isComputing) {
      die(32, this.name_, this.derivation);
    }
    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch();
        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) {
        let prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) {
          globalState.trackingContext = this;
        }
        if (this.trackAndCompute()) {
          propagateChangeConfirmed(this);
        }
        globalState.trackingContext = prevTrackingContext;
      }
    }
    const result = this.value_;
    if (isCaughtException(result)) {
      throw result.cause;
    }
    return result;
  }
  set(value) {
    if (this.setter_) {
      if (this.isRunningSetter) {
        die(33, this.name_);
      }
      this.isRunningSetter = true;
      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else {
      die(34, this.name_);
    }
  }
  trackAndCompute() {
    const oldValue = this.value_;
    const wasSuspended = (
      /* see #1208 */
      this.dependenciesState_ === IDerivationState_.NOT_TRACKING_
    );
    const newValue = this.computeValue_(true);
    const changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
    if (changed) {
      this.value_ = newValue;
      if (false) {
        spyReport({
          observableKind: "computed",
          debugObjectName: this.name_,
          object: this.scope_,
          type: "update",
          oldValue,
          newValue
        });
      }
    }
    return changed;
  }
  computeValue_(track) {
    this.isComputing = true;
    const prev = false ? allowStateChangesStart(false) : false;
    let res;
    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }
    if (false) {
      allowStateChangesEnd(prev);
    }
    this.isComputing = false;
    return res;
  }
  suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = void 0;
    }
  }
  warnAboutUntrackedRead_() {
    if (true) {
      return;
    }
    if (typeof this.requiresReaction_ === "boolean" ? this.requiresReaction_ : globalState.computedRequiresReaction) {
      console.warn(
        `[mobx] Computed value '${this.name_}' is being read outside a reactive context. Doing a full recompute.`
      );
    }
  }
  toString() {
    return `${this.name_}[${this.derivation.toString()}]`;
  }
  valueOf() {
    return toPrimitive(this.get());
  }
  [Symbol.toPrimitive]() {
    return this.valueOf();
  }
}
const isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
export {
  ComputedValue,
  isComputedValue
};
