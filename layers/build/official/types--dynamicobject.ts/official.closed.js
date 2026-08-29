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
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var plainObjectString = Object.toString();
var noop = () => {
};
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
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  if (proto == null) {
    return true;
  }
  const protoConstructor = hasProp(proto, "constructor") && proto.constructor;
  return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
}
function isGenerator(obj) {
  const constructor = obj?.constructor;
  if (!constructor) {
    return false;
  }
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
    return true;
  }
  return false;
}
function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value
  });
}
function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value
  });
}
function createInstanceofPredicate(name, theClass) {
  const propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function(x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing != null && Object.prototype.toString.call(thing) === "[object Map]";
}
function isPlainES6Map(thing) {
  const mapProto = Object.getPrototypeOf(thing);
  const objectProto = Object.getPrototypeOf(mapProto);
  const nullProto = Object.getPrototypeOf(objectProto);
  return nullProto === null;
}
function isES6Set(thing) {
  return thing != null && Object.prototype.toString.call(thing) === "[object Set]";
}
function getPlainObjectKeys(object) {
  const keys = Object.keys(object);
  const symbols = Object.getOwnPropertySymbols(object);
  if (!symbols.length) {
    return keys;
  }
  return [...keys, ...symbols.filter((s) => objectPrototype.propertyIsEnumerable.call(object, s))];
}
var ownKeys = Reflect.ownKeys;
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
}
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
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

// types/intercept-utils.ts
function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== void 0 && interceptable.interceptors_.length > 0;
}
function interceptChange(interceptable, change) {
  const prevU = untrackedStart();
  try {
    const interceptors = [...interceptable.interceptors_ || []];
    for (let i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type) {
        die(14);
      }
      if (!change) {
        break;
      }
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

// types/listen-utils.ts
function hasListeners(listenable) {
  return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
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

// types/observablevalue.ts
var ObservableValue = class extends Atom {
  constructor(value, enhancer_, name_ = false ? "ObservableValue@" + getNextId() : "ObservableValue", notifySpy = true, equals_ = compareDefault) {
    super(name_);
    this.enhancer_ = enhancer_;
    this.name_ = name_;
    this.equals_ = equals_;
    this.value_ = enhancer_(value, void 0, name_);
    if (false) {
      spyReport({
        type: CREATE,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: "" + this.value_?.toString()
      });
    }
  }
  hasUnreportedChange_ = false;
  interceptors_;
  changeListeners_;
  value_;
  dehancer;
  dehanceValue(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  }
  set(newValue) {
    const oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      const notifySpy = false;
      if (false) {
        spyReportStart({
          type: UPDATE,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue,
          oldValue
        });
      }
      this.setNewValue_(newValue);
      if (false) {
        spyReportEnd();
      }
    }
  }
  prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue
      });
      if (!change) {
        return globalState.UNCHANGED;
      }
      newValue = change.newValue;
    }
    newValue = this.enhancer_(newValue, this.value_, this.name_);
    return this.equals_(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  }
  setNewValue_(newValue) {
    const oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();
    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue,
        oldValue
      });
    }
  }
  get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  }
  raw() {
    return this.value_;
  }
  toJSON() {
    return this.get();
  }
  toString() {
    return `${this.name_}[${this.value_}]`;
  }
  valueOf() {
    return toPrimitive(this.get());
  }
  [Symbol.toPrimitive]() {
    return this.valueOf();
  }
};
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

// utils/iterable.ts
var maybeIteratorPrototype = globalThis.Iterator?.prototype || {};
function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return assign(Object.create(maybeIteratorPrototype), iterator);
}
function getSelf() {
  return this;
}

// api/transaction.ts
function transaction(action2, thisArg = void 0) {
  startBatch();
  try {
    return action2.apply(thisArg);
  } finally {
    endBatch();
  }
}

// types/observableset.ts
var ObservableSetMarker = {};
var ObservableSet = class {
  constructor(initialData, enhancer = deepEnhancer, name_ = false ? "ObservableSet@" + getNextId2() : "ObservableSet") {
    this.name_ = name_;
    this.enhancer_ = (newV, oldV) => enhancer(newV, oldV, name_);
    initObservable(() => {
      this.atom_ = createAtom(this.name_);
      if (initialData) {
        this.replace(initialData);
      }
    });
  }
  [$mobx] = ObservableSetMarker;
  data_ = /* @__PURE__ */ new Set();
  atom_;
  changeListeners_;
  interceptors_;
  dehancer;
  enhancer_;
  dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  }
  clear() {
    transaction(() => {
      untracked(() => {
        for (const value of this.data_.values()) {
          this.delete(value);
        }
      });
    });
  }
  forEach(callbackFn, thisArg) {
    for (const value of this) {
      callbackFn.call(thisArg, value, value, this);
    }
  }
  get size() {
    this.atom_.reportObserved();
    return this.data_.size;
  }
  add(value) {
    checkIfStateModificationsAreAllowed(this.atom_);
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) {
        return this;
      }
      value = change.newValue;
    }
    if (!this.has(value)) {
      transaction(() => {
        this.data_.add(this.enhancer_(value, void 0));
        this.atom_.reportChanged();
      });
      const notifySpy = false;
      const notify = hasListeners(this);
      const change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;
      if (notifySpy && false) {
        spyReportStart(change);
      }
      if (notify) {
        notifyListeners(this, change);
      }
      if (notifySpy && false) {
        spyReportEnd();
      }
    }
    return this;
  }
  delete(value) {
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change) {
        return false;
      }
    }
    if (this.has(value)) {
      const notifySpy = false;
      const notify = hasListeners(this);
      const change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;
      if (notifySpy && false) {
        spyReportStart(change);
      }
      transaction(() => {
        this.atom_.reportChanged();
        this.data_.delete(value);
      });
      if (notify) {
        notifyListeners(this, change);
      }
      if (notifySpy && false) {
        spyReportEnd();
      }
      return true;
    }
    return false;
  }
  has(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  }
  entries() {
    const values = this.values();
    return makeIterableForSet({
      next() {
        const { value, done } = values.next();
        return !done ? { value: [value, value], done } : { value: void 0, done };
      }
    });
  }
  keys() {
    return this.values();
  }
  values() {
    this.atom_.reportObserved();
    const self = this;
    const values = this.data_.values();
    return makeIterableForSet({
      next() {
        const { value, done } = values.next();
        return !done ? { value: self.dehanceValue_(value), done } : { value: void 0, done };
      }
    });
  }
  intersection(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.intersection(this);
    } else {
      const dehancedSet = new Set(this);
      return dehancedSet.intersection(otherSet);
    }
  }
  union(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.union(this);
    } else {
      const dehancedSet = new Set(this);
      return dehancedSet.union(otherSet);
    }
  }
  difference(otherSet) {
    return new Set(this).difference(otherSet);
  }
  symmetricDifference(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.symmetricDifference(this);
    } else {
      const dehancedSet = new Set(this);
      return dehancedSet.symmetricDifference(otherSet);
    }
  }
  isSubsetOf(otherSet) {
    return new Set(this).isSubsetOf(otherSet);
  }
  isSupersetOf(otherSet) {
    return new Set(this).isSupersetOf(otherSet);
  }
  isDisjointFrom(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.isDisjointFrom(this);
    } else {
      const dehancedSet = new Set(this);
      return dehancedSet.isDisjointFrom(otherSet);
    }
  }
  replace(other) {
    if (isObservableSet(other)) {
      other = new Set(other);
    }
    transaction(() => {
      if (Array.isArray(other)) {
        this.clear();
        other.forEach((value) => this.add(value));
      } else if (isES6Set(other)) {
        this.clear();
        other.forEach((value) => this.add(value));
      } else if (other !== null && other !== void 0) {
        die(41, other);
      }
    });
    return this;
  }
  toJSON() {
    return Array.from(this);
  }
  toString() {
    return "[object ObservableSet]";
  }
  [Symbol.iterator]() {
    return this.values();
  }
  get [Symbol.toStringTag]() {
    return "Set";
  }
};
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);
function makeIterableForSet(iterator) {
  iterator[Symbol.toStringTag] = "SetIterator";
  return makeIterable(iterator);
}

