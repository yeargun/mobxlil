// errors.ts
function die(error, ...args) {
  if (false) {
    let e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function") e = e.apply(null, args);
    throw new Error(`[MobX] ${e}`);
  }
  throw new Error(
    `[MobX] minified error nr: ${error}${args.length ? " " + args.map(String).join(",") : ""}. See mobx.js.org/errors`
  );
}

// core/globalstate.ts
var MOBX_GLOBALS_VERSION = 7;
var MobXGlobals = class {
  /**
   * MobXGlobals version.
   * MobX compatiblity with other versions loaded in memory as long as this version matches.
   * It indicates that the global state still stores similar information
   *
   * N.B: this version is unrelated to the package version of MobX, and is only the version of the
   * internal state storage of MobX, and can be the same across many different package versions
   */
  version = MOBX_GLOBALS_VERSION;
  /**
   * globally unique token to signal unchanged
   */
  UNCHANGED = {};
  /**
   * Currently running derivation
   */
  trackingDerivation = null;
  /**
   * Currently running reaction. This determines if we currently have a reactive context.
   * (Tracking derivation is also set for temporal tracking of computed values inside actions,
   * but trackingReaction can only be set by a form of Reaction)
   */
  trackingContext = null;
  /**
   * Each time a derivation is tracked, it is assigned a unique run-id
   */
  runId = 0;
  /**
   * 'guid' for general purpose. Will be persisted amongst resets.
   */
  mobxGuid = 0;
  /**
   * Are we in a batch block? (and how many of them)
   */
  inBatch = 0;
  /**
   * Observables that don't have observers anymore, and are about to be
   * suspended, unless somebody else accesses it in the same batch
   *
   * @type {IObservable[]}
   */
  pendingUnobservations = [];
  /**
   * List of scheduled, not yet executed, reactions.
   */
  pendingReactions = [];
  /**
   * Are we currently processing reactions?
   */
  isRunningReactions = false;
  /**
   * Is it allowed to change observables at this point?
   * In general, MobX doesn't allow that when running computations and React.render.
   * To ensure that those functions stay pure.
   */
  allowStateChanges = false;
  /**
   * Is it allowed to read observables at this point?
   * Used to hold the state needed for `observableRequiresReaction`
   */
  allowStateReads = true;
  /**
   * If strict mode is enabled, state changes are by default not allowed
   */
  enforceActions = true;
  /**
   * Spy callbacks
   */
  spyListeners = [];
  /**
   * Globally attached error handlers that react specifically to errors in reactions
   */
  globalReactionErrorHandlers = [];
  /**
   * Warn if computed values are accessed outside a reactive context
   */
  computedRequiresReaction = false;
  /**
   * (Experimental)
   * Warn if you try to create to derivation / reactive context without accessing any observable.
   */
  reactionRequiresObservable = false;
  /**
   * (Experimental)
   * Warn if observables are accessed outside a reactive context
   */
  observableRequiresReaction = false;
  /*
   * Don't catch and rethrow exceptions. This is useful for inspecting the state of
   * the stack when an exception occurs while debugging.
   */
  disableErrorBoundaries = false;
  /*
   * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
   * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
   */
  suppressReactionErrors = false;
  /**
   * False forces all object's descriptors to
   * writable: true
   * configurable: true
   */
  safeDescriptors = true;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function() {
  let global = globalThis;
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) {
    canMergeGlobalState = false;
  }
  if (global.__mobxGlobals && global.__mobxGlobals.version !== MOBX_GLOBALS_VERSION) {
    canMergeGlobalState = false;
  }
  if (!canMergeGlobalState) {
    setTimeout(() => {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) {
      global.__mobxGlobals.UNCHANGED = {};
    }
    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = new MobXGlobals();
  }
})();

