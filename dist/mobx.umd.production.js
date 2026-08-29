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

  // dist/mobx.esm.js
  var mobx_esm_exports = {};
  __export(mobx_esm_exports, {
    $mobx: () => t,
    FlowCancellationError: () => G,
    ObservableMap: () => a,
    ObservableSet: () => v,
    Reaction: () => y,
    _allowStateChanges: () => ft,
    _allowStateChangesInsideComputed: () => Sa,
    _allowStateReadsEnd: () => Dr,
    _allowStateReadsStart: () => Vr,
    _autoAction: () => Se,
    _autoActionBound: () => Ge,
    _endAction: () => qt,
    _getAdministration: () => M,
    _getGlobalState: () => xa,
    _interceptReads: () => ii,
    _isComputingDerivation: () => Pr,
    _resetGlobalState: () => Ca,
    _startAction: () => Tt,
    action: () => ae,
    actionBound: () => Ka,
    autorun: () => Je,
    compareDefault: () => Ar,
    compareIdentity: () => Sr,
    compareShallow: () => zr,
    compareStructural: () => Nr,
    computed: () => ne,
    computedStruct: () => Na,
    configure: () => Ta,
    createAtom: () => Ue,
    defineProperty: () => Xa,
    entries: () => Ga,
    extendObservable: () => Ae,
    flow: () => $,
    flowBound: () => We,
    flowResult: () => wa,
    get: () => Fa,
    getAtom: () => W,
    getDebugName: () => Ja,
    getDependencyTree: () => ti,
    getObserverTree: () => ri,
    has: () => Ct,
    intercept: () => Qa,
    isAction: () => Z,
    isBoxedObservable: () => Kr,
    isComputed: () => ni,
    isComputedProp: () => ai,
    isFlow: () => La,
    isFlowCancellationError: () => za,
    isObservable: () => Ea,
    isObservableArray: () => m,
    isObservableMap: () => l,
    isObservableObject: () => f,
    isObservableProp: () => Va,
    isObservableSet: () => c,
    keys: () => Ce,
    makeAutoObservable: () => Ua,
    makeObservable: () => qa,
    observable: () => r,
    observableDeep: () => Ba,
    observableRef: () => Oe,
    observableShallow: () => Pa,
    observableStruct: () => Da,
    observe: () => $a,
    onBecomeObserved: () => Ya,
    onBecomeUnobserved: () => Za,
    onReactionError: () => Aa,
    override: () => Oa,
    ownKeys: () => Rt,
    reaction: () => Ma,
    remove: () => Wa,
    runInAction: () => Sa,
    set: () => xt,
    spy: () => Ra,
    toJS: () => ei,
    transaction: () => ka,
    untracked: () => ja,
    values: () => Ha,
    when: () => Ia
  });
  var Pa;
  var ya = "ObservableObject.key";
  var ba = "ObservableObject.";
  var ma = "<unnamed action>";
  var Kr = (e2) => !!fe(e2);
  var ze = (e2) => !!e2 ? e2 : dt;
  var Lt = (e2) => {
    !e2.onBUOL || e2.onBUOL.forEach(function(e3) {
      e3();
    });
  };
  var Kt = (e2) => {
    !e2.onBOL || e2.onBOL.forEach(function(e3) {
      e3();
    });
  };
  var R = (e2) => {
    i(), Nt(e2), o();
  };
  var c = (e2) => !!ut(e2);
  var l = (e2) => !!st(e2);
  var C = (e2) => F(e2) && true === e2.isMobXComputedValue;
  var Pe = (e2) => F(e2) && true === e2.isMobXCaughtException;
  var Ve = (e2) => F(e2) && true === e2.isMobXReaction;
  var Ye = (e2) => F(e2) && true === e2.isMobXAtom;
  var u = (e2) => {
    Y(e2, []);
  };
  var je = (e2) => {
    throw e2;
  };
  var g = (e2, r2, t2) => {
    n.defineProperty(e2, r2, t2);
  };
  var b = (e2) => Array.from(e2);
  var i = () => {
    e.inBatch++;
  };
  var zt = () => {
    if (!((e.inBatch | 0) > 0 || e.isRunningReactions)) qe(fr);
  };
  var Bt = (e2, r2) => {
    e2.observers_.delete(r2), r2 = e2.observers_, r2.size || Pt(e2);
  };
  var B = (e2, r2) => {
    var a2 = T(), t2 = e2.changeListeners_;
    if (!t2) {
      j(a2);
      return;
    }
    t2 = J.call(t2);
    var n2 = t2.length;
    for (e2 = 0; e2 < n2; e2++) t2[e2](r2);
    j(a2);
  };
  var V = (e2, r2) => {
    var i2 = T();
    try {
      var a2 = [];
      !e2.interceptors_ || (a2 = e2.interceptors_);
      for (var n2 = J.call(a2), o2 = n2.length, t2 = 0; t2 < o2; t2++) {
        r2 = n2[t2](r2), r2 && !r2.type && u(14);
        if (!r2) break;
      }
      return r2;
    } finally {
      j(i2);
    }
  };
  var Ht = (e2, r2) => {
    e2.interceptors_ === void 0 && (e2.interceptors_ = []);
    var t2 = e2.interceptors_;
    t2.push(r2);
    return Dt(function() {
      var e3 = +t2.indexOf(r2);
      e3 != -1 && t2.splice(e3, 1);
    });
  };
  var ge = (e2, r2) => {
    e2.changeListeners_ === void 0 && (e2.changeListeners_ = []);
    var t2 = e2.changeListeners_;
    t2.push(r2);
    return Dt(function() {
      var e3 = +t2.indexOf(r2);
      e3 != -1 && t2.splice(e3, 1);
    });
  };
  var P = (e2) => {
    if (e2.changeListeners_ !== void 0) var t2 = e2.changeListeners_, r2 = t2.length > 0;
    else {
      r2 = false;
    }
    return r2;
  };
  var E = (e2) => {
    if (e2.interceptors_ !== void 0) var t2 = e2.interceptors_, r2 = t2.length > 0;
    else {
      r2 = false;
    }
    return r2;
  };
  var nr = (e2) => {
    var a2 = { name: e2.name_ };
    if (e2.observing_) var t2 = e2.observing_, r2 = t2.length > 0;
    else {
      r2 = false;
    }
    if (r2) {
      for (t2 = [], r2 = 0; ; r2++) {
        if (r2 >= e2.observing_.length) break;
        t2.push(nr(e2.observing_[r2]));
      }
      a2.dependencies = t2;
    }
    return a2;
  };
  var ar = (e2) => {
    var t2 = { name: e2.name_ };
    if (((e3) => {
      var r3;
      return !!((r3 = e3.observers_) && r3.size);
    })(e2)) {
      var r2 = e2.observers_;
      r2 = b(r2.values());
      var a2 = [];
      for (e2 = 0; e2 < r2.length; e2++) a2.push(ar(r2[e2]));
      t2.observers = a2;
    }
    return t2;
  };
  var Nt = (e2) => {
    if (2 !== e2.lowestObserverState_) e2.lowestObserverState_ = 2, e2.observers_.forEach(lr);
  };
  var Mt = (e2) => {
    if (0 != (e2.dependenciesState_ | 0)) {
      e2.dependenciesState_ = 0;
      var t2 = e2.observing_, r2 = t2.length;
      while (r2 > 0) r2--, e2 = t2[r2], e2.lowestObserverState_ = 0;
    }
  };
  var tt = (e2) => {
    var t2 = e2.observing_;
    e2.observing_ = [];
    var r2 = t2.length;
    while (r2 > 0) r2--, Bt(t2[r2], e2);
    e2.dependenciesState_ = -1;
  };
  var et = (r2) => {
    var t2 = r2.dependenciesState_ | 0;
    if (0 == t2) return false;
    if (t2 == -1 || 2 == t2) return true;
    if (1 == t2) {
      t2 = true, t2 = T();
      for (var a2, i2, o2 = r2.observing_, s2 = o2.length, n2 = 0; n2 < s2; n2++) {
        a2 = o2[n2];
        if (C(a2)) {
          i2 = e.disableErrorBoundaries;
          if (true === i2) a2.get();
          else try {
            a2.get();
          } catch {
            j(t2);
            return true;
          }
          a2 = r2.dependenciesState_;
          if (2 === a2) return j(t2), true;
        }
      }
      Mt(r2);
      j(t2);
      return false;
    }
    return false;
  };
  var It = (r2, t2, a2) => {
    var i2, n2 = true;
    Mt(r2), 0 != (r2.runId_ | 0) ? (i2 = r2.observing_, n2 = i2.length) : n2 = 100, r2.newObserving_ = new Array(n2), r2.unboundDepsCount_ = 0, n2 = (e.runId | 0) + 1 | 0, e.runId = n2, r2.runId_ = n2, n2 = e.trackingDerivation, e.trackingDerivation = r2, i2 = e, i2.inBatch = (e.inBatch | 0) + 1 | 0;
    var o2;
    i2 = e.disableErrorBoundaries;
    if (true === i2) o2 = t2.call(a2);
    else try {
      o2 = t2.call(a2);
    } catch (e2) {
      o2 = new he(e2);
    }
    e.inBatch--;
    e.trackingDerivation = n2, ((e2) => {
      var s2 = e2.observing_, n3 = e2.newObserving_;
      e2.observing_ = n3;
      for (var r3, i3, l2 = e2.unboundDepsCount_ | 0, o3 = 0, a3 = 0, t3 = 0; t3 < l2; t3++) r3 = n3[t3], 0 == (r3.diffValue | 0) && (r3.diffValue = 1, a3 != t3 && (n3[a3] = r3), a3++), i3 = r3.dependenciesState_, i3 !== void 0 && (i3 | 0) > o3 && (o3 = i3 | 0);
      n3.length = a3, e2.newObserving_ = null, r3 = s2.length;
      while (r3 > 0) r3--, t3 = s2[r3], 0 == (t3.diffValue | 0) && Bt(t3, e2), t3.diffValue = 0;
      while (a3 > 0) a3--, r3 = n3[a3], 1 == (r3.diffValue | 0) && (r3.diffValue = 0, ((e3, r4) => {
        var t4 = e3.observers_;
        t4.add(r4), t4 = e3.lowestObserverState_ | 0, t4 > (r4.dependenciesState_ | 0) && (e3.lowestObserverState_ = r4.dependenciesState_);
      })(r3, e2));
      0 != o3 && (e2.dependenciesState_ = o3, e2.onBecomeStale_());
    })(r2);
    return o2;
  };
  var T = () => {
    let r2 = e.trackingDerivation;
    e.trackingDerivation = null;
    return r2;
  };
  var Pr = () => e.trackingDerivation != null;
  var j = (r2) => {
    e.trackingDerivation = r2;
  };
  var _ = (r2) => {
    var t2 = e.trackingDerivation;
    if (t2 != null) {
      var a2 = t2.runId_;
      a2 === r2.lastAccessedBy_ || (r2.lastAccessedBy_ = t2.runId_, a2 = t2.unboundDepsCount_ | 0, t2.newObserving_[a2] = r2, t2.unboundDepsCount_ = a2 + 1 | 0, !r2.isBeingObserved && e.trackingContext && (r2.isBeingObserved = true, r2.onBO()));
      return !!r2.isBeingObserved;
    } else {
      t2 = r2.observers_, !t2.size && e.inBatch && Pt(r2);
    }
    return false;
  };
  var o = () => {
    var r2 = --e.inBatch;
    if (0 == r2) {
      zt();
      for (var a2, n2 = e.pendingUnobservations, t2 = 0; t2 < n2.length; t2++) r2 = n2[t2], r2.isPendingUnobservation = false, a2 = r2.observers_, a2.size || (!r2.isBeingObserved || (r2.isBeingObserved = false, r2.onBUO()), C(r2) && r2.suspend_());
      e.pendingUnobservations = [];
    }
  };
  var Pt = (r2) => {
    if (!r2.isPendingUnobservation) r2.isPendingUnobservation = true, e.pendingUnobservations.push(r2);
  };
  var x = (e2, r2) => {
    let t2 = [];
    t2.push(r2), Y(e2, t2);
  };
  var Y = (e2, r2) => {
    r2 = r2.length > 0 ? " " + r2.map(String).join(",") : "", je(new Error("[MobX] minified error nr: " + e2 + r2 + ". See mobx.js.org/errors"));
  };
  var A = (e2, r2) => n.assign(e2, r2);
  var zr = (e2, r2) => le(e2, r2, 1, void 0, void 0);
  var Nr = (e2, r2) => le(e2, r2, -1, void 0, void 0);
  var Sr = (e2, r2) => e2 === r2;
  var Ar = (e2, r2) => true === ce(e2, r2);
  var Le = (e2, r2) => e2.dehancer !== void 0 ? e2.dehancer(r2) : r2;
  var qt = (r2) => {
    we != (r2.actionId_ | 0) && u(30), we = r2.parentActionId_ | 0, r2.error_ === void 0 || (e.suppressReactionErrors = true), o(), !r2.runAsAction_ || j(r2.prevDerivation_), e.suppressReactionErrors = false;
  };
  var Tt = (r2, t2) => {
    var a2 = e.trackingDerivation;
    t2 = !t2 || a2 == null, i();
    var o2 = !!e.allowStateChanges;
    t2 && T();
    var s2 = !!e.allowStateReads, n2 = He;
    He++;
    var l2 = we;
    we = n2, r2 = { runAsAction_: t2, prevDerivation_: a2, prevAllowStateChanges_: o2, prevAllowStateReads_: s2, notifySpy_: false, startTime_: 0, actionId_: n2, parentActionId_: l2 };
    return r2;
  };
  var De = () => {
    let e2 = { version: 7, UNCHANGED: {} }, r2 = null;
    e2.trackingDerivation = r2, e2.trackingContext = r2, e2.runId = 0, e2.mobxGuid = 0, e2.inBatch = 0, e2.pendingUnobservations = [], e2.pendingReactions = [], e2.isRunningReactions = false, e2.allowStateChanges = false, e2.allowStateReads = true, e2.enforceActions = true, e2.spyListeners = [], e2.globalReactionErrorHandlers = [], e2.computedRequiresReaction = false, e2.reactionRequiresObservable = false, e2.observableRequiresReaction = false, e2.disableErrorBoundaries = false, e2.suppressReactionErrors = false, e2.safeDescriptors = true;
    return e2;
  };
  var Dr = (r2) => {
    e.allowStateReads = r2;
  };
  var Vr = (r2) => {
    let t2 = !!e.allowStateReads;
    e.allowStateReads = r2;
    return t2;
  };
  var Ee = (e2) => {
    e2[Symbol.iterator] = sr;
    if (!at) {
      at = true;
      var r2 = globalThis.Iterator;
      Ie = r2 ? r2.prototype : {};
    }
    r2 = Ie;
    return A(n.create(r2), e2);
  };
  var Yt = (e2) => e2.scheduler ? e2.scheduler : e2.delay ? function(r2) {
    return setTimeout(r2, e2.delay);
  } : function(e3) {
    return e3();
  };
  var X = (e2, r2) => {
    e2 = "isMobX" + e2, r2.prototype[e2] = true;
    return function(r3) {
      return F(r3) && true === r3[e2];
    };
  };
  var Dt = (e2) => {
    var r2 = false;
    return function() {
      if (!r2) return r2 = true, e2.apply(this, arguments);
    };
  };
  var ee = (e2) => {
    var r2 = T(), t2 = true;
    i();
    try {
      return e2();
    } finally {
      o(), j(r2);
    }
  };
  var Ut = (e2, r2, t2, a2, n2) => {
    var i2 = Tt(e2, r2, a2, n2);
    try {
      return t2.apply(a2, n2);
    } catch (e3) {
      i2.error_ = e3;
      throw e3;
    } finally {
      qt(i2);
    }
  };
  var Qt = (e2, r2, t2, a2) => {
    var n2 = r2.value;
    ue(n2) || (n2 = $(n2)), t2 && (n2 = n2.bind(w(e2)), n2.isMobXFlow = true), a2 ? (r2 = !!e2.isPlainObject_, e2 = false) : (r2 = true, e2 = true);
    return { value: n2, configurable: r2, enumerable: false, writable: e2 };
  };
  var $t = (e2, r2, t2, a2, n2) => {
    var o2 = a2.value;
    if (r2.options_) {
      var i2 = r2.options_;
      a2 = !!i2.bound;
    } else {
      a2 = false;
    }
    a2 && (o2 = o2.bind(w(e2)));
    i2 = k(t2), r2.options_ ? (a2 = r2.options_, t2 = !!a2.name) : t2 = false, t2 && (t2 = r2.options_, i2 = t2.name + ""), r2.options_ ? (a2 = r2.options_, t2 = !!a2.autoAction) : t2 = false;
    var s2, l2 = t2;
    s2 = void 0, t2 = !!((a2 = r2.options_) && a2.bound), t2 && (s2 = w(e2)), n2 ? (r2 = !!e2.isPlainObject_, e2 = false) : (r2 = true, e2 = true);
    return { value: q(i2, o2, l2, s2), configurable: r2, enumerable: false, writable: e2 };
  };
  var q = (e2, r2, t2, a2) => {
    var n2 = (0, function() {
      var n3 = a2 == null ? this : a2;
      return Ut(e2, t2, r2, n3, arguments);
    });
    n2.isMobxAction = true, n2.toString = function() {
      return r2.toString();
    }, hr && (ht.value = e2, g(n2, "name", ht));
    return n2;
  };
  var Jt = (e2) => {
    "function" == typeof Array.prototype[e2] && (d[e2] = function() {
      var a2 = this;
      let r2 = a2[t];
      _(r2.atom_);
      let n2 = r2.dehanceValues_(r2.values_), i2 = arguments[0];
      arguments[0] = function(e3, r3, t2) {
        return i2(e3, r3, t2, a2);
      };
      return n2[e2].apply(n2, arguments);
    });
  };
  var N = (e2) => {
    "function" == typeof Array.prototype[e2] && (d[e2] = function(r2, a2) {
      var i2 = this, n2 = i2[t];
      _(n2.atom_);
      var o2, s2 = n2.dehanceValues_(n2.values_);
      o2 = a2;
      return s2[e2](function(e3, t2) {
        return r2.call(o2, e3, t2, i2);
      });
    });
  };
  var S = (e2) => {
    if ("function" == typeof Array.prototype[e2]) d[e2] = function() {
      let r2 = this[t];
      _(r2.atom_);
      let a2 = r2.dehanceValues_(r2.values_);
      return a2[e2].apply(a2, arguments);
    };
  };
  var te = (e2) => {
    v.prototype[e2] = function(r2) {
      var t2 = this.atom_;
      _(t2);
      return ("intersection" == e2 || "union" == e2 || "symmetricDifference" == e2 || "isDisjointFrom" == e2) && se(r2) && !c(r2) && "function" == typeof r2[e2] ? r2[e2](this) : new Set(this)[e2](r2);
    };
  };
  var Z = (e2) => "function" == typeof e2 && true === e2.isMobxAction;
  var rr = (e2, r2) => {
    var t2, n2 = r2[1], a2 = n2;
    r2.length > 2 && "function" == typeof r2[2] ? (t2 = W(r2[0], r2[1]), a2 = r2[2]) : t2 = W(r2[0]), t2[e2] ? (r2 = t2[e2], r2.add(a2)) : (r2 = t2, r2[e2] = /* @__PURE__ */ new Set(), r2 = t2[e2], r2.add(a2));
    return function() {
      var r3 = t2[e2];
      r3 && (r3.delete(a2), 0 == r3.size && delete t2[e2]);
    };
  };
  var Zt = (e2, r2, a2) => {
    a2 = a2 || {};
    var n2, i2;
    if ("number" == typeof a2.timeout) {
      var o2 = new Error("WHEN_TIMEOUT"), s2 = a2.timeout;
      i2 = setTimeout(function() {
        var e3 = n2[t];
        if (!e3.isDisposed) n2(), a2.onError ? a2.onError(o2) : je(o2);
      }, s2);
    }
    a2.name || (a2.name = "When");
    var l2 = q("When-effect", r2, false, void 0);
    n2 = Je(function(r3) {
      ft(false, e2) && (r3.dispose(), !i2 || clearTimeout(i2), l2());
    }, a2);
    return n2;
  };
  var Ft = (e2) => {
    var r2 = yt[e2];
    if (r2) return r2;
    r2 = {}, r2.get = function() {
      let r3 = this[t];
      return r3.getObservablePropValue_(e2);
    }, r2.set = function(r3) {
      let a2 = this[t];
      return a2.setObservablePropValue_(e2, r3);
    }, yt[e2] = r2;
    return r2;
  };
  var Xt = (e2, r2, t2, a2) => {
    var n2 = e2.target_;
    if (U.call(n2, r2)) {
      n2 = e2.values_;
      if (n2.has(r2)) return e2.setObservablePropValue_(r2, t2);
      if (a2) return a2 = e2.target_, true === Reflect.set(a2, r2, t2);
      e2.target_[r2] = t2;
      return true;
    }
    return e2.extend_(r2, { value: t2, enumerable: true, writable: true, configurable: true }, e2.defaultAnnotation_, a2);
  };
  var er = (e2, r2, t2) => {
    true === t2 && (t2 = e2.defaultAnnotation_);
    if (false !== t2) {
      if (true !== r2 in e2.target_) {
        var i2 = t2.annotationType_, o2 = e2.name_ + "." + k(r2), a2 = [];
        a2.push(i2), a2.push(o2), Y(1, a2);
      }
      for (a2 = e2.target_; ; ) {
        i2 = a2 && a2 !== n.prototype;
        if (!i2) break;
        if (i2 = n.getOwnPropertyDescriptor(a2, r2)) {
          i2 = t2.make_(e2, r2, i2, a2);
          if (0 === i2) return;
          if (1 === i2) break;
        }
        a2 = n.getPrototypeOf(a2);
      }
    }
  };
  var rt = (e2, r2) => ({ annotationType_: e2, options_: r2, make_: bt, extend_: yr });
  var Me = (e2, r2) => ({ annotationType_: e2, options_: r2, make_: bt, extend_: gr });
  var ye = (e2, r2) => ({ annotationType_: e2, options_: r2, make_: br, extend_: mr });
  var Ne = (e2) => {
    var r2 = e2.deep;
    if (true === r2) return Q;
    r2 = e2.deep;
    if (false === r2) return pe;
    if (e2.defaultDecorator) {
      var t2 = e2.defaultDecorator;
      r2 = !!t2.options_;
    } else {
      r2 = false;
    }
    return r2 && e2.defaultDecorator.options_.enhancer_ ? (r2 = e2.defaultDecorator, t2 = r2.options_, t2.enhancer_) : Q;
  };
  var nt = (e2, r2, a2, n2) => {
    var i2 = ie(e2)[t];
    i2.lazyObservableKeys_ || (i2.lazyObservableKeys_ = /* @__PURE__ */ new Map()), i2.lazyObservableKeys_.set(a2, function() {
      var t2, i3 = Q, e3 = !!((t2 = r2.options_) && t2.enhancer_);
      e3 && (e3 = r2.options_, i3 = e3.enhancer_), w = ba + k(a2);
      return new s(n2, i3, w, false);
    });
    return i2;
  };
  var tr = (e2, r2, t2) => {
    if (C(e2)) {
      var a2, n2 = true;
      return Je(function() {
        var i2 = e2.get;
        i2 = e2.get();
        if (!n2 || t2) {
          var o2 = T(), s2 = e2.name_;
          r2({ observableKind: "computed", debugObjectName: s2, type: "update", object: e2, newValue: i2, oldValue: a2 }), j(o2);
        }
        n2 = false;
        a2 = i2;
      });
    }
    t2 && (t2 = e2.name_, r2({ observableKind: "value", debugObjectName: t2, object: e2, type: "update", newValue: e2.value_, oldValue: void 0 }));
    return ge(e2, r2);
  };
  var Ke = (e2, r2, t2, a2) => {
    var i2 = e2.values_, n2 = i2.length;
    r2 > n2 ? r2 = n2 : r2 < 0 && (r2 = n2 + r2 | 0, r2 < 0 && (r2 = 0)), t2 < 0 && (t2 = 0), n2 = n2 - r2 | 0, t2 > n2 || (n2 = t2), a2 == null ? a2 = [] : Array.isArray(a2) || (t2 = Array.prototype, a2 = t2.slice.call(a2));
    if (E(e2)) {
      t2 = e2.proxy_, t2 = V(e2, { object: t2, type: "splice", index: r2, removedCount: n2, added: a2 });
      if (!t2) return it;
      n2 = t2.removedCount | 0, a2 = t2.added;
    }
    if (0 != a2.length) {
      t2 = [];
      var o2 = a2.length;
      for (i2 = 0; i2 < o2; i2++) t2.push(e2.enhancer_(a2[i2], void 0));
    } else {
      t2 = a2;
    }
    i2 = ((e3, r3, t3, a3) => {
      var n3 = e3.values_, o3 = a3.length, s2 = +o3, i3 = s2 | 0;
      if (0 == t3 && r3 == n3.length) {
        for (e3 = 0; e3 < i3; e3++) r3 = a3[e3], n3.push(r3);
        return it;
      }
      if (i3 < 1e4) {
        for (e3 = [], e3.push(r3), e3.push(t3), r3 = 0; r3 < a3.length; r3++) t3 = a3[r3], e3.push(t3);
        return n3.splice.apply(n3, e3);
      }
      e3 = r3 + t3 | 0;
      var l2 = J.call(n3, r3, e3);
      for (i3 = J.call(n3, e3, n3.length), e3 = n3.length, n3.length = e3 + a3.length - t3 | 0, e3 = 0; e3 < a3.length; e3++) n3[r3 + e3 | 0] = a3[e3];
      for (e3 = 0; e3 < i3.length; e3++) n3[r3 + a3.length + e3 | 0] = i3[e3];
      return l2;
    })(e2, r2, n2, t2);
    (0 != n2 || 0 != t2.length) && ((e3, r3, t3, a3) => {
      var i3, o3, s2, l2 = P(e3), n3 = null;
      l2 && (n3 = e3.proxy_, i3 = e3.atom_, o3 = i3.name_, s2 = a3.length, n3 = { observableKind: "array", object: n3, debugObjectName: o3, type: "splice", index: r3, removed: a3, added: t3, removedCount: s2, addedCount: t3.length }), R(e3.atom_), l2 && B(e3, n3);
    })(e2, r2, t2, i2);
    return e2.dehanceValues_(i2);
  };
  var ve = (e2, r2) => {
    var i2;
    if (e2 == null || "object" != typeof e2 || jt(Date, e2) || !Be(e2)) return e2;
    if (fe(e2) || C(e2)) return ve(e2.get(), r2);
    if (r2.has(e2)) return r2.get(e2);
    if (m(e2)) {
      var a2 = [];
      r2.set(e2, a2);
      for (var t2 = 0; t2 < e2.length; t2++) a2[t2] = ve(e2[t2], r2);
      return a2;
    }
    if (c(e2)) {
      for (t2 = /* @__PURE__ */ new Set(), r2.set(e2, t2), a2 = b(e2.values()), e2 = 0; e2 < a2.length; e2++) t2.add(ve(a2[e2], r2));
      return t2;
    }
    if (l(e2)) {
      for (a2 = /* @__PURE__ */ new Map(), r2.set(e2, a2), t2 = b(e2.entries()), e2 = 0; e2 < t2.length; e2++) o = t2[e2][0], i2 = t2[e2], a2.set(o, ve(i2[1], r2));
      return a2;
    }
    o = {};
    r2.set(e2, o), a2 = Rt(e2), t2 = 0;
    for (; t2 < a2.length; t2++) i2 = n.prototype, true === i2.propertyIsEnumerable.call(e2, a2[t2]) && (i2 = a2[t2], o[i2] = ve(e2[a2[t2]], r2));
    return o;
  };
  var K = (e2, r2) => A(function(t2, a2) {
    if (a2 && "string" == typeof a2.kind) return r2(e2, t2, a2);
  }, e2);
  var k = (e2) => "string" == typeof e2 ? e2 : "symbol" == typeof e2 ? e2.toString() : new String(e2) + "";
  var Qe = (e2) => {
    e2 = typeof e2;
    return "string" == e2 || "symbol" == e2 || "number" == e2;
  };
  var F = (e2) => e2 != null && "object" == typeof e2;
  var Vt = (e2) => null === e2 ? null : "object" == typeof e2 ? "" + e2 : e2;
  var Be = (e2) => !e2 ? false : f(e2) || e2[t] || Ye(e2) || Ve(e2) || C(e2);
  var Gt = (e2, r2) => {
    if (!e2) return false;
    if ("function" == typeof e2.isPrototypeOf) return true === e2.isPrototypeOf(r2);
    true === "constructor" in r2 ? (e2 = r2.constructor == e2, e2 = true === e2) : e2 = false;
    return e2;
  };
  var I = (e2) => {
    if (!F(e2)) return false;
    var r2 = n.getPrototypeOf(e2);
    if (r2 == null) return true;
    e2 = void 0, !U.call(r2, "constructor") || (e2 = r2.constructor), e2 = "function" == typeof e2 && e2.toString() === or;
    return e2;
  };
  var Et = (e2) => {
    if (e2 == null) return false;
    var r2 = e2.constructor;
    return !r2 ? false : "GeneratorFunction" == r2.name + "" ? true : "GeneratorFunction" == r2.displayName + "" ? true : false;
  };
  var le = (e2, r2, t2, a2, i2) => {
    if (e2 === r2) return 0 !== e2 ? e2 = true : (e2 = 1 / +e2, e2 = e2 === 1 / +r2), e2;
    if (e2 == null || r2 == null) return false;
    if (e2 !== e2) return r2 !== r2;
    var o2 = typeof e2;
    if ("function" != o2 && "object" != o2 && "object" != typeof r2) return false;
    var s2 = n.prototype;
    o2 = s2.toString.call(e2) + "";
    if (o2 != n.prototype.toString.call(r2) + "") return false;
    if ("[object RegExp]" == o2 || "[object String]" == o2) return "" + e2 == "" + r2;
    if ("[object Number]" == o2) {
      e2 = Number(e2), r2 = Number(r2);
      return true !== ce(e2, e2) ? true !== ce(r2, r2) : 0 === e2 ? (e2 = 1 / +e2, true === ce(e2, 1 / +r2)) : e2 === r2;
    }
    if ("[object Date]" == o2 || "[object Boolean]" == o2) return e2 = Number(e2), e2 === Number(r2);
    if ("[object Symbol]" == o2) return e2 = Symbol.valueOf.call(e2), e2 === Symbol.valueOf.call(r2);
    ("[object Map]" == o2 || "[object Set]" == o2) && t2 >= 0 && (t2 = t2 + 1 | 0), s2 = Wt(e2), e2 = Wt(r2);
    var l2 = "[object Array]" == o2;
    if (!l2) {
      if ("object" != typeof s2 || "object" != typeof e2) return false;
      r2 = s2.constructor, o2 = e2.constructor;
      if (r2 !== o2 && !("function" == typeof r2 && Gt(r2, r2) && "function" == typeof o2 && Gt(o2, o2)) && true === "constructor" in s2 && true === "constructor" in e2) return false;
    }
    if (0 == t2) return false;
    else {
      t2 < 0 && (t2 = -1);
    }
    a2 === void 0 && (a2 = [], i2 = []);
    for (r2 = a2.length; r2--; ) if (a2[r2] === s2) return i2[r2] === e2;
    a2.push(s2), i2.push(e2);
    if (l2) {
      r2 = s2.length;
      if (r2 != e2.length) return false;
      while (r2 > 0) {
        r2--;
        if (!le(s2[r2], e2[r2], t2 - 1 | 0, a2, i2)) return false;
      }
    } else {
      l2 = n.keys(s2);
      var u2 = l2.length;
      if (n.keys(e2).length != u2) return false;
      for (o2 = 0; o2 < u2; o2++) {
        r2 = l2[o2];
        if (U.call(e2, r2)) {
          var b2 = s2[r2];
          r2 = e2[r2], r2 = le(b2, r2, t2 - 1 | 0, a2, i2);
        } else {
          r2 = false;
        }
        if (!r2) return false;
      }
    }
    a2.pop();
    i2.pop();
    return true;
  };
  var oe = (e2) => e2 == null ? false : "[object Map]" == n.prototype.toString.call(e2) + "";
  var se = (e2) => e2 == null ? false : "[object Set]" == n.prototype.toString.call(e2) + "";
  var ue = (e2) => e2 == null ? false : true === e2.isMobXFlow;
  var jt = (e2, r2) => r2 == null ? false : true === ir.call(e2.prototype, r2);
  var f = (e2) => !F(e2) ? false : !!vt(e2[t]);
  var m = (e2) => !F(e2) ? false : !!lt(e2[t]);
  var Wt = (e2) => m(e2) ? e2.slice() : oe(e2) || l(e2) ? b(e2.entries()) : se(e2) || c(e2) ? b(e2.entries()) : e2;
  var w = (e2) => e2.proxy_ ? e2.proxy_ : e2.target_;
  var n = Object;
  var Sa = n.prototype;
  var U = Sa.hasOwnProperty;
  var ce = n.is;
  var Aa = Array.prototype;
  var J = Aa.slice;
  var ka = n.prototype;
  var ir = ka.isPrototypeOf;
  var or = n.toString();
  var Ie;
  var at = false;
  var sr = (0, function() {
    return this;
  });
  var re = function() {
  };
  var wa = [];
  n.freeze(wa);
  var it = wa;
  wa = {}, n.freeze(wa);
  var ot = wa;
  var t = Symbol("mobx administration");
  var Te = function(e2, r2) {
    return true === ce(e2, r2);
  };
  var fe;
  var st;
  var ut;
  var lt;
  var vt;
  var be = true;
  var ct = false;
  var D = [];
  D.push("mobxGuid"), D.push("spyListeners"), D.push("enforceActions"), D.push("computedRequiresReaction"), D.push("reactionRequiresObservable"), D.push("observableRequiresReaction"), D.push("allowStateReads"), D.push("disableErrorBoundaries"), D.push("runId"), D.push("UNCHANGED");
  var e = (() => {
    var e2;
    globalThis.__mobxInstanceCount && (globalThis.__mobxInstanceCount | 0) > 0 && !globalThis.__mobxGlobals && (be = false), e2 = globalThis.__mobxGlobals, e2 && 7 != (e2.version | 0) && (be = false);
    if (!be) return setTimeout(function() {
      ct || u(35);
    }, 1), De();
    else if (e2) {
      var r2 = (globalThis.__mobxInstanceCount | 0) + 1 | 0;
      globalThis.__mobxInstanceCount = r2, e2.UNCHANGED || (e2.UNCHANGED = {});
      return e2;
    }
    globalThis.__mobxInstanceCount = 1;
    e2 = De(), globalThis.__mobxGlobals = e2;
    return e2;
  })();
  var ur = function() {
    var r2 = e.pendingReactions;
    (0 != r2.length || 0 != (e.inBatch | 0) || e.isRunningReactions) && u(36), ct = true;
    if (be) r2 = globalThis, 0 == --r2.__mobxInstanceCount && (r2.__mobxGlobals = void 0), e = De();
  };
  var xa = function() {
    return e;
  };
  var Ca = function() {
    for (var r2, a2 = De(), i2 = n.keys(a2), o2 = i2.length, t2 = 0; t2 < o2; t2++) r2 = i2[t2], +D.indexOf(r2) == -1 && (e[r2] = a2[r2]);
    e.allowStateChanges = !e.enforceActions;
  };
  var Ra = function(e2) {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
  };
  var lr = function(e2) {
    e2.dependenciesState_ || e2.onBecomeStale_(), e2.dependenciesState_ = 2;
  };
  var vr = function(e2) {
    e2.dependenciesState_ || (e2.dependenciesState_ = 1, e2.onBecomeStale_());
  };
  var me = void 0;
  var cr = function(e2) {
    var r2 = e2.dependenciesState_;
    1 === r2 ? e2.dependenciesState_ = 2 : r2 || (me.lowestObserverState_ = 0);
  };
  var qe = (e2) => e2();
  var fr = () => {
    e.isRunningReactions = true;
    var r2, n2, a2, i2, t2 = e.pendingReactions, o2 = 0;
    while (t2.length > 0) {
      o2++, 100 == o2 && (r2 = "[mobx] cycle in reaction: " + t2[0], console.error(r2), t2.splice(0, t2.length)), a2 = t2.splice(0, t2.length), i2 = a2.length, r2 = 0;
      for (; r2 < i2; r2++) n2 = a2[r2], n2.runReaction_();
    }
    e.isRunningReactions = false;
  };
  var ja = function(e2) {
    var r2 = T();
    try {
      return e2();
    } finally {
      j(r2);
    }
  };
  var ft = function(r2, t2) {
    var a2 = !!r2;
    r2 = !!e.allowStateChanges, e.allowStateChanges = a2;
    try {
      return t2();
    } finally {
      e.allowStateChanges = r2;
    }
  };
  var he = class {
    constructor(e2) {
      this.cause = e2;
    }
  };
  g(he, "name", { value: "CaughtException", configurable: true });
  he.prototype.isMobXCaughtException = true;
  var O = class {
    constructor(e2 = "Atom") {
      e2 = e2 + "", this.name_ = e2, this.observers_ = /* @__PURE__ */ new Set(), this.lastAccessedBy_ = 0, this.lowestObserverState_ = -1, this.flags_ = 0;
    }
    onBO() {
      Kt(this);
    }
    onBUO() {
      Lt(this);
    }
    reportObserved() {
      return _(this);
    }
    reportChanged() {
      R(this);
    }
    toString() {
      return this.name_;
    }
    get isBeingObserved() {
      return 0 != (this.flags_ & 1);
    }
    set isBeingObserved(t2) {
      t2 ? this.flags_ |= 1 : this.flags_ &= ~1;
    }
    get isPendingUnobservation() {
      return 0 != (this.flags_ & 2);
    }
    set isPendingUnobservation(t2) {
      t2 ? this.flags_ |= 2 : this.flags_ &= ~2;
    }
    get diffValue() {
      return 0 != (this.flags_ & 4) ? 1 : 0;
    }
    set diffValue(t2) {
      1 == (t2 | 0) ? this.flags_ |= 4 : this.flags_ &= ~4;
    }
  };
  X("Atom", O);
  var Ue = function(e2, r2 = re, t2 = re) {
    var a2 = e2 !== void 0 ? new O(e2) : new O();
    r2 === re || (a2.onBOL = /* @__PURE__ */ new Set(), e2 = a2.onBOL, e2.add(r2)), t2 === re || (a2.onBUOL = /* @__PURE__ */ new Set(), e2 = a2.onBUOL, e2.add(t2));
    return a2;
  };
  var we = 0;
  var He = 1;
  var ht = { value: "action", configurable: true, writable: false, enumerable: false };
  var Oa = n.getOwnPropertyDescriptor(function() {
  }, "name");
  wa = Oa != null && Oa.configurable;
  var hr = wa;
  var y = class {
    constructor(e2 = "Reaction", r2, t2, a2) {
      var n2 = e2 + "";
      this.name_ = n2, this.onInvalidate_ = void 0, r2 !== void 0 && (this.onInvalidate_ = r2), t2 && (this.errorHandler_ = t2), a2 !== void 0 && (this.requiresObservable_ = a2), this.observing_ = [], this.newObserving_ = null, this.dependenciesState_ = -1, this.runId_ = 0, this.unboundDepsCount_ = 0, this.flags_ = 0;
    }
    onBecomeStale_() {
      this.schedule_();
    }
    schedule_() {
      if (!this.isScheduled) this.isScheduled = true, e.pendingReactions.push(this), zt();
    }
    runReaction_() {
      if (!this.isDisposed) {
        i(), this.isScheduled = false;
        var r2 = e.trackingContext;
        e.trackingContext = this;
        if (et(this)) {
          this.isTrackPending = true;
          try {
            this.onInvalidate_();
            if (false) {
            }
          } catch (e2) {
            this.reportExceptionInDerivation_(e2);
          }
        }
        e.trackingContext = r2;
        o();
      }
    }
    track(r2) {
      if (!this.isDisposed) {
        i(), this.isRunning = true;
        var t2 = e.trackingContext;
        e.trackingContext = this, r2 = It(this, r2, void 0), e.trackingContext = t2, this.isRunning = false, this.isTrackPending = false, !this.isDisposed || tt(this), Pe(r2) && this.reportExceptionInDerivation_(r2.cause), o();
      }
    }
    reportExceptionInDerivation_(r2) {
      if (this.errorHandler_) {
        this.errorHandler_(r2, this);
        return;
      }
      !e.disableErrorBoundaries || je(r2);
      var t2 = "[mobx] uncaught error in '" + this + "'";
      e.suppressReactionErrors || console.error(t2, r2);
      var a2 = e.globalReactionErrorHandlers, n2 = a2.length;
      for (t2 = 0; t2 < n2; t2++) a2[t2](r2, this);
    }
    dispose() {
      this.isDisposed || (this.isDisposed = true, this.isRunning || (i(), tt(this), o()));
    }
    getDisposer_(e2) {
      var a2 = this, r2 = () => {
        var t2 = a2.dispose;
        a2.dispose(), e2 != null && "function" == typeof e2.removeEventListener && e2.removeEventListener("abort", r2);
      };
      e2 != null && "function" == typeof e2.addEventListener && e2.addEventListener("abort", r2), r2[t] = a2, true === "dispose" in Symbol && "symbol" == typeof Symbol.dispose && (r2[Symbol.dispose] = r2);
      return r2;
    }
    toString() {
      return "Reaction[" + this.name_ + "]";
    }
    get isDisposed() {
      return 0 != (this.flags_ & 1);
    }
    set isDisposed(t2) {
      t2 ? this.flags_ |= 1 : this.flags_ &= ~1;
    }
    get isScheduled() {
      return 0 != (this.flags_ & 2);
    }
    set isScheduled(t2) {
      t2 ? this.flags_ |= 2 : this.flags_ &= ~2;
    }
    get isTrackPending() {
      return 0 != (this.flags_ & 4);
    }
    set isTrackPending(t2) {
      t2 ? this.flags_ |= 4 : this.flags_ &= ~4;
    }
    get isRunning() {
      return 0 != (this.flags_ & 8);
    }
    set isRunning(t2) {
      t2 ? this.flags_ |= 8 : this.flags_ &= ~8;
    }
    get diffValue() {
      return 0 != (this.flags_ & 16) ? 1 : 0;
    }
    set diffValue(t2) {
      1 == (t2 | 0) ? this.flags_ |= 16 : this.flags_ &= ~16;
    }
  };
  X("Reaction", y);
  Aa = function(r2) {
    e.globalReactionErrorHandlers.push(r2);
    return function() {
      var a2 = e.globalReactionErrorHandlers, t2 = +a2.indexOf(r2);
      t2 >= 0 && e.globalReactionErrorHandlers.splice(t2, 1);
    };
  };
  var h = class {
    constructor(e2) {
      e2.get || u(31), this.derivation = e2.get;
      var r2 = e2.name ? e2.name + "" : "ComputedValue";
      this.name_ = r2, e2.set ? this.setter_ = q("ComputedValue-setter", e2.set, false, void 0) : this.setter_ = void 0, this.equals_ = Te, !e2.equals || (this.equals_ = e2.equals), this.scope_ = e2.context, this.requiresReaction_ = e2.requiresReaction, this.keepAlive_ = !!e2.keepAlive, this.dependenciesState_ = -1, this.observing_ = [], r2 = null, this.newObserving_ = r2, this.observers_ = /* @__PURE__ */ new Set(), this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = 0, this.unboundDepsCount_ = 0, this.value_ = new he(r2), this.flags_ = 0;
    }
    onBecomeStale_() {
      ((e2) => {
        if (!e2.lowestObserverState_) e2.lowestObserverState_ = 1, e2.observers_.forEach(vr);
      })(this);
    }
    onBO() {
      Kt(this);
    }
    onBUO() {
      Lt(this);
    }
    computeValue_(r2) {
      this.isComputing = true;
      var t2, a2 = false;
      if (r2) r2 = this.derivation, t2 = It(this, r2, this.scope_);
      else {
        r2 = e.disableErrorBoundaries;
        if (true === r2) t2 = this.derivation.call(this.scope_);
        else try {
          t2 = this.derivation.call(this.scope_);
        } catch (e2) {
          t2 = new he(e2);
        }
      }
      this.isComputing = false;
      return t2;
    }
    trackAndCompute() {
      var t2 = this.value_, e2 = (this.dependenciesState_ | 0) == -1, r2 = this.computeValue_(true);
      e2 = e2 || Pe(t2) || Pe(r2) || true !== this.equals_(t2, r2), e2 && (this.value_ = r2);
      return e2;
    }
    get() {
      if (this.isComputing) {
        var n2 = this.name_, a2 = this.derivation, r2 = [];
        r2.push(n2), r2.push(a2), Y(32, r2);
      }
      !e.inBatch ? (n2 = this.observers_, r2 = !n2.size) : r2 = false;
      if (r2 && !this.keepAlive_) et(this) && (i(), this.value_ = this.computeValue_(false), o());
      else _(this), et(this) && (r2 = e.trackingContext, this.keepAlive_ && !r2 && (e.trackingContext = this), !this.trackAndCompute() || ((e2) => {
        var r3 = e2.lowestObserverState_;
        if (2 !== r3) e2.lowestObserverState_ = 2, r3 = me, me = e2, e2.observers_.forEach(cr), me = r3;
      })(this), e.trackingContext = r2);
      r2 = this.value_, Pe(r2) && je(r2.cause);
      return r2;
    }
    get isComputing() {
      return 0 != (this.flags_ & 1);
    }
    set isComputing(t2) {
      t2 ? this.flags_ |= 1 : this.flags_ &= ~1;
    }
    get isRunningSetter() {
      return 0 != (this.flags_ & 2);
    }
    set isRunningSetter(t2) {
      t2 ? this.flags_ |= 2 : this.flags_ &= ~2;
    }
    get isBeingObserved() {
      return 0 != (this.flags_ & 4);
    }
    set isBeingObserved(t2) {
      t2 ? this.flags_ |= 4 : this.flags_ &= ~4;
    }
    get isPendingUnobservation() {
      return 0 != (this.flags_ & 8);
    }
    set isPendingUnobservation(t2) {
      t2 ? this.flags_ |= 8 : this.flags_ &= ~8;
    }
    get diffValue() {
      return 0 != (this.flags_ & 16) ? 1 : 0;
    }
    set diffValue(t2) {
      1 == (t2 | 0) ? this.flags_ |= 16 : this.flags_ &= ~16;
    }
    suspend_() {
      this.keepAlive_ || (tt(this), this.value_ = void 0);
    }
    warnAboutUntrackedRead_() {
    }
    toString() {
      let e2 = this.name_ + "[", r2 = this.derivation;
      return e2 + r2.toString() + "]";
    }
    valueOf() {
      return Vt(this.get());
    }
    [Symbol.toPrimitive]() {
      return this.valueOf();
    }
    set(t2) {
      if (this.setter_) {
        !this.isRunningSetter || x(33, this.name_), this.isRunningSetter = true;
        try {
          this.setter_.call(this.scope_, t2);
        } finally {
          this.isRunningSetter = false;
        }
      } else x(34, this.name_);
    }
  };
  X("ComputedValue", h), ka = function(e2, r2) {
    i();
    try {
      return e2.apply(r2);
    } finally {
      o();
    }
  };
  var Ea = function(e2) {
    return Be(e2);
  };
  var Va = function(e2, r2) {
    if (!f(e2)) return false;
    var a2 = e2[t], n2 = a2.values_;
    if (n2.has(r2)) return true;
    a2.lazyComputedKeys_ ? (e2 = a2.lazyComputedKeys_, e2 = !!e2.has(r2)) : e2 = false;
    if (e2) return true;
    a2.lazyObservableKeys_ ? (e2 = a2.lazyObservableKeys_, e2 = !!e2.has(r2)) : e2 = false;
    return e2 ? true : false;
  };
  var r = void 0;
  var Oe = void 0;
  var ne = void 0;
  var ae;
  var Se = void 0;
  var Ge = void 0;
  var $ = void 0;
  var We = void 0;
  var pt;
  var Ae;
  var pe = function(e2) {
    return e2;
  };
  var Q = function(e2, t2, a2) {
    return Be(e2) ? e2 : Array.isArray(e2) ? a2 ? r.array.call(r, e2, { name: a2 }) : r.array.call(r, e2) : I(e2) ? a2 ? r.object.call(r, e2, void 0, { name: a2 }) : r.object.call(r, e2) : oe(e2) ? a2 ? r.map.call(r, e2, { name: a2 }) : r.map.call(r, e2) : se(e2) ? a2 ? r.set.call(r, e2, { name: a2 }) : r.set.call(r, e2) : "function" == typeof e2 && !Z(e2) && !ue(e2) ? Et(e2) ? $(e2) : Se(a2, e2) : e2;
  };
  Sa = function(e2, t2, a2) {
    return e2 == null ? e2 : f(e2) || m(e2) || l(e2) || c(e2) ? e2 : Array.isArray(e2) ? r.array.call(r, e2, { name: a2, deep: false }) : I(e2) ? r.object.call(r, e2, void 0, { name: a2, deep: false }) : oe(e2) ? r.map.call(r, e2, { name: a2, deep: false }) : se(e2) ? r.set.call(r, e2, { name: a2, deep: false }) : e2;
  };
  var Da = function(e2, r2) {
    return le(e2, r2, -1, void 0, void 0) ? r2 : e2;
  };
  var dt = { deep: true, name: void 0, defaultDecorator: void 0 };
  n.freeze(dt);
  var s = class extends O {
    constructor(e2, r2, t2 = "ObservableValue", a2, n2) {
      var i2 = t2 + "";
      a2;
      var o2 = Te;
      n2 && (o2 = n2), super(i2), this.enhancer_ = r2, this.name_ = i2, this.equals_ = o2, this.hasUnreportedChange_ = false, this.value_ = r2(e2, void 0, i2);
    }
    prepareNewValue_(r2) {
      if (E(this)) {
        var t2 = V(this, { object: this, type: "update", newValue: r2 });
        if (!t2) return e.UNCHANGED;
        r2 = t2.newValue;
      }
      r2 = this.enhancer_(r2, this.value_, this.name_);
      return true === this.equals_(this.value_, r2) ? e.UNCHANGED : r2;
    }
    setNewValue_(e2) {
      var r2 = this.value_;
      this.value_ = e2, R(this), P(this) && B(this, { type: "update", object: this, newValue: e2, oldValue: r2 });
    }
    set(r2) {
      r2 = this.prepareNewValue_(r2), r2 === e.UNCHANGED || this.setNewValue_(r2);
    }
    get() {
      _(this);
      return this.dehancer === void 0 ? this.value_ : this.dehancer(this.value_);
    }
    raw() {
      return this.value_;
    }
    toJSON() {
      return this.get();
    }
    toString() {
      let e2 = this.name_ + "[";
      return e2 + this.value_ + "]";
    }
    valueOf() {
      return Vt(this.get());
    }
    [Symbol.toPrimitive]() {
      return this.valueOf();
    }
  };
  fe = X("ObservableValue", s), Oa = { annotationType_: "override", make_: function(e2, r2) {
    return 0;
  }, extend_: function() {
    x(44, this.annotationType_);
    return false;
  } };
  var _t = (0, function(e2, t2, a2, n2) {
    if (a2.get) return ne.make_.call(ne, e2, t2, a2, n2);
    if (a2.set) {
      var s2 = a2.set;
      Z(s2) || (s2 = q(k(t2), s2, false, void 0));
      if (n2 === e2.target_) return e2.defineProperty_(t2, { configurable: true, set: s2 }) == null ? 0 : 2;
      g(n2, t2, { configurable: true, set: s2 });
      return 2;
    }
    if (n2 !== e2.target_ && "function" == typeof a2.value) {
      if (Et(a2.value)) {
        var o2 = $;
        if (this.options_) var l2 = this.options_, i2 = !!l2.autoBind;
        else {
          i2 = false;
        }
        i2 && (o2 = We);
        return o2.make_(e2, t2, a2, n2);
      }
      o2 = Se;
      this.options_ ? (l2 = this.options_, i2 = !!l2.autoBind) : i2 = false, i2 && (o2 = Ge);
      return o2.make_(e2, t2, a2, n2);
    }
    o2 = r;
    this.options_ ? (l2 = this.options_, i2 = l2.deep, i2 = false === i2) : i2 = false, i2 && (o2 = Oe), "function" == typeof a2.value && this.options_ && this.options_.autoBind && (s2 = a2.value.bind(w(e2)), a2.value = s2);
    return o2.make_(e2, t2, a2, n2);
  });
  var gt = (0, function(e2, t2, a2, n2) {
    if (a2.get) return ne.extend_.call(ne, e2, t2, a2, n2);
    if (a2.set) {
      var o2 = e2.defineProperty_;
      return e2.defineProperty_(t2, { configurable: true, set: q(k(t2), a2.set, false, void 0) }, n2);
    }
    var i2;
    "function" == typeof a2.value && this.options_ && this.options_.autoBind && (o2 = a2.value.bind(w(e2)), a2.value = o2);
    var s2 = r;
    this.options_ ? (o2 = this.options_, i2 = o2.deep, i2 = false === i2) : i2 = false, i2 && (s2 = Oe);
    return s2.extend_(e2, t2, a2, n2);
  });
  pt = wa = { annotationType_: "true", options_: void 0, make_: _t, extend_: gt };
  var yt = n.create(null);
  var p = class {
    constructor(e2, r2, t2, a2) {
      this.target_ = e2, r2 ? this.values_ = r2 : this.values_ = /* @__PURE__ */ new Map(), this.name_ = t2 + "", this.defaultAnnotation_ = pt, a2 && (this.defaultAnnotation_ = a2), this.keysAtom_ = new O("ObservableObject.keys"), this.isPlainObject_ = I(this.target_);
    }
    materializeLazyComputed_(e2) {
      if (!!this.lazyComputedKeys_) {
        var r2 = this.lazyComputedKeys_;
        if (r2 = r2.get(e2)) {
          var t2 = this.lazyComputedKeys_;
          t2.delete(e2), t2 = this.lazyComputedKeys_, 0 == t2.size && (this.lazyComputedKeys_ = void 0), r2 = r2(), t2 = this.values_, t2.set(e2, r2);
          return r2;
        }
      }
    }
    materializeLazyObservable_(e2) {
      if (!!this.lazyObservableKeys_) {
        var r2 = this.lazyObservableKeys_;
        if (r2 = r2.get(e2)) {
          var t2 = this.lazyObservableKeys_;
          t2.delete(e2), t2 = this.lazyObservableKeys_, 0 == t2.size && (this.lazyObservableKeys_ = void 0), r2 = r2(), t2 = this.values_, t2.set(e2, r2);
          return r2;
        }
      }
    }
    getObservablePropValue_(e2) {
      var r2 = this.values_;
      r2 = r2.get(e2), r2 || (r2 = this.materializeLazyComputed_(e2), r2 = r2 || this.materializeLazyObservable_(e2));
      return r2.get();
    }
    setObservablePropValue_(r2, t2) {
      var a2 = this.values_;
      a2 = a2.get(r2), a2 = a2 || this.materializeLazyComputed_(r2), a2 = a2 || this.materializeLazyObservable_(r2);
      if (C(a2)) return a2.set(t2), true;
      if (E(this)) {
        var n2 = V(this, { type: "update", object: w(this), name: r2, newValue: t2 });
        if (!n2) return null;
        t2 = n2.newValue;
      }
      t2 = a2.prepareNewValue_(t2);
      if (t2 !== e.UNCHANGED) {
        var i2 = P(this);
        n2 = null;
        if (i2 || false) n2 = this.name_, l = a2.value_, n2 = { type: "update", observableKind: "object", debugObjectName: n2, object: w(this), oldValue: l, name: r2, newValue: t2 };
        a2.setNewValue_(t2), i2 && B(this, n2);
      }
      return true;
    }
    get_(r2) {
      if (e.trackingDerivation) {
        var t2 = this.target_;
        t2 = !U.call(t2, r2);
      } else {
        t2 = false;
      }
      t2 && this.has_(r2);
      return this.target_[r2];
    }
    set_(e2, r2) {
      return Xt(this, e2, r2, false);
    }
    has_(r2) {
      if (!e.trackingDerivation) return true === r2 in this.target_;
      this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
      var t2 = this.pendingKeys_;
      t2 = t2.get(r2);
      if (!t2) t2 = s, t2 = new t2(true === r2 in this.target_, pe, "ObservableObject.key?", false), this.pendingKeys_.set(r2, t2);
      return t2.get();
    }
    extend_(e2, r2, t2, a2) {
      var n2 = t2;
      true === n2 && (n2 = this.defaultAnnotation_);
      if (false === n2) return this.defineProperty_(e2, r2, a2);
      var i2 = n2.extend_(this, e2, r2, a2);
      if (i2) {
      }
      return i2;
    }
    notifyPropertyAddition_(e2, r2) {
      var t2 = P(this);
      (t2 || false) && (r2 = { type: "add", observableKind: "object", debugObjectName: this.name_, object: w(this), name: e2, newValue: r2 }, t2 && B(this, r2)), !this.pendingKeys_ || (r2 = this.pendingKeys_, e2 = r2.get(e2), !e2 || e2.set(true)), R(this.keysAtom_);
    }
    defineProperty_(e2, r2, t2) {
      t2 = !!t2;
      try {
        i();
        var s2 = this.delete_(e2);
        if (!s2) return s2;
        if (E(this)) {
          var a2 = w(this), n2 = V(this, { object: a2, name: e2, type: "add", newValue: r2.value });
          if (!n2) return null;
          a2 = r2.value, a2 === n2.newValue || (a2 = r2 = A({}, r2), r2.value = n2.newValue);
        }
        if (t2 && (t2 = this.target_, true !== Reflect.defineProperty(t2, e2, r2))) return false;
        else {
          g(this.target_, e2, r2);
        }
        this.notifyPropertyAddition_(e2, r2.value);
      } finally {
        o();
      }
      return true;
    }
    defineObservableProperty_(r2, t2, a2, n2) {
      var u2 = t2;
      try {
        i();
        var b2 = this.delete_(r2);
        if (!b2) return b2;
        if (E(this)) {
          var c2 = V(this, { object: w(this), name: r2, type: "add", newValue: u2 });
          if (!c2) return null;
          u2 = c2.newValue;
        }
        var m2 = Ft(r2), d2 = true;
        !e.safeDescriptors || (d2 = !!this.isPlainObject_);
        var l2 = d2, y2 = m2.get, S2 = { configurable: l2, enumerable: true, get: y2, set: m2.set };
        if (n2 && (l2 = this.target_, true !== Reflect.defineProperty(l2, r2, S2))) return false;
        else {
          g(this.target_, r2, S2);
        }
        l2 = new s(u2, a2, ya, false);
        this.values_.set(r2, l2), this.notifyPropertyAddition_(r2, l2.value_);
      } finally {
        o();
      }
      return true;
    }
    defineComputedProperty_(r2, t2, a2) {
      a2 = !!a2;
      try {
        i();
        var n2 = this.delete_(r2);
        if (!n2) return n2;
        if (E(this)) {
          var b2 = V(this, { object: w(this), name: r2, type: "add", newValue: void 0 });
          if (!b2) return null;
        }
        t2.name || (t2.name = ya);
        t2.context = w(this);
        var s2 = Ft(r2), l2 = true;
        !e.safeDescriptors || (l2 = !!this.isPlainObject_);
        var c2 = s2.get, u2 = { configurable: l2, enumerable: false, get: c2, set: s2.set };
        if (a2 && (a2 = this.target_, true !== Reflect.defineProperty(a2, r2, u2))) return false;
        else {
          g(this.target_, r2, u2);
        }
        this.values_.set(r2, new h(t2));
        this.notifyPropertyAddition_(r2, void 0);
      } finally {
        o();
      }
      return true;
    }
    delete_(e2, r2) {
      var a2 = !!r2;
      r2 = this.target_;
      if (!U.call(r2, e2)) return true;
      if (E(this) && !V(this, { object: w(this), name: e2, type: "remove" })) return null;
      try {
        i();
        var l2 = P(this);
        r2 = false;
        var u2, b2 = r2, c2 = this.values_, s2 = c2.get(e2);
        if (!s2 && (l2 || b2)) {
          r2 = this.target_;
          var t2 = n.getOwnPropertyDescriptor(r2, e2);
          t2 && (u2 = t2.value);
        }
        if (a2 && (r2 = this.target_, true !== Reflect.deleteProperty(r2, e2))) return false;
        else {
          r2 = this.target_, true === Reflect.deleteProperty(r2, e2) || ((e3) => {
            throw new TypeError(e3);
          })("Cannot delete property '" + k(e2) + "'");
        }
        r2 = false;
        r2 && delete this.appliedAnnotations_[e2], s2 && (r2 = this.values_, r2.delete(e2), !fe(s2) || (u2 = s2.value_), Nt(s2)), R(this.keysAtom_), this.pendingKeys_ && (r2 = this.pendingKeys_, t2 = r2.get(e2), t2 && (r2 = t2.set, a2 = t2, r2.call(a2, true === e2 in this.target_)));
        if (l2 || b2) {
          a2 = this.name_;
          var m2 = { type: "remove", observableKind: "object", object: w(this), debugObjectName: a2, oldValue: u2, name: e2 };
          if (e2 = false) {
          }
          l2 && B(this, m2);
          if (false) {
          }
        }
      } finally {
        o();
      }
      return true;
    }
    ownKeys_() {
      _(this.keysAtom_);
      let e2 = this.target_;
      return Reflect.ownKeys(e2);
    }
    keys_() {
      _(this.keysAtom_);
      let e2 = this.target_;
      return n.keys(e2);
    }
  };
  vt = X("ObservableObjectAdministration", p);
  var ie = function(e2, r2) {
    if (U.call(e2, t)) return e2;
    var a2;
    a2 = r2 && r2.name ? r2.name + "" : "ObservableObject", a2 = new p(e2, /* @__PURE__ */ new Map(), a2, ((e3) => {
      if (e3) {
        if (e3.defaultDecorator !== void 0) return e3.defaultDecorator;
        if (e3.autoBind || false === e3.deep) return { annotationType_: "true", options_: e3, make_: _t, extend_: gt };
      }
    })(r2)), g(e2, t, { enumerable: false, writable: true, configurable: true, value: a2 });
    return e2;
  };
  var H = { has: function(e2, r2) {
    let a2 = e2[t];
    return a2.has_.call(e2[t], r2);
  } };
  H.get = function(e2, r2) {
    let a2 = e2[t];
    return a2.get_.call(e2[t], r2);
  }, H.set = function(e2, r2, a2) {
    if (!Qe(r2)) return false;
    var n2 = Xt(e2[t], r2, a2, true);
    return n2 == null ? true : !!n2;
  }, H.deleteProperty = function(e2, r2) {
    if (!Qe(r2)) return false;
    var n2 = e2[t], a2 = n2.delete_.call(e2[t], r2, true);
    return a2 == null ? true : !!a2;
  }, H.defineProperty = function(e2, r2, a2) {
    var i2 = e2[t], n2 = i2.defineProperty_.call(e2[t], r2, a2);
    return n2 == null ? true : !!n2;
  }, H.ownKeys = function(e2) {
    let r2 = e2[t];
    return r2.ownKeys_.call(e2[t]);
  }, H.preventExtensions = function(e2) {
    u(13);
    return false;
  };
  var d = {};
  var ke = {};
  ke.get = function(e2, r2) {
    var a2 = e2[t];
    return r2 === t ? a2 : "length" === r2 ? a2.getArrayLength_() : "string" == typeof r2 && true !== isNaN(r2) ? a2.get_(parseInt(r2)) : U.call(d, r2) ? d[r2] : e2[r2];
  }, ke.set = function(e2, r2, a2) {
    var n2 = e2[t];
    "length" === r2 && n2.setArrayLength_(a2);
    "symbol" == typeof r2 || true === isNaN(r2) ? e2[r2] = a2 : n2.set_(parseInt(r2), a2);
    return true;
  }, ke.preventExtensions = function() {
    u(15);
    return false;
  };
  var L = class {
    constructor(e2 = "ObservableArray", r2, t2) {
      var a2 = e2 + "";
      this.owned_ = false, t2 !== void 0 && (this.owned_ = !!t2), this.atom_ = new O(a2), this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0;
      var n2 = "ObservableArray[..]";
      this.enhancer_ = function(e3, t3, a3) {
        return r2(e3, t3, n2);
      };
    }
    dehanceValue_(e2) {
      return this.dehancer !== void 0 ? this.dehancer(e2) : e2;
    }
    dehanceValues_(e2) {
      return this.dehancer !== void 0 && e2.length > 0 ? e2.map(this.dehancer) : e2;
    }
    getArrayLength_() {
      _(this.atom_);
      let e2 = this.values_;
      return e2.length;
    }
    setArrayLength_(e2) {
      ("number" != typeof e2 || true === Number.isNaN(e2) || (e2 | 0) < 0) && x(40, e2), e2 = e2 | 0;
      var t2 = this.values_, r2 = t2.length;
      if (e2 != r2) e2 > r2 ? (e2 = new Array(e2 - r2 | 0), this.spliceWithArray_(r2, 0, e2)) : this.spliceWithArray_(e2, r2 - e2 | 0);
    }
    spliceWithArray_(e2 = 0, r2, t2) {
      var a2 = this.values_, n2 = a2.length, i2 = e2 | 0;
      a2 = 1 == arguments.length ? n2 - i2 | 0 : r2 !== void 0 && r2 != null ? r2 | 0 : 0, n2 = void 0, n2 = t2;
      return Ke(this, i2, a2, t2);
    }
    get_(e2) {
      _(this.atom_);
      let r2 = this.dehanceValue_;
      return this.dehanceValue_(this.values_[e2]);
    }
    set_(e2, r2) {
      e2 |= 0;
      var t2 = this.values_;
      if (e2 < t2.length) {
        var n2 = t2[e2];
        if (E(this)) {
          var a2 = this.proxy_;
          a2 = V(this, { type: "update", object: a2, index: e2, newValue: r2 });
          if (!a2) return;
          r2 = a2.newValue;
        }
        r2 = this.enhancer_(r2, n2);
        r2 === n2 || (t2[e2] = r2, ((e3, r3, t3, a3) => {
          var i3, o2, s2 = P(e3), n3 = null;
          s2 && (n3 = e3.proxy_, i3 = e3.atom_, o2 = i3.name_, n3 = { observableKind: "array", object: n3, type: "update", debugObjectName: o2, index: r3, newValue: t3, oldValue: a3 }), R(e3.atom_), s2 && B(e3, n3);
        })(this, e2, r2, n2));
      } else {
        e2++, e2 = new Array(e2 - t2.length);
        var i2 = e2.length - 1 | 0;
        e2[i2] = r2, Ke(this, t2.length, 0, e2);
      }
    }
  };
  var pr = function(e2, r2, a2, n2) {
    var i2 = "ObservableArray";
    a2 !== void 0 && (i2 = a2 + "");
    var o2 = false;
    o2 = !!n2;
    return ee(function() {
      var a3 = new L(i2, r2, o2), n3 = a3.values_;
      g(n3, t, { enumerable: false, writable: false, configurable: true, value: a3 }), n3 = a3.values_, n3 = new Proxy(n3, ke), a3.proxy_ = n3;
      var s2;
      e2 && e2.length > 0 && (s2 = a3.spliceWithArray_, a3.spliceWithArray_(0, 0, e2));
      return n3;
    });
  };
  lt = X("ObservableArrayAdministration", L), d.clear = function() {
    return this.splice(0);
  }, d.replace = function(e2) {
    let r2 = this[t], n2 = r2.spliceWithArray_, a2 = r2.values_;
    return r2.spliceWithArray_(0, a2.length, e2);
  }, d.toJSON = function() {
    return this.slice();
  }, d.splice = function(e2, r2) {
    var a2 = this[t];
    if (0 == arguments.length) return [];
    if (1 == arguments.length) return a2.spliceWithArray_(e2);
    if (2 == arguments.length) return a2.spliceWithArray_(e2, r2);
    var n2 = J.call(arguments, 2, arguments.length);
    return a2.spliceWithArray_(e2, r2, n2);
  }, d.spliceWithArray = function() {
    let e2 = this[t];
    return e2.spliceWithArray_.apply(this[t], arguments);
  }, d.push = function() {
    let e2 = this[t], r2 = e2.values_;
    Ke(e2, r2.length, 0, arguments);
    return e2.values_.length;
  }, d.pop = function() {
    var r2 = this[t], a2 = r2.values_, e2 = a2.length - 1 | 0;
    e2 < 0 && (e2 = 0);
    return this.splice(e2, 1)[0];
  }, d.shift = function() {
    return this.splice(0, 1)[0];
  }, d.unshift = function() {
    let e2 = this[t];
    Ke(e2, 0, 0, arguments);
    return e2.values_.length;
  }, d.reverse = function() {
    return !e.trackingDerivation || x(37, "reverse"), this.replace(this.slice().reverse()), this;
  }, d.sort = function() {
    !e.trackingDerivation || x(37, "sort");
    var r2 = this.slice();
    r2.sort.apply(r2, arguments), this.replace(r2);
    return this;
  }, d.remove = function(e2) {
    var r2 = this[t];
    e2 = +r2.dehanceValues_(r2.values_).indexOf(e2);
    return e2 > -1 ? (this.splice(e2, 1), true) : false;
  }, S("at"), S("concat"), S("flat"), S("includes"), S("indexOf"), S("join"), S("lastIndexOf"), S("slice"), S("toString"), S("toLocaleString"), S("toSorted"), S("toSpliced"), S("with"), N("every"), N("filter"), N("find"), N("findIndex"), N("findLast"), N("findLastIndex"), N("flatMap"), N("forEach"), N("map"), N("some"), N("toReversed"), Jt("reduce"), Jt("reduceRight");
  var dr = {};
  var a = class {
    constructor(e2, r2, a2 = "ObservableMap") {
      var n2 = this;
      n2[t] = dr, n2.enhancer_ = Q, r2 && (n2.enhancer_ = r2), r2 = a2 + "", n2.name_ = r2, n2.interceptors_ = void 0, n2.changeListeners_ = void 0, n2.dehancer = void 0, ee(function() {
        n2.keysAtom_ = Ue("ObservableMap.keys()"), n2.data_ = /* @__PURE__ */ new Map(), n2.hasMap_ = /* @__PURE__ */ new Map(), !e2 || n2.merge(e2);
      });
    }
    has_(e2) {
      let r2 = this.data_;
      return !!r2.has(e2);
    }
    has(r2) {
      var a2 = this;
      if (!e.trackingDerivation) return a2.has_(r2);
      var t2 = a2.hasMap_;
      t2 = t2.get(r2);
      if (!t2) t2 = s, t2 = new t2(a2.has_(r2), pe, "ObservableMap.key?", false), a2.hasMap_.set(r2, t2), t2.onBUOL = /* @__PURE__ */ new Set(), t2.onBUOL.add(function() {
        a2.hasMap_.delete(r2);
      });
      return t2.get();
    }
    set(t2, r2) {
      var n2 = this.data_, a2 = !!n2.has(t2);
      if (E(this)) {
        n2 = a2 ? "update" : "add", n2 = V(this, { type: n2, object: this, newValue: r2, name: t2 });
        if (!n2) return this;
        r2 = n2.newValue;
      }
      a2 ? this.updateValue_(t2, r2) : this.addValue_(t2, r2);
      return this;
    }
    updateValue_(r2, t2) {
      var a2 = this.data_;
      a2 = a2.get(r2), t2 = a2.prepareNewValue_(t2);
      if (t2 !== e.UNCHANGED) {
        var i2, o2 = P(this), n2 = null;
        o2 && (n2 = this.name_, i2 = a2.value_, n2 = { observableKind: "map", debugObjectName: n2, type: "update", object: this, oldValue: i2, name: r2, newValue: t2 }), a2.setNewValue_(t2), o2 && B(this, n2);
      }
    }
    addValue_(e2, r2) {
      i();
      try {
        var b2 = "ObservableMap.key", n2 = new s(r2, this.enhancer_, b2, false);
        this.data_.set(e2, n2), r2 = n2.value_;
        var t2 = this.hasMap_, a2 = t2.get(e2);
        !a2 || a2.setNewValue_.call(a2, true), R(this.keysAtom_);
      } finally {
        o();
      }
      t2 = false;
      var l2 = P(this), u2 = null;
      l2 && (t2 = true), t2 && (t2 = this.name_, u2 = { observableKind: "map", debugObjectName: t2, type: "add", object: this, name: e2, newValue: r2 }), l2 && B(this, u2);
    }
    delete(r2) {
      if (E(this) && !V(this, { type: "delete", object: this, name: r2 })) return false;
      var n2 = this.data_;
      if (n2.has(r2)) {
        n2 = false;
        var s2 = P(this), a2 = null;
        s2 && (n2 = true);
        if (n2) n2 = this.name_, a2 = this.data_.get(r2).value_, a2 = { observableKind: "map", debugObjectName: n2, type: "delete", object: this, oldValue: a2, name: r2 };
        i();
        try {
          R(this.keysAtom_), n2 = this.hasMap_;
          var Q2 = n2.get(r2);
          !Q2 || Q2.setNewValue_.call(Q2, false), n2 = this.data_;
          var Y2 = n2.get(r2);
          Y2.setNewValue_.call(Y2, void 0), n2 = this.data_, n2.delete(r2);
        } finally {
          o();
        }
        s2 && B(this, a2);
        return true;
      }
      return false;
    }
    get(t2) {
      return this.has(t2) ? (t2 = this.data_.get(t2), Le(this, t2.get())) : Le(this, void 0);
    }
    getOrInsert(e2, r2) {
      this.has(e2) || this.set(e2, r2);
      return this.get(e2);
    }
    getOrInsertComputed(e2, r2) {
      this.has(e2) || this.set(e2, r2(e2));
      return this.get(e2);
    }
    keys() {
      _(this.keysAtom_);
      let e2 = this.data_;
      return e2.keys();
    }
    values() {
      var e2 = this;
      let t2 = e2.keys(), r2 = { next: function() {
        var r3 = t2.next();
        return r3.done ? { done: true, value: void 0 } : { done: false, value: e2.get(r3.value) };
      } };
      r2[Symbol.toStringTag] = "MapIterator";
      return Ee(r2);
    }
    entries() {
      var e2 = this;
      let t2 = e2.keys(), r2 = { next: function() {
        var r3 = t2.next();
        if (r3.done) return { done: true, value: void 0 };
        var a2 = [], n2 = r3.value;
        a2.push(n2), a2.push(e2.get(r3.value));
        return { done: false, value: a2 };
      } };
      r2[Symbol.toStringTag] = "MapIterator";
      return Ee(r2);
    }
    forEach(e2, r2) {
      var a2 = this.entries(), t2 = a2.next();
      while (!t2.done) {
        var n2 = t2.value[1];
        e2.call(r2, n2, t2.value[0], this), t2 = n2 = a2.next();
      }
    }
    merge(e2) {
      var r2 = this;
      l(e2) && (e2 = new Map(e2)), i();
      try {
        if (I(e2)) for (var u2 = ((e3) => {
          var r3 = n.keys(e3), t3 = n.getOwnPropertySymbols(e3);
          if (0 == t3.length) return r3;
          var a3 = J.call(r3), o2 = t3.length;
          for (r3 = 0; r3 < o2; r3++) {
            var i2 = t3[r3], s3 = n.prototype;
            true === s3.propertyIsEnumerable.call(e3, i2) && a3.push(i2);
          }
          return a3;
        })(e2), a2 = 0; ; a2++) {
          var t2 = a2;
          if (t2 >= u2.length) break;
          t2 = r2.set;
          var b2 = u2[a2];
          r2.set(b2, e2[u2[a2]]);
        }
        else if (Array.isArray(e2)) for (var s2 = 0; ; s2++) {
          t2 = s2;
          if (t2 >= e2.length) break;
          t2 = r2.set, b2 = e2[s2][0];
          var c2 = e2[s2];
          r2.set(b2, c2[1]);
        }
        else oe(e2) ? (n.getPrototypeOf(n.getPrototypeOf(n.getPrototypeOf(e2))) == null || x(19, e2), e2.forEach(function(e3, t3) {
          r2.set(t3, e3);
        })) : e2 == null || x(20, e2);
      } finally {
        o();
      }
      return r2;
    }
    clear() {
      i();
      try {
        var t2 = T();
        try {
          for (var r2 = b(this.keys()), e2 = 0; ; e2++) {
            if (e2 >= r2.length) break;
            this.delete(r2[e2]);
          }
        } finally {
          j(t2);
        }
      } finally {
        o();
      }
    }
    replace(e2) {
      i();
      try {
        var g2 = ((e3) => {
          if (oe(e3) || l(e3)) return e3;
          if (Array.isArray(e3)) return new Map(e3);
          if (I(e3)) {
            for (var a3, i2, o2 = /* @__PURE__ */ new Map(), t3 = n.keys(e3), r3 = 0; r3 < t3.length; r3++) a3 = t3[r3], i2 = e3[t3[r3]], o2.set(a3, i2);
            return o2;
          }
          x(21, e3);
          return /* @__PURE__ */ new Map();
        })(e2), t2 = /* @__PURE__ */ new Map(), c2 = false;
        e2 = this.data_;
        for (var S2 = b(e2.keys()), r2 = 0; ; r2++) {
          e2 = r2;
          if (e2 >= S2.length) break;
          var u2 = S2[r2];
          if (!g2.has(u2)) if (this.delete(u2)) c2 = true;
          else {
            e2 = t2;
            var a2 = u2;
            e2.set(a2, this.data_.get(u2));
          }
        }
        var m2 = b(g2.entries());
        for (r2 = 0; ; r2++) {
          e2 = r2;
          if (e2 >= m2.length) break;
          var s2 = m2[r2][0], v2 = m2[r2][1], f2 = !!this.data_.has(s2);
          this.set(s2, v2), !this.data_.has(s2) || (e2 = t2, a2 = s2, e2.set(a2, this.data_.get(s2)), f2 || (c2 = true));
        }
        if (!c2) {
          e2 = this.data_, a2 = e2.size;
          if (a2 != t2.size) R(this.keysAtom_);
          else {
            e2 = this.data_;
            var y2 = e2.keys(), p2 = t2.keys(), d2 = y2.next(), _2 = p2.next();
            while (!d2.done) {
              e2 = d2.value;
              if (e2 !== _2.value) {
                R(this.keysAtom_);
                break;
              }
              d2 = y2.next();
              _2 = p2.next();
            }
          }
        }
        this.data_ = t2;
      } finally {
        o();
      }
      return this;
    }
    toJSON() {
      return b(this);
    }
    toString() {
      return "[object ObservableMap]";
    }
    get size() {
      _(this.keysAtom_);
      let r2 = this.data_;
      return r2.size;
    }
    get [Symbol.toStringTag]() {
      return "Map";
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  };
  var st = X("ObservableMap", a);
  var _r = {};
  var v = class {
    constructor(e2, r2, a2) {
      var n2 = this;
      n2[t] = _r;
      var i2 = "ObservableSet";
      a2 === void 0 || (i2 = a2 + ""), n2.name_ = i2;
      var o2 = Q;
      r2 && (o2 = r2), n2.enhancer_ = function(e3, r3, t2) {
        return o2(e3, r3, i2);
      }, n2.data_ = /* @__PURE__ */ new Set(), n2.changeListeners_ = void 0, n2.interceptors_ = void 0, n2.dehancer = void 0, ee(function() {
        n2.atom_ = Ue(n2.name_), !e2 || n2.replace(e2);
      });
    }
    has(e2) {
      _(this.atom_);
      return !!this.data_.has(Le(this, e2));
    }
    add(e2) {
      if (E(this)) {
        var r2 = V(this, { type: "add", object: this, newValue: e2 });
        if (!r2) return this;
        e2 = r2.newValue;
      }
      if (!this.has(e2)) {
        i();
        try {
          r2 = this.data_, r2.add(this.enhancer_(e2, void 0)), R(this.atom_);
        } finally {
          o();
        }
        r2 = false;
        var t2 = P(this), a2 = null;
        t2 && (r2 = true), r2 && (r2 = this.name_, a2 = { observableKind: "set", debugObjectName: r2, type: "add", object: this, newValue: e2 }), t2 && B(this, a2);
      }
      return this;
    }
    delete(r2) {
      if (E(this) && !V(this, { type: "delete", object: this, oldValue: r2 })) return false;
      if (this.has(r2)) {
        var n2 = false, s2, a2;
        s2 = P(this), a2 = null, s2 && (n2 = true), n2 && (n2 = this.name_, a2 = { observableKind: "set", debugObjectName: n2, type: "delete", object: this, oldValue: r2 }), i();
        try {
          R(this.atom_), n2 = this.data_, n2.delete(r2);
        } finally {
          o();
        }
        s2 && B(this, a2);
        return true;
      }
      return false;
    }
    values() {
      var r2 = this;
      _(r2.atom_);
      let e2 = r2.data_, t2 = e2.values();
      e2 = {}, e2.next = function() {
        var e3 = t2.next();
        return e3.done ? { done: true, value: void 0 } : { done: false, value: Le(r2, e3.value) };
      }, e2[Symbol.toStringTag] = "SetIterator";
      return Ee(e2);
    }
    keys() {
      return this.values();
    }
    entries() {
      let r2 = this.values(), e2 = {};
      e2.next = function() {
        var e3 = r2.next();
        if (e3.done) return { done: true, value: void 0 };
        var t2 = [], a2 = e3.value;
        t2.push(a2), t2.push(e3.value);
        return { done: false, value: t2 };
      }, e2[Symbol.toStringTag] = "SetIterator";
      return Ee(e2);
    }
    forEach(e2, r2) {
      var a2 = this.values(), t2 = a2.next();
      while (!t2.done) {
        e2.call(r2, t2.value, t2.value, this);
        var n2 = a2.next();
        t2 = n2;
      }
    }
    replace(e2) {
      var r2 = this;
      c(e2) && (e2 = new Set(e2)), i();
      try {
        if (Array.isArray(e2)) {
          r2.clear();
          for (var t2 = 0; ; t2++) {
            if (t2 >= e2.length) break;
            r2.add(e2[t2]);
          }
        } else se(e2) ? (r2.clear(), e2.forEach(function(e3) {
          r2.add(e3);
        })) : e2 == null || x(41, e2);
      } finally {
        o();
      }
      return r2;
    }
    clear() {
      i();
      try {
        var t2 = T();
        try {
          for (var a2 = this.data_, r2 = b(a2.values()), e2 = 0; ; e2++) {
            if (e2 >= r2.length) break;
            this.delete(r2[e2]);
          }
        } finally {
          j(t2);
        }
      } finally {
        o();
      }
    }
    toJSON() {
      return b(this);
    }
    toString() {
      return "[object ObservableSet]";
    }
    get size() {
      _(this.atom_);
      let r2 = this.data_;
      return r2.size;
    }
    get [Symbol.toStringTag]() {
      return "Set";
    }
    [Symbol.iterator]() {
      return this.values();
    }
  };
  te("intersection"), te("union"), te("difference"), te("symmetricDifference"), te("isSubsetOf"), te("isSupersetOf"), te("isDisjointFrom"), ut = X("ObservableSet", v);
  var bt = (0, function(e2, r2, t2) {
    return this.extend_(e2, r2, t2, false) == null ? 0 : 1;
  });
  var gr = (0, function(e2, r2, t2, a2) {
    var i2, o2 = Q, n2 = !!((i2 = this.options_) && i2.enhancer_);
    n2 && (n2 = this.options_, o2 = n2.enhancer_);
    return e2.defineObservableProperty_(r2, t2.value, o2, a2);
  });
  var yr = (0, function(e2, r2, t2, a2) {
    var n2 = A({}, this.options_);
    n2.get = t2.get, n2.set = t2.set;
    return e2.defineComputedProperty_(r2, n2, a2);
  });
  var br = (0, function(e2, r2, t2, a2) {
    var n2, i2 = !!((n2 = this.options_) && n2.bound);
    if (i2) return this.extend_(e2, r2, t2, false) == null ? 0 : 1;
    if (a2 === e2.target_) return this.extend_(e2, r2, t2, false) == null ? 0 : 2;
    if (Z(t2.value)) return 1;
    g(a2, r2, $t(e2, this, r2, t2, false));
    return 2;
  });
  var mr = (0, function(r2, t2, a2, n2) {
    let i2 = r2.defineProperty_;
    return r2.defineProperty_(t2, $t(r2, this, t2, a2, !!e.safeDescriptors), n2);
  });
  var mt = function(e2, r2, t2) {
    var a2 = t2.name;
    ue(r2) || (r2 = $(r2));
    var n2, i2 = !!((n2 = e2.options_) && n2.bound);
    i2 && t2.addInitializer(function() {
      let e3 = this[a2];
      e3 = e3.bind(this), e3.isMobXFlow = true, this[a2] = e3;
    });
    return r2;
  };
  var wt = (0, function(e2, r2, t2, a2) {
    if (a2 === e2.target_) return this.extend_(e2, r2, t2, false) == null ? 0 : 2;
    var i2, n2 = !!((i2 = this.options_) && i2.bound);
    n2 ? (n2 = e2.target_, n2 = !U.call(n2, r2) || !ue(e2.target_[r2])) : n2 = false;
    if (n2 && this.extend_(e2, r2, t2, false) == null) return 0;
    if (ue(t2.value)) return 1;
    g(a2, r2, Qt(e2, t2, false, false));
    return 2;
  });
  var Ot = (0, function(r2, t2, a2, n2) {
    var i2, o2, s2 = !!((i2 = this.options_) && i2.bound);
    o2 = r2.defineProperty_, t2;
    return r2.defineProperty_(t2, Qt(r2, a2, s2, !!e.safeDescriptors), n2);
  });
  Ae = function(e2, r2, a2, i2) {
    var o2, s2;
    o2 = a2, s2 = i2;
    var l2 = n.getOwnPropertyDescriptors(r2);
    ee(function() {
      for (var r3, n2, u2 = ie(e2, s2)[t], i3 = Reflect.ownKeys(l2), a3 = 0; a3 < i3.length; a3++) r3 = i3[a3], n2 = o2 ? true === r3 in o2 ? o2[r3] : true : true, u2.extend_(r3, l2[r3], n2);
    });
    return e2;
  };
  var de = function(e2, r2, a2) {
    if ("accessor" != a2.kind + "") return;
    var n2 = a2.name, i2 = {};
    i2.get = function() {
      var a3 = this[t];
      a3 = a3 || nt(this, e2, n2, r2.get.call(this));
      return a3.getObservablePropValue_(n2);
    }, i2.set = function(r3) {
      var a3 = this[t];
      a3 = a3 || nt(this, e2, n2, r3);
      return a3.setObservablePropValue_(n2, r3);
    }, i2.init = function(r3) {
      nt(this, e2, n2, r3);
      return r3;
    };
    return i2;
  };
  var Fe = Me("observable", void 0);
  wa = Me("observable.ref", { enhancer_: pe }), Sa = Me("observable.shallow", { enhancer_: Sa }), Da = Me("observable.struct", { enhancer_: Da }), r = A(function(e2, t2, a2) {
    return t2 && "string" == typeof t2.kind ? de(Fe, e2, t2) : Be(e2) ? e2 : I(e2) ? r.object.call(r, e2, t2, a2) : Array.isArray(e2) ? r.array.call(r, e2, t2) : oe(e2) ? r.map.call(r, e2, t2) : se(e2) ? r.set.call(r, e2, t2) : "object" == typeof e2 && e2 != null ? e2 : r.box.call(r, e2, t2);
  }, Fe), r.box = function(e2, r2) {
    let t2 = ze(r2);
    return new s(e2, Ne(t2), t2.name, true, t2.equals);
  }, r.array = function(e2, r2) {
    let t2 = ze(r2);
    return pr(e2, Ne(t2), t2.name);
  }, r.map = function(e2, r2) {
    let t2 = ze(r2);
    return new a(e2, Ne(t2), t2.name);
  }, r.set = function(e2, r2) {
    let t2 = ze(r2);
    return new v(e2, Ne(t2), t2.name);
  }, r.object = function(e2, r2, a2) {
    return ee(function() {
      var n2 = {};
      n2 = ie(n2, a2);
      var i2 = n2[t];
      i2.proxy_ || (i2.proxy_ = new Proxy(n2, H)), n2 = i2.proxy_;
      return Ae(n2, e2, r2);
    });
  }, Oe = K(wa, de), Pa = K(Sa, de);
  var Ba = K(Fe, de);
  Da = K(Da, de);
  var Xe = function(e2, r2, a2) {
    var i2, n2 = a2.name, o2 = function(t2, a3) {
      var i3 = A({}, e2.options_);
      i3.get = r2, i3.context = t2, i3.name || (i3.name = ba + k(n2));
      return new h(i3);
    };
    a2.addInitializer(function() {
      var i3 = this, e3 = ie(i3)[t], a3 = e3.values_;
      a3 = a3.get(n2);
      var s2;
      C(a3) && a3.derivation !== r2 && (s2 = e3.values_, s2.delete(n2)), e3.lazyComputedKeys_ || (e3.lazyComputedKeys_ = /* @__PURE__ */ new Map()), e3.lazyComputedKeys_.set(n2, function() {
        return o2(i3, e3);
      });
    });
    return function() {
      var s2 = this[t], a3 = s2.values_;
      a3 = a3.get(n2);
      var e3;
      return C(a3) && a3.derivation !== r2 ? (i2 = i2 || /* @__PURE__ */ new WeakMap(), e3 = i2.get(this), e3 || (e3 = o2(this, s2), i2.set(this, e3)), e3.get()) : s2.getObservablePropValue_(n2);
    };
  };
  var St = rt("computed", void 0);
  wa = rt("computed.struct", { equals: function(e2, r2) {
    return le(e2, r2, -1, void 0, void 0);
  } }), ne = A(function(e2, r2) {
    if (r2 && "string" == typeof r2.kind) return Xe(St, e2, r2);
    if (I(e2)) return K(rt("computed", e2), Xe);
    var t2 = {};
    I(r2) && (t2 = A({}, r2)), t2.get = e2, t2.name || (t2.name = e2.name);
    return new h(t2);
  }, St);
  var Na = K(wa, Xe);
  Sa = (0, function(e2) {
    var r2 = e2.name + "";
    "" == r2 && (r2 = ma);
    return Ut(r2, false, e2, this, void 0);
  });
  var xe = function(e2, r2, t2) {
    var n2 = t2.name, a2 = function(r3) {
      var i3 = k(n2);
      if (e2.options_) var a3 = e2.options_, t3 = !!a3.name;
      else {
        t3 = false;
      }
      t3 && (t3 = e2.options_, i3 = t3.name + "");
      t3 = !!((a3 = e2.options_) && a3.autoAction);
      return q(i3, r3, t3, void 0);
    };
    if ("field" == t2.kind + "") return function(r3) {
      Z(r3) || (r3 = a2(r3));
      var t3, n3 = !!((t3 = e2.options_) && t3.bound);
      n3 && (r3 = r3.bind(this), r3.isMobxAction = true);
      return r3;
    };
    if ("method" == t2.kind + "") {
      Z(r2) || (r2 = a2(r2));
      if (e2.options_) {
        var i2 = e2.options_;
        a2 = !!i2.bound;
      } else {
        a2 = false;
      }
      a2 && t2.addInitializer(function() {
        let e3 = this[n2];
        e3 = e3.bind(this), e3.isMobxAction = true, this[n2] = e3;
      });
      return r2;
    }
    r2 = e2.annotationType_;
    i2 = k(n2);
    var o2 = t2.kind;
    a2 = [], a2.push(r2), a2.push(i2), a2.push(o2), Y(43, a2);
  };
  var At = ye("action", void 0);
  wa = ye("action.bound", { bound: true });
  var kt = ye("autoAction", { autoAction: true });
  var za = ye("autoAction.bound", { autoAction: true, bound: true });
  ae = A(function(e2, r2) {
    if (r2 && "string" == typeof r2.kind) {
      var t2 = At;
      return xe(t2, e2, r2);
    }
    if ("function" == typeof e2) return t2 = e2.name + "", "" == t2 && (t2 = ma), q(t2, e2, false, void 0);
    if ("function" == typeof r2) return q(e2 + "", r2, false, void 0);
    if (Qe(e2)) return t2 = "action", K(ye(t2, { name: e2, autoAction: false }), xe);
  }, At), Se = A(function(e2, r2) {
    if (r2 && "string" == typeof r2.kind) {
      var t2 = kt;
      return xe(t2, e2, r2);
    }
    if ("function" == typeof e2) return t2 = e2.name + "", "" == t2 && (t2 = ma), q(t2, e2, true, void 0);
    if ("function" == typeof r2) return q(e2 + "", r2, true, void 0);
    if (Qe(e2)) return t2 = "autoAction", K(ye(t2, { name: e2, autoAction: true }), xe);
  }, kt);
  var Ka = K(wa, xe);
  Ge = K(za, xe);
  var G = class extends Error {
    constructor() {
      super(), this.message = "FLOW_CANCELLED", this.name = "FlowCancellationError";
    }
    toString() {
      return "Error: " + this.message;
    }
  };
  g(G, "name", { value: "FlowCancellationError", configurable: true });
  za = function(e2) {
    return jt(G, e2);
  };
  var La = function(e2, r2) {
    if (r2 && "string" == typeof r2.kind) return mt($, e2, r2);
    var t2 = e2.name + "";
    "" == t2 && (t2 = "flow");
    var a2 = (0, function() {
      var i2, o2, n2, a3 = ae(t2, e2).apply(this, arguments), r3 = { rejector: void 0, pending: void 0, stepId: 0 };
      i2 = function(e3) {
        r3.pending = void 0;
        try {
          var i3 = ae(t2, a3.next).call(a3, e3);
          n2(i3);
        } catch (e4) {
          r3.rejector(e4);
        }
      }, o2 = function(e3) {
        r3.pending = void 0;
        try {
          var i3 = ae(t2, a3.throw).call(a3, e3);
          n2(i3);
        } catch (e4) {
          r3.rejector(e4);
        }
      }, n2 = function(e3) {
        if ("function" == typeof e3.then) {
          e3.then(n2, r3.rejector);
          return;
        }
        if (e3.done) {
          r3.resolve(e3.value);
          return;
        }
        r3.pending = Promise.resolve(e3.value);
        r3.pending.then(i2, o2);
      };
      var s2 = new Promise(function(e3, t3) {
        r3.resolve = e3, r3.rejector = t3, i2(void 0);
      });
      s2.cancel = ae(t2, function() {
        var t3;
        try {
          if (r3.pending) var n3 = r3.pending, e3 = "function" == typeof n3.cancel;
          else {
            e3 = false;
          }
          e3 && (e3 = r3.pending, e3.cancel.call(r3.pending)), t3 = a3.return(void 0), M = Promise.resolve(t3.value);
          M.then(re, re), "function" == typeof M.cancel && M.cancel.call(M), r3.rejector(new G());
        } catch (e4) {
          r3.rejector(e4);
        }
      });
      return s2;
    });
    a2.isMobXFlow = true;
    return a2;
  };
  wa = { annotationType_: "flow", options_: void 0, make_: wt, extend_: Ot }, $ = A(La, wa), wa = { annotationType_: "flow.bound", options_: { bound: true }, make_: wt, extend_: Ot }, We = K(wa, mt), wa = function(e2) {
    return e2;
  }, La = function(e2) {
    return ue(e2);
  };
  var Je = function(e2, r2) {
    var t2 = ot;
    r2 = r2 || t2, t2 = r2.name ? r2.name + "" : "Autorun";
    var a2, n2 = !r2.scheduler && !r2.delay, s2 = () => {
      e2(a2);
    };
    if (n2) a2 = new y(t2, function() {
      this.track(s2);
    }, r2.onError, r2.requiresObservable);
    else {
      n2 = Yt(r2);
      var i2 = false, o2 = y;
      a2 = new o2(t2, function() {
        var e3 = this;
        i2 || (i2 = true, n2(() => {
          i2 = false, e3.isDisposed || e3.track(s2);
        }));
      }, r2.onError, r2.requiresObservable);
    }
    t2 = !!((o2 = r2.signal) && o2.aborted);
    t2 || a2.schedule_(), t2 = a2.getDisposer_;
    return t2.call(a2, r2.signal);
  };
  var Ma = function(r2, t2, a2) {
    var n2 = ot;
    a2 && (n2 = a2);
    var o2 = n2.name ? n2.name + "" : "Reaction", b2 = Te;
    !n2.equals || (b2 = n2.equals);
    var s2, i2, c2 = q(o2, /* @__PURE__ */ ((e2, r3) => !e2 ? r3 : function() {
      try {
        return r3.apply(this, arguments);
      } catch (r4) {
        e2.call(this, r4);
        return;
      }
    })(n2.onError, t2), false, void 0), l2 = true, d2 = false, g2 = () => {
      var a3 = !!e.allowStateChanges;
      e.allowStateChanges = false;
      var t3;
      try {
        t3 = r2(i2);
      } finally {
        e.allowStateChanges = a3;
      }
      d2 = l2 || true !== b2(s2, t3);
      s2 = t3;
    };
    t2 = !n2.scheduler && !n2.delay;
    var u2 = false, S2 = Yt(n2), m2 = () => {
      u2 = false;
      if (!i2.isDisposed) {
        var e2 = s2;
        i2.track.call(i2, g2), l2 && n2.fireImmediately ? c2(s2, e2, i2) : !l2 && false, l2 = false;
      }
    }, p2 = n2.onError;
    i2 = new y(o2, () => {
      l2 || t2 ? m2() : u2 || (u2 = true, S2(m2));
    }, p2, n2.requiresObservable), o2 = !!((a2 = n2.signal) && a2.aborted), o2 || (o2 = i2.schedule_, o2.call(i2)), o2 = i2.getDisposer_;
    return o2.call(i2, n2.signal);
  };
  var Ia = function(e2, r2, t2) {
    var a2;
    return 1 == arguments.length || r2 && "object" == typeof r2 ? (a2 = void 0, a2 = r2, ((e3, r3) => {
      var t3;
      if (r3 && r3.signal && r3.signal.aborted) return e3 = Promise.reject(new Error("WHEN_ABORTED")), e3.cancel = function() {
        return null;
      }, e3;
      t3 = { cancel: void 0, abort: void 0 };
      var a3 = new Promise(function(a4, n2) {
        var i2 = A({}, r3);
        i2.onError = n2, i2 = Zt(e3, a4, i2), t3.cancel = function() {
          i2(), n2(new Error("WHEN_CANCELLED"));
        }, t3.abort = function() {
          i2(), n2(new Error("WHEN_ABORTED"));
        }, r3 && r3.signal && "function" == typeof r3.signal.addEventListener && r3.signal.addEventListener("abort", t3.abort);
      });
      r3 && r3.signal && "function" == typeof r3.signal.removeEventListener && (a3 = a3.finally(function() {
        r3.signal.removeEventListener("abort", t3.abort);
      })), a3.cancel = t3.cancel;
      return a3;
    })(e2, r2)) : Zt(e2, r2, t2);
  };
  var Ta = function(r2) {
    var t2 = r2.isolateGlobalState;
    true === t2 && ur(), r2.enforceActions === void 0 || (t2 = r2.enforceActions, "always" === t2 ? (e.enforceActions = "always", e.allowStateChanges = false) : "observed" === t2 ? (e.enforceActions = true, e.allowStateChanges = false) : (e.enforceActions = false, e.allowStateChanges = true)), true === "computedRequiresReaction" in r2 && (t2 = e, t2.computedRequiresReaction = !!r2.computedRequiresReaction), true === "reactionRequiresObservable" in r2 && (t2 = e, t2.reactionRequiresObservable = !!r2.reactionRequiresObservable), true === "observableRequiresReaction" in r2 && (t2 = e, t2.observableRequiresReaction = !!r2.observableRequiresReaction), true === "disableErrorBoundaries" in r2 && (t2 = e, t2.disableErrorBoundaries = !!r2.disableErrorBoundaries), true === "safeDescriptors" in r2 && (t2 = e, t2.safeDescriptors = !!r2.safeDescriptors), t2 = e, t2.allowStateReads = !e.observableRequiresReaction;
    if (r2.reactionScheduler) {
      t2 = r2.reactionScheduler;
      var a2 = qe;
      qe = (e2) => t2(() => a2(e2));
    }
  };
  var $e = Symbol("mobx-keys");
  var qa = function(e2, r2, a2) {
    ee(function() {
      for (var o2, s2 = ie(e2, a2)[t], i2 = Reflect.ownKeys(r2), n2 = 0; n2 < i2.length; n2++) o2 = i2[n2], er(s2, o2, r2[i2[n2]]);
    });
    return e2;
  };
  var Ua = function(e2, r2, a2) {
    if (I(e2)) return Ae(e2, e2, r2, a2);
    ee(function() {
      var c2 = ie(e2, a2)[t];
      if (true !== $e in e2) {
        for (var l2, u2 = n.getPrototypeOf(e2), o2 = /* @__PURE__ */ new Set(), s2 = Reflect.ownKeys(e2), b2 = Reflect.ownKeys(u2), i2 = 0; i2 < s2.length; i2++) l2 = s2[i2], o2.add(l2);
        for (i2 = 0; i2 < b2.length; i2++) s2 = b2[i2], o2.add(s2);
        o2.delete("constructor"), o2.delete(t), g(u2, $e, { enumerable: false, writable: true, configurable: true, value: o2 });
      }
      e2[$e].forEach(function(e3) {
        var t2 = r2 && true === e3 in r2 ? r2[e3] : true;
        er(c2, e3, t2);
      });
    });
    return e2;
  };
  var Ce = function(e2) {
    if (f(e2)) {
      var r2 = e2[t];
      return r2.keys_.call(e2[t]);
    }
    if (l(e2) || c(e2)) return b(e2.keys());
    if (m(e2)) {
      var a2 = [];
      for (r2 = 0; r2 < e2.length; r2++) a2.push(r2);
      return a2;
    }
    u(5);
  };
  var Ha = function(e2) {
    if (f(e2)) {
      for (var n2, t2 = Ce(e2), a2 = [], r2 = 0; r2 < t2.length; r2++) n2 = e2[t2[r2]], a2.push(n2);
      return a2;
    }
    if (l(e2)) {
      for (t2 = Ce(e2), a2 = [], r2 = 0; r2 < t2.length; r2++) a2.push(e2.get(t2[r2]));
      return a2;
    }
    if (c(e2)) return b(e2.values());
    if (m(e2)) return e2.slice();
    u(6);
  };
  var Ga = function(e2) {
    if (f(e2) || l(e2)) {
      for (var t2, n2, a2 = Ce(e2), i2 = [], r2 = 0; r2 < a2.length; r2++) t2 = [], n2 = a2[r2], t2.push(n2), l(e2) ? t2.push(e2.get(a2[r2])) : (n2 = e2[a2[r2]], t2.push(n2)), i2.push(t2);
      return i2;
    }
    if (c(e2)) return b(e2.entries());
    if (m(e2)) {
      for (a2 = [], r2 = 0; r2 < e2.length; r2++) t2 = [], t2.push(r2), t2.push(e2[r2]), a2.push(t2);
      return a2;
    }
    u(7);
  };
  var xt = function(e2, r2, a2) {
    var s2 = r2, d2 = a2;
    if (2 == arguments.length && !c(e2)) {
      i();
      try {
        for (var S2 = n.keys(s2), g2 = 0; ; g2++) {
          var b2 = g2;
          if (b2 >= S2.length) break;
          b2 = xt, d2 = S2[g2], b2(e2, d2, s2[S2[g2]]);
        }
      } finally {
        o();
      }
      return;
    }
    f(e2) ? (b2 = e2[t], b2.set_.call(e2[t], s2, d2)) : l(e2) ? e2.set(s2, d2) : c(e2) ? e2.add(s2) : m(e2) ? (i(), b2 = s2 | 0, b2 >= e2.length && (e2.length = (s2 | 0) + 1 | 0), e2[s2] = d2, o()) : u(8);
  };
  var Wa = function(e2, r2) {
    if (f(e2)) {
      var a2 = e2[t];
      a2.delete_.call(e2[t], r2);
    } else l(e2) || c(e2) ? e2.delete(r2) : m(e2) ? e2.splice(r2, 1) : u(9);
  };
  var Ct = function(e2, r2) {
    if (f(e2)) {
      var a2 = e2[t];
      return a2.has_.call(e2[t], r2);
    }
    if (l(e2) || c(e2)) return e2.has(r2);
    if (m(e2)) return (r2 | 0) >= 0 ? (a2 = r2 | 0, a2 = a2 < e2.length) : a2 = false, a2;
    u(10);
    return false;
  };
  var Fa = function(e2, r2) {
    if (!!Ct(e2, r2)) {
      if (f(e2)) return e2[t].get_.call(e2[t], r2);
      if (l(e2)) return e2.get(r2);
      if (m(e2)) return e2[r2];
      u(11);
    }
  };
  var Rt = function(e2) {
    if (f(e2)) return e2[t].ownKeys_.call(e2[t]);
    u(38);
  };
  var Xa = function(e2, r2, a2) {
    if (f(e2)) return e2[t].defineProperty_.call(e2[t], r2, a2);
    u(39);
  };
  var W = function(e2, r2) {
    if ("object" == typeof e2 && e2 != null) {
      if (m(e2)) {
        r2 === void 0 || u(23);
        var a2 = e2[t];
        return a2.atom_;
      }
      if (c(e2)) return e2.atom_;
      if (l(e2)) {
        if (r2 === void 0) return e2.keysAtom_;
        a2 = e2.data_, a2 = a2.get(r2), a2 || (a2 = e2.hasMap_, a2 = a2.get(r2));
        if (!a2) {
          var i2 = e2.name_, n2 = [];
          n2.push(r2), n2.push(i2), Y(25, n2);
        }
        return a2;
      }
      if (r2 && !e2[t] && e2[r2] === void 0) {
      }
      if (f(e2)) return r2 || u(26), n2 = e2[t], a2 = n2.values_, a2 = a2.get(r2), a2 = a2 || n2.materializeLazyComputed_(r2), a2 = a2 || n2.materializeLazyObservable_(r2), a2 || (i2 = n2.name_, e2 = [], e2.push(r2), e2.push(i2), Y(27, e2)), a2;
      if (Ye(e2) || C(e2) || Ve(e2)) return e2;
    } else {
      if ("function" == typeof e2 && Ve(e2[t])) return e2[t];
    }
    x(28, e2);
  };
  var M = function(e2, r2) {
    e2 || u(29);
    if (r2 !== void 0) return M(W(e2, r2));
    if (Ye(e2) || C(e2) || Ve(e2) || l(e2) || c(e2)) return e2;
    if (e2[t]) return e2[t];
    x(24, e2);
  };
  var Ja = function(e2, r2) {
    if (r2 !== void 0) var t2 = W(e2, r2);
    else if (Z(e2)) return e2.name;
    else {
      t2 = f(e2) || l(e2) || c(e2) ? M(e2) : W(e2);
    }
    return t2.name_;
  };
  var $a = function(e2, r2, t2, a2) {
    var i2 = e2;
    if (arguments.length > 2 && "function" == typeof t2) {
      var n2 = a2;
      i2 = M(i2, r2);
      return tr(i2, t2, n2);
    }
    var o2 = arguments.length > 2 && t2;
    n2 = M(i2);
    if (m(i2)) {
      if (o2) {
        var s2 = n2.values_;
        s2 = J.call(s2), i2 = n2.proxy_, o2 = n2.atom_, r2({ observableKind: "array", object: i2, debugObjectName: o2.name_, type: "splice", index: 0, added: s2, addedCount: s2.length, removed: [], removedCount: 0 });
      }
      n2 = ge(n2, r2);
      return n2;
    }
    if (l(i2)) return n2 = ge(n2, r2), n2;
    if (c(i2)) return n2 = ge(n2, r2), n2;
    if (f(i2)) return n2 = ge(n2, r2), n2;
    n2 = tr(n2, r2, o2);
    return n2;
  };
  var Qa = function(e2, r2, t2) {
    if (arguments.length > 2 && "function" == typeof t2) {
      var a2 = M(e2, r2);
      return Ht(a2, t2);
    }
    a2 = M(e2);
    return Ht(a2, r2);
  };
  var Ya = function() {
    return rr("onBOL", arguments);
  };
  var Za = function() {
    return rr("onBUOL", arguments);
  };
  var ei = function(e2) {
    return ve(e2, /* @__PURE__ */ new Map());
  };
  var ti = function(e2, r2) {
    return nr(W(e2, r2));
  };
  var ri = function(e2, r2) {
    return ar(W(e2, r2));
  };
  var ni = function(e2) {
    return C(e2);
  };
  var ai = function(e2, r2) {
    if (!f(e2)) return false;
    var a2 = e2[t];
    a2.lazyComputedKeys_ ? (e2 = a2.lazyComputedKeys_, e2 = !!e2.has(r2)) : e2 = false;
    if (e2) return true;
    e2 = a2.values_;
    if (!e2.has(r2)) return false;
    e2 = a2.values_;
    return C(e2.get(r2));
  };
  var ii = function(e2, r2, t2) {
    var a2, n2 = void 0;
    l(e2) || m(e2) || fe(e2) || c(e2) ? (a2 = M(e2), n2 = r2) : f(e2) && (a2 = M(e2, r2), n2 = t2), a2.dehancer = n2;
    return function() {
      a2.dehancer = void 0;
    };
  };
  return __toCommonJS(mobx_esm_exports);
})();
typeof module!=="undefined"&&module.exports&&(module.exports=mobx);
