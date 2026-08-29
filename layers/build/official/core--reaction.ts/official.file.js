import {
  $mobx,
  IDerivationState_,
  clearObserving,
  createInstanceofPredicate,
  endBatch,
  globalState,
  isCaughtException,
  shouldCompute,
  startBatch,
  trackDerivedFunction
} from "../internal";
import { getFlag, setFlag } from "../utils/utils";
var ReactionFlags = /* @__PURE__ */ ((ReactionFlags2) => {
  ReactionFlags2[ReactionFlags2["isDisposed"] = 1] = "isDisposed";
  ReactionFlags2[ReactionFlags2["isScheduled"] = 2] = "isScheduled";
  ReactionFlags2[ReactionFlags2["isTrackPending"] = 4] = "isTrackPending";
  ReactionFlags2[ReactionFlags2["isRunning"] = 8] = "isRunning";
  ReactionFlags2[ReactionFlags2["diffValue"] = 16] = "diffValue";
  return ReactionFlags2;
})(ReactionFlags || {});
class Reaction {
  constructor(name_ = false ? "Reaction@" + getNextId() : "Reaction", onInvalidate_, errorHandler_, requiresObservable_) {
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }
  observing_ = [];
  // nodes we are looking at. Our value depends on these nodes
  newObserving_ = [];
  dependenciesState_ = IDerivationState_.NOT_TRACKING_;
  runId_ = 0;
  unboundDepsCount_ = 0;
  flags_ = 0;
  get isDisposed() {
    return getFlag(this.flags_, 1 /* isDisposed */);
  }
  set isDisposed(newValue) {
    this.flags_ = setFlag(this.flags_, 1 /* isDisposed */, newValue);
  }
  get isScheduled() {
    return getFlag(this.flags_, 2 /* isScheduled */);
  }
  set isScheduled(newValue) {
    this.flags_ = setFlag(this.flags_, 2 /* isScheduled */, newValue);
  }
  get isTrackPending() {
    return getFlag(this.flags_, 4 /* isTrackPending */);
  }
  set isTrackPending(newValue) {
    this.flags_ = setFlag(this.flags_, 4 /* isTrackPending */, newValue);
  }
  get isRunning() {
    return getFlag(this.flags_, 8 /* isRunning */);
  }
  set isRunning(newValue) {
    this.flags_ = setFlag(this.flags_, 8 /* isRunning */, newValue);
  }
  get diffValue() {
    return getFlag(this.flags_, 16 /* diffValue */) ? 1 : 0;
  }
  set diffValue(newValue) {
    this.flags_ = setFlag(this.flags_, 16 /* diffValue */, newValue === 1 ? true : false);
  }
  onBecomeStale_() {
    this.schedule_();
  }
  schedule_() {
    if (!this.isScheduled) {
      this.isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  }
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  runReaction_() {
    if (!this.isDisposed) {
      startBatch();
      this.isScheduled = false;
      const prev = globalState.trackingContext;
      globalState.trackingContext = this;
      if (shouldCompute(this)) {
        this.isTrackPending = true;
        try {
          this.onInvalidate_();
          if (false) {
            spyReport({
              name: this.name_,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }
      globalState.trackingContext = prev;
      endBatch();
    }
  }
  track(fn) {
    if (this.isDisposed) {
      return;
    }
    startBatch();
    const notify = false;
    let startTime;
    if (false) {
      startTime = Date.now();
      spyReportStart({
        name: this.name_,
        type: "reaction"
      });
    }
    this.isRunning = true;
    const prevReaction = globalState.trackingContext;
    globalState.trackingContext = this;
    const result = trackDerivedFunction(this, fn, void 0);
    globalState.trackingContext = prevReaction;
    this.isRunning = false;
    this.isTrackPending = false;
    if (this.isDisposed) {
      clearObserving(this);
    }
    if (isCaughtException(result)) {
      this.reportExceptionInDerivation_(result.cause);
    }
    if (false) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }
    endBatch();
  }
  reportExceptionInDerivation_(error) {
    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }
    if (globalState.disableErrorBoundaries) {
      throw error;
    }
    const message = false ? `[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '${this}'` : `[mobx] uncaught error in '${this}'`;
    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
    } else if (false) {
      console.warn(`[mobx] (error in reaction '${this.name_}' suppressed, fix error of causing action below)`);
    }
    if (false) {
      spyReport({
        type: "error",
        name: this.name_,
        message,
        error: "" + error
      });
    }
    globalState.globalReactionErrorHandlers.forEach((f) => f(error, this));
  }
  dispose() {
    if (!this.isDisposed) {
      this.isDisposed = true;
      if (!this.isRunning) {
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  }
  getDisposer_(abortSignal) {
    const dispose = (() => {
      this.dispose();
      abortSignal?.removeEventListener?.("abort", dispose);
    });
    abortSignal?.addEventListener?.("abort", dispose);
    dispose[$mobx] = this;
    if ("dispose" in Symbol && typeof Symbol.dispose === "symbol") {
      dispose[Symbol.dispose] = dispose;
    }
    return dispose;
  }
  toString() {
    return `Reaction[${this.name_}]`;
  }
}
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return () => {
    const idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) {
      globalState.globalReactionErrorHandlers.splice(idx, 1);
    }
  };
}
const MAX_REACTION_ITERATIONS = 100;
let reactionScheduler = (f) => f();
function runReactions() {
  if (globalState.inBatch > 0 || globalState.isRunningReactions) {
    return;
  }
  reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
  globalState.isRunningReactions = true;
  const allReactions = globalState.pendingReactions;
  let iterations = 0;
  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error(
        false ? `Reaction doesn't converge to a stable state after ${MAX_REACTION_ITERATIONS} iterations. Probably there is a cycle in the reactive function: ${allReactions[0]}` : `[mobx] cycle in reaction: ${allReactions[0]}`
      );
      allReactions.splice(0);
    }
    let remainingReactions = allReactions.splice(0);
    for (let i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }
  globalState.isRunningReactions = false;
}
const isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  const baseScheduler = reactionScheduler;
  reactionScheduler = (f) => fn(() => baseScheduler(f));
}
export {
  Reaction,
  isReaction,
  onReactionError,
  runReactions,
  setReactionScheduler
};