// core/derivation.ts
var CaughtException = class {
  constructor(cause) {
    this.cause = cause;
  }
};
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
function untrackedStart() {
  const prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
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

// utils/utils.ts
var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var plainObjectString = Object.toString();
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  const t = typeof value;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function createInstanceofPredicate(name, theClass) {
  const propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function(x) {
    return isObject(x) && x[propName] === true;
  };
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function getFlag(flags, mask) {
  return !!(flags & mask);
}
function setFlag(flags, mask, newValue) {
  if (newValue) {
    flags |= mask;
  } else {
    flags &= ~mask;
  }
  return flags;
}

// core/atom.ts
var $mobx = Symbol("mobx administration");
var Atom = class {
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
  lowestObserverState_ = -1 /* NOT_TRACKING_ */;
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
};
var isAtom = createInstanceofPredicate("Atom", Atom);

// core/spy.ts
function spyReport(event) {
  if (true) {
    return;
  }
  if (!globalState.spyListeners.length) {
    return;
  }
  const listeners = globalState.spyListeners;
  for (let i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (true) {
    return;
  }
  const change = assign({}, event, { spyReportStart: true });
  spyReport(change);
}

// api/decoratorannotation.ts
function createDecoratorAnnotation(annotation, decorate) {
  return assign(function decoratorAnnotation(value, context) {
    if (context && typeof context.kind === "string") {
      return decorate(annotation, value, context);
    }
    if (false) {
      die(`Invalid arguments for \`${annotation.annotationType_}\``);
    }
    return void 0;
  }, annotation);
}

// api/action.ts
var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = createActionAnnotation(ACTION);
var actionBoundAnnotation = createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});
function createActionDecoratorAnnotation(annotation) {
  return createDecoratorAnnotation(annotation, decorateAction20223_);
}
function createActionFactory(autoAction2) {
  const res = function action2(arg1, arg2) {
    if (arg2 && typeof arg2.kind === "string") {
      return decorateAction20223_(
        autoAction2 ? autoActionAnnotation : actionAnnotation,
        arg1,
        arg2
      );
    }
    if (isFunction(arg1)) {
      return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction2);
    }
    if (isFunction(arg2)) {
      return createAction(arg1, arg2, autoAction2);
    }
    if (isStringish(arg1)) {
      return createActionDecoratorAnnotation(
        createActionAnnotation(autoAction2 ? AUTOACTION : ACTION, {
          name: arg1,
          autoAction: autoAction2
        })
      );
    }
    if (false) {
      die("Invalid arguments for `action`");
    }
  };
  return res;
}
var action = createActionFactory(false);
assign(action, actionAnnotation);
var autoAction = createActionFactory(true);
assign(autoAction, autoActionAnnotation);
var actionBound = createActionDecoratorAnnotation(actionBoundAnnotation);
var autoActionBound = createActionDecoratorAnnotation(autoActionBoundAnnotation);
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}

// core/reaction.ts
var Reaction = class {
  constructor(name_ = false ? "Reaction@" + getNextId2() : "Reaction", onInvalidate_, errorHandler_, requiresObservable_) {
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }
  observing_ = [];
  // nodes we are looking at. Our value depends on these nodes
  newObserving_ = [];
  dependenciesState_ = -1 /* NOT_TRACKING_ */;
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
};
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = (f) => f();
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
var isReaction = createInstanceofPredicate("Reaction", Reaction);

// utils/comparer.ts
var compareDefault = Object.is;

// core/computedvalue.ts
var ComputedValue = class {
  dependenciesState_ = -1 /* NOT_TRACKING_ */;
  observing_ = [];
  // nodes we are looking at. Our value depends on these nodes
  newObserving_ = null;
  // during tracking it's an array with new observed observers
  observers_ = /* @__PURE__ */ new Set();
  runId_ = 0;
  lastAccessedBy_ = 0;
  lowestObserverState_ = 0 /* UP_TO_DATE_ */;
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
    this.name_ = options.name || (false ? "ComputedValue@" + getNextId3() : "ComputedValue");
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
      this.dependenciesState_ === -1 /* NOT_TRACKING_ */
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
};
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

// core/observable.ts
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
  if (observable.lowestObserverState_ === 2 /* STALE_ */) {
    return;
  }
  observable.lowestObserverState_ = 2 /* STALE_ */;
  observable.observers_.forEach((d) => {
    if (d.dependenciesState_ === 0 /* UP_TO_DATE_ */) {
      d.onBecomeStale_();
    }
    d.dependenciesState_ = 2 /* STALE_ */;
  });
}
function propagateChangeConfirmed(observable) {
  if (observable.lowestObserverState_ === 2 /* STALE_ */) {
    return;
  }
  observable.lowestObserverState_ = 2 /* STALE_ */;
  observable.observers_.forEach((d) => {
    if (d.dependenciesState_ === 1 /* POSSIBLY_STALE_ */) {
      d.dependenciesState_ = 2 /* STALE_ */;
    } else if (d.dependenciesState_ === 0 /* UP_TO_DATE_ */) {
      observable.lowestObserverState_ = 0 /* UP_TO_DATE_ */;
    }
  });
}
function propagateMaybeChanged(observable) {
  if (observable.lowestObserverState_ !== 0 /* UP_TO_DATE_ */) {
    return;
  }
  observable.lowestObserverState_ = 1 /* POSSIBLY_STALE_ */;
  observable.observers_.forEach((d) => {
    if (d.dependenciesState_ === 0 /* UP_TO_DATE_ */) {
      d.dependenciesState_ = 1 /* POSSIBLY_STALE_ */;
      d.onBecomeStale_();
    }
  });
}

