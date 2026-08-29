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
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var plainObjectString = Object.toString();
function once(func) {
  let invoked = false;
  return function() {
    if (invoked) {
      return;
    }
    invoked = true;
    return func.apply(this, arguments);
  };
}

// core/derivation.ts
function untrackedStart() {
  const prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}

// types/listen-utils.ts
function hasListeners(listenable) {
  return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  const listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(() => {
    const idx = listeners.indexOf(handler);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  });
}
function notifyListeners(listenable, change) {
  const prevU = untrackedStart();
  let listeners = listenable.changeListeners_;
  if (!listeners) {
    return;
  }
  listeners = listeners.slice();
  for (let i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }
  untrackedEnd(prevU);
}
export {
  hasListeners,
  notifyListeners,
  registerListener
};