// api/extendobservable.ts
function extendObservable(target, properties, annotations, options) {
  if (false) {
    if (arguments.length > 4) {
      die("'extendObservable' expected 2-4 arguments");
    }
    if (typeof target !== "object") {
      die("'extendObservable' expects an object as first argument");
    }
    if (isObservableMap(target)) {
      die("'extendObservable' should not be used on maps, use map.merge instead");
    }
    if (!isPlainObject2(properties)) {
      die(`'extendObservable' only accepts plain objects as second argument`);
    }
    if (isObservable(properties) || isObservable(annotations)) {
      die(`Extending an object with another observable (object) is not supported`);
    }
  }
  const descriptors = getOwnPropertyDescriptors(properties);
  initObservable(() => {
    const adm = asObservableObject(target, options)[$mobx];
    ownKeys(descriptors).forEach((key) => {
      adm.extend_(
        key,
        descriptors[key],
        // must pass "undefined" for { key: undefined }
        !annotations ? true : key in annotations ? annotations[key] : true
      );
    });
  });
  return target;
}

// types/observableannotation.ts
function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_2,
    extend_: extend_2
  };
}
function make_2(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 /* Cancel */ : 1 /* Break */;
}
function extend_2(adm, key, descriptor, proxyTrap) {
  assertObservableDescriptor(adm, this, key, descriptor);
  return adm.defineObservableProperty_(
    key,
    descriptor.value,
    this.options_?.enhancer_ ?? deepEnhancer,
    proxyTrap
  );
}
function decorateObservable20223_(annotation, desc, context) {
  if (false) {
    if (context.kind === "field") {
      throw die(
        `Please use \`@observable accessor ${String(
          context.name
        )}\` instead of \`@observable ${String(context.name)}\``
      );
    }
    assert20223DecoratorType(context, ["accessor"]);
  }
  const ann = annotation;
  const { kind, name } = context;
  if (kind !== "accessor") {
    return;
  }
  function registerLazy(target, value) {
    const adm = asObservableObject(target)[$mobx];
    (adm.lazyObservableKeys_ ??= /* @__PURE__ */ new Map()).set(
      name,
      () => new ObservableValue(
        value,
        ann.options_?.enhancer_ ?? deepEnhancer,
        false ? `${adm.name_}.${name.toString()}` : `ObservableObject.${name.toString()}`,
        false
      )
    );
    return adm;
  }
  return {
    get() {
      const adm = this[$mobx] ?? registerLazy(this, desc.get.call(this));
      return adm.getObservablePropValue_(name);
    },
    set(value) {
      const adm = this[$mobx] ?? registerLazy(this, value);
      return adm.setObservablePropValue_(name, value);
    },
    init(value) {
      registerLazy(this, value);
      return value;
    }
  };
}
function assertObservableDescriptor(adm, { annotationType_ }, key, descriptor) {
  if (false) {
    die(
      `Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':
'${annotationType_}' cannot be used on getter/setter properties`
    );
  }
}