// core/action.ts
var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = getDescriptor(() => {
}, "name")?.configurable ?? false;
var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction2 = false, ref) {
  if (false) {
    if (!isFunction2(fn)) {
      die("`action` can only be invoked on functions");
    }
    if (typeof actionName !== "string" || !actionName) {
      die(`actions should have valid names, got: '${actionName}'`);
    }
  }
  function res() {
    return executeAction(actionName, autoAction2, fn, ref || this, arguments);
  }
  res.isMobxAction = true;
  res.toString = () => fn.toString();
  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    defineProperty(res, "name", tmpNameDescriptor);
  }
  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  const runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, scope, args) {
  const notifySpy_ = false;
  let startTime_ = 0;
  if (notifySpy_) {
    startTime_ = Date.now();
    const flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
    spyReportStart({
      type: ACTION,
      name: actionName,
      object: scope,
      arguments: flattenedArgs
    });
  }
  const prevDerivation_ = globalState.trackingDerivation;
  const runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  let prevAllowStateChanges_ = globalState.allowStateChanges;
  if (runAsAction) {
    untrackedStart();
    if (false) {
      prevAllowStateChanges_ = allowStateChangesStart(true);
    }
  }
  const prevAllowStateReads_ = globalState.allowStateReads;
  if (false) {
    allowStateReadsStart(true);
  }
  const runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_,
    prevAllowStateChanges_,
    prevAllowStateReads_,
    notifySpy_,
    startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }
  currentActionId = runInfo.parentActionId_;
  if (runInfo.error_ !== void 0) {
    globalState.suppressReactionErrors = true;
  }
  if (false) {
    allowStateChangesEnd(runInfo.prevAllowStateChanges_);
    allowStateReadsEnd(runInfo.prevAllowStateReads_);
  }
  endBatch();
  if (runInfo.runAsAction_) {
    untrackedEnd(runInfo.prevDerivation_);
  }
  if (false) {
    spyReportEnd({ time: Date.now() - runInfo.startTime_ });
  }
  globalState.suppressReactionErrors = false;
}

// types/actionannotation.ts
function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_,
    extend_
  };
}
function make_(adm, key, descriptor, source) {
  if (this.options_?.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* Cancel */ : 1 /* Break */;
  }
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* Cancel */ : 2 /* Continue */;
  }
  if (isAction(descriptor.value)) {
    return 1 /* Break */;
  }
  const actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2 /* Continue */;
}
function extend_(adm, key, descriptor, proxyTrap) {
  const actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function decorateAction20223_(annotation, mthd, context) {
  if (false) {
    assert20223DecoratorType(context, ["method", "field"]);
  }
  const { kind, name, addInitializer } = context;
  const ann = annotation;
  const _createAction = (m) => createAction(ann.options_?.name ?? name.toString(), m, ann.options_?.autoAction ?? false);
  if (kind == "field") {
    return function(initMthd) {
      let mthd2 = initMthd;
      if (!isAction(mthd2)) {
        mthd2 = _createAction(mthd2);
      }
      if (ann.options_?.bound) {
        mthd2 = mthd2.bind(this);
        mthd2.isMobxAction = true;
      }
      return mthd2;
    };
  }
  if (kind == "method") {
    if (!isAction(mthd)) {
      mthd = _createAction(mthd);
    }
    if (ann.options_?.bound) {
      addInitializer(function() {
        const self = this;
        const bound = self[name].bind(self);
        bound.isMobxAction = true;
        self[name] = bound;
      });
    }
    return mthd;
  }
  die(43, ann.annotationType_, String(name), kind);
}
function assertActionDescriptor(adm, { annotationType_ }, key, { value }) {
  if (false) {
    die(
      `Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':
'${annotationType_}' can only be used on properties with a function value.`
    );
  }
}
function createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors = globalState.safeDescriptors) {
  assertActionDescriptor(adm, annotation, key, descriptor);
  let { value } = descriptor;
  if (annotation.options_?.bound) {
    value = value.bind(adm.proxy_ ?? adm.target_);
  }
  return {
    value: createAction(
      annotation.options_?.name ?? key.toString(),
      value,
      annotation.options_?.autoAction ?? false,
      // https://github.com/mobxjs/mobx/discussions/3140
      annotation.options_?.bound ? adm.proxy_ ?? adm.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}
export {
  createActionAnnotation,
  createActionDescriptor,
  decorateAction20223_
};
