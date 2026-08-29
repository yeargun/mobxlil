import {
  ComputedValue,
  IDerivationState_,
  globalState,
  runReactions,
  checkIfStateReadsAreAllowed
} from "../internal";
function hasObservers(observable) {
  return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
  return observable.observers_;
}
function addObserver(observable, node) {
  observable.observers_.add(node);
  if (observable.lowestObserverState_ > node.dependenciesState_) {
    observable.lowestObserverState_ = node.dependenciesState_;
  }
}
function removeObserver(observable, node) {
  observable.observers_.delete(node);
  if (observable.observers_.size === 0) {
    queueForUnobservation(observable);
  }
}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation === false) {
    observable.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable);
  }
}
function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions();
    const list = globalState.pendingUnobservations;
    for (let i = 0; i < list.length; i++) {
      const observable = list[i];
      observable.isPendingUnobservation = false;
      if (observable.observers_.size === 0) {
        if (observable.isBeingObserved) {
          observable.isBeingObserved = false;
          observable.onBUO();
        }
        if (observable instanceof ComputedValue) {
          observable.suspend_();
        }
      }
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  const derivation = globalState.trackingDerivation;
  if (derivation !== null) {
    if (derivation.runId_ !== observable.lastAccessedBy_) {
      observable.lastAccessedBy_ = derivation.runId_;
      derivation.newObserving_[derivation.unboundDepsCount_++] = observable;
      if (!observable.isBeingObserved && globalState.trackingContext) {
        observable.isBeingObserved = true;
        observable.onBO();
      }
    }
    return observable.isBeingObserved;
  } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }
  return false;
}
function propagateChanged(observable) {
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }
  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach((d) => {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.onBecomeStale_();
    }
    d.dependenciesState_ = IDerivationState_.STALE_;
  });
}
function propagateChangeConfirmed(observable) {
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }
  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach((d) => {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_.STALE_;
    } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  });
}
function propagateMaybeChanged(observable) {
  if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
    return;
  }
  observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable.observers_.forEach((d) => {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  });
}
export {
  addObserver,
  endBatch,
  getObservers,
  hasObservers,
  propagateChangeConfirmed,
  propagateChanged,
  propagateMaybeChanged,
  queueForUnobservation,
  removeObserver,
  reportObserved,
  startBatch
};