// types/flowannotation.ts
function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_3,
    extend_: extend_3
  };
}
function make_3(adm, key, descriptor, source) {
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 /* Cancel */ : 2 /* Continue */;
  }
  if (this.options_?.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
    if (this.extend_(adm, key, descriptor, false) === null) {
      return 0 /* Cancel */;
    }
  }
  if (isFlow(descriptor.value)) {
    return 1 /* Break */;
  }
  const flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2 /* Continue */;
}
function extend_3(adm, key, descriptor, proxyTrap) {
  const flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, this.options_?.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function decorateFlow20223_(annotation, mthd, context) {
  if (false) {
    assert20223DecoratorType(context, ["method"]);
  }
  const { name, addInitializer } = context;
  if (!isFlow(mthd)) {
    mthd = flow(mthd);
  }
  if (annotation.options_?.bound) {
    addInitializer(function() {
      const self = this;
      const bound = self[name].bind(self);
      bound.isMobXFlow = true;
      self[name] = bound;
    });
  }
  return mthd;
}
function assertFlowDescriptor(adm, { annotationType_ }, key, { value }) {
  if (false) {
    die(
      `Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':
'${annotationType_}' can only be used on properties with a generator function value.`
    );
  }
}
function createFlowDescriptor(adm, annotation, key, descriptor, bound, safeDescriptors = globalState.safeDescriptors) {
  assertFlowDescriptor(adm, annotation, key, descriptor);
  let { value } = descriptor;
  if (!isFlow(value)) {
    value = flow(value);
  }
  if (bound) {
    value = value.bind(adm.proxy_ ?? adm.target_);
    value.isMobXFlow = true;
  }
  return {
    value,
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

// api/flow.ts
var FlowCancellationError = class extends Error {
  constructor() {
    super("FLOW_CANCELLED");
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = "FlowCancellationError";
  }
  toString() {
    return `Error: ${this.message}`;
  }
};
function createFlowDecoratorAnnotation(annotation) {
  return createDecoratorAnnotation(annotation, decorateFlow20223_);
}
var flowAnnotation = createFlowAnnotation("flow");
var flowBoundAnnotation = createFlowAnnotation("flow.bound", { bound: true });
var flow = assign(
  function flow2(arg1, arg2) {
    if (arg2 && typeof arg2.kind === "string") {
      return decorateFlow20223_(flowAnnotation, arg1, arg2);
    }
    if (false) {
      die(`Flow expects single argument with generator function`);
    }
    const generator = arg1;
    const name = generator.name || (false ? "<unnamed flow>" : "flow");
    const res = function() {
      const ctx = this;
      const args = arguments;
      const runId = false ? ++generatorId : 0;
      const gen = action(
        false ? `${name} - runid: ${runId} - init` : name,
        generator
      ).apply(ctx, args);
      let rejector;
      let pendingPromise = void 0;
      const promise = new Promise(function(resolve, reject) {
        let stepId = 0;
        rejector = reject;
        function onFulfilled(res2) {
          pendingPromise = void 0;
          let ret;
          try {
            ret = action(
              false ? `${name} - runid: ${runId} - yield ${stepId++}` : name,
              gen.next
            ).call(gen, res2);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }
        function onRejected(err) {
          pendingPromise = void 0;
          let ret;
          try {
            ret = action(
              false ? `${name} - runid: ${runId} - yield ${stepId++}` : name,
              gen.throw
            ).call(gen, err);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }
        function next(ret) {
          if (isFunction(ret?.then)) {
            ret.then(next, reject);
            return;
          }
          if (ret.done) {
            return resolve(ret.value);
          }
          pendingPromise = Promise.resolve(ret.value);
          return pendingPromise.then(onFulfilled, onRejected);
        }
        onFulfilled(void 0);
      });
      const cancelActionName = false ? `${name} - runid: ${runId} - cancel` : name;
      promise.cancel = action(cancelActionName, function() {
        try {
          if (pendingPromise) {
            cancelPromise(pendingPromise);
          }
          const res2 = gen.return(void 0);
          const yieldedPromise = Promise.resolve(res2.value);
          yieldedPromise.then(noop, noop);
          cancelPromise(yieldedPromise);
          rejector(new FlowCancellationError());
        } catch (e) {
          rejector(e);
        }
      });
      return promise;
    };
    res.isMobXFlow = true;
    return res;
  },
  flowAnnotation
);
var flowBound = createFlowDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(promise) {
  if (isFunction(promise.cancel)) {
    promise.cancel();
  }
}
function isFlow(fn) {
  return fn?.isMobXFlow === true;
}

// types/computedannotation.ts
function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_4,
    extend_: extend_4
  };
}
function make_4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 /* Cancel */ : 1 /* Break */;
}
function extend_4(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(
    key,
    assign({}, this.options_, {
      get: descriptor.get,
      set: descriptor.set
    }),
    proxyTrap
  );
}
function decorateComputed20223_(annotation, get, context) {
  if (false) {
    assert20223DecoratorType(context, ["getter"]);
  }
  const ann = annotation;
  const { name: key, addInitializer } = context;
  let computedValues;
  function createComputedValue(target, adm) {
    const options = assign({}, ann.options_, {
      get,
      context: target
    });
    options.name ||= false ? `${adm.name_}.${key.toString()}` : `ObservableObject.${key.toString()}`;
    return new ComputedValue(options);
  }
  addInitializer(function() {
    const adm = asObservableObject(this)[$mobx];
    const target = this;
    const observable2 = adm.values_.get(key);
    if (observable2 instanceof ComputedValue && observable2.derivation !== get) {
      adm.values_.delete(key);
    }
    ;
    (adm.lazyComputedKeys_ ??= /* @__PURE__ */ new Map()).set(key, () => createComputedValue(target, adm));
  });
  return function() {
    const adm = this[$mobx];
    const observable2 = adm.values_.get(key);
    if (observable2 instanceof ComputedValue && observable2.derivation !== get) {
      let computed3 = computedValues?.get(this);
      if (!computed3) {
        computed3 = createComputedValue(this, adm);
        (computedValues ??= /* @__PURE__ */ new WeakMap()).set(this, computed3);
      }
      return computed3.get();
    }
    return adm.getObservablePropValue_(key);
  };
}
function assertComputedDescriptor(adm, { annotationType_ }, key, { get }) {
  if (false) {
    die(
      `Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':
'${annotationType_}' can only be used on getter(+setter) properties.`
    );
  }
}

// api/computed.ts
var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
function createComputedDecoratorAnnotation(annotation) {
  return createDecoratorAnnotation(annotation, decorateComputed20223_);
}
var computedAnnotation = createComputedAnnotation(COMPUTED);
var computedStructAnnotation = createComputedAnnotation(COMPUTED_STRUCT, {
  equals: compareStructural
});
var computedStruct = createComputedDecoratorAnnotation(computedStructAnnotation);
var computed = function computed2(arg1, arg2) {
  if (arg2 && typeof arg2.kind === "string") {
    return decorateComputed20223_(computedAnnotation, arg1, arg2);
  }
  if (isPlainObject(arg1)) {
    return createComputedDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  }
  if (false) {
    if (!isFunction5(arg1)) {
      die("First argument to `computed` should be an expression.");
    }
    if (isFunction5(arg2)) {
      die(
        "A setter as second argument is no longer supported, use `{ set: fn }` option instead"
      );
    }
  }
  const opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name ||= arg1.name || "";
  return new ComputedValue(opts);
};
assign(computed, computedAnnotation);

// types/autoannotation.ts
var AUTO = "true";
var autoAnnotation = createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_5,
    extend_: extend_5
  };
}
function make_5(adm, key, descriptor, source) {
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  }
  if (descriptor.set) {
    const set = isAction(descriptor.set) ? descriptor.set : createAction(key.toString(), descriptor.set);
    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set
      }) === null ? 0 /* Cancel */ : 2 /* Continue */;
    }
    defineProperty(source, key, {
      configurable: true,
      set
    });
    return 2 /* Continue */;
  }
  if (source !== adm.target_ && typeof descriptor.value === "function") {
    if (isGenerator(descriptor.value)) {
      const flowAnnotation2 = this.options_?.autoBind ? flowBound : flow;
      return flowAnnotation2.make_(adm, key, descriptor, source);
    }
    const actionAnnotation2 = this.options_?.autoBind ? autoActionBound : autoAction;
    return actionAnnotation2.make_(adm, key, descriptor, source);
  }
  let observableAnnotation2 = this.options_?.deep === false ? observableRef : observable;
  if (typeof descriptor.value === "function" && this.options_?.autoBind) {
    descriptor.value = descriptor.value.bind(adm.proxy_ ?? adm.target_);
  }
  return observableAnnotation2.make_(adm, key, descriptor, source);
}
function extend_5(adm, key, descriptor, proxyTrap) {
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  }
  if (descriptor.set) {
    return adm.defineProperty_(
      key,
      {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: createAction(key.toString(), descriptor.set)
      },
      proxyTrap
    );
  }
  if (typeof descriptor.value === "function" && this.options_?.autoBind) {
    descriptor.value = descriptor.value.bind(adm.proxy_ ?? adm.target_);
  }
  let observableAnnotation2 = this.options_?.deep === false ? observableRef : observable;
  return observableAnnotation2.extend_(adm, key, descriptor, proxyTrap);
}

