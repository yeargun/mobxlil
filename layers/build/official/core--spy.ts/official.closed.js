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

// utils/utils.ts
var assign = Object.assign;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var plainObjectString = Object.toString();

// core/spy.ts
function isSpyEnabled() {
  return false;
}
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
var END_EVENT = { type: "report-end", spyReportEnd: true };
function spyReportEnd(change) {
  if (true) {
    return;
  }
  if (change) {
    spyReport(assign({}, change, { type: "report-end", spyReportEnd: true }));
  } else {
    spyReport(END_EVENT);
  }
}
function spy(listener) {
  if (true) {
    console.warn(`[mobx.spy] Is a no-op in production builds`);
    return function() {
    };
  } else {
    globalState.spyListeners.push(listener);
    return once(() => {
      globalState.spyListeners = globalState.spyListeners.filter((l) => l !== listener);
    });
  }
}
export {
  isSpyEnabled,
  spy,
  spyReport,
  spyReportEnd,
  spyReportStart
};
