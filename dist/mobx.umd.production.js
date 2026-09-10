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
    $mobx: () => gn,
    FlowCancellationError: () => Bn,
    ObservableMap: () => fr,
    ObservableSet: () => hr,
    Reaction: () => Ar,
    _allowStateChanges: () => mn,
    _allowStateChangesInsideComputed: () => wn,
    _allowStateReadsEnd: () => On,
    _allowStateReadsStart: () => Sn,
    _autoAction: () => kn,
    _autoActionBound: () => An,
    _endAction: () => Lr,
    _getAdministration: () => Tn,
    _getGlobalState: () => Fn,
    _interceptReads: () => $n,
    _isComputingDerivation: () => nr,
    _resetGlobalState: () => Gr,
    _startAction: () => Kr,
    action: () => _n,
    actionBound: () => yn,
    autorun: () => jn,
    compareDefault: () => xn,
    compareIdentity: () => Gn,
    compareShallow: () => Rn,
    compareStructural: () => Vn,
    computed: () => Cn,
    computedStruct: () => In,
    configure: () => Hn,
    createAtom: () => Pn,
    defineProperty: () => En,
    entries: () => Dr,
    extendObservable: () => Dn,
    flow: () => Nn,
    flowBound: () => Kn,
    flowResult: () => Mn,
    get: () => Un,
    getAtom: () => Jn,
    getDebugName: () => qn,
    getDependencyTree: () => Wn,
    getObserverTree: () => Qn,
    has: () => Xn,
    intercept: () => Yn,
    isAction: () => Zn,
    isBoxedObservable: () => er,
    isComputed: () => ar,
    isComputedProp: () => tr,
    isFlow: () => Ln,
    isFlowCancellationError: () => zn,
    isObservable: () => rr,
    isObservableArray: () => ir,
    isObservableMap: () => cr,
    isObservableObject: () => br,
    isObservableProp: () => sr,
    isObservableSet: () => or,
    keys: () => ur,
    makeAutoObservable: () => dr,
    makeObservable: () => lr,
    observable: () => pr,
    observableDeep: () => vr,
    observableRef: () => gr,
    observableShallow: () => _r,
    observableStruct: () => yr,
    observe: () => mr,
    onBecomeObserved: () => Or,
    onBecomeUnobserved: () => Sr,
    onReactionError: () => wr,
    override: () => Mr,
    ownKeys: () => kr,
    reaction: () => jr,
    remove: () => xr,
    runInAction: () => Rr,
    set: () => Vr,
    spy: () => Cr,
    toJS: () => Ir,
    transaction: () => Hr,
    untracked: () => Pr,
    values: () => Er,
    when: () => Nr
  });
  var Br = (e2) => function(a2) {
    return e2(this, a2);
  };
  function ce(e2) {
    N(), ft(e2), K();
  }
  function M(e2) {
    Ve(e2, []);
  }
  function oa(e2) {
    throw e2;
  }
  function F(e2, a2, t2) {
    E.defineProperty(e2, a2, t2);
  }
  function dt(e2) {
    e2.isPendingUnobservation || (e2.isPendingUnobservation = true, I.pendingUnobservations.push(e2));
  }
  function K() {
    var e2 = (I.inBatch | 0) - 1 | 0;
    I.inBatch = e2;
    if (0 == e2) {
      ht();
      var t2 = I.pendingUnobservations, a2 = 0;
      for (; a2 < t2.length; a2++) e2 = t2[a2], e2.isPendingUnobservation = false, e2.observers_.size || (!e2.isBeingObserved || (e2.isBeingObserved = false, e2.onBUO()), ie(e2) && e2.suspend_());
      I.pendingUnobservations = [];
    }
  }
  function ua() {
    let e2 = { version: 7, UNCHANGED: {} }, a2 = null;
    e2.trackingDerivation = a2, e2.trackingContext = a2, e2.runId = 0, e2.mobxGuid = 0, e2.inBatch = 0, e2.pendingUnobservations = [], e2.pendingReactions = [], e2.isRunningReactions = false, e2.allowStateChanges = false, e2.allowStateReads = true, e2.enforceActions = true, e2.spyListeners = [], e2.globalReactionErrorHandlers = [], e2.computedRequiresReaction = false, e2.reactionRequiresObservable = false, e2.observableRequiresReaction = false, e2.disableErrorBoundaries = false, e2.suppressReactionErrors = false, e2.safeDescriptors = true;
    return e2;
  }
  function mt(e2) {
    Ze != (e2.actionId_ | 0) && M(30), Ze = e2.parentActionId_ | 0, e2.error_ === void 0 || (I.suppressReactionErrors = true), K(), !e2.runAsAction_ || oe(e2.prevDerivation_), I.suppressReactionErrors = false;
  }
  function yt(e2, a2) {
    var t2 = I.trackingDerivation;
    a2 = !a2 || null == t2, N();
    var r = !!I.allowStateChanges;
    a2 && ye();
    var s = !!I.allowStateReads, n = Oa;
    Oa++;
    var m = Ze;
    Ze = n;
    return { runAsAction_: a2, prevDerivation_: t2, prevAllowStateChanges_: r, prevAllowStateReads_: s, notifySpy_: false, startTime_: 0, actionId_: n, parentActionId_: m };
  }
  function ye() {
    let e2 = I.trackingDerivation;
    I.trackingDerivation = null;
    return e2;
  }
  function oe(e2) {
    I.trackingDerivation = e2;
  }
  function X(e2) {
    var a2 = I.trackingDerivation;
    if (null != a2) {
      if (a2.runId_ !== e2.lastAccessedBy_) {
        e2.lastAccessedBy_ = a2.runId_;
        var t2 = a2.unboundDepsCount_ | 0;
        a2.newObserving_[t2] = e2, a2.unboundDepsCount_ = t2 + 1 | 0, !e2.isBeingObserved && I.trackingContext && (e2.isBeingObserved = true, e2.onBO());
      }
      return !!e2.isBeingObserved;
    } else !e2.observers_.size && I.inBatch && dt(e2);
    return false;
  }
  function _t(e2, a2, t2) {
    var s, n = true;
    gt(e2), n = 0 != (e2.runId_ | 0) ? e2.observing_.length : 100, e2.newObserving_ = new Array(n), e2.unboundDepsCount_ = 0, n = (I.runId | 0) + 1 | 0, I.runId = n, e2.runId_ = n, n = I.trackingDerivation, I.trackingDerivation = e2, I.inBatch = (I.inBatch | 0) + 1 | 0;
    var r;
    if (true === I.disableErrorBoundaries) r = a2.call(t2);
    else try {
      r = a2.call(t2);
    } catch (e3) {
      r = new Je(e3);
    }
    a2 = I, a2.inBatch = (I.inBatch | 0) - 1 | 0, I.trackingDerivation = n, (function(e3) {
      var o = e3.observing_, r2 = e3.newObserving_;
      e3.observing_ = r2;
      var a3, s2, u = e3.unboundDepsCount_ | 0, m = 0, n2 = 0, t3 = 0;
      for (; t3 < u; t3++) a3 = r2[t3], 0 == (a3.diffValue | 0) && (a3.diffValue = 1, n2 != t3 && (r2[n2] = a3), n2++), s2 = a3.dependenciesState_, s2 !== void 0 && (s2 | 0) > m && (m = s2 | 0);
      r2.length = n2, e3.newObserving_ = null;
      for (a3 = o.length; a3 > 0; ) a3--, t3 = o[a3], 0 == (t3.diffValue | 0) && lt(t3, e3), t3.diffValue = 0;
      for (; n2 > 0; ) n2--, a3 = r2[n2], 1 == (a3.diffValue | 0) && (a3.diffValue = 0, (function(e4, a4) {
        e4.observers_.add(a4), (e4.lowestObserverState_ | 0) > (a4.dependenciesState_ | 0) && (e4.lowestObserverState_ = a4.dependenciesState_);
      })(a3, e3));
      0 != m && (e3.dependenciesState_ = m, e3.onBecomeStale_());
    })(e2);
    return r;
  }
  function N() {
    let e2 = I;
    e2.inBatch = (I.inBatch | 0) + 1 | 0;
  }
  function ht() {
    if (!((I.inBatch | 0) > 0 || I.isRunningReactions)) ma(Tt);
  }
  function lt(e2, a2) {
    e2.observers_.delete(a2), e2.observers_.size || dt(e2);
  }
  function Dt(e2) {
    var a2 = { name: e2.name_ };
    if ((function(e3) {
      return e3.observers_ && e3.observers_.size;
    })(e2)) {
      var t2 = Y(e2.observers_.values()), n = [];
      e2 = 0;
      for (; e2 < t2.length; e2++) n.push(Dt(t2[e2]));
      a2.observers = n;
    }
    return a2;
  }
  function Et(e2) {
    var a2, t2 = { name: e2.name_ };
    if (e2.observing_ && e2.observing_.length > 0) {
      var n = [];
      a2 = 0;
      for (; a2 < e2.observing_.length; a2++) n.push(Et(e2.observing_[a2]));
      t2.dependencies = n;
    }
    return t2;
  }
  function Ha(e2) {
    var t2 = e2.observing_;
    e2.observing_ = [];
    var a2 = t2.length;
    while (a2 > 0) a2--, lt(t2[a2], e2);
    e2.dependenciesState_ = -1;
  }
  function gt(e2) {
    if (0 != (e2.dependenciesState_ | 0)) {
      e2.dependenciesState_ = 0;
      var t2 = e2.observing_, a2 = t2.length;
      while (a2 > 0) a2--, t2[a2].lowestObserverState_ = 0;
    }
  }
  function ft(e2) {
    if (2 !== e2.lowestObserverState_) e2.lowestObserverState_ = 2, e2.observers_.forEach(Bt);
  }
  function Ia(e2) {
    var a2 = e2.dependenciesState_ | 0;
    if (0 == a2) return false;
    if (a2 == -1 || 2 == a2) return true;
    if (1 == a2) {
      a2 = true, a2 = ye();
      var t2, r = e2.observing_, s = r.length, n = 0;
      for (; n < s; n++) {
        t2 = r[n];
        if (ie(t2)) {
          if (true === I.disableErrorBoundaries) t2.get();
          else try {
            t2.get();
          } catch {
            oe(a2);
            return true;
          }
          if (2 === e2.dependenciesState_) return oe(a2), true;
        }
      }
      gt(e2), oe(a2);
      return false;
    }
    return false;
  }
  function bt(e2) {
    if (null == e2) return false;
    var a2 = e2.constructor;
    return !a2 ? false : "GeneratorFunction" == a2.name + "" ? true : "GeneratorFunction" == a2.displayName + "";
  }
  function Be(e2, a2, t2, n, r) {
    if (e2 === a2) return 0 !== e2 ? e2 = true : (e2 = 1 / +e2, e2 = e2 === 1 / +a2), e2;
    if (null == e2 || null == a2) return false;
    if (e2 !== e2) return a2 !== a2;
    var s = typeof e2;
    if ("function" != s && "object" != s && "object" != typeof a2) return false;
    s = E.prototype.toString.call(e2) + "";
    if (s != E.prototype.toString.call(a2) + "") return false;
    if ("[object RegExp]" == s || "[object String]" == s) return "" + e2 == "" + a2;
    if ("[object Number]" == s) {
      e2 = Number(e2), a2 = Number(a2);
      if (true !== Ue(e2, e2)) return true !== Ue(a2, a2);
      return 0 === e2 ? (e2 = 1 / +e2, true === Ue(e2, 1 / +a2)) : e2 === a2;
    }
    if ("[object Date]" == s || "[object Boolean]" == s) return e2 = Number(e2), e2 === Number(a2);
    if ("[object Symbol]" == s) return e2 = Symbol.valueOf.call(e2), e2 === Symbol.valueOf.call(a2);
    ("[object Map]" == s || "[object Set]" == s) && t2 >= 0 && t2++;
    var m = kt(e2);
    e2 = kt(a2);
    var o = "[object Array]" == s;
    if (!o) {
      if ("object" != typeof m || "object" != typeof e2) return false;
      a2 = m.constructor, s = e2.constructor;
      if (a2 !== s && !("function" == typeof a2 && St(a2, a2) && "function" == typeof s && St(s, s)) && true === "constructor" in m && true === "constructor" in e2) return false;
    }
    if (0 == t2) return false;
    else t2 < 0 && (t2 = -1);
    n === void 0 && (n = [], r = []), a2 = n.length;
    while (a2 > 0) {
      a2--;
      if (n[a2] === m) return r[a2] === e2;
    }
    n.push(m), r.push(e2);
    if (o) {
      a2 = m.length;
      if (a2 != e2.length) return false;
      while (a2 > 0) {
        a2--;
        if (!Be(m[a2], e2[a2], t2 - 1 | 0, n, r)) return false;
      }
    } else {
      o = E.keys(m);
      var u = o.length;
      if (E.keys(e2).length != u) return false;
      s = 0;
      for (; s < u; s++) {
        a2 = o[s], a2 = we.call(e2, a2) && Be(m[a2], e2[a2], t2 - 1 | 0, n, r);
        if (!a2) return false;
      }
    }
    n.pop(), r.pop();
    return true;
  }
  function St(e2, a2) {
    if (!e2) return false;
    return "function" == typeof e2.isPrototypeOf ? true === e2.isPrototypeOf(a2) : (true === "constructor" in a2 ? (e2 = a2.constructor == e2, e2 = true === e2) : e2 = false, e2);
  }
  function _e(e2) {
    if (!Ae(e2)) return false;
    var a2 = E.getPrototypeOf(e2);
    if (null == a2) return true;
    e2 = void 0, !we.call(a2, "constructor") || (e2 = a2.constructor), e2 = "function" == typeof e2 && e2.toString() === Kt;
    return e2;
  }
  function $(e2) {
    return !Ae(e2) ? false : !!Ba(e2[H]);
  }
  function T(e2) {
    return !Ae(e2) ? false : !!za(e2[H]);
  }
  function Le(e2) {
    return null == e2 ? false : "[object Set]" == E.prototype.toString.call(e2) + "";
  }
  function Ke(e2) {
    return null == e2 ? false : "[object Map]" == E.prototype.toString.call(e2) + "";
  }
  function ot(e2, a2) {
    return null == a2 ? false : true === Nt.call(e2.prototype, a2);
  }
  function ba(e2) {
    e2[Symbol.iterator] = Lt;
    if (!Da) {
      Da = true;
      var a2 = globalThis.Iterator;
      _a = a2 ? a2.prototype : {};
    }
    a2 = _a;
    return te(E.create(a2), e2);
  }
  function wt(e2, a2, t2, n, r) {
    var s = yt(e2, a2, n, r);
    try {
      return t2.apply(n, r);
    } catch (e3) {
      s.error_ = e3;
      throw e3;
    } finally {
      mt(s);
    }
  }
  function Ie(e2) {
    var a2 = ye();
    N();
    try {
      return e2();
    } finally {
      K(), oe(a2);
    }
  }
  function la(e2) {
    return !e2 ? false : T(e2) || e2[H] || Va(e2) || sa(e2) || ie(e2);
  }
  function Ra(e2) {
    e2 = typeof e2;
    return "string" == e2 || "symbol" == e2 || "number" == e2;
  }
  function ne(e2) {
    var a2 = typeof e2;
    return "string" == a2 ? e2 + "" : "symbol" == a2 ? e2.toString() + "" : new String(e2) + "";
  }
  function kt(e2) {
    return $(e2) ? e2.slice() : Ke(e2) || B(e2) ? Y(e2.entries()) : Le(e2) || U(e2) ? Y(e2.entries()) : e2;
  }
  function Ve(e2, a2) {
    a2 = a2.length > 0 ? " " + a2.map(String).join(",") : "", oa(new Error("[MobX] minified error nr: " + e2 + a2 + ". See mobx.js.org/errors"));
  }
  function st(e2) {
    return null === e2 ? null : "object" == typeof e2 ? "" + e2 : e2;
  }
  function Ae(e2) {
    return null != e2 && "object" == typeof e2;
  }
  function Z(e2) {
    return !!e2.proxy_ ? e2.proxy_ : e2.target_;
  }
  function ha(e2) {
    return !!e2 ? e2 : Wa;
  }
  function U(e2) {
    return !!Ma(e2);
  }
  function B(e2) {
    return !!La(e2);
  }
  function Y(e2) {
    return Array.from(e2);
  }
  function Me(e2) {
    return null == e2 ? false : true === e2.isMobXFlow;
  }
  function sa(e2) {
    return Ae(e2) && true === e2.isMobXReaction;
  }
  function Va(e2) {
    return Ae(e2) && true === e2.isMobXAtom;
  }
  function da(e2) {
    return Ae(e2) && true === e2.isMobXCaughtException;
  }
  function ie(e2) {
    return Ae(e2) && true === e2.isMobXComputedValue;
  }
  function Ce(e2) {
    return "function" == typeof e2 && true === e2.isMobxAction;
  }
  function Pt(e2, a2) {
    var t2, n = a2[1];
    a2.length > 2 && "function" == typeof a2[2] ? (t2 = ke(a2[0], a2[1]), n = a2[2]) : t2 = ke(a2[0]), t2[e2] ? t2[e2].add(n) : (a2 = t2, a2[e2] = /* @__PURE__ */ new Set(), t2[e2].add(n));
    return function() {
      var a3 = t2[e2];
      !a3 || (a3.delete(n), 0 == a3.size && delete t2[e2]);
    };
  }
  function He(e2) {
    z.prototype[e2] = function(a2) {
      var t2 = this.atom_;
      X(t2);
      return ("intersection" == e2 || "union" == e2 || "symmetricDifference" == e2 || "isDisjointFrom" == e2) && Le(a2) && !U(a2) && "function" == typeof a2[e2] ? a2[e2](this) : new Set(this)[e2](a2);
    };
  }
  function fe(e2) {
    "function" == typeof Array.prototype[e2] && (W[e2] = function(a2, n) {
      var t2 = this, r = t2[H];
      X(r.atom_);
      var s, m = r.dehanceValues_(r.values_);
      arguments.length > 1 && (s = n);
      return m[e2](function(e3, n2) {
        return a2.call(s, e3, n2, t2);
      });
    });
  }
  function ae(e2) {
    "function" == typeof Array.prototype[e2] && (W[e2] = function() {
      let a2 = this[H];
      X(a2.atom_);
      let t2 = a2.dehanceValues_(a2.values_);
      return t2[e2].apply(t2, arguments);
    });
  }
  function xt(e2) {
    "function" == typeof Array.prototype[e2] && (W[e2] = function() {
      var t2 = this;
      let a2 = t2[H];
      X(a2.atom_);
      let n = a2.dehanceValues_(a2.values_), r = arguments[0];
      arguments[0] = function(e3, a3, n2) {
        return r(e3, a3, n2, t2);
      };
      return n[e2].apply(n, arguments);
    });
  }
  function vn(e2, a2) {
    var t2;
    if (a2 && a2.signal && a2.signal.aborted) return e2 = Promise.reject(new Error("WHEN_ABORTED")), e2.cancel = function() {
      return null;
    }, e2;
    t2 = { cancel: void 0, abort: void 0 };
    var n = new Promise(function(n2, r) {
      var s = te({}, a2);
      s.onError = r, s = Ct(e2, n2, s), t2.cancel = function() {
        s(), r(new Error("WHEN_CANCELLED"));
      }, t2.abort = function() {
        s(), r(new Error("WHEN_ABORTED"));
      }, a2 && a2.signal && "function" == typeof a2.signal.addEventListener && a2.signal.addEventListener("abort", t2.abort);
    });
    a2 && a2.signal && "function" == typeof a2.signal.removeEventListener && (n = n.finally(function() {
      a2.signal.removeEventListener("abort", t2.abort);
    })), n.cancel = t2.cancel;
    return n;
  }
  function Ct(e2, a2, t2) {
    t2 = t2 || {};
    var n, r;
    if ("number" == typeof t2.timeout) {
      var s = new Error("WHEN_TIMEOUT");
      r = setTimeout(function() {
        if (!n[H].isDisposed) {
          n();
          if (t2.onError) t2.onError(s);
          else oa(s);
        }
      }, t2.timeout);
    }
    t2.name || (t2.name = "When");
    var m = me("When-effect", a2, false, void 0);
    n = xa(function(a3) {
      if (Ta(false, e2)) a3.dispose(), !r || clearTimeout(r), m();
    }, t2);
    return n;
  }
  function tn() {
    var e2, a2 = globalThis;
    a2.__mobxInstanceCount && (a2.__mobxInstanceCount | 0) > 0 && !a2.__mobxGlobals && (Ye = false), e2 = a2.__mobxGlobals, e2 && 7 != (e2.version | 0) && (Ye = false);
    if (!Ye) return setTimeout(function() {
      Ua || M(35);
    }, 1), ua();
    else if (e2) return a2.__mobxInstanceCount = (a2.__mobxInstanceCount | 0) + 1 | 0, e2.UNCHANGED || (e2.UNCHANGED = {}), e2;
    a2.__mobxInstanceCount = 1, e2 = ua(), a2.__mobxGlobals = e2;
    return e2;
  }
  function Ht(e2, a2, t2) {
    if (ie(e2)) {
      var n, r = true;
      return xa(function() {
        var o = e2.get, s = e2.get();
        if (!r || t2) {
          var m = ye();
          a2({ observableKind: "computed", debugObjectName: e2.name_, type: "update", object: e2, newValue: s, oldValue: n }), oe(m);
        }
        r = false, n = s;
      });
    }
    t2 && a2({ observableKind: "value", debugObjectName: e2.name_, object: e2, type: "update", newValue: e2.value_, oldValue: void 0 });
    return Fe(e2, a2);
  }
  function pa(e2, a2, t2, n) {
    var r = e2.values_.length;
    a2 > r ? a2 = r : a2 < 0 && (a2 = r + a2 | 0, a2 < 0 && (a2 = 0)), t2 < 0 && (t2 = 0), r = r - a2 | 0, t2 > r || (r = t2), null == n ? n = [] : Array.isArray(n) || (n = Array.prototype.slice.call(n));
    if (be(e2)) {
      t2 = se(e2, { object: e2.proxy_, type: "splice", index: a2, removedCount: r, added: n });
      if (!t2) return Na;
      r = t2.removedCount | 0, n = t2.added;
    }
    if (0 != n.length) {
      t2 = [];
      var m = n.length, s = 0;
      for (; s < m; s++) t2.push(e2.enhancer_(n[s], void 0));
    } else t2 = n;
    s = (function(e3, a3, t3, n2) {
      var r2 = e3.values_, s2 = n2.length;
      if (0 == t3 && a3 == r2.length) {
        e3 = 0;
        for (; e3 < s2; e3++) r2.push(n2[e3]);
        return Na;
      }
      if (s2 < 1e4) {
        e3 = [a3, t3], a3 = 0;
        for (; a3 < n2.length; a3++) e3.push(n2[a3]);
        return r2.splice.apply(r2, e3);
      }
      e3 = a3 + t3 | 0;
      var m2 = xe.call(r2, a3, e3);
      s2 = xe.call(r2, e3, r2.length), e3 = r2.length, r2.length = e3 + n2.length - t3 | 0;
      for (e3 = 0; e3 < n2.length; e3++) r2[a3 + e3 | 0] = n2[e3];
      for (e3 = 0; e3 < s2.length; e3++) r2[a3 + n2.length + e3 | 0] = s2[e3];
      return m2;
    })(e2, a2, r, t2), (0 != r || 0 != t2.length) && (function(e3, a3, t3, n2) {
      var s2, m2, o = de(e3), r2 = null;
      o && (r2 = e3.proxy_, s2 = e3.atom_.name_, m2 = n2.length, r2 = { observableKind: "array", object: r2, debugObjectName: s2, type: "splice", index: a3, removed: n2, added: t3, removedCount: m2, addedCount: t3.length }), ce(e3.atom_), o && le(e3, r2);
    })(e2, a2, t2, s);
    return e2.dehanceValues_(s);
  }
  function le(e2, a2) {
    var n = ye(), t2 = e2.changeListeners_;
    if (!t2) {
      oe(n);
      return;
    }
    t2 = xe.call(t2);
    var r = t2.length;
    e2 = 0;
    for (; e2 < r; e2++) t2[e2](a2);
    oe(n);
  }
  function se(e2, a2) {
    var s = ye();
    try {
      var n = [];
      !e2.interceptors_ || (n = e2.interceptors_);
      var r = xe.call(n), m = r.length, t2 = 0;
      for (; t2 < m; t2++) {
        a2 = r[t2](a2), a2 && !a2.type && M(14);
        if (!a2) break;
      }
      return a2;
    } finally {
      oe(s);
    }
  }
  function be(e2) {
    return e2.interceptors_ !== void 0 && e2.interceptors_.length > 0;
  }
  function de(e2) {
    return e2.changeListeners_ !== void 0 && e2.changeListeners_.length > 0;
  }
  function Fe(e2, a2) {
    e2.changeListeners_ === void 0 && (e2.changeListeners_ = []);
    var t2 = e2.changeListeners_;
    t2.push(a2);
    return ut(function() {
      var e3 = t2.indexOf(a2);
      e3 != -1 && t2.splice(e3, 1);
    });
  }
  function Ot(e2, a2) {
    e2.interceptors_ === void 0 && (e2.interceptors_ = []);
    var t2 = e2.interceptors_;
    t2.push(a2);
    return ut(function() {
      var e3 = t2.indexOf(a2);
      e3 != -1 && t2.splice(e3, 1);
    });
  }
  function me(e2, a2, t2, n) {
    var r = (0, function() {
      var r2 = null == n ? this : n;
      return wt(e2, t2, a2, r2, arguments);
    });
    r.isMobxAction = true, r.toString = function() {
      return a2.toString();
    }, Jt && (Ja.value = e2, F(r, "name", Ja));
    return r;
  }
  function pn(e2, a2) {
    return !e2 ? a2 : function() {
      try {
        return a2.apply(this, arguments);
      } catch (a3) {
        e2.call(this, a3);
        return;
      }
    };
  }
  function ut(e2) {
    var a2 = false;
    return function() {
      if (!a2) return a2 = true, e2.apply(this, arguments);
    };
  }
  function je(e2, a2) {
    e2 = "isMobX" + e2, a2.prototype[e2] = true;
    return function(a3) {
      return Ae(a3) && true === a3[e2];
    };
  }
  function Vt(e2) {
    return !!e2.scheduler ? e2.scheduler : !!e2.delay ? function(a2) {
      return setTimeout(a2, e2.delay);
    } : function(e3) {
      return e3();
    };
  }
  function pt(e2) {
    !e2.onBOL || e2.onBOL.forEach(function(e3) {
      e3();
    });
  }
  function vt(e2) {
    !e2.onBUOL || e2.onBUOL.forEach(function(e3) {
      e3();
    });
  }
  function va(e2, a2) {
    return e2.dehancer !== void 0 ? e2.dehancer(a2) : a2;
  }
  function te(e2, a2) {
    return E.assign(e2, a2);
  }
  function pe(e2, a2) {
    return te(function(t2, n) {
      if (n && "string" == typeof n.kind) return a2(e2, t2, n);
    }, e2);
  }
  function ze(e2, a2) {
    if (null == e2 || "object" != typeof e2 || ot(Date, e2) || !la(e2)) return e2;
    if (Te(e2) || ie(e2)) return ze(e2.get(), a2);
    if (a2.has(e2)) return a2.get(e2);
    if ($(e2)) {
      var n = [];
      a2.set(e2, n);
      var r, s, t2 = 0;
      for (; t2 < e2.length; t2++) n[t2] = ze(e2[t2], a2);
      return n;
    }
    if (U(e2)) {
      t2 = /* @__PURE__ */ new Set(), a2.set(e2, t2), n = Y(e2.values()), e2 = 0;
      for (; e2 < n.length; e2++) t2.add(ze(n[e2], a2));
      return t2;
    }
    if (B(e2)) {
      n = /* @__PURE__ */ new Map(), a2.set(e2, n), t2 = Y(e2.entries()), e2 = 0;
      for (; e2 < t2.length; e2++) n.set(t2[e2][0], ze(t2[e2][1], a2));
      return n;
    }
    r = {}, a2.set(e2, r), n = ct(e2), t2 = 0;
    for (; t2 < n.length; t2++) true === E.prototype.propertyIsEnumerable.call(e2, n[t2]) && (s = n[t2], r[s] = ze(e2[n[t2]], a2));
    return r;
  }
  function It(e2, a2, t2) {
    true === t2 && (t2 = e2.defaultAnnotation_);
    if (false !== t2) {
      if (true !== a2 in e2.target_) {
        var n = t2.annotationType_, r = [n, e2.name_ + "." + ne(a2)];
        Ve(1, r);
      }
      for (r = e2.target_; ; ) {
        n = r && r !== E.prototype;
        if (!n) break;
        if (n = E.getOwnPropertyDescriptor(r, a2)) {
          n = t2.make_(e2, a2, n, r);
          if (0 === n) return;
          if (1 === n) break;
        }
        r = E.getPrototypeOf(r);
      }
    }
  }
  function jt(e2, a2, t2, n) {
    if (we.call(e2.target_, a2)) {
      if (e2.values_.has(a2)) return e2.setObservablePropValue_(a2, t2);
      if (n) return true === Reflect.set(e2.target_, a2, t2);
      e2.target_[a2] = t2;
      return true;
    }
    return e2.extend_(a2, { value: t2, enumerable: true, writable: true, configurable: true }, e2.defaultAnnotation_, n);
  }
  function At(e2) {
    var a2 = Qa[e2];
    if (a2) return a2;
    a2 = { get: function() {
      return this[H].getObservablePropValue_(e2);
    }, set: function(a3) {
      return this[H].setObservablePropValue_(e2, a3);
    } }, Qa[e2] = a2;
    return a2;
  }
  function he(e2, a2, t2) {
    F(e2, a2, { configurable: true, get: function() {
      return 0 != (+this.flags_ & t2);
    }, set: function(e3) {
      var a3 = this.flags_ | 0;
      this.flags_ = e3 ? a3 | t2 : a3 & (t2 ^ -1);
    } });
  }
  function Ca(e2, a2, t2) {
    F(e2, a2, { configurable: true, get: function() {
      return 0 != (+this.flags_ & t2) ? 1 : 0;
    }, set: function(e3) {
      var a3 = this.flags_ | 0;
      this.flags_ = 1 == (e3 | 0) ? a3 | t2 : a3 & (t2 ^ -1);
    } });
  }
  function ca(e2, a2, t2) {
    F(e2, a2, { enumerable: false, configurable: true, get: t2 });
  }
  function Rt(e2, a2, t2, n) {
    var r = a2.value;
    Me(r) || (r = Ge(r)), t2 && (r = r.bind(Z(e2)), r.isMobXFlow = true), n ? (a2 = !!e2.isPlainObject_, e2 = false) : (a2 = true, e2 = true);
    return { value: r, configurable: a2, enumerable: false, writable: e2 };
  }
  function Gt(e2, a2, t2, n, r) {
    var s = n.value;
    a2.options_ && a2.options_.bound && (s = s.bind(Z(e2)));
    var m = ne(t2);
    a2.options_ && a2.options_.name && (m = a2.options_.name + ""), n = a2.options_ && a2.options_.autoAction;
    var o;
    a2.options_ && a2.options_.bound && (o = Z(e2)), r ? (a2 = !!e2.isPlainObject_, e2 = false) : (a2 = true, e2 = true);
    return { value: me(m, s, n, o), configurable: a2, enumerable: false, writable: e2 };
  }
  function Ea(e2, a2, t2, n) {
    var r = Ne(e2)[H];
    r.lazyObservableKeys_ || (r.lazyObservableKeys_ = /* @__PURE__ */ new Map()), r.lazyObservableKeys_.set(t2, function() {
      var e3 = Re;
      a2.options_ && a2.options_.enhancer_ && (e3 = a2.options_.enhancer_);
      var r2 = "ObservableObject." + ne(t2);
      return new L(n, e3, r2, false);
    });
    return r;
  }
  function fa(e2) {
    return true === e2.deep ? Re : false === e2.deep ? qe : e2.defaultDecorator && e2.defaultDecorator.options_ && e2.defaultDecorator.options_.enhancer_ ? e2.defaultDecorator.options_.enhancer_ : Re;
  }
  function ga(e2, a2) {
    let t2 = { annotationType_: e2, options_: a2, make_: Ya, extend_: Ft };
    return t2;
  }
  function Pa(e2, a2) {
    let t2 = { annotationType_: e2, options_: a2, make_: Ya, extend_: Qt };
    return t2;
  }
  function Qe(e2, a2) {
    let t2 = { annotationType_: e2, options_: a2, make_: Yt, extend_: $t };
    return t2;
  }
  function re(e2, a2) {
    let t2 = [];
    t2.push(a2), Ve(e2, t2);
  }
  var E = Object;
  var we = E.prototype.hasOwnProperty;
  var Ue = E.is;
  var xe = Array.prototype.slice;
  var Nt = E.prototype.isPrototypeOf;
  var Kt = E.toString();
  var _a = void 0;
  var Da = false;
  var Lt = (0, function() {
    return this;
  });
  var Pe = function() {
  };
  var e = [];
  E.freeze(e);
  var Na = e;
  e = {}, E.freeze(e);
  var Ka = e;
  var H = Symbol("mobx administration");
  var ya = function(e2, a2) {
    return true === Ue(e2, a2);
  };
  var Te = void 0;
  var La = void 0;
  var Ma = void 0;
  var Ba = void 0;
  var za = void 0;
  var Ye = true;
  var Ua = false;
  var ue = [];
  (function() {
    ue.push("mobxGuid"), ue.push("spyListeners"), ue.push("enforceActions"), ue.push("computedRequiresReaction"), ue.push("reactionRequiresObservable"), ue.push("observableRequiresReaction"), ue.push("allowStateReads"), ue.push("disableErrorBoundaries"), ue.push("runId"), ue.push("UNCHANGED");
  })();
  var I = tn();
  var Mt = function() {
    var e2, a2;
    (0 != I.pendingReactions.length || 0 != (I.inBatch | 0) || I.isRunningReactions) && M(36), Ua = true, Ye && (e2 = globalThis, a2 = (e2.__mobxInstanceCount | 0) - 1 | 0, e2.__mobxInstanceCount = a2, 0 == a2 && (e2.__mobxGlobals = void 0), I = ua());
  };
  var Bt = function(e2) {
    e2.dependenciesState_ || e2.onBecomeStale_(), e2.dependenciesState_ = 2;
  };
  var zt = function(e2) {
    e2.dependenciesState_ || (e2.dependenciesState_ = 1, e2.onBecomeStale_());
  };
  var $e;
  var Ut = function(e2) {
    var a2 = e2.dependenciesState_;
    1 === a2 ? e2.dependenciesState_ = 2 : a2 || ($e.lowestObserverState_ = 0);
  };
  var ma = function(e2) {
    return e2();
  };
  var Tt = function() {
    I.isRunningReactions = true;
    var e2, t2, n, a2 = I.pendingReactions, r = 0;
    while (a2.length > 0) {
      r++, 100 == r && (e2 = "[mobx] cycle in reaction: " + a2[0], console.error(e2), a2.splice(0, a2.length)), t2 = a2.splice(0, a2.length), n = t2.length, e2 = 0;
      for (; e2 < n; e2++) t2[e2].runReaction_();
    }
    I.isRunningReactions = false;
  };
  var Ta = function(e2, a2) {
    var t2 = !!I.allowStateChanges;
    I.allowStateChanges = !!e2;
    try {
      return a2();
    } finally {
      I.allowStateChanges = t2;
    }
  };
  var Je = (0, function(e2) {
    this.cause = e2;
    return this;
  });
  F(Je, "name", { value: "CaughtException", configurable: true }), Je.prototype.isMobXCaughtException = true;
  var ee = (0, function(e2) {
    e2 = e2 !== void 0 ? e2 + "" : "Atom", this.name_ = e2, this.observers_ = /* @__PURE__ */ new Set(), this.lastAccessedBy_ = 0, this.lowestObserverState_ = -1, this.flags_ = 0;
    return this;
  });
  ee.prototype.onBO = function() {
    pt(this);
  }, ee.prototype.onBUO = function() {
    vt(this);
  }, ee.prototype.reportObserved = function() {
    return X(this);
  }, ee.prototype.reportChanged = function() {
    ce(this);
  }, ee.prototype.toString = function() {
    return this.name_;
  }, je("Atom", ee), e = ee.prototype, he(e, "isBeingObserved", 1), he(e, "isPendingUnobservation", 2), Ca(e, "diffValue", 4);
  var wa = function(e2, a2, t2) {
    var n = e2 !== void 0 ? new ee(e2) : new ee();
    a2 === void 0 && (a2 = Pe), t2 === void 0 && (t2 = Pe), a2 === Pe || (n.onBOL = /* @__PURE__ */ new Set(), n.onBOL.add(a2)), t2 === Pe || (n.onBUOL = /* @__PURE__ */ new Set(), n.onBUOL.add(t2));
    return n;
  };
  var Ze = 0;
  var Oa = 1;
  var Ja = { value: "action", configurable: true, writable: false, enumerable: false };
  var a = E.getOwnPropertyDescriptor(function() {
  }, "name");
  e = null != a && a.configurable;
  var Jt = e;
  var Q = (0, function(e2, a2, t2, n) {
    var r = arguments.length > 0 && e2 !== void 0 ? e2 + "" : "Reaction";
    this.name_ = r, this.onInvalidate_ = void 0, arguments.length > 1 && (this.onInvalidate_ = a2), arguments.length > 2 && t2 && (this.errorHandler_ = t2), arguments.length > 3 && n !== void 0 && (this.requiresObservable_ = n), this.observing_ = [], this.newObserving_ = null, this.dependenciesState_ = -1, this.runId_ = 0, this.unboundDepsCount_ = 0, this.flags_ = 0;
    return this;
  });
  Q.prototype.onBecomeStale_ = function() {
    this.schedule_();
  }, Q.prototype.schedule_ = function() {
    this.isScheduled || (this.isScheduled = true, I.pendingReactions.push(this), ht());
  }, Q.prototype.runReaction_ = function() {
    if (!this.isDisposed) {
      N(), this.isScheduled = false;
      var e2 = I.trackingContext;
      I.trackingContext = this;
      if (Ia(this)) {
        this.isTrackPending = true;
        try {
          this.onInvalidate_();
          if (false) {
          }
        } catch (e3) {
          this.reportExceptionInDerivation_(e3);
        }
      }
      I.trackingContext = e2, K();
    }
  }, Q.prototype.track = function(e2) {
    if (!this.isDisposed) {
      N(), this.isRunning = true;
      var a2 = I.trackingContext;
      I.trackingContext = this, e2 = _t(this, e2, void 0), I.trackingContext = a2, this.isRunning = false, this.isTrackPending = false, !this.isDisposed || Ha(this), da(e2) && this.reportExceptionInDerivation_(e2.cause), K();
    }
  }, Q.prototype.reportExceptionInDerivation_ = function(e2) {
    if (this.errorHandler_) {
      this.errorHandler_(e2, this);
      return;
    }
    !I.disableErrorBoundaries || oa(e2);
    var a2 = "[mobx] uncaught error in '" + this + "'";
    I.suppressReactionErrors || console.error(a2, e2);
    var t2 = I.globalReactionErrorHandlers, n = t2.length;
    a2 = 0;
    for (; a2 < n; a2++) t2[a2](e2, this);
  }, Q.prototype.dispose = function() {
    this.isDisposed || (this.isDisposed = true, this.isRunning || (N(), Ha(this), K()));
  }, Q.prototype.getDisposer_ = function(e2) {
    var t2 = this, a2 = function() {
      var n = t2.dispose;
      t2.dispose(), null != e2 && "function" == typeof e2.removeEventListener && e2.removeEventListener("abort", a2);
    };
    null != e2 && "function" == typeof e2.addEventListener && e2.addEventListener("abort", a2), a2[H] = t2, true === "dispose" in Symbol && "symbol" == typeof Symbol.dispose && (a2[Symbol.dispose] = a2);
    return a2;
  }, Q.prototype.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, je("Reaction", Q), e = Q.prototype, he(e, "isDisposed", 1), he(e, "isScheduled", 2), he(e, "isTrackPending", 4), he(e, "isRunning", 8), Ca(e, "diffValue", 16);
  var J = (0, function(e2) {
    e2.get || M(31), this.derivation = e2.get;
    var a2 = e2.name ? e2.name + "" : "ComputedValue";
    this.name_ = a2, this.setter_ = e2.set ? me("ComputedValue-setter", e2.set, false, void 0) : void 0, this.equals_ = ya, !e2.equals || (this.equals_ = e2.equals), this.scope_ = e2.context, this.requiresReaction_ = e2.requiresReaction, this.keepAlive_ = !!e2.keepAlive, this.dependenciesState_ = -1, this.observing_ = [], a2 = null, this.newObserving_ = a2, this.observers_ = /* @__PURE__ */ new Set(), this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = 0, this.unboundDepsCount_ = 0, this.value_ = new Je(a2), this.flags_ = 0;
    return this;
  });
  J.prototype.onBecomeStale_ = function() {
    (function(e2) {
      if (!e2.lowestObserverState_) e2.lowestObserverState_ = 1, e2.observers_.forEach(zt);
    })(this);
  }, J.prototype.onBO = function() {
    pt(this);
  }, J.prototype.onBUO = function() {
    vt(this);
  }, J.prototype.computeValue_ = function(e2) {
    this.isComputing = true;
    var a2;
    if (e2) a2 = _t(this, this.derivation, this.scope_);
    else if (true === I.disableErrorBoundaries) a2 = this.derivation.call(this.scope_);
    else try {
      a2 = this.derivation.call(this.scope_);
    } catch (e3) {
      a2 = new Je(e3);
    }
    this.isComputing = false;
    return a2;
  }, J.prototype.trackAndCompute = function() {
    var t2 = this.value_, e2 = (this.dependenciesState_ | 0) == -1, a2 = this.computeValue_(true);
    e2 = e2 || da(t2) || da(a2) || true !== this.equals_(t2, a2), e2 && (this.value_ = a2);
    return e2;
  }, J.prototype.get = function() {
    if (this.isComputing) {
      var t2 = this.derivation, e2 = [this.name_, t2];
      Ve(32, e2);
    }
    if (!I.inBatch && !this.observers_.size && !this.keepAlive_) Ia(this) && (N(), this.value_ = this.computeValue_(false), K());
    else {
      X(this);
      if (Ia(this)) e2 = I.trackingContext, this.keepAlive_ && !e2 && (I.trackingContext = this), !this.trackAndCompute() || (function(e3) {
        if (2 !== e3.lowestObserverState_) {
          e3.lowestObserverState_ = 2;
          var a2 = $e;
          $e = e3, e3.observers_.forEach(Ut), $e = a2;
        }
      })(this), I.trackingContext = e2;
    }
    e2 = this.value_, da(e2) && oa(e2.cause);
    return e2;
  }, J.prototype.set = Br(function(e2, a2) {
    if (e2.setter_) {
      !e2.isRunningSetter || re(33, e2.name_), e2.isRunningSetter = true;
      try {
        e2.setter_.call(e2.scope_, a2);
      } finally {
        e2.isRunningSetter = false;
      }
    } else re(34, e2.name_);
  }), J.prototype.suspend_ = function() {
    this.keepAlive_ || (Ha(this), this.value_ = void 0);
  }, J.prototype.warnAboutUntrackedRead_ = function() {
  }, J.prototype.toString = function() {
    let e2 = this.name_ + "[";
    return e2 + this.derivation.toString() + "]";
  }, J.prototype.valueOf = function() {
    return st(this.get());
  }, J.prototype[Symbol.toPrimitive] = function() {
    return this.valueOf();
  }, je("ComputedValue", J), e = J.prototype, he(e, "isComputing", 1), he(e, "isRunningSetter", 2), he(e, "isBeingObserved", 4), he(e, "isPendingUnobservation", 8), Ca(e, "diffValue", 16);
  var P;
  var ea;
  var Ee;
  var De;
  var aa;
  var Sa;
  var Ge = void 0;
  var ka;
  var qa;
  var ta;
  var Re = void 0;
  var qe = void 0;
  qe = function(e2) {
    return e2;
  }, Re = function(e2, a2, t2) {
    return la(e2) ? e2 : Array.isArray(e2) ? t2 ? P.array.call(P, e2, { name: t2 }) : P.array.call(P, e2) : _e(e2) ? t2 ? P.object.call(P, e2, void 0, { name: t2 }) : P.object.call(P, e2) : Ke(e2) ? t2 ? P.map.call(P, e2, { name: t2 }) : P.map.call(P, e2) : Le(e2) ? t2 ? P.set.call(P, e2, { name: t2 }) : P.set.call(P, e2) : "function" == typeof e2 && !Ce(e2) && !Me(e2) ? bt(e2) ? Ge(e2) : aa(t2, e2) : e2;
  };
  var t = function(e2, a2, t2) {
    return null == e2 ? e2 : T(e2) || $(e2) || B(e2) || U(e2) ? e2 : Array.isArray(e2) ? P.array.call(P, e2, { name: t2, deep: false }) : _e(e2) ? P.object.call(P, e2, void 0, { name: t2, deep: false }) : Ke(e2) ? P.map.call(P, e2, { name: t2, deep: false }) : Le(e2) ? P.set.call(P, e2, { name: t2, deep: false }) : e2;
  };
  var d = function(e2, a2) {
    return Be(e2, a2, -1, void 0, void 0) ? a2 : e2;
  };
  var Wa = { deep: true, name: void 0, defaultDecorator: void 0 };
  E.freeze(Wa);
  var L = (0, function(e2, a2, t2, n, r) {
    var s = arguments.length > 2 && t2 !== void 0 ? t2 + "" : "ObservableValue";
    if (arguments.length > 3) {
    }
    var m = ya;
    arguments.length > 4 && r && (m = r), ee.call(this, s), this.enhancer_ = a2, this.name_ = s, this.equals_ = m, this.hasUnreportedChange_ = false, this.value_ = a2(e2, void 0, s);
    return this;
  });
  E.setPrototypeOf(L.prototype, ee.prototype), L.prototype.constructor = L, L.prototype.prepareNewValue_ = function(e2) {
    if (be(this)) {
      var a2 = se(this, { object: this, type: "update", newValue: e2 });
      if (!a2) return I.UNCHANGED;
      e2 = a2.newValue;
    }
    e2 = this.enhancer_(e2, this.value_, this.name_);
    return true === this.equals_(this.value_, e2) ? I.UNCHANGED : e2;
  }, L.prototype.setNewValue_ = function(e2) {
    var t2 = this.value_;
    this.value_ = e2, ce(this), de(this) && le(this, { type: "update", object: this, newValue: e2, oldValue: t2 });
  }, L.prototype.set = function(e2) {
    e2 = this.prepareNewValue_(e2), e2 === I.UNCHANGED || this.setNewValue_(e2);
  }, L.prototype.get = function() {
    X(this);
    return this.dehancer === void 0 ? this.value_ : this.dehancer(this.value_);
  }, L.prototype.raw = function() {
    return this.value_;
  }, L.prototype.toJSON = function() {
    return this.get();
  }, L.prototype.toString = function() {
    let e2 = this.name_ + "[";
    return e2 + this.value_ + "]";
  }, L.prototype.valueOf = function() {
    return st(this.get());
  }, L.prototype[Symbol.toPrimitive] = function() {
    return this.valueOf();
  }, Te = je("ObservableValue", L), a = { annotationType_: "override", make_: function(e2, a2) {
    return 0;
  }, extend_: function() {
    re(44, this.annotationType_);
    return false;
  } };
  var Xa = (0, function(e2, a2, t2, n) {
    if (t2.get) return Ee.make_.call(Ee, e2, a2, t2, n);
    if (t2.set) {
      var s = t2.set;
      Ce(s) || (s = me(ne(a2), s, false, void 0));
      if (n === e2.target_) return null == e2.defineProperty_(a2, { configurable: true, set: s }) ? 0 : 2;
      F(n, a2, { configurable: true, set: s });
      return 2;
    }
    if (n !== e2.target_ && "function" == typeof t2.value) {
      if (bt(t2.value)) {
        var r = Ge;
        this.options_ && this.options_.autoBind && (r = ka);
        return r.make_(e2, a2, t2, n);
      }
      r = aa, this.options_ && this.options_.autoBind && (r = Sa);
      return r.make_(e2, a2, t2, n);
    }
    r = P, this.options_ && false === this.options_.deep && (r = ea), "function" == typeof t2.value && this.options_ && this.options_.autoBind && (t2.value = t2.value.bind(Z(e2)));
    return r.make_(e2, a2, t2, n);
  });
  var Fa = (0, function(e2, a2, t2, n) {
    if (t2.get) return Ee.extend_.call(Ee, e2, a2, t2, n);
    if (t2.set) {
      var s = e2.defineProperty_;
      return e2.defineProperty_(a2, { configurable: true, set: me(ne(a2), t2.set, false, void 0) }, n);
    }
    "function" == typeof t2.value && this.options_ && this.options_.autoBind && (t2.value = t2.value.bind(Z(e2)));
    var r = P;
    this.options_ && false === this.options_.deep && (r = ea);
    return r.extend_(e2, a2, t2, n);
  });
  e = { annotationType_: "true", options_: void 0, make_: Xa, extend_: Fa }, qa = e;
  var Qa = E.create(null);
  var q = (0, function(e2, a2, t2, n) {
    this.target_ = e2, this.values_ = arguments.length > 1 && a2 ? a2 : /* @__PURE__ */ new Map(), this.name_ = t2 + "", this.defaultAnnotation_ = qa, arguments.length > 3 && n && (this.defaultAnnotation_ = n), this.keysAtom_ = new ee("ObservableObject.keys"), this.isPlainObject_ = _e(this.target_);
    return this;
  });
  q.prototype.materializeLazyComputed_ = function(e2) {
    if (this.lazyComputedKeys_) {
      var t2 = this.lazyComputedKeys_.get(e2);
      if (!t2) return;
      this.lazyComputedKeys_.delete(e2), 0 == this.lazyComputedKeys_.size && (this.lazyComputedKeys_ = void 0), t2 = t2(), this.values_.set(e2, t2);
      return t2;
    }
  }, q.prototype.materializeLazyObservable_ = function(e2) {
    if (this.lazyObservableKeys_) {
      var t2 = this.lazyObservableKeys_.get(e2);
      if (!t2) return;
      this.lazyObservableKeys_.delete(e2), 0 == this.lazyObservableKeys_.size && (this.lazyObservableKeys_ = void 0), t2 = t2(), this.values_.set(e2, t2);
      return t2;
    }
  }, q.prototype.getObservablePropValue_ = function(e2) {
    var t2 = this.values_.get(e2);
    t2 || (t2 = this.materializeLazyComputed_(e2) || this.materializeLazyObservable_(e2));
    return t2.get();
  }, q.prototype.setObservablePropValue_ = function(e2, a2) {
    var t2 = this.values_.get(e2);
    t2 = t2 || this.materializeLazyComputed_(e2) || this.materializeLazyObservable_(e2);
    if (ie(t2)) {
      t2.set(a2);
      return true;
    }
    if (be(this)) {
      var n = se(this, { type: "update", object: Z(this), name: e2, newValue: a2 });
      if (!n) return null;
      a2 = n.newValue;
    }
    a2 = t2.prepareNewValue_(a2);
    if (a2 !== I.UNCHANGED) {
      var r = de(this);
      n = null, (r || false) && (n = this.name_, n = { type: "update", observableKind: "object", debugObjectName: n, object: Z(this), oldValue: t2.value_, name: e2, newValue: a2 }), t2.setNewValue_(a2), r && le(this, n);
    }
    return true;
  }, q.prototype.get_ = function(e2) {
    I.trackingDerivation && !we.call(this.target_, e2) && this.has_(e2);
    return this.target_[e2];
  }, q.prototype.set_ = function(e2, a2) {
    return jt(this, e2, a2, false);
  }, q.prototype.has_ = function(e2) {
    if (!I.trackingDerivation) return true === e2 in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var a2 = this.pendingKeys_.get(e2);
    a2 || (a2 = L, a2 = new a2(true === e2 in this.target_, qe, "ObservableObject.key?", false), this.pendingKeys_.set(e2, a2));
    return a2.get();
  }, q.prototype.extend_ = function() {
    var a2 = arguments[0], t2 = arguments[1], e2 = arguments[2], n = arguments.length > 3 && arguments[3];
    true === e2 && (e2 = this.defaultAnnotation_);
    if (false === e2) return this.defineProperty_(a2, t2, n);
    var r = e2.extend_(this, a2, t2, n);
    if (r) {
    }
    return r;
  }, q.prototype.notifyPropertyAddition_ = function(e2, a2) {
    var t2 = de(this);
    if (t2 || false) a2 = { type: "add", observableKind: "object", debugObjectName: this.name_, object: Z(this), name: e2, newValue: a2 }, t2 && le(this, a2);
    !this.pendingKeys_ || (e2 = this.pendingKeys_.get(e2), !e2 || e2.set(true)), ce(this.keysAtom_);
  }, q.prototype.defineProperty_ = function(e2, a2, t2) {
    t2 = !!t2;
    try {
      N();
      var r = this.delete_(e2);
      if (!r) return r;
      if (be(this)) {
        var n = se(this, { object: Z(this), name: e2, type: "add", newValue: a2.value });
        if (!n) return null;
        a2.value === n.newValue || (a2 = te({}, a2), a2.value = n.newValue);
      }
      if (t2) {
        if (true !== Reflect.defineProperty(this.target_, e2, a2)) return false;
      } else F(this.target_, e2, a2);
      this.notifyPropertyAddition_(e2, a2.value);
    } finally {
      K();
    }
    return true;
  }, q.prototype.defineObservableProperty_ = function() {
    var e2 = arguments[0], a2 = arguments[1], u = arguments[2], g2 = arguments.length > 3 && arguments[3];
    try {
      N();
      var t2 = this.delete_(e2);
      if (!t2) return t2;
      if (be(this)) {
        var n = se(this, { object: Z(this), name: e2, type: "add", newValue: a2 });
        if (!n) return null;
        a2 = n.newValue;
      }
      var r = At(e2), s = true;
      !I.safeDescriptors || (s = !!this.isPlainObject_);
      var m = { configurable: s, enumerable: true, get: r.get, set: r.set };
      if (g2) {
        if (true !== Reflect.defineProperty(this.target_, e2, m)) return false;
      } else F(this.target_, e2, m);
      var o = new L(a2, u, "ObservableObject.key", false);
      this.values_.set(e2, o), this.notifyPropertyAddition_(e2, o.value_);
    } finally {
      K();
    }
    return true;
  }, q.prototype.defineComputedProperty_ = function(e2, a2, t2) {
    t2 = !!t2;
    try {
      N();
      var n = this.delete_(e2);
      if (!n) return n;
      if (be(this) && !se(this, { object: Z(this), name: e2, type: "add", newValue: void 0 })) return null;
      a2.name || (a2.name = "ObservableObject.key"), a2.context = Z(this);
      var r = At(e2), s = true;
      !I.safeDescriptors || (s = !!this.isPlainObject_);
      var m = { configurable: s, enumerable: false, get: r.get, set: r.set };
      if (t2) {
        if (true !== Reflect.defineProperty(this.target_, e2, m)) return false;
      } else F(this.target_, e2, m);
      this.values_.set(e2, new J(a2)), this.notifyPropertyAddition_(e2, void 0);
    } finally {
      K();
    }
    return true;
  }, q.prototype.delete_ = function(e2, a2) {
    var r = !!a2;
    if (!we.call(this.target_, e2)) return true;
    if (be(this) && !se(this, { object: Z(this), name: e2, type: "remove" })) return null;
    try {
      N();
      var s = de(this);
      a2 = false;
      var m, o = a2, n = this.values_.get(e2);
      if (!n && (s || o)) {
        var u = E.getOwnPropertyDescriptor(this.target_, e2);
        !u || (m = u.value);
      }
      if (r) {
        if (true !== Reflect.deleteProperty(this.target_, e2)) return false;
      } else true === Reflect.deleteProperty(this.target_, e2) || (function(e3) {
        throw new TypeError(e3);
      })("Cannot delete property '" + ne(e2) + "'");
      a2 = false, a2 && delete this.appliedAnnotations_[e2], !n || (this.values_.delete(e2), !Te(n) || (m = n.value_), ft(n)), ce(this.keysAtom_);
      if (this.pendingKeys_) {
        var t2 = this.pendingKeys_.get(e2);
        !t2 || (a2 = t2.set, r = t2, a2.call(r, true === e2 in this.target_));
      }
      if (s || o) {
        var g2 = { type: "remove", observableKind: "object", object: Z(this), debugObjectName: this.name_, oldValue: m, name: e2 };
        if (e2 = false) {
        }
        s && le(this, g2);
        if (false) {
        }
      }
    } finally {
      K();
    }
    return true;
  }, q.prototype.ownKeys_ = function() {
    X(this.keysAtom_);
    return Reflect.ownKeys(this.target_);
  }, q.prototype.keys_ = function() {
    X(this.keysAtom_);
    return E.keys(this.target_);
  }, za = je("ObservableObjectAdministration", q);
  var Ne = function(e2, a2) {
    if (we.call(e2, H)) return e2;
    var t2 = a2 && a2.name ? a2.name + "" : "ObservableObject";
    t2 = new q(e2, /* @__PURE__ */ new Map(), t2, (function(e3) {
      if (e3) {
        if (e3.defaultDecorator !== void 0) return e3.defaultDecorator;
        if (e3.autoBind || false === e3.deep) return { annotationType_: "true", options_: e3, make_: Xa, extend_: Fa };
      }
    })(a2)), F(e2, H, { enumerable: false, writable: true, configurable: true, value: t2 });
    return e2;
  };
  var Oe = {};
  Oe.has = function(e2, a2) {
    return e2[H].has_.call(e2[H], a2);
  }, Oe.get = function(e2, a2) {
    return e2[H].get_.call(e2[H], a2);
  }, Oe.set = function(e2, a2, t2) {
    if (!Ra(a2)) return false;
    var n = jt(e2[H], a2, t2, true);
    return null == n ? true : !!n;
  }, Oe.deleteProperty = function(e2, a2) {
    if (!Ra(a2)) return false;
    var t2 = e2[H].delete_.call(e2[H], a2, true);
    return null == t2 ? true : !!t2;
  }, Oe.defineProperty = function(e2, a2, t2) {
    var n = e2[H].defineProperty_.call(e2[H], a2, t2);
    return null == n ? true : !!n;
  }, Oe.ownKeys = function(e2) {
    return e2[H].ownKeys_.call(e2[H]);
  }, Oe.preventExtensions = function(e2) {
    M(13);
    return false;
  };
  var W = {};
  var na = {};
  na.get = function(e2, a2) {
    var t2 = e2[H];
    return a2 === H ? t2 : "length" === a2 ? t2.getArrayLength_() : "string" == typeof a2 && true !== isNaN(a2) ? t2.get_(parseInt(a2)) : we.call(W, a2) ? W[a2] : e2[a2];
  }, na.set = function(e2, a2, t2) {
    var n = e2[H];
    "length" === a2 && n.setArrayLength_(t2), "symbol" == typeof a2 || true === isNaN(a2) ? e2[a2] = t2 : n.set_(parseInt(a2), t2);
    return true;
  }, na.preventExtensions = function() {
    M(15);
    return false;
  };
  var ve = (0, function(e2, a2, t2) {
    var n = arguments.length > 0 && e2 !== void 0 ? e2 + "" : "ObservableArray";
    this.owned_ = false, arguments.length > 2 && (this.owned_ = !!t2), this.atom_ = new ee(n), this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0;
    var r = "ObservableArray[..]";
    this.enhancer_ = function(e3, t3, n2) {
      return a2(e3, t3, r);
    };
    return this;
  });
  ve.prototype.dehanceValue_ = function(e2) {
    return this.dehancer !== void 0 ? this.dehancer(e2) : e2;
  }, ve.prototype.dehanceValues_ = function(e2) {
    return this.dehancer !== void 0 && e2.length > 0 ? e2.map(this.dehancer) : e2;
  }, ve.prototype.getArrayLength_ = function() {
    X(this.atom_);
    return this.values_.length;
  }, ve.prototype.setArrayLength_ = function(e2) {
    ("number" != typeof e2 || true === Number.isNaN(e2) || (e2 | 0) < 0) && re(40, e2), e2 = e2 | 0;
    var a2 = this.values_.length;
    if (e2 != a2) e2 > a2 ? (e2 = new Array(e2 - a2 | 0), this.spliceWithArray_(a2, 0, e2)) : this.spliceWithArray_(e2, a2 - e2 | 0);
  }, ve.prototype.spliceWithArray_ = function() {
    var t2 = this.values_.length, e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] | 0 : 0, a2 = 1 == arguments.length ? t2 - e2 | 0 : arguments.length > 1 && arguments[1] !== void 0 && null != arguments[1] ? arguments[1] | 0 : 0;
    t2 = void 0, arguments.length > 2 && (t2 = arguments[2]);
    return pa(this, e2, a2, t2);
  }, ve.prototype.get_ = function(e2) {
    X(this.atom_);
    return this.dehanceValue_(this.values_[e2]);
  }, ve.prototype.set_ = function(e2, a2) {
    e2 = e2 | 0;
    var t2 = this.values_;
    if (e2 < t2.length) {
      var n = t2[e2];
      if (be(this)) {
        var r = se(this, { type: "update", object: this.proxy_, index: e2, newValue: a2 });
        if (!r) return;
        a2 = r.newValue;
      }
      a2 = this.enhancer_(a2, n), a2 === n || (t2[e2] = a2, (function(e3, a3, t3, n2) {
        var r2 = de(e3), s2 = null;
        r2 && (s2 = { observableKind: "array", object: e3.proxy_, type: "update", debugObjectName: e3.atom_.name_, index: a3, newValue: t3, oldValue: n2 }), ce(e3.atom_), r2 && le(e3, s2);
      })(this, e2, a2, n));
    } else {
      n = Array, e2++, e2 = new n(e2 - t2.length | 0);
      var s = e2.length - 1 | 0;
      e2[s] = a2, pa(this, t2.length, 0, e2);
    }
  };
  var qt = function(e2, a2, t2, n) {
    var r = "ObservableArray";
    arguments.length > 2 && t2 !== void 0 && (r = t2 + "");
    var s = false;
    arguments.length > 3 && (s = !!n);
    return Ie(function() {
      var t3 = new ve(r, a2, s);
      F(t3.values_, H, { enumerable: false, writable: false, configurable: true, value: t3 });
      var n2 = new Proxy(t3.values_, na);
      t3.proxy_ = n2, e2 && e2.length > 0 && t3.spliceWithArray_(0, 0, e2);
      return n2;
    });
  };
  Ba = je("ObservableArrayAdministration", ve), W.clear = function() {
    return this.splice(0);
  }, W.replace = function(e2) {
    let a2 = this[H], t2 = a2.spliceWithArray_;
    return a2.spliceWithArray_(0, a2.values_.length, e2);
  }, W.toJSON = function() {
    return this.slice();
  }, W.splice = function(e2, a2) {
    var t2 = this[H];
    return 0 == arguments.length ? [] : 1 == arguments.length ? t2.spliceWithArray_(e2) : 2 == arguments.length ? t2.spliceWithArray_(e2, a2) : t2.spliceWithArray_(e2, a2, xe.call(arguments, 2, arguments.length));
  }, W.spliceWithArray = function() {
    return this[H].spliceWithArray_.apply(this[H], arguments);
  }, W.push = function() {
    let e2 = this[H];
    pa(e2, e2.values_.length, 0, arguments);
    return e2.values_.length;
  }, W.pop = function() {
    var t2 = this[H].values_.length - 1 | 0;
    t2 < 0 && (t2 = 0);
    return this.splice(t2, 1)[0];
  }, W.shift = function() {
    return this.splice(0, 1)[0];
  }, W.unshift = function() {
    let e2 = this[H];
    pa(e2, 0, 0, arguments);
    return e2.values_.length;
  }, W.reverse = function() {
    !I.trackingDerivation || re(37, "reverse"), this.replace(this.slice().reverse());
    return this;
  }, W.sort = function() {
    !I.trackingDerivation || re(37, "sort");
    var e2 = this.slice();
    e2.sort.apply(e2, arguments), this.replace(e2);
    return this;
  }, W.remove = function(e2) {
    var t2 = this[H];
    e2 = t2.dehanceValues_(t2.values_).indexOf(e2);
    return e2 > -1 ? (this.splice(e2, 1), true) : false;
  }, ae("at"), ae("concat"), ae("flat"), ae("includes"), ae("indexOf"), ae("join"), ae("lastIndexOf"), ae("slice"), ae("toString"), ae("toLocaleString"), ae("toSorted"), ae("toSpliced"), ae("with"), fe("every"), fe("filter"), fe("find"), fe("findIndex"), fe("findLast"), fe("findLastIndex"), fe("flatMap"), fe("forEach"), fe("map"), fe("some"), fe("toReversed"), xt("reduce"), xt("reduceRight");
  var Wt = {};
  var D = (0, function(e2, a2, n) {
    var t2 = this;
    t2[H] = Wt, t2.enhancer_ = Re, !a2 || (t2.enhancer_ = a2), a2 = n !== void 0 ? n + "" : "ObservableMap", t2.name_ = a2, t2.interceptors_ = void 0, t2.changeListeners_ = void 0, t2.dehancer = void 0, Ie(function() {
      t2.keysAtom_ = wa("ObservableMap.keys()"), t2.data_ = /* @__PURE__ */ new Map(), t2.hasMap_ = /* @__PURE__ */ new Map(), !e2 || t2.merge(e2);
    });
    return t2;
  });
  D.prototype.has_ = function(e2) {
    return !!this.data_.has(e2);
  }, D.prototype.has = function(e2) {
    var t2 = this;
    if (!I.trackingDerivation) return t2.has_(e2);
    var a2 = t2.hasMap_.get(e2);
    a2 || (a2 = new L(t2.has_(e2), qe, "ObservableMap.key?", false), t2.hasMap_.set(e2, a2), a2.onBUOL = /* @__PURE__ */ new Set(), a2.onBUOL.add(function() {
      t2.hasMap_.delete(e2);
    }));
    return a2.get();
  }, D.prototype.set = function(e2, a2) {
    var n = !!this.data_.has(e2);
    if (be(this)) {
      var t2 = n ? "update" : "add";
      t2 = se(this, { type: t2, object: this, newValue: a2, name: e2 });
      if (!t2) return this;
      a2 = t2.newValue;
    }
    n ? this.updateValue_(e2, a2) : this.addValue_(e2, a2);
    return this;
  }, D.prototype.updateValue_ = function(e2, a2) {
    var t2 = this.data_.get(e2);
    a2 = t2.prepareNewValue_(a2);
    if (a2 !== I.UNCHANGED) {
      var n = de(this), r = null;
      n && (r = { observableKind: "map", debugObjectName: this.name_, type: "update", object: this, oldValue: t2.value_, name: e2, newValue: a2 }), t2.setNewValue_(a2), n && le(this, r);
    }
  }, D.prototype.addValue_ = function(e2, a2) {
    N();
    try {
      var n = new L(a2, this.enhancer_, "ObservableMap.key", false);
      this.data_.set(e2, n), a2 = n.value_;
      var t2 = this.hasMap_.get(e2);
      !t2 || t2.setNewValue_.call(t2, true), ce(this.keysAtom_);
    } finally {
      K();
    }
    var r = false, s = de(this), m = null;
    s && (r = true), r && (m = { observableKind: "map", debugObjectName: this.name_, type: "add", object: this, name: e2, newValue: a2 }), s && le(this, m);
  }, D.prototype.delete = function(e2) {
    if (be(this) && !se(this, { type: "delete", object: this, name: e2 })) return false;
    if (this.data_.has(e2)) {
      var a2 = false, n = de(this), r = null;
      n && (a2 = true), a2 && (a2 = this.name_, r = { observableKind: "map", debugObjectName: a2, type: "delete", object: this, oldValue: this.data_.get(e2).value_, name: e2 }), N();
      try {
        ce(this.keysAtom_);
        var t2 = this.hasMap_.get(e2);
        !t2 || t2.setNewValue_.call(t2, false);
        var s = this.data_.get(e2);
        s.setNewValue_.call(s, void 0), this.data_.delete(e2);
      } finally {
        K();
      }
      n && le(this, r);
      return true;
    }
    return false;
  }, D.prototype.get = function(e2) {
    return this.has(e2) ? (e2 = this.data_.get(e2), va(this, e2.get())) : va(this, void 0);
  }, D.prototype.getOrInsert = function(e2, a2) {
    this.has(e2) || this.set(e2, a2);
    return this.get(e2);
  }, D.prototype.getOrInsertComputed = function(e2, a2) {
    this.has(e2) || this.set(e2, a2(e2));
    return this.get(e2);
  }, D.prototype.keys = function() {
    X(this.keysAtom_);
    return this.data_.keys();
  }, D.prototype.values = function() {
    var t2 = this;
    let a2 = t2.keys(), e2 = { next: function() {
      var e3 = a2.next();
      return e3.done ? { done: true, value: void 0 } : { done: false, value: t2.get(e3.value) };
    } };
    e2[Symbol.toStringTag] = "MapIterator";
    return ba(e2);
  }, D.prototype.entries = function() {
    var t2 = this;
    let a2 = t2.keys(), e2 = { next: function() {
      var e3 = a2.next();
      if (e3.done) return { done: true, value: void 0 };
      var n = [e3.value, t2.get(e3.value)];
      return { done: false, value: n };
    } };
    e2[Symbol.toStringTag] = "MapIterator";
    return ba(e2);
  }, D.prototype.forEach = function(e2, a2) {
    var t2 = this.entries(), n = t2.next();
    while (!n.done) {
      e2.call(a2, n.value[1], n.value[0], this), n = t2.next();
    }
  }, D.prototype.merge = function(e2) {
    var t2 = this;
    B(e2) && (e2 = new Map(e2)), N();
    try {
      if (_e(e2)) {
        var r = (function(e3) {
          var a3 = E.keys(e3), t3 = E.getOwnPropertySymbols(e3);
          if (0 == t3.length) return a3;
          var n2 = xe.call(a3), s2 = t3.length;
          a3 = 0;
          for (; a3 < s2; a3++) {
            var r2 = t3[a3];
            true === E.prototype.propertyIsEnumerable.call(e3, r2) && n2.push(r2);
          }
          return n2;
        })(e2), a2 = 0;
        for (; ; a2++) {
          var s = a2;
          if (s >= r.length) break;
          t2.set(r[a2], e2[r[a2]]);
        }
      } else if (Array.isArray(e2)) {
        var n = 0;
        for (; ; n++) {
          s = n;
          if (s >= e2.length) break;
          t2.set(e2[n][0], e2[n][1]);
        }
      } else Ke(e2) ? (null == E.getPrototypeOf(E.getPrototypeOf(E.getPrototypeOf(e2))) || re(19, e2), e2.forEach(function(e3, a3) {
        t2.set(a3, e3);
      })) : null == e2 || re(20, e2);
    } finally {
      K();
    }
    return t2;
  }, D.prototype.clear = function() {
    N();
    try {
      var t2 = ye();
      try {
        var a2 = Y(this.keys()), e2 = 0;
        for (; ; e2++) {
          if (e2 >= a2.length) break;
          this.delete(a2[e2]);
        }
      } finally {
        oe(t2);
      }
    } finally {
      K();
    }
  }, D.prototype.replace = function(e2) {
    N();
    try {
      var u = (function(e3) {
        if (Ke(e3) || B(e3)) return e3;
        if (Array.isArray(e3)) return new Map(e3);
        if (_e(e3)) {
          var n2 = /* @__PURE__ */ new Map(), t3 = E.keys(e3), a3 = 0;
          for (; a3 < t3.length; a3++) n2.set(t3[a3], e3[t3[a3]]);
          return n2;
        }
        re(21, e3);
        return /* @__PURE__ */ new Map();
      })(e2), t2 = /* @__PURE__ */ new Map(), s = false, g2 = Y(this.data_.keys()), a2 = 0;
      for (; ; a2++) {
        e2 = a2;
        if (e2 >= g2.length) break;
        var r = g2[a2];
        u.has(r) || (this.delete(r) ? s = true : t2.set(r, this.data_.get(r)));
      }
      var m = Y(u.entries());
      for (a2 = 0; ; a2++) {
        e2 = a2;
        if (e2 >= m.length) break;
        var n = m[a2][0], H2 = m[a2][1], i = !!this.data_.has(n);
        this.set(n, H2), !this.data_.has(n) || (t2.set(n, this.data_.get(n)), i || (s = true));
      }
      if (!s) {
        e2 = this.data_.size;
        if (e2 != t2.size) ce(this.keysAtom_);
        else {
          var I2 = this.data_.keys(), l2 = t2.keys(), o = I2.next(), b = l2.next();
          while (!o.done) {
            if (o.value !== b.value) {
              ce(this.keysAtom_);
              break;
            }
            o = I2.next(), b = l2.next();
          }
        }
      }
      this.data_ = t2;
    } finally {
      K();
    }
    return this;
  }, D.prototype.toJSON = function() {
    return Y(this);
  }, D.prototype.toString = function() {
    return "[object ObservableMap]";
  }, D.prototype[Symbol.iterator] = function() {
    return this.entries();
  }, ca(D.prototype, "size", function() {
    X(this.keysAtom_);
    return this.data_.size;
  }), ca(D.prototype, Symbol.toStringTag, function() {
    return "Map";
  }), La = je("ObservableMap", D);
  var Xt = {};
  var z = (0, function(e2, a2, n) {
    var t2 = this;
    t2[H] = Xt;
    var r = "ObservableSet";
    n === void 0 || (r = n + ""), t2.name_ = r;
    var s = Re;
    !a2 || (s = a2), t2.enhancer_ = function(e3, a3, t3) {
      return s(e3, a3, r);
    }, t2.data_ = /* @__PURE__ */ new Set(), t2.changeListeners_ = void 0, t2.interceptors_ = void 0, t2.dehancer = void 0, Ie(function() {
      t2.atom_ = wa(t2.name_), !e2 || t2.replace(e2);
    });
    return t2;
  });
  z.prototype.has = function(e2) {
    X(this.atom_);
    return !!this.data_.has(va(this, e2));
  }, z.prototype.add = function(e2) {
    if (be(this)) {
      var a2 = se(this, { type: "add", object: this, newValue: e2 });
      if (!a2) return this;
      e2 = a2.newValue;
    }
    if (!this.has(e2)) {
      N();
      try {
        this.data_.add(this.enhancer_(e2, void 0)), ce(this.atom_);
      } finally {
        K();
      }
      a2 = false;
      var t2 = de(this), n = null;
      t2 && (a2 = true), a2 && (n = { observableKind: "set", debugObjectName: this.name_, type: "add", object: this, newValue: e2 }), t2 && le(this, n);
    }
    return this;
  }, z.prototype.delete = function(e2) {
    if (be(this) && !se(this, { type: "delete", object: this, oldValue: e2 })) return false;
    if (this.has(e2)) {
      var a2 = false, t2 = de(this), n = null;
      t2 && (a2 = true), a2 && (n = { observableKind: "set", debugObjectName: this.name_, type: "delete", object: this, oldValue: e2 }), N();
      try {
        ce(this.atom_), this.data_.delete(e2);
      } finally {
        K();
      }
      t2 && le(this, n);
      return true;
    }
    return false;
  }, z.prototype.values = function() {
    var t2 = this;
    X(t2.atom_);
    let a2 = t2.data_.values(), e2 = { next: function() {
      var e3 = a2.next();
      return e3.done ? { done: true, value: void 0 } : { done: false, value: va(t2, e3.value) };
    } };
    e2[Symbol.toStringTag] = "SetIterator";
    return ba(e2);
  }, z.prototype.keys = function() {
    return this.values();
  }, z.prototype.entries = function() {
    let a2 = this.values(), e2 = { next: function() {
      var e3 = a2.next();
      if (e3.done) return { done: true, value: void 0 };
      var t2 = [e3.value, e3.value];
      return { done: false, value: t2 };
    } };
    e2[Symbol.toStringTag] = "SetIterator";
    return ba(e2);
  }, z.prototype.forEach = function(e2, a2) {
    var t2 = this.values(), n = t2.next();
    while (!n.done) {
      e2.call(a2, n.value, n.value, this), n = t2.next();
    }
  }, z.prototype.replace = function(e2) {
    var t2 = this;
    U(e2) && (e2 = new Set(e2)), N();
    try {
      if (Array.isArray(e2)) {
        t2.clear();
        var a2 = 0;
        for (; ; a2++) {
          if (a2 >= e2.length) break;
          t2.add(e2[a2]);
        }
      } else Le(e2) ? (t2.clear(), e2.forEach(function(e3) {
        t2.add(e3);
      })) : null == e2 || re(41, e2);
    } finally {
      K();
    }
    return t2;
  }, z.prototype.clear = function() {
    N();
    try {
      var t2 = ye();
      try {
        var a2 = Y(this.data_.values()), e2 = 0;
        for (; ; e2++) {
          if (e2 >= a2.length) break;
          this.delete(a2[e2]);
        }
      } finally {
        oe(t2);
      }
    } finally {
      K();
    }
  }, z.prototype.toJSON = function() {
    return Y(this);
  }, z.prototype.toString = function() {
    return "[object ObservableSet]";
  }, z.prototype[Symbol.iterator] = function() {
    return this.values();
  }, ca(z.prototype, "size", function() {
    X(this.atom_);
    return this.data_.size;
  }), ca(z.prototype, Symbol.toStringTag, function() {
    return "Set";
  }), He("intersection"), He("union"), He("difference"), He("symmetricDifference"), He("isSubsetOf"), He("isSupersetOf"), He("isDisjointFrom"), Ma = je("ObservableSet", z);
  var Ya = (0, function(e2, a2, t2) {
    return null == this.extend_(e2, a2, t2, false) ? 0 : 1;
  });
  var Ft = (0, function(e2, a2, t2, n) {
    var r = Re;
    this.options_ && this.options_.enhancer_ && (r = this.options_.enhancer_);
    return e2.defineObservableProperty_(a2, t2.value, r, n);
  });
  var Qt = (0, function(e2, a2, t2, n) {
    var r = te({}, this.options_);
    r.get = t2.get, r.set = t2.set;
    return e2.defineComputedProperty_(a2, r, n);
  });
  var Yt = (0, function(e2, a2, t2, n) {
    if (this.options_ && this.options_.bound) return null == this.extend_(e2, a2, t2, false) ? 0 : 1;
    if (n === e2.target_) return null == this.extend_(e2, a2, t2, false) ? 0 : 2;
    if (Ce(t2.value)) return 1;
    F(n, a2, Gt(e2, this, a2, t2, false));
    return 2;
  });
  var $t = (0, function(e2, a2, t2, n) {
    return e2.defineProperty_(a2, Gt(e2, this, a2, t2, !!I.safeDescriptors), n);
  });
  var $a = function(e2, a2, t2) {
    var n = t2.name;
    Me(a2) || (a2 = Ge(a2)), e2.options_ && e2.options_.bound && t2.addInitializer(function() {
      let e3 = this[n].bind(this);
      e3.isMobXFlow = true, this[n] = e3;
    });
    return a2;
  };
  var Za = (0, function(e2, a2, t2, n) {
    if (n === e2.target_) return null == this.extend_(e2, a2, t2, false) ? 0 : 2;
    if (this.options_ && this.options_.bound && (!we.call(e2.target_, a2) || !Me(e2.target_[a2])) && this.extend_(e2, a2, t2, false) == null) return 0;
    if (Me(t2.value)) return 1;
    F(n, a2, Rt(e2, t2, false, false));
    return 2;
  });
  var et = (0, function(e2, a2, n, r) {
    var t2 = this.options_ && this.options_.bound;
    return e2.defineProperty_(a2, Rt(e2, n, t2, !!I.safeDescriptors), r);
  });
  ta = function(e2, a2, t2, n) {
    var r, s;
    arguments.length > 2 && (r = t2), arguments.length > 3 && (s = n);
    var m = E.getOwnPropertyDescriptors(a2);
    Ie(function() {
      var a3, n2, u = Ne(e2, s)[H], o = Reflect.ownKeys(m), t3 = 0;
      for (; t3 < o.length; t3++) a3 = o[t3], n2 = r ? true === a3 in r ? r[a3] : true : true, u.extend_(a3, m[a3], n2);
    });
    return e2;
  };
  var We = function(e2, a2, t2) {
    if ("accessor" == t2.kind + "") {
      var n = t2.name;
      return { get: function() {
        var t3 = this[H];
        return (t3 || Ea(this, e2, n, a2.get.call(this))).getObservablePropValue_(n);
      }, set: function(a3) {
        var t3 = this[H];
        return (t3 || Ea(this, e2, n, a3)).setObservablePropValue_(n, a3);
      }, init: function(a3) {
        Ea(this, e2, n, a3);
        return a3;
      } };
    }
  };
  var Aa = ga("observable", void 0);
  e = ga("observable.ref", { enhancer_: qe }), t = ga("observable.shallow", { enhancer_: t }), d = ga("observable.struct", { enhancer_: d }), P = te(function(e2, a2, t2) {
    return (function(e3, a3, t3) {
      return a3 && "string" == typeof a3.kind ? We(Aa, e3, a3) : la(e3) ? e3 : _e(e3) ? P.object.call(P, e3, a3, t3) : Array.isArray(e3) ? P.array.call(P, e3, a3) : Ke(e3) ? P.map.call(P, e3, a3) : Le(e3) ? P.set.call(P, e3, a3) : "object" == typeof e3 && null != e3 ? e3 : P.box.call(P, e3, a3);
    })(e2, a2, t2);
  }, Aa), P.box = function(e2, a2) {
    let t2 = ha(a2);
    return new L(e2, fa(t2), t2.name, true, t2.equals);
  }, P.array = function(e2, a2) {
    let t2 = ha(a2);
    return qt(e2, fa(t2), t2.name);
  }, P.map = function(e2, a2) {
    let t2 = ha(a2);
    return new D(e2, fa(t2), t2.name);
  }, P.set = function(e2, a2) {
    let t2 = ha(a2);
    return new z(e2, fa(t2), t2.name);
  }, P.object = function(e2, a2, t2) {
    return Ie(function() {
      var s = ta, n = {};
      n = Ne(n, t2);
      var r = n[H];
      r.proxy_ || (r.proxy_ = new Proxy(n, Oe)), n = r.proxy_;
      return s(n, e2, a2);
    });
  }, ea = pe(e, We);
  var l = pe(t, We);
  var f = pe(Aa, We);
  d = pe(d, We);
  var ja = function(e2, a2, t2) {
    var r, n = t2.name, s = function(t3, r2) {
      var s2 = te({}, e2.options_);
      s2.get = a2, s2.context = t3, s2.name || (s2.name = "ObservableObject." + ne(n));
      return new J(s2);
    };
    t2.addInitializer(function() {
      var t3 = this, e3 = Ne(t3)[H], r2 = e3.values_.get(n);
      ie(r2) && r2.derivation !== a2 && e3.values_.delete(n), e3.lazyComputedKeys_ || (e3.lazyComputedKeys_ = /* @__PURE__ */ new Map()), e3.lazyComputedKeys_.set(n, function() {
        return s(t3, e3);
      });
    });
    return function() {
      var e3, t3 = this[H], m = t3.values_.get(n);
      return ie(m) && m.derivation !== a2 ? (r = r || /* @__PURE__ */ new WeakMap(), e3 = r.get(this), e3 || (e3 = s(this, t3), r.set(this, e3)), e3.get()) : t3.getObservablePropValue_(n);
    };
  };
  var at = Pa("computed", void 0);
  e = Pa("computed.struct", { equals: function(e2, a2) {
    return Be(e2, a2, -1, void 0, void 0);
  } }), Ee = te(function(e2, a2) {
    if (a2 && "string" == typeof a2.kind) return ja(at, e2, a2);
    if (_e(e2)) return pe(Pa("computed", e2), ja);
    var t2 = {};
    _e(a2) && (t2 = te({}, a2)), t2.get = e2, t2.name || (t2.name = e2.name);
    return new J(t2);
  }, at);
  var h = pe(e, ja);
  t = (0, function(e2) {
    var a2 = e2.name + "";
    "" == a2 && (a2 = "<unnamed action>");
    return wt(a2, false, e2, this, void 0);
  });
  var ra = function(e2, a2, t2) {
    var n = t2.name, r = function(a3) {
      var t3 = ne(n);
      e2.options_ && e2.options_.name && (t3 = e2.options_.name + "");
      var r2 = e2.options_ && e2.options_.autoAction;
      return me(t3, a3, r2, void 0);
    };
    if ("field" == t2.kind + "") return function(a3) {
      Ce(a3) || (a3 = r(a3)), e2.options_ && e2.options_.bound && (a3 = a3.bind(this), a3.isMobxAction = true);
      return a3;
    };
    if ("method" == t2.kind + "") return Ce(a2) || (a2 = r(a2)), e2.options_ && e2.options_.bound && t2.addInitializer(function() {
      let e3 = this[n].bind(this);
      e3.isMobxAction = true, this[n] = e3;
    }), a2;
    a2 = e2.annotationType_;
    var s = ne(n), m = t2.kind;
    r = [a2, s, m], Ve(43, r);
  };
  var tt = Qe("action", void 0);
  e = Qe("action.bound", { bound: true });
  var nt = Qe("autoAction", { autoAction: true });
  var p = Qe("autoAction.bound", { autoAction: true, bound: true });
  De = te(function(e2, a2) {
    if (a2 && "string" == typeof a2.kind) {
      var t2 = tt;
      return ra(t2, e2, a2);
    }
    if ("function" == typeof e2) return t2 = e2.name + "", "" == t2 && (t2 = "<unnamed action>"), me(t2, e2, false, void 0);
    if ("function" == typeof a2) return me(e2 + "", a2, false, void 0);
    if (Ra(e2)) return t2 = "action", pe(Qe(t2, { name: e2, autoAction: false }), ra);
  }, tt), aa = te(function(e2, a2) {
    if (a2 && "string" == typeof a2.kind) {
      var t2 = tt;
      t2 = nt;
      return ra(t2, e2, a2);
    }
    if ("function" == typeof e2) return t2 = e2.name + "", "" == t2 && (t2 = "<unnamed action>"), me(t2, e2, true, void 0);
    if ("function" == typeof a2) return me(e2 + "", a2, true, void 0);
    if (Ra(e2)) return t2 = "autoAction", pe(Qe(t2, { name: e2, autoAction: true }), ra);
  }, nt);
  var v = pe(e, ra);
  Sa = pe(p, ra);
  var Se = (0, function() {
    this.message = "FLOW_CANCELLED", this.name = "FlowCancellationError";
    return this;
  });
  E.setPrototypeOf(Se.prototype, Error.prototype), Se.prototype.constructor = Se, F(Se, "name", { value: "FlowCancellationError", configurable: true }), Se.prototype.toString = function() {
    return "Error: " + this.message;
  }, p = function(e2) {
    return ot(Se, e2);
  };
  var g = function(e2, a2) {
    if (a2 && "string" == typeof a2.kind) return $a(Ge, e2, a2);
    var t2 = e2.name + "";
    "" == t2 && (t2 = "flow");
    var n = (0, function() {
      var r, s = t2, n2 = De(s, e2).apply(this, arguments), a3 = { rejector: void 0, pending: void 0, stepId: 0 }, m = function(e3) {
        a3.pending = void 0;
        try {
          var s2 = t2, m2 = De(s2, n2.next).call(n2, e3);
          r(m2);
        } catch (e4) {
          a3.rejector(e4);
        }
      }, u = function(e3) {
        a3.pending = void 0;
        try {
          var s2 = t2, m2 = De(s2, n2.throw).call(n2, e3);
          r(m2);
        } catch (e4) {
          a3.rejector(e4);
        }
      };
      r = function(e3) {
        if ("function" == typeof e3.then) {
          e3.then(r, a3.rejector);
          return;
        }
        if (e3.done) {
          a3.resolve(e3.value);
          return;
        }
        a3.pending = Promise.resolve(e3.value), a3.pending.then(m, u);
      };
      var o = new Promise(function(e3, t3) {
        a3.resolve = e3, a3.rejector = t3, m(void 0);
      });
      s = t2, o.cancel = De(s, function() {
        try {
          a3.pending && "function" == typeof a3.pending.cancel && a3.pending.cancel.call(a3.pending);
          var t3 = n2.return(void 0), e3 = Promise.resolve(t3.value);
          e3.then(Pe, Pe), "function" == typeof e3.cancel && e3.cancel.call(e3), a3.rejector(new Se());
        } catch (e4) {
          a3.rejector(e4);
        }
      });
      return o;
    });
    n.isMobXFlow = true;
    return n;
  };
  e = { annotationType_: "flow", options_: void 0, make_: Za, extend_: et }, Ge = te(g, e), e = { annotationType_: "flow.bound", options_: { bound: true }, make_: Za, extend_: et }, ka = pe(e, $a), e = function(e2) {
    return e2;
  }, g = function(e2) {
    return Me(e2);
  };
  var xa = function(e2, a2) {
    var t2 = Ka;
    !a2 && (a2 = t2), t2 = a2.name ? a2.name + "" : "Autorun";
    var n, r = !a2.scheduler && !a2.delay, m = function() {
      e2(n);
    };
    if (r) n = new Q(t2, function() {
      this.track(m);
    }, a2.onError, a2.requiresObservable);
    else {
      r = Vt(a2);
      var s = false;
      n = new Q(t2, function() {
        var t3 = this;
        s || (s = true, r(function() {
          s = false, t3.isDisposed || t3.track(m);
        }));
      }, a2.onError, a2.requiresObservable);
    }
    t2 = a2.signal && a2.signal.aborted, t2 || n.schedule_();
    return n.getDisposer_.call(n, a2.signal);
  };
  var Ga = Symbol("mobx-keys");
  var ia = function(e2) {
    if (T(e2)) return e2[H].keys_.call(e2[H]);
    if (B(e2) || U(e2)) return Y(e2.keys());
    if ($(e2)) {
      var t2 = [], a2 = 0;
      for (; a2 < e2.length; a2++) t2.push(a2);
      return t2;
    }
    M(5);
  };
  var rt = function() {
    var t2, e2 = arguments[0], a2 = arguments[1];
    arguments.length > 2 && (t2 = arguments[2]);
    if (2 == arguments.length && !U(e2)) {
      N();
      try {
        var r = E.keys(a2), n = 0;
        for (; ; n++) {
          var s = n;
          if (s >= r.length) break;
          rt(e2, r[n], a2[r[n]]);
        }
      } finally {
        K();
      }
      return;
    }
    T(e2) ? e2[H].set_.call(e2[H], a2, t2) : B(e2) ? e2.set(a2, t2) : U(e2) ? e2.add(a2) : $(e2) ? (N(), s = a2 | 0, s >= e2.length && (e2.length = (a2 | 0) + 1 | 0), e2[a2] = t2, K()) : M(8);
  };
  var it = function(e2, a2) {
    if (T(e2)) return e2[H].has_.call(e2[H], a2);
    if (B(e2) || U(e2)) return e2.has(a2);
    if ($(e2)) return (a2 | 0) >= 0 && (a2 | 0) < e2.length;
    M(10);
    return false;
  };
  var ct = function(e2) {
    if (T(e2)) return e2[H].ownKeys_.call(e2[H]);
    M(38);
  };
  var ke = function(e2, a2) {
    if ("object" == typeof e2 && null != e2) {
      if ($(e2)) return a2 === void 0 || M(23), e2[H].atom_;
      if (U(e2)) return e2.atom_;
      if (B(e2)) {
        if (a2 === void 0) return e2.keysAtom_;
        var t2 = e2.data_.get(a2);
        t2 = t2 || e2.hasMap_.get(a2);
        if (!t2) {
          var r = e2.name_, n = [a2, r];
          Ve(25, n);
        }
        return t2;
      }
      if (a2 && !e2[H] && e2[a2] === void 0) {
      }
      if (T(e2)) return a2 || M(26), n = e2[H], t2 = n.values_.get(a2) || n.materializeLazyComputed_(a2) || n.materializeLazyObservable_(a2), t2 || (r = n.name_, e2 = [a2, r], Ve(27, e2)), t2;
      if (Va(e2) || ie(e2) || sa(e2)) return e2;
    } else if ("function" == typeof e2 && sa(e2[H])) return e2[H];
    re(28, e2);
  };
  var ge = function(e2, a2) {
    e2 || M(29);
    if (a2 !== void 0) return ge(ke(e2, a2));
    if (Va(e2) || ie(e2) || sa(e2) || B(e2) || U(e2)) return e2;
    if (e2[H]) return e2[H];
    re(24, e2);
  };
  var gn = H;
  var _n = De;
  var yn = v;
  var mn = Ta;
  var wn = t;
  var On = function(e2) {
    I.allowStateReads = e2;
  };
  var Sn = function(e2) {
    let a2 = !!I.allowStateReads;
    I.allowStateReads = e2;
    return a2;
  };
  var kn = aa;
  var An = Sa;
  var jn = xa;
  var xn = function(e2, a2) {
    return true === Ue(e2, a2);
  };
  var Gn = function(e2, a2) {
    return e2 === a2;
  };
  var Rn = function(e2, a2) {
    return Be(e2, a2, 1, void 0, void 0);
  };
  var Vn = function(e2, a2) {
    return Be(e2, a2, -1, void 0, void 0);
  };
  var Cn = Ee;
  var In = h;
  var Hn = function(e2) {
    true === e2.isolateGlobalState && Mt();
    if (e2.enforceActions !== void 0) {
      var a2 = e2.enforceActions;
      "always" === a2 ? (I.enforceActions = "always", I.allowStateChanges = false) : "observed" === a2 ? (I.enforceActions = true, I.allowStateChanges = false) : (I.enforceActions = false, I.allowStateChanges = true);
    }
    true === "computedRequiresReaction" in e2 && (I.computedRequiresReaction = !!e2.computedRequiresReaction), true === "reactionRequiresObservable" in e2 && (I.reactionRequiresObservable = !!e2.reactionRequiresObservable), true === "observableRequiresReaction" in e2 && (I.observableRequiresReaction = !!e2.observableRequiresReaction), true === "disableErrorBoundaries" in e2 && (I.disableErrorBoundaries = !!e2.disableErrorBoundaries), true === "safeDescriptors" in e2 && (I.safeDescriptors = !!e2.safeDescriptors), I.allowStateReads = !I.observableRequiresReaction;
    if (e2.reactionScheduler) {
      a2 = e2.reactionScheduler;
      var t2 = ma;
      ma = function(e3) {
        return a2(function() {
          return t2(e3);
        });
      };
    }
  };
  var Pn = wa;
  var En = function(e2, a2, t2) {
    if (T(e2)) return e2[H].defineProperty_.call(e2[H], a2, t2);
    M(39);
  };
  var Dn = ta;
  var Nn = Ge;
  var Kn = ka;
  var Ln = g;
  var Mn = e;
  var Bn = Se;
  var zn = p;
  var Un = function(e2, a2) {
    if (it(e2, a2)) {
      if (T(e2)) return e2[H].get_.call(e2[H], a2);
      if (B(e2)) return e2.get(a2);
      if ($(e2)) return e2[a2];
      M(11);
    }
  };
  var Tn = ge;
  var Jn = ke;
  var qn = function(e2, a2) {
    if (a2 !== void 0) var t2 = ke(e2, a2);
    else if (Ce(e2)) return e2.name;
    else t2 = T(e2) || B(e2) || U(e2) ? ge(e2) : ke(e2);
    return t2.name_;
  };
  var Wn = function(e2, a2) {
    return Et(ke(e2, a2));
  };
  var Xn = it;
  var Fn = function() {
    return I;
  };
  var Qn = function(e2, a2) {
    return Dt(ke(e2, a2));
  };
  var Yn = function(e2, a2, t2) {
    return arguments.length > 2 && "function" == typeof t2 ? Ot(ge(e2, a2), t2) : Ot(ge(e2), a2);
  };
  var $n = function() {
    var a2, t2, e2 = arguments[0];
    B(e2) || $(e2) || Te(e2) || U(e2) ? (a2 = ge(e2), t2 = arguments[1]) : T(e2) && (a2 = ge(e2, arguments[1]), t2 = arguments[2]), a2.dehancer = t2;
    return function() {
      a2.dehancer = void 0;
    };
  };
  var Zn = Ce;
  var er = function(e2) {
    return !!Te(e2);
  };
  var ar = function(e2) {
    return ie(e2);
  };
  var tr = function(e2, a2) {
    if (!T(e2)) return false;
    var t2 = e2[H];
    return t2.lazyComputedKeys_ && t2.lazyComputedKeys_.has(a2) ? true : !t2.values_.has(a2) ? false : ie(t2.values_.get(a2));
  };
  var nr = function() {
    return null != I.trackingDerivation;
  };
  var rr = function(e2) {
    return la(e2);
  };
  var ir = $;
  var cr = B;
  var or = U;
  var br = T;
  var sr = function(e2, a2) {
    if (!T(e2)) return false;
    var t2 = e2[H];
    return t2.values_.has(a2) ? true : t2.lazyComputedKeys_ && t2.lazyComputedKeys_.has(a2) ? true : !!(t2.lazyObservableKeys_ && t2.lazyObservableKeys_.has(a2));
  };
  var ur = ia;
  var dr = function(e2, a2, t2) {
    return _e(e2) ? ta(e2, e2, a2, t2) : (Ie(function() {
      var u = Ne(e2, t2)[H];
      if (true !== Ga in e2) {
        var s = E.getPrototypeOf(e2), r = /* @__PURE__ */ new Set(), m = Reflect.ownKeys(e2), o = Reflect.ownKeys(s), n = 0;
        for (; n < m.length; n++) r.add(m[n]);
        for (n = 0; n < o.length; n++) r.add(o[n]);
        r.delete("constructor"), r.delete(H), F(s, Ga, { enumerable: false, writable: true, configurable: true, value: r });
      }
      e2[Ga].forEach(function(e3) {
        var t3 = a2 && true === e3 in a2 ? a2[e3] : true;
        It(u, e3, t3);
      });
    }), e2);
  };
  var lr = function(e2, a2, t2) {
    Ie(function() {
      var s = Ne(e2, t2)[H], r = Reflect.ownKeys(a2), n = 0;
      for (; n < r.length; n++) It(s, r[n], a2[r[n]]);
    });
    return e2;
  };
  var fr = D;
  var hr = z;
  var pr = P;
  var vr = f;
  var gr = ea;
  var _r = l;
  var yr = d;
  var mr = function() {
    var a2 = arguments[0];
    if (arguments.length > 2 && "function" == typeof arguments[2]) {
      var e2 = arguments.length > 3 && arguments[3];
      return Ht(ge(a2, arguments[1]), arguments[2], e2);
    }
    var n = arguments.length > 2 && arguments[2], t2 = arguments[1];
    e2 = ge(a2);
    if ($(a2)) {
      if (n) {
        var r = xe.call(e2.values_);
        a2 = e2.proxy_, n = e2.atom_.name_, t2({ observableKind: "array", object: a2, debugObjectName: n, type: "splice", index: 0, added: r, addedCount: r.length, removed: [], removedCount: 0 });
      }
      e2 = Fe(e2, t2);
      return e2;
    }
    if (B(a2)) return e2 = Fe(e2, t2), e2;
    if (U(a2)) return e2 = Fe(e2, t2), e2;
    if (T(a2)) return e2 = Fe(e2, t2), e2;
    e2 = Ht(e2, t2, n);
    return e2;
  };
  var wr = function(e2) {
    I.globalReactionErrorHandlers.push(e2);
    return function() {
      var a2 = I.globalReactionErrorHandlers.indexOf(e2);
      a2 >= 0 && I.globalReactionErrorHandlers.splice(a2, 1);
    };
  };
  var Or = function() {
    return Pt("onBOL", arguments);
  };
  var Sr = function() {
    return Pt("onBUOL", arguments);
  };
  var kr = ct;
  var Ar = Q;
  var jr = function(e2, a2, t2) {
    var n = Ka;
    !t2 || (n = t2);
    var o = n.name ? n.name + "" : "Reaction", l2 = ya;
    !n.equals || (l2 = n.equals);
    var s, r, b = me(o, pn(n.onError, a2), false, void 0), m = true, u = false, i = function() {
      var t3 = !!I.allowStateChanges;
      I.allowStateChanges = false;
      var a3;
      try {
        a3 = e2(r);
      } finally {
        I.allowStateChanges = t3;
      }
      u = m || true !== l2(s, a3), s = a3;
    };
    a2 = !n.scheduler && !n.delay;
    var g2 = false, c = Vt(n), H2 = function() {
      g2 = false;
      if (!r.isDisposed) {
        var e3 = s;
        u = false, r.track.call(r, i);
        if (m && n.fireImmediately) b(s, e3, r);
        else !m && u && b(s, e3, r);
        m = false;
      }
    };
    r = new Q(o, function() {
      m || a2 ? H2() : g2 || (g2 = true, c(H2));
    }, n.onError, n.requiresObservable), o = n.signal && n.signal.aborted, o || r.schedule_.call(r);
    return r.getDisposer_.call(r, n.signal);
  };
  var xr = function(e2, a2) {
    T(e2) ? e2[H].delete_.call(e2[H], a2) : B(e2) || U(e2) ? e2.delete(a2) : $(e2) ? e2.splice(a2, 1) : M(9);
  };
  var Gr = function() {
    var e2, t2 = ua(), n = E.keys(t2), r = n.length, a2 = 0;
    for (; a2 < r; a2++) e2 = n[a2], ue.indexOf(e2) == -1 && (I[e2] = t2[e2]);
    I.allowStateChanges = !I.enforceActions;
  };
  var Rr = t;
  var Vr = rt;
  var Cr = function(e2) {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
  };
  var Ir = function(e2) {
    return ze(e2, /* @__PURE__ */ new Map());
  };
  var Hr = function(e2, a2) {
    N();
    try {
      return e2.apply(a2);
    } finally {
      K();
    }
  };
  var Pr = function(e2) {
    var a2 = ye();
    try {
      return e2();
    } finally {
      oe(a2);
    }
  };
  var Er = function(e2) {
    if (T(e2)) {
      var t2 = ia(e2), n = [], a2 = 0;
      for (; a2 < t2.length; a2++) n.push(e2[t2[a2]]);
      return n;
    }
    if (B(e2)) {
      t2 = ia(e2), n = [], a2 = 0;
      for (; a2 < t2.length; a2++) n.push(e2.get(t2[a2]));
      return n;
    }
    if (U(e2)) return Y(e2.values());
    if ($(e2)) return e2.slice();
    M(6);
  };
  var Dr = function(e2) {
    if (T(e2) || B(e2)) {
      var n, t2 = ia(e2), r = [], a2 = 0;
      for (; a2 < t2.length; a2++) n = [t2[a2]], B(e2) ? n.push(e2.get(t2[a2])) : n.push(e2[t2[a2]]), r.push(n);
      return r;
    }
    if (U(e2)) return Y(e2.entries());
    if ($(e2)) {
      t2 = [], a2 = 0;
      for (; a2 < e2.length; a2++) n = [a2, e2[a2]], t2.push(n);
      return t2;
    }
    M(7);
  };
  var Nr = function() {
    var e2, a2 = arguments[0];
    return 1 == arguments.length || arguments.length > 1 && arguments[1] && "object" == typeof arguments[1] ? (e2 = void 0, arguments.length > 1 && (e2 = arguments[1]), vn(a2, e2)) : Ct(a2, arguments[1], arguments[2]);
  };
  var Kr = yt;
  var Lr = mt;
  var Mr = a;
  return __toCommonJS(mobx_esm_exports);
})();
typeof module!=="undefined"&&module.exports&&(module.exports=mobx);