// api/observable.ts
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct";
var defaultCreateObservableOptions = {
  deep: true,
  name: void 0,
  defaultDecorator: void 0
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = createObservableAnnotation(OBSERVABLE_REF, {
  enhancer_: referenceEnhancer
});
var observableShallowAnnotation = createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer_: shallowEnhancer
});
var observableStructAnnotation = createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer_: refStructEnhancer
});
function createObservableDecoratorAnnotation(annotation) {
  return createDecoratorAnnotation(annotation, decorateObservable20223_);
}
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  return options ? options.defaultDecorator ?? createAutoAnnotation(options) : void 0;
}
function getEnhancerFromAnnotation(annotation) {
  return !annotation ? deepEnhancer : annotation.options_?.enhancer_ ?? deepEnhancer;
}
function createObservable(v, arg2, arg3) {
  if (arg2 && typeof arg2.kind === "string") {
    return decorateObservable20223_(observableAnnotation, v, arg2);
  }
  if (isObservable(v)) {
    return v;
  }
  if (isPlainObject(v)) {
    return observable.object(v, arg2, arg3);
  }
  if (Array.isArray(v)) {
    return observable.array(v, arg2);
  }
  if (isES6Map(v)) {
    return observable.map(v, arg2);
  }
  if (isES6Set(v)) {
    return observable.set(v, arg2);
  }
  if (typeof v === "object" && v !== null) {
    return v;
  }
  return observable.box(v, arg2);
}
var observableFactories = {
  box(value, options) {
    const o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array(initialValues, options) {
    const o = asCreateObservableOptions(options);
    return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map(initialValues, options) {
    const o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set(initialValues, options) {
    const o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object(props, annotations, options) {
    return initObservable(
      () => extendObservable(asDynamicObservableObject({}, options), props, annotations)
    );
  }
};
var observableRef = createObservableDecoratorAnnotation(observableRefAnnotation);
var observableShallow = createObservableDecoratorAnnotation(observableShallowAnnotation);
var observableDeep = createObservableDecoratorAnnotation(observableAnnotation);
var observableStruct = createObservableDecoratorAnnotation(observableStructAnnotation);
var observable = assign(
  createObservable,
  observableAnnotation,
  observableFactories
);

// types/observableobject.ts
var descriptorCache = /* @__PURE__ */ Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration4 = class {
  constructor(target_, values_ = /* @__PURE__ */ new Map(), name_, defaultAnnotation_ = autoAnnotation) {
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom(false ? `${this.name_}.keys` : "ObservableObject.keys");
    this.isPlainObject_ = isPlainObject(this.target_);
    if (false) {
      die(`defaultAnnotation must be valid annotation`);
    }
    if (false) {
      this.appliedAnnotations_ = {};
    }
  }
  keysAtom_;
  changeListeners_;
  interceptors_;
  proxy_;
  isPlainObject_;
  appliedAnnotations_;
  pendingKeys_;
  lazyComputedKeys_;
  lazyObservableKeys_;
  getObservablePropValue_(key) {
    const observable2 = this.values_.get(key) ?? this.materializeLazyComputed_(key) ?? this.materializeLazyObservable_(key);
    return observable2.get();
  }
  materializeLazyComputed_(key) {
    const factory = this.lazyComputedKeys_?.get(key);
    if (!factory) {
      return void 0;
    }
    this.lazyComputedKeys_.delete(key);
    if (this.lazyComputedKeys_.size === 0) {
      this.lazyComputedKeys_ = void 0;
    }
    const computed3 = factory();
    this.values_.set(key, computed3);
    return computed3;
  }
  materializeLazyObservable_(key) {
    const factory = this.lazyObservableKeys_?.get(key);
    if (!factory) {
      return void 0;
    }
    this.lazyObservableKeys_.delete(key);
    if (this.lazyObservableKeys_.size === 0) {
      this.lazyObservableKeys_ = void 0;
    }
    const observable2 = factory();
    this.values_.set(key, observable2);
    return observable2;
  }
  setObservablePropValue_(key, newValue) {
    const observable2 = this.values_.get(key) ?? this.materializeLazyComputed_(key) ?? this.materializeLazyObservable_(key);
    if (observable2 instanceof ComputedValue) {
      observable2.set(newValue);
      return true;
    }
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue
      });
      if (!change) {
        return null;
      }
      newValue = change.newValue;
    }
    newValue = observable2.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      const notify = hasListeners(this);
      const notifySpy = false;
      const change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable2.value_,
        name: key,
        newValue
      } : null;
      if (false) {
        spyReportStart(change);
      }
      ;
      observable2.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, change);
      }
      if (false) {
        spyReportEnd();
      }
    }
    return true;
  }
  get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      this.has_(key);
    }
    return this.target_[key];
  }
  /**
   * @param {PropertyKey} key
   * @param {any} value
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  set_(key, value, proxyTrap = false) {
    if (hasProp(this.target_, key)) {
      if (this.values_.has(key)) {
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        return Reflect.set(this.target_, key, value);
      } else {
        this.target_[key] = value;
        return true;
      }
    } else {
      return this.extend_(
        key,
        { value, enumerable: true, writable: true, configurable: true },
        this.defaultAnnotation_,
        proxyTrap
      );
    }
  }
  // Trap for "in"
  has_(key) {
    if (!globalState.trackingDerivation) {
      return key in this.target_;
    }
    this.pendingKeys_ ||= /* @__PURE__ */ new Map();
    let entry = this.pendingKeys_.get(key);
    if (!entry) {
      entry = new ObservableValue(
        key in this.target_,
        referenceEnhancer,
        false ? `${this.name_}.${stringifyKey(key)}?` : "ObservableObject.key?",
        false
      );
      this.pendingKeys_.set(key, entry);
    }
    return entry.get();
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  extend_(key, descriptor, annotation, proxyTrap = false) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }
    assertAnnotable(this, annotation, key);
    const outcome = annotation.extend_(this, key, descriptor, proxyTrap);
    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }
    return outcome;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  defineProperty_(key, descriptor, proxyTrap = false) {
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      const deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        const change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change) {
          return null;
        }
        const { newValue } = change;
        if (descriptor.value !== newValue) {
          descriptor = assign({}, descriptor, {
            value: newValue
          });
        }
      }
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }
    return true;
  }
  // If original descriptor becomes relevant, move this to annotation directly
  defineObservableProperty_(key, value, enhancer, proxyTrap = false) {
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      const deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        const change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change) {
          return null;
        }
        value = change.newValue;
      }
      const cachedDescriptor = getCachedObservablePropDescriptor(key);
      const descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      const observable2 = new ObservableValue(
        value,
        enhancer,
        false ? `${this.name_}.${key.toString()}` : "ObservableObject.key",
        false
      );
      this.values_.set(key, observable2);
      this.notifyPropertyAddition_(key, observable2.value_);
    } finally {
      endBatch();
    }
    return true;
  }
  // If original descriptor becomes relevant, move this to annotation directly
  defineComputedProperty_(key, options, proxyTrap = false) {
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      const deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        const change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: void 0
        });
        if (!change) {
          return null;
        }
      }
      options.name ||= false ? `${this.name_}.${key.toString()}` : "ObservableObject.key";
      options.context = this.proxy_ || this.target_;
      const cachedDescriptor = getCachedObservablePropDescriptor(key);
      const descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.values_.set(key, new ComputedValue(options));
      this.notifyPropertyAddition_(key, void 0);
    } finally {
      endBatch();
    }
    return true;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  delete_(key, proxyTrap = false) {
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (!hasProp(this.target_, key)) {
      return true;
    }
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      });
      if (!change) {
        return null;
      }
    }
    try {
      startBatch();
      const notify = hasListeners(this);
      const notifySpy = false;
      const observable2 = this.values_.get(key);
      let value = void 0;
      if (!observable2 && (notify || notifySpy)) {
        value = getDescriptor(this.target_, key)?.value;
      }
      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      }
      if (false) {
        delete this.appliedAnnotations_[key];
      }
      if (observable2) {
        this.values_.delete(key);
        if (observable2 instanceof ObservableValue) {
          value = observable2.value_;
        }
        propagateChanged(observable2);
      }
      this.keysAtom_.reportChanged();
      this.pendingKeys_?.get(key)?.set(key in this.target_);
      if (notify || notifySpy) {
        const change = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if (false) {
          spyReportStart(change);
        }
        if (notify) {
          notifyListeners(this, change);
        }
        if (false) {
          spyReportEnd();
        }
      }
    } finally {
      endBatch();
    }
    return true;
  }
  notifyPropertyAddition_(key, value) {
    const notify = hasListeners(this);
    const notifySpy = false;
    if (notify || notifySpy) {
      const change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if (false) {
        spyReportStart(change);
      }
      if (notify) {
        notifyListeners(this, change);
      }
      if (false) {
        spyReportEnd();
      }
    }
    this.pendingKeys_?.get(key)?.set(true);
    this.keysAtom_.reportChanged();
  }
  ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  }
  keys_() {
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  }
};
function asObservableObject(target, options) {
  if (false) {
    die(`Options can't be provided for already observable objects.`);
  }
  if (hasProp(target, $mobx)) {
    if (false) {
      die(
        `Cannot convert '${getDebugName(target)}' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`
      );
    }
    return target;
  }
  if (false) {
    die("Cannot make the designated object observable; it is not extensible");
  }
  const name = options?.name ?? (false ? `${isPlainObject(target) ? "ObservableObject" : target.constructor.name}@${getNextId3()}` : "ObservableObject");
  const adm = new ObservableObjectAdministration4(
    target,
    /* @__PURE__ */ new Map(),
    String(name),
    getAnnotationFromOptions(options)
  );
  addHiddenProp(target, $mobx, adm);
  return target;
}
var isObservableObjectAdministration = createInstanceofPredicate(
  "ObservableObjectAdministration",
  ObservableObjectAdministration4
);
function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}
function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }
  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  if (false) {
    adm.appliedAnnotations_[key] = annotation;
  }
}
function assertAnnotable(adm, annotation, key) {
  if (false) {
    die(`Cannot annotate '${adm.name_}.${key.toString()}': Invalid annotation.`);
  }
  if (false) {
    const fieldName = `${adm.name_}.${key.toString()}`;
    const currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
    const requestedAnnotationType = annotation.annotationType_;
    die(
      `Cannot apply '${requestedAnnotationType}' to '${fieldName}':
The field is already annotated with '${currentAnnotationType}'.
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`
    );
  }
}

