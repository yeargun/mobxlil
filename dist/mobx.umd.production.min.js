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
    $mobx: () => Z,
    FlowCancellationError: () => Me,
    ObservableMap: () => $,
    ObservableSet: () => ae,
    Reaction: () => ue,
    _allowStateChanges: () => $t,
    _allowStateChangesInsideComputed: () => yr,
    _allowStateReadsEnd: () => br,
    _allowStateReadsStart: () => vr,
    _autoAction: () => vt,
    _autoActionBound: () => Dt,
    _endAction: () => Tn,
    _getAdministration: () => He,
    _getGlobalState: () => o,
    _interceptReads: () => D,
    _isComputingDerivation: () => $r,
    _resetGlobalState: () => u,
    _startAction: () => En,
    action: () => Ke,
    actionBound: () => d,
    autorun: () => Mt,
    compareDefault: () => zr,
    compareIdentity: () => jr,
    compareShallow: () => qr,
    compareStructural: () => Er,
    computed: () => nt,
    computedStruct: () => l,
    configure: () => g,
    createAtom: () => Ct,
    defineProperty: () => E,
    entries: () => z,
    extendObservable: () => wt,
    flow: () => Xe,
    flowBound: () => Ht,
    flowResult: () => H,
    get: () => q,
    getAtom: () => Ge,
    getDebugName: () => T,
    getDependencyTree: () => U,
    getObserverTree: () => A,
    has: () => fn,
    intercept: () => R,
    isAction: () => _e,
    isBoxedObservable: () => Jr,
    isComputed: () => C,
    isComputedProp: () => L,
    isFlow: () => P,
    isFlowCancellationError: () => v,
    isObservable: () => y,
    isObservableArray: () => ge,
    isObservableMap: () => oe,
    isObservableObject: () => le,
    isObservableProp: () => b,
    isObservableSet: () => ce,
    keys: () => zt,
    makeAutoObservable: () => k,
    makeObservable: () => w,
    observable: () => J,
    observableDeep: () => p,
    observableRef: () => bt,
    observableShallow: () => c,
    observableStruct: () => f,
    observe: () => N,
    onBecomeObserved: () => I,
    onBecomeUnobserved: () => S,
    onReactionError: () => s,
    override: () => t,
    ownKeys: () => mn,
    reaction: () => h,
    remove: () => j,
    runInAction: () => n,
    set: () => pn,
    spy: () => r,
    toJS: () => O,
    transaction: () => a,
    untracked: () => i,
    values: () => x,
    when: () => m
  });
  var Ki = "length";
  var Qi = "function";
  var is = "isMobXComputedValue";
  var ss = "name";
  var os = "set";
  var cs = "allowStateReads";
  var ls = "value";
  var ds = "disableErrorBoundaries";
  var ys = "delete";
  var js = "object";
  var Os = "constructor";
  var Us = "observableRequiresReaction";
  var As = "enforceActions";
  var Cs = "splice";
  var Ls = "add";
  var Fs = "isDisposed";
  var Gs = "toString";
  var Bs = "reactionRequiresObservable";
  var Vs = "forEach";
  var Ws = "UNCHANGED";
  var Ks = "isBeingObserved";
  var no = "computedRequiresReaction";
  var lo = "isPendingUnobservation";
  var po = "isMobXObservableValue";
  var go = "update";
  var vo = "Set";
  var ko = "diffValue";
  var To = "size";
  var Ao = "string";
  var Mo = "isRunningSetter";
  var Vo = "isMobXReaction";
  var Wo = "isTrackPending";
  var Xo = "array";
  var Jo = "slice";
  var nu = "indexOf";
  var ru = "symmetricDifference";
  var ou = "map";
  var au = "isComputing";
  var cu = "isScheduled";
  var hu = "autoAction";
  var wu = "abort";
  var qu = "onBUOL";
  var Su = "intersection";
  var Pu = "isMobXAtom";
  var Mu = "FlowCancellationError";
  var Yu = "symbol";
  var Bu = "ObservableObject.key";
  var Ku = "isRunning";
  var Ju = "onBOL";
  var _u = "Reaction";
  var $u = "computed";
  var ta = "GeneratorFunction";
  var na = "ObservableObject.";
  var ia = "<unnamed action>";
  var aa = "reverse";
  var ca = "ObservableArray";
  var la = "ObservableValue";
  var ba = "isDisjointFrom";
  var va = "action";
  var wa = "number";
  var ka = "remove";
  var za = "ComputedValue";
  var ja = "ObservableMap";
  var qa = "ObservableSet";
  var Na = "WHEN_ABORTED";
  var Ra = "[object Map]";
  var Ia = "[object Set]";
  var Sa = "isSupersetOf";
  var Aa = "spyListeners";
  var La = "Map";
  var Fa = "runId";
  var Ma = "union";
  var Ga = "MapIterator";
  var Ya = "SetIterator";
  var Va = "difference";
  var Wa = "isSubsetOf";
  var Za = "sort";
  var ec = "mobxGuid";
  var Q = () => globalThis.Object;
  var be = () => globalThis.Map;
  var Ie = () => globalThis.Reflect;
  var xe = () => globalThis.Symbol;
  var ht = (e2) => e2 != null && typeof e2 == js;
  var Bt = (e2) => {
    e2 = typeof e2;
    return e2 == Ao || e2 == Yu || e2 == wa;
  };
  var Je = (e2, t2) => true === Fn(e2, t2);
  var nr = (e2, t2) => t2 == null ? false : true === Mn.call(e2.prototype, t2);
  var me = (e2) => {
    let t2 = globalThis.Array;
    return t2.from(e2);
  };
  var ve = (e2, t2) => !!e2.has(t2);
  var re = (e2, t2, n2) => {
    Q().defineProperty(e2, t2, n2);
  };
  var ze = (e2, t2) => Q().assign(e2, t2);
  var Ye = (e2, t2) => {
    t2.prototype["isMobX" + e2] = true;
  };
  var jt = (e2) => {
    throw e2;
  };
  var gn = (e2) => {
    throw new globalThis.TypeError(e2);
  };
  var yn = (e2) => {
    return e2 == null ? false : (e2 = e2.constructor, !e2 ? false : e2.name + "" == ta ? true : e2.displayName + "" == ta ? true : false);
  };
  var Pe = (e2) => {
    if (!ht(e2)) return false;
    var t2 = Q().getPrototypeOf(e2);
    return t2 == null ? true : (e2 = void 0, !Le.call(t2, Os) || (e2 = t2.constructor), e2 = typeof e2 == Qi && e2.toString() === Gn, e2);
  };
  var it = (e2) => {
    if (e2 == null) return false;
    var t2 = Q().prototype;
    return t2.toString.call(e2) + "" == Ra;
  };
  var st = (e2) => {
    if (e2 == null) return false;
    var t2 = Q().prototype;
    return t2.toString.call(e2) + "" == Ia;
  };
  var we = (e2) => typeof e2 == Ao ? e2 + "" : typeof e2 == Yu ? e2.toString() + "" : new globalThis.String(e2) + "";
  var bn = (e2) => null === e2 ? null : typeof e2 == js ? "" + e2 : e2;
  var rr = (e2) => {
    var n2 = Q().keys(e2), t2 = Q().getOwnPropertySymbols(e2);
    if (0 == t2.length) return n2;
    var i2 = We.call(n2), o2 = t2.length;
    n2 = 0;
    while (n2 < o2) {
      var r2 = t2[n2], s2 = Q().prototype;
      true === s2.propertyIsEnumerable.call(e2, r2) && i2.push(r2), n2++;
    }
    return i2;
  };
  var ir = () => {
    var e2 = globalThis.Iterator;
    return e2 ? e2.prototype : { __proto__: null };
  };
  var qt = (e2) => {
    let t2 = xe().iterator;
    e2[t2] = function() {
      return this;
    }, t2 = ir();
    return ze(Q().create(t2), e2);
  };
  var vn = (t2) => {
    var e2 = false;
    return function() {
      if (!e2) {
        e2 = true;
        return t2.apply(this, arguments);
      }
    };
  };
  var Et = () => {
    let e2 = {};
    Object.assign(e2, { version: 7, UNCHANGED: {} });
    let t2 = null;
    Object.assign(e2, { trackingDerivation: t2, trackingContext: t2, runId: 0, mobxGuid: 0, inBatch: 0, pendingUnobservations: [], pendingReactions: [], isRunningReactions: false, allowStateChanges: false, allowStateReads: true, enforceActions: true, spyListeners: [], globalReactionErrorHandlers: [], computedRequiresReaction: false, reactionRequiresObservable: false, observableRequiresReaction: false, disableErrorBoundaries: false, suppressReactionErrors: false, safeDescriptors: true });
    return e2;
  };
  var sr = () => {
    var t2, e2 = globalThis;
    e2.__mobxInstanceCount && (e2.__mobxInstanceCount | 0) > 0 && !e2.__mobxGlobals && (gt = false), t2 = e2.__mobxGlobals, t2 && 7 != (t2.version | 0) && (gt = false);
    if (!gt) {
      e2 = function() {
        Qt || se(35);
      }, globalThis.setTimeout(e2, 1);
      return Et();
    } else if (t2) {
      e2.__mobxInstanceCount++, t2.UNCHANGED || (t2.UNCHANGED = {});
      return t2;
    }
    e2.__mobxInstanceCount = 1;
    t2 = Et(), e2.__mobxGlobals = t2;
    return t2;
  };
  var Qe = (e2, t2) => {
    t2 = t2.length > 0 ? " " + t2.map(globalThis.String).join(",") : "", e2 = "[MobX] minified error nr: " + e2 + t2 + ". See mobx.js.org/errors", jt(new globalThis.Error(e2));
  };
  var se = (e2) => {
    Qe(e2, []);
  };
  var je = (e2, t2) => {
    let n2 = [];
    n2.push(t2), Qe(e2, n2);
  };
  var _ = (e2, t2) => ht(e2) && true === e2[t2];
  var oe = (e2) => _(e2, "isMobXObservableMap");
  var ce = (e2) => _(e2, "isMobXObservableSet");
  var ge = (e2) => !ht(e2) ? false : _(e2[Z], "isMobXObservableArrayAdministration");
  var le = (e2) => !ht(e2) ? false : _(e2[Z], "isMobXObservableObjectAdministration");
  var _e = (e2) => typeof e2 == Qi && true === e2.isMobxAction;
  var ot = (e2) => {
    return e2 == null ? false : (e2 = e2.isMobXFlow, true === e2);
  };
  var Fi = (e2) => {
    e2.observers_ ? (e2 = e2.observers_, e2 = !!e2.size) : e2 = false;
    return e2;
  };
  var Wi = (e2, t2) => {
    var n2 = e2.observers_;
    n2.add(t2), n2 = e2.lowestObserverState_ | 0, n2 > (t2.dependenciesState_ | 0) && (e2.lowestObserverState_ = t2.dependenciesState_);
  };
  var wn = (e2) => {
    if (!e2.isPendingUnobservation) e2.isPendingUnobservation = true, X.pendingUnobservations.push(e2);
  };
  var kn = (e2, t2) => {
    var n2 = e2.observers_;
    n2.delete(t2), t2 = e2.observers_, t2.size || wn(e2);
  };
  var ee = () => {
    X.inBatch++;
  };
  var te = () => {
    var e2 = --X.inBatch;
    if (0 == e2) {
      Rn();
      var r2, n2 = X.pendingUnobservations, t2 = 0;
      while (t2 < n2.length) e2 = n2[t2], e2.isPendingUnobservation = false, r2 = e2.observers_, r2.size || (!e2.isBeingObserved || (e2.isBeingObserved = false, e2.onBUO()), _(e2, is) && e2.suspend_()), t2++;
      X.pendingUnobservations = [];
    }
  };
  var pe = (e2) => {
    var t2 = X.trackingDerivation;
    if (t2 != null) {
      var n2 = t2.runId_;
      n2 === e2.lastAccessedBy_ || (e2.lastAccessedBy_ = t2.runId_, n2 = t2.unboundDepsCount_ | 0, t2.newObserving_[n2] = e2, t2.unboundDepsCount_ = n2 + 1 | 0, !e2.isBeingObserved && X.trackingContext && (e2.isBeingObserved = true, e2.onBO()));
      return !!e2.isBeingObserved;
    } else {
      t2 = e2.observers_, !t2.size && X.inBatch && wn(e2);
    }
    return false;
  };
  var xn = (e2) => {
    var t2 = e2.lowestObserverState_;
    if (2 !== t2) e2.lowestObserverState_ = 2, e2.observers_.forEach(Bn);
  };
  var or = (e2) => {
    var t2 = e2.lowestObserverState_;
    if (2 !== t2) e2.lowestObserverState_ = 2, t2 = yt, yt = e2, e2.observers_.forEach(Wn), yt = t2;
  };
  var qe = (e2) => {
    ee(), xn(e2), te();
  };
  var ur = (e2) => {
    if (!e2.lowestObserverState_) e2.lowestObserverState_ = 1, e2.observers_.forEach(Vn);
  };
  var Fe = () => {
    let e2 = X.trackingDerivation;
    X.trackingDerivation = null;
    return e2;
  };
  var Ee = (e2) => {
    X.trackingDerivation = e2;
  };
  var Bi = (e2) => {
    if (0 != (e2.dependenciesState_ | 0)) {
      e2.dependenciesState_ = 0;
      var t2 = e2.observing_;
      e2 = t2.length;
      while (e2 > 0) {
        e2--;
        var n2 = t2[e2];
        n2.lowestObserverState_ = 0;
      }
    }
  };
  var Tt = (e2) => ht(e2) && true === e2.isMobXCaughtException;
  var Vt = (e2) => {
    var t2 = e2.dependenciesState_ | 0;
    if (0 == t2) return false;
    if (t2 == -1 || 2 == t2) return true;
    if (1 == t2) {
      t2 = true, t2 = Fe();
      var n2, s2, i2 = e2.observing_, o2 = i2.length, r2 = 0;
      while (r2 < o2) {
        n2 = i2[r2];
        if (_(n2, is)) {
          s2 = X.disableErrorBoundaries;
          if (true === s2) n2.get();
          else try {
            n2.get();
          } catch {
            Ee(t2);
            return true;
          }
          n2 = e2.dependenciesState_;
          if (2 === n2) {
            Ee(t2);
            return true;
          }
        }
        r2++;
      }
      Bi(e2);
      Ee(t2);
      return false;
    }
    return false;
  };
  var Vi = (e2) => {
    var o2 = e2.observing_, r2 = e2.newObserving_;
    e2.observing_ = r2;
    var i2, a2 = e2.unboundDepsCount_ | 0, n2 = 0, t2 = 0, s2 = 0;
    while (s2 < a2) i2 = r2[s2], 0 == (i2.diffValue | 0) && (i2.diffValue = 1, t2 != s2 && (r2[t2] = i2), t2++), i2 = i2.dependenciesState_, i2 !== void 0 && (i2 | 0) > n2 && (n2 = i2 | 0), s2++;
    r2.length = t2, e2.newObserving_ = null, i2 = o2.length;
    while (i2 > 0) i2--, s2 = o2[i2], 0 == (s2.diffValue | 0) && kn(s2, e2), s2.diffValue = 0;
    while (t2 > 0) t2--, i2 = r2[t2], 1 == (i2.diffValue | 0) && (i2.diffValue = 0, Wi(i2, e2));
    0 != n2 && (e2.dependenciesState_ = n2, e2.onBecomeStale_());
  };
  var zn = (e2, t2, n2) => {
    var i2, r2 = true;
    Bi(e2), 0 != (e2.runId_ | 0) ? (r2 = e2.observing_, r2 = r2.length) : r2 = 100, Object.assign(e2, { newObserving_: new globalThis.Array(r2), unboundDepsCount_: 0 }), r2 = (X.runId | 0) + 1 | 0, X.runId = r2, e2.runId_ = r2, r2 = X.trackingDerivation, X.trackingDerivation = e2, i2 = X, i2.inBatch = (X.inBatch | 0) + 1 | 0;
    var te2;
    i2 = X.disableErrorBoundaries;
    if (true === i2) te2 = t2.call(n2);
    else try {
      te2 = t2.call(n2);
    } catch (y2) {
      te2 = new ct(y2);
    }
    X.inBatch--;
    X.trackingDerivation = r2, Vi(e2);
    return te2;
  };
  var Wt = (e2) => {
    var n2 = e2.observing_;
    e2.observing_ = [];
    var t2 = n2.length;
    while (t2 > 0) t2--, kn(n2[t2], e2);
    e2.dependenciesState_ = -1;
  };
  var jn = (e2) => {
    !e2.onBOL || e2.onBOL.forEach(function(t2) {
      t2();
    });
  };
  var qn = (e2) => {
    !e2.onBUOL || e2.onBUOL.forEach(function(t2) {
      t2();
    });
  };
  var Ae = (e2, t2, n2) => {
    re(e2, t2, { __proto__: null, configurable: true, get: function() {
      return 0 != (this.flags_ & n2);
    }, set: function(t3) {
      t3 ? this.flags_ |= n2 : this.flags_ &= n2 ^ -1;
    } });
  };
  var Be = (e2, t2, n2, r2) => {
    var i2 = (0, function() {
      var i3 = r2 == null ? this : r2;
      return Nn(e2, n2, t2, i3, arguments);
    });
    Object.assign(i2, { isMobxAction: true, toString: function() {
      return t2.toString();
    } }), Yn && (_t.value = e2, re(i2, ss, _t));
    return i2;
  };
  var En = (e2, t2) => {
    var i2 = X.trackingDerivation;
    t2 = !t2 || i2 == null, ee();
    var r2 = !!X.allowStateChanges;
    t2 && Fe();
    var s2 = !!X.allowStateReads, n2 = Ut;
    Ut++;
    var o2 = mt;
    mt = n2, e2 = {}, Object.assign(e2, { runAsAction_: t2, prevDerivation_: i2, prevAllowStateChanges_: r2, prevAllowStateReads_: s2, notifySpy_: false, startTime_: 0, actionId_: n2, parentActionId_: o2 });
    return e2;
  };
  var Tn = (e2) => {
    mt != (e2.actionId_ | 0) && se(30), mt = e2.parentActionId_ | 0, e2.error_ === void 0 || (X.suppressReactionErrors = true), te(), !e2.runAsAction_ || Ee(e2.prevDerivation_), X.suppressReactionErrors = false;
  };
  var Nn = (e2, t2, n2, r2, i2) => {
    var l2 = En(e2, t2, r2, i2);
    try {
      return n2.apply(r2, i2);
    } catch (e3) {
      l2.error_ = e3;
      throw e3;
    } finally {
      Tn(l2);
    }
  };
  var Rn = () => {
    if (!(X.inBatch | 0) > 0 || X.isRunningReactions) Lt(Kn);
  };
  var Te = (e2) => {
    e2.interceptors_ !== void 0 ? (e2 = e2.interceptors_, e2 = e2.length > 0) : e2 = false;
    return e2;
  };
  var In = (e2, t2) => {
    e2.interceptors_ === void 0 && (e2.interceptors_ = []), e2 = e2.interceptors_, e2.push(t2);
    return vn(function() {
      var n2 = +e2.indexOf(t2);
      n2 != -1 && e2.splice(n2, 1);
    });
  };
  var Ne = (e2, t2) => {
    var D2 = Fe();
    try {
      var H2 = [];
      !e2.interceptors_ || (H2 = e2.interceptors_);
      var P2 = We.call(H2), F = P2.length, M = 0;
      while (M < F) {
        t2 = P2[M](t2), t2 && !t2.type && se(14);
        if (!t2) break;
        M++;
      }
      return t2;
    } finally {
      Ee(D2);
    }
  };
  var Se = (e2) => {
    e2.changeListeners_ !== void 0 ? (e2 = e2.changeListeners_, e2 = e2.length > 0) : e2 = false;
    return e2;
  };
  var Gi = (e2, t2) => {
    e2.changeListeners_ === void 0 && (e2.changeListeners_ = []), e2 = e2.changeListeners_, e2.push(t2);
    return vn(function() {
      var n2 = +e2.indexOf(t2);
      n2 != -1 && e2.splice(n2, 1);
    });
  };
  var Oe = (e2, t2) => {
    var n2 = Fe();
    e2 = e2.changeListeners_;
    if (!e2) {
      Ee(n2);
      return;
    }
    var r2 = We.call(e2), i2 = r2.length;
    e2 = 0;
    while (e2 < i2) r2[e2](t2), e2++;
    Ee(n2);
  };
  var $e = (e2) => {
    var f2 = Fe(), m2 = true;
    ee();
    try {
      return e2();
    } finally {
      te(), Ee(f2);
    }
  };
  var Ce = (e2, t2) => ze(function(i2, n2) {
    if (n2 && typeof n2.kind == Ao) return t2(e2, i2, n2);
  }, e2);
  var ut = /* @__PURE__ */ (function() {
    let e2 = (r2) => globalThis.Number(r2), t2 = (r2, i2) => {
      if (!r2) return false;
      var s2 = r2.isPrototypeOf;
      return typeof s2 == Qi ? true === r2.isPrototypeOf(i2) : (true === "constructor" in i2 ? (r2 = i2.constructor == r2, r2 = true === r2) : r2 = false, r2);
    }, n2 = (r2) => ge(r2) ? r2.slice() : it(r2) || oe(r2) ? me(r2.entries()) : st(r2) || ce(r2) ? me(r2.entries()) : r2;
    return function(r2, i2, s2, o2, u2) {
      if (r2 === i2) {
        return 0 !== r2 ? true : (s2 = 1 / (+e2(r2) | 0) | 0, r2 = Je(s2, 1 / (+e2(i2) | 0) | 0) || Je(e2(r2), e2(i2)), r2);
      }
      if (r2 == null || i2 == null) return false;
      if (r2 !== r2) return i2 !== i2;
      var a2 = typeof r2;
      if (a2 != Qi && a2 != js && typeof i2 != js) return false;
      a2 = Q().prototype, a2 = a2.toString.call(r2) + "";
      if (a2 != Q().prototype.toString.call(i2) + "") return false;
      if ("[object RegExp]" == a2 || "[object String]" == a2) return "" + r2 == "" + i2;
      if ("[object Number]" == a2) {
        r2 = e2(r2), i2 = e2(i2);
        if (!Je(r2, r2)) return !Je(i2, i2);
        if (0 === r2) {
          r2 = 1 / +r2;
          return Je(r2, 1 / +i2);
        }
        return r2 === i2;
      }
      if ("[object Date]" == a2 || "[object Boolean]" == a2) {
        r2 = e2(r2);
        return r2 === e2(i2);
      }
      if ("[object Symbol]" == a2) {
        s2 = globalThis.Symbol, r2 = s2.valueOf.call(r2);
        return r2 === globalThis.Symbol.valueOf.call(i2);
      }
      (a2 == Ra || a2 == Ia) && s2 >= 0 && (s2 = s2 + 1 | 0);
      var c2 = n2(r2);
      r2 = n2(i2);
      var l2 = "[object Array]" == a2;
      if (!l2) {
        if (typeof c2 != js || typeof r2 != js) return false;
        i2 = c2.constructor, a2 = r2.constructor;
        if (i2 !== a2 && !(typeof i2 == Qi && t2(i2, i2) && typeof a2 == Qi && t2(a2, a2)) && true === "constructor" in c2 && true === "constructor" in r2) return false;
      }
      if (0 == s2) return false;
      else {
        s2 < 0 && (s2 = -1);
      }
      o2 === void 0 && (o2 = [], u2 = []);
      i2 = o2.length;
      while (i2 > 0) {
        i2--;
        if (o2[i2] === c2) return u2[i2] === r2;
      }
      o2.push(c2);
      u2.push(r2);
      if (l2) {
        i2 = c2.length;
        if (i2 != r2.length) return false;
        while (i2 > 0) {
          i2--;
          if (!ut(c2[i2], r2[i2], s2 - 1 | 0, o2, u2)) return false;
        }
      } else {
        l2 = Q().keys(c2);
        var d2 = l2.length;
        if (Q().keys(r2).length != d2) return false;
        a2 = 0;
        while (a2 < d2) {
          i2 = l2[a2];
          if (Le.call(r2, i2)) {
            var h2 = c2[i2];
            i2 = r2[i2], i2 = ut(h2, i2, s2 - 1 | 0, o2, u2);
          } else {
            i2 = false;
          }
          if (!i2) return false;
          a2++;
        }
      }
      o2.pop();
      u2.pop();
      return true;
    };
  })();
  var ye = (e2) => e2.proxy_ ? e2.proxy_ : e2.target_;
  var Sn = (e2) => {
    var t2 = tn.get(e2);
    return t2 ? t2 : (t2 = { __proto__: null, get: function() {
      let t3 = this[Z];
      return t3.getObservablePropValue_(e2);
    }, set: function(n2) {
      let t3 = this[Z];
      return t3.setObservablePropValue_(e2, n2);
    } }, tn.set(e2, t2), t2);
  };
  var On = (e2, t2, n2, r2) => {
    var i2 = e2.target_;
    if (Le.call(i2, t2)) {
      if (ve(e2.values_, t2)) return e2.setObservablePropValue_(t2, n2);
      if (r2) {
        e2 = e2.target_;
        return true === Ie().set(e2, t2, n2);
      }
      e2.target_[t2] = n2;
      return true;
    }
    return e2.extend_(t2, { __proto__: null, value: n2, enumerable: true, writable: true, configurable: true }, e2.defaultAnnotation_, r2);
  };
  var Nt = /* @__PURE__ */ (function() {
    return function(n2, r2, i2, s2) {
      var o2 = n2.values_;
      o2 = o2.length, r2 > o2 ? r2 = o2 : r2 < 0 && (r2 = o2 + r2 | 0, r2 < 0 && (r2 = 0)), i2 < 0 && (i2 = 0), o2 = o2 - r2 | 0, i2 > o2 || (o2 = i2), s2 == null ? s2 = [] : Array.isArray(s2) || (i2 = i2.prototype, s2 = i2.slice.call(s2));
      if (Te(n2)) {
        i2 = Ne(n2, { __proto__: null, object: n2.proxy_, type: Cs, index: r2, removedCount: o2, added: s2 });
        if (!i2) return Zt;
        o2 = i2.removedCount | 0, s2 = i2.added;
      }
      if (0 != s2.length) {
        i2 = [];
        var a2 = s2.length, u2 = 0;
        while (u2 < a2) i2.push(n2.enhancer_(s2[u2], void 0)), u2++;
      } else {
        i2 = s2;
      }
      u2 = ((n3, r3, i3, s3) => {
        var o3 = n3.values_, N2 = s3.length, R2 = +N2, u3 = R2 | 0;
        if (0 == i3 && r3 == o3.length) {
          n3 = 0;
          while (n3 < u3) r3 = s3[n3], o3.push(r3), n3++;
          return Zt;
        }
        if (u3 < 1e4) {
          n3 = [], n3.push(r3), n3.push(i3), r3 = 0;
          while (r3 < s3.length) i3 = s3[r3], n3.push(i3), r3++;
          return o3.splice.apply(o3, n3);
        }
        n3 = r3 + i3 | 0;
        var a3 = We.call(o3, r3, n3);
        u3 = We.call(o3, n3, o3.length), n3 = o3.length, o3.length = n3 + s3.length - i3 | 0, n3 = 0;
        while (n3 < s3.length) o3[r3 + n3 | 0] = s3[n3], n3++;
        n3 = 0;
        while (n3 < u3.length) o3[r3 + s3.length + n3 | 0] = u3[n3], n3++;
        return a3;
      })(n2, r2, o2, i2);
      (0 != o2 || 0 != i2.length) && ((n3, r3, i3, s3) => {
        var a3, c2, u3 = Se(n3), o3 = null;
        u3 && (o3 = n3.proxy_, a3 = a3.name_, c2 = s3.length, o3 = { __proto__: null, observableKind: Xo, object: o3, debugObjectName: a3, type: Cs, index: r3, removed: s3, added: i3, removedCount: c2, addedCount: i3.length }), qe(n3.atom_), u3 && Oe(n3, o3);
      })(n2, r2, i2, u2);
      return n2.dehanceValues_(u2);
    };
  })();
  var ke = (e2) => {
    var t2 = globalThis.Array;
    typeof t2.prototype[e2] == Qi && (he[e2] = function() {
      let t3 = this[Z];
      pe(t3.atom_), t3 = t3.dehanceValues_(t3.values_);
      return t3[e2].apply(t3, arguments);
    });
  };
  var Ue = (e2) => {
    var t2 = globalThis.Array;
    typeof t2.prototype[e2] == Qi && (he[e2] = function(a2, b2) {
      var n2 = this, i2 = n2[Z];
      pe(i2.atom_);
      var s2 = i2.dehanceValues_(i2.values_);
      i2 = a2;
      var r2;
      r2 = b2;
      return s2[e2](function(s3, o2) {
        let a3 = r2;
        return i2.call(a3, s3, o2, n2);
      });
    });
  };
  var Un = (e2) => {
    var t2 = globalThis.Array;
    typeof t2.prototype[e2] == Qi && (he[e2] = function() {
      var t3 = this;
      let r2 = t3[Z];
      pe(r2.atom_), r2 = r2.dehanceValues_(r2.values_);
      let i2 = arguments[0];
      arguments[0] = function(n2, s2, o2) {
        return i2(n2, s2, o2, t3);
      };
      return r2[e2].apply(r2, arguments);
    });
  };
  var Rt = (e2, t2) => e2.dehancer !== void 0 ? e2.dehancer(t2) : t2;
  var et = /* @__PURE__ */ (function() {
    let e2 = (r2, i2) => typeof r2.has == Qi ? true === r2.has(i2) : false, t2 = (r2, i2) => {
      if (typeof r2.forEach == Qi) {
        r2.forEach(i2);
        return;
      }
      if (typeof r2.keys == Qi) {
        var s2 = r2.keys();
        r2 = s2.next();
        while (!r2.done) i2(r2.value), r2 = s2.next();
      }
    }, n2 = (o2, u2, a2) => {
      if (o2 == Su) {
        o2 = new globalThis.Set(), t2(u2, function(i3) {
          e2(a2, i3) && o2.add(i3);
        });
        return o2;
      }
      if (o2 == Ma) {
        o2 = new globalThis.Set(u2), t2(a2, function(n3) {
          o2.add(n3);
        });
        return o2;
      }
      if (o2 == Va) {
        o2 = new globalThis.Set(u2), t2(a2, function(n3) {
          o2.delete(n3);
        });
        return o2;
      }
      if (o2 == ru) {
        o2 = new globalThis.Set(u2), t2(a2, function(n3) {
          true === o2.has(n3) ? o2.delete(n3) : o2.add(n3);
        });
        return o2;
      }
      if (o2 == Wa) {
        var r2 = true;
        t2(u2, function(i3) {
          e2(a2, i3) || (r2 = false);
        });
        return r2;
      }
      if (o2 == Sa) {
        var i2 = true;
        t2(a2, function(r3) {
          true === u2.has(r3) || (i2 = false);
        });
        return i2;
      }
      var s2 = true;
      t2(u2, function(i3) {
        e2(a2, i3) && (s2 = false);
      });
      return s2;
    };
    return function(r2) {
      let i2 = ae.prototype;
      i2[r2] = function(s2) {
        var o2 = this.atom_;
        pe(o2);
        return (r2 == Su || r2 == Ma || r2 == ru || r2 == ba) && st(s2) && !ce(s2) && typeof s2[r2] == Qi ? s2[r2](this) : (o2 = new globalThis.Set(this), typeof o2[r2] == Qi ? o2[r2].apply(o2, arguments) : n2(r2, o2, s2));
      };
    };
  })();
  var It = (e2) => !e2 ? false : le(e2) || e2[Z] || _(e2, Pu) || _(e2, Vo) || _(e2, is);
  var St = (e2) => {
    var t2 = e2.deep;
    return true === t2 ? Ze : (t2 = e2.deep, false === t2 ? lt : (e2.defaultDecorator ? (t2 = e2.defaultDecorator, t2 = !!t2.options_) : t2 = false, t2 && e2.defaultDecorator.options_.enhancer_ ? e2.options_.enhancer_ : Ze));
  };
  var Ve = (e2) => !!e2 ? e2 : sn;
  var Ot = (e2, t2) => {
    let n2 = {};
    Object.assign(n2, { annotationType_: e2, options_: t2, make_: on, extend_: _n });
    return n2;
  };
  var Kt = (e2, t2) => {
    let n2 = {};
    Object.assign(n2, { annotationType_: e2, options_: t2, make_: on, extend_: $n });
    return n2;
  };
  var An = (e2, t2, n2, r2, i2) => {
    var s2 = r2.value;
    t2.options_ ? (r2 = t2.options_, r2 = !!r2.bound) : r2 = false, r2 && (s2 = s2.bind(ye(e2)));
    var o2 = we(n2);
    t2.options_ ? (n2 = t2.options_, n2 = !!n2.name) : n2 = false, n2 && (n2 = t2.options_, o2 = n2.name + ""), t2.options_ ? (n2 = t2.options_, n2 = !!n2.autoAction) : n2 = false, n2 = n2;
    var u2 = void 0;
    t2.options_ ? (t2 = t2.options_, t2 = !!t2.bound) : t2 = false, t2 && (u2 = ye(e2)), i2 ? (e2 = !!e2.isPlainObject_, t2 = false) : (e2 = true, t2 = true);
    return { __proto__: null, value: Be(o2, s2, n2, u2), configurable: e2, enumerable: false, writable: t2 };
  };
  var ft = (e2, t2) => {
    let n2 = {};
    Object.assign(n2, { annotationType_: e2, options_: t2, make_: er, extend_: tr });
    return n2;
  };
  var Xt = (e2, t2, n2, r2) => {
    e2 = rt(e2)[Z], e2.lazyObservableKeys_ || (e2.lazyObservableKeys_ = new (be())()), e2.lazyObservableKeys_.set(n2, function() {
      var s2 = Ze;
      if (t2.options_) {
        var i2 = t2.options_;
        i2 = !!i2.enhancer_;
      } else {
        i2 = false;
      }
      i2 && (i2 = t2.options_, s2 = i2.enhancer_);
      i2 = na + we(n2);
      return new ie(r2, s2, i2, false);
    });
    return e2;
  };
  var Cn = (e2, t2, n2, r2) => {
    t2 = t2.value, ot(t2) || (t2 = Xe(t2)), n2 && (t2 = t2.bind(ye(e2)), t2.isMobXFlow = true), r2 ? (e2 = !!e2.isPlainObject_, n2 = false) : (e2 = true, n2 = true);
    return { __proto__: null, value: t2, configurable: e2, enumerable: false, writable: n2 };
  };
  var Ln = (e2) => e2.scheduler ? e2.scheduler : e2.delay ? function(n2) {
    let t2 = e2.delay;
    return globalThis.setTimeout(n2, t2);
  } : function(t2) {
    return t2();
  };
  var hr = (e2, t2) => !e2 ? t2 : function() {
    try {
      return t2.apply(this, arguments);
    } catch (i2) {
      e2.call(this, i2);
      return;
    }
  };
  var Hi = (r2, i2, s2) => {
    s2 = s2 || {};
    var e2, t2;
    if (typeof s2.timeout == wa) {
      var a2 = new globalThis.Error("WHEN_TIMEOUT"), o2 = function() {
        var r3 = e2[Z];
        r3.isDisposed || (e2(), s2.onError ? s2.onError(a2) : jt(a2));
      }, u2 = s2.timeout;
      t2 = globalThis.setTimeout(o2, u2);
    }
    s2.name || (s2.name = "When");
    var n2 = Be("When-effect", i2, false, void 0);
    e2 = Mt(function(i3) {
      if ($t(false, r2)) i3.dispose(), t2 && globalThis.clearTimeout(t2), n2();
    }, s2);
    return e2;
  };
  var Dn = (e2, t2, n2) => {
    true === n2 && (n2 = e2.defaultAnnotation_);
    if (false !== n2) {
      if (true !== t2 in e2.target_) {
        var i2 = n2.annotationType_, s2 = e2.name_ + "." + we(t2), r2 = [];
        r2.push(i2), r2.push(s2), Qe(1, r2);
      }
      for (r2 = e2.target_; ; ) {
        i2 = r2 && r2 !== Q().prototype;
        if (!i2) break;
        if (i2 = Q().getOwnPropertyDescriptor(r2, t2)) {
          i2 = n2.make_(e2, t2, i2, r2);
          if (0 === i2) return;
          if (1 === i2) break;
        }
        r2 = Q().getPrototypeOf(r2);
      }
    }
  };
  var Yi = (n2, r2, i2) => {
    if (_(n2, is)) {
      var t2, e2 = true;
      return Mt(function() {
        var u2 = n2.get, o2 = n2.get();
        if (!e2 || i2) {
          var s2 = Fe(), b2 = n2.name_;
          r2({ __proto__: null, observableKind: $u, debugObjectName: b2, type: go, object: n2, newValue: o2, oldValue: t2 }), Ee(s2);
        }
        e2 = false;
        t2 = o2;
      });
    }
    i2 && (i2 = n2.name_, r2({ __proto__: null, observableKind: ls, debugObjectName: i2, object: n2, type: go, newValue: n2.value_, oldValue: void 0 }));
    return Gi(n2, r2);
  };
  var Hn = (n2, r2) => {
    var e2, s2 = r2[1], t2 = s2;
    r2.length > 2 && typeof r2[2] == Qi ? (e2 = Ge(r2[0], r2[1]), t2 = r2[2]) : e2 = Ge(r2[0]), e2[n2] ? (r2 = e2[n2], r2.add(t2)) : (r2 = e2, r2[n2] = new globalThis.Set(), r2 = e2[n2], r2.add(t2));
    return function() {
      var r3 = e2[n2];
      r3 && (r3.delete(t2), 0 == r3.size && delete e2[n2]);
    };
  };
  var at = (e2, t2) => {
    if (e2 == null || typeof e2 != js || !It(e2)) return e2;
    if (_(e2, po) || _(e2, is)) return at(e2.get(), t2);
    if (ve(t2, e2)) return t2.get(e2);
    if (ge(e2)) {
      var r2 = [];
      t2.set(e2, r2);
      var i2, s2, n2 = 0;
      while (n2 < e2.length) r2[n2] = at(e2[n2], t2), n2++;
      return r2;
    }
    if (ce(e2)) {
      n2 = new globalThis.Set(), t2.set(e2, n2), r2 = me(e2.values()), e2 = 0;
      while (e2 < r2.length) n2.add(at(r2[e2], t2)), e2++;
      return n2;
    }
    if (oe(e2)) {
      r2 = new (be())(), t2.set(e2, r2), n2 = me(e2.entries()), e2 = 0;
      while (e2 < n2.length) i2 = n2[e2][0], s2 = n2[e2], r2.set(i2, at(s2[1], t2)), e2++;
      return r2;
    }
    i2 = {};
    t2.set(e2, i2), r2 = mn(e2), n2 = 0;
    while (n2 < r2.length) s2 = Q().prototype, true === s2.propertyIsEnumerable.call(e2, r2[n2]) && (s2 = r2[n2], i2[s2] = at(e2[r2[n2]], t2)), n2++;
    return i2;
  };
  var Pn = (e2) => {
    var n2 = { __proto__: null, name: e2.name_ };
    if (e2.observing_) {
      var t2 = e2.observing_;
      t2 = t2.length > 0;
    } else {
      t2 = false;
    }
    if (t2) {
      var r2 = [];
      for (t2 = 0; ; t2++) {
        var i2 = e2.observing_;
        if (t2 >= i2.length) break;
        r2.push(Pn(e2.observing_[t2]));
      }
      n2.dependencies = r2;
    }
    return n2;
  };
  var Mi = (e2) => {
    var t2 = { __proto__: null, name: e2.name_ };
    if (Fi(e2)) {
      e2 = e2.observers_;
      var n2 = me(e2.values()), r2 = [];
      e2 = 0;
      while (e2 < n2.length) r2.push(Mi(n2[e2])), e2++;
      t2.observers = r2;
    }
    return t2;
  };
  var e = globalThis.Object;
  e = e.prototype;
  var Le = e.hasOwnProperty;
  e = globalThis.Object;
  var Fn = e.is;
  e = globalThis.Array.prototype;
  var We = e.slice;
  e = globalThis.Object.prototype;
  var Mn = e.isPrototypeOf;
  var Gn = Q().toString();
  var tt = (0, function() {
  });
  e = [], Q().freeze(e);
  var Zt = e;
  e = { __proto__: null }, Q().freeze(e);
  var Jt = e;
  var Z = xe()("mobx administration");
  var mt = 0;
  var Ut = 1;
  var gt = true;
  var Qt = false;
  var _t = { __proto__: null, value: va, configurable: true, writable: false, enumerable: false };
  var t = function() {
  };
  t = Q().getOwnPropertyDescriptor(t, ss), e = t != null && t.configurable;
  var Yn = e;
  var Re = [];
  Re.push(ec), Re.push(Aa), Re.push(As), Re.push(no), Re.push(Bs), Re.push(Us), Re.push(cs), Re.push(ds), Re.push(Fa), Re.push(Ws);
  var X = sr();
  var At = (0, function(t2, n2) {
    return Je(t2, n2);
  });
  e = true;
  var r = (0, function(t2) {
    var e2 = globalThis.console;
    e2.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
  });
  var Bn = (0, function(t2) {
    t2.dependenciesState_ || t2.onBecomeStale_(), t2.dependenciesState_ = 2;
  });
  var Vn = (0, function(t2) {
    t2.dependenciesState_ || (t2.dependenciesState_ = 1, t2.onBecomeStale_());
  });
  var yt = void 0;
  var Wn = (0, function(t2) {
    var e2 = t2.dependenciesState_;
    1 === e2 ? t2.dependenciesState_ = 2 : e2 || (yt.lowestObserverState_ = 0);
  });
  var i = (0, function(t2) {
    var u2 = Fe();
    try {
      return t2();
    } finally {
      Ee(u2);
    }
  });
  var $t = (0, function(a2, b2) {
    var e2 = a2;
    e2 = !!e2;
    var n2 = !!X.allowStateChanges;
    X.allowStateChanges = e2;
    try {
      return b2();
    } finally {
      X.allowStateChanges = n2;
    }
  });
  var ct = class {
    constructor(t2) {
      this.cause = t2;
    }
  };
  re(ct, ss, { __proto__: null, value: "CaughtException", configurable: e }), t = ct.prototype, t.isMobXCaughtException = e;
  var fe = class {
    constructor(s2 = "Atom") {
      var t2 = s2 + "";
      this.name_ = t2, this.observers_ = new globalThis.Set(), this.lastAccessedBy_ = 0, this.lowestObserverState_ = -1, this.flags_ = 0;
    }
    onBO() {
      jn(this);
    }
    onBUO() {
      qn(this);
    }
    reportObserved() {
      return pe(this);
    }
    reportChanged() {
      qe(this);
    }
    toString() {
      return this.name_;
    }
  };
  Ye("Atom", fe), t = fe.prototype, Ae(t, Ks, 1), t = fe.prototype, Ae(t, lo, 2), t = fe.prototype, re(t, ko, { __proto__: null, configurable: e, get: function() {
    return 0 != (this.flags_ & 4) ? 1 : 0;
  }, set: function(n2) {
    1 == (n2 | 0) ? this.flags_ |= 4 : this.flags_ &= 4 ^ -1;
  } });
  var Ct = (0, function(a2, b2, c2) {
    var e2 = a2 !== void 0 ? new fe(a2) : new fe();
    if (b2 !== tt) {
      e2.onBOL = new globalThis.Set();
      var t2 = e2.onBOL;
      t2.add(b2);
    }
    c2 === tt || (e2.onBUOL = new globalThis.Set(), t2 = e2.onBUOL, t2.add(c2));
    return e2;
  });
  var Lt = (e2) => e2();
  var Kn = () => {
    X.isRunningReactions = true;
    var n2, i2, r2, s2, e2 = X.pendingReactions, t2 = 0;
    while (e2.length > 0) {
      t2++, 100 == t2 && (n2 = "[mobx] cycle in reaction: " + e2[0], r2 = globalThis.console, r2.error(n2), e2.splice(0, e2.length)), r2 = e2.splice(0, e2.length), s2 = r2.length, n2 = 0;
      while (n2 < s2) i2 = r2[n2], i2.runReaction_(), n2++;
    }
    X.isRunningReactions = false;
  };
  var ue = class {
    constructor(s2 = _u, u2, c2, h2) {
      var n2 = s2 + "";
      this.name_ = n2, this.onInvalidate_ = void 0, u2 !== void 0 && (this.onInvalidate_ = u2), c2 && (this.errorHandler_ = c2), h2 !== void 0 && (this.requiresObservable_ = h2), this.observing_ = [], this.newObserving_ = null, this.dependenciesState_ = -1, this.runId_ = 0, this.unboundDepsCount_ = 0, this.flags_ = 0;
    }
    onBecomeStale_() {
      this.schedule_();
    }
    schedule_() {
      if (!this.isScheduled) this.isScheduled = true, X.pendingReactions.push(this), Rn();
    }
    runReaction_() {
      if (!this.isDisposed) {
        ee(), this.isScheduled = false;
        var t2 = X.trackingContext;
        X.trackingContext = this;
        if (Vt(this)) {
          this.isTrackPending = true;
          try {
            this.onInvalidate_();
            var n2, e2 = false;
            if (e2) {
            }
          } catch (n3) {
            this.reportExceptionInDerivation_(n3);
          }
        }
        X.trackingContext = t2;
        te();
      }
    }
    track(t2) {
      if (!this.isDisposed) {
        ee(), this.isRunning = true;
        var n2 = X.trackingContext;
        X.trackingContext = this, t2 = zn(this, t2, void 0), X.trackingContext = n2, this.isRunning = false, this.isTrackPending = false, !this.isDisposed || Wt(this), Tt(t2) && this.reportExceptionInDerivation_(t2.cause), te();
      }
    }
    reportExceptionInDerivation_(t2) {
      if (this.errorHandler_) {
        this.errorHandler_(t2, this);
        return;
      }
      !X.disableErrorBoundaries || jt(t2);
      var n2 = "[mobx] uncaught error in '" + this + "'";
      if (!X.suppressReactionErrors) {
        var r2 = globalThis.console;
        r2.error(n2, t2);
      }
      r2 = X.globalReactionErrorHandlers;
      var i2 = r2.length;
      n2 = 0;
      while (n2 < i2) r2[n2](t2, this), n2++;
    }
    dispose() {
      this.isDisposed || (this.isDisposed = true, this.isRunning || (ee(), Wt(this), te()));
    }
    getDisposer_(n2) {
      var t2 = this, e2 = () => {
        var r3 = t2.dispose;
        t2.dispose(), n2 != null && typeof n2.removeEventListener == Qi && n2.removeEventListener(wu, e2);
      };
      n2 != null && typeof n2.addEventListener == Qi && n2.addEventListener(wu, e2), e2[Z] = t2;
      if (true === "dispose" in globalThis.Symbol) {
        var r2 = globalThis.Symbol;
        r2 = typeof r2.dispose == Yu;
      } else {
        r2 = false;
      }
      r2 && (e2[globalThis.Symbol.dispose] = e2);
      return e2;
    }
    toString() {
      return "Reaction[" + this.name_ + "]";
    }
  };
  Ye(_u, ue), Ae(ue.prototype, Fs, 1), Ae(ue.prototype, cu, 2), Ae(ue.prototype, Wo, 4), t = ue.prototype, Ae(t, Ku, 8), t = ue.prototype, re(t, ko, { __proto__: null, configurable: e, get: function() {
    return 0 != (this.flags_ & 16) ? 1 : 0;
  }, set: function(n2) {
    1 == (n2 | 0) ? this.flags_ |= 16 : this.flags_ &= 16 ^ -1;
  } });
  var s = (0, function(t2) {
    let e2 = X.globalReactionErrorHandlers;
    e2.push(t2);
    return function() {
      var d2 = X.globalReactionErrorHandlers, h2 = +d2.indexOf(t2);
      h2 >= 0 && X.globalReactionErrorHandlers.splice(h2, 1);
    };
  });
  var ne = class {
    constructor(t2) {
      t2.get || se(31), this.derivation = t2.get;
      var n2 = t2.name ? t2.name + "" : za;
      this.name_ = n2, t2.set ? this.setter_ = Be("ComputedValue-setter", t2.set, false, void 0) : this.setter_ = void 0, this.equals_ = At, !t2.equals || (this.equals_ = t2.equals), this.scope_ = t2.context, this.requiresReaction_ = t2.requiresReaction, this.keepAlive_ = !!t2.keepAlive, this.dependenciesState_ = -1, this.observing_ = [], t2 = null, this.newObserving_ = t2, this.observers_ = new globalThis.Set(), this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = 0, this.unboundDepsCount_ = 0, this.value_ = new ct(t2), this.flags_ = 0;
    }
    onBecomeStale_() {
      ur(this);
    }
    onBO() {
      jn(this);
    }
    onBUO() {
      qn(this);
    }
    computeValue_(t2) {
      this.isComputing = true;
      var j2, n2 = false;
      if (t2) t2 = this.derivation, j2 = zn(this, t2, this.scope_);
      else {
        t2 = X.disableErrorBoundaries;
        if (true === t2) j2 = this.derivation.call(this.scope_);
        else try {
          j2 = this.derivation.call(this.scope_);
        } catch (h2) {
          j2 = new ct(h2);
        }
      }
      this.isComputing = false;
      return j2;
    }
    trackAndCompute() {
      var r2 = this.value_, t2 = (this.dependenciesState_ | 0) == -1, n2 = this.computeValue_(true);
      t2 = t2 || Tt(r2) || Tt(n2) || true !== this.equals_(r2, n2), t2 && (this.value_ = n2);
      return t2;
    }
    get() {
      if (this.isComputing) {
        var n2 = this.name_, r2 = this.derivation, t2 = [];
        t2.push(n2), t2.push(r2), Qe(32, t2);
      }
      !X.inBatch ? (t2 = this.observers_, t2 = !t2.size) : t2 = false;
      t2 && !this.keepAlive_ ? Vt(this) && (ee(), this.value_ = this.computeValue_(false), te()) : (pe(this), Vt(this) && (t2 = X.trackingContext, this.keepAlive_ && !t2 && (X.trackingContext = this), !this.trackAndCompute() || or(this), X.trackingContext = t2));
      var e2 = this.value_;
      Tt(e2) && jt(e2.cause);
      return e2;
    }
    suspend_() {
      this.keepAlive_ || (Wt(this), this.value_ = void 0);
    }
    warnAboutUntrackedRead_() {
    }
    toString() {
      let t2 = this.name_ + "[", e2 = this.derivation;
      return t2 + e2.toString() + "]";
    }
    valueOf() {
      return bn(this.get());
    }
    set(t2) {
      if (this.setter_) {
        !this.isRunningSetter || je(33, this.name_), this.isRunningSetter = true;
        try {
          this.setter_.call(this.scope_, t2);
        } finally {
          this.isRunningSetter = false;
        }
      } else je(34, this.name_);
    }
  };
  t = ne.prototype;
  var n = xe().toPrimitive;
  t[n] = function() {
    return this.valueOf();
  }, Ye(za, ne), Ae(ne.prototype, au, 1), Ae(ne.prototype, Mo, 2), Ae(ne.prototype, Ks, 4), Ae(ne.prototype, lo, 8), t = ne.prototype, re(t, ko, { __proto__: null, configurable: e, get: function() {
    return 0 != (this.flags_ & 16) ? 1 : 0;
  }, set: function(n2) {
    1 == (n2 | 0) ? this.flags_ |= 16 : this.flags_ &= 16 ^ -1;
  } });
  var Xn = (0, function() {
    var e2 = X.pendingReactions;
    (0 != e2.length || 0 != (X.inBatch | 0) || X.isRunningReactions) && se(36), Qt = true;
    if (gt) e2 = globalThis, 0 == --e2.__mobxInstanceCount && (e2.__mobxGlobals = void 0), X = Et();
  });
  var o = (0, function() {
    return X;
  });
  var u = (0, function() {
    var e2, n2 = Et(), r2 = Q().keys(n2), i2 = r2.length, t2 = 0;
    while (t2 < i2) e2 = r2[t2], +Re.indexOf(e2) == -1 && (X[e2] = n2[e2]), t2++;
    X.allowStateChanges = !X.enforceActions;
  });
  var a = (0, function(a2, b2) {
    ee();
    try {
      return a2.apply(b2);
    } finally {
      te();
    }
  });
  var J = void 0;
  var bt = void 0;
  var nt = void 0;
  var Ke;
  var vt = void 0;
  var Dt = void 0;
  var Xe = void 0;
  var Ht = void 0;
  var en = void 0;
  var wt = void 0;
  var Ze = void 0;
  var kt = [];
  var lt = (0, function(t2) {
    return t2;
  });
  var ie = class extends fe {
    constructor(o2, i2, a2 = la, T2, h2) {
      var n2 = a2 + "";
      T2;
      var r2 = At;
      h2 && (r2 = h2), super(n2), this.enhancer_ = i2, this.name_ = n2, this.equals_ = r2, this.hasUnreportedChange_ = false, this.value_ = i2(o2, void 0, n2);
    }
  };
  t = ie.prototype;
  n = fe.prototype, Q().setPrototypeOf(t, n), t = ie.prototype, t.constructor = ie, t = ie.prototype, t.prepareNewValue_ = function(t2) {
    if (Te(this)) {
      t2 = Ne(this, { __proto__: null, object: this, type: go, newValue: t2 });
      if (!t2) return X.UNCHANGED;
      t2 = t2.newValue;
    }
    t2 = this.enhancer_(t2, this.value_, this.name_);
    return true === this.equals_(this.value_, t2) ? X.UNCHANGED : t2;
  }, t = ie.prototype, t.setNewValue_ = function(t2) {
    var n2 = this.value_;
    this.value_ = t2, qe(this), Se(this) && Oe(this, { __proto__: null, type: go, object: this, newValue: t2, oldValue: n2 });
  }, t = ie.prototype, t.set = function(t2) {
    t2 = this.prepareNewValue_(t2), t2 === X.UNCHANGED || this.setNewValue_(t2);
  }, t = ie.prototype, t.get = function() {
    pe(this);
    return this.dehancer === void 0 ? this.value_ : this.dehancer(this.value_);
  }, t = ie.prototype, t.raw = function() {
    return this.value_;
  }, t = ie.prototype, t.toJSON = function() {
    return this.get();
  }, t = ie.prototype, t.toString = function() {
    let t2 = this.name_ + "[";
    return t2 + this.value_ + "]";
  }, t = ie.prototype, t.valueOf = function() {
    return bn(this.get());
  }, t = ie.prototype, n = xe().toPrimitive, t[n] = function() {
    return this.valueOf();
  }, Ye(la, ie);
  var tn = new (be())();
  var de = class {
    constructor(r2, s2, u2, l2) {
      this.target_ = r2, s2 ? this.values_ = s2 : this.values_ = new (be())(), this.name_ = u2 + "", this.defaultAnnotation_ = en, l2 && (this.defaultAnnotation_ = l2), this.keysAtom_ = new fe("ObservableObject.keys"), this.isPlainObject_ = Pe(this.target_);
    }
    materializeLazyComputed_(t2) {
      if (!!this.lazyComputedKeys_) {
        var n2 = this.lazyComputedKeys_;
        if (n2 = n2.get(t2)) {
          var r2 = this.lazyComputedKeys_;
          r2.delete(t2), r2 = this.lazyComputedKeys_, 0 == r2.size && (this.lazyComputedKeys_ = void 0), n2 = n2(), this.values_.set(t2, n2);
          return n2;
        }
      }
    }
    materializeLazyObservable_(t2) {
      if (!!this.lazyObservableKeys_) {
        var n2 = this.lazyObservableKeys_;
        if (n2 = n2.get(t2)) {
          var r2 = this.lazyObservableKeys_;
          r2.delete(t2), r2 = this.lazyObservableKeys_, 0 == r2.size && (this.lazyObservableKeys_ = void 0), n2 = n2(), this.values_.set(t2, n2);
          return n2;
        }
      }
    }
    getObservablePropValue_(t2) {
      var n2 = this.values_;
      n2 = n2.get(t2), n2 = n2 || this.materializeLazyComputed_(t2), n2 = n2 || this.materializeLazyObservable_(t2);
      return n2.get();
    }
    setObservablePropValue_(t2, n2) {
      var r2 = this.values_;
      r2 = r2.get(t2), r2 = r2 || this.materializeLazyComputed_(t2), r2 = r2 || this.materializeLazyObservable_(t2);
      if (_(r2, is)) {
        r2.set(n2);
        return true;
      }
      if (Te(this)) {
        n2 = Ne(this, { __proto__: null, type: go, object: ye(this), name: t2, newValue: n2 });
        if (!n2) return null;
        n2 = n2.newValue;
      }
      n2 = r2.prepareNewValue_(n2);
      if (n2 !== X.UNCHANGED) {
        var s2 = Se(this), i2 = null;
        if (s2 || false) i2 = this.name_, i2 = { __proto__: null, type: go, observableKind: js, debugObjectName: i2, object: ye(this), oldValue: r2.value_, name: t2, newValue: n2 };
        r2.setNewValue_(n2), s2 && Oe(this, i2);
      }
      return true;
    }
    get_(t2) {
      if (X.trackingDerivation) {
        var n2 = this.target_;
        n2 = !Le.call(n2, t2);
      } else {
        n2 = false;
      }
      n2 && this.has_(t2);
      return this.target_[t2];
    }
    set_(t2, n2) {
      return On(this, t2, n2, false);
    }
    has_(t2) {
      if (!X.trackingDerivation) return true === t2 in this.target_;
      this.pendingKeys_ || (this.pendingKeys_ = new (be())());
      var n2 = this.pendingKeys_;
      n2 = n2.get(t2), n2 = n2 || ie, n2 = new n2(true === t2 in this.target_, lt, "ObservableObject.key?", false), this.pendingKeys_.set(t2, n2);
      return n2.get();
    }
    extend_(a2, b2, c2, d2) {
      var n2 = c2;
      true === n2 && (n2 = this.defaultAnnotation_);
      if (false === n2) return this.defineProperty_(a2, b2, d2);
      var e2 = n2.extend_(this, a2, b2, d2);
      if (e2) {
      }
      return e2;
    }
    notifyPropertyAddition_(t2, n2) {
      var r2 = Se(this);
      (r2 || false) && (n2 = { __proto__: null, type: Ls, observableKind: js, debugObjectName: this.name_, object: ye(this), name: t2, newValue: n2 }, r2 && Oe(this, n2)), !this.pendingKeys_ || (n2 = this.pendingKeys_, t2 = n2.get(t2), !t2 || t2.set(true)), qe(this.keysAtom_);
    }
    defineProperty_(t2, n2, r2) {
      r2 = !!r2;
      try {
        ee();
        var B = this.delete_(t2);
        if (!B) return B;
        if (Te(this)) {
          var i2 = ye(this), V = Ne(this, { __proto__: null, object: i2, name: t2, type: Ls, newValue: n2.value });
          if (!V) return null;
          i2 = n2.value, i2 === V.newValue || (i2 = n2 = ze({}, n2), n2.value = V.newValue);
        }
        if (r2 && (r2 = this.target_, true !== Ie().defineProperty(r2, t2, n2))) return false;
        else {
          re(this.target_, t2, n2);
        }
        this.notifyPropertyAddition_(t2, n2.value);
      } finally {
        te();
      }
      return true;
    }
    defineObservableProperty_(n2, Ee2, r2, a2) {
      var t2 = a2;
      try {
        ee();
        var Ue2 = this.delete_(n2);
        if (!Ue2) return Ue2;
        if (Te(this)) {
          var Ae2 = Ne(this, { __proto__: null, object: ye(this), name: n2, type: Ls, newValue: Ee2 });
          if (!Ae2) return null;
          Ee2 = Ae2.newValue;
        }
        var Ce2 = Sn(n2), Pe2 = true;
        !X.safeDescriptors || (Pe2 = !!this.isPlainObject_);
        var s2 = Ce2.get, Fe2 = { __proto__: null, configurable: Pe2, enumerable: true, get: s2, set: Ce2.set };
        if (t2 && (t2 = this.target_, true !== Ie().defineProperty(t2, n2, Fe2))) return false;
        else {
          re(this.target_, n2, Fe2);
        }
        var Be2 = new ie(Ee2, r2, Bu, false);
        this.values_.set(n2, Be2), this.notifyPropertyAddition_(n2, Be2.value_);
      } finally {
        te();
      }
      return true;
    }
    defineComputedProperty_(t2, n2, r2) {
      r2 = !!r2;
      try {
        ee();
        var be2 = this.delete_(t2);
        if (!be2) return be2;
        if (Te(this)) {
          var ve2 = Ne(this, { __proto__: null, object: ye(this), name: t2, type: Ls, newValue: void 0 });
          if (!ve2) return null;
        }
        n2.name || (n2.name = Bu);
        n2.context = ye(this);
        var ke2 = Sn(t2), xe2 = true;
        !X.safeDescriptors || (xe2 = !!this.isPlainObject_);
        var s2 = ke2.get, ze2 = { __proto__: null, configurable: xe2, enumerable: false, get: s2, set: ke2.set };
        if (r2 && (r2 = this.target_, true !== Ie().defineProperty(r2, t2, ze2))) return false;
        else {
          re(this.target_, t2, ze2);
        }
        this.values_.set(t2, new ne(n2));
        this.notifyPropertyAddition_(t2, void 0);
      } finally {
        te();
      }
      return true;
    }
    delete_(t2, n2) {
      var r2 = !!n2;
      n2 = this.target_;
      if (!Le.call(n2, t2)) return true;
      if (Te(this) && !Ne(this, { __proto__: null, object: ye(this), name: t2, type: ka })) return null;
      try {
        ee();
        var st2 = Se(this);
        n2 = false;
        var at2, ot2 = n2, i2 = this.values_, re2 = i2.get(t2);
        if (!re2 && (st2 || ot2)) {
          n2 = this.target_;
          var ht2 = Q().getOwnPropertyDescriptor(n2, t2);
          ht2 && (at2 = ht2.value);
        }
        if (r2 && (n2 = this.target_, true !== Ie().deleteProperty(n2, t2))) return false;
        else {
          n2 = this.target_, true === Ie().deleteProperty(n2, t2) || gn("Cannot delete property '" + we(t2) + "'");
        }
        n2 = false;
        n2 && delete this.appliedAnnotations_[t2], re2 && (n2 = this.values_, n2.delete(t2), _(re2, po) && (at2 = re2.value_), xn(re2)), qe(this.keysAtom_);
        if (this.pendingKeys_) {
          n2 = this.pendingKeys_;
          var ft2 = n2.get(t2);
          ft2 && (n2 = ft2.set, r2 = ft2, n2.call(ft2, true === t2 in this.target_));
        }
        if (st2 || ot2) {
          var jt2 = { __proto__: null, type: ka, observableKind: js, object: ye(this), debugObjectName: this.name_, oldValue: at2, name: t2 };
          if (t2 = false) {
          }
          st2 && Oe(this, jt2);
          if (false) {
          }
        }
      } finally {
        te();
      }
      return true;
    }
    ownKeys_() {
      pe(this.keysAtom_);
      let e2 = this.target_;
      return Ie().ownKeys(e2);
    }
    keys_() {
      pe(this.keysAtom_);
      let e2 = this.target_;
      return Q().keys(e2);
    }
  };
  t = de.prototype;
  Ye("ObservableObjectAdministration", de);
  var rt = (0, function(a2, b2) {
    var e2;
    e2 = b2;
    if (Le.call(a2, Z)) return a2;
    var t2;
    t2 = e2 && e2.name ? e2.name + "" : "ObservableObject", e2 = new de(a2, new (be())(), t2, ((e3) => {
      if (e3) {
        if (e3.defaultDecorator !== void 0) return e3.defaultDecorator;
        if (e3.autoBind || false === e3.deep) {
          var t3 = {};
          Object.assign(t3, { annotationType_: "true", options_: e3, make_: nn, extend_: rn });
          return t3;
        }
      }
    })(e2)), re(a2, Z, { __proto__: null, enumerable: false, writable: true, configurable: true, value: e2 });
    return a2;
  });
  kt.push({ __proto__: null, has: function(n2, u2) {
    let e2 = n2[Z];
    e2 = e2.has_;
    return e2.call(n2[Z], u2);
  }, get: function(t2, n2) {
    var e2;
    X.trackingDerivation && !Le.call(t2, n2) && (e2 = t2[Z], e2.has_(n2));
    return t2[n2];
  }, set: function(t2, n2, r2) {
    if (!Bt(n2)) return false;
    var e2 = On(t2[Z], n2, r2, true);
    return e2 == null ? true : (e2 || gn("'set' on proxy: trap returned falsish for property '" + we(n2) + "'"), true);
  }, deleteProperty: function(s2, n2) {
    if (!Bt(n2)) return false;
    var e2 = s2[Z];
    e2 = e2.delete_, e2 = e2.call(s2[Z], n2, true);
    return e2 == null ? true : !!e2;
  }, defineProperty: function(t2, n2, r2) {
    var e2 = t2[Z];
    e2 = e2.defineProperty_.call(t2[Z], n2, r2);
    return e2 == null ? true : !!e2;
  }, ownKeys: function(t2) {
    let e2 = t2[Z];
    return e2.ownKeys_.call(t2[Z]);
  }, preventExtensions: function(t2) {
    se(13);
    return false;
  } });
  var nn = (0, function(r2, i2, n2, t2) {
    if (n2.get) return nt.make_.call(nt, r2, i2, n2, t2);
    if (n2.set) {
      var e2 = n2.set;
      _e(e2) || (e2 = Be(we(i2), e2, false, void 0));
      return t2 === r2.target_ ? r2.defineProperty_(i2, { __proto__: null, configurable: true, set: e2 }) == null ? 0 : 2 : (re(t2, i2, { __proto__: null, configurable: true, set: e2 }), 2);
    }
    if (t2 !== r2.target_ && typeof n2.value == Qi) {
      if (yn(n2.value)) {
        var s2 = Xe;
        this.options_ ? (e2 = this.options_, e2 = !!e2.autoBind) : e2 = false, e2 && (s2 = Ht);
        return s2.make_(r2, i2, n2, t2);
      }
      s2 = vt;
      this.options_ ? (e2 = this.options_, e2 = !!e2.autoBind) : e2 = false, e2 && (s2 = Dt);
      return s2.make_(r2, i2, n2, t2);
    }
    s2 = J;
    if (this.options_) {
      var o2 = this.options_;
      o2 = o2.deep, o2 = false === o2;
    } else {
      o2 = false;
    }
    o2 && (s2 = bt);
    typeof n2.value == Qi && this.options_ && this.options_.autoBind && (n2.value = n2.value.bind(ye(r2)));
    return s2.make_(r2, i2, n2, t2);
  });
  var rn = (0, function(r2, i2, n2, o2) {
    if (n2.get) return nt.extend_.call(nt, r2, i2, n2, o2);
    if (n2.set) {
      var e2 = r2.defineProperty_, t2 = we(i2);
      return r2.defineProperty_(i2, { __proto__: null, configurable: true, set: Be(t2, n2.set, false, void 0) }, o2);
    }
    typeof n2.value == Qi && this.options_ && this.options_.autoBind && (n2.value = n2.value.bind(ye(r2)));
    var s2 = J;
    this.options_ ? (e2 = e2.deep, e2 = false === e2) : e2 = false, e2 && (s2 = bt);
    return s2.extend_(r2, i2, n2, o2);
  });
  t = {}, Object.assign(t, { annotationType_: "true", options_: void 0, make_: nn, extend_: rn }), en = t;
  var he = {};
  kt.push({ __proto__: null, get: function(t2, n2) {
    var e2 = t2[Z];
    if (n2 === Z) return e2;
    if (n2 === Ki) return e2.getArrayLength_();
    if (typeof n2 == Ao && true !== globalThis.isNaN(n2)) {
      t2 = e2.get_;
      return e2.get_(globalThis.parseInt(n2));
    }
    return Le.call(he, n2) ? he[n2] : t2[n2];
  }, set: function(t2, n2, r2) {
    var e2 = t2[Z];
    n2 === Ki && e2.setArrayLength_(r2), typeof n2 == Yu || true === globalThis.isNaN(n2) ? t2[n2] = r2 : (t2 = e2.set_, e2.set_(globalThis.parseInt(n2), r2));
    return true;
  }, preventExtensions: function() {
    se(15);
    return false;
  } });
  var De = class {
    constructor(u2 = ca, i2, c2) {
      var r2 = u2 + "";
      this.owned_ = false, c2 !== void 0 && (this.owned_ = !!c2), this.atom_ = new fe(r2), this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0;
      var e2 = "ObservableArray[..]";
      this.enhancer_ = function(r3, n2, s2) {
        return i2(r3, n2, e2);
      };
    }
    dehanceValue_(t2) {
      return this.dehancer !== void 0 ? this.dehancer(t2) : t2;
    }
    dehanceValues_(t2) {
      return this.dehancer !== void 0 && t2.length > 0 ? t2.map(this.dehancer) : t2;
    }
    getArrayLength_() {
      pe(this.atom_);
      let e2 = this.values_;
      return e2.length;
    }
    setArrayLength_(t2) {
      (typeof t2 != wa || true === globalThis.Number.isNaN(t2) || (t2 | 0) < 0) && je(40, t2), t2 = t2 | 0;
      var n2 = this.values_;
      n2 = n2.length;
      if (t2 != n2) t2 > n2 ? (t2 = new globalThis.Array(t2 - n2 | 0), this.spliceWithArray_(n2, 0, t2)) : this.spliceWithArray_(t2, n2 - t2 | 0);
    }
    spliceWithArray_(a2 = 0, b2, c2) {
      var n2 = this.values_, r2 = n2.length, i2 = a2 | 0;
      n2 = 1 == arguments.length ? r2 - i2 | 0 : b2 !== void 0 && b2 != null ? b2 | 0 : 0, r2 = void 0, r2 = c2;
      return Nt(this, i2, n2, c2);
    }
    get_(t2) {
      pe(this.atom_);
      let n2 = this.dehanceValue_;
      return this.dehanceValue_(this.values_[t2]);
    }
    set_(t2, n2) {
      t2 |= 0;
      var r2 = this.values_;
      if (t2 < r2.length) {
        var i2 = r2[t2];
        if (Te(this)) {
          n2 = Ne(this, { __proto__: null, type: go, object: this.proxy_, index: t2, newValue: n2 });
          if (!n2) return;
          n2 = n2.newValue;
        }
        n2 = this.enhancer_(n2, i2);
        n2 === i2 || (r2[t2] = n2, ((e2, t3, n3, r3) => {
          var o2, s2 = Se(e2), i3 = null;
          s2 && (i3 = e2.proxy_, o2 = e2.atom_, i3 = { __proto__: null, observableKind: Xo, object: i3, type: go, debugObjectName: o2.name_, index: t3, newValue: n3, oldValue: r3 }), qe(e2.atom_), s2 && Oe(e2, i3);
        })(this, t2, n2, i2));
      } else i2 = globalThis.Array, t2++, t2 = new i2(t2 - r2.length), t2[t2.length - 1 | 0] = n2, Nt(this, r2.length, 0, t2);
    }
  };
  t = De.prototype;
  var Zn = (0, function(i2, s2, u2, l2) {
    var e2 = ca;
    u2 !== void 0 && (e2 = u2 + "");
    var t2 = false;
    t2 = !!l2;
    return $e(function() {
      var j2 = new De(e2, s2, t2), o2 = j2.values_;
      re(o2, Z, { __proto__: null, enumerable: false, writable: false, configurable: true, value: j2 }), o2 = j2.values_;
      var u3 = kt[1];
      o2 = new globalThis.Proxy(o2, u3), j2.proxy_ = o2;
      var z2;
      i2 && i2.length > 0 && (z2 = j2.spliceWithArray_, j2.spliceWithArray_(0, 0, i2));
      return o2;
    });
  });
  Ye("ObservableArrayAdministration", De), he.clear = function() {
    return this.splice(0);
  }, he.replace = function(t2) {
    let e2 = this[Z], n2 = e2.spliceWithArray_, r2 = e2.values_;
    return e2.spliceWithArray_(0, r2.length, t2);
  }, he.toJSON = function() {
    return this.slice();
  }, he.splice = function(a2, g2) {
    var e2 = this[Z];
    if (0 == arguments.length) return [];
    if (1 == arguments.length) return e2.spliceWithArray_(a2);
    if (2 == arguments.length) return e2.spliceWithArray_(a2, g2);
    var n2 = We.call(arguments, 2, arguments.length);
    return e2.spliceWithArray_(a2, g2, n2);
  }, he.spliceWithArray = function() {
    let n2 = this[Z];
    return n2.spliceWithArray_.apply(this[Z], arguments);
  }, he.push = function() {
    let e2 = this[Z], n2 = e2.values_;
    Nt(e2, n2.length, 0, arguments);
    return e2.values_.length;
  }, he.pop = function() {
    var t2 = this[Z];
    t2 = t2.values_, t2 = t2.length - 1 | 0, t2 < 0 && (t2 = 0);
    return this.splice(t2, 1)[0];
  }, he.shift = function() {
    return this.splice(0, 1)[0];
  }, he.unshift = function() {
    let e2 = this[Z];
    Nt(e2, 0, 0, arguments), e2 = e2.values_;
    return e2.length;
  }, he.reverse = function() {
    return !X.trackingDerivation || je(37, aa), this.replace(this.slice().reverse()), this;
  }, he.sort = function() {
    !X.trackingDerivation || je(37, Za);
    var n2 = this.slice();
    n2.sort.apply(n2, arguments), this.replace(n2);
    return this;
  }, he.remove = function(t2) {
    var n2 = this[Z];
    t2 = +n2.dehanceValues_(n2.values_).indexOf(t2);
    if (t2 > -1) {
      this.splice(t2, 1);
      return true;
    }
    return false;
  }, ke("at"), ke("concat"), ke("flat"), ke("includes"), ke(nu), ke("join"), ke("lastIndexOf"), ke(Jo), ke(Gs), ke("toLocaleString"), ke("toSorted"), ke("toSpliced"), ke("with"), Ue("every"), Ue("filter"), Ue("find"), Ue("findIndex"), Ue("findLast"), Ue("findLastIndex"), Ue("flatMap"), Ue(Vs), Ue(ou), Ue("some"), Ue("toReversed"), Un("reduce"), Un("reduceRight");
  var Jn = {};
  var Qn = {};
  var $ = class {
    constructor(f2, c2, d2 = ja) {
      var t2 = this;
      t2[Z] = Jn, t2.enhancer_ = Ze;
      var r2;
      c2 && (t2.enhancer_ = c2), r2 = d2 + "", Object.assign(t2, { name_: r2, interceptors_: void 0, changeListeners_: void 0, dehancer: void 0 });
      var e2;
      e2 = f2, $e(function() {
        Object.assign(t2, { keysAtom_: Ct("ObservableMap.keys()"), data_: new (be())(), hasMap_: new (be())() });
        if (e2) {
          var n2 = t2.merge;
          t2.merge(e2);
        }
      });
    }
    has_(t2) {
      return ve(this.data_, t2);
    }
    has(t2) {
      var e2 = this;
      if (!X.trackingDerivation) return e2.has_(t2);
      var n2 = e2.hasMap_;
      n2 = n2.get(t2), n2 = n2 || ie, n2 = new n2(e2.has_(t2), lt, "ObservableMap.key?", false), e2.hasMap_.set(t2, n2), n2.onBUOL = new globalThis.Set(), n2.onBUOL.add(function() {
        let n3 = e2.hasMap_;
        n3.delete(t2);
      });
      return n2.get();
    }
    set(t2, n2) {
      var r2 = ve(this.data_, t2);
      if (Te(this)) {
        n2 = Ne(this, { __proto__: null, type: r2 ? go : Ls, object: this, newValue: n2, name: t2 });
        if (!n2) return this;
        n2 = n2.newValue;
      }
      r2 ? this.updateValue_(t2, n2) : this.addValue_(t2, n2);
      return this;
    }
    updateValue_(t2, n2) {
      var r2 = this.data_;
      r2 = r2.get(t2), n2 = r2.prepareNewValue_(n2);
      if (n2 !== X.UNCHANGED) {
        var s2 = Se(this), i2 = null;
        s2 && (i2 = this.name_, i2 = { __proto__: null, observableKind: ou, debugObjectName: i2, type: go, object: this, oldValue: r2.value_, name: t2, newValue: n2 }), r2.setNewValue_(n2), s2 && Oe(this, i2);
      }
    }
    addValue_(t2, n2) {
      ee();
      try {
        var L2 = "ObservableMap.key", D2 = new ie(n2, this.enhancer_, L2, false);
        this.data_.set(t2, D2), n2 = D2.value_;
        var r2 = this.hasMap_, H2 = r2.get(t2);
        !H2 || H2.setNewValue_.call(H2, true), qe(this.keysAtom_);
      } finally {
        te();
      }
      r2 = false;
      var s2 = Se(this), i2 = null;
      s2 && (r2 = true), r2 && (i2 = { __proto__: null, observableKind: ou, debugObjectName: this.name_, type: Ls, object: this, name: t2, newValue: n2 }), s2 && Oe(this, i2);
    }
    delete(t2) {
      if (Te(this) && !Ne(this, { __proto__: null, type: ys, object: this, name: t2 })) return false;
      if (ve(this.data_, t2)) {
        var n2 = false, i2, r2;
        i2 = Se(this), r2 = null, i2 && (n2 = true), n2 && (n2 = this.name_, r2 = this.data_, r2 = { __proto__: null, observableKind: ou, debugObjectName: n2, type: ys, object: this, oldValue: r2.get(t2).value_, name: t2 }), ee();
        try {
          qe(this.keysAtom_), n2 = this.hasMap_;
          var H2 = n2.get(t2);
          !H2 || H2.setNewValue_.call(H2, false), n2 = this.data_;
          var P2 = n2.get(t2);
          P2.setNewValue_.call(P2, void 0), n2 = this.data_, n2.delete(t2);
        } finally {
          te();
        }
        i2 && Oe(this, r2);
        return true;
      }
      return false;
    }
    get(t2) {
      if (this.has(t2)) {
        t2 = this.data_.get(t2);
        return Rt(this, t2.get());
      }
      return Rt(this, void 0);
    }
    getOrInsert(n2, u2) {
      this.has(n2) || this.set(n2, u2);
      return this.get(n2);
    }
    getOrInsertComputed(n2, u2) {
      if (!this.has(n2)) {
        var r2 = this.set;
        this.set(n2, u2(n2));
      }
      return this.get(n2);
    }
    keys() {
      pe(this.keysAtom_);
      let e2 = this.data_;
      return e2.keys();
    }
    values() {
      var e2 = this;
      let n2 = e2.keys(), t2 = { __proto__: null, next: function() {
        var h2 = n2.next();
        return h2.done ? { __proto__: null, done: true, value: void 0 } : { __proto__: null, done: false, value: e2.get(h2.value) };
      } };
      t2[xe().toStringTag] = Ga;
      return qt(t2);
    }
    entries() {
      var e2 = this;
      let n2 = e2.keys(), t2 = { __proto__: null, next: function() {
        var g2 = n2.next();
        if (g2.done) return { __proto__: null, done: true, value: void 0 };
        var y2 = [], r2 = g2.value;
        y2.push(r2), y2.push(e2.get(g2.value));
        return { __proto__: null, done: false, value: y2 };
      } };
      t2[xe().toStringTag] = Ga;
      return qt(t2);
    }
    forEach(a2, b2) {
      var r2 = this.entries(), t2 = r2.next();
      while (!t2.done) {
        var s2 = t2.value[1];
        a2.call(b2, s2, t2.value[0], this), t2 = r2.next();
      }
    }
    merge(t2) {
      var e2 = this;
      oe(t2) && (t2 = new globalThis.Map(t2)), ee();
      try {
        if (Pe(t2)) for (var le2 = rr(t2), pe2 = 0; ; pe2++) {
          var n2 = pe2;
          if (n2 >= le2.length) break;
          n2 = e2.set;
          var r2 = le2[pe2];
          e2.set(r2, t2[le2[pe2]]);
        }
        else if (Array.isArray(t2)) for (var me2 = 0; ; me2++) {
          n2 = me2;
          if (n2 >= t2.length) break;
          n2 = e2.set, r2 = t2[me2][0];
          var i2 = t2[me2];
          e2.set(r2, i2[1]);
        }
        else it(t2) ? (n2 = Q().getPrototypeOf(t2), n2 = Q().getPrototypeOf(n2), Q().getPrototypeOf(n2) == null || je(19, t2), t2.forEach(function(s2, i3) {
          e2.set(i3, s2);
        })) : t2 == null || je(20, t2);
      } finally {
        te();
      }
      return e2;
    }
    clear() {
      ee();
      try {
        var z2 = Fe();
        try {
          for (var j2 = me(this.keys()), q2 = 0; ; q2++) {
            if (q2 >= j2.length) break;
            this.delete(j2[q2]);
          }
        } finally {
          Ee(z2);
        }
      } finally {
        te();
      }
    }
    replace(t2) {
      ee();
      try {
        var Vt2 = ((e2) => {
          if (it(e2) || oe(e2)) return e2;
          if (Array.isArray(e2)) return new globalThis.Map(e2);
          if (Pe(e2)) {
            var i2, s2, r2 = new (be())(), n3 = Q().keys(e2), t3 = 0;
            while (t3 < n3.length) i2 = n3[t3], s2 = e2[n3[t3]], r2.set(i2, s2), t3++;
            return r2;
          }
          je(21, e2);
          return new (be())();
        })(t2), Wt2 = new (be())(), Kt2 = false;
        t2 = this.data_;
        for (var Xt2 = me(t2.keys()), gn2 = 0; ; gn2++) {
          t2 = gn2;
          if (t2 >= Xt2.length) break;
          var yn2 = Xt2[gn2];
          if (!ve(Vt2, yn2)) if (this.delete(yn2)) Kt2 = true;
          else {
            t2 = Wt2;
            var n2 = yn2;
            t2.set(n2, this.data_.get(yn2));
          }
          ;
        }
        var bn2 = me(Vt2.entries());
        for (gn2 = 0; ; gn2++) {
          t2 = gn2;
          if (t2 >= bn2.length) break;
          var vn2 = bn2[gn2][0], wn2 = bn2[gn2][1], kn2 = ve(this.data_, vn2);
          this.set(vn2, wn2), ve(this.data_, vn2) && (t2 = Wt2, n2 = vn2, t2.set(vn2, this.data_.get(vn2)), kn2 || (Kt2 = true));
        }
        if (!Kt2) {
          t2 = t2.size;
          if (t2 != Wt2.size) qe(this.keysAtom_);
          else {
            t2 = this.data_;
            var xn2 = t2.keys(), zn2 = Wt2.keys(), jn2 = xn2.next(), qn2 = zn2.next();
            while (!jn2.done) {
              t2 = jn2.value;
              if (t2 !== qn2.value) {
                qe(this.keysAtom_);
                break;
              }
              jn2 = xn2.next();
              qn2 = zn2.next();
            }
          }
        }
        this.data_ = Wt2;
      } finally {
        te();
      }
      return this;
    }
    toJSON() {
      return me(this);
    }
    toString() {
      return "[object ObservableMap]";
    }
  };
  t = $.prototype;
  n = xe().iterator, t[n] = function() {
    return this.entries();
  }, t = $.prototype, re(t, To, { __proto__: null, enumerable: false, configurable: e, get: function() {
    pe(this.keysAtom_);
    let e2 = this.data_;
    return e2.size;
  } }), t = $.prototype, n = xe().toStringTag, re(t, n, { __proto__: null, enumerable: false, configurable: e, get: function() {
    return La;
  } }), Ye(ja, $);
  var ae = class {
    constructor(k2, f2, l2) {
      var r2 = this, o2 = Z;
      r2[o2] = Qn;
      var e2 = qa;
      l2 !== void 0 && (e2 = l2 + ""), r2.name_ = e2;
      var t2 = Ze;
      f2 && (t2 = f2), Object.assign(r2, { enhancer_: function(r3, i2, s2) {
        return t2(r3, i2, e2);
      }, data_: new globalThis.Set(), changeListeners_: void 0, interceptors_: void 0, dehancer: void 0 });
      var n2;
      n2 = k2, $e(function() {
        r2.atom_ = Ct(r2.name_);
        if (n2) {
          var p2 = r2.replace;
          r2.replace(n2);
        }
      });
    }
    has(t2) {
      pe(this.atom_);
      return !!this.data_.has(Rt(this, t2));
    }
    add(t2) {
      if (Te(this)) {
        t2 = Ne(this, { __proto__: null, type: Ls, object: this, newValue: t2 });
        if (!t2) return this;
        t2 = t2.newValue;
      }
      if (!this.has(t2)) {
        ee();
        try {
          var n2 = this.data_;
          n2.add(this.enhancer_(t2, void 0)), qe(this.atom_);
        } finally {
          te();
        }
        n2 = false;
        var i2 = Se(this), r2 = null;
        i2 && (n2 = true), n2 && (r2 = { __proto__: null, observableKind: os, debugObjectName: this.name_, type: Ls, object: this, newValue: t2 }), i2 && Oe(this, r2);
      }
      return this;
    }
    delete(t2) {
      if (Te(this) && !Ne(this, { __proto__: null, type: ys, object: this, oldValue: t2 })) return false;
      if (this.has(t2)) {
        var n2 = false, i2, r2;
        i2 = Se(this), r2 = null, i2 && (n2 = true), n2 && (r2 = { __proto__: null, observableKind: os, debugObjectName: this.name_, type: ys, object: this, oldValue: t2 }), ee();
        try {
          qe(this.atom_), n2 = this.data_, n2.delete(t2);
        } finally {
          te();
        }
        i2 && Oe(this, r2);
        return true;
      }
      return false;
    }
    values() {
      var e2 = this;
      pe(e2.atom_);
      let t2 = e2.data_, n2 = t2.values();
      t2 = { __proto__: null, next: function() {
        var d2 = n2.next();
        return d2.done ? { __proto__: null, done: true, value: void 0 } : { __proto__: null, done: false, value: Rt(e2, d2.value) };
      } }, t2[xe().toStringTag] = Ya;
      return qt(t2);
    }
    keys() {
      return this.values();
    }
    entries() {
      let t2 = this.values(), e2 = { __proto__: null, next: function() {
        var p2 = t2.next();
        if (p2.done) return { __proto__: null, done: true, value: void 0 };
        var f2 = [], n2 = p2.value;
        f2.push(n2), f2.push(p2.value);
        return { __proto__: null, done: false, value: f2 };
      } };
      e2[xe().toStringTag] = Ya;
      return qt(e2);
    }
    forEach(a2, b2) {
      var r2 = this.values(), t2 = r2.next();
      while (!t2.done) a2.call(b2, t2.value, t2.value, this), t2 = r2.next();
    }
    replace(t2) {
      var e2 = this;
      ce(t2) && (t2 = new globalThis.Set(t2)), ee();
      try {
        if (Array.isArray(t2)) {
          e2.clear();
          for (var I2 = 0; ; I2++) {
            var n2 = I2;
            if (n2 >= t2.length) break;
            e2.add(t2[I2]);
          }
        } else st(t2) ? (e2.clear(), t2.forEach(function(n3) {
          e2.add(n3);
        })) : t2 == null || je(41, t2);
      } finally {
        te();
      }
      return e2;
    }
    clear() {
      ee();
      try {
        var x2 = Fe();
        try {
          for (var t2 = this.data_, z2 = me(t2.values()), j2 = 0; ; j2++) {
            if (j2 >= z2.length) break;
            this.delete(z2[j2]);
          }
        } finally {
          Ee(x2);
        }
      } finally {
        te();
      }
    }
    toJSON() {
      return me(this);
    }
    toString() {
      return "[object ObservableSet]";
    }
  };
  t = ae.prototype;
  n = xe().iterator, t[n] = function() {
    return this.values();
  }, t = ae.prototype, re(t, To, { __proto__: null, enumerable: false, configurable: e, get: function() {
    pe(this.atom_);
    let e2 = this.data_;
    return e2.size;
  } }), t = ae.prototype, n = xe().toStringTag, re(t, n, { __proto__: null, enumerable: false, configurable: e, get: function() {
    return vo;
  } }), et(Su), et(Ma), et(Va), et(ru), et(Wa), et(Sa), et(ba), Ye(qa, ae), Ze = (0, function(t2, n2, r2) {
    return It(t2) ? t2 : Array.isArray(t2) ? r2 ? J.array.call(J, t2, { __proto__: null, name: r2 }) : J.array.call(J, t2) : Pe(t2) ? r2 ? J.object.call(J, t2, void 0, { __proto__: null, name: r2 }) : J.object.call(J, t2) : it(t2) ? r2 ? J.map.call(J, t2, { __proto__: null, name: r2 }) : J.map.call(J, t2) : st(t2) ? r2 ? J.set.call(J, t2, { __proto__: null, name: r2 }) : J.set.call(J, t2) : typeof t2 == Qi && !_e(t2) && !ot(t2) ? yn(t2) ? Xe(t2) : vt(r2, t2) : t2;
  }), t = function(t2, n2, r2) {
    return t2 == null ? t2 : le(t2) || ge(t2) || oe(t2) || ce(t2) ? t2 : Array.isArray(t2) ? J.array.call(J, t2, { __proto__: null, name: r2, deep: false }) : Pe(t2) ? J.object.call(J, t2, void 0, { __proto__: null, name: r2, deep: false }) : it(t2) ? J.map.call(J, t2, { __proto__: null, name: r2, deep: false }) : st(t2) ? J.set.call(J, t2, { __proto__: null, name: r2, deep: false }) : t2;
  }, n = function(t2, n2) {
    return ut(t2, n2, -1, void 0, void 0) ? n2 : t2;
  };
  var sn = { __proto__: null, deep: e, name: void 0, defaultDecorator: void 0 };
  Q().freeze(sn);
  var on = (0, function(r2, i2, s2) {
    return this.extend_(r2, i2, s2, false) == null ? 0 : 1;
  });
  var _n = (0, function(r2, i2, s2, o2) {
    var n2 = Ze;
    if (this.options_) {
      var t2 = this.options_;
      t2 = !!t2.enhancer_;
    } else {
      t2 = false;
    }
    t2 && (n2 = this.options_.enhancer_);
    return r2.defineObservableProperty_(i2, s2.value, n2, o2);
  });
  var $n = (0, function(n2, i2, r2, t2) {
    var e2 = ze({}, this.options_);
    Object.assign(e2, { get: r2.get, set: r2.set });
    return n2.defineComputedProperty_(i2, e2, t2);
  });
  var er = (0, function(n2, r2, i2, s2) {
    if (this.options_) {
      var t2 = this.options_;
      t2 = !!t2.bound;
    } else {
      t2 = false;
    }
    if (t2) return this.extend_(n2, r2, i2, false) == null ? 0 : 1;
    if (s2 === n2.target_) return this.extend_(n2, r2, i2, false) == null ? 0 : 2;
    return _e(i2.value) ? 1 : (re(s2, r2, An(n2, this, r2, i2, false)), 2);
  });
  var tr = (0, function(n2, i2, o2, d2) {
    let r2 = n2.defineProperty_;
    return n2.defineProperty_(i2, An(n2, this, i2, o2, !!X.safeDescriptors), d2);
  });
  var dt = (0, function(a2, b2, c2) {
    var n2 = a2, r2 = b2, e2 = c2;
    if ("accessor" == e2.kind + "") {
      var t2 = e2.name;
      e2 = {}, Object.assign(e2, { get: function() {
        var i2 = this[Z];
        i2 = i2 || Xt(this, n2, t2, r2.get.call(this));
        return i2.getObservablePropValue_(t2);
      }, set: function(r3) {
        var i2 = this[Z];
        i2 = i2 || Xt(this, n2, t2, r3);
        return i2.setObservablePropValue_(t2, r3);
      }, init: function(r3) {
        Xt(this, n2, t2, r3);
        return r3;
      } });
      return e2;
    }
  });
  var Pt = (0, function(s2, t2, n2) {
    var e2, r2 = n2.name, i2 = (0, function(b2, f2) {
      f2;
      var v2 = ze({}, s2.options_);
      Object.assign(v2, { get: t2, context: b2 }), v2.name || (v2.name = na + we(r2));
      return new ne(v2);
    });
    n2.addInitializer(function() {
      var T2 = this, N2 = rt(T2)[Z], s3 = N2.values_;
      s3 = s3.get(r2);
      var E2;
      _(s3, is) && s3.derivation !== t2 && (E2 = N2.values_, E2.delete(r2)), N2.lazyComputedKeys_ || (N2.lazyComputedKeys_ = new (be())()), N2.lazyComputedKeys_.set(r2, function() {
        return i2(T2, N2);
      });
    });
    return function() {
      var s3 = this[Z], o2 = s3.values_;
      o2 = o2.get(r2);
      var I2;
      if (_(o2, is) && o2.derivation !== t2) {
        e2 = e2 || new globalThis.WeakMap(), I2 = e2.get(this), I2 = I2 || i2(this, s3), e2.set(this, I2);
        return I2.get();
      }
      return s3.getObservablePropValue_(r2);
    };
  });
  var xt = (0, function(a2, b2, c2) {
    var n2 = a2, r2 = b2, e2 = c2, t2 = e2.name, i2 = (0, function(r3) {
      var i3 = we(t2);
      if (n2.options_) {
        var y2 = n2.options_;
        y2 = !!y2.name;
      } else {
        y2 = false;
      }
      y2 && (y2 = n2.options_, i3 = y2.name + "");
      if (n2.options_) {
        var g2 = n2.options_;
        g2 = !!g2.autoAction;
      } else {
        g2 = false;
      }
      g2 = g2;
      return Be(i3, r3, g2, void 0);
    });
    if ("field" == e2.kind + "") return function(r3) {
      _e(r3) || (r3 = i2(r3));
      if (n2.options_) {
        var d2 = n2.options_;
        d2 = !!d2.bound;
      } else {
        d2 = false;
      }
      d2 && (r3 = r3.bind(this), r3.isMobxAction = true);
      return r3;
    };
    if ("method" == e2.kind + "") {
      _e(r2) || (r2 = i2(r2)), a2.options_ ? (i2 = a2.options_, i2 = !!i2.bound) : i2 = false, i2 && e2.addInitializer(function() {
        let n3 = this[t2];
        n3 = n3.bind(this), n3.isMobxAction = true, this[t2] = n3;
      });
      return r2;
    }
    r2 = a2.annotationType_;
    i2 = we(t2);
    var s2 = e2.kind;
    e2 = [], e2.push(r2), e2.push(i2), e2.push(s2), Qe(43, e2);
  });
  var un = (0, function(a2, b2, c2) {
    var n2 = a2, e2 = b2, r2 = c2.name;
    ot(e2) || (e2 = Xe(e2)), n2.options_ ? (n2 = n2.options_, n2 = !!n2.bound) : n2 = false, n2 && c2.addInitializer(function() {
      let n3 = this[r2];
      n3 = n3.bind(this), n3.isMobXFlow = true, this[r2] = n3;
    });
    return e2;
  });
  var an = (0, function(n2, r2, i2, s2) {
    if (s2 === n2.target_) return this.extend_(n2, r2, i2, false) == null ? 0 : 2;
    if (this.options_) {
      var t2 = this.options_;
      t2 = !!t2.bound;
    } else {
      t2 = false;
    }
    t2 ? (t2 = n2.target_, t2 = !Le.call(t2, r2) || !ot(n2.target_[r2])) : t2 = false;
    if (t2 && this.extend_(n2, r2, i2, false) == null) return 0;
    return ot(i2.value) ? 1 : (re(s2, r2, Cn(n2, i2, false, false)), 2);
  });
  var cn = (0, function(n2, r2, i2, p2) {
    if (this.options_) {
      var e2 = this.options_;
      e2 = !!e2.bound;
    } else {
      e2 = false;
    }
    var s2 = e2;
    e2 = n2.defineProperty_, r2;
    return n2.defineProperty_(r2, Cn(n2, i2, s2, !!X.safeDescriptors), p2);
  });
  var Ft = Ot("observable", void 0);
  var c = Ot("observable.ref", { __proto__: null, enhancer_: lt });
  t = Ot("observable.shallow", { __proto__: null, enhancer_: t }), n = Ot("observable.struct", { __proto__: null, enhancer_: n });
  var ln = Kt($u, void 0);
  var l = Kt("computed.struct", { __proto__: null, equals: function(t2, n2) {
    return ut(t2, n2, -1, void 0, void 0);
  } });
  var dn = ft(va, void 0);
  var d = ft("action.bound", { __proto__: null, bound: e });
  var hn = ft(hu, { __proto__: null, autoAction: e });
  var h = ft("autoAction.bound", { __proto__: null, autoAction: e, bound: e });
  J = ze(function(a2, b2, c2) {
    var n2 = c2;
    return b2 && typeof b2.kind == Ao ? dt(Ft, a2, b2) : It(a2) ? a2 : Pe(a2) ? J.object.call(J, a2, b2, c2) : Array.isArray(a2) ? J.array.call(J, a2, b2) : it(a2) ? J.map.call(J, a2, b2) : st(a2) ? J.set.call(J, a2, b2) : typeof a2 == js && a2 != null ? a2 : J.box.call(J, a2, b2);
  }, Ft), J.box = function(a2, b2) {
    var e2 = Ve(void 0);
    arguments.length > 1 && (e2 = Ve(b2));
    return new ie(a2, St(e2), e2.name, true, e2.equals);
  }, J.array = function(a2, b2) {
    var e2 = Ve(void 0);
    arguments.length > 1 && (e2 = Ve(b2));
    return Zn(a2, St(e2), e2.name);
  }, J.map = function(a2, b2) {
    var e2 = Ve(void 0);
    arguments.length > 1 && (e2 = Ve(b2));
    return new $(a2, St(e2), e2.name);
  }, J.set = function(a2, b2) {
    var e2 = Ve(void 0);
    arguments.length > 1 && (e2 = Ve(b2));
    return new ae(a2, St(e2), e2.name);
  }, J.object = function(n2, s2, u2) {
    var e2, t2;
    e2 = s2, t2 = u2;
    return $e(function() {
      var r2 = {}, s3 = t2;
      r2 = rt(r2, s3);
      var v2 = r2[Z];
      v2.proxy_ || (s3 = kt[0], v2.proxy_ = new globalThis.Proxy(r2, s3)), v2 = v2.proxy_;
      return wt(v2, n2, e2);
    });
  }, bt = Ce(c, dt), c = Ce(t, dt);
  var p = Ce(Ft, dt);
  var f = Ce(n, dt);
  nt = ze(function(a2, b2) {
    if (b2 && typeof b2.kind == Ao) return Pt(ln, a2, b2);
    if (Pe(a2)) return Ce(Kt($u, a2), Pt);
    var t2 = {};
    Pe(b2) && (t2 = ze({}, b2)), t2.get = a2, t2.name || (t2.name = a2.name);
    return new ne(t2);
  }, ln), l = Ce(l, Pt), Ke = ze(function(a2, b2) {
    if (b2 && typeof b2.kind == Ao) {
      var n2 = dn;
      return xt(n2, a2, b2);
    }
    if (typeof a2 == Qi) {
      n2 = a2.name + "", "" == n2 && (n2 = ia);
      return Be(n2, a2, false, void 0);
    }
    if (typeof b2 == Qi) return Be(a2 + "", b2, false, void 0);
    if (Bt(a2)) return Ce(ft(va, { __proto__: null, name: a2, autoAction: false }), xt);
  }, dn), vt = ze(function(a2, b2) {
    if (b2 && typeof b2.kind == Ao) {
      var n2 = dn;
      e && (n2 = hn);
      return xt(n2, a2, b2);
    }
    if (typeof a2 == Qi) {
      n2 = a2.name + "", "" == n2 && (n2 = ia);
      return Be(n2, a2, e, void 0);
    }
    if (typeof b2 == Qi) return Be(a2 + "", b2, e, void 0);
    if (Bt(a2)) return Ce(ft(e ? hu : va, { __proto__: null, name: a2, autoAction: e }), xt);
  }, hn), d = Ce(d, xt), Dt = Ce(h, xt), n = (0, function(n2) {
    var t2 = n2.name + "";
    "" == t2 && (t2 = ia);
    return Nn(t2, false, n2, this, void 0);
  }), wt = (0, function(n2, i2, o2, a2) {
    var e2, t2;
    e2 = o2, t2 = a2;
    var r2 = Q().getOwnPropertyDescriptors(i2);
    $e(function() {
      var A2, U2, s2 = rt(n2, t2)[Z], o3 = Ie().ownKeys(r2), i3 = 0;
      while (i3 < o3.length) A2 = o3[i3], U2 = e2 ? true === A2 in e2 ? e2[A2] : true : true, s2.extend_(A2, r2[A2], U2), i3++;
    });
    return n2;
  });
  var Mt = (0, function(o2, c2) {
    var n2, i2 = Jt;
    c2 && (i2 = c2), n2 = i2.name ? i2.name + "" : "Autorun";
    var e2, r2 = !i2.scheduler && !i2.delay, s2 = () => {
      o2(e2);
    };
    if (r2) e2 = new ue(n2, function() {
      this.track(s2);
    }, i2.onError, i2.requiresObservable);
    else {
      r2 = Ln(i2);
      var t2 = false;
      e2 = new ue(n2, function() {
        var h2 = this;
        t2 = t2 || true, r2(() => {
          t2 = false, h2.isDisposed || h2.track(s2);
        });
      }, i2.onError, i2.requiresObservable);
    }
    i2.signal ? (n2 = i2.signal, n2 = !!n2.aborted) : n2 = false;
    n2 || e2.schedule_(), n2 = e2.getDisposer_;
    return n2.call(e2, i2.signal);
  });
  h = (0, function(a2, b2, c2) {
    var u2, c2 = a2, l2 = b2, e2 = Jt;
    c2 && (e2 = c2), u2 = e2.name ? e2.name + "" : _u;
    var o2 = At;
    !e2.equals || (o2 = e2.equals);
    var d2 = Ke;
    l2 = d2(u2, hr(e2.onError, l2));
    var r2, t2, n2 = true, i2 = false;
    d2 = () => {
      var I2 = !!X.allowStateChanges;
      X.allowStateChanges = false;
      var T2;
      try {
        T2 = c2(t2);
      } finally {
        X.allowStateChanges = I2;
      }
      i2 = n2 || true !== o2(r2, T2);
      r2 = T2;
    };
    var a2 = !e2.scheduler && !e2.delay, s2 = false, h2 = Ln(e2), p2 = () => {
      s2 = false;
      if (!t2.isDisposed) {
        var a3 = r2;
        t2.track.call(t2, d2), n2 && e2.fireImmediately ? l2(r2, a3, t2) : !n2 && false, n2 = false;
      }
    }, m2 = () => {
      n2 || a2 ? p2() : (s2 = s2 || true, h2(p2));
    }, g2 = e2.onError;
    t2 = new ue(u2, m2, g2, e2.requiresObservable), e2.signal ? (u2 = e2.signal, u2 = !!u2.aborted) : u2 = false, u2 = u2 || t2.schedule_, u2.call(t2), u2 = t2.getDisposer_;
    return u2.call(t2, e2.signal);
  });
  var m = (0, function(a2, b2, c2) {
    var e2;
    if (1 == arguments.length || b2 && typeof b2 == js) {
      e2 = void 0, e2 = b2;
      return ((e3, t2) => {
        var n2;
        if (t2 && t2.signal && t2.signal.aborted) {
          e3 = globalThis.Promise, e3 = e3.reject(new globalThis.Error(Na)), e3.cancel = function() {
            return null;
          };
          return e3;
        }
        n2 = {};
        Object.assign(n2, { cancel: void 0, abort: void 0 });
        var r2 = new globalThis.Promise(function(u2, s2) {
          var o2 = ze({}, t2);
          o2.onError = s2, o2 = Hi(e3, u2, o2), Object.assign(n2, { cancel: function() {
            o2(), s2(new globalThis.Error("WHEN_CANCELLED"));
          }, abort: function() {
            o2(), s2(new globalThis.Error(Na));
          } }), t2 && t2.signal && typeof t2.signal.addEventListener == Qi && t2.signal.addEventListener(wu, n2.abort);
        });
        t2 && t2.signal && typeof t2.signal.removeEventListener == Qi && (r2 = r2.finally(function() {
          t2.signal.removeEventListener(wu, n2.abort);
        })), r2.cancel = n2.cancel;
        return r2;
      })(a2, e2);
    }
    return Hi(a2, b2, c2);
  });
  var g = (0, function(t2) {
    var e2 = t2.isolateGlobalState;
    true === e2 && Xn(), t2.enforceActions === void 0 || (e2 = t2.enforceActions, "always" === e2 ? (X.enforceActions = "always", X.allowStateChanges = false) : "observed" === e2 ? (X.enforceActions = true, X.allowStateChanges = false) : (X.enforceActions = false, X.allowStateChanges = true)), true === "computedRequiresReaction" in t2 && (e2 = X, e2.computedRequiresReaction = !!t2.computedRequiresReaction), true === "reactionRequiresObservable" in t2 && (e2 = X, e2.reactionRequiresObservable = !!t2.reactionRequiresObservable), true === "observableRequiresReaction" in t2 && (e2 = X, e2.observableRequiresReaction = !!t2.observableRequiresReaction), true === "disableErrorBoundaries" in t2 && (e2 = X, e2.disableErrorBoundaries = !!t2.disableErrorBoundaries), true === "safeDescriptors" in t2 && (e2 = X, e2.safeDescriptors = !!t2.safeDescriptors), e2 = X, e2.allowStateReads = !X.observableRequiresReaction, !t2.reactionScheduler || (e2 = t2.reactionScheduler, t2 = Lt, Lt = (n2) => e2(() => t2(n2)));
  });
  var y = (0, function(n2) {
    return It(n2);
  });
  var b = (0, function(a2, b2) {
    var e2 = a2;
    return !le(e2) ? false : (e2 = e2[Z], ve(e2.values_, b2) ? true : e2.lazyComputedKeys_ && ve(e2.lazyComputedKeys_, b2) ? true : e2.lazyObservableKeys_ && ve(e2.lazyObservableKeys_, b2) ? true : false);
  });
  var Me = class {
    constructor() {
      this.message = "FLOW_CANCELLED", this.name = Mu;
    }
  };
  t = Me.prototype;
  var v = globalThis.Error.prototype;
  Q().setPrototypeOf(t, v), Me.prototype.constructor = Me, re(Me, ss, { __proto__: null, value: Mu, configurable: e }), t = Me.prototype, t.toString = function() {
    return "Error: " + this.message;
  }, v = (0, function(t2) {
    return nr(Me, t2);
  });
  var Gt = 0;
  var w = function(r2, s2) {
    var t2;
    if (s2 && typeof s2.kind == Ao) return un(Xe, r2, s2);
    var e2 = r2.name + "";
    "" == e2 && (e2 = "flow");
    t2 = (0, function() {
      Gt++;
      var a2 = e2, s3 = Ke(a2, r2).apply(this, arguments), K = {};
      Object.assign(K, { rejector: void 0, pending: void 0, stepId: 0 });
      var t3, n2, Q2;
      t3 = (0, function(o3) {
        K.pending = void 0;
        try {
          var C2 = e2, D2 = Ke(C2, s3.next).call(s3, o3);
          Q2(D2);
        } catch (H2) {
          K.rejector(H2);
        }
      }), n2 = (0, function(o3) {
        K.pending = void 0;
        try {
          var C2 = e2, D2 = Ke(C2, s3.throw).call(s3, o3);
          Q2(D2);
        } catch (H2) {
          K.rejector(H2);
        }
      }), Q2 = (0, function(s4) {
        if (typeof s4.then == Qi) {
          s4.then(Q2, K.rejector);
          return;
        }
        if (s4.done) {
          K.resolve(s4.value);
          return;
        }
        K.pending = globalThis.Promise.resolve(s4.value);
        var i2 = K.pending;
        i2.then(t3, n2);
      });
      var o2 = globalThis.Promise;
      o2 = new o2(function(i2, s4) {
        Object.assign(K, { resolve: i2, rejector: s4 }), t3(void 0);
      }), a2 = e2, o2.cancel = Ke(a2, function() {
        try {
          if (K.pending) {
            var n3 = K.pending;
            n3 = typeof n3.cancel == Qi;
          } else {
            n3 = false;
          }
          n3 && (n3 = K.pending, n3.cancel.call(K.pending));
          var H2 = s3.return(void 0), P2 = globalThis.Promise.resolve(H2.value);
          P2.then(tt, tt), typeof P2.cancel == Qi && P2.cancel.call(P2), K.rejector(new Me());
        } catch (F) {
          K.rejector(F);
        }
      });
      return o2;
    }), t2.isMobXFlow = true;
    return t2;
  };
  t = {}, Object.assign(t, { annotationType_: "flow", options_: void 0, make_: an, extend_: cn }), Xe = ze(w, t), t = {}, Object.assign(t, { annotationType_: "flow.bound", options_: { __proto__: null, bound: e }, make_: an, extend_: cn }), Ht = Ce(t, un), t = {}, Object.assign(t, { annotationType_: "override", make_: function(n2, r2) {
    n2, r2;
    return 0;
  }, extend_: function() {
    je(44, this.annotationType_);
    return false;
  } });
  var Yt = globalThis.Symbol("mobx-keys");
  w = (0, function(t2, r2, s2) {
    var e2;
    e2 = s2, $e(function() {
      var i2, j2 = rt(t2, e2)[Z], q2 = Ie().ownKeys(r2), z2 = 0;
      while (z2 < q2.length) i2 = q2[z2], Dn(j2, i2, r2[q2[z2]]), z2++;
    });
    return t2;
  });
  var k = (0, function(n2, s2, u2) {
    var e2, t2;
    t2 = u2;
    return Pe(n2) ? wt(n2, n2, s2, u2) : ($e(function() {
      var u3 = rt(n2, t2)[Z];
      if (true !== Yt in n2) {
        var a2, oe2, i2 = Q().getPrototypeOf(n2), ce2 = new globalThis.Set(), s3 = Ie().ownKeys(n2), o2 = Ie().ownKeys(i2), r2 = 0;
        while (r2 < s3.length) a2 = s3[r2], ce2.add(a2), r2++;
        r2 = 0;
        while (r2 < o2.length) s3 = o2[r2], ce2.add(s3), r2++;
        ce2.delete(Os), ce2.delete(Z), re(i2, Yt, { __proto__: null, enumerable: false, writable: true, configurable: true, value: ce2 });
      }
      oe2 = n2[Yt];
      oe2.forEach(function(r3) {
        var h2 = e2 && true === r3 in e2 ? e2[r3] : true;
        Dn(u3, r3, h2);
      });
    }), n2);
  });
  var zt = (0, function(t2) {
    if (le(t2)) {
      var e2 = t2[Z];
      return e2.keys_.call(t2[Z]);
    }
    if (oe(t2) || ce(t2)) return me(t2.keys());
    if (ge(t2)) {
      var n2 = [];
      e2 = 0;
      while (e2 < t2.length) n2.push(e2), e2++;
      return n2;
    }
    se(5);
  });
  var x = (0, function(t2) {
    if (le(t2)) {
      var i2, r2 = zt(t2), n2 = [], e2 = 0;
      while (e2 < r2.length) i2 = t2[r2[e2]], n2.push(i2), e2++;
      return n2;
    }
    if (oe(t2)) {
      r2 = zt(t2), n2 = [], e2 = 0;
      while (e2 < r2.length) n2.push(t2.get(r2[e2])), e2++;
      return n2;
    }
    if (ce(t2)) return me(t2.values());
    if (ge(t2)) return t2.slice();
    se(6);
  });
  var z = (0, function(t2) {
    if (le(t2) || oe(t2)) {
      var n2, s2, r2 = zt(t2), i2 = [], e2 = 0;
      while (e2 < r2.length) n2 = [], s2 = r2[e2], n2.push(s2), oe(t2) ? n2.push(t2.get(r2[e2])) : (s2 = t2[r2[e2]], n2.push(s2)), i2.push(n2), e2++;
      return i2;
    }
    if (ce(t2)) return me(t2.entries());
    if (ge(t2)) {
      r2 = [], e2 = 0;
      while (e2 < t2.length) n2 = [], n2.push(e2), n2.push(t2[e2]), r2.push(n2), e2++;
      return r2;
    }
    se(7);
  });
  var pn = (0, function(a2, b2, c2) {
    var e2 = a2, n2 = b2, r2 = c2;
    if (2 == arguments.length && !ce(a2)) {
      ee();
      try {
        for (var Te2 = Q().keys(n2), Ne2 = 0; ; Ne2++) {
          var t2 = Ne2;
          if (t2 >= Te2.length) break;
          t2 = pn, r2 = Te2[Ne2], t2(a2, r2, n2[Te2[Ne2]]);
        }
      } finally {
        te();
      }
      return;
    }
    le(a2) ? (t2 = a2[Z], t2.set_.call(a2[Z], n2, r2)) : oe(a2) ? a2.set(n2, r2) : ce(a2) ? a2.add(n2) : ge(a2) ? (ee(), t2 = n2 | 0, t2 >= a2.length && (a2.length = (n2 | 0) + 1 | 0), a2[n2] = r2, te()) : se(8);
  });
  var j = (0, function(e2, t2) {
    if (le(e2)) {
      var n2 = e2[Z];
      n2.delete_.call(e2[Z], t2);
    } else oe(e2) || ce(e2) ? e2.delete(t2) : ge(e2) ? e2.splice(t2, 1) : se(9);
  });
  var fn = (0, function(a2, b2) {
    var e2 = a2, t2 = b2;
    if (le(e2)) return e2[Z].has_.call(e2[Z], t2);
    if (oe(e2) || ce(e2)) return e2.has(t2);
    if (ge(e2)) {
      (t2 | 0) >= 0 ? (t2 = t2 | 0, e2 = t2 < e2.length) : e2 = false;
      return e2;
    }
    se(10);
    return false;
  });
  var q = (0, function(e2, t2) {
    if (!!fn(e2, t2)) {
      if (le(e2)) return e2[Z].get_.call(e2[Z], t2);
      if (oe(e2)) return e2.get(t2);
      if (ge(e2)) return e2[t2];
      se(11);
    }
  });
  var mn = (0, function(t2) {
    if (le(t2)) return t2[Z].ownKeys_.call(t2[Z]);
    se(38);
  });
  var E = (0, function(n2, c2, l2) {
    if (le(n2)) return n2[Z].defineProperty_.call(n2[Z], c2, l2);
    se(39);
  });
  var Ge = (0, function(a2, b2) {
    var e2 = a2, n2 = b2;
    if (typeof e2 == js && e2 != null) {
      if (ge(e2)) {
        n2 === void 0 || se(23), e2 = e2[Z];
        return e2.atom_;
      }
      if (ce(e2)) return e2.atom_;
      if (oe(e2)) {
        if (n2 === void 0) return e2.keysAtom_;
        var t2 = e2.data_;
        t2 = t2.get(n2), t2 = t2 || e2.hasMap_, t2 = t2.get(n2);
        if (!t2) {
          var r2 = e2.name_;
          e2 = [], e2.push(n2), e2.push(r2), Qe(25, e2);
        }
        return t2;
      }
      if (n2 && !e2[Z]) {
        if (e2[n2] === void 0) {
        }
      }
      if (le(e2)) {
        n2 || se(26), t2 = e2[Z], e2 = t2.values_, e2 = e2.get(n2), e2 = e2 || t2.materializeLazyComputed_(n2), e2 = e2 || t2.materializeLazyObservable_(n2), e2 || (r2 = t2.name_, t2 = [], t2.push(n2), t2.push(r2), Qe(27, t2));
        return e2;
      }
      if (_(e2, Pu) || _(e2, is) || _(e2, Vo)) return e2;
    } else {
      if (typeof e2 == Qi && _(e2[Z], Vo)) return e2[Z];
    }
    je(28, e2);
  });
  var He = (0, function(e2, a2) {
    e2 || se(29);
    if (a2 !== void 0) {
      var n2 = He;
      return He(Ge(e2, a2));
    }
    if (_(e2, Pu) || _(e2, is) || _(e2, Vo) || oe(e2) || ce(e2)) return e2;
    if (e2[Z]) return e2[Z];
    je(24, e2);
  });
  var T = (0, function(p2, r2) {
    if (r2 !== void 0) var e2 = Ge(p2, r2);
    else if (_e(p2)) return p2.name;
    else {
      e2 = le(p2) || oe(p2) || ce(p2) ? He(p2) : Ge(p2);
    }
    return e2.name_;
  });
  var N = (0, function(a2, b2, c2, d2) {
    var n2 = a2;
    if (arguments.length > 2 && typeof c2 == Qi) {
      var e2 = d2;
      n2 = He(n2, b2);
      return Yi(n2, c2, e2);
    }
    var r2 = arguments.length > 2 && c2, t2 = b2;
    e2 = He(n2);
    if (ge(n2)) {
      if (r2) {
        n2 = e2.values_, n2 = We.call(n2), r2 = e2.proxy_;
        var i2 = e2.atom_;
        i2 = i2.name_, b2({ __proto__: null, observableKind: Xo, object: r2, debugObjectName: i2, type: Cs, index: 0, added: n2, addedCount: n2.length, removed: [], removedCount: 0 });
      }
      e2 = Gi(e2, b2);
      return e2;
    }
    if (oe(n2)) {
      e2 = Gi(e2, b2);
      return e2;
    }
    if (ce(n2)) {
      e2 = Gi(e2, b2);
      return e2;
    }
    if (le(n2)) {
      e2 = Gi(e2, b2);
      return e2;
    }
    e2 = Yi(e2, b2, r2);
    return e2;
  });
  var R = (0, function(n2, o2, i2) {
    if (arguments.length > 2 && typeof i2 == Qi) {
      var e2 = He(n2, o2);
      return In(e2, i2);
    }
    e2 = He(n2);
    return In(e2, o2);
  });
  var I = (0, function() {
    return Hn(Ju, arguments);
  });
  var S = (0, function() {
    return Hn(qu, arguments);
  });
  var O = (0, function(e2) {
    return at(e2, new (be())());
  });
  var U = (0, function(r2, i2) {
    return Pn(Ge(r2, i2));
  });
  var A = (0, function(r2, i2) {
    return Mi(Ge(r2, i2));
  });
  var C = (0, function(t2) {
    return _(t2, is);
  });
  var L = (0, function(o2, l2) {
    if (!le(o2)) return false;
    var e2 = o2[Z];
    if (e2.lazyComputedKeys_) {
      var n2 = e2.lazyComputedKeys_;
      n2 = ve(n2, l2);
    } else {
      n2 = false;
    }
    return n2 ? true : (n2 = e2.values_, !ve(n2, l2) ? false : _(e2.values_.get(l2), is));
  });
  var D = (0, function(a2, b2, c2) {
    var e2, t2 = a2, i2 = void 0;
    oe(a2) || ge(a2) || _(a2, po) || ce(a2) ? (e2 = He(a2), i2 = b2) : le(a2) && (e2 = He(a2, b2), i2 = c2), e2.dehancer = i2;
    return function() {
      e2.dehancer = void 0;
    };
  });
  var H = (0, function(t2) {
    return t2;
  });
  var P = (0, function(t2) {
    return ot(t2);
  });
  var yr = n;
  var br = (e2) => {
    X.allowStateReads = e2;
  };
  var vr = (e2) => {
    let t2 = !!X.allowStateReads;
    X.allowStateReads = e2;
    return t2;
  };
  var zr = (e2, t2) => Je(e2, t2);
  var jr = (e2, t2) => e2 === t2;
  var qr = (e2, t2) => ut(e2, t2, 1, void 0, void 0);
  var Er = (e2, t2) => ut(e2, t2, -1, void 0, void 0);
  var Jr = (e2) => _(e2, po);
  var $r = () => X.trackingDerivation != null;
  return __toCommonJS(mobx_esm_exports);
})();
typeof module!=="undefined"&&module.exports&&(module.exports=mobx);
