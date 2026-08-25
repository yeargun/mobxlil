"use strict";
var mobx = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // dist/mobx.dev.esm.js
  var mobx_dev_esm_exports = {};
  __export(mobx_dev_esm_exports, {
    $mobx: () => $mobx,
    FlowCancellationError: () => FlowCancellationError,
    ObservableMap: () => ObservableMap,
    ObservableSet: () => ObservableSet,
    Reaction: () => Reaction,
    _allowStateChanges: () => _allowStateChanges,
    _allowStateChangesInsideComputed: () => _allowStateChangesInsideComputed,
    _allowStateReadsEnd: () => _allowStateReadsEnd,
    _allowStateReadsStart: () => _allowStateReadsStart,
    _autoAction: () => _autoAction,
    _autoActionBound: () => _autoActionBound,
    _endAction: () => _endAction,
    _getAdministration: () => _getAdministration,
    _getGlobalState: () => _getGlobalState,
    _interceptReads: () => _interceptReads,
    _isComputingDerivation: () => _isComputingDerivation,
    _resetGlobalState: () => _resetGlobalState,
    _startAction: () => _startAction,
    action: () => action,
    actionBound: () => actionBound,
    autorun: () => autorun,
    compareDefault: () => compareDefault,
    compareIdentity: () => compareIdentity,
    compareShallow: () => compareShallow,
    compareStructural: () => compareStructural,
    computed: () => computed,
    computedStruct: () => computedStruct,
    configure: () => configure,
    createAtom: () => createAtom,
    defineProperty: () => defineProperty,
    entries: () => entries,
    extendObservable: () => extendObservable,
    flow: () => flow,
    flowBound: () => flowBound,
    flowResult: () => flowResult,
    get: () => get,
    getAtom: () => getAtom,
    getDebugName: () => getDebugName,
    getDependencyTree: () => getDependencyTree,
    getObserverTree: () => getObserverTree,
    has: () => has,
    intercept: () => intercept,
    isAction: () => isAction,
    isBoxedObservable: () => isBoxedObservable,
    isComputed: () => isComputed,
    isComputedProp: () => isComputedProp,
    isFlow: () => isFlow,
    isFlowCancellationError: () => isFlowCancellationError,
    isObservable: () => isObservable,
    isObservableArray: () => isObservableArray,
    isObservableMap: () => isObservableMap,
    isObservableObject: () => isObservableObject,
    isObservableProp: () => isObservableProp,
    isObservableSet: () => isObservableSet,
    keys: () => keys,
    makeAutoObservable: () => makeAutoObservable,
    makeObservable: () => makeObservable,
    observable: () => observable,
    observableDeep: () => observableDeep,
    observableRef: () => observableRef,
    observableShallow: () => observableShallow,
    observableStruct: () => observableStruct,
    observe: () => observe,
    onBecomeObserved: () => onBecomeObserved,
    onBecomeUnobserved: () => onBecomeUnobserved,
    onReactionError: () => onReactionError,
    override: () => override,
    ownKeys: () => ownKeys,
    reaction: () => reaction,
    remove: () => remove,
    runInAction: () => runInAction,
    set: () => set,
    spy: () => spy,
    toJS: () => toJS,
    transaction: () => transaction,
    untracked: () => untracked,
    values: () => values,
    when: () => when
  });
  var $jsMethod1 = (e) => function(a2) {
    return e(this, a2);
  };
  var a = -1;
  function $m3$gObject() {
    return globalThis.Object;
  }
  function $m3$gMap() {
    return globalThis.Map;
  }
  function $m3$gReflect() {
    return globalThis.Reflect;
  }
  function $m3$gSymbol() {
    return globalThis.Symbol;
  }
  function $m3$isObj(value) {
    return !(value == null) && "object" == typeof value;
  }
  function $m3$isStringish(value) {
    var v2 = typeof value;
    var v102, v15;
    return "string" == v2 || "symbol" == v2 || "number" == v2;
  }
  function $m3$objectIs(a$2, b) {
    return true === $m3$objectIsFn(a$2, b);
  }
  function $m3$protoIsPrototypeOf(ctor, value) {
    if (value == null) return false;
    return true === $m3$isPrototypeOfFn.call(ctor.prototype, value);
  }
  function $m3$arrayFrom(iterable) {
    let v7 = globalThis.Array;
    return v7.from(iterable);
  }
  function $m3$mapHas(map, key) {
    return !!map.has(key);
  }
  function $m3$defineProperty(target, key, descriptor) {
    $m3$gObject().defineProperty(target, key, descriptor);
  }
  function $m3$hasOwn(target, key) {
    return !!$m3$hasOwnPropertyFn.call(target, key);
  }
  function $m3$assign(target, source) {
    return $m3$gObject().assign(target, source);
  }
  function $m3$createInstanceofPredicate(name, theClass) {
    theClass.prototype["isMobX" + name] = true;
  }
  function $m3$throwErr(err) {
    throw err;
  }
  function $m3$throwTypeError(message) {
    throw new globalThis.TypeError(message);
  }
  function $m3$isGenerator(obj) {
    if (obj == null) return false;
    var v6 = obj.constructor;
    if (!v6) return false;
    if ("GeneratorFunction" == v6.name + "") return true;
    if ("GeneratorFunction" == v6.displayName + "") return true;
    return false;
  }
  function $m3$isPlainObject(value) {
    if (!$m3$isObj(value)) return false;
    var v29 = $m3$gObject().getPrototypeOf(value);
    if (v29 == null) return true;
    var v30 = void 0;
    if ($m3$hasOwn(v29, "constructor")) {
      var v16 = v29.constructor;
      var v26 = v16, v242, v25;
    } else {
      v26 = v30;
    }
    "function" == typeof v26 ? (v242 = v26.toString() === $m3$plainObjectString, v25 = v242) : v25 = false;
    return v25;
  }
  function $m3$isES6Map(thing) {
    if (thing == null) return false;
    var v6 = $m3$gObject().prototype;
    return "[object Map]" == v6.toString.call(thing) + "";
  }
  function $m3$isES6Set(thing) {
    if (thing == null) return false;
    var v6 = $m3$gObject().prototype;
    return "[object Set]" == v6.toString.call(thing) + "";
  }
  function $m3$stringifyKey(key) {
    var v2 = typeof key;
    if ("string" == v2) return key + "";
    if ("symbol" == v2) return key.toString() + "";
    return new globalThis.String(key) + "";
  }
  function $m3$toPrimitive(value) {
    if (null === value) return null;
    return "object" == typeof value ? "" + value : value;
  }
  function $m3$getPlainObjectKeys(object) {
    var v42 = $m3$gObject().keys(object);
    var v6 = $m3$gObject().getOwnPropertySymbols(object);
    if (0 == (v6.length | 0)) return v42;
    var v48 = $m3$arraySliceFn.call(v42);
    var v52 = v6.length | 0;
    var v39 = 0, v22, v25;
    while (v39 < v52) {
      v22 = v6[v39];
      v25 = $m3$gObject().prototype;
      true === v25.propertyIsEnumerable.call(object, v22) && v48.push(v22);
      v39 = v39 + 1;
    }
    return v48;
  }
  function $m3$iteratorPrototype() {
    var v2 = globalThis.Iterator;
    if (v2) return v2.prototype;
    return { __proto__: null };
  }
  function $m3$makeIterable(iterator) {
    let v11 = $m3$gSymbol().iterator;
    iterator[v11] = function() {
      return this;
    };
    let v6 = $m3$iteratorPrototype();
    return $m3$assign($m3$gObject().create(v6), iterator);
  }
  function $m3$once(fn) {
    var invoked = false;
    return function() {
      if (invoked) return;
      invoked = true;
      return fn.apply(this, arguments);
    };
  }
  function $m1$initPersistentKeys() {
    $m1$persistentKeys.push("mobxGuid");
    $m1$persistentKeys.push("spyListeners");
    $m1$persistentKeys.push("enforceActions");
    $m1$persistentKeys.push("computedRequiresReaction");
    $m1$persistentKeys.push("reactionRequiresObservable");
    $m1$persistentKeys.push("observableRequiresReaction");
    $m1$persistentKeys.push("allowStateReads");
    $m1$persistentKeys.push("disableErrorBoundaries");
    $m1$persistentKeys.push("runId");
    $m1$persistentKeys.push("UNCHANGED");
  }
  function $m1$createMobXGlobals() {
    let v0 = {};
    Object.assign(v0, { version: 7, UNCHANGED: {} });
    let v9 = null;
    Object.assign(v0, { trackingDerivation: v9, trackingContext: v9, runId: 0, mobxGuid: 0, inBatch: 0, pendingUnobservations: [], pendingReactions: [], isRunningReactions: false, allowStateChanges: false, allowStateReads: true, enforceActions: true, spyListeners: [], globalReactionErrorHandlers: [], computedRequiresReaction: false, reactionRequiresObservable: false, observableRequiresReaction: false, disableErrorBoundaries: false, suppressReactionErrors: false, safeDescriptors: true });
    return v0;
  }
  function $m1$initGlobalState() {
    var v69 = globalThis;
    if (v69.__mobxInstanceCount) {
      var v11 = (+v69.__mobxInstanceCount | 0) > 0;
      var v12 = v11, v18, v19, v23, v32, v33, v38, v64;
    } else {
      v12 = false;
    }
    v12 && !v69.__mobxGlobals && ($m1$canMergeGlobalState = false);
    v23 = v69.__mobxGlobals;
    v23 ? (v32 = 7 != (+v23.version | 0), v33 = v32) : v33 = false;
    v33 && ($m1$canMergeGlobalState = false);
    if (!$m1$canMergeGlobalState) {
      v38 = function() {
        $m1$isolateCalled || $m1$die(35);
      };
      globalThis.setTimeout(v38, 1);
      return $m1$createMobXGlobals();
    } else {
      if (v23) {
        v69.__mobxInstanceCount = (+v69.__mobxInstanceCount | 0) + 1 | 0;
        v23.UNCHANGED || (v23.UNCHANGED = {});
        return v23;
      }
    }
    v69.__mobxInstanceCount = 1;
    v64 = $m1$createMobXGlobals();
    v69.__mobxGlobals = v64;
    return v64;
  }
  function $m1$getNextId() {
    let v52 = (+$m1$globalState.mobxGuid | 0) + 1 | 0;
    $m1$globalState.mobxGuid = v52;
    return v52;
  }
  function $m1$niceError(error, args) {
    if ("string" == typeof error) return error + "";
    var v336 = +error | 0;
    if (0 == v336) return "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'";
    if (1 == v336) {
      var v22 = "Cannot apply '" + args[0] + "' to '";
      return v22 + $m3$stringifyKey(args[1]) + "': Field not found.";
    }
    if (5 == v336) return "'keys()' can only be used on observable objects, arrays, sets and maps";
    if (6 == v336) return "'values()' can only be used on observable objects, arrays, sets and maps";
    if (7 == v336) return "'entries()' can only be used on observable objects, arrays and maps";
    if (8 == v336) return "'set()' can only be used on observable objects, arrays and maps";
    if (9 == v336) return "'remove()' can only be used on observable objects, arrays and maps";
    if (10 == v336) return "'has()' can only be used on observable objects, arrays and maps";
    if (11 == v336) return "'get()' can only be used on observable objects, arrays and maps";
    if (12 == v336) return "Invalid annotation";
    if (13 == v336) return "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)";
    if (14 == v336) return "Intercept handlers should return nothing or a change object";
    if (15 == v336) return "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)";
    if (16 == v336) return "Modification exception: the internal structure of an observable array was changed.";
    if (19 == v336) {
      var v84 = args[0];
      var v86 = v84.constructor;
      return "Cannot initialize from classes that inherit from Map: " + v86.name;
    }
    if (20 == v336) return "Cannot initialize map from " + args[0];
    if (21 == v336) return "Cannot convert to map from '" + args[0] + "'";
    if (23 == v336) return "It is not possible to get index atoms from arrays";
    if (24 == v336) return "Cannot obtain administration from " + args[0];
    if (25 == v336) {
      var v134 = "the entry '" + args[0] + "' does not exist in the observable map '";
      return v134 + args[1] + "'";
    }
    if (26 == v336) return "please specify a property";
    if (27 == v336) {
      var v156 = "no observable property '" + $m3$stringifyKey(args[0]) + "' found on the observable object '";
      return v156 + args[1] + "'";
    }
    if (28 == v336) return "Cannot obtain atom from " + args[0];
    if (29 == v336) return "Expecting some object";
    if (30 == v336) return "invalid action stack. did you forget to finish an action?";
    if (31 == v336) return "missing option for computed: get";
    if (32 == v336) {
      var v195 = "Cycle detected in computation " + args[0] + ": ";
      return v195 + args[1] + "";
    }
    if (33 == v336) return "The setter of computed value '" + args[0] + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
    if (34 == v336) return "[ComputedValue '" + args[0] + "'] It is not possible to assign a new value to a computed value.";
    if (35 == v336) return "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`";
    if (36 == v336) return "isolateGlobalState should be called before MobX is running any reactions";
    if (37 == v336) {
      var v241 = "[mobx] `observableArray." + args[0] + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice().";
      return v241 + args[0] + "()` instead";
    }
    if (38 == v336) return "'ownKeys()' can only be used on observable objects";
    if (39 == v336) return "'defineProperty()' can only be used on observable objects";
    if (40 == v336) return "Out of range: " + args[0];
    if (41 == v336) return "Cannot initialize set from " + args[0];
    if (42 == v336) return "Invalid index: '" + args[0] + "'";
    if (43 == v336) {
      var v296 = "Cannot apply '" + args[0] + "' to '";
      var v303 = v296 + args[1] + "' (kind: ";
      var v310 = v303 + args[2] + "):\n'";
      return v310 + args[0] + "' can only be used on properties with a function value.";
    }
    if (44 == v336) return "'" + args[0] + "' can only be used with 'makeObservable'";
    return error + "";
  }
  function $m1$dieRest(error, args) {
    var v7 = "[MobX] " + $m1$niceError(error, args);
    $m3$throwErr(new globalThis.Error(v7));
    if ((args.length | 0) > 0) {
      var v26 = " " + args.map(globalThis.String).join(",");
      var v37 = v26, v34;
    } else {
      v37 = "";
    }
    v34 = "[MobX] minified error nr: " + error + v37 + ". See mobx.js.org/errors";
    $m3$throwErr(new globalThis.Error(v34));
  }
  function $m1$die(error) {
    $m1$dieRest(error, []);
  }
  function $m1$die1(error, a$2) {
    let v2 = [];
    v2.push(a$2);
    $m1$dieRest(error, v2);
  }
  function $m1$hasMobXFlag(x, flag) {
    return $m3$isObj(x) && true === x[flag];
  }
  function $m1$isObservableMap(x) {
    return $m1$hasMobXFlag(x, "isMobXObservableMap");
  }
  function $m1$isObservableSet(x) {
    return $m1$hasMobXFlag(x, "isMobXObservableSet");
  }
  function $m1$isObservableArray(thing) {
    if (!$m3$isObj(thing)) return false;
    return $m1$hasMobXFlag(thing[$m1$$mobx], "isMobXObservableArrayAdministration");
  }
  function $m1$isObservableObject(thing) {
    if (!$m3$isObj(thing)) return false;
    return $m1$hasMobXFlag(thing[$m1$$mobx], "isMobXObservableObjectAdministration");
  }
  function $m1$isAction(thing) {
    return "function" == typeof thing && true === thing.isMobxAction;
  }
  function $m1$isFlow(fn) {
    if (fn == null) return false;
    var v6 = fn.isMobXFlow;
    return true === v6;
  }
  function $m1$isSpyEnabled() {
    var v4 = $m1$globalState.spyListeners;
    var v7 = (v4.length | 0) > 0;
    return v7;
  }
  function $m1$spyReport(event) {
    var v52 = $m1$globalState.spyListeners;
    var v28 = v52.length | 0;
    if (0 == v28) return;
    var v242 = 0;
    while (v242 < v28) {
      v52[v242](event);
      v242 = v242 + 1;
    }
  }
  function $m1$spyReportStart(event) {
    $m1$spyReport($m3$gObject().assign({}, event, { __proto__: null, spyReportStart: true }));
  }
  function $m1$spyReportEnd(change) {
    change ? $m1$spyReport($m3$gObject().assign({}, change, { __proto__: null, type: "report-end", spyReportEnd: true })) : $m1$spyReport($m1$END_EVENT);
  }
  function $m1$hasObservers(observable$2) {
    if (observable$2.observers_) {
      var v8 = observable$2.observers_;
      var v11 = !!v8.size;
      var v12 = v11;
    } else {
      v12 = false;
    }
    return v12;
  }
  function $m1$addObserver(observable$2, node) {
    var v4 = observable$2.observers_;
    v4.add(node);
    var v242 = +observable$2.lowestObserverState_ | 0;
    v242 > (+node.dependenciesState_ | 0) && (observable$2.lowestObserverState_ = node.dependenciesState_);
  }
  function $m1$queueForUnobservation(observable$2) {
    if (!observable$2.isPendingUnobservation) {
      observable$2.isPendingUnobservation = true;
      var v11 = $m1$globalState.pendingUnobservations;
      v11.push(observable$2);
    }
  }
  function $m1$removeObserver(observable$2, node) {
    var v4 = observable$2.observers_;
    v4.delete(node);
    var v9 = observable$2.observers_;
    v9.size || $m1$queueForUnobservation(observable$2);
  }
  function $m1$startBatch() {
    let v0 = $m1$globalState;
    v0.inBatch = (+$m1$globalState.inBatch | 0) + 1 | 0;
  }
  function $m1$endBatch() {
    var v52 = (+$m1$globalState.inBatch | 0) - 1 | 0;
    $m1$globalState.inBatch = v52;
    if (0 == v52) {
      $m1$runReactions();
      var v15 = $m1$globalState.pendingUnobservations;
      var v55 = 0, v23, v29;
      while (v55 < (v15.length | 0)) {
        v23 = v15[v55];
        v23.isPendingUnobservation = false;
        v29 = v23.observers_;
        v29.size || (!v23.isBeingObserved || (v23.isBeingObserved = false, v23.onBUO()), $m1$hasMobXFlag(v23, "isMobXComputedValue") && v23.suspend_());
        v55 = v55 + 1;
      }
      $m1$globalState.pendingUnobservations = [];
    }
  }
  function $m1$reportObserved(observable$2) {
    var v7 = !$m1$globalState.allowStateReads;
    if (v7 && $m1$globalState.observableRequiresReaction) {
      var v22 = "[mobx] Observable '" + observable$2.name_ + "' being read outside a reactive context.";
      var v103 = globalThis.console;
      v103.warn(v22);
    }
    var v26 = $m1$globalState.trackingDerivation;
    if (!(v26 == null)) {
      var v32 = v26.runId_;
      if (!(v32 === observable$2.lastAccessedBy_)) {
        observable$2.lastAccessedBy_ = v26.runId_;
        var v99 = +v26.unboundDepsCount_ | 0;
        v26.newObserving_[v99] = observable$2;
        v26.unboundDepsCount_ = v99 + 1 | 0;
        if (!observable$2.isBeingObserved) {
          var v66 = !!$m1$globalState.trackingContext;
          var v67 = v66, v13, v14, v80, v89, v90;
        } else {
          v67 = false;
        }
        v67 && (observable$2.isBeingObserved = true, observable$2.onBO());
      }
      return !!observable$2.isBeingObserved;
    } else {
      v80 = observable$2.observers_;
      !v80.size ? (v89 = !!$m1$globalState.inBatch, v90 = v89) : v90 = false;
      v90 && $m1$queueForUnobservation(observable$2);
    }
    return false;
  }
  function $m1$propagateChanged(observable$2) {
    var v32 = observable$2.lowestObserverState_;
    if (2 === v32) return;
    observable$2.lowestObserverState_ = 2;
    observable$2.observers_.forEach($m1$propagateChangedEach);
  }
  function $m1$propagateChangeConfirmed(observable$2) {
    var v32 = observable$2.lowestObserverState_;
    if (2 === v32) return;
    observable$2.lowestObserverState_ = 2;
    var v9 = $m1$confirmedObservable;
    $m1$confirmedObservable = observable$2;
    observable$2.observers_.forEach($m1$propagateChangeConfirmedEach);
    $m1$confirmedObservable = v9;
  }
  function $m1$reportChanged(observable$2) {
    $m1$startBatch();
    $m1$propagateChanged(observable$2);
    $m1$endBatch();
  }
  function $m1$propagateMaybeChanged(observable$2) {
    if (observable$2.lowestObserverState_) return;
    observable$2.lowestObserverState_ = 1;
    observable$2.observers_.forEach($m1$propagateMaybeChangedEach);
  }
  function $m1$untrackedStart() {
    let v2 = $m1$globalState.trackingDerivation;
    $m1$globalState.trackingDerivation = null;
    return v2;
  }
  function $m1$untrackedEnd(prev) {
    $m1$globalState.trackingDerivation = prev;
  }
  function $m1$allowStateChangesStart(allow) {
    let v4 = !!$m1$globalState.allowStateChanges;
    $m1$globalState.allowStateChanges = allow;
    return v4;
  }
  function $m1$checkIfStateModificationsAreAllowed(atom) {
    var v52 = atom.observers_;
    var v8 = (+v52.size | 0) > 0;
    var v23, v19, v21, v22, v37, v39, v50;
    !$m1$globalState.allowStateChanges && (v8 || "always" === $m1$globalState.enforceActions) && (v39 = $m1$globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ", v37 = "[MobX] " + v39 + atom.name_, v50 = globalThis.console, v50.warn(v37));
  }
  function $m1$changeDependenciesStateTo0(derivation) {
    if (0 == (+derivation.dependenciesState_ | 0)) return;
    derivation.dependenciesState_ = 0;
    var v12 = derivation.observing_;
    var v32 = v12.length | 0;
    var v26 = v32, v20, v23;
    while (v26 > 0) {
      v20 = v26 - 1;
      v23 = v12[v20];
      v23.lowestObserverState_ = 0;
      v26 = v20;
    }
  }
  function $m1$isCaughtException(e) {
    return $m3$isObj(e) && true === e.isMobXCaughtException;
  }
  function $m1$shouldCompute(derivation) {
    var v84 = +derivation.dependenciesState_ | 0;
    if (0 == v84) return false;
    if (v84 == a || 2 == v84) return true;
    if (1 == v84) {
      var v88 = !!$m1$globalState.allowStateReads;
      $m1$globalState.allowStateReads = true;
      var v81 = v88, v15, v16, v25, v28, v37, v42, v60, v82, v93;
      v25 = $m1$untrackedStart();
      v28 = derivation.observing_;
      v93 = v28.length | 0;
      v82 = 0;
      while (v82 < v93) {
        v37 = v28[v82];
        if ($m1$hasMobXFlag(v37, "isMobXComputedValue")) {
          v42 = $m1$globalState.disableErrorBoundaries;
          if (true === v42) {
            v37.get();
          } else {
            try {
              v37.get();
            } catch {
              $m1$untrackedEnd(v25);
              $m1$globalState.allowStateReads = v81;
              return true;
            }
          }
          v60 = derivation.dependenciesState_;
          if (2 === v60) {
            $m1$untrackedEnd(v25);
            $m1$globalState.allowStateReads = v81;
            return true;
          }
        }
        v82 = v82 + 1;
      }
      $m1$changeDependenciesStateTo0(derivation);
      $m1$untrackedEnd(v25);
      $m1$globalState.allowStateReads = v81;
      return false;
    }
    return false;
  }
  function $m1$warnAboutDerivationWithoutDependencies(derivation) {
    var v52 = derivation.observing_;
    if (0 != (v52.length | 0)) return;
    if ("boolean" == typeof derivation.requiresObservable_) {
      var v172 = !!derivation.requiresObservable_;
      var v32 = v172, v21, v30, v46;
    } else {
      v21 = !!$m1$globalState.reactionRequiresObservable;
      v32 = v21;
    }
    v32 && (v30 = "[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.", v46 = globalThis.console, v46.warn(v30));
  }
  function $m1$bindDependencies(derivation) {
    var v32 = derivation.observing_;
    var v6 = derivation.newObserving_;
    derivation.observing_ = v6;
    var v125 = +derivation.unboundDepsCount_ | 0;
    var v118 = 0, v121 = 0, v123 = 0, v22, v43, v51, v52, v71, v742, v92, v95, v117, v119, v120, v122, v131, v136;
    while (v123 < v125) {
      v22 = v6[v123];
      0 == (+v22.diffValue | 0) ? (v22.diffValue = 1, v121 != v123 && (v6[v121] = v22), v120 = v121 + 1 | 0) : v120 = v121;
      v43 = v22.dependenciesState_;
      !(v43 === void 0) ? (v51 = (+v43 | 0) > v118, v52 = v51) : v52 = false;
      v52 ? (v136 = +v43 | 0, v117 = v136) : v117 = v118;
      v118 = v117;
      v121 = v120;
      v123 = v123 + 1;
    }
    v6.length = v121;
    derivation.newObserving_ = null;
    v131 = v32.length | 0;
    v122 = v131;
    while (v122 > 0) {
      v71 = v122 - 1;
      v742 = v32[v71];
      0 == (+v742.diffValue | 0) && $m1$removeObserver(v742, derivation);
      v742.diffValue = 0;
      v122 = v71;
    }
    v119 = v121;
    while (v119 > 0) {
      v92 = v119 - 1;
      v95 = v6[v92];
      1 == (+v95.diffValue | 0) && (v95.diffValue = 0, $m1$addObserver(v95, derivation));
      v119 = v92;
    }
    0 != v118 && (derivation.dependenciesState_ = v118, derivation.onBecomeStale_());
  }
  function $m1$trackDerivedFunction(derivation, f, context) {
    var v93 = !!$m1$globalState.allowStateReads;
    $m1$globalState.allowStateReads = true;
    var v88 = v93, v18, v32, v41, v45, v56, v68, v89, v100;
    $m1$changeDependenciesStateTo0(derivation);
    0 != (+derivation.runId_ | 0) ? (v18 = derivation.observing_, v100 = v18.length | 0, v89 = v100) : v89 = 100;
    Object.assign(derivation, { newObserving_: new globalThis.Array(v89), unboundDepsCount_: 0 });
    v32 = (+$m1$globalState.runId | 0) + 1 | 0;
    $m1$globalState.runId = v32;
    derivation.runId_ = v32;
    v41 = $m1$globalState.trackingDerivation;
    $m1$globalState.trackingDerivation = derivation;
    v45 = $m1$globalState;
    v45.inBatch = (+$m1$globalState.inBatch | 0) + 1 | 0;
    var result;
    v56 = $m1$globalState.disableErrorBoundaries;
    if (true === v56) {
      result = f.call(context);
    } else {
      try {
        result = f.call(context);
      } catch (v65) {
        result = new $m1$CaughtException(v65);
      }
    }
    v68 = $m1$globalState;
    v68.inBatch = (+$m1$globalState.inBatch | 0) - 1 | 0;
    $m1$globalState.trackingDerivation = v41;
    $m1$bindDependencies(derivation);
    $m1$warnAboutDerivationWithoutDependencies(derivation);
    $m1$globalState.allowStateReads = v88;
    return result;
  }
  function $m1$clearObserving(derivation) {
    var v32 = derivation.observing_;
    derivation.observing_ = [];
    var v27 = v32.length | 0;
    var v23 = v27, v14;
    while (v23 > 0) {
      v14 = v23 - 1;
      $m1$removeObserver(v32[v14], derivation);
      v23 = v14;
    }
    derivation.dependenciesState_ = a;
  }
  function $m1$onBOImpl(self) {
    !self.onBOL || self.onBOL.forEach(function(listener) {
      listener();
    });
  }
  function $m1$onBUOImpl(self) {
    !self.onBUOL || self.onBUOL.forEach(function(listener) {
      listener();
    });
  }
  function $m1$installFlagAccessor(proto, name, mask) {
    $m3$defineProperty(proto, name, { __proto__: null, configurable: true, get: function() {
      return 0 != (+this.flags_ & mask);
    }, set: function(value) {
      var v25 = +this.flags_;
      value ? this.flags_ = v25 | mask : this.flags_ = v25 & (mask ^ a);
    } });
  }
  function $m1$createAction(actionName, fn, autoActionFlag, ref) {
    "function" == typeof fn || $m1$die("`action` can only be invoked on functions");
    (!("string" == typeof actionName) || "" == actionName) && $m1$die("actions should have valid names, got: '" + actionName + "'");
    var v29 = (0, function() {
      var v16 = ref == null ? this : ref;
      return $m1$executeAction(actionName, autoActionFlag, fn, v16, arguments);
    });
    Object.assign(v29, { isMobxAction: true, toString: function() {
      return fn.toString();
    } });
    $m1$isFunctionNameConfigurable && ($m1$tmpNameDescriptor.value = actionName, $m3$defineProperty(v29, "name", $m1$tmpNameDescriptor));
    return v29;
  }
  function $m1$_startAction(actionName, canRunAsDerivation, scope, args) {
    var v6 = $m1$isSpyEnabled();
    var v11 = v6 && !!actionName;
    if (v11) {
      var v90 = globalThis.Date;
      var v92 = v90.now();
      var v15 = $m1$EMPTY_ARRAY;
      if (args) {
        var v19 = $m3$arrayFrom(args);
        var v85 = v19, v102, v28, v33, v34, v39, v44, v48, v52, v56, v58, v84, v87;
      } else {
        v85 = v15;
      }
      $m1$spyReportStart({ __proto__: null, type: "action", name: actionName, object: scope, arguments: v85 });
      v84 = v92;
    } else {
      v84 = 0;
    }
    var v26 = $m1$globalState;
    v28 = v26.trackingDerivation;
    v34 = !canRunAsDerivation || v28 == null;
    $m1$startBatch();
    v39 = !!$m1$globalState.allowStateChanges;
    v34 ? ($m1$untrackedStart(), v44 = $m1$allowStateChangesStart(true), v87 = v44) : v87 = v39;
    v48 = !!$m1$globalState.allowStateReads;
    $m1$globalState.allowStateReads;
    $m1$globalState.allowStateReads = true;
    v52 = $m1$nextActionId;
    $m1$nextActionId = $m1$nextActionId + 1 | 0;
    v56 = $m1$currentActionId;
    $m1$currentActionId = v52;
    v58 = {};
    Object.assign(v58, { runAsAction_: v34, prevDerivation_: v28, prevAllowStateChanges_: v87, prevAllowStateReads_: v48, notifySpy_: v11, startTime_: v84, actionId_: v52, parentActionId_: v56 });
    return v58;
  }
  function $m1$_endAction(runInfo) {
    var v1 = $m1$currentActionId;
    v1 != (+runInfo.actionId_ | 0) && $m1$die(30);
    $m1$currentActionId = +runInfo.parentActionId_ | 0;
    runInfo.error_ === void 0 || ($m1$globalState.suppressReactionErrors = true);
    $m1$globalState.allowStateChanges = !!runInfo.prevAllowStateChanges_;
    $m1$globalState.allowStateReads = !!runInfo.prevAllowStateReads_;
    $m1$endBatch();
    !runInfo.runAsAction_ || $m1$untrackedEnd(runInfo.prevDerivation_);
    var v46 = !!runInfo.notifySpy_;
    if (v46) {
      var v71 = globalThis.Date;
      var v75 = +v71.now() | 0;
      $m1$spyReportEnd({ __proto__: null, time: v75 - (+runInfo.startTime_ | 0) | 0 });
    }
    $m1$globalState.suppressReactionErrors = false;
  }
  function $m1$executeAction(actionName, canRunAsDerivation, fn, scope, args) {
    var runInfo = $m1$_startAction(actionName, canRunAsDerivation, scope, args);
    try {
      return fn.apply(scope, args);
    } catch (v14) {
      runInfo.error_ = v14;
      throw v14;
    } finally {
      $m1$_endAction(runInfo);
    }
  }
  function $m1$runReactions() {
    if ((+$m1$globalState.inBatch | 0) > 0) {
      var v11 = true, v102;
    } else {
      v102 = !!$m1$globalState.isRunningReactions;
      v11 = v102;
    }
    if (v11) return;
    $m1$reactionScheduler($m1$runReactionsHelperFn);
  }
  function $m1$hasInterceptors(interceptable) {
    if (!(interceptable.interceptors_ === void 0)) {
      var v9 = interceptable.interceptors_;
      var v12 = (v9.length | 0) > 0;
      var v13 = v12;
    } else {
      v13 = false;
    }
    return v13;
  }
  function $m1$registerInterceptor(interceptable, handler) {
    interceptable.interceptors_ === void 0 && (interceptable.interceptors_ = []);
    var v11 = interceptable.interceptors_;
    v11.push(handler);
    return $m3$once(function() {
      var v18 = +v11.indexOf(handler) | 0;
      v18 != a && v11.splice(v18, 1);
    });
  }
  function $m1$interceptChange(interceptable, change) {
    var prevU = $m1$untrackedStart();
    try {
      var interceptorsSrc = [];
      !interceptable.interceptors_ || (interceptorsSrc = interceptable.interceptors_);
      var interceptors = $m3$arraySliceFn.call(interceptorsSrc);
      var n = interceptors.length | 0;
      var i = 0;
      while (i < n) {
        change = interceptors[i](change);
        if (change) {
          var v32 = !change.type;
          var v33 = v32;
        } else {
          v33 = false;
        }
        v33 && $m1$die(14);
        if (!change) break;
        i = i + 1 | 0;
      }
      return change;
    } finally {
      $m1$untrackedEnd(prevU);
    }
  }
  function $m1$hasListeners(listenable) {
    if (!(listenable.changeListeners_ === void 0)) {
      var v9 = listenable.changeListeners_;
      var v12 = (v9.length | 0) > 0;
      var v13 = v12;
    } else {
      v13 = false;
    }
    return v13;
  }
  function $m1$registerListener(listenable, handler) {
    listenable.changeListeners_ === void 0 && (listenable.changeListeners_ = []);
    var v11 = listenable.changeListeners_;
    v11.push(handler);
    return $m3$once(function() {
      var v18 = +v11.indexOf(handler) | 0;
      v18 != a && v11.splice(v18, 1);
    });
  }
  function $m1$notifyListeners(listenable, change) {
    var v2 = $m1$untrackedStart();
    var v52 = listenable.changeListeners_;
    if (!v52) {
      $m1$untrackedEnd(v2);
      return;
    }
    var v32 = $m3$arraySliceFn.call(v52);
    var v36 = v32.length | 0;
    var v30 = 0;
    while (v30 < v36) {
      v32[v30](change);
      v30 = v30 + 1;
    }
    $m1$untrackedEnd(v2);
  }
  function $m1$initObservable(cb) {
    var derivation = $m1$untrackedStart();
    var allow = true;
    allow = $m1$allowStateChangesStart(true);
    $m1$startBatch();
    try {
      return cb();
    } finally {
      $m1$endBatch();
      $m1$globalState.allowStateChanges = allow;
      $m1$untrackedEnd(derivation);
    }
  }
  function $m1$isAnnotation(thing) {
    return ($m3$isObj(thing) || "function" == typeof thing) && "string" == typeof thing.annotationType_ && "function" == typeof thing.make_ && "function" == typeof thing.extend_;
  }
  function $m1$assert20223DecoratorType(context, types) {
    var v7 = context.kind;
    var v9 = !(true === types.includes(v7));
    if (v9) {
      var v18 = "The decorator applied to '" + $m3$stringifyKey(context.name) + "' cannot be used on a ";
      $m1$die(v18 + context.kind + " element");
    }
  }
  function $m1$createDecoratorAnnotation(annotation, decorate) {
    return $m3$assign(function(v6, v9) {
      if (v9) {
        var v37 = "string" == typeof v9.kind;
        var v172 = v37;
      } else {
        v172 = false;
      }
      if (v172) return decorate(annotation, v6, v9);
      $m1$die("Invalid arguments for `" + annotation.annotationType_ + "`");
    }, annotation);
  }
  var $m4$eq = /* @__PURE__ */ (function() {
    function $m3$unaryPlus(value) {
      return globalThis.Number(value);
    }
    function $m4$protoInstance(ctor, value) {
      if (!ctor) return false;
      var v8 = ctor.isPrototypeOf;
      if ("function" == typeof v8) return true === ctor.isPrototypeOf(value);
      if (true === "constructor" in value) {
        var v242 = value.constructor == ctor;
        var v35 = true === v242;
        var v26 = v35;
      } else {
        v26 = false;
      }
      return v26;
    }
    function $m4$unwrapEq(a$2) {
      if ($m1$isObservableArray(a$2)) return a$2.slice();
      if ($m3$isES6Map(a$2) || $m1$isObservableMap(a$2)) return $m3$arrayFrom(a$2.entries());
      return $m3$isES6Set(a$2) || $m1$isObservableSet(a$2) ? $m3$arrayFrom(a$2.entries()) : a$2;
    }
    return function(a$2, b, depth, aStack, bStack) {
      if (a$2 === b) {
        if (!(0 === a$2)) return true;
        var v172 = 1 / (+$m3$unaryPlus(a$2) | 0) | 0;
        if ($m3$objectIs(v172, 1 / (+$m3$unaryPlus(b) | 0) | 0)) {
          var v30 = true, v29, v36, v47, v55, v61, v65, v88, v89, v101, v103, v118, v133, v134, v136, v147, v160, v161, v169, v171, v174, v185, v186, v190, v193, v204, v205, v209, v213, v214, v215, v216, v221, v226, v248, v278, v309, v316, v319, v325, v326, v337, v338, v339, v340, v341, v342, v343, v344, v349, v355, v364, v373, v381, v388, v392, v405, v407;
        } else {
          v29 = $m3$objectIs($m3$unaryPlus(a$2), $m3$unaryPlus(b));
          v30 = v29;
        }
        return v30;
      }
      if (a$2 == null || b == null) return false;
      if (!(a$2 === a$2)) return !(b === b);
      v47 = typeof a$2;
      if ("function" != v47 && "object" != v47 && "object" != typeof b) return false;
      v65 = $m3$gObject().prototype;
      v349 = v65.toString.call(a$2) + "";
      if (v349 != $m3$gObject().prototype.toString.call(b) + "") return false;
      if ("[object RegExp]" == v349 || "[object String]" == v349) return "" + a$2 == "" + b;
      if ("[object Number]" == v349) {
        v101 = $m3$unaryPlus(a$2);
        v103 = $m3$unaryPlus(b);
        if (!$m3$objectIs(v101, v101)) return !$m3$objectIs(v103, v103);
        if (0 === v101) {
          v118 = 1 / +v101;
          return $m3$objectIs(v118, 1 / +v103);
        }
        return v101 === v103;
      }
      if ("[object Date]" == v349 || "[object Boolean]" == v349) {
        v136 = $m3$unaryPlus(a$2);
        return v136 === $m3$unaryPlus(b);
      }
      if ("[object Symbol]" == v349) {
        v355 = globalThis.Symbol;
        v147 = v355.valueOf.call(a$2);
        return v147 === globalThis.Symbol.valueOf.call(b);
      }
      "[object Map]" == v349 || "[object Set]" == v349 ? (v338 = depth >= 0 ? depth + 1 | 0 : depth, v339 = v338) : v339 = depth;
      v169 = $m4$unwrapEq(a$2);
      v171 = $m4$unwrapEq(b);
      v174 = "[object Array]" == v349;
      if (!v174) {
        if ("object" != typeof v169 || "object" != typeof v171) return false;
        v190 = v169.constructor;
        v193 = v171.constructor;
        !(v190 === v193) ? (v215 = !("function" == typeof v190 && $m4$protoInstance(v190, v190) && "function" == typeof v193 && $m4$protoInstance(v193, v193)), v216 = v215) : v216 = false;
        if (v216 && true === "constructor" in v169 && true === "constructor" in v171) return false;
      }
      if (0 == v339) {
        return false;
      } else {
        v337 = v339 < 0 ? a : v339;
      }
      aStack === void 0 ? (v340 = [], v341 = []) : (v340 = aStack, v341 = bStack);
      v373 = v340.length | 0;
      v343 = v373;
      while (v343 > 0) {
        v248 = v343 - 1;
        if (v340[v248] === v169) return v341[v248] === v171;
        v343 = v248;
      }
      v340.push(v169);
      v341.push(v171);
      if (v174) {
        v381 = v169.length | 0;
        if (v381 != (v171.length | 0)) return false;
        v342 = v381;
        while (v342 > 0) {
          v278 = v342 - 1;
          if (!$m4$eq(v169[v278], v171[v278], v337 - 1 | 0, v340, v341)) return false;
          v342 = v278;
        }
      } else {
        v388 = $m3$gObject().keys(v169);
        v392 = v388.length | 0;
        if (($m3$gObject().keys(v171).length | 0) != v392) return false;
        v344 = 0;
        while (v344 < v392) {
          v309 = v388[v344];
          $m3$hasOwn(v171, v309) ? (v316 = v169[v309], v319 = v171[v309], v325 = $m4$eq(v316, v319, v337 - 1 | 0, v340, v341), v326 = v325) : v326 = false;
          if (!v326) return false;
          v344 = v344 + 1;
        }
      }
      v340.pop();
      v341.pop();
      return true;
    };
  })();
  function $m4$admProxyOrTarget(self) {
    if (self.proxy_) return self.proxy_;
    return self.target_;
  }
  function $m4$getCachedObservablePropDescriptor(key) {
    var v20 = $m4$descriptorCache.get(key);
    if (v20) return v20;
    var v13 = { __proto__: null, get: function() {
      let v4 = this[$m1$$mobx];
      return v4.getObservablePropValue_(key);
    }, set: function(value) {
      let v52 = this[$m1$$mobx];
      return v52.setObservablePropValue_(key, value);
    } };
    $m4$descriptorCache.set(key, v13);
    return v13;
  }
  function $m4$recordAnnotationApplied(adm, annotation, key) {
    adm.appliedAnnotations_[key] = annotation;
  }
  function $m4$assertAnnotable(adm, annotation, key) {
    var v7 = !$m1$isAnnotation(annotation);
    v7 && $m1$die("Cannot annotate '" + adm.name_ + "." + $m3$stringifyKey(key) + "': Invalid annotation.");
    var v27 = !("override" == annotation.annotationType_ + "");
    if (v27 && $m3$hasOwn(adm.appliedAnnotations_, key)) {
      var v43 = "Cannot apply '" + annotation.annotationType_ + "' to '";
      var v55 = v43 + adm.name_ + "." + $m3$stringifyKey(key) + "':\nThe field is already annotated with '";
      $m1$die(v55 + adm.appliedAnnotations_[key].annotationType_ + "'.\nRe-annotating fields is not allowed.\nUse 'override' annotation for methods overridden by subclass.");
    }
  }
  function $m4$setObjectValue(self, key, value, proxyTrap) {
    if ($m3$hasOwn(self.target_, key)) {
      if ($m3$mapHas(self.values_, key)) return self.setObservablePropValue_(key, value);
      if (proxyTrap) {
        var v22 = self.target_;
        return true === $m3$gReflect().set(v22, key, value);
      }
      self.target_[key] = value;
      return true;
    }
    return self.extend_(key, { __proto__: null, value, enumerable: true, writable: true, configurable: true }, self.defaultAnnotation_, proxyTrap);
  }
  function $m4$getAnnotationFromOptions(options) {
    if (!options) return;
    if (!(options.defaultDecorator === void 0)) return options.defaultDecorator;
    if (options.autoBind || false === options.deep) {
      var v29 = {};
      Object.assign(v29, { annotationType_: "true", options_: options, make_: $m4$autoAnnotationMake, extend_: $m4$autoAnnotationExtend });
      return v29;
    }
  }
  var $m4$spliceWithArrayImpl = /* @__PURE__ */ (function() {
    function $m4$callSpliceItems(self, index, deleteCount, newItems) {
      var v6 = self.values_;
      var v121 = newItems.length;
      var v122 = v121;
      var v123 = v122 | 0;
      if (0 == deleteCount && index == (v6.length | 0)) {
        var v116 = 0, v16, v172, v25, v34, v49, v64, v117, v118, v119, v135, v141, v145;
        while (v116 < v123) {
          v25 = newItems[v116];
          v6.push(v25);
          v116 = v116 + 1;
        }
        return $m1$EMPTY_ARRAY;
      }
      if (v123 < 1e4) {
        v34 = [];
        v34.push(index);
        v34.push(deleteCount);
        v117 = 0;
        while (v117 < (newItems.length | 0)) {
          v49 = newItems[v117];
          v34.push(v49);
          v117 = v117 + 1;
        }
        return v6.splice.apply(v6, v34);
      }
      v64 = index + deleteCount | 0;
      v135 = $m3$arraySliceFn.call(v6, index, v64);
      v141 = $m3$arraySliceFn.call(v6, v64, v6.length | 0);
      v145 = v6.length | 0;
      v6.length = (v145 + (newItems.length | 0) | 0) - deleteCount | 0;
      v119 = 0;
      while (v119 < (newItems.length | 0)) {
        v6[index + v119] = newItems[v119];
        v119 = v119 + 1;
      }
      v118 = 0;
      while (v118 < (v141.length | 0)) {
        v6[(index + (newItems.length | 0) | 0) + v118] = v141[v118];
        v118 = v118 + 1;
      }
      return v135;
    }
    function $m4$callNotifySplice(self, index, added, removed) {
      var v102 = !self.owned_;
      var v14 = v102 && $m1$isSpyEnabled();
      var v16 = $m1$hasListeners(self);
      var v172 = null;
      var v21, v13, v25, v28, v30, v39, v59, v63;
      v16 || v14 ? (v25 = self.proxy_, v28 = self.atom_, v30 = v28.name_, v63 = removed.length | 0, v39 = { __proto__: null, observableKind: "array", object: v25, debugObjectName: v30, type: "splice", index, removed, added, removedCount: v63, addedCount: added.length | 0 }, v59 = v39) : v59 = v172;
      v14 && $m1$spyReportStart(v59);
      $m1$reportChanged(self.atom_);
      v16 && $m1$notifyListeners(self, v59);
      v14 && $m1$spyReportEnd(void 0);
    }
    return function(self, index, deleteCount, newItems) {
      $m1$checkIfStateModificationsAreAllowed(self.atom_);
      var v11 = self.values_;
      var v144 = v11.length | 0;
      if (index > v144) {
        var v131 = v144, v22, v34, v44, v51, v55, v67, v78, v83, v109, v117, v118, v130, v132, v133, v134, v135, v136, v137, v138, v139, v140, v149, v155, v159;
      } else {
        index < 0 ? (v22 = v144 + index | 0, v139 = v22 < 0 ? 0 : v22, v130 = v139) : v130 = index;
        v131 = v130;
      }
      v134 = deleteCount < 0 ? 0 : deleteCount;
      v34 = v144 - v131 | 0;
      v133 = v134 > v34 ? v34 : v134;
      newItems === void 0 || newItems == null ? v138 = [] : (!Array.isArray(newItems) ? (v149 = globalThis.Array, v51 = v149.prototype, v55 = v51.slice.call(newItems), v137 = v55) : v137 = newItems, v138 = v137);
      if ($m1$hasInterceptors(self)) {
        v67 = $m1$interceptChange(self, { __proto__: null, object: self.proxy_, type: "splice", index: v131, removedCount: v133, added: v138 });
        if (!v67) return $m1$EMPTY_ARRAY;
        v155 = +v67.removedCount | 0;
        v78 = v67.added;
        v132 = v155;
        v136 = v78;
      } else {
        v132 = v133;
        v136 = v138;
      }
      if (0 != (v136.length | 0)) {
        v83 = [];
        v159 = v136.length | 0;
        v140 = 0;
        while (v140 < v159) {
          v83.push(self.enhancer_(v136[v140], void 0));
          v140 = v140 + 1;
        }
        v135 = v83;
      } else {
        v135 = v136;
      }
      v109 = $m4$callSpliceItems(self, v131, v132, v135);
      (0 != v132 || 0 != (v135.length | 0)) && $m4$callNotifySplice(self, v131, v135, v109);
      return self.dehanceValues_(v109);
    };
  })();
  function $m4$callNotifyUpdate(self, index, newValue, oldValue) {
    var v102 = !self.owned_;
    var v14 = v102 && $m1$isSpyEnabled();
    var v16 = $m1$hasListeners(self);
    var v172 = null;
    var v21, v13, v25, v29, v35, v55;
    v16 || v14 ? (v25 = self.proxy_, v29 = self.atom_, v35 = { __proto__: null, observableKind: "array", object: v25, type: "update", debugObjectName: v29.name_, index, newValue, oldValue }, v55 = v35) : v55 = v172;
    v14 && $m1$spyReportStart(v55);
    $m1$reportChanged(self.atom_);
    v16 && $m1$notifyListeners(self, v55);
    v14 && $m1$spyReportEnd(void 0);
  }
  function $m4$addSimpleArrayExt(funcName) {
    var v14 = globalThis.Array;
    "function" == typeof v14.prototype[funcName] && ($m4$arrayExtensions[funcName] = function() {
      let v52 = this[$m1$$mobx];
      $m1$reportObserved(v52.atom_);
      let v242 = v52.dehanceValues_(v52.values_);
      return v242[funcName].apply(v242, arguments);
    });
  }
  function $m4$addMapLikeArrayExt(funcName) {
    var v14 = globalThis.Array;
    "function" == typeof v14.prototype[funcName] && ($m4$arrayExtensions[funcName] = function(v20, v28) {
      var self = this;
      var v52 = self[$m1$$mobx];
      $m1$reportObserved(v52.atom_);
      var v37 = v52.dehanceValues_(v52.values_);
      var thisArg;
      (arguments.length | 0) > 1 && (thisArg = v28);
      return v37[funcName](function(v9, v12) {
        let v6 = thisArg;
        return v20.call(v6, v9, v12, self);
      });
    });
  }
  function $m4$addReduceLikeArrayExt(funcName) {
    var v14 = globalThis.Array;
    "function" == typeof v14.prototype[funcName] && ($m4$arrayExtensions[funcName] = function() {
      var self = this;
      let v52 = self[$m1$$mobx];
      $m1$reportObserved(v52.atom_);
      let v33 = v52.dehanceValues_(v52.values_), v20 = arguments[0];
      arguments[0] = function(v8, v11, v142) {
        return v20(v8, v11, v142, self);
      };
      return v33[funcName].apply(v33, arguments);
    });
  }
  function $m4$convertToMap(dataStructure) {
    if ($m3$isES6Map(dataStructure) || $m1$isObservableMap(dataStructure)) return dataStructure;
    if (Array.isArray(dataStructure)) return new globalThis.Map(dataStructure);
    if ($m3$isPlainObject(dataStructure)) {
      var v47 = new ($m3$gMap())();
      var v50 = $m3$gObject().keys(dataStructure);
      var v41 = 0, v52, v6, v26, v31;
      while (v41 < (v50.length | 0)) {
        v26 = v50[v41];
        v31 = dataStructure[v50[v41]];
        v47.set(v26, v31);
        v41 = v41 + 1;
      }
      return v47;
    }
    $m1$die1(21, dataStructure);
    return new ($m3$gMap())();
  }
  function $m4$dehanceMap(self, value) {
    return !(self.dehancer === void 0) ? self.dehancer(value) : value;
  }
  var $m4$addSetAlgebra = /* @__PURE__ */ (function() {
    function $m4$setLikeHas(set$2, value) {
      if ("function" == typeof set$2.has) return true === set$2.has(value);
      return false;
    }
    function $m4$setLikeForEach(set$2, fn) {
      if ("function" == typeof set$2.forEach) {
        set$2.forEach(fn);
        return;
      }
      if ("function" == typeof set$2.keys) {
        var v16 = set$2.keys();
        var v19 = v16.next();
        var v34 = v19, v33;
        while (!v34.done) {
          fn(v34.value);
          v33 = v16.next();
          v34 = v33;
        }
      }
    }
    function $m4$setAlgebraPolyfill(funcName, selfSet, other) {
      if ("intersection" == funcName) {
        var v7 = new globalThis.Set();
        $m4$setLikeForEach(selfSet, function(value) {
          $m4$setLikeHas(other, value) && v7.add(value);
        });
        return v7;
      }
      if ("union" == funcName) {
        var v20 = new globalThis.Set(selfSet);
        $m4$setLikeForEach(other, function(value) {
          v20.add(value);
        });
        return v20;
      }
      if ("difference" == funcName) {
        var v32 = new globalThis.Set(selfSet);
        $m4$setLikeForEach(other, function(value) {
          v32.delete(value);
        });
        return v32;
      }
      if ("symmetricDifference" == funcName) {
        var v44 = new globalThis.Set(selfSet);
        $m4$setLikeForEach(other, function(value) {
          true === v44.has(value) ? v44.delete(value) : v44.add(value);
        });
        return v44;
      }
      if ("isSubsetOf" == funcName) {
        var subset = true;
        $m4$setLikeForEach(selfSet, function(value) {
          $m4$setLikeHas(other, value) || (subset = false);
        });
        return subset;
      }
      if ("isSupersetOf" == funcName) {
        var superSet = true;
        $m4$setLikeForEach(other, function(value) {
          true === selfSet.has(value) || (superSet = false);
        });
        return superSet;
      }
      var disjoint = true;
      $m4$setLikeForEach(selfSet, function(value) {
        $m4$setLikeHas(other, value) && (disjoint = false);
      });
      return disjoint;
    }
    return function(funcName) {
      let v32 = $m4$ObservableSet.prototype;
      v32[funcName] = function(v9) {
        var v52 = this.atom_;
        $m1$reportObserved(v52);
        if (("intersection" == funcName || "union" == funcName || "symmetricDifference" == funcName || "isDisjointFrom" == funcName) && $m3$isES6Set(v9) && !$m1$isObservableSet(v9) && "function" == typeof v9[funcName]) return v9[funcName](this);
        var v51 = new globalThis.Set(this);
        if ("function" == typeof v51[funcName]) return v51[funcName].apply(v51, arguments);
        return $m4$setAlgebraPolyfill(funcName, v51, v9);
      };
    };
  })();
  function $m4$isObservableValueCheck(value) {
    if (!value) return false;
    if ($m1$isObservableObject(value)) {
      var v12 = true, v11, v16, v20, v242, v26, v28, v30;
    } else {
      v11 = !!value[$m1$$mobx];
      v12 = v11;
    }
    return v12 || $m1$hasMobXFlag(value, "isMobXAtom") || $m1$hasMobXFlag(value, "isMobXReaction") || $m1$hasMobXFlag(value, "isMobXComputedValue");
  }
  function $m4$getEnhancerFromOptions(options) {
    var v32 = options.deep;
    if (true === v32) return $m4$deepEnhancerFn;
    var v9 = options.deep;
    if (false === v9) return $m4$referenceEnhancerFn;
    if (options.defaultDecorator) {
      var v20 = options.defaultDecorator;
      var v23 = !!v20.options_;
      var v242 = v23, v28, v30, v33, v34, v37, v39;
    } else {
      v242 = false;
    }
    if (v242 && options.defaultDecorator.options_.enhancer_) {
      v37 = options.defaultDecorator;
      v39 = v37.options_;
      return v39.enhancer_;
    }
    return $m4$deepEnhancerFn;
  }
  function $m4$asCreateObservableOptions(thing) {
    return !!thing ? thing : $m4$defaultCreateObservableOptions;
  }
  function $m4$createObservableAnnotation(name, options) {
    let v2 = {};
    Object.assign(v2, { annotationType_: name, options_: options, make_: $m4$annotationOwnMake, extend_: $m4$observableAnnotationExtend });
    return v2;
  }
  function $m4$createComputedAnnotation(name, options) {
    let v2 = {};
    Object.assign(v2, { annotationType_: name, options_: options, make_: $m4$annotationOwnMake, extend_: $m4$computedAnnotationExtend });
    return v2;
  }
  function $m4$createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors) {
    var v11 = !("function" == typeof descriptor.value);
    if (v11) {
      var v20 = "Cannot apply '" + annotation.annotationType_ + "' to '";
      var v32 = v20 + adm.name_ + "." + $m3$stringifyKey(key) + "':\n'";
      $m1$die(v32 + annotation.annotationType_ + "' can only be used on properties with a function value.");
    }
    var v43 = descriptor.value;
    if (annotation.options_) {
      var v51 = annotation.options_;
      var v54 = !!v51.bound;
      var v55 = v54, v61, v69, v72, v73, v76, v88, v91, v92, v102, v105, v106, v108, v115, v126, v127, v128, v129, v130, v131, v139, v140, v141;
    } else {
      v55 = false;
    }
    v55 ? (v139 = v43.bind($m4$admProxyOrTarget(adm)), v126 = v139) : v126 = v43;
    v61 = $m3$stringifyKey(key);
    annotation.options_ ? (v69 = annotation.options_, v72 = !!v69.name, v73 = v72) : v73 = false;
    v73 ? (v76 = annotation.options_, v140 = v76.name + "", v127 = v140) : v127 = v61;
    annotation.options_ ? (v88 = annotation.options_, v91 = !!v88.autoAction, v92 = v91) : v92 = false;
    v128 = v92;
    v141 = void 0;
    annotation.options_ ? (v102 = annotation.options_, v105 = !!v102.bound, v106 = v105) : v106 = false;
    v106 ? (v108 = $m4$admProxyOrTarget(adm), v129 = v108) : v129 = v141;
    safeDescriptors ? (v115 = !!adm.isPlainObject_, v130 = v115, v131 = false) : (v130 = true, v131 = true);
    return { __proto__: null, value: $m1$createAction(v127, v126, v128, v129), configurable: v130, enumerable: false, writable: v131 };
  }
  function $m4$createActionAnnotation(name, options) {
    let v2 = {};
    Object.assign(v2, { annotationType_: name, options_: options, make_: $m4$actionAnnotationMake, extend_: $m4$actionAnnotationExtend });
    return v2;
  }
  function $m4$registerLazyObservable(target, annotation, keyName, value) {
    var v9 = $m4$asObservableObject(target)[$m1$$mobx];
    v9.lazyObservableKeys_ || (v9.lazyObservableKeys_ = new ($m3$gMap())());
    v9.lazyObservableKeys_.set(keyName, function() {
      var v52 = $m4$deepEnhancerFn;
      if (annotation.options_) {
        var v13 = annotation.options_;
        var v16 = !!v13.enhancer_;
        var v172 = v16, v20, v22, v36, v43;
      } else {
        v172 = false;
      }
      v172 ? (v20 = annotation.options_, v22 = v20.enhancer_, v43 = v22) : v43 = v52;
      $m3$stringifyKey(keyName);
      v36 = v9.name_ + "." + $m3$stringifyKey(keyName);
      return new $m4$ObservableValue(value, v43, v36, false);
    });
    return v9;
  }
  function $m4$createFlowDescriptor(adm, descriptor, bound, safeDescriptors) {
    var v8 = descriptor.value;
    if (!$m1$isFlow(v8)) {
      var v15 = $m4$flow(v8);
      var v38 = v15, v30, v37, v39, v40, v43;
    } else {
      v38 = v8;
    }
    bound ? (v43 = v38.bind($m4$admProxyOrTarget(adm)), v43.isMobXFlow = true, v37 = v43) : v37 = v38;
    safeDescriptors ? (v30 = !!adm.isPlainObject_, v39 = v30, v40 = false) : (v39 = true, v40 = true);
    return { __proto__: null, value: v37, configurable: v39, enumerable: false, writable: v40 };
  }
  function $m4$createObservable(v, arg2, arg3) {
    if (arg2 && "string" == typeof arg2.kind) return $m4$decorateObservable20223_($m4$observableAnnotation, v, arg2);
    if ($m4$isObservableValueCheck(v)) return v;
    if ($m3$isPlainObject(v)) return $m4$observable.object.call($m4$observable, v, arg2, arg3);
    if (Array.isArray(v)) return $m4$observable.array.call($m4$observable, v, arg2);
    if ($m3$isES6Map(v)) return $m4$observable.map.call($m4$observable, v, arg2);
    if ($m3$isES6Set(v)) return $m4$observable.set.call($m4$observable, v, arg2);
    if ("object" == typeof v && !(v == null)) return v;
    return $m4$observable.box.call($m4$observable, v, arg2);
  }
  function $m4$createSchedulerFromOptions(opts) {
    if (opts.scheduler) return opts.scheduler;
    if (opts.delay) return function(callback) {
      let v6 = opts.delay;
      return globalThis.setTimeout(callback, v6);
    };
    return function(callback) {
      return callback();
    };
  }
  function $m4$wrapErrorHandler(errorHandler, baseFn) {
    return !errorHandler ? baseFn : function() {
      try {
        return baseFn.apply(this, arguments);
      } catch (v8) {
        errorHandler.call(this, v8);
        return;
      }
    };
  }
  function $m4$whenEffect(predicate, effect, opts) {
    opts = opts || {};
    var disposer;
    var timeoutHandle;
    if ("number" == typeof opts.timeout) {
      var v70 = new globalThis.Error("WHEN_TIMEOUT");
      var v19 = function() {
        var v6 = disposer[$m1$$mobx];
        v6.isDisposed || (disposer(), opts.onError ? opts.onError(v70) : $m3$throwErr(v70));
      };
      var v22 = opts.timeout;
      timeoutHandle = globalThis.setTimeout(v19, v22);
    }
    if (!opts.name) {
      var v30 = opts;
      v30.name = "When@" + $m1$getNextId();
    }
    var effectAction = $m1$createAction("When-effect", effect, false, void 0);
    effectAction = $m1$createAction(opts.name + "-effect", effect, false, void 0);
    disposer = $m4$autorun(function(r) {
      if ($m1$allowStateChanges(false, predicate)) {
        var v25 = void 0;
        r.dispose();
        if (timeoutHandle) {
          var v192 = timeoutHandle;
          globalThis.clearTimeout(v192);
        }
        effectAction();
      }
    }, opts);
    return disposer;
  }
  function $m4$whenPromise(predicate, opts) {
    var v52 = !!opts;
    v52 && opts.onError && $m1$die("the options 'onError' and 'promise' cannot be combined");
    if (opts) {
      var v21 = !!opts.signal;
      var v22 = v21, v11, v12, v26, v29, v30, v35, v41, v54, v61, v62, v66, v70, v77, v84, v87, v97;
    } else {
      v22 = false;
    }
    if (v22 && opts.signal.aborted) {
      v87 = globalThis.Promise;
      v35 = v87.reject(new globalThis.Error("WHEN_ABORTED"));
      v35.cancel = function() {
        return null;
      };
      return v35;
    }
    v41 = {};
    Object.assign(v41, { cancel: void 0, abort: void 0 });
    v54 = new globalThis.Promise(function(v7, v102) {
      var v13 = $m3$assign({}, opts);
      v13.onError = v102;
      var v20 = $m4$whenEffect(predicate, v7, v13);
      Object.assign(v41, { cancel: function() {
        v20();
        v102(new globalThis.Error("WHEN_CANCELLED"));
      }, abort: function() {
        v20();
        v102(new globalThis.Error("WHEN_ABORTED"));
      } });
      if (opts) {
        var v39 = !!opts.signal;
        var v40 = v39, v44, v48, v612;
      } else {
        v40 = false;
      }
      v40 && "function" == typeof opts.signal.addEventListener && opts.signal.addEventListener("abort", v41.abort);
    });
    opts ? (v61 = !!opts.signal, v62 = v61) : v62 = false;
    v62 && "function" == typeof opts.signal.removeEventListener ? (v77 = v54.finally(function() {
      opts.signal.removeEventListener("abort", v41.abort);
    }), v84 = v77) : v84 = v54;
    v84.cancel = v41.cancel;
    return v84;
  }
  function $m4$makeAnnotate(adm, key, annotation) {
    if (true === annotation) {
      var v8 = adm.defaultAnnotation_;
      var v75 = v8, v25, v34, v38, v47, v48, v62, v76, v80, v84, v87;
    } else {
      v75 = annotation;
    }
    if (false === v75) return;
    $m4$assertAnnotable(adm, v75, key);
    true === key in adm.target_ || (v25 = v75.annotationType_, v34 = adm.name_ + "." + $m3$stringifyKey(key), v80 = [], v80.push(v25), v80.push(v34), $m1$dieRest(1, v80));
    v38 = adm.target_;
    v76 = v38;
    for (; ; ) {
      v76 ? (v47 = !(v76 === $m3$gObject().prototype), v48 = v47) : v48 = false;
      if (!v48) {
        break;
      }
      v84 = $m3$gObject().getOwnPropertyDescriptor(v76, key);
      if (v84) {
        v62 = v75.make_(adm, key, v84, v76);
        if (0 === v62) return;
        if (1 === v62) break;
      }
      v87 = $m3$gObject().getPrototypeOf(v76);
      v76 = v87;
    }
    $m4$recordAnnotationApplied(adm, v75, key);
  }
  function $m4$observeObservable(thing, listener, fireImmediately) {
    var v6 = $m4$getAdministration(thing);
    if ($m1$isObservableArray(thing)) {
      var v742 = void 0;
      if (fireImmediately) {
        var v12 = v6.values_;
        var v76 = $m3$arraySliceFn.call(v12);
        var v19 = v6.proxy_;
        var v22 = v6.atom_;
        var v242 = v22.name_;
        listener({ __proto__: null, observableKind: "array", object: v19, debugObjectName: v242, type: "splice", index: 0, added: v76, addedCount: v76.length | 0, removed: [], removedCount: 0 });
      }
      return $m1$registerListener(v6, listener);
    }
    if ($m1$isObservableMap(thing)) {
      fireImmediately && $m1$die("`observe` doesn't support fireImmediately=true in combination with maps.");
      return $m1$registerListener(v6, listener);
    }
    if ($m1$isObservableSet(thing)) {
      fireImmediately && $m1$die("`observe` doesn't support fireImmediately=true in combination with sets.");
      return $m1$registerListener(v6, listener);
    }
    if ($m1$isObservableObject(thing)) {
      fireImmediately && $m1$die("`observe` doesn't support the fire immediately property for observable objects.");
      return $m1$registerListener(v6, listener);
    }
    return $m4$observeValue(v6, listener, fireImmediately);
  }
  function $m4$observeValue(adm, listener, fireImmediately) {
    if ($m1$hasMobXFlag(adm, "isMobXComputedValue")) {
      var firstTime = true;
      var prevValue;
      return $m4$autorun(function() {
        var v8 = adm.get;
        var v34 = adm.get();
        if (!firstTime || fireImmediately) {
          var v16 = $m1$untrackedStart();
          var v22 = adm.name_;
          listener({ __proto__: null, observableKind: "computed", debugObjectName: v22, type: "update", object: adm, newValue: v34, oldValue: prevValue });
          $m1$untrackedEnd(v16);
        }
        firstTime = false;
        prevValue = v34;
      });
    }
    if (fireImmediately) {
      var v23 = adm.name_;
      listener({ __proto__: null, observableKind: "value", debugObjectName: v23, object: adm, type: "update", newValue: adm.value_, oldValue: void 0 });
    }
    return $m1$registerListener(adm, listener);
  }
  function $m4$interceptHook(listenersKey, args) {
    var atomNode;
    var v52 = args[1];
    var cb = v52;
    (args.length | 0) > 2 && "function" == typeof args[2] ? (atomNode = $m4$getAtom(args[0], args[1]), cb = args[2]) : atomNode = $m4$getAtom(args[0]);
    if (atomNode[listenersKey]) {
      var v40 = atomNode[listenersKey];
      v40.add(cb);
    } else {
      var v43 = atomNode;
      v43[listenersKey] = new globalThis.Set();
      var v48 = atomNode[listenersKey];
      v48.add(cb);
    }
    return function() {
      var v6 = atomNode[listenersKey];
      !v6 || (v6.delete(cb), 0 == (+v6.size | 0) && delete atomNode[listenersKey]);
    };
  }
  function $m4$toJSHelper(source, alreadySeen) {
    if (source == null || "object" != typeof source || !$m4$isObservableValueCheck(source)) return source;
    if ($m1$hasMobXFlag(source, "isMobXObservableValue") || $m1$hasMobXFlag(source, "isMobXComputedValue")) return $m4$toJSHelper(source.get(), alreadySeen);
    if ($m3$mapHas(alreadySeen, source)) return alreadySeen.get(source);
    if ($m1$isObservableArray(source)) {
      var v37 = [];
      alreadySeen.set(source, v37);
      var v161 = 0, v9, v13, v14, v21, v70, v97, v108, v111, v121, v137, v149, v162, v163, v164, v168, v177, v187, v193;
      while (v161 < (source.length | 0)) {
        v37[v161] = $m4$toJSHelper(source[v161], alreadySeen);
        v161 = v161 + 1;
      }
      return v37;
    }
    if ($m1$isObservableSet(source)) {
      v177 = new globalThis.Set();
      alreadySeen.set(source, v177);
      v70 = $m3$arrayFrom(source.values());
      v162 = 0;
      while (v162 < (v70.length | 0)) {
        v177.add($m4$toJSHelper(v70[v162], alreadySeen));
        v162 = v162 + 1;
      }
      return v177;
    }
    if ($m1$isObservableMap(source)) {
      v187 = new ($m3$gMap())();
      alreadySeen.set(source, v187);
      v97 = $m3$arrayFrom(source.entries());
      v163 = 0;
      while (v163 < (v97.length | 0)) {
        v108 = v97[v163][0];
        v111 = v97[v163];
        v187.set(v108, $m4$toJSHelper(v111[1], alreadySeen));
        v163 = v163 + 1;
      }
      return v187;
    }
    v121 = {};
    alreadySeen.set(source, v121);
    v193 = $m4$ownKeysApi(source);
    v164 = 0;
    var v192 = void 0;
    while (v164 < (v193.length | 0)) {
      v137 = $m3$gObject().prototype;
      true === v137.propertyIsEnumerable.call(source, v193[v164]) && (v149 = v193[v164], v121[v149] = $m4$toJSHelper(source[v193[v164]], alreadySeen));
      v164 = v164 + 1;
    }
    return v121;
  }
  function $m4$nodeToDependencyTree(node) {
    var v4 = { __proto__: null, name: node.name_ };
    if (node.observing_) {
      var v12 = node.observing_;
      var v15 = (v12.length | 0) > 0;
      var v16 = v15, v172, v22, v40;
    } else {
      v16 = false;
    }
    if (v16) {
      v172 = [];
      v40 = 0;
      for (; ; ) {
        v22 = node.observing_;
        if (v40 >= (v22.length | 0)) {
          break;
        }
        v172.push($m4$nodeToDependencyTree(node.observing_[v40]));
        v40 = v40 + 1;
      }
      v4.dependencies = v172;
    }
    return v4;
  }
  function $m4$nodeToObserverTree(node) {
    var v4 = { __proto__: null, name: node.name_ };
    if ($m1$hasObservers(node)) {
      var v9 = node.observers_;
      var v12 = $m3$arrayFrom(v9.values());
      var v13 = [];
      var v32 = 0;
      while (v32 < (v12.length | 0)) {
        v13.push($m4$nodeToObserverTree(v12[v32]));
        v32 = v32 + 1;
      }
      v4.observers = v13;
    }
    return v4;
  }
  var v3 = globalThis.Object;
  var v5 = v3.prototype;
  var $m3$hasOwnPropertyFn = v5.hasOwnProperty;
  var v10 = globalThis.Object;
  var $m3$objectIsFn = v10.is;
  var v17 = globalThis.Array.prototype;
  var $m3$arraySliceFn = v17.slice;
  var v24 = globalThis.Object.prototype;
  var $m3$isPrototypeOfFn = v24.isPrototypeOf;
  var $m3$plainObjectString = $m3$gObject().toString();
  var $m3$noop = (0, function() {
  });
  var v1333 = [];
  $m3$gObject().freeze(v1333);
  var $m1$EMPTY_ARRAY = v1333;
  var v1337 = { __proto__: null };
  $m3$gObject().freeze(v1337);
  var $m1$EMPTY_OBJECT = v1337;
  var $m1$$mobx = $m3$gSymbol()("mobx administration");
  var $m1$currentActionId = 0;
  var $m1$nextActionId = 1;
  var $m1$canMergeGlobalState = true;
  var $m1$isolateCalled = false;
  var $m1$tmpNameDescriptor = { __proto__: null, value: "action", configurable: true, writable: false, enumerable: false };
  var v74 = function() {
  };
  var v1347 = $m3$gObject().getOwnPropertyDescriptor(v74, "name");
  if (!(v1347 == null)) {
    v84 = !!v1347.configurable;
    v85 = v84;
  } else {
    v85 = false;
  }
  var v84;
  var v85;
  var v92;
  var v95;
  var v104;
  var v117;
  var v124;
  var v130;
  var v136;
  var v142;
  var v148;
  var v157;
  var v163;
  var v169;
  var v181;
  var v187;
  var v193;
  var v199;
  var v205;
  var v211;
  var v217;
  var v223;
  var v250;
  var v256;
  var v261;
  var v266;
  var v272;
  var v278;
  var v284;
  var v290;
  var v296;
  var v302;
  var v308;
  var v314;
  var v320;
  var v326;
  var v332;
  var v366;
  var v373;
  var v375;
  var v377;
  var v404;
  var v407;
  var v411;
  var v416;
  var v422;
  var v428;
  var v434;
  var v440;
  var v446;
  var v452;
  var v458;
  var v464;
  var v477;
  var v483;
  var v489;
  var v495;
  var v501;
  var v507;
  var v513;
  var v519;
  var v525;
  var v531;
  var v537;
  var v543;
  var v549;
  var v555;
  var v561;
  var v609;
  var v615;
  var v621;
  var v627;
  var v633;
  var v639;
  var v645;
  var v760;
  var v766;
  var v772;
  var v778;
  var v784;
  var v790;
  var v796;
  var v802;
  var v808;
  var v814;
  var v820;
  var v826;
  var v832;
  var v838;
  var v844;
  var v850;
  var v856;
  var v862;
  var v868;
  var v875;
  var v882;
  var v895;
  var v901;
  var v907;
  var v913;
  var v919;
  var v925;
  var v931;
  var v937;
  var v943;
  var v949;
  var v955;
  var v961;
  var v968;
  var v975;
  var v1001;
  var v1003;
  var v1040;
  var v1044;
  var v1048;
  var v1056;
  var v1063;
  var v1072;
  var v1102;
  var v1105;
  var v1108;
  var v1115;
  var v1126;
  var v1131;
  var v1137;
  var v1139;
  var v1141;
  var v1143;
  var v1145;
  var v1150;
  var v1153;
  var v1168;
  var v1173;
  var v1176;
  var v1187;
  var v1204;
  var v1206;
  var v1210;
  var v1212;
  var v1216;
  var v1220;
  var v1224;
  var v1230;
  var v1232;
  var v1234;
  var v1236;
  var v1238;
  var v1240;
  var v1242;
  var v1244;
  var v1246;
  var v1248;
  var v1250;
  var v1252;
  var v1254;
  var v1365;
  var v1396;
  var v1402;
  var v1413;
  var v1418;
  var v1423;
  var v1428;
  var v1448;
  var v1455;
  var $m1$isFunctionNameConfigurable = v85;
  var $m1$persistentKeys = [];
  $m1$initPersistentKeys();
  var $m1$globalState = $m1$initGlobalState();
  var $m1$defaultEquals = (0, function(a$2, b) {
    return $m3$objectIs(a$2, b);
  });
  v92 = true;
  var $m1$END_EVENT = { __proto__: null, type: "report-end", spyReportEnd: v92 };
  v95 = (0, function(listener) {
    var v102 = $m1$globalState.spyListeners;
    v102.push(listener);
    return $m3$once(function() {
      var v2 = $m1$globalState;
      var v6 = $m1$globalState.spyListeners;
      var v11 = [];
      var v15 = v6.length | 0;
      var v172 = 0, v22;
      while (v172 < v15) {
        v6[v172] === listener || (v22 = v6[v172], v11.push(v22));
        v172 = v172 + 1;
      }
      v2.spyListeners = v11;
    });
  });
  var $m1$propagateChangedEach = (0, function(d) {
    d.dependenciesState_ || d.onBecomeStale_();
    d.dependenciesState_ = 2;
  });
  var $m1$propagateMaybeChangedEach = (0, function(d) {
    d.dependenciesState_ || (d.dependenciesState_ = 1, d.onBecomeStale_());
  });
  var $m1$confirmedObservable = void 0;
  var $m1$propagateChangeConfirmedEach = (0, function(d) {
    var v4 = d.dependenciesState_;
    1 === v4 ? d.dependenciesState_ = 2 : v4 || ($m1$confirmedObservable.lowestObserverState_ = 0);
  });
  v104 = (0, function(actionFn) {
    var prev = $m1$untrackedStart();
    try {
      return actionFn();
    } finally {
      $m1$untrackedEnd(prev);
    }
  });
  var $m1$allowStateChanges = (0, function(v4, v7) {
    var prev = $m1$allowStateChangesStart(!!v4);
    try {
      return v7();
    } finally {
      $m1$globalState.allowStateChanges = prev;
    }
  });
  var $m1$CaughtException = (0, function(cause) {
    this.cause = cause;
    return this;
  });
  $m3$defineProperty($m1$CaughtException, "name", { __proto__: null, value: "CaughtException", configurable: v92 });
  v117 = $m1$CaughtException.prototype;
  v117.isMobXCaughtException = v92;
  var $m1$Atom = (0, function(v16) {
    if ((arguments.length | 0) > 0 && !(v16 === void 0)) {
      var v45 = v16 + "";
      var v39 = v45, v12, v13, v21;
    } else {
      v21 = "Atom@" + $m1$getNextId();
      v39 = v21;
    }
    this.name_ = v39;
    this.observers_ = new globalThis.Set();
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = a;
    this.flags_ = 0;
    return this;
  });
  v124 = $m1$Atom.prototype;
  v124.onBO = function() {
    $m1$onBOImpl(this);
  };
  v130 = $m1$Atom.prototype;
  v130.onBUO = function() {
    $m1$onBUOImpl(this);
  };
  v136 = $m1$Atom.prototype;
  v136.reportObserved = function() {
    return $m1$reportObserved(this);
  };
  v142 = $m1$Atom.prototype;
  v142.reportChanged = function() {
    $m1$reportChanged(this);
  };
  v148 = $m1$Atom.prototype;
  v148.toString = function() {
    return this.name_;
  };
  $m3$createInstanceofPredicate("Atom", $m1$Atom);
  v157 = $m1$Atom.prototype;
  $m1$installFlagAccessor(v157, "isBeingObserved", 1);
  v163 = $m1$Atom.prototype;
  $m1$installFlagAccessor(v163, "isPendingUnobservation", 2);
  v169 = $m1$Atom.prototype;
  $m3$defineProperty(v169, "diffValue", { __proto__: null, configurable: v92, get: function() {
    if (0 != (+this.flags_ & 4)) return 1;
    return 0;
  }, set: function(value) {
    var v27 = +this.flags_;
    1 == (+value | 0) ? this.flags_ = v27 | 4 : this.flags_ = v27 & (4 ^ a);
  } });
  var $m1$createAtom = (0, function(v102, v28, v36) {
    if ((arguments.length | 0) > 0 && !(v102 === void 0)) {
      var v71 = new $m1$Atom(v102);
      var v62 = v71, v12, v13, v21, v29, v46, v58, v63, v64, v72;
    } else {
      v72 = new $m1$Atom();
      v62 = v72;
    }
    v21 = $m3$noop;
    v63 = (arguments.length | 0) > 1 ? v28 : v21;
    v29 = $m3$noop;
    v64 = (arguments.length | 0) > 2 ? v36 : v29;
    v63 === $m3$noop || (v62.onBOL = new globalThis.Set(), v46 = v62.onBOL, v46.add(v63));
    v64 === $m3$noop || (v62.onBUOL = new globalThis.Set(), v58 = v62.onBUOL, v58.add(v64));
    return v62;
  });
  var $m1$reactionScheduler = function(f) {
    return f();
  };
  var $m1$runReactionsHelperFn = function() {
    $m1$globalState.isRunningReactions = true;
    var v52 = $m1$globalState.pendingReactions;
    var v60 = 0, v13, v23, v50, v61, v72, v76, v94;
    while ((v52.length | 0) > 0) {
      v13 = v60 + 1 | 0;
      100 == v13 && (v23 = "Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: " + v52[0], v94 = globalThis.console, v94.error(v23), v52.splice(0, v52.length | 0));
      v72 = v52.splice(0, v52.length | 0);
      v76 = v72.length | 0;
      v61 = 0;
      while (v61 < v76) {
        v50 = v72[v61];
        v50.runReaction_();
        v61 = v61 + 1;
      }
      v60 = v13;
    }
    $m1$globalState.isRunningReactions = false;
  };
  var $m1$Reaction = (0, function(v16, v36, v44, v59) {
    if ((arguments.length | 0) > 0 && !(v16 === void 0)) {
      var v94 = v16 + "";
      var v88 = v94, v12, v13, v21, v45, v46, v61, v62;
    } else {
      v21 = "Reaction@" + $m1$getNextId();
      v88 = v21;
    }
    this.name_ = v88;
    this.onInvalidate_ = void 0;
    (arguments.length | 0) > 1 && (this.onInvalidate_ = v36);
    (arguments.length | 0) > 2 ? (v45 = !!v44, v46 = v45) : v46 = false;
    v46 && (this.errorHandler_ = v44);
    (arguments.length | 0) > 3 && !(v59 === void 0) && (this.requiresObservable_ = v59);
    this.observing_ = [];
    this.newObserving_ = null;
    this.dependenciesState_ = a;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.flags_ = 0;
    return this;
  });
  v181 = $m1$Reaction.prototype;
  v181.onBecomeStale_ = function() {
    this.schedule_();
  };
  v187 = $m1$Reaction.prototype;
  v187.schedule_ = function() {
    if (!this.isScheduled) {
      this.isScheduled = true;
      var v11 = $m1$globalState.pendingReactions;
      v11.push(this);
      $m1$runReactions();
    }
  };
  v193 = $m1$Reaction.prototype;
  v193.runReaction_ = function() {
    if (!this.isDisposed) {
      $m1$startBatch();
      this.isScheduled = false;
      var v12 = $m1$globalState.trackingContext;
      $m1$globalState.trackingContext = this;
      if ($m1$shouldCompute(this)) {
        this.isTrackPending = true;
        try {
          this.onInvalidate_();
          var v29 = !!this.isTrackPending;
          var v30 = v29, v32, v33, v40;
          v30 && $m1$isSpyEnabled() && $m1$spyReport({ __proto__: null, name: this.name_, type: "scheduled-reaction" });
        } catch (v402) {
          this.reportExceptionInDerivation_(v402);
        }
      }
      $m1$globalState.trackingContext = v12;
      $m1$endBatch();
    }
  };
  v199 = $m1$Reaction.prototype;
  v199.track = function(fn) {
    if (this.isDisposed) return;
    $m1$startBatch();
    var v102 = $m1$isSpyEnabled();
    var v77 = void 0;
    if (v102) {
      var v80 = globalThis.Date;
      var v82 = v80.now();
      $m1$spyReportStart({ __proto__: null, name: this.name_, type: "reaction" });
      var v75 = v82, v29, v36, v87, v91;
    } else {
      v75 = v77;
    }
    this.isRunning = true;
    v29 = $m1$globalState.trackingContext;
    $m1$globalState.trackingContext = this;
    v36 = $m1$trackDerivedFunction(this, fn, void 0);
    $m1$globalState.trackingContext = v29;
    this.isRunning = false;
    this.isTrackPending = false;
    !this.isDisposed || $m1$clearObserving(this);
    $m1$isCaughtException(v36) && this.reportExceptionInDerivation_(v36.cause);
    v102 && (v87 = globalThis.Date, v91 = +v87.now() | 0, $m1$spyReportEnd({ __proto__: null, time: v91 - (+v75 | 0) | 0 }));
    $m1$endBatch();
  };
  v205 = $m1$Reaction.prototype;
  v205.reportExceptionInDerivation_ = function(error) {
    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }
    !$m1$globalState.disableErrorBoundaries || $m3$throwErr(error);
    "[mobx] uncaught error in '" + this;
    var v32 = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
    if (!$m1$globalState.suppressReactionErrors) {
      var v108 = globalThis.console;
      v108.error(v32, error);
    } else {
      var v49 = "[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)";
      var v111 = globalThis.console;
      v111.warn(v49);
    }
    var v53 = $m1$isSpyEnabled();
    if (v53) {
      var v58 = this.name_;
      $m1$spyReport({ __proto__: null, type: "error", name: v58, message: v32, error: "" + error });
    }
    var v67 = $m1$globalState.globalReactionErrorHandlers;
    var v102 = v67.length | 0;
    var v86 = 0;
    while (v86 < v102) {
      v67[v86](error, this);
      v86 = v86 + 1;
    }
  };
  v211 = $m1$Reaction.prototype;
  v211.dispose = function() {
    this.isDisposed || (this.isDisposed = true, this.isRunning || ($m1$startBatch(), $m1$clearObserving(this), $m1$endBatch()));
  };
  v217 = $m1$Reaction.prototype;
  v217.getDisposer_ = function(abortSignal) {
    var self = this;
    var dispose = function() {
      var v53 = self.dispose;
      self.dispose();
      !(abortSignal == null) && "function" == typeof abortSignal.removeEventListener && abortSignal.removeEventListener("abort", dispose);
    };
    !(abortSignal == null) && "function" == typeof abortSignal.addEventListener && abortSignal.addEventListener("abort", dispose);
    dispose[$m1$$mobx] = self;
    if (true === "dispose" in globalThis.Symbol) {
      var v49 = globalThis.Symbol;
      var v52 = "symbol" == typeof v49.dispose;
      var v31 = v52, v14, v32, v35, v41, v55;
    } else {
      v31 = false;
    }
    v31 && (v32 = dispose, v55 = globalThis.Symbol, v35 = v55.dispose, v32[v35] = dispose);
    return dispose;
  };
  v223 = $m1$Reaction.prototype;
  v223.toString = function() {
    return "Reaction[" + this.name_ + "]";
  };
  $m3$createInstanceofPredicate("Reaction", $m1$Reaction);
  $m1$installFlagAccessor($m1$Reaction.prototype, "isDisposed", 1);
  $m1$installFlagAccessor($m1$Reaction.prototype, "isScheduled", 2);
  $m1$installFlagAccessor($m1$Reaction.prototype, "isTrackPending", 4);
  v250 = $m1$Reaction.prototype;
  $m1$installFlagAccessor(v250, "isRunning", 8);
  v256 = $m1$Reaction.prototype;
  $m3$defineProperty(v256, "diffValue", { __proto__: null, configurable: v92, get: function() {
    if (0 != (+this.flags_ & 16)) return 1;
    return 0;
  }, set: function(value) {
    var v27 = +this.flags_;
    1 == (+value | 0) ? this.flags_ = v27 | 16 : this.flags_ = v27 & (16 ^ a);
  } });
  v261 = (0, function(handler) {
    let v4 = $m1$globalState.globalReactionErrorHandlers;
    v4.push(handler);
    return function() {
      var v42 = $m1$globalState.globalReactionErrorHandlers;
      var v20 = +v42.indexOf(handler) | 0;
      v20 >= 0 && $m1$globalState.globalReactionErrorHandlers.splice(v20, 1);
    };
  });
  var $m1$ComputedValue = (0, function(options) {
    options.get || $m1$die(31);
    this.derivation = options.get;
    if (options.name) {
      var v115 = options.name + "";
      var v113 = v115, v26, v38, v87;
    } else {
      v26 = "ComputedValue@" + $m1$getNextId();
      v113 = v26;
    }
    this.name_ = v113;
    options.set ? (v38 = v113 + "-setter", this.setter_ = $m1$createAction(v38, options.set, false, void 0)) : this.setter_ = void 0;
    this.equals_ = $m1$defaultEquals;
    !options.equals || (this.equals_ = options.equals);
    this.scope_ = options.context;
    this.requiresReaction_ = options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
    this.dependenciesState_ = a;
    this.observing_ = [];
    v87 = null;
    this.newObserving_ = v87;
    this.observers_ = new globalThis.Set();
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = 0;
    this.unboundDepsCount_ = 0;
    this.value_ = new $m1$CaughtException(v87);
    this.flags_ = 0;
    return this;
  });
  v266 = $m1$ComputedValue.prototype;
  v266.onBecomeStale_ = function() {
    $m1$propagateMaybeChanged(this);
  };
  v272 = $m1$ComputedValue.prototype;
  v272.onBO = function() {
    $m1$onBOImpl(this);
  };
  v278 = $m1$ComputedValue.prototype;
  v278.onBUO = function() {
    $m1$onBUOImpl(this);
  };
  v284 = $m1$ComputedValue.prototype;
  v284.computeValue_ = function(track) {
    this.isComputing = true;
    var v8 = $m1$allowStateChangesStart(false);
    var v49 = v8, v15, v22;
    var res;
    if (track) {
      v15 = this.derivation;
      res = $m1$trackDerivedFunction(this, v15, this.scope_);
    } else {
      v22 = $m1$globalState.disableErrorBoundaries;
      if (true === v22) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (v39) {
          res = new $m1$CaughtException(v39);
        }
      }
    }
    $m1$globalState.allowStateChanges = v49;
    this.isComputing = false;
    return res;
  };
  v290 = $m1$ComputedValue.prototype;
  v290.trackAndCompute = function() {
    var v32 = this.value_;
    var v9 = (+this.dependenciesState_ | 0) == a;
    var v59 = this.computeValue_(true);
    if (v9) {
      var v20 = true, v19, v23, v242, v34, v35, v42, v47;
    } else {
      v19 = $m1$isCaughtException(v32);
      v20 = v19;
    }
    v35 = v20 || $m1$isCaughtException(v59) || !(true === this.equals_(v32, v59));
    v35 && (this.value_ = v59, v42 = $m1$isSpyEnabled(), v42 && (v47 = this.name_, $m1$spyReport({ __proto__: null, observableKind: "computed", debugObjectName: v47, object: this.scope_, type: "update", oldValue: v32, newValue: v59 })));
    return v35;
  };
  v296 = $m1$ComputedValue.prototype;
  v296.get = function() {
    if (this.isComputing) {
      var v8 = this.name_;
      var v11 = this.derivation;
      var v88 = [];
      v88.push(v8);
      v88.push(v11);
      $m1$dieRest(32, v88);
    }
    if (!$m1$globalState.inBatch) {
      var v21 = this.observers_;
      var v25 = !v21.size;
      var v26 = v25, v32, v33, v56, v64, v65, v80;
    } else {
      v26 = false;
    }
    if (v26 && !this.keepAlive_) {
      $m1$shouldCompute(this) && (this.warnAboutUntrackedRead_(), $m1$startBatch(), this.value_ = this.computeValue_(false), $m1$endBatch());
    } else {
      $m1$reportObserved(this);
      if ($m1$shouldCompute(this)) {
        var v54 = $m1$globalState;
        v56 = v54.trackingContext;
        this.keepAlive_ && !v56 && ($m1$globalState.trackingContext = this);
        !this.trackAndCompute() || $m1$propagateChangeConfirmed(this);
        $m1$globalState.trackingContext = v56;
      }
    }
    v80 = this.value_;
    $m1$isCaughtException(v80) && $m3$throwErr(v80.cause);
    return v80;
  };
  v302 = $m1$ComputedValue.prototype;
  v302.set = $jsMethod1(function(self, value) {
    if (self.setter_) {
      !self.isRunningSetter || $m1$die1(33, self.name_);
      self.isRunningSetter = true;
      try {
        self.setter_.call(self.scope_, value);
      } finally {
        self.isRunningSetter = false;
      }
    } else {
      $m1$die1(34, self.name_);
    }
  });
  v308 = $m1$ComputedValue.prototype;
  v308.suspend_ = function() {
    this.keepAlive_ || ($m1$clearObserving(this), this.value_ = void 0);
  };
  v314 = $m1$ComputedValue.prototype;
  v314.warnAboutUntrackedRead_ = function() {
    if ("boolean" == typeof this.requiresReaction_) {
      var v12 = !!this.requiresReaction_;
      var v28 = v12, v16, v25, v40;
    } else {
      v16 = !!$m1$globalState.computedRequiresReaction;
      v28 = v16;
    }
    v28 && (v25 = "[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.", v40 = globalThis.console, v40.warn(v25));
  };
  v320 = $m1$ComputedValue.prototype;
  v320.toString = function() {
    let v6 = this.name_ + "[", v9 = this.derivation;
    return v6 + v9.toString() + "]";
  };
  v326 = $m1$ComputedValue.prototype;
  v326.valueOf = function() {
    return $m3$toPrimitive(this.get());
  };
  v332 = $m1$ComputedValue.prototype;
  v1365 = $m3$gSymbol().toPrimitive;
  v332[v1365] = function() {
    return this.valueOf();
  };
  $m3$createInstanceofPredicate("ComputedValue", $m1$ComputedValue);
  $m1$installFlagAccessor($m1$ComputedValue.prototype, "isComputing", 1);
  $m1$installFlagAccessor($m1$ComputedValue.prototype, "isRunningSetter", 2);
  $m1$installFlagAccessor($m1$ComputedValue.prototype, "isBeingObserved", 4);
  $m1$installFlagAccessor($m1$ComputedValue.prototype, "isPendingUnobservation", 8);
  v366 = $m1$ComputedValue.prototype;
  $m3$defineProperty(v366, "diffValue", { __proto__: null, configurable: v92, get: function() {
    if (0 != (+this.flags_ & 16)) return 1;
    return 0;
  }, set: function(value) {
    var v27 = +this.flags_;
    1 == (+value | 0) ? this.flags_ = v27 | 16 : this.flags_ = v27 & (16 ^ a);
  } });
  var $m1$isolateGlobalState = (0, function() {
    var v32 = $m1$globalState.pendingReactions;
    if (0 != (v32.length | 0)) {
      var v14 = true, v13, v19, v20, v31, v49;
    } else {
      v13 = 0 != (+$m1$globalState.inBatch | 0);
      v14 = v13;
    }
    (v14 || $m1$globalState.isRunningReactions) && $m1$die(36);
    $m1$isolateCalled = true;
    $m1$canMergeGlobalState && (v49 = globalThis, v31 = (+v49.__mobxInstanceCount | 0) - 1 | 0, v49.__mobxInstanceCount = v31, 0 == v31 && (v49.__mobxGlobals = void 0), $m1$globalState = $m1$createMobXGlobals());
  });
  v373 = (0, function() {
    return $m1$globalState;
  });
  v375 = (0, function() {
    var v1 = $m1$createMobXGlobals();
    var v38 = $m3$gObject().keys(v1);
    var v42 = v38.length | 0;
    var v35 = 0, v12, v27;
    while (v35 < v42) {
      v12 = v38[v35];
      (+$m1$persistentKeys.indexOf(v12) | 0) == a && ($m1$globalState[v12] = v1[v12]);
      v35 = v35 + 1;
    }
    v27 = $m1$globalState;
    v27.allowStateChanges = !$m1$globalState.enforceActions;
  });
  v377 = (0, function(v4, v12) {
    var v20 = void 0;
    var v19 = (arguments.length | 0) > 1 ? v12 : v20;
    $m1$startBatch();
    try {
      return v4.apply(v19);
    } finally {
      $m1$endBatch();
    }
  });
  var $m4$observable = void 0;
  var $m4$observableRef = void 0;
  var $m4$computed = void 0;
  var $m4$action = void 0;
  var $m4$autoAction = void 0;
  var $m4$autoActionBound = void 0;
  var $m4$flow = void 0;
  var $m4$flowBound = void 0;
  var $m4$autoAnnotation = void 0;
  var $m4$extendObservable = void 0;
  var $m4$deepEnhancerFn = void 0;
  var $m4$referenceEnhancerFn = void 0;
  var $m4$internedProxyTraps = [];
  $m4$referenceEnhancerFn = (0, function(v) {
    return v;
  });
  var $m4$ObservableValue = (0, function(v4, v7, v16, v35, v45) {
    if ((arguments.length | 0) > 2 && !(v16 === void 0)) {
      var v105 = v16 + "";
      var v97 = v105, v18, v19, v27, v36, v37, v46, v47, v80, v81, v87, v98, v99;
    } else {
      v27 = "ObservableValue@" + $m1$getNextId();
      v97 = v27;
    }
    (arguments.length | 0) > 3 ? (v36 = !!v35, v98 = v36) : v98 = true;
    v37 = $m1$defaultEquals;
    (arguments.length | 0) > 4 ? (v46 = !!v45, v47 = v46) : v47 = false;
    v99 = v47 ? v45 : v37;
    $m1$Atom.call(this, v97);
    this.enhancer_ = v7;
    this.name_ = v97;
    this.equals_ = v99;
    this.hasUnreportedChange_ = false;
    this.value_ = v7(v4, void 0, v97);
    var v114 = void 0;
    v98 && $m1$isSpyEnabled() && (v87 = this.name_, $m1$spyReport({ __proto__: null, type: "create", object: this, observableKind: "value", debugObjectName: v87, newValue: "" + this.value_ }));
    return this;
  });
  v404 = $m4$ObservableValue.prototype;
  v407 = $m1$Atom.prototype;
  $m3$gObject().setPrototypeOf(v404, v407);
  v411 = $m4$ObservableValue.prototype;
  v411.constructor = $m4$ObservableValue;
  v416 = $m4$ObservableValue.prototype;
  v416.prepareNewValue_ = function(newValue) {
    $m1$checkIfStateModificationsAreAllowed(this);
    if ($m1$hasInterceptors(this)) {
      var v12 = $m1$interceptChange(this, { __proto__: null, object: this, type: "update", newValue });
      if (!v12) return $m1$globalState.UNCHANGED;
      var v21 = v12.newValue;
      var v48 = v21, v33;
    } else {
      v48 = newValue;
    }
    v33 = this.enhancer_(v48, this.value_, this.name_);
    return true === this.equals_(this.value_, v33) ? $m1$globalState.UNCHANGED : v33;
  };
  v422 = $m4$ObservableValue.prototype;
  v422.setNewValue_ = function(newValue) {
    var v4 = this.value_;
    this.value_ = newValue;
    $m1$reportChanged(this);
    $m1$hasListeners(this) && $m1$notifyListeners(this, { __proto__: null, type: "update", object: this, newValue, oldValue: v4 });
  };
  v428 = $m4$ObservableValue.prototype;
  v428.set = function(newValue) {
    var v42 = this.prepareNewValue_(newValue);
    if (!(v42 === $m1$globalState.UNCHANGED)) {
      var v14 = $m1$isSpyEnabled();
      if (v14) {
        var v25 = this.name_;
        $m1$spyReportStart({ __proto__: null, type: "update", object: this, observableKind: "value", debugObjectName: v25, newValue: v42, oldValue: this.value_ });
      }
      this.setNewValue_(v42);
      v14 && $m1$spyReportEnd(void 0);
    }
  };
  v434 = $m4$ObservableValue.prototype;
  v434.get = function() {
    $m1$reportObserved(this);
    if (this.dehancer === void 0) return this.value_;
    return this.dehancer(this.value_);
  };
  v440 = $m4$ObservableValue.prototype;
  v440.raw = function() {
    return this.value_;
  };
  v446 = $m4$ObservableValue.prototype;
  v446.toJSON = function() {
    return this.get();
  };
  v452 = $m4$ObservableValue.prototype;
  v452.toString = function() {
    let v6 = this.name_ + "[";
    return v6 + this.value_ + "]";
  };
  v458 = $m4$ObservableValue.prototype;
  v458.valueOf = function() {
    return $m3$toPrimitive(this.get());
  };
  v464 = $m4$ObservableValue.prototype;
  v1396 = $m3$gSymbol().toPrimitive;
  v464[v1396] = function() {
    return this.valueOf();
  };
  $m3$createInstanceofPredicate("ObservableValue", $m4$ObservableValue);
  var $m4$descriptorCache = new ($m3$gMap())();
  var $m4$ObservableObjectAdministration = (0, function(v6, v14, v29, v41) {
    this.target_ = v6;
    if ((arguments.length | 0) > 1) {
      var v15 = !!v14;
      var v16 = v15, v42, v43, v56, v742;
    } else {
      v16 = false;
    }
    v16 ? this.values_ = v14 : this.values_ = new ($m3$gMap())();
    this.name_ = v29 + "";
    this.defaultAnnotation_ = $m4$autoAnnotation;
    (arguments.length | 0) > 3 ? (v42 = !!v41, v43 = v42) : v43 = false;
    v43 && (this.defaultAnnotation_ = v41);
    v56 = this.name_ + ".keys";
    this.keysAtom_ = new $m1$Atom(v56);
    this.isPlainObject_ = $m3$isPlainObject(this.target_);
    v742 = !$m1$isAnnotation(this.defaultAnnotation_);
    v742 && $m1$die("defaultAnnotation must be valid annotation");
    this.appliedAnnotations_ = {};
    return this;
  });
  v477 = $m4$ObservableObjectAdministration.prototype;
  v477.materializeLazyComputed_ = function(key) {
    if (!this.lazyComputedKeys_) return;
    var v102 = this.lazyComputedKeys_;
    var v43 = v102.get(key);
    if (!v43) return;
    var v19 = this.lazyComputedKeys_;
    v19.delete(key);
    var v242 = this.lazyComputedKeys_;
    0 == (+v242.size | 0) && (this.lazyComputedKeys_ = void 0);
    var v54 = v43();
    var v36 = this.values_;
    v36.set(key, v54);
    return v54;
  };
  v483 = $m4$ObservableObjectAdministration.prototype;
  v483.materializeLazyObservable_ = function(key) {
    if (!this.lazyObservableKeys_) return;
    var v102 = this.lazyObservableKeys_;
    var v43 = v102.get(key);
    if (!v43) return;
    var v19 = this.lazyObservableKeys_;
    v19.delete(key);
    var v242 = this.lazyObservableKeys_;
    0 == (+v242.size | 0) && (this.lazyObservableKeys_ = void 0);
    var v54 = v43();
    var v36 = this.values_;
    v36.set(key, v54);
    return v54;
  };
  v489 = $m4$ObservableObjectAdministration.prototype;
  v489.getObservablePropValue_ = function(key) {
    var v4 = this.values_;
    var v31 = v4.get(key);
    if (!v31) {
      var v32 = this.materializeLazyComputed_(key);
      if (!v32) {
        var v34 = this.materializeLazyObservable_(key);
        var v28 = v34, v29;
      } else {
        v28 = v32;
      }
      v29 = v28;
    } else {
      v29 = v31;
    }
    return v29.get();
  };
  v495 = $m4$ObservableObjectAdministration.prototype;
  v495.setObservablePropValue_ = function(key, newValue) {
    var v52 = this.values_;
    var v111 = v52.get(key);
    if (!v111) {
      var v112 = this.materializeLazyComputed_(key);
      var v108 = v112, v44, v51, v63, v66, v68, v72, v77, v79, v85, v106, v107, v109, v113, v117;
    } else {
      v108 = v111;
    }
    !v108 ? (v113 = this.materializeLazyObservable_(key), v107 = v113) : v107 = v108;
    if ($m1$hasMobXFlag(v107, "isMobXComputedValue")) {
      v107.set(newValue);
      return true;
    }
    if ($m1$hasInterceptors(this)) {
      v44 = $m1$interceptChange(this, { __proto__: null, type: "update", object: $m4$admProxyOrTarget(this), name: key, newValue });
      if (!v44) return null;
      v51 = v44.newValue;
      v106 = v51;
    } else {
      v106 = newValue;
    }
    v117 = v107.prepareNewValue_(v106);
    v117 === $m1$globalState.UNCHANGED || (v63 = $m1$hasListeners(this), v66 = $m1$isSpyEnabled(), v68 = null, v63 || v66 ? (v77 = this.name_, v79 = $m4$admProxyOrTarget(this), v85 = { __proto__: null, type: "update", observableKind: "object", debugObjectName: v77, object: v79, oldValue: v107.value_, name: key, newValue: v117 }, v109 = v85) : v109 = v68, v66 && $m1$spyReportStart(v109), v107.setNewValue_(v117), v63 && $m1$notifyListeners(this, v109), v66 && $m1$spyReportEnd(void 0));
    return true;
  };
  v501 = $m4$ObservableObjectAdministration.prototype;
  v501.get_ = function(key) {
    if ($m1$globalState.trackingDerivation) {
      var v12 = !$m3$hasOwn(this.target_, key);
      var v13 = v12;
    } else {
      v13 = false;
    }
    v13 && this.has_(key);
    return this.target_[key];
  };
  v507 = $m4$ObservableObjectAdministration.prototype;
  v507.set_ = function(key, value) {
    return $m4$setObjectValue(this, key, value, false);
  };
  v513 = $m4$ObservableObjectAdministration.prototype;
  v513.has_ = function(key) {
    if (!$m1$globalState.trackingDerivation) return true === key in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = new ($m3$gMap())());
    var v22 = this.pendingKeys_;
    var v69 = v22.get(key);
    if (!v69) {
      var v40 = this.name_ + "." + $m3$stringifyKey(key) + "?";
      var v41 = $m4$ObservableValue;
      var v50 = new v41(true === key in this.target_, $m4$referenceEnhancerFn, v40, false);
      var v53 = this.pendingKeys_;
      v53.set(key, v50);
      var v62 = v50;
    } else {
      v62 = v69;
    }
    return v62.get();
  };
  v519 = $m4$ObservableObjectAdministration.prototype;
  v519.extend_ = function(v4, v7, v102, v18) {
    var v57 = (arguments.length | 0) > 3 && v18, v242, v48, v56;
    true === v102 ? (v242 = this.defaultAnnotation_, v56 = v242) : v56 = v102;
    if (false === v56) return this.defineProperty_(v4, v7, v57);
    $m4$assertAnnotable(this, v56, v4);
    v48 = v56.extend_(this, v4, v7, v57);
    !v48 || $m4$recordAnnotationApplied(this, v56, v4);
    return v48;
  };
  v525 = $m4$ObservableObjectAdministration.prototype;
  v525.notifyPropertyAddition_ = function(key, value) {
    var v4 = $m1$hasListeners(this);
    var v7 = $m1$isSpyEnabled();
    if (v4 || v7) {
      var v22 = { __proto__: null, type: "add", observableKind: "object", debugObjectName: this.name_, object: $m4$admProxyOrTarget(this), name: key, newValue: value };
      v7 && $m1$spyReportStart(v22);
      v4 && $m1$notifyListeners(this, v22);
      v7 && $m1$spyReportEnd(void 0);
    }
    if (this.pendingKeys_) {
      var v44 = this.pendingKeys_;
      var v63 = v44.get(key);
      !v63 || v63.set(true);
    }
    $m1$reportChanged(this.keysAtom_);
  };
  v531 = $m4$ObservableObjectAdministration.prototype;
  v531.defineProperty_ = function(key, descriptor, proxyTrapArg) {
    var v52 = !!proxyTrapArg;
    $m1$checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      $m1$startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) return deleteOutcome;
      if ($m1$hasInterceptors(this)) {
        var v26 = $m4$admProxyOrTarget(this);
        var change = $m1$interceptChange(this, { __proto__: null, object: v26, name: key, type: "add", newValue: descriptor.value });
        if (!change) return null;
        var v40 = descriptor.value;
        if (!(v40 === change.newValue)) {
          descriptor = $m3$assign({}, descriptor);
          var v49 = descriptor;
          v49.value = change.newValue;
        }
      }
      if (v52) {
        var v57 = this.target_;
        var v59 = descriptor;
        if (!(true === $m3$gReflect().defineProperty(v57, key, v59))) return false;
      } else {
        $m3$defineProperty(this.target_, key, descriptor);
      }
      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      $m1$endBatch();
    }
    return true;
  };
  v537 = $m4$ObservableObjectAdministration.prototype;
  v537.defineObservableProperty_ = function(v4, value, v102, v18) {
    if ((arguments.length | 0) > 3) {
      var v19 = !!v18;
      var v122 = v19, v64, v68, v76, v78;
    } else {
      v122 = false;
    }
    $m1$checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      $m1$startBatch();
      var deleteOutcome = this.delete_(v4);
      if (!deleteOutcome) return deleteOutcome;
      if ($m1$hasInterceptors(this)) {
        var change = $m1$interceptChange(this, { __proto__: null, object: $m4$admProxyOrTarget(this), name: v4, type: "add", newValue: value });
        if (!change) return null;
        value = change.newValue;
      }
      var cachedDescriptor = $m4$getCachedObservablePropDescriptor(v4);
      var configurable = true;
      !$m1$globalState.safeDescriptors || (configurable = !!this.isPlainObject_);
      v64 = configurable;
      v68 = cachedDescriptor.get;
      var descriptor = { __proto__: null, configurable: v64, enumerable: true, get: v68, set: cachedDescriptor.set };
      if (v122) {
        v76 = this.target_;
        v78 = descriptor;
        if (!(true === $m3$gReflect().defineProperty(v76, v4, v78))) return false;
      } else {
        $m3$defineProperty(this.target_, v4, descriptor);
      }
      var obsName = "ObservableObject.key";
      obsName = this.name_ + "." + $m3$stringifyKey(v4);
      var observableNode = new $m4$ObservableValue(value, v102, obsName, false);
      this.values_.set(v4, observableNode);
      this.notifyPropertyAddition_(v4, observableNode.value_);
    } finally {
      $m1$endBatch();
    }
    return true;
  };
  v543 = $m4$ObservableObjectAdministration.prototype;
  v543.defineComputedProperty_ = function(key, options, proxyTrapArg) {
    var v52 = !!proxyTrapArg;
    $m1$checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      $m1$startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) return deleteOutcome;
      if ($m1$hasInterceptors(this)) {
        var change = $m1$interceptChange(this, { __proto__: null, object: $m4$admProxyOrTarget(this), name: key, type: "add", newValue: void 0 });
        if (!change) return null;
      }
      options.name || (options.name = this.name_ + "." + $m3$stringifyKey(key));
      options.context = $m4$admProxyOrTarget(this);
      var cachedDescriptor = $m4$getCachedObservablePropDescriptor(key);
      var configurable = true;
      !$m1$globalState.safeDescriptors || (configurable = !!this.isPlainObject_);
      var v71 = configurable;
      var v75 = cachedDescriptor.get;
      var descriptor = { __proto__: null, configurable: v71, enumerable: false, get: v75, set: cachedDescriptor.set };
      if (v52) {
        var v83 = this.target_;
        var v85 = descriptor;
        if (!(true === $m3$gReflect().defineProperty(v83, key, v85))) return false;
      } else {
        $m3$defineProperty(this.target_, key, descriptor);
      }
      this.values_.set(key, new $m1$ComputedValue(options));
      this.notifyPropertyAddition_(key, void 0);
    } finally {
      $m1$endBatch();
    }
    return true;
  };
  v549 = $m4$ObservableObjectAdministration.prototype;
  v549.delete_ = function(key, proxyTrapArg) {
    var v4 = !!proxyTrapArg;
    $m1$checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (!$m3$hasOwn(this.target_, key)) return true;
    if ($m1$hasInterceptors(this) && !$m1$interceptChange(this, { __proto__: null, object: $m4$admProxyOrTarget(this), name: key, type: "remove" })) return null;
    try {
      $m1$startBatch();
      var notify = $m1$hasListeners(this);
      var v35 = $m1$isSpyEnabled();
      var v36 = v35, v39, v49, v50, v51, v54, v65, v72, v88, v89, v99, v119, v126, v127, v136, v137, v141, v150, v151, v160, v161;
      var notifySpy = v36;
      v39 = this.values_;
      var v166 = v39.get(key);
      var observableNode = v166;
      var value;
      if (!observableNode && (notify || notifySpy)) {
        v54 = this.target_;
        var desc = $m3$gObject().getOwnPropertyDescriptor(v54, key);
        !desc || (value = desc.value);
      }
      if (v4) {
        v65 = this.target_;
        if (!(true === $m3$gReflect().deleteProperty(v65, key))) return false;
      } else {
        v72 = this.target_;
        true === $m3$gReflect().deleteProperty(v72, key) || $m3$throwTypeError("Cannot delete property '" + $m3$stringifyKey(key) + "'");
      }
      v88 = !!this.appliedAnnotations_;
      v89 = v88;
      v89 && delete this.appliedAnnotations_[key];
      !observableNode || (v99 = this.values_, v99.delete(key), $m1$hasMobXFlag(observableNode, "isMobXObservableValue") && (value = observableNode.value_), $m1$propagateChanged(observableNode));
      $m1$reportChanged(this.keysAtom_);
      if (this.pendingKeys_) {
        v119 = this.pendingKeys_;
        var pending = v119.get(key);
        !pending || (v126 = pending.set, v127 = pending, v126.call(v127, true === key in this.target_));
      }
      if (notify || notifySpy) {
        v141 = $m4$admProxyOrTarget(this);
        var change$2 = { __proto__: null, type: "remove", observableKind: "object", object: v141, debugObjectName: this.name_, oldValue: value, name: key };
        v150 = notifySpy;
        v151 = v150;
        v151 && $m1$spyReportStart(change$2);
        notify && $m1$notifyListeners(this, change$2);
        v160 = notifySpy;
        v161 = v160;
        v161 && $m1$spyReportEnd(void 0);
      }
    } finally {
      $m1$endBatch();
    }
    return true;
  };
  v555 = $m4$ObservableObjectAdministration.prototype;
  v555.ownKeys_ = function() {
    $m1$reportObserved(this.keysAtom_);
    let v7 = this.target_;
    return $m3$gReflect().ownKeys(v7);
  };
  v561 = $m4$ObservableObjectAdministration.prototype;
  v561.keys_ = function() {
    $m1$reportObserved(this.keysAtom_);
    let v7 = this.target_;
    return $m3$gObject().keys(v7);
  };
  $m3$createInstanceofPredicate("ObservableObjectAdministration", $m4$ObservableObjectAdministration);
  var $m4$asObservableObject = (0, function(v4, v12) {
    var v96 = void 0;
    var v92 = (arguments.length | 0) > 1 ? v12 : v96, v16, v20, v21, v31, v47, v58, v59, v69, v72, v79, v80, v86, v93, v95, v106;
    v16 = !!v92;
    v16 && $m1$isObservableObject(v4) && $m1$die("Options can't be provided for already observable objects.");
    if ($m3$hasOwn(v4, $m1$$mobx)) {
      v31 = !$m1$isObservableObject(v4);
      v31 && $m1$die("Cannot convert '" + v4.name_ + "' into observable object:\nThe target is already observable of different type.\nExtending builtins is not supported.");
      return v4;
    }
    v47 = !(true === $m3$gObject().isExtensible(v4));
    v47 && $m1$die("Cannot make the designated object observable; it is not extensible");
    v92 ? (v58 = !!v92.name, v59 = v58) : v59 = false;
    v59 ? (v106 = v92.name + "", v95 = v106) : ($m3$isPlainObject(v4) ? (v69 = "ObservableObject@" + $m1$getNextId(), v93 = v69) : (v72 = v4.constructor, v79 = v72.name + "@" + $m1$getNextId(), v93 = v79), v95 = v93);
    v80 = $m4$ObservableObjectAdministration;
    v86 = new v80(v4, new ($m3$gMap())(), v95, $m4$getAnnotationFromOptions(v92));
    $m3$defineProperty(v4, $m1$$mobx, { __proto__: null, enumerable: false, writable: true, configurable: true, value: v86 });
    return v4;
  });
  $m4$internedProxyTraps.push({ __proto__: null, has: function(v4, v16) {
    let v6 = v4[$m1$$mobx], v8 = v6.has_;
    return v8.call(v4[$m1$$mobx], v16);
  }, get: function(target, key) {
    if ($m1$globalState.trackingDerivation && !$m3$hasOwn(target, key)) {
      var v15 = target[$m1$$mobx];
      v15.has_(key);
    }
    return target[key];
  }, set: function(target, key, value) {
    if (!$m3$isStringish(key)) return false;
    var v14 = $m4$setObjectValue(target[$m1$$mobx], key, value, true);
    if (v14 == null) return true;
    v14 || $m3$throwTypeError("'set' on proxy: trap returned falsish for property '" + $m3$stringifyKey(key) + "'");
    return true;
  }, deleteProperty: function(v102, v4) {
    if (!$m3$isStringish(v4)) return false;
    var v12 = v102[$m1$$mobx];
    var v14 = v12.delete_;
    var v242 = v14.call(v102[$m1$$mobx], v4, true);
    if (v242 == null) return true;
    return !!v242;
  }, defineProperty: function(target, key, descriptor) {
    var v6 = target[$m1$$mobx];
    var v20 = v6.defineProperty_.call(target[$m1$$mobx], key, descriptor);
    if (v20 == null) return true;
    return !!v20;
  }, ownKeys: function(target) {
    let v4 = target[$m1$$mobx];
    return v4.ownKeys_.call(target[$m1$$mobx]);
  }, preventExtensions: function(_t) {
    $m1$die(13);
    return false;
  } });
  var $m4$autoAnnotationMake = (0, function(v4, v7, v102, v13) {
    if (v102.get) return $m4$computed.make_.call($m4$computed, v4, v7, v102, v13);
    if (v102.set) {
      var v33 = v102.set;
      if (!$m1$isAction(v33)) {
        var v42 = $m1$createAction($m3$stringifyKey(v7), v33, false, void 0);
        var v180 = v42, v79, v84, v92, v95, v96, v97, v107, v115, v118, v119, v120, v130, v138, v140, v142, v143, v144, v153, v154, v158, v161, v162, v181, v182, v183, v188;
      } else {
        v180 = v33;
      }
      if (v13 === v4.target_) {
        if (v4.defineProperty_(v7, { __proto__: null, configurable: true, set: v180 }) == null) return 0;
        return 2;
      }
      $m3$defineProperty(v13, v7, { __proto__: null, configurable: true, set: v180 });
      return 2;
    }
    if (!(v13 === v4.target_) && "function" == typeof v102.value) {
      if ($m3$isGenerator(v102.value)) {
        v84 = $m4$flow;
        this.options_ ? (v92 = this.options_, v95 = !!v92.autoBind, v96 = v95) : v96 = false;
        v96 ? (v97 = $m4$flowBound, v181 = v97) : v181 = v84;
        return v181.make_(v4, v7, v102, v13);
      }
      v107 = $m4$autoAction;
      this.options_ ? (v115 = this.options_, v118 = !!v115.autoBind, v119 = v118) : v119 = false;
      v119 ? (v120 = $m4$autoActionBound, v182 = v120) : v182 = v107;
      return v182.make_(v4, v7, v102, v13);
    }
    v130 = $m4$observable;
    this.options_ ? (v138 = this.options_, v140 = v138.deep, v142 = false === v140, v143 = v142) : v143 = false;
    v143 ? (v144 = $m4$observableRef, v183 = v144) : v183 = v130;
    "function" == typeof v102.value ? (v153 = !!this.options_, v154 = v153) : v154 = false;
    v154 && this.options_.autoBind && (v102.value = v102.value.bind($m4$admProxyOrTarget(v4)));
    return v183.make_(v4, v7, v102, v13);
  });
  var $m4$autoAnnotationExtend = (0, function(v4, v7, v102, v13) {
    if (v102.get) return $m4$computed.extend_.call($m4$computed, v4, v7, v102, v13);
    if (v102.set) {
      var v33 = v4.defineProperty_;
      var v38 = $m3$stringifyKey(v7);
      return v4.defineProperty_(v7, { __proto__: null, configurable: true, set: $m1$createAction(v38, v102.set, false, void 0) }, v13);
    }
    if ("function" == typeof v102.value) {
      var v56 = !!this.options_;
      var v57 = v56, v61, v64, v65, v742, v82, v84, v86, v87, v88, v98;
    } else {
      v57 = false;
    }
    v57 && this.options_.autoBind && (v102.value = v102.value.bind($m4$admProxyOrTarget(v4)));
    v742 = $m4$observable;
    this.options_ ? (v82 = this.options_, v84 = v82.deep, v86 = false === v84, v87 = v86) : v87 = false;
    v87 ? (v88 = $m4$observableRef, v98 = v88) : v98 = v742;
    return v98.extend_(v4, v7, v102, v13);
  });
  v1402 = {};
  Object.assign(v1402, { annotationType_: "true", options_: void 0, make_: $m4$autoAnnotationMake, extend_: $m4$autoAnnotationExtend });
  $m4$autoAnnotation = v1402;
  var $m4$arrayExtensions = {};
  $m4$internedProxyTraps.push({ __proto__: null, get: function(target, name) {
    var v52 = target[$m1$$mobx];
    if (name === $m1$$mobx) return v52;
    if ("length" === name) return v52.getArrayLength_();
    if ("string" == typeof name && !(true === globalThis.isNaN(name))) {
      var v32 = v52.get_;
      return v52.get_(globalThis.parseInt(name));
    }
    if ($m3$hasOwn($m4$arrayExtensions, name)) return $m4$arrayExtensions[name];
    return target[name];
  }, set: function(target, name, value) {
    var v6 = target[$m1$$mobx];
    "length" === name && v6.setArrayLength_(value);
    if ("symbol" == typeof name || true === globalThis.isNaN(name)) {
      target[name] = value;
    } else {
      var v32 = v6.set_;
      v6.set_(globalThis.parseInt(name), value);
    }
    return true;
  }, preventExtensions: function() {
    $m1$die(15);
    return false;
  } });
  var $m4$ObservableArrayAdministration = (0, function(v16, v242, v36) {
    if ((arguments.length | 0) > 0 && !(v16 === void 0)) {
      var v80 = v16 + "";
      var v742 = v80, v12, v13, v21;
    } else {
      v21 = "ObservableArray@" + $m1$getNextId();
      v742 = v21;
    }
    this.owned_ = false;
    (arguments.length | 0) > 2 && (this.owned_ = !!v36);
    this.atom_ = new $m1$Atom(v742);
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    var enhName = "ObservableArray[..]";
    enhName = v742 + "[..]";
    this.enhancer_ = function(newV, oldV, _n) {
      return v242(newV, oldV, enhName);
    };
    return this;
  });
  v609 = $m4$ObservableArrayAdministration.prototype;
  v609.dehanceValue_ = function(value) {
    return !(this.dehancer === void 0) ? this.dehancer(value) : value;
  };
  v615 = $m4$ObservableArrayAdministration.prototype;
  v615.dehanceValues_ = function(values$2) {
    if (!(this.dehancer === void 0)) {
      var v11 = (values$2.length | 0) > 0;
      var v12 = v11;
    } else {
      v12 = false;
    }
    return v12 ? values$2.map(this.dehancer) : values$2;
  };
  v621 = $m4$ObservableArrayAdministration.prototype;
  v621.getArrayLength_ = function() {
    $m1$reportObserved(this.atom_);
    let v7 = this.values_;
    return v7.length;
  };
  v627 = $m4$ObservableArrayAdministration.prototype;
  v627.setArrayLength_ = function(newLengthVal) {
    (!("number" == typeof newLengthVal) || true === globalThis.Number.isNaN(newLengthVal) || (+newLengthVal | 0) < 0) && $m1$die1(40, newLengthVal);
    var v68 = +newLengthVal | 0;
    var v27 = this.values_;
    var v72 = v27.length | 0;
    if (v68 == v72) return;
    if (v68 > v72) {
      var v40 = new globalThis.Array(v68 - v72 | 0);
      this.spliceWithArray_(v72, 0, v40);
    } else {
      this.spliceWithArray_(v68, v72 - v68 | 0);
    }
  };
  v633 = $m4$ObservableArrayAdministration.prototype;
  v633.spliceWithArray_ = function(v20, v44, v59) {
    var v4 = this.values_;
    var v72 = v4.length | 0;
    if ((arguments.length | 0) > 0) {
      var v16 = !(v20 === void 0);
      var v172 = v16, v29, v39, v40, v46, v47, v65, v66, v67, v68, v79, v88, v95;
    } else {
      v172 = false;
    }
    v172 ? (v79 = +v20 | 0, v65 = v79) : v65 = 0;
    1 == (arguments.length | 0) ? (v29 = v72 - v65 | 0, v67 = v29) : ((arguments.length | 0) > 1 && !(v44 === void 0) && !(v44 == null) ? (v95 = +v44 | 0, v66 = v95) : v66 = 0, v67 = v66);
    v88 = void 0;
    v68 = (arguments.length | 0) > 2 ? v59 : v88;
    return $m4$spliceWithArrayImpl(this, v65, v67, v68);
  };
  v639 = $m4$ObservableArrayAdministration.prototype;
  v639.get_ = function(index) {
    $m1$reportObserved(this.atom_);
    let v8 = this.dehanceValue_;
    return this.dehanceValue_(this.values_[index]);
  };
  v645 = $m4$ObservableArrayAdministration.prototype;
  v645.set_ = function(indexVal, newValue) {
    var v80 = +indexVal | 0;
    var v7 = this.values_;
    if (v80 < (v7.length | 0)) {
      $m1$checkIfStateModificationsAreAllowed(this.atom_);
      var v19 = v7[v80];
      if ($m1$hasInterceptors(this)) {
        var v30 = $m1$interceptChange(this, { __proto__: null, type: "update", object: this.proxy_, index: v80, newValue });
        if (!v30) return;
        var v37 = v30.newValue;
        var v78 = v37, v44, v60, v64, v87;
      } else {
        v78 = newValue;
      }
      v44 = this.enhancer_(v78, v19);
      v44 === v19 || (v7[v80] = v44, $m4$callNotifyUpdate(this, v80, v44, v19));
    } else {
      v87 = globalThis.Array;
      v60 = v80 + 1 | 0;
      v64 = new v87(v60 - (v7.length | 0) | 0);
      v64[(v64.length | 0) - 1] = newValue;
      $m4$spliceWithArrayImpl(this, v7.length | 0, 0, v64);
    }
  };
  var $m4$createObservableArray = (0, function(v4, v7, v16, v35) {
    var name = "ObservableArray";
    name = (arguments.length | 0) > 2 && !(v16 === void 0) ? v16 + "" : "ObservableArray@" + $m1$getNextId();
    var owned = false;
    (arguments.length | 0) > 3 && (owned = !!v35);
    return $m1$initObservable(function() {
      var v9 = new $m4$ObservableArrayAdministration(name, v7, owned);
      var v12 = v9.values_;
      $m3$defineProperty(v12, $m1$$mobx, { __proto__: null, enumerable: false, writable: false, configurable: true, value: v9 });
      var v18 = v9.values_;
      var v21 = $m4$internedProxyTraps[1];
      var v47 = new globalThis.Proxy(v18, v21);
      v9.proxy_ = v47;
      if (v4) {
        var v32 = (v4.length | 0) > 0;
        var v33 = v32, v36;
      } else {
        v33 = false;
      }
      v33 && (v36 = v9.spliceWithArray_, v9.spliceWithArray_(0, 0, v4));
      return v47;
    });
  });
  $m3$createInstanceofPredicate("ObservableArrayAdministration", $m4$ObservableArrayAdministration);
  $m4$arrayExtensions.clear = function() {
    return this.splice(0);
  };
  $m4$arrayExtensions.replace = function(newItems) {
    let v4 = this[$m1$$mobx], v7 = v4.spliceWithArray_, v12 = v4.values_;
    return v4.spliceWithArray_(0, v12.length | 0, newItems);
  };
  $m4$arrayExtensions.toJSON = function() {
    return this.slice();
  };
  $m4$arrayExtensions.splice = function(v20, v51) {
    var v4 = this[$m1$$mobx];
    if (0 == (arguments.length | 0)) return [];
    if (1 == (arguments.length | 0)) return v4.spliceWithArray_(v20);
    if (2 == (arguments.length | 0)) return v4.spliceWithArray_(v20, v51);
    var v72 = $m3$arraySliceFn.call(arguments, 2, arguments.length | 0);
    return v4.spliceWithArray_(v20, v51, v72);
  };
  $m4$arrayExtensions.spliceWithArray = function() {
    let v4 = this[$m1$$mobx];
    return v4.spliceWithArray_.apply(this[$m1$$mobx], arguments);
  };
  $m4$arrayExtensions.push = function() {
    let v4 = this[$m1$$mobx], v8 = v4.values_;
    $m4$spliceWithArrayImpl(v4, v8.length | 0, 0, arguments);
    return v4.values_.length;
  };
  $m4$arrayExtensions.pop = function() {
    var v32 = this[$m1$$mobx];
    var v52 = v32.values_;
    var v8 = (v52.length | 0) - 1 | 0;
    var v20 = v8 < 0 ? 0 : v8;
    return this.splice(v20, 1)[0];
  };
  $m4$arrayExtensions.shift = function() {
    return this.splice(0, 1)[0];
  };
  $m4$arrayExtensions.unshift = function() {
    let v4 = this[$m1$$mobx];
    $m4$spliceWithArrayImpl(v4, 0, 0, arguments);
    let v12 = v4.values_;
    return v12.length;
  };
  $m4$arrayExtensions.reverse = function() {
    !$m1$globalState.trackingDerivation || $m1$die1(37, "reverse");
    this.replace(this.slice().reverse());
    return this;
  };
  $m4$arrayExtensions.sort = function() {
    !$m1$globalState.trackingDerivation || $m1$die1(37, "sort");
    var v11 = this.slice();
    v11.sort.apply(v11, arguments);
    this.replace(v11);
    return this;
  };
  $m4$arrayExtensions.remove = function(value) {
    var v4 = this[$m1$$mobx];
    var v30 = +v4.dehanceValues_(v4.values_).indexOf(value) | 0;
    if (v30 > a) {
      this.splice(v30, 1);
      return true;
    }
    return false;
  };
  $m4$addSimpleArrayExt("at");
  $m4$addSimpleArrayExt("concat");
  $m4$addSimpleArrayExt("flat");
  $m4$addSimpleArrayExt("includes");
  $m4$addSimpleArrayExt("indexOf");
  $m4$addSimpleArrayExt("join");
  $m4$addSimpleArrayExt("lastIndexOf");
  $m4$addSimpleArrayExt("slice");
  $m4$addSimpleArrayExt("toString");
  $m4$addSimpleArrayExt("toLocaleString");
  $m4$addSimpleArrayExt("toSorted");
  $m4$addSimpleArrayExt("toSpliced");
  $m4$addSimpleArrayExt("with");
  $m4$addMapLikeArrayExt("every");
  $m4$addMapLikeArrayExt("filter");
  $m4$addMapLikeArrayExt("find");
  $m4$addMapLikeArrayExt("findIndex");
  $m4$addMapLikeArrayExt("findLast");
  $m4$addMapLikeArrayExt("findLastIndex");
  $m4$addMapLikeArrayExt("flatMap");
  $m4$addMapLikeArrayExt("forEach");
  $m4$addMapLikeArrayExt("map");
  $m4$addMapLikeArrayExt("some");
  $m4$addMapLikeArrayExt("toReversed");
  $m4$addReduceLikeArrayExt("reduce");
  $m4$addReduceLikeArrayExt("reduceRight");
  var $m4$ObservableMapMarker = {};
  var $m4$ObservableSetMarker = {};
  var $m4$ObservableMap = (0, function(v62, v22, v31) {
    var self = this;
    self[$m1$$mobx] = $m4$ObservableMapMarker;
    self.enhancer_ = $m4$deepEnhancerFn;
    if ((arguments.length | 0) > 1) {
      var v16 = !!v22;
      var v172 = v16, v33, v34, v42, v70, v80;
    } else {
      v172 = false;
    }
    v172 && (self.enhancer_ = v22);
    (arguments.length | 0) > 2 && !(v31 === void 0) ? (v80 = v31 + "", v70 = v80) : (v42 = "ObservableMap@" + $m1$getNextId(), v70 = v42);
    Object.assign(self, { name_: v70, interceptors_: void 0, changeListeners_: void 0, dehancer: void 0 });
    var initialData;
    (arguments.length | 0) > 0 && (initialData = v62);
    $m1$initObservable(function() {
      var v102 = self.name_ + ".keys()";
      Object.assign(self, { keysAtom_: $m1$createAtom(v102), data_: new ($m3$gMap())(), hasMap_: new ($m3$gMap())() });
      if (initialData) {
        var v27 = self.merge;
        self.merge(initialData);
      }
    });
    return self;
  });
  v760 = $m4$ObservableMap.prototype;
  v760.has_ = function(key) {
    return $m3$mapHas(this.data_, key);
  };
  v766 = $m4$ObservableMap.prototype;
  v766.has = function(key) {
    var self = this;
    if (!$m1$globalState.trackingDerivation) return self.has_(key);
    var v15 = self.hasMap_;
    var v71 = v15.get(key);
    if (!v71) {
      var v33 = self.name_ + "." + $m3$stringifyKey(key) + "?";
      var v34 = $m4$ObservableValue;
      var v44 = new v34(self.has_(key), $m4$referenceEnhancerFn, v33, false);
      var v47 = self.hasMap_;
      v47.set(key, v44);
      v44.onBUOL = new globalThis.Set();
      v44.onBUOL.add(function() {
        let v52 = self.hasMap_;
        v52.delete(key);
      });
      var v67 = v44;
    } else {
      v67 = v71;
    }
    return v67.get();
  };
  v772 = $m4$ObservableMap.prototype;
  v772.set = function(key, value) {
    var v7 = $m3$mapHas(this.data_, key);
    if ($m1$hasInterceptors(this)) {
      var v44 = v7 ? "update" : "add", v19, v26, v43;
      v19 = $m1$interceptChange(this, { __proto__: null, type: v44, object: this, newValue: value, name: key });
      if (!v19) return this;
      v26 = v19.newValue;
      v43 = v26;
    } else {
      v43 = value;
    }
    v7 ? this.updateValue_(key, v43) : this.addValue_(key, v43);
    return this;
  };
  v778 = $m4$ObservableMap.prototype;
  v778.updateValue_ = function(key, newValue) {
    var v52 = this.data_;
    var v67 = v52.get(key);
    var v68 = v67.prepareNewValue_(newValue);
    if (!(v68 === $m1$globalState.UNCHANGED)) {
      var v22 = $m1$isSpyEnabled();
      var v25 = $m1$hasListeners(this);
      var v26 = null;
      var v30, v34, v42, v65;
      v25 || v22 ? (v34 = this.name_, v42 = { __proto__: null, observableKind: "map", debugObjectName: v34, type: "update", object: this, oldValue: v67.value_, name: key, newValue: v68 }, v65 = v42) : v65 = v26;
      v22 && $m1$spyReportStart(v65);
      v67.setNewValue_(v68);
      v25 && $m1$notifyListeners(this, v65);
      v22 && $m1$spyReportEnd(void 0);
    }
  };
  v784 = $m4$ObservableMap.prototype;
  v784.addValue_ = function(key, newValue) {
    $m1$checkIfStateModificationsAreAllowed(this.keysAtom_);
    $m1$startBatch();
    try {
      var n = "ObservableMap.key";
      n = this.name_ + "." + $m3$stringifyKey(key);
      var observableNode = new $m4$ObservableValue(newValue, this.enhancer_, n, false);
      this.data_.set(key, observableNode);
      newValue = observableNode.value_;
      var v39 = this.hasMap_;
      var hasEntry = v39.get(key);
      !hasEntry || hasEntry.setNewValue_.call(hasEntry, true);
      $m1$reportChanged(this.keysAtom_);
    } finally {
      $m1$endBatch();
    }
    var v57 = $m1$isSpyEnabled();
    var v58 = v57, v60, v61, v65, v742, v78, v88, v91;
    v60 = $m1$hasListeners(this);
    v61 = null;
    v60 || v58 ? (v742 = { __proto__: null, observableKind: "map", debugObjectName: this.name_, type: "add", object: this, name: key, newValue }, v91 = v742) : v91 = v61;
    v78 = v58;
    v78 && $m1$spyReportStart(v91);
    v60 && $m1$notifyListeners(this, v91);
    v88 = v58;
    v88 && $m1$spyReportEnd(void 0);
  };
  v790 = $m4$ObservableMap.prototype;
  v790.delete = function(key) {
    $m1$checkIfStateModificationsAreAllowed(this.keysAtom_);
    if ($m1$hasInterceptors(this) && !$m1$interceptChange(this, { __proto__: null, type: "delete", object: this, name: key })) return false;
    if ($m3$mapHas(this.data_, key)) {
      var v26 = $m1$isSpyEnabled();
      var v27 = v26, v29, v30, v34, v38, v43, v49, v53, v63, v76, v87, v98, v102;
      v29 = $m1$hasListeners(this);
      v30 = null;
      v29 || v27 ? (v38 = this.name_, v43 = this.data_, v49 = { __proto__: null, observableKind: "map", debugObjectName: v38, type: "delete", object: this, oldValue: v43.get(key).value_, name: key }, v102 = v49) : v102 = v30;
      v53 = v27;
      v53 && $m1$spyReportStart(v102);
      $m1$startBatch();
      try {
        $m1$reportChanged(this.keysAtom_);
        v63 = this.hasMap_;
        var hasEntry = v63.get(key);
        !hasEntry || hasEntry.setNewValue_.call(hasEntry, false);
        v76 = this.data_;
        var observableNode = v76.get(key);
        observableNode.setNewValue_.call(observableNode, void 0);
        v87 = this.data_;
        v87.delete(key);
      } finally {
        $m1$endBatch();
      }
      v29 && $m1$notifyListeners(this, v102);
      v98 = v27;
      v98 && $m1$spyReportEnd(void 0);
      return true;
    }
    return false;
  };
  v796 = $m4$ObservableMap.prototype;
  v796.get = function(key) {
    if (this.has(key)) {
      var v11 = this.data_;
      var v26 = v11.get(key);
      return $m4$dehanceMap(this, v26.get());
    }
    return $m4$dehanceMap(this, void 0);
  };
  v802 = $m4$ObservableMap.prototype;
  v802.getOrInsert = function(v4, v20) {
    this.has(v4) || this.set(v4, v20);
    return this.get(v4);
  };
  v808 = $m4$ObservableMap.prototype;
  v808.getOrInsertComputed = function(v4, v20) {
    if (!this.has(v4)) {
      var v15 = this.set;
      this.set(v4, v20(v4));
    }
    return this.get(v4);
  };
  v814 = $m4$ObservableMap.prototype;
  v814.keys = function() {
    $m1$reportObserved(this.keysAtom_);
    let v7 = this.data_;
    return v7.keys();
  };
  v820 = $m4$ObservableMap.prototype;
  v820.values = function() {
    var self = this;
    let v172 = self.keys();
    let v102 = { __proto__: null, next: function() {
      var v52 = v172.next();
      if (v52.done) return { __proto__: null, done: true, value: void 0 };
      return { __proto__: null, done: false, value: self.get(v52.value) };
    } };
    v102[$m3$gSymbol().toStringTag] = "MapIterator";
    return $m3$makeIterable(v102);
  };
  v826 = $m4$ObservableMap.prototype;
  v826.entries = function() {
    var self = this;
    let v172 = self.keys();
    let v102 = { __proto__: null, next: function() {
      var v52 = v172.next();
      if (v52.done) return { __proto__: null, done: true, value: void 0 };
      var v13 = [];
      var b = v52.value;
      v13.push(b);
      v13.push(self.get(v52.value));
      return { __proto__: null, done: false, value: v13 };
    } };
    v102[$m3$gSymbol().toStringTag] = "MapIterator";
    return $m3$makeIterable(v102);
  };
  v832 = $m4$ObservableMap.prototype;
  v832.forEach = function(v4, v12) {
    var v46 = void 0;
    var v44 = (arguments.length | 0) > 1 ? v12 : v46, v20, v32, v42, v45, v51;
    v51 = this.entries();
    v20 = v51.next();
    v45 = v20;
    while (!v45.done) {
      v32 = v45.value[1];
      v4.call(v44, v32, v45.value[0], this);
      v42 = v51.next();
      v45 = v42;
    }
  };
  v838 = $m4$ObservableMap.prototype;
  v838.merge = function(other) {
    var self = this;
    if ($m1$isObservableMap(other)) {
      var v6 = new globalThis.Map(other);
      var v80 = v6, v13, v19, v23, v36, v42, v48, v51, v99, v102;
    } else {
      v80 = other;
    }
    $m1$startBatch();
    try {
      if ($m3$isPlainObject(v80)) {
        var keys$2 = $m3$getPlainObjectKeys(v80);
        var i = 0;
        for (; ; ) {
          v13 = i;
          if (v13 >= (keys$2.length | 0)) {
            break;
          }
          v19 = self.set;
          v23 = keys$2[i];
          self.set(v23, v80[keys$2[i]]);
          i = i + 1 | 0;
        }
      } else {
        if (Array.isArray(v80)) {
          var i$2 = 0;
          for (; ; ) {
            v36 = i$2;
            if (v36 >= (v80.length | 0)) {
              break;
            }
            v42 = self.set;
            v48 = v80[i$2][0];
            v51 = v80[i$2];
            self.set(v48, v51[1]);
            i$2 = i$2 + 1 | 0;
          }
        } else {
          $m3$isES6Map(v80) ? (v99 = $m3$gObject().getPrototypeOf(v80), v102 = $m3$gObject().getPrototypeOf(v99), $m3$gObject().getPrototypeOf(v102) == null || $m1$die1(19, v80), v80.forEach(function(v12, v9) {
            self.set(v9, v12);
          })) : v80 == null || $m1$die1(20, v80);
        }
      }
    } finally {
      $m1$endBatch();
    }
    return self;
  };
  v844 = $m4$ObservableMap.prototype;
  v844.clear = function() {
    $m1$startBatch();
    try {
      var prev = $m1$untrackedStart();
      try {
        var keys$2 = $m3$arrayFrom(this.keys());
        var i = 0;
        for (; ; ) {
          var v102 = i;
          if (v102 >= (keys$2.length | 0)) {
            break;
          }
          this.delete(keys$2[i]);
          i = i + 1 | 0;
        }
      } finally {
        $m1$untrackedEnd(prev);
      }
    } finally {
      $m1$endBatch();
    }
  };
  v850 = $m4$ObservableMap.prototype;
  v850.replace = function(values$2) {
    $m1$startBatch();
    try {
      var replacementMap = $m4$convertToMap(values$2);
      var orderedData = new ($m3$gMap())();
      var keysReportChangedCalled = false;
      var v9 = this.data_;
      var existingKeys = $m3$arrayFrom(v9.keys());
      var i = 0;
      for (; ; ) {
        var v14 = i;
        if (v14 >= (existingKeys.length | 0)) {
          break;
        }
        var key = existingKeys[i];
        if (!$m3$mapHas(replacementMap, key)) {
          if (this.delete(key)) {
            keysReportChangedCalled = true;
          } else {
            var v33 = orderedData;
            var v34 = key;
            v33.set(v34, this.data_.get(key));
          }
        }
        i = i + 1 | 0;
      }
      var entries$2 = $m3$arrayFrom(replacementMap.entries());
      i = 0;
      for (; ; ) {
        var v49 = i;
        if (v49 >= (entries$2.length | 0)) {
          break;
        }
        var key$2 = entries$2[i][0];
        var value = entries$2[i][1];
        var keyExisted = $m3$mapHas(this.data_, key$2);
        this.set(key$2, value);
        if ($m3$mapHas(this.data_, key$2)) {
          var v80 = orderedData;
          var v81 = key$2;
          v80.set(v81, this.data_.get(key$2));
          keyExisted || (keysReportChangedCalled = true);
        }
        i = i + 1 | 0;
      }
      if (!keysReportChangedCalled) {
        var v98 = this.data_;
        var v171 = +v98.size | 0;
        if (v171 != (+orderedData.size | 0)) {
          $m1$reportChanged(this.keysAtom_);
        } else {
          var v109 = this.data_;
          var iter1 = v109.keys();
          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();
          while (!next1.done) {
            var v128 = next1.value;
            if (!(v128 === next2.value)) {
              $m1$reportChanged(this.keysAtom_);
              break;
            }
            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      }
      this.data_ = orderedData;
    } finally {
      $m1$endBatch();
    }
    return this;
  };
  v856 = $m4$ObservableMap.prototype;
  v856.toJSON = function() {
    return $m3$arrayFrom(this);
  };
  v862 = $m4$ObservableMap.prototype;
  v862.toString = function() {
    return "[object ObservableMap]";
  };
  v868 = $m4$ObservableMap.prototype;
  v1413 = $m3$gSymbol().iterator;
  v868[v1413] = function() {
    return this.entries();
  };
  v875 = $m4$ObservableMap.prototype;
  $m3$defineProperty(v875, "size", { __proto__: null, enumerable: false, configurable: v92, get: function() {
    $m1$reportObserved(this.keysAtom_);
    let v7 = this.data_;
    return v7.size;
  } });
  v882 = $m4$ObservableMap.prototype;
  v1418 = $m3$gSymbol().toStringTag;
  $m3$defineProperty(v882, v1418, { __proto__: null, enumerable: false, configurable: v92, get: function() {
    return "Map";
  } });
  $m3$createInstanceofPredicate("ObservableMap", $m4$ObservableMap);
  var $m4$ObservableSet = (0, function(v67, v36, v19) {
    var self = this;
    var v32 = $m1$$mobx;
    var v4 = $m4$ObservableSetMarker;
    self[v32] = v4;
    var name = "ObservableSet";
    name = (arguments.length | 0) > 2 && !(v19 === void 0) ? v19 + "" : "ObservableSet@" + $m1$getNextId();
    self.name_ = name;
    var enhancer = $m4$deepEnhancerFn;
    if ((arguments.length | 0) > 1) {
      var v37 = !!v36;
      var v38 = v37, v15, v16;
    } else {
      v38 = false;
    }
    v38 && (enhancer = v36);
    Object.assign(self, { enhancer_: function(newV, oldV, _n) {
      return enhancer(newV, oldV, name);
    }, data_: new globalThis.Set(), changeListeners_: void 0, interceptors_: void 0, dehancer: void 0 });
    var initialData;
    (arguments.length | 0) > 0 && (initialData = v67);
    $m1$initObservable(function() {
      self.atom_ = $m1$createAtom(self.name_);
      if (initialData) {
        var v152 = self.replace;
        self.replace(initialData);
      }
    });
    return self;
  });
  v895 = $m4$ObservableSet.prototype;
  v895.has = function(value) {
    $m1$reportObserved(this.atom_);
    return !!this.data_.has($m4$dehanceMap(this, value));
  };
  v901 = $m4$ObservableSet.prototype;
  v901.add = function(value) {
    $m1$checkIfStateModificationsAreAllowed(this.atom_);
    if ($m1$hasInterceptors(this)) {
      var v14 = $m1$interceptChange(this, { __proto__: null, type: "add", object: this, newValue: value });
      if (!v14) return this;
      var v21 = v14.newValue;
      var v82 = v21, v33, v49, v50, v52, v53, v57, v65, v69, v79, v83;
    } else {
      v82 = value;
    }
    if (!this.has(v82)) {
      $m1$startBatch();
      try {
        v33 = this.data_;
        v33.add(this.enhancer_(v82, void 0));
        $m1$reportChanged(this.atom_);
      } finally {
        $m1$endBatch();
      }
      v49 = $m1$isSpyEnabled();
      v50 = v49;
      v52 = $m1$hasListeners(this);
      v53 = null;
      v52 || v50 ? (v65 = { __proto__: null, observableKind: "set", debugObjectName: this.name_, type: "add", object: this, newValue: v82 }, v83 = v65) : v83 = v53;
      v69 = v50;
      v69 && $m1$spyReportStart(v83);
      v52 && $m1$notifyListeners(this, v83);
      v79 = v50;
      v79 && $m1$spyReportEnd(void 0);
    }
    return this;
  };
  v907 = $m4$ObservableSet.prototype;
  v907.delete = function(value) {
    if ($m1$hasInterceptors(this) && !$m1$interceptChange(this, { __proto__: null, type: "delete", object: this, oldValue: value })) return false;
    if (this.has(value)) {
      var v23 = $m1$isSpyEnabled();
      var v242 = v23, v26, v27, v31, v39, v43, v53, v64, v68;
      v26 = $m1$hasListeners(this);
      v27 = null;
      v26 || v242 ? (v39 = { __proto__: null, observableKind: "set", debugObjectName: this.name_, type: "delete", object: this, oldValue: value }, v68 = v39) : v68 = v27;
      v43 = v242;
      v43 && $m1$spyReportStart(v68);
      $m1$startBatch();
      try {
        $m1$reportChanged(this.atom_);
        v53 = this.data_;
        v53.delete(value);
      } finally {
        $m1$endBatch();
      }
      v26 && $m1$notifyListeners(this, v68);
      v64 = v242;
      v64 && $m1$spyReportEnd(void 0);
      return true;
    }
    return false;
  };
  v913 = $m4$ObservableSet.prototype;
  v913.values = function() {
    var self = this;
    $m1$reportObserved(self.atom_);
    let v7 = self.data_, v9 = v7.values();
    let v14 = { __proto__: null, next: function() {
      var v52 = v9.next();
      if (v52.done) return { __proto__: null, done: true, value: void 0 };
      return { __proto__: null, done: false, value: $m4$dehanceMap(self, v52.value) };
    } };
    v14[$m3$gSymbol().toStringTag] = "SetIterator";
    return $m3$makeIterable(v14);
  };
  v919 = $m4$ObservableSet.prototype;
  v919.keys = function() {
    return this.values();
  };
  v925 = $m4$ObservableSet.prototype;
  v925.entries = function() {
    let v16 = this.values();
    let v9 = { __proto__: null, next: function() {
      var v4 = v16.next();
      if (v4.done) return { __proto__: null, done: true, value: void 0 };
      var v12 = [];
      var b = v4.value;
      v12.push(b);
      v12.push(v4.value);
      return { __proto__: null, done: false, value: v12 };
    } };
    v9[$m3$gSymbol().toStringTag] = "SetIterator";
    return $m3$makeIterable(v9);
  };
  v931 = $m4$ObservableSet.prototype;
  v931.forEach = function(v4, v12) {
    var v42 = void 0;
    var v40 = (arguments.length | 0) > 1 ? v12 : v42, v20, v38, v41, v47;
    v47 = this.values();
    v20 = v47.next();
    v41 = v20;
    while (!v41.done) {
      v4.call(v40, v41.value, v41.value, this);
      v38 = v47.next();
      v41 = v38;
    }
  };
  v937 = $m4$ObservableSet.prototype;
  v937.replace = function(other) {
    var self = this;
    if ($m1$isObservableSet(other)) {
      var v6 = new globalThis.Set(other);
      var v52 = v6, v16;
    } else {
      v52 = other;
    }
    $m1$startBatch();
    try {
      if (Array.isArray(v52)) {
        self.clear();
        var i = 0;
        for (; ; ) {
          v16 = i;
          if (v16 >= (v52.length | 0)) {
            break;
          }
          self.add(v52[i]);
          i = i + 1 | 0;
        }
      } else {
        $m3$isES6Set(v52) ? (self.clear(), v52.forEach(function(value) {
          self.add(value);
        })) : v52 == null || $m1$die1(41, v52);
      }
    } finally {
      $m1$endBatch();
    }
    return self;
  };
  v943 = $m4$ObservableSet.prototype;
  v943.clear = function() {
    $m1$startBatch();
    try {
      var prev = $m1$untrackedStart();
      try {
        var v52 = this.data_;
        var vals = $m3$arrayFrom(v52.values());
        var i = 0;
        for (; ; ) {
          var v102 = i;
          if (v102 >= (vals.length | 0)) {
            break;
          }
          this.delete(vals[i]);
          i = i + 1 | 0;
        }
      } finally {
        $m1$untrackedEnd(prev);
      }
    } finally {
      $m1$endBatch();
    }
  };
  v949 = $m4$ObservableSet.prototype;
  v949.toJSON = function() {
    return $m3$arrayFrom(this);
  };
  v955 = $m4$ObservableSet.prototype;
  v955.toString = function() {
    return "[object ObservableSet]";
  };
  v961 = $m4$ObservableSet.prototype;
  v1423 = $m3$gSymbol().iterator;
  v961[v1423] = function() {
    return this.values();
  };
  v968 = $m4$ObservableSet.prototype;
  $m3$defineProperty(v968, "size", { __proto__: null, enumerable: false, configurable: v92, get: function() {
    $m1$reportObserved(this.atom_);
    let v7 = this.data_;
    return v7.size;
  } });
  v975 = $m4$ObservableSet.prototype;
  v1428 = $m3$gSymbol().toStringTag;
  $m3$defineProperty(v975, v1428, { __proto__: null, enumerable: false, configurable: v92, get: function() {
    return "Set";
  } });
  $m4$addSetAlgebra("intersection");
  $m4$addSetAlgebra("union");
  $m4$addSetAlgebra("difference");
  $m4$addSetAlgebra("symmetricDifference");
  $m4$addSetAlgebra("isSubsetOf");
  $m4$addSetAlgebra("isSupersetOf");
  $m4$addSetAlgebra("isDisjointFrom");
  $m3$createInstanceofPredicate("ObservableSet", $m4$ObservableSet);
  $m4$deepEnhancerFn = (0, function(v, _old, name) {
    if ($m4$isObservableValueCheck(v)) return v;
    if (Array.isArray(v)) {
      if (name) return $m4$observable.array.call($m4$observable, v, { __proto__: null, name });
      return $m4$observable.array.call($m4$observable, v);
    }
    if ($m3$isPlainObject(v)) {
      if (name) return $m4$observable.object.call($m4$observable, v, void 0, { __proto__: null, name });
      return $m4$observable.object.call($m4$observable, v);
    }
    if ($m3$isES6Map(v)) {
      if (name) return $m4$observable.map.call($m4$observable, v, { __proto__: null, name });
      return $m4$observable.map.call($m4$observable, v);
    }
    if ($m3$isES6Set(v)) {
      if (name) return $m4$observable.set.call($m4$observable, v, { __proto__: null, name });
      return $m4$observable.set.call($m4$observable, v);
    }
    if ("function" == typeof v && !$m1$isAction(v) && !$m1$isFlow(v)) {
      if ($m3$isGenerator(v)) return $m4$flow(v);
      return $m4$autoAction(name, v);
    }
    return v;
  });
  v1001 = function(v, _old, name) {
    if (v == null) return v;
    if ($m1$isObservableObject(v) || $m1$isObservableArray(v) || $m1$isObservableMap(v) || $m1$isObservableSet(v)) return v;
    if (Array.isArray(v)) return $m4$observable.array.call($m4$observable, v, { __proto__: null, name, deep: false });
    if ($m3$isPlainObject(v)) return $m4$observable.object.call($m4$observable, v, void 0, { __proto__: null, name, deep: false });
    if ($m3$isES6Map(v)) return $m4$observable.map.call($m4$observable, v, { __proto__: null, name, deep: false });
    if ($m3$isES6Set(v)) return $m4$observable.set.call($m4$observable, v, { __proto__: null, name, deep: false });
    $m1$die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
    return v;
  };
  v1003 = function(v, oldValue) {
    var v6 = $m4$isObservableValueCheck(v);
    v6 && $m1$die("observable.struct should not be used with observable values");
    return $m4$eq(v, oldValue, a, void 0, void 0) ? oldValue : v;
  };
  var $m4$defaultCreateObservableOptions = { __proto__: null, deep: v92, name: void 0, defaultDecorator: void 0 };
  $m3$gObject().freeze($m4$defaultCreateObservableOptions);
  var $m4$annotationOwnMake = (0, function(v8, v11, v14) {
    if (this.extend_(v8, v11, v14, false) == null) return 0;
    return 1;
  });
  var $m4$observableAnnotationExtend = (0, function(v4, v7, v102, v13) {
    var v19 = !(true === "value" in v102);
    if (v19) {
      var v28 = "Cannot apply '" + this.annotationType_ + "' to '";
      var v40 = v28 + v4.name_ + "." + $m3$stringifyKey(v7) + "':\n'";
      $m1$die(v40 + this.annotationType_ + "' cannot be used on getter/setter properties");
    }
    var v49 = $m4$deepEnhancerFn;
    if (this.options_) {
      var v57 = this.options_;
      var v60 = !!v57.enhancer_;
      var v61 = v60, v64, v66, v78;
    } else {
      v61 = false;
    }
    v61 ? (v64 = this.options_, v66 = v64.enhancer_, v78 = v66) : v78 = v49;
    return v4.defineObservableProperty_(v7, v102.value, v78, v13);
  });
  var $m4$computedAnnotationExtend = (0, function(v4, v7, v102, v13) {
    var v20 = !v102.get;
    if (v20) {
      var v29 = "Cannot apply '" + this.annotationType_ + "' to '";
      var v41 = v29 + v4.name_ + "." + $m3$stringifyKey(v7) + "':\n'";
      $m1$die(v41 + this.annotationType_ + "' can only be used on getter(+setter) properties.");
    }
    var v54 = $m3$assign({}, this.options_);
    Object.assign(v54, { get: v102.get, set: v102.set });
    return v4.defineComputedProperty_(v7, v54, v13);
  });
  var $m4$actionAnnotationMake = (0, function(v4, v7, v102, v13) {
    if (this.options_) {
      var v21 = this.options_;
      var v242 = !!v21.bound;
      var v25 = v242;
    } else {
      v25 = false;
    }
    if (v25) {
      if (this.extend_(v4, v7, v102, false) == null) return 0;
      return 1;
    }
    if (v13 === v4.target_) {
      if (this.extend_(v4, v7, v102, false) == null) return 0;
      return 2;
    }
    if ($m1$isAction(v102.value)) return 1;
    $m3$defineProperty(v13, v7, $m4$createActionDescriptor(v4, this, v7, v102, false));
    return 2;
  });
  var $m4$actionAnnotationExtend = (0, function(v4, v11, v19, v27) {
    let v7 = v4.defineProperty_;
    return v4.defineProperty_(v11, $m4$createActionDescriptor(v4, this, v11, v19, !!$m1$globalState.safeDescriptors), v27);
  });
  var $m4$decorateObservable20223_ = (0, function(v4, v7, v102) {
    if ("field" == v102.kind + "") {
      var v25 = "Please use `@observable accessor " + $m3$stringifyKey(v102.name) + "` instead of `@observable ";
      $m1$die(v25 + $m3$stringifyKey(v102.name) + "`");
    }
    var v34 = [];
    v34.push("accessor");
    $m1$assert20223DecoratorType(v102, v34);
    if ("accessor" != v102.kind + "") return;
    var v50 = v102.name;
    var v51 = {};
    Object.assign(v51, { get: function() {
      var v6 = this[$m1$$mobx];
      if (!v6) {
        var v18 = $m4$registerLazyObservable(this, v4, v50, v7.get.call(this));
        var v252 = v18;
      } else {
        v252 = v6;
      }
      return v252.getObservablePropValue_(v50);
    }, set: function(value) {
      var v6 = this[$m1$$mobx];
      if (!v6) {
        var v14 = $m4$registerLazyObservable(this, v4, v50, value);
        var v22 = v14;
      } else {
        v22 = v6;
      }
      return v22.setObservablePropValue_(v50, value);
    }, init: function(value) {
      $m4$registerLazyObservable(this, v4, v50, value);
      return value;
    } });
    return v51;
  });
  var $m4$decorateComputed20223_ = (0, function(v4, v7, v102) {
    var v12 = [];
    v12.push("getter");
    $m1$assert20223DecoratorType(v102, v12);
    var v21 = v102.name;
    var computedValues;
    var v27 = (0, function(b, v103) {
      var v15 = $m3$assign({}, v4.options_);
      Object.assign(v15, { get: v7, context: b });
      v15.name || (v15.name = v103.name_ + "." + $m3$stringifyKey(v21));
      return new $m1$ComputedValue(v15);
    });
    v102.addInitializer(function() {
      var self = this;
      var v9 = $m4$asObservableObject(self)[$m1$$mobx];
      var v122 = v9.values_;
      var v51 = v122.get(v21);
      if ($m1$hasMobXFlag(v51, "isMobXComputedValue")) {
        var v23 = !(v51.derivation === v7);
        var v242 = v23, b;
      } else {
        v242 = false;
      }
      v242 && (b = v9.values_, b.delete(v21));
      v9.lazyComputedKeys_ || (v9.lazyComputedKeys_ = new ($m3$gMap())());
      v9.lazyComputedKeys_.set(v21, function() {
        return v27(self, v9);
      });
    });
    return function() {
      var c = this[$m1$$mobx];
      var v103 = c.values_;
      var v58 = v103.get(v21);
      if ($m1$hasMobXFlag(v58, "isMobXComputedValue")) {
        var d = !(v58.derivation === v7);
        var v22 = d, v31, v39, v56;
      } else {
        v22 = false;
      }
      if (v22) {
        computedValues = computedValues || new globalThis.WeakMap();
        v31 = computedValues.get(this);
        !v31 ? (v39 = v27(this, c), computedValues.set(this, v39), v56 = v39) : v56 = v31;
        return v56.get();
      }
      return c.getObservablePropValue_(v21);
    };
  });
  var $m4$decorateAction20223_ = (0, function(v4, v7, v102) {
    var v12 = [];
    v12.push("method");
    v12.push("field");
    $m1$assert20223DecoratorType(v102, v12);
    var v242 = v102.name;
    var v28 = (0, function(m) {
      var v52 = $m3$stringifyKey(v242);
      if (v4.options_) {
        var v13 = v4.options_;
        var v16 = !!v13.name;
        var v172 = v16, v20, v32, v35, v36, v43, v44, v45;
      } else {
        v172 = false;
      }
      v172 ? (v20 = v4.options_, v45 = v20.name + "", v43 = v45) : v43 = v52;
      v4.options_ ? (v32 = v4.options_, v35 = !!v32.autoAction, v36 = v35) : v36 = false;
      v44 = v36;
      return $m1$createAction(v43, m, v44, void 0);
    });
    if ("field" == v102.kind + "") return function(initMthd) {
      if (!$m1$isAction(initMthd)) {
        var v34 = v28(initMthd);
        var v32 = v34, v19, v22, v23, v31, v36;
      } else {
        v32 = initMthd;
      }
      v4.options_ ? (v19 = v4.options_, v22 = !!v19.bound, v23 = v22) : v23 = false;
      v23 ? (v36 = v32.bind(this), v36.isMobxAction = true, v31 = v36) : v31 = v32;
      return v31;
    };
    if ("method" == v102.kind + "") {
      if (!$m1$isAction(v7)) {
        var v96 = v28(v7);
        var v84 = v96, v59, v62, v63, v76, v78, v81, v92;
      } else {
        v84 = v7;
      }
      v4.options_ ? (v59 = v4.options_, v62 = !!v59.bound, v63 = v62) : v63 = false;
      v63 && v102.addInitializer(function() {
        let v42 = this[v242], v15 = v42.bind(this);
        v15.isMobxAction = true;
        this[v242] = v15;
      });
      return v84;
    }
    v76 = v4.annotationType_;
    v78 = $m3$stringifyKey(v242);
    v81 = v102.kind;
    v92 = [];
    v92.push(v76);
    v92.push(v78);
    v92.push(v81);
    $m1$dieRest(43, v92);
  });
  var $m4$decorateFlow20223_ = (0, function(v4, v7, v102) {
    var v12 = [];
    v12.push("method");
    $m1$assert20223DecoratorType(v102, v12);
    var v21 = v102.name;
    if (!$m1$isFlow(v7)) {
      var v28 = $m4$flow(v7);
      var v50 = v28, v36, v39, v40;
    } else {
      v50 = v7;
    }
    v4.options_ ? (v36 = v4.options_, v39 = !!v36.bound, v40 = v39) : v40 = false;
    v40 && v102.addInitializer(function() {
      let v42 = this[v21], v15 = v42.bind(this);
      v15.isMobXFlow = true;
      this[v21] = v15;
    });
    return v50;
  });
  var $m4$flowAnnotationMake = (0, function(v4, v7, v102, v13) {
    if (v13 === v4.target_) {
      if (this.extend_(v4, v7, v102, false) == null) return 0;
      return 2;
    }
    if (this.options_) {
      var v39 = this.options_;
      var v42 = !!v39.bound;
      var v43 = v42, v58, v59, v60;
    } else {
      v43 = false;
    }
    v43 ? (!$m3$hasOwn(v4.target_, v7) ? v59 = true : (v58 = !$m1$isFlow(v4.target_[v7]), v59 = v58), v60 = v59) : v60 = false;
    if (v60 && this.extend_(v4, v7, v102, false) == null) return 0;
    if ($m1$isFlow(v102.value)) return 1;
    $m3$defineProperty(v13, v7, $m4$createFlowDescriptor(v4, v102, false, false));
    return 2;
  });
  var $m4$flowAnnotationExtend = (0, function(v4, v25, v33, v42) {
    if (this.options_) {
      var v13 = this.options_;
      var v16 = !!v13.bound;
      var v172 = v16, v21, v44;
    } else {
      v172 = false;
    }
    v44 = v172;
    v21 = v4.defineProperty_;
    v25;
    return v4.defineProperty_(v25, $m4$createFlowDescriptor(v4, v33, v44, !!$m1$globalState.safeDescriptors), v42);
  });
  var $m4$observableAnnotation = $m4$createObservableAnnotation("observable", void 0);
  v1040 = $m4$createObservableAnnotation("observable.ref", { __proto__: null, enhancer_: $m4$referenceEnhancerFn });
  v1044 = $m4$createObservableAnnotation("observable.shallow", { __proto__: null, enhancer_: v1001 });
  v1048 = $m4$createObservableAnnotation("observable.struct", { __proto__: null, enhancer_: v1003 });
  var $m4$computedAnnotation = $m4$createComputedAnnotation("computed", void 0);
  v1056 = $m4$createComputedAnnotation("computed.struct", { __proto__: null, equals: function(a$2, b) {
    return $m4$eq(a$2, b, a, void 0, void 0);
  } });
  var $m4$actionAnnotation = $m4$createActionAnnotation("action", void 0);
  v1063 = $m4$createActionAnnotation("action.bound", { __proto__: null, bound: v92 });
  var $m4$autoActionAnnotation = $m4$createActionAnnotation("autoAction", { __proto__: null, autoAction: v92 });
  v1072 = $m4$createActionAnnotation("autoAction.bound", { __proto__: null, autoAction: v92, bound: v92 });
  $m4$observable = $m3$assign(function(v20, v102, v172) {
    var v26 = void 0;
    var v27 = void 0;
    var v242 = (arguments.length | 0) > 1 ? v102 : v26, v25;
    v25 = (arguments.length | 0) > 2 ? v172 : v27;
    return $m4$createObservable(v20, v242, v25);
  }, $m4$observableAnnotation);
  $m4$observable.box = function(v19, v102) {
    var v32 = $m4$asCreateObservableOptions(void 0);
    if ((arguments.length | 0) > 1) {
      var v11 = $m4$asCreateObservableOptions(v102);
      var v322 = v11, v33, v39;
    } else {
      v322 = v32;
    }
    v39 = void 0;
    v33 = (arguments.length | 0) > 0 ? v19 : v39;
    return new $m4$ObservableValue(v33, $m4$getEnhancerFromOptions(v322), v322.name, true, v322.equals);
  };
  $m4$observable.array = function(v19, v102) {
    var v32 = $m4$asCreateObservableOptions(void 0);
    if ((arguments.length | 0) > 1) {
      var v11 = $m4$asCreateObservableOptions(v102);
      var v29 = v11, v30, v36;
    } else {
      v29 = v32;
    }
    v36 = void 0;
    v30 = (arguments.length | 0) > 0 ? v19 : v36;
    return $m4$createObservableArray(v30, $m4$getEnhancerFromOptions(v29), v29.name);
  };
  $m4$observable.map = function(v19, v102) {
    var v32 = $m4$asCreateObservableOptions(void 0);
    if ((arguments.length | 0) > 1) {
      var v11 = $m4$asCreateObservableOptions(v102);
      var v28 = v11, v29, v35;
    } else {
      v28 = v32;
    }
    v35 = void 0;
    v29 = (arguments.length | 0) > 0 ? v19 : v35;
    return new $m4$ObservableMap(v29, $m4$getEnhancerFromOptions(v28), v28.name);
  };
  $m4$observable.set = function(v19, v102) {
    var v32 = $m4$asCreateObservableOptions(void 0);
    if ((arguments.length | 0) > 1) {
      var v11 = $m4$asCreateObservableOptions(v102);
      var v28 = v11, v29, v35;
    } else {
      v28 = v32;
    }
    v35 = void 0;
    v29 = (arguments.length | 0) > 0 ? v19 : v35;
    return new $m4$ObservableSet(v29, $m4$getEnhancerFromOptions(v28), v28.name);
  };
  $m4$observable.object = function(v4, v13, v20) {
    var annotations;
    var options;
    (arguments.length | 0) > 1 && (annotations = v13);
    (arguments.length | 0) > 2 && (options = v20);
    return $m1$initObservable(function() {
      var b = $m4$extendObservable;
      var v12 = void 0;
      var v6 = {};
      var v7 = options;
      var v15 = $m4$asObservableObject(v6, v7);
      var v172 = v15[$m1$$mobx];
      if (!v172.proxy_) {
        var v25 = $m4$internedProxyTraps[0];
        v172.proxy_ = new globalThis.Proxy(v15, v25);
      }
      var v31 = v172.proxy_;
      return b(v31, v4, annotations);
    });
  };
  $m4$observableRef = $m1$createDecoratorAnnotation(v1040, $m4$decorateObservable20223_);
  v1102 = $m1$createDecoratorAnnotation(v1044, $m4$decorateObservable20223_);
  v1105 = $m1$createDecoratorAnnotation($m4$observableAnnotation, $m4$decorateObservable20223_);
  v1108 = $m1$createDecoratorAnnotation(v1048, $m4$decorateObservable20223_);
  $m4$computed = $m3$assign(function(v4, v12) {
    var v72 = void 0;
    var v70 = (arguments.length | 0) > 1 ? v12 : v72, v20, v38, v49, v54, v71, v79, v86;
    if (v70 && "string" == typeof v70.kind) return $m4$decorateComputed20223_($m4$computedAnnotation, v4, v70);
    if ($m3$isPlainObject(v4)) return $m1$createDecoratorAnnotation($m4$createComputedAnnotation("computed", v4), $m4$decorateComputed20223_);
    v38 = !("function" == typeof v4);
    v38 && $m1$die("First argument to `computed` should be an expression.");
    v86 = "function" == typeof v70;
    v86 && $m1$die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
    v49 = {};
    $m3$isPlainObject(v70) ? (v54 = $m3$assign({}, v70), v71 = v54) : v71 = v49;
    v71.get = v4;
    v71.name || (v71.name = v4.name);
    return new $m1$ComputedValue(v71);
  }, $m4$computedAnnotation);
  v1115 = $m1$createDecoratorAnnotation(v1056, $m4$decorateComputed20223_);
  $m4$action = $m3$assign(function(v52, v13) {
    var v73 = void 0;
    var v69 = (arguments.length | 0) > 1 ? v13 : v73, v21, v22, v242, v70, v71, v72, v80, v87;
    if (v69 && "string" == typeof v69.kind) {
      v22 = $m4$actionAnnotation;
      v70 = v22;
      return $m4$decorateAction20223_(v70, v52, v69);
    }
    if ("function" == typeof v52) {
      v87 = v52.name + "";
      v71 = "" == v87 ? "<unnamed action>" : v87;
      return $m1$createAction(v71, v52, false, void 0);
    }
    if ("function" == typeof v69) return $m1$createAction(v52 + "", v69, false, void 0);
    if ($m3$isStringish(v52)) {
      v72 = "action";
      return $m1$createDecoratorAnnotation($m4$createActionAnnotation(v72, { __proto__: null, name: v52, autoAction: false }), $m4$decorateAction20223_);
    }
    $m1$die("Invalid arguments for `action`");
  }, $m4$actionAnnotation);
  $m4$autoAction = $m3$assign(function(v52, v13) {
    var v73 = void 0;
    var v69 = (arguments.length | 0) > 1 ? v13 : v73, v21, v22, v242, v70, v71, v72, v80, v87;
    if (v69 && "string" == typeof v69.kind) {
      v22 = $m4$actionAnnotation;
      v92 ? (v242 = $m4$autoActionAnnotation, v70 = v242) : v70 = v22;
      return $m4$decorateAction20223_(v70, v52, v69);
    }
    if ("function" == typeof v52) {
      v87 = v52.name + "";
      v71 = "" == v87 ? "<unnamed action>" : v87;
      return $m1$createAction(v71, v52, v92, void 0);
    }
    if ("function" == typeof v69) return $m1$createAction(v52 + "", v69, v92, void 0);
    if ($m3$isStringish(v52)) {
      v72 = v92 ? "autoAction" : "action";
      return $m1$createDecoratorAnnotation($m4$createActionAnnotation(v72, { __proto__: null, name: v52, autoAction: v92 }), $m4$decorateAction20223_);
    }
    $m1$die("Invalid arguments for `action`");
  }, $m4$autoActionAnnotation);
  v1126 = $m1$createDecoratorAnnotation(v1063, $m4$decorateAction20223_);
  $m4$autoActionBound = $m1$createDecoratorAnnotation(v1072, $m4$decorateAction20223_);
  v1131 = (0, function(v4) {
    var v21 = v4.name + "";
    var v18 = "" == v21 ? "<unnamed action>" : v21;
    return $m1$executeAction(v18, false, v4, this, void 0);
  });
  $m4$extendObservable = (0, function(v4, v7, v16, v23) {
    var annotations;
    var options;
    (arguments.length | 0) > 2 && (annotations = v16);
    (arguments.length | 0) > 3 && (options = v23);
    (arguments.length | 0) > 4 && $m1$die("'extendObservable' expected 2-4 arguments");
    "object" != typeof v4 && $m1$die("'extendObservable' expects an object as first argument");
    $m1$isObservableMap(v4) && $m1$die("'extendObservable' should not be used on maps, use map.merge instead");
    $m3$isPlainObject(v7) || $m1$die("'extendObservable' only accepts plain objects as second argument");
    if ($m4$isObservableValueCheck(v7)) {
      var v51 = true, v50, v80;
    } else {
      v50 = $m4$isObservableValueCheck(annotations);
      v51 = v50;
    }
    v51 && $m1$die("Extending an object with another observable (object) is not supported");
    v80 = $m3$gObject().getOwnPropertyDescriptors(v7);
    $m1$initObservable(function() {
      var v11 = $m4$asObservableObject(v4, options)[$m1$$mobx];
      var v512 = $m3$gReflect().ownKeys(v80);
      var v45 = 0, v21, v30, v46, v47;
      var v48 = void 0;
      while (v45 < (v512.length | 0)) {
        v21 = v512[v45];
        annotations ? (true === v21 in annotations ? (v30 = annotations[v21], v46 = v30) : v46 = true, v47 = v46) : v47 = true;
        v11.extend_(v21, v80[v21], v47);
        v45 = v45 + 1;
      }
    });
    return v4;
  });
  var $m4$autorun = (0, function(v4, v13) {
    var v52 = $m1$EMPTY_OBJECT;
    if ((arguments.length | 0) > 1) {
      var v14 = !!v13;
      var v15 = v14, v23, v30, v522, v63, v64, v68, v83, v85, v106, v109, v110, v117, v118, v123, v124, v126, v134, v137;
    } else {
      v15 = false;
    }
    v123 = v15 ? v13 : v52;
    v23 = !("function" == typeof v4);
    v23 && $m1$die("Autorun expects a function as first argument");
    v30 = $m1$isAction(v4);
    v30 && $m1$die("Autorun does not accept actions since actions are untrackable");
    v123.name ? (v134 = v123.name + "", v126 = v134) : (v137 = v4.name + "", "" == v137 ? (v522 = "Autorun@" + $m1$getNextId(), v124 = v522) : v124 = v137, v126 = v124);
    !v123.scheduler ? (v63 = !v123.delay, v64 = v63) : v64 = false;
    var reactionInst;
    v68 = function() {
      v4(reactionInst);
    };
    if (v64) {
      reactionInst = new $m1$Reaction(v126, function() {
        this.track(v68);
      }, v123.onError, v123.requiresObservable);
    } else {
      v83 = $m4$createSchedulerFromOptions(v123);
      var isScheduled = false;
      v85 = $m1$Reaction;
      reactionInst = new v85(v126, function() {
        var rself = this;
        isScheduled || (isScheduled = true, v83(function() {
          isScheduled = false;
          rself.isDisposed || rself.track(v68);
        }));
      }, v123.onError, v123.requiresObservable);
    }
    v123.signal ? (v106 = v123.signal, v109 = !!v106.aborted, v110 = v109) : v110 = false;
    v110 || reactionInst.schedule_();
    v117 = reactionInst.getDisposer_;
    v118 = reactionInst;
    return v117.call(v118, v123.signal);
  });
  v1137 = (0, function(v4, v7, v16) {
    var opts = $m1$EMPTY_OBJECT;
    if ((arguments.length | 0) > 2) {
      var v172 = !!v16;
      var v18 = v172, v34, v43, v51, v62, v73, v742, v77, v86, v87, v94, v97, v109, v112, v113, v117, v122, v123, v129, v134;
    } else {
      v18 = false;
    }
    v18 && (opts = v16);
    opts.name ? (v134 = opts.name + "", v129 = v134) : (v34 = "Reaction@" + $m1$getNextId(), v129 = v34);
    var equalsFn = $m1$defaultEquals;
    !opts.equals || (equalsFn = opts.equals);
    v43 = $m4$action;
    v51 = v43(v129, $m4$wrapErrorHandler(opts.onError, v7));
    var currentValue;
    var firstTimeFlag = true;
    var changedFlag = false;
    var r;
    v62 = function() {
      var prevAllow = $m1$allowStateChangesStart(false);
      var nextValue;
      try {
        nextValue = v4(r);
      } finally {
        $m1$globalState.allowStateChanges = prevAllow;
      }
      changedFlag = firstTimeFlag || !(true === equalsFn(currentValue, nextValue));
      currentValue = nextValue;
    };
    !opts.scheduler ? (v73 = !opts.delay, v742 = v73) : v742 = false;
    var isScheduled = false;
    v77 = $m4$createSchedulerFromOptions(opts);
    v86 = function() {
      isScheduled = false;
      if (r.isDisposed) return;
      var v14 = currentValue;
      changedFlag = false;
      var v182 = r.track;
      v182.call(r, v62);
      if (firstTimeFlag) {
        var v28 = !!opts.fireImmediately;
        var v29 = v28, v41, v42;
      } else {
        v29 = false;
      }
      v29 ? v51(currentValue, v14, r) : (!firstTimeFlag ? (v41 = !!changedFlag, v42 = v41) : v42 = false, v42 && v51(currentValue, v14, r));
      firstTimeFlag = false;
    };
    v87 = $m1$Reaction;
    v94 = function() {
      firstTimeFlag || v742 ? v86() : (isScheduled = isScheduled || true, v77(v86));
    };
    v97 = opts.onError;
    r = new v87(v129, v94, v97, opts.requiresObservable);
    opts.signal ? (v109 = opts.signal, v112 = !!v109.aborted, v113 = v112) : v113 = false;
    v113 || (v117 = r.schedule_, v117.call(r));
    v122 = r.getDisposer_;
    v123 = r;
    return v122.call(v123, opts.signal);
  });
  v1139 = (0, function(v4, v36, v46) {
    if (1 == (arguments.length | 0)) {
      var v28 = true, v18, v19, v26, v27, v48, v57;
    } else {
      (arguments.length | 0) > 1 ? (v18 = !!v36, v19 = v18) : v19 = false;
      v28 = v19 && "object" == typeof v36;
    }
    if (v28) {
      v57 = void 0;
      v48 = (arguments.length | 0) > 1 ? v36 : v57;
      return $m4$whenPromise(v4, v48);
    }
    return $m4$whenEffect(v4, v36, v46);
  });
  v1141 = (0, function(options) {
    var v4 = options.isolateGlobalState;
    true === v4 && $m1$isolateGlobalState();
    if (!(options.enforceActions === void 0)) {
      var v172 = options.enforceActions;
      "always" === v172 ? ($m1$globalState.enforceActions = "always", $m1$globalState.allowStateChanges = false) : "observed" === v172 ? ($m1$globalState.enforceActions = true, $m1$globalState.allowStateChanges = false) : ($m1$globalState.enforceActions = false, $m1$globalState.allowStateChanges = true);
    }
    if (true === "computedRequiresReaction" in options) {
      var v45 = $m1$globalState;
      v45.computedRequiresReaction = !!options.computedRequiresReaction;
    }
    if (true === "reactionRequiresObservable" in options) {
      var v54 = $m1$globalState;
      v54.reactionRequiresObservable = !!options.reactionRequiresObservable;
    }
    if (true === "observableRequiresReaction" in options) {
      var v63 = $m1$globalState;
      v63.observableRequiresReaction = !!options.observableRequiresReaction;
    }
    if (true === "disableErrorBoundaries" in options) {
      var v72 = $m1$globalState;
      v72.disableErrorBoundaries = !!options.disableErrorBoundaries;
    }
    if (true === "safeDescriptors" in options) {
      var v81 = $m1$globalState;
      v81.safeDescriptors = !!options.safeDescriptors;
    }
    var v87 = $m1$globalState;
    v87.allowStateReads = !$m1$globalState.observableRequiresReaction;
    if (options.reactionScheduler) {
      var v100 = options.reactionScheduler;
      var v116 = $m1$reactionScheduler;
      $m1$reactionScheduler = function(f) {
        return v100(function() {
          return v116(f);
        });
      };
    }
  });
  v1143 = (0, function(v13) {
    var v7 = 1 != (arguments.length | 0);
    v7 && $m1$die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return $m4$isObservableValueCheck(v13);
  });
  v1145 = (0, function(v4, v7) {
    var v12 = !$m3$isStringish(v7);
    v12 && $m1$die("expected a property name as second argument");
    if (!$m1$isObservableObject(v4)) return false;
    var v22 = v4[$m1$$mobx];
    if ($m3$mapHas(v22.values_, v7)) return true;
    if (v22.lazyComputedKeys_) {
      var v38 = $m3$mapHas(v22.lazyComputedKeys_, v7);
      var v39 = v38, v50, v51;
    } else {
      v39 = false;
    }
    if (v39) return true;
    v22.lazyObservableKeys_ ? (v50 = $m3$mapHas(v22.lazyObservableKeys_, v7), v51 = v50) : v51 = false;
    if (v51) return true;
    return false;
  });
  var $m4$FlowCancellationError = (0, function() {
    this.message = "FLOW_CANCELLED";
    this.name = "FlowCancellationError";
    return this;
  });
  v1150 = $m4$FlowCancellationError.prototype;
  v1153 = globalThis.Error.prototype;
  $m3$gObject().setPrototypeOf(v1150, v1153);
  $m4$FlowCancellationError.prototype.constructor = $m4$FlowCancellationError;
  $m3$defineProperty($m4$FlowCancellationError, "name", { __proto__: null, value: "FlowCancellationError", configurable: v92 });
  v1168 = $m4$FlowCancellationError.prototype;
  v1168.toString = function() {
    return "Error: " + this.message;
  };
  v1173 = (0, function(error) {
    return $m3$protoIsPrototypeOf($m4$FlowCancellationError, error);
  });
  var $m4$localGeneratorId = 0;
  v1176 = function(v4, v12) {
    if ((arguments.length | 0) > 1) {
      var v13 = !!v12;
      var v14 = v13, v22, v36, v52, v63;
    } else {
      v14 = false;
    }
    if (v14 && "string" == typeof v12.kind) return $m4$decorateFlow20223_($m4$flow, v4, v12);
    v36 = 1 != (arguments.length | 0);
    v36 && $m1$die("Flow expects single argument with generator function");
    var name = v4.name + "";
    "" == name && (name = "<unnamed flow>");
    v52 = (0, function() {
      $m4$localGeneratorId = $m4$localGeneratorId + 1 | 0;
      var v7 = $m4$localGeneratorId;
      var v172 = name + " - runid: " + v7 + " - init";
      var v90 = $m4$action(v172, v4).apply(this, arguments);
      var v26 = {};
      Object.assign(v26, { rejector: void 0, pending: void 0, stepId: 0 });
      var onFulfilled;
      var onRejected;
      var nextStep;
      onFulfilled = (0, function(v) {
        v26.pending = void 0;
        try {
          var stepName = name;
          var stepId = +v26.stepId | 0;
          v26.stepId = stepId + 1 | 0;
          var v28 = name + " - runid: " + v7 + " - yield ";
          stepName = v28 + stepId + "";
          var ret = $m4$action(stepName, v90.next).call(v90, v);
          nextStep(ret);
        } catch (v46) {
          v26.rejector(v46);
        }
      });
      onRejected = (0, function(err) {
        v26.pending = void 0;
        try {
          var stepName = name;
          var stepId = +v26.stepId | 0;
          v26.stepId = stepId + 1 | 0;
          var v28 = name + " - runid: " + v7 + " - yield ";
          stepName = v28 + stepId + "";
          var ret = $m4$action(stepName, v90.throw).call(v90, err);
          nextStep(ret);
        } catch (v46) {
          v26.rejector(v46);
        }
      });
      nextStep = (0, function(ret) {
        if ("function" == typeof ret.then) {
          var v122 = nextStep;
          ret.then(v122, v26.rejector);
          return;
        }
        if (ret.done) {
          v26.resolve(ret.value);
          return;
        }
        v26.pending = globalThis.Promise.resolve(ret.value);
        var v41 = v26.pending;
        v41.then(onFulfilled, onRejected);
      });
      var v98 = globalThis.Promise;
      var v64 = new v98(function(v8, v132) {
        Object.assign(v26, { resolve: v8, rejector: v132 });
        onFulfilled(void 0);
      });
      var v742 = name + " - runid: " + v7 + " - cancel";
      v64.cancel = $m4$action(v742, function() {
        try {
          if (v26.pending) {
            var v102 = v26.pending;
            var v67 = "function" == typeof v102.cancel;
            var v142 = v67, v173, v55;
          } else {
            v142 = false;
          }
          v142 && (v173 = v26.pending, v173.cancel.call(v26.pending));
          var ret = v90.return(void 0);
          var yielded = globalThis.Promise.resolve(ret.value);
          yielded.then($m3$noop, $m3$noop);
          "function" == typeof yielded.cancel && yielded.cancel.call(yielded);
          v26.rejector(new $m4$FlowCancellationError());
        } catch (v552) {
          v26.rejector(v552);
        }
      });
      return v64;
    });
    v52.isMobXFlow = true;
    return v52;
  };
  v1448 = {};
  Object.assign(v1448, { annotationType_: "flow", options_: void 0, make_: $m4$flowAnnotationMake, extend_: $m4$flowAnnotationExtend });
  $m4$flow = $m3$assign(v1176, v1448);
  v1455 = {};
  Object.assign(v1455, { annotationType_: "flow.bound", options_: { __proto__: null, bound: v92 }, make_: $m4$flowAnnotationMake, extend_: $m4$flowAnnotationExtend });
  $m4$flowBound = $m1$createDecoratorAnnotation(v1455, $m4$decorateFlow20223_);
  v1187 = {};
  Object.assign(v1187, { annotationType_: "override", make_: function(v4, v7) {
    var v13 = !!v4.isPlainObject_;
    if (v13) {
      var v22 = "Cannot apply '" + this.annotationType_ + "' to '";
      var v34 = v22 + v4.name_ + "." + $m3$stringifyKey(v7) + "':\n'";
      $m1$die(v34 + this.annotationType_ + "' cannot be used on plain objects.");
    }
    var v50 = !$m3$hasOwn(v4.appliedAnnotations_, v7);
    if (v50) {
      var v64 = "'" + v4.name_ + "." + $m3$stringifyKey(v7) + "' is annotated with '";
      $m1$die(v64 + this.annotationType_ + "', but no such annotated member was found on prototype.");
    }
    return 0;
  }, extend_: function() {
    $m1$die1(44, this.annotationType_);
    return false;
  } });
  var $m4$keysSymbol = globalThis.Symbol("mobx-keys");
  v1204 = (0, function(v4, v7, v15) {
    var options;
    (arguments.length | 0) > 2 && (options = v15);
    $m1$initObservable(function() {
      var v102 = $m4$asObservableObject(v4, options)[$m1$$mobx];
      var v36 = $m3$gReflect().ownKeys(v7);
      var v32 = 0, v21;
      var v33 = void 0;
      while (v32 < (v36.length | 0)) {
        v21 = v36[v32];
        $m4$makeAnnotate(v102, v21, v7[v36[v32]]);
        v32 = v32 + 1;
      }
    });
    return v4;
  });
  v1206 = (0, function(v4, v13, v20) {
    var overrides;
    var options;
    (arguments.length | 0) > 1 && (overrides = v13);
    (arguments.length | 0) > 2 && (options = v20);
    var v64 = $m3$gObject();
    var v66 = v64.getPrototypeOf(v4);
    !$m3$isPlainObject(v4) && !$m3$isPlainObject(v66) && $m1$die("'makeAutoObservable' can only be used for classes that don't have a superclass");
    $m1$isObservableObject(v4) && $m1$die("makeAutoObservable can only be used on objects not already made observable");
    if ($m3$isPlainObject(v4)) return $m4$extendObservable(v4, v4, overrides, options);
    $m1$initObservable(function() {
      var v102 = $m4$asObservableObject(v4, options)[$m1$$mobx];
      if (!(true === $m4$keysSymbol in v4)) {
        var v76 = $m3$gObject().getPrototypeOf(v4);
        var v18 = new globalThis.Set();
        var v82 = $m3$gReflect().ownKeys(v4);
        var v85 = $m3$gReflect().ownKeys(v76);
        var v70 = 0, v31, v44, v61, v69;
        var v71 = void 0;
        while (v70 < (v82.length | 0)) {
          v31 = v82[v70];
          v18.add(v31);
          v70 = v70 + 1;
        }
        v69 = 0;
        while (v69 < (v85.length | 0)) {
          v44 = v85[v69];
          v18.add(v44);
          v69 = v69 + 1;
        }
        v18.delete("constructor");
        v18.delete($m1$$mobx);
        $m3$defineProperty(v76, $m4$keysSymbol, { __proto__: null, enumerable: false, writable: true, configurable: true, value: v18 });
      }
      v61 = v4[$m4$keysSymbol];
      v61.forEach(function(key) {
        if (overrides) {
          var v25 = true === key in overrides;
          var v11 = v25, v14, v202;
        } else {
          v11 = false;
        }
        v11 ? (v14 = overrides[key], v202 = v14) : v202 = true;
        $m4$makeAnnotate(v102, key, v202);
      });
    });
    return v4;
  });
  var $m4$keys = (0, function(obj) {
    if ($m1$isObservableObject(obj)) {
      var v6 = obj[$m1$$mobx];
      return v6.keys_.call(obj[$m1$$mobx]);
    }
    if ($m1$isObservableMap(obj) || $m1$isObservableSet(obj)) return $m3$arrayFrom(obj.keys());
    if ($m1$isObservableArray(obj)) {
      var v25 = [];
      var v43 = 0, v172, v18;
      while (v43 < (obj.length | 0)) {
        v25.push(v43);
        v43 = v43 + 1;
      }
      return v25;
    }
    $m1$die(5);
  });
  v1210 = (0, function(obj) {
    if ($m1$isObservableObject(obj)) {
      var v68 = $m4$keys(obj);
      var v8 = [];
      var v65 = 0, v19, v31, v66, v76;
      var v67 = void 0;
      while (v65 < (v68.length | 0)) {
        v19 = obj[v68[v65]];
        v8.push(v19);
        v65 = v65 + 1;
      }
      return v8;
    }
    if ($m1$isObservableMap(obj)) {
      v76 = $m4$keys(obj);
      v31 = [];
      v66 = 0;
      var v75 = void 0;
      while (v66 < (v76.length | 0)) {
        v31.push(obj.get(v76[v66]));
        v66 = v66 + 1;
      }
      return v31;
    }
    if ($m1$isObservableSet(obj)) return $m3$arrayFrom(obj.values());
    if ($m1$isObservableArray(obj)) return obj.slice();
    $m1$die(6);
  });
  v1212 = (0, function(obj) {
    if ($m1$isObservableObject(obj) || $m1$isObservableMap(obj)) {
      var v88 = $m4$keys(obj);
      var v12 = [];
      var v85 = 0, v6, v7, v18, v22, v41, v58, v66, v86;
      var v87 = void 0;
      while (v85 < (v88.length | 0)) {
        v18 = [];
        v22 = v88[v85];
        v18.push(v22);
        $m1$isObservableMap(obj) ? v18.push(obj.get(v88[v85])) : (v41 = obj[v88[v85]], v18.push(v41));
        v12.push(v18);
        v85 = v85 + 1;
      }
      return v12;
    }
    if ($m1$isObservableSet(obj)) return $m3$arrayFrom(obj.entries());
    if ($m1$isObservableArray(obj)) {
      v58 = [];
      v86 = 0;
      while (v86 < (obj.length | 0)) {
        v66 = [];
        v66.push(v86);
        v66.push(obj[v86]);
        v58.push(v66);
        v86 = v86 + 1;
      }
      return v58;
    }
    $m1$die(7);
  });
  var $m4$set = (0, function(v4, v7, v15) {
    var v104 = void 0;
    var v103 = (arguments.length | 0) > 2 ? v15 : v104, v23, v242, v29, v33, v38, v54, v126;
    if (2 == (arguments.length | 0) && !$m1$isObservableSet(v4)) {
      $m1$startBatch();
      try {
        var ks = $m3$gObject().keys(v7);
        var i = 0;
        for (; ; ) {
          v29 = i;
          if (v29 >= (ks.length | 0)) {
            break;
          }
          v33 = $m4$set;
          v38 = ks[i];
          v33(v4, v38, v7[ks[i]]);
          i = i + 1 | 0;
        }
      } finally {
        $m1$endBatch();
      }
      return;
    }
    $m1$isObservableObject(v4) ? (v54 = v4[$m1$$mobx], v54.set_.call(v4[$m1$$mobx], v7, v103)) : $m1$isObservableMap(v4) ? v4.set(v7, v103) : $m1$isObservableSet(v4) ? v4.add(v7) : $m1$isObservableArray(v4) ? ($m1$startBatch(), v126 = +v7 | 0, v126 >= (v4.length | 0) && (v4.length = (+v7 | 0) + 1 | 0), v4[v7] = v103, $m1$endBatch()) : $m1$die(8);
  });
  v1216 = (0, function(v4, v7) {
    if ($m1$isObservableObject(v4)) {
      var v12 = v4[$m1$$mobx];
      v12.delete_.call(v4[$m1$$mobx], v7);
    } else {
      $m1$isObservableMap(v4) || $m1$isObservableSet(v4) ? v4.delete(v7) : $m1$isObservableArray(v4) ? v4.splice(v7, 1) : $m1$die(9);
    }
  });
  var $m4$has = (0, function(v4, v7) {
    if ($m1$isObservableObject(v4)) {
      var v12 = v4[$m1$$mobx];
      return v12.has_.call(v4[$m1$$mobx], v7);
    }
    if ($m1$isObservableMap(v4) || $m1$isObservableSet(v4)) return v4.has(v7);
    if ($m1$isObservableArray(v4)) {
      if ((+v7 | 0) >= 0) {
        var v55 = +v7 | 0;
        var v45 = v55 < (v4.length | 0);
        var v46 = v45, v242, v25;
      } else {
        v46 = false;
      }
      return v46;
    }
    $m1$die(10);
    return false;
  });
  v1220 = (0, function(v4, v7) {
    if (!$m4$has(v4, v7)) return;
    if ($m1$isObservableObject(v4)) {
      var v20 = v4[$m1$$mobx];
      return v20.get_.call(v4[$m1$$mobx], v7);
    }
    if ($m1$isObservableMap(v4)) return v4.get(v7);
    if ($m1$isObservableArray(v4)) return v4[v7];
    $m1$die(11);
  });
  var $m4$ownKeysApi = (0, function(obj) {
    if ($m1$isObservableObject(obj)) {
      var v6 = obj[$m1$$mobx];
      return v6.ownKeys_.call(obj[$m1$$mobx]);
    }
    $m1$die(38);
  });
  v1224 = (0, function(v4, v20, v23) {
    if ($m1$isObservableObject(v4)) {
      var v102 = v4[$m1$$mobx];
      var v12 = v102.defineProperty_;
      return v12.call(v4[$m1$$mobx], v20, v23);
    }
    $m1$die(39);
  });
  var $m4$getAtom = (0, function(v4, v12) {
    var v155 = void 0;
    var v151 = (arguments.length | 0) > 1 ? v12 : v155, v20, v21, v31, v48, v56, v66, v76, v77, v93, v96, v124, v132, v136, v152, v153, v154, v167, v169, v170, v177, v178, v179, v180, v183, v185;
    if ("object" == typeof v4 && !(v4 == null)) {
      if ($m1$isObservableArray(v4)) {
        v151 === void 0 || $m1$die(23);
        v31 = v4[$m1$$mobx];
        return v31.atom_;
      }
      if ($m1$isObservableSet(v4)) return v4.atom_;
      if ($m1$isObservableMap(v4)) {
        if (v151 === void 0) return v4.keysAtom_;
        v48 = v4.data_;
        v167 = v48.get(v151);
        !v167 ? (v56 = v4.hasMap_, v169 = v56.get(v151), v152 = v169) : v152 = v167;
        v152 || (v66 = v4.name_, v170 = [], v170.push(v151), v170.push(v66), $m1$dieRest(25, v170));
        return v152;
      }
      v151 ? (v76 = !v4[$m1$$mobx], v77 = v76) : v77 = false;
      if (v77) {
        if (v4[v151] === void 0) {
        }
      }
      if ($m1$isObservableObject(v4)) {
        v151 || $m1$die(26);
        v93 = v4[$m1$$mobx];
        v96 = v93.values_;
        v177 = v96.get(v151);
        !v177 ? (v178 = v93.materializeLazyComputed_(v151), v154 = v178) : v154 = v177;
        !v154 ? (v179 = v93.materializeLazyObservable_(v151), v153 = v179) : v153 = v154;
        v153 || (v124 = v93.name_, v180 = [], v180.push(v151), v180.push(v124), $m1$dieRest(27, v180));
        return v153;
      }
      if ($m1$hasMobXFlag(v4, "isMobXAtom") || $m1$hasMobXFlag(v4, "isMobXComputedValue") || $m1$hasMobXFlag(v4, "isMobXReaction")) return v4;
    } else {
      if ("function" == typeof v4 && $m1$hasMobXFlag(v4[$m1$$mobx], "isMobXReaction")) return v4[$m1$$mobx];
    }
    $m1$die1(28, v4);
  });
  var $m4$getAdministration = (0, function(v4, v28) {
    v4 || $m1$die(29);
    if ((arguments.length | 0) > 1 && !(v28 === void 0)) {
      var v21 = $m4$getAdministration;
      return v21($m4$getAtom(v4, v28));
    }
    if ($m1$hasMobXFlag(v4, "isMobXAtom") || $m1$hasMobXFlag(v4, "isMobXComputedValue") || $m1$hasMobXFlag(v4, "isMobXReaction") || $m1$isObservableMap(v4) || $m1$isObservableSet(v4)) return v4;
    if (v4[$m1$$mobx]) return v4[$m1$$mobx];
    $m1$die1(24, v4);
  });
  v1230 = (0, function(v45, v102) {
    if ((arguments.length | 0) > 1 && !(v102 === void 0)) {
      var v22 = $m4$getAtom(v45, v102);
      var v65 = v22, v12, v13, v40, v41, v46, v47, v54, v60, v64;
    } else {
      if ($m1$isAction(v45)) {
        return v45.name;
      } else {
        $m1$isObservableObject(v45) ? v41 = true : (v40 = $m1$isObservableMap(v45), v41 = v40);
        v41 || $m1$isObservableSet(v45) ? (v54 = $m4$getAdministration(v45), v64 = v54) : (v60 = $m4$getAtom(v45), v64 = v60);
      }
      v65 = v64;
    }
    return v65.name_;
  });
  v1232 = (0, function(v4, v29, v12, v22) {
    if ((arguments.length | 0) > 2 && "function" == typeof v12) {
      if ((arguments.length | 0) > 3) {
        var v23 = !!v22;
        var v51 = v23, v14, v30, v44, v52, v59;
      } else {
        v51 = false;
      }
      v30 = $m4$getAdministration(v4, v29);
      return $m4$observeValue(v30, v12, v51);
    }
    (arguments.length | 0) > 2 ? (v44 = !!v12, v52 = v44) : v52 = false;
    return $m4$observeObservable(v4, v29, v52);
  });
  v1234 = (0, function(v4, v20, v12) {
    if ((arguments.length | 0) > 2 && "function" == typeof v12) {
      var v21 = $m4$getAdministration(v4, v20);
      return $m1$registerInterceptor(v21, v12);
    }
    var v29 = $m4$getAdministration(v4);
    return $m1$registerInterceptor(v29, v20);
  });
  v1236 = (0, function() {
    return $m4$interceptHook("onBOL", arguments);
  });
  v1238 = (0, function() {
    return $m4$interceptHook("onBUOL", arguments);
  });
  v1240 = (0, function(v19, v12) {
    var v7 = (arguments.length | 0) > 1;
    v7 && v12 && $m1$die("toJS no longer supports options");
    return $m4$toJSHelper(v19, new ($m3$gMap())());
  });
  v1242 = (0, function(v6, v9) {
    return $m4$nodeToDependencyTree($m4$getAtom(v6, v9));
  });
  v1244 = (0, function(v6, v9) {
    return $m4$nodeToObserverTree($m4$getAtom(v6, v9));
  });
  v1246 = (0, function(value) {
    return $m1$hasMobXFlag(value, "isMobXComputedValue");
  });
  v1248 = (0, function(v20, v6) {
    var v8 = !$m3$isStringish(v6);
    v8 && $m1$die("isComputed expected a property name as second argument");
    if (!$m1$isObservableObject(v20)) return false;
    var v22 = v20[$m1$$mobx];
    if (v22.lazyComputedKeys_) {
      var v30 = v22.lazyComputedKeys_;
      var v34 = $m3$mapHas(v30, v6);
      var v35 = v34, v39;
    } else {
      v35 = false;
    }
    if (v35) return true;
    v39 = v22.values_;
    if (!$m3$mapHas(v39, v6)) return false;
    return $m1$hasMobXFlag(v22.values_.get(v6), "isMobXComputedValue");
  });
  v1250 = (0, function(v4, v45, v49) {
    var target;
    var v72 = void 0;
    if ($m1$isObservableMap(v4)) {
      var v12 = true, v11, v16, v19, v20, v36, v59, v69, v70, v742;
    } else {
      v11 = $m1$isObservableArray(v4);
      v12 = v11;
    }
    v12 || $m1$hasMobXFlag(v4, "isMobXObservableValue") || $m1$isObservableSet(v4) ? (target = $m4$getAdministration(v4), v70 = v45) : ($m1$isObservableObject(v4) ? (v36 = !$m3$isStringish(v45), v36 && $m1$die("InterceptReads can only be used with a specific property, not with an object in general"), target = $m4$getAdministration(v4, v45), v69 = v49) : ($m1$die("Expected observable map, object or array as first array"), v69 = v72), v70 = v69);
    v59 = !(target.dehancer === void 0);
    v59 && $m1$die("An intercept reader was already established");
    target.dehancer = v70;
    return function() {
      target.dehancer = void 0;
    };
  });
  v1252 = (0, function(result) {
    return result;
  });
  v1254 = (0, function(fn) {
    return $m1$isFlow(fn);
  });
  var $mobx = $m1$$mobx;
  var action = $m4$action;
  var actionBound = v1126;
  var _allowStateChanges = $m1$allowStateChanges;
  var _allowStateChangesInsideComputed = v1131;
  var _allowStateReadsEnd = function(prev) {
    $m1$globalState.allowStateReads = prev;
  };
  var _allowStateReadsStart = function(allowStateReads) {
    let v4 = !!$m1$globalState.allowStateReads;
    $m1$globalState.allowStateReads = allowStateReads;
    return v4;
  };
  var _autoAction = $m4$autoAction;
  var _autoActionBound = $m4$autoActionBound;
  var autorun = $m4$autorun;
  var compareDefault = function(a$2, b) {
    return $m3$objectIs(a$2, b);
  };
  var compareIdentity = function(a$2, b) {
    return a$2 === b;
  };
  var compareShallow = function(a$2, b) {
    return $m4$eq(a$2, b, 1, void 0, void 0);
  };
  var compareStructural = function(a$2, b) {
    return $m4$eq(a$2, b, a, void 0, void 0);
  };
  var computed = $m4$computed;
  var computedStruct = v1115;
  var configure = v1141;
  var createAtom = $m1$createAtom;
  var defineProperty = v1224;
  var extendObservable = $m4$extendObservable;
  var flow = $m4$flow;
  var flowBound = $m4$flowBound;
  var isFlow = v1254;
  var flowResult = v1252;
  var FlowCancellationError = $m4$FlowCancellationError;
  var isFlowCancellationError = v1173;
  var get = v1220;
  var _getAdministration = $m4$getAdministration;
  var getAtom = $m4$getAtom;
  var getDebugName = v1230;
  var getDependencyTree = v1242;
  var has = $m4$has;
  var _getGlobalState = v373;
  var getObserverTree = v1244;
  var intercept = v1234;
  var _interceptReads = v1250;
  var isAction = $m1$isAction;
  var isBoxedObservable = function(x) {
    return $m1$hasMobXFlag(x, "isMobXObservableValue");
  };
  var isComputed = v1246;
  var isComputedProp = v1248;
  var _isComputingDerivation = function() {
    return !($m1$globalState.trackingDerivation == null);
  };
  var isObservable = v1143;
  var isObservableArray = $m1$isObservableArray;
  var isObservableMap = $m1$isObservableMap;
  var isObservableSet = $m1$isObservableSet;
  var isObservableObject = $m1$isObservableObject;
  var isObservableProp = v1145;
  var keys = $m4$keys;
  var makeAutoObservable = v1206;
  var makeObservable = v1204;
  var ObservableMap = $m4$ObservableMap;
  var ObservableSet = $m4$ObservableSet;
  var observable = $m4$observable;
  var observableDeep = v1105;
  var observableRef = $m4$observableRef;
  var observableShallow = v1102;
  var observableStruct = v1108;
  var observe = v1232;
  var onReactionError = v261;
  var onBecomeObserved = v1236;
  var onBecomeUnobserved = v1238;
  var ownKeys = $m4$ownKeysApi;
  var Reaction = $m1$Reaction;
  var reaction = v1137;
  var remove = v1216;
  var _resetGlobalState = v375;
  var runInAction = v1131;
  var set = $m4$set;
  var spy = v95;
  var toJS = v1240;
  var transaction = v377;
  var untracked = v104;
  var values = v1210;
  var entries = v1212;
  var when = v1139;
  var _startAction = $m1$_startAction;
  var _endAction = $m1$_endAction;
  var override = v1187;
  return __toCommonJS(mobx_dev_esm_exports);
})();
typeof module!=="undefined"&&module.exports&&(module.exports=mobx);