// core/reaction.ts
var Reaction = class {
  constructor(name_ = false ? "Reaction@" + getNextId4() : "Reaction", onInvalidate_, errorHandler_, requiresObservable_) {
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

// api/isobservable.ts
function _isObservable(value, property) {
  if (!value) {
    return false;
  }
  if (property !== void 0) {
    if (false) {
      return die(
        "isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead."
      );
    }
    if (isObservableObject(value)) {
      const adm = value[$mobx];
      return adm.values_.has(property) || !!adm.lazyComputedKeys_?.has(property) || !!adm.lazyObservableKeys_?.has(property);
    }
    return false;
  }
  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
  if (false) {
    die(
      `isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property`
    );
  }
  return _isObservable(value);
}

// types/modifiers.ts
function deepEnhancer(v, _, name) {
  if (isObservable(v)) {
    return v;
  }
  if (Array.isArray(v)) {
    return observable.array(v, { name });
  }
  if (isPlainObject(v)) {
    return observable.object(v, void 0, { name });
  }
  if (isES6Map(v)) {
    return observable.map(v, { name });
  }
  if (isES6Set(v)) {
    return observable.set(v, { name });
  }
  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }
  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === void 0 || v === null) {
    return v;
  }
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) {
    return v;
  }
  if (Array.isArray(v)) {
    return observable.array(v, { name, deep: false });
  }
  if (isPlainObject(v)) {
    return observable.object(v, void 0, { name, deep: false });
  }
  if (isES6Map(v)) {
    return observable.map(v, { name, deep: false });
  }
  if (isES6Set(v)) {
    return observable.set(v, { name, deep: false });
  }
  if (false) {
    die(
      "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets"
    );
  }
}
function referenceEnhancer(newValue) {
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if (false) {
    die(`observable.struct should not be used with observable values`);
  }
  if (deepEqual(v, oldValue)) {
    return oldValue;
  }
  return v;
}

