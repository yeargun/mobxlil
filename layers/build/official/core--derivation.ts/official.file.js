import {
  addObserver,
  globalState,
  isComputedValue,
  removeObserver
} from "../internal";
var IDerivationState_ = /* @__PURE__ */ ((IDerivationState_2) => {
  IDerivationState_2[IDerivationState_2["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
  IDerivationState_2[IDerivationState_2["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
  IDerivationState_2[IDerivationState_2["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
  IDerivationState_2[IDerivationState_2["STALE_"] = 2] = "STALE_";
  return IDerivationState_2;
})(IDerivationState_ || {});
class CaughtException {
  constructor(cause) {
    this.cause = cause;
  }
}
function isCaughtException(e) {
  return e instanceof CaughtException;
}
function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case 0 /* UP_TO_DATE_ */:
      return false;
    case -1 /* NOT_TRACKING_ */:
    case 2 /* STALE_ */:
      return true;
    case 1 /* POSSIBLY_STALE_ */: {
      const prevAllowStateReads = false ? allowStateReadsStart(true) : true;
      const prevUntracked = untrackedStart();
      const obs = derivation.observing_, l = obs.length;
      for (let i = 0; i < l; i++) {
        const obj = obs[i];
        if (isComputedValue(obj)) {
          if (globalState.disableErrorBoundaries) {
            obj.get();
          } else {
            try {
              obj.get();
            } catch (e) {
              untrackedEnd(prevUntracked);
              if (false) {
                allowStateReadsEnd(prevAllowStateReads);
              }
              return true;
            }
          }
          if (derivation.dependenciesState_ === 2 /* STALE_ */) {
            untrackedEnd(prevUntracked);
            if (false) {
              allowStateReadsEnd(prevAllowStateReads);
            }
            return true;
          }
        }
      }
      changeDependenciesStateTo0(derivation);
      untrackedEnd(prevUntracked);
      if (false) {
        allowStateReadsEnd(prevAllowStateReads);
      }
      return false;
    }
  }
}
function isComputingDerivation() {
  return globalState.trackingDerivation !== null;
}
function checkIfStateModificationsAreAllowed(atom) {
  if (true) {
    return;
  }
  const hasObservers = atom.observers_.size > 0;
  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) {
    console.warn(
      "[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_
    );
  }
}
function checkIfStateReadsAreAllowed(observable) {
  if (false) {
    console.warn(
      `[mobx] Observable '${observable.name_}' being read outside a reactive context.`
    );
  }
}
function trackDerivedFunction(derivation, f, context) {
  const prevAllowStateReads = false ? allowStateReadsStart(true) : true;
  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(
    // Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    derivation.runId_ === 0 ? 100 : derivation.observing_.length
  );
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  const prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  let result;
  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }
  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  if (false) {
    allowStateReadsEnd(prevAllowStateReads);
  }
  return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
  if (true) {
    return;
  }
  if (derivation.observing_.length !== 0) {
    return;
  }
  if (typeof derivation.requiresObservable_ === "boolean" ? derivation.requiresObservable_ : globalState.reactionRequiresObservable) {
    console.warn(
      `[mobx] Derivation '${derivation.name_}' is created/updated without reading any observable value.`
    );
  }
}
function bindDependencies(derivation) {
  const prevObserving = derivation.observing_;
  const observing = derivation.observing_ = derivation.newObserving_;
  let lowestNewObservingDerivationState = 0 /* UP_TO_DATE_ */;
  let i0 = 0, l = derivation.unboundDepsCount_;
  for (let i = 0; i < l; i++) {
    const dep = observing[i];
    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) {
        observing[i0] = dep;
      }
      i0++;
    }
    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }
  observing.length = i0;
  derivation.newObserving_ = null;
  l = prevObserving.length;
  while (l--) {
    const dep = prevObserving[l];
    if (dep.diffValue === 0) {
      removeObserver(dep, derivation);
    }
    dep.diffValue = 0;
  }
  while (i0--) {
    const dep = observing[i0];
    if (dep.diffValue === 1) {
      dep.diffValue = 0;
      addObserver(dep, derivation);
    }
  }
  if (lowestNewObservingDerivationState !== 0 /* UP_TO_DATE_ */) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}
function clearObserving(derivation) {
  const obs = derivation.observing_;
  derivation.observing_ = [];
  let i = obs.length;
  while (i--) {
    removeObserver(obs[i], derivation);
  }
  derivation.dependenciesState_ = -1 /* NOT_TRACKING_ */;
}
function untracked(action) {
  const prev = untrackedStart();
  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  const prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  const prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === 0 /* UP_TO_DATE_ */) {
    return;
  }
  derivation.dependenciesState_ = 0 /* UP_TO_DATE_ */;
  const obs = derivation.observing_;
  let i = obs.length;
  while (i--) {
    obs[i].lowestObserverState_ = 0 /* UP_TO_DATE_ */;
  }
}
export {
  CaughtException,
  IDerivationState_,
  allowStateReadsEnd,
  allowStateReadsStart,
  changeDependenciesStateTo0,
  checkIfStateModificationsAreAllowed,
  checkIfStateReadsAreAllowed,
  clearObserving,
  isCaughtException,
  isComputingDerivation,
  shouldCompute,
  trackDerivedFunction,
  untracked,
  untrackedEnd,
  untrackedStart
};