// types/observablemap.ts
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete";
var ObservableMap = class {
  constructor(initialData, enhancer_ = deepEnhancer, name_ = false ? "ObservableMap@" + getNextId5() : "ObservableMap") {
    this.enhancer_ = enhancer_;
    this.name_ = name_;
    initObservable(() => {
      this.keysAtom_ = createAtom(false ? `${this.name_}.keys()` : "ObservableMap.keys()");
      this.data_ = /* @__PURE__ */ new Map();
      this.hasMap_ = /* @__PURE__ */ new Map();
      if (initialData) {
        this.merge(initialData);
      }
    });
  }
  [$mobx] = ObservableMapMarker;
  data_;
  hasMap_;
  // hasMap, not hashMap >-).
  keysAtom_;
  interceptors_;
  changeListeners_;
  dehancer;
  has_(key) {
    return this.data_.has(key);
  }
  has(key) {
    if (!globalState.trackingDerivation) {
      return this.has_(key);
    }
    let entry = this.hasMap_.get(key);
    if (!entry) {
      const newEntry = entry = new ObservableValue(
        this.has_(key),
        referenceEnhancer,
        false ? `${this.name_}.${stringifyKey2(key)}?` : "ObservableMap.key?",
        false
      );
      this.hasMap_.set(key, newEntry);
      newEntry.onBUOL = /* @__PURE__ */ new Set([() => this.hasMap_.delete(key)]);
    }
    return entry.get();
  }
  set(key, value) {
    const hasKey = this.has_(key);
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) {
        return this;
      }
      value = change.newValue;
    }
    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }
    return this;
  }
  delete(key) {
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change) {
        return false;
      }
    }
    if (this.has_(key)) {
      const notifySpy = false;
      const notify = hasListeners(this);
      const change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;
      if (false) {
        spyReportStart(change);
      }
      transaction(() => {
        this.keysAtom_.reportChanged();
        this.hasMap_.get(key)?.setNewValue_(false);
        const observable2 = this.data_.get(key);
        observable2.setNewValue_(void 0);
        this.data_.delete(key);
      });
      if (notify) {
        notifyListeners(this, change);
      }
      if (false) {
        spyReportEnd();
      }
      return true;
    }
    return false;
  }
  updateValue_(key, newValue) {
    const observable2 = this.data_.get(key);
    newValue = observable2.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      const notifySpy = false;
      const notify = hasListeners(this);
      const change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable2.value_,
        name: key,
        newValue
      } : null;
      if (false) {
        spyReportStart(change);
      }
      observable2.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, change);
      }
      if (false) {
        spyReportEnd();
      }
    }
  }
  addValue_(key, newValue) {
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(() => {
      const observable2 = new ObservableValue(
        newValue,
        this.enhancer_,
        false ? `${this.name_}.${stringifyKey2(key)}` : "ObservableMap.key",
        false
      );
      this.data_.set(key, observable2);
      newValue = observable2.value_;
      this.hasMap_.get(key)?.setNewValue_(true);
      this.keysAtom_.reportChanged();
    });
    const notifySpy = false;
    const notify = hasListeners(this);
    const change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue
    } : null;
    if (false) {
      spyReportStart(change);
    }
    if (notify) {
      notifyListeners(this, change);
    }
    if (false) {
      spyReportEnd();
    }
  }
  get(key) {
    if (this.has(key)) {
      return this.dehanceValue_(this.data_.get(key).get());
    }
    return this.dehanceValue_(void 0);
  }
  getOrInsert(key, value) {
    if (!this.has(key)) {
      this.set(key, value);
    }
    return this.get(key);
  }
  getOrInsertComputed(key, callback) {
    if (!this.has(key)) {
      this.set(key, callback(key));
    }
    return this.get(key);
  }
  dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  }
  keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  }
  values() {
    const self = this;
    const keys = this.keys();
    return makeIterableForMap({
      next() {
        const { done, value } = keys.next();
        return {
          done,
          value: done ? void 0 : self.get(value)
        };
      }
    });
  }
  entries() {
    const self = this;
    const keys = this.keys();
    return makeIterableForMap({
      next() {
        const { done, value } = keys.next();
        return {
          done,
          value: done ? void 0 : [value, self.get(value)]
        };
      }
    });
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  forEach(callback, thisArg) {
    for (const [key, value] of this) {
      callback.call(thisArg, value, key, this);
    }
  }
  /** Merge another object into this object, returns this. */
  merge(other) {
    if (isObservableMap(other)) {
      other = new Map(other);
    }
    transaction(() => {
      if (isPlainObject(other)) {
        getPlainObjectKeys(other).forEach(
          (key) => this.set(key, other[key])
        );
      } else if (Array.isArray(other)) {
        other.forEach(([key, value]) => this.set(key, value));
      } else if (isES6Map(other)) {
        if (!isPlainES6Map(other)) {
          die(19, other);
        }
        other.forEach((value, key) => this.set(key, value));
      } else if (other !== null && other !== void 0) {
        die(20, other);
      }
    });
    return this;
  }
  clear() {
    transaction(() => {
      untracked(() => {
        for (const key of this.keys()) {
          this.delete(key);
        }
      });
    });
  }
  replace(values) {
    transaction(() => {
      const replacementMap = convertToMap(values);
      const orderedData = /* @__PURE__ */ new Map();
      let keysReportChangedCalled = false;
      for (const key of this.data_.keys()) {
        if (!replacementMap.has(key)) {
          const deleted = this.delete(key);
          if (deleted) {
            keysReportChangedCalled = true;
          } else {
            const value = this.data_.get(key);
            orderedData.set(key, value);
          }
        }
      }
      for (const [key, value] of replacementMap.entries()) {
        const keyExisted = this.data_.has(key);
        this.set(key, value);
        if (this.data_.has(key)) {
          const value2 = this.data_.get(key);
          orderedData.set(key, value2);
          if (!keyExisted) {
            keysReportChangedCalled = true;
          }
        }
      }
      if (!keysReportChangedCalled) {
        if (this.data_.size !== orderedData.size) {
          this.keysAtom_.reportChanged();
        } else {
          const iter1 = this.data_.keys();
          const iter2 = orderedData.keys();
          let next1 = iter1.next();
          let next2 = iter2.next();
          while (!next1.done) {
            if (next1.value !== next2.value) {
              this.keysAtom_.reportChanged();
              break;
            }
            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      }
      this.data_ = orderedData;
    });
    return this;
  }
  get size() {
    this.keysAtom_.reportObserved();
    return this.data_.size;
  }
  toString() {
    return "[object ObservableMap]";
  }
  toJSON() {
    return Array.from(this);
  }
  get [Symbol.toStringTag]() {
    return "Map";
  }
};
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
function makeIterableForMap(iterator) {
  iterator[Symbol.toStringTag] = "MapIterator";
  return makeIterable(iterator);
}
function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    const map = /* @__PURE__ */ new Map();
    for (const key in dataStructure) {
      map.set(key, dataStructure[key]);
    }
    return map;
  } else {
    return die(21, dataStructure);
  }
}

// types/type-utils.ts
function initObservable(cb) {
  const derivation = untrackedStart();
  const allowStateChanges = false ? allowStateChangesStart(true) : true;
  startBatch();
  try {
    return cb();
  } finally {
    endBatch();
    if (false) {
      allowStateChangesEnd(allowStateChanges);
    }
    untrackedEnd(derivation);
  }
}

// types/observablearray.ts
var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 1e4;
var arrayTraps = {
  get(target, name) {
    const adm = target[$mobx];
    if (name === $mobx) {
      return adm;
    }
    if (name === "length") {
      return adm.getArrayLength_();
    }
    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }
    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }
    return target[name];
  },
  set(target, name, value) {
    const adm = target[$mobx];
    if (name === "length") {
      adm.setArrayLength_(value);
    }
    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      adm.set_(parseInt(name), value);
    }
    return true;
  },
  preventExtensions() {
    die(15);
  }
};
var ObservableArrayAdministration = class {
  constructor(name = false ? "ObservableArray@" + getNextId6() : "ObservableArray", enhancer, owned_) {
    this.owned_ = owned_;
    this.atom_ = new Atom(name);
    this.enhancer_ = (newV, oldV) => enhancer(newV, oldV, false ? name + "[..]" : "ObservableArray[..]");
  }
  atom_;
  values_ = [];
  // this is the prop that gets proxied, so can't replace it!
  interceptors_;
  changeListeners_;
  enhancer_;
  dehancer;
  proxy_;
  lastKnownLength_ = 0;
  dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  }
  dehanceValues_(values) {
    if (this.dehancer !== void 0 && values.length > 0) {
      return values.map(this.dehancer);
    }
    return values;
  }
  getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  }
  setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
      die(40, newLength);
    }
    let currentLength = this.values_.length;
    if (newLength === currentLength) {
      return;
    } else if (newLength > currentLength) {
      const newItems = Array.from({ length: newLength - currentLength });
      this.spliceWithArray_(currentLength, 0, newItems);
    } else {
      this.spliceWithArray_(newLength, currentLength - newLength);
    }
  }
  updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) {
      die(16);
    }
    this.lastKnownLength_ += delta;
  }
  spliceWithArray_(index, deleteCount, newItems) {
    checkIfStateModificationsAreAllowed(this.atom_);
    const length = this.values_.length;
    if (index === void 0) {
      index = 0;
    } else if (index > length) {
      index = length;
    } else if (index < 0) {
      index = Math.max(0, length + index);
    }
    if (arguments.length === 1) {
      deleteCount = length - index;
    } else if (deleteCount === void 0 || deleteCount === null) {
      deleteCount = 0;
    } else {
      deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    }
    if (newItems === void 0) {
      newItems = EMPTY_ARRAY;
    }
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) {
        return EMPTY_ARRAY;
      }
      deleteCount = change.removedCount;
      newItems = change.added;
    }
    newItems = newItems.length === 0 ? newItems : newItems.map((v) => this.enhancer_(v, void 0));
    if (false) {
      const lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta);
    }
    const res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) {
      this.notifyArraySplice_(index, newItems, res);
    }
    return this.dehanceValues_(res);
  }
  spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      return this.values_.splice(index, deleteCount, ...newItems);
    } else {
      const res = this.values_.slice(index, index + deleteCount);
      let oldItems = this.values_.slice(index + deleteCount);
      this.values_.length += newItems.length - deleteCount;
      for (let i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }
      for (let i = 0; i < oldItems.length; i++) {
        this.values_[index + newItems.length + i] = oldItems[i];
      }
      return res;
    }
  }
  notifyArrayChildUpdate_(index, newValue, oldValue) {
    const notifySpy = false;
    const notify = hasListeners(this);
    const change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index,
      newValue,
      oldValue
    } : null;
    if (false) {
      spyReportStart(change);
    }
    this.atom_.reportChanged();
    if (notify) {
      notifyListeners(this, change);
    }
    if (false) {
      spyReportEnd();
    }
  }
  notifyArraySplice_(index, added, removed) {
    const notifySpy = false;
    const notify = hasListeners(this);
    const change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index,
      removed,
      added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (false) {
      spyReportStart(change);
    }
    this.atom_.reportChanged();
    if (notify) {
      notifyListeners(this, change);
    }
    if (false) {
      spyReportEnd();
    }
  }
  get_(index) {
    this.atom_.reportObserved();
    return this.dehanceValue_(this.values_[index]);
  }
  set_(index, newValue) {
    const values = this.values_;
    if (index < values.length) {
      checkIfStateModificationsAreAllowed(this.atom_);
      const oldValue = values[index];
      if (hasInterceptors(this)) {
        const change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          // since "this" is the real array we need to pass its proxy
          index,
          newValue
        });
        if (!change) {
          return;
        }
        newValue = change.newValue;
      }
      newValue = this.enhancer_(newValue, oldValue);
      const changed = newValue !== oldValue;
      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else {
      const newItems = Array.from({ length: index + 1 - values.length });
      newItems[newItems.length - 1] = newValue;
      this.spliceWithArray_(values.length, 0, newItems);
    }
  }
};
function createObservableArray(initialValues, enhancer, name = false ? "ObservableArray@" + getNextId6() : "ObservableArray", owned = false) {
  return initObservable(() => {
    const adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values_, $mobx, adm);
    const proxy = new Proxy(adm.values_, arrayTraps);
    adm.proxy_ = proxy;
    if (initialValues && initialValues.length) {
      adm.spliceWithArray_(0, 0, initialValues);
    }
    return proxy;
  });
}
var arrayExtensions = {
  clear() {
    return this.splice(0);
  },
  replace(newItems) {
    const adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice(index, deleteCount, ...newItems) {
    const adm = this[$mobx];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return adm.spliceWithArray_(index);
      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }
    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(
      index,
      deleteCount,
      newItems
    );
  },
  push(...items) {
    const adm = this[$mobx];
    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift() {
    return this.splice(0, 1)[0];
  },
  unshift(...items) {
    const adm = this[$mobx];
    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse() {
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }
    this.replace(this.slice().reverse());
    return this;
  },
  sort() {
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }
    const copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove(value) {
    const adm = this[$mobx];
    const idx = adm.dehanceValues_(adm.values_).indexOf(value);
    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }
    return false;
  }
};
addArrayExtension("at", simpleFunc);
addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc);
addArrayExtension("toSorted", simpleFunc);
addArrayExtension("toSpliced", simpleFunc);
addArrayExtension("with", simpleFunc);
addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("findLast", mapLikeFunc);
addArrayExtension("findLastIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc);
addArrayExtension("toReversed", mapLikeFunc);
addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);
function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
}
function simpleFunc(funcName) {
  return function() {
    const adm = this[$mobx];
    adm.atom_.reportObserved();
    const dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
function mapLikeFunc(funcName) {
  return function(callback, thisArg) {
    const adm = this[$mobx];
    adm.atom_.reportObserved();
    const dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName]((element, index) => {
      return callback.call(thisArg, element, index, this);
    });
  };
}
function reduceLikeFunc(funcName) {
  return function() {
    const adm = this[$mobx];
    adm.atom_.reportObserved();
    const dehancedValues = adm.dehanceValues_(adm.values_);
    const callback = arguments[0];
    arguments[0] = (accumulator, currentValue, index) => {
      return callback(accumulator, currentValue, index, this);
    };
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
var isObservableArrayAdministration = createInstanceofPredicate(
  "ObservableArrayAdministration",
  ObservableArrayAdministration
);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

// utils/eq.ts
var toString = objectPrototype.toString;
function deepEqual(a, b, depth = -1) {
  return eq(a, b, depth);
}
function eq(a, b, depth, aStack, bStack) {
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  }
  if (a == null || b == null) {
    return false;
  }
  if (a !== a) {
    return b !== b;
  }
  const type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object") {
    return false;
  }
  const className = toString.call(a);
  if (className !== toString.call(b)) {
    return false;
  }
  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]":
    // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a) {
        return +b !== +b;
      }
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
    case "[object Map]":
    case "[object Set]":
      if (depth >= 0) {
        depth++;
      }
      break;
  }
  a = unwrap(a);
  b = unwrap(b);
  const areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") {
      return false;
    }
    const aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }
  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  }
  aStack = aStack || [];
  bStack = bStack || [];
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length = a.length;
    if (length !== b.length) {
      return false;
    }
    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) {
        return false;
      }
    }
  } else {
    const keys = Object.keys(a);
    const length2 = keys.length;
    if (Object.keys(b).length !== length2) {
      return false;
    }
    for (let i = 0; i < length2; i++) {
      const key = keys[i];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) {
        return false;
      }
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap(a) {
  if (isObservableArray(a)) {
    return a.slice();
  }
  if (isES6Map(a) || isObservableMap(a)) {
    return Array.from(a.entries());
  }
  if (isES6Set(a) || isObservableSet(a)) {
    return Array.from(a.entries());
  }
  return a;
}

// utils/comparer.ts
function compareStructural(a, b) {
  return deepEqual(a, b);
}
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
    this.name_ = options.name || (false ? "ComputedValue@" + getNextId7() : "ComputedValue");
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
function addObserver(observable2, node) {
  observable2.observers_.add(node);
  if (observable2.lowestObserverState_ > node.dependenciesState_) {
    observable2.lowestObserverState_ = node.dependenciesState_;
  }
}
function removeObserver(observable2, node) {
  observable2.observers_.delete(node);
  if (observable2.observers_.size === 0) {
    queueForUnobservation(observable2);
  }
}
function queueForUnobservation(observable2) {
  if (observable2.isPendingUnobservation === false) {
    observable2.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable2);
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
      const observable2 = list[i];
      observable2.isPendingUnobservation = false;
      if (observable2.observers_.size === 0) {
        if (observable2.isBeingObserved) {
          observable2.isBeingObserved = false;
          observable2.onBUO();
        }
        if (observable2 instanceof ComputedValue) {
          observable2.suspend_();
        }
      }
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable2) {
  checkIfStateReadsAreAllowed(observable2);
  const derivation = globalState.trackingDerivation;
  if (derivation !== null) {
    if (derivation.runId_ !== observable2.lastAccessedBy_) {
      observable2.lastAccessedBy_ = derivation.runId_;
      derivation.newObserving_[derivation.unboundDepsCount_++] = observable2;
      if (!observable2.isBeingObserved && globalState.trackingContext) {
        observable2.isBeingObserved = true;
        observable2.onBO();
      }
    }
    return observable2.isBeingObserved;
  } else if (observable2.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable2);
  }
  return false;
}
function propagateChanged(observable2) {
  if (observable2.lowestObserverState_ === 2 /* STALE_ */) {
    return;
  }
  observable2.lowestObserverState_ = 2 /* STALE_ */;
  observable2.observers_.forEach((d) => {
    if (d.dependenciesState_ === 0 /* UP_TO_DATE_ */) {
      d.onBecomeStale_();
    }
    d.dependenciesState_ = 2 /* STALE_ */;
  });
}
function propagateChangeConfirmed(observable2) {
  if (observable2.lowestObserverState_ === 2 /* STALE_ */) {
    return;
  }
  observable2.lowestObserverState_ = 2 /* STALE_ */;
  observable2.observers_.forEach((d) => {
    if (d.dependenciesState_ === 1 /* POSSIBLY_STALE_ */) {
      d.dependenciesState_ = 2 /* STALE_ */;
    } else if (d.dependenciesState_ === 0 /* UP_TO_DATE_ */) {
      observable2.lowestObserverState_ = 0 /* UP_TO_DATE_ */;
    }
  });
}
function propagateMaybeChanged(observable2) {
  if (observable2.lowestObserverState_ !== 0 /* UP_TO_DATE_ */) {
    return;
  }
  observable2.lowestObserverState_ = 1 /* POSSIBLY_STALE_ */;
  observable2.observers_.forEach((d) => {
    if (d.dependenciesState_ === 0 /* UP_TO_DATE_ */) {
      d.dependenciesState_ = 1 /* POSSIBLY_STALE_ */;
      d.onBecomeStale_();
    }
  });
}

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
function checkIfStateReadsAreAllowed(observable2) {
  if (false) {
    console.warn(
      `[mobx] Observable '${observable2.name_}' being read outside a reactive context.`
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
function untracked(action2) {
  const prev = untrackedStart();
  try {
    return action2();
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

// core/atom.ts
var $mobx = Symbol("mobx administration");
var Atom = class {
  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  constructor(name_ = false ? "Atom@" + getNextId8() : "Atom") {
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

// types/dynamicobject.ts
function getAdm(target) {
  return target[$mobx];
}
var objectProxyTraps = {
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
