"use strict";
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
  FlowCancellationError: () => Pe,
  ObservableMap: () => _,
  ObservableSet: () => ie,
  Reaction: () => he,
  _allowStateChanges: () => on,
  _allowStateChangesInsideComputed: () => jr,
  _allowStateReadsEnd: () => qr,
  _allowStateReadsStart: () => Er,
  _autoAction: () => gt,
  _autoActionBound: () => Ht,
  _endAction: () => Cn,
  _getAdministration: () => Ue,
  _getGlobalState: () => _r,
  _interceptReads: () => ti,
  _isComputingDerivation: () => oi,
  _resetGlobalState: () => s,
  _startAction: () => An,
  action: () => _e,
  actionBound: () => g,
  autorun: () => Gt,
  compareDefault: () => Ir,
  compareIdentity: () => Sr,
  compareShallow: () => Or,
  compareStructural: () => Ur,
  computed: () => Qe,
  computedStruct: () => f,
  configure: () => w,
  createAtom: () => Lt,
  defineProperty: () => T,
  entries: () => j,
  extendObservable: () => yt,
  flow: () => Be,
  flowBound: () => Pt,
  flowResult: () => u,
  get: () => E,
  getAtom: () => Fe,
  getDebugName: () => N,
  getDependencyTree: () => A,
  getObserverTree: () => C,
  has: () => kn,
  intercept: () => I,
  isAction: () => Ke,
  isBoxedObservable: () => ri,
  isComputed: () => L,
  isComputedProp: () => D,
  isFlow: () => y,
  isFlowCancellationError: () => m,
  isObservable: () => c,
  isObservableArray: () => fe,
  isObservableMap: () => re,
  isObservableObject: () => oe,
  isObservableProp: () => l,
  isObservableSet: () => se,
  keys: () => wt,
  makeAutoObservable: () => x,
  makeObservable: () => k,
  observable: () => J,
  observableDeep: () => p,
  observableRef: () => mt,
  observableShallow: () => h,
  observableStruct: () => d,
  observe: () => R,
  onBecomeObserved: () => S,
  onBecomeUnobserved: () => O,
  onReactionError: () => n,
  override: () => e,
  ownKeys: () => xn,
  reaction: () => b,
  remove: () => q,
  runInAction: () => t,
  set: () => wn,
  spy: () => o,
  toJS: () => U,
  transaction: () => r,
  untracked: () => a,
  values: () => z,
  when: () => v
});
module.exports = __toCommonJS(mobx_esm_exports);
var h;
var ir;
var es = "ObservableObject.key";
var ts = "ObservableObject.";
var ns = "<unnamed action>";
var Me = (s2) => s2 != null && "object" == typeof s2;
var Bt = (s2) => {
  s2 = typeof s2;
  return "string" == s2 || "symbol" == s2 || "number" == s2;
};
var zn = (e2, s2) => s2 == null ? false : true === Kn.call(e2.prototype, s2);
var pe = (e2) => Array.from(e2);
var de = (d2, n2, p2) => {
  Q.defineProperty(d2, n2, p2);
};
var be = (d2, V) => Q.assign(d2, V);
var Ge = (o2, e2) => {
  o2 = "isMobX" + o2, e2.prototype[o2] = true;
  return function(F) {
    return Me(F) && true === F[o2];
  };
};
var xt = (e2) => {
  throw e2;
};
var jn = (y2) => {
  if (y2 == null) return false;
  var e2 = y2.constructor;
  return !e2 ? false : "GeneratorFunction" == e2.name + "" ? true : "GeneratorFunction" == e2.displayName + "" ? true : false;
};
var Ae = (s2) => {
  if (!Me(s2)) return false;
  var e2 = Q.getPrototypeOf(s2);
  if (e2 == null) return true;
  s2 = void 0, !De.call(e2, "constructor") || (s2 = e2.constructor), s2 = "function" == typeof s2 && s2.toString() === Xn;
  return s2;
};
var et = (m2) => m2 == null ? false : "[object Map]" == Q.prototype.toString.call(m2) + "";
var tt = (m2) => m2 == null ? false : "[object Set]" == Q.prototype.toString.call(m2) + "";
var ve = (n2) => "string" == typeof n2 ? n2 : "symbol" == typeof n2 ? n2.toString() : new String(n2) + "";
var qn = (s2) => null === s2 ? null : "object" == typeof s2 ? "" + s2 : s2;
var lr = (e2) => {
  var a2 = Q.keys(e2), t2 = Q.getOwnPropertySymbols(e2);
  if (0 == t2.length) return a2;
  var r2 = Ye.call(a2), s2 = t2.length;
  for (a2 = 0; a2 < s2; a2++) {
    var n2 = t2[a2], i2 = Q.prototype;
    true === i2.propertyIsEnumerable.call(e2, n2) && r2.push(n2);
  }
  return r2;
};
var zt = (e2) => {
  e2[Symbol.iterator] = Zn;
  if (!Qt) {
    var o2 = Qt;
    Qt = true, o2 = globalThis.Iterator, Ut = o2 ? o2.prototype : {};
  }
  o2 = Ut;
  return be(Q.create(o2), e2);
};
var En = (k2) => {
  var e2 = false;
  return function() {
    if (!e2) return e2 = true, k2.apply(this, arguments);
  };
};
var We = (e2, r2) => {
  r2 = r2.length > 0 ? " " + r2.map(String).join(",") : "", xt(new Error("[MobX] minified error nr: " + e2 + r2 + ". See mobx.js.org/errors"));
};
var ne = (e2) => {
  We(e2, []);
};
var we = (e2, v2) => {
  let r2 = [];
  r2.push(v2), We(e2, r2);
};
var Vt = (F) => Me(F) && true === F.isMobXAtom;
var ke = (F) => Me(F) && true === F.isMobXComputedValue;
var jt = (F) => Me(F) && true === F.isMobXReaction;
var re = (F) => !!en(F);
var se = (F) => !!tn(F);
var fe = (m2) => !Me(m2) ? false : !!nn(m2[Z]);
var oe = (m2) => !Me(m2) ? false : !!rn(m2[Z]);
var Ke = (m2) => "function" == typeof m2 && true === m2.isMobxAction;
var nt = (k2) => k2 == null ? false : true === k2.isMobXFlow;
var qt = () => {
  let e2 = { version: 7, UNCHANGED: {} }, t2 = null;
  e2.trackingDerivation = t2, e2.trackingContext = t2, e2.runId = 0, e2.mobxGuid = 0, e2.inBatch = 0, e2.pendingUnobservations = [], e2.pendingReactions = [], e2.isRunningReactions = false, e2.allowStateChanges = false, e2.allowStateReads = true, e2.enforceActions = true, e2.spyListeners = [], e2.globalReactionErrorHandlers = [], e2.computedRequiresReaction = false, e2.reactionRequiresObservable = false, e2.observableRequiresReaction = false, e2.disableErrorBoundaries = false, e2.suppressReactionErrors = false, e2.safeDescriptors = true;
  return e2;
};
var Tn = (j2) => {
  if (!j2.isPendingUnobservation) j2.isPendingUnobservation = true, X.pendingUnobservations.push(j2);
};
var Nn = (j2, e2) => {
  j2.observers_.delete(e2), e2 = j2.observers_, e2.size || Tn(j2);
};
var $ = () => {
  X.inBatch++;
};
var ee = () => {
  var j2 = --X.inBatch;
  if (0 == j2) {
    In();
    for (var t2, e2 = X.pendingUnobservations, a2 = 0; a2 < e2.length; a2++) j2 = e2[a2], j2.isPendingUnobservation = false, t2 = j2.observers_, t2.size || (!j2.isBeingObserved || (j2.isBeingObserved = false, j2.onBUO()), ke(j2) && j2.suspend_());
    X.pendingUnobservations = [];
  }
};
var le = (j2) => {
  var W = X.trackingDerivation;
  if (W != null) {
    var t2 = X, e2 = W.runId_;
    e2 === j2.lastAccessedBy_ || (j2.lastAccessedBy_ = W.runId_, e2 = W.unboundDepsCount_ | 0, W.newObserving_[e2] = j2, W.unboundDepsCount_ = e2 + 1 | 0, !j2.isBeingObserved && X.trackingContext && (j2.isBeingObserved = true, j2.onBO()));
    return !!j2.isBeingObserved;
  } else {
    t2 = X, W = j2.observers_, !W.size && X.inBatch && Tn(j2);
  }
  return false;
};
var Rn = (j2) => {
  if (2 !== j2.lowestObserverState_) j2.lowestObserverState_ = 2, j2.observers_.forEach(Qn);
};
var xe = (j2) => {
  $(), Rn(j2), ee();
};
var In = () => {
  if (!((X.inBatch | 0) > 0 || X.isRunningReactions)) Ct(er);
};
var Sn = (e2) => {
  !e2.onBOL || e2.onBOL.forEach(function(e3) {
    e3();
  });
};
var On = (e2) => {
  !e2.onBUOL || e2.onBUOL.forEach(function(e3) {
    e3();
  });
};
var Ce = () => {
  let g2 = X.trackingDerivation;
  X.trackingDerivation = null;
  return g2;
};
var ze = (g2) => {
  X.trackingDerivation = g2;
};
var _i = (W) => {
  if (0 != (W.dependenciesState_ | 0)) {
    W.dependenciesState_ = 0;
    var e2 = W.observing_, a2 = e2.length;
    while (a2 > 0) a2--, W = e2[a2], W.lowestObserverState_ = 0;
  }
};
var Et = (e2) => Me(e2) && true === e2.isMobXCaughtException;
var Kt = (W) => {
  var g2 = W.dependenciesState_ | 0;
  if (0 == g2) return false;
  if (g2 == -1 || 2 == g2) return true;
  if (1 == g2) {
    g2 = true, g2 = Ce();
    for (var y2, t2, e2 = W.observing_, n2 = e2.length, a2 = 0; a2 < n2; a2++) {
      y2 = e2[a2];
      if (ke(y2)) {
        t2 = X.disableErrorBoundaries;
        if (true === t2) y2.get();
        else try {
          y2.get();
        } catch {
          ze(g2);
          return true;
        }
        y2 = W.dependenciesState_;
        if (2 === y2) return ze(g2), true;
      }
    }
    _i(W);
    ze(g2);
    return false;
  }
  return false;
};
var Un = (W, e2, H2) => {
  var t2, g2 = true;
  _i(W), 0 != (W.runId_ | 0) ? (t2 = W.observing_, g2 = t2.length) : g2 = 100, W.newObserving_ = new Array(g2), W.unboundDepsCount_ = 0, g2 = (X.runId | 0) + 1 | 0, X.runId = g2, W.runId_ = g2, g2 = X.trackingDerivation, X.trackingDerivation = W, t2 = X, t2.inBatch = (X.inBatch | 0) + 1 | 0;
  var ne2;
  t2 = X.disableErrorBoundaries;
  if (true === t2) ne2 = e2.call(H2);
  else try {
    ne2 = e2.call(H2);
  } catch (f2) {
    ne2 = new ut(f2);
  }
  X.inBatch--;
  X.trackingDerivation = g2, ((W2) => {
    var s2 = W2.observing_, n2 = W2.newObserving_;
    W2.observing_ = n2;
    for (var r2, i2, o2 = W2.unboundDepsCount_ | 0, t3 = 0, e3 = 0, a2 = 0; a2 < o2; a2++) r2 = n2[a2], 0 == (r2.diffValue | 0) && (r2.diffValue = 1, e3 != a2 && (n2[e3] = r2), e3++), i2 = r2.dependenciesState_, i2 !== void 0 && (i2 | 0) > t3 && (t3 = i2 | 0);
    n2.length = e3, W2.newObserving_ = null, r2 = s2.length;
    while (r2 > 0) r2--, a2 = s2[r2], 0 == (a2.diffValue | 0) && Nn(a2, W2), a2.diffValue = 0;
    while (e3 > 0) e3--, r2 = n2[e3], 1 == (r2.diffValue | 0) && (r2.diffValue = 0, ((j2, e4) => {
      var t4 = j2.observers_;
      t4.add(e4), t4 = j2.lowestObserverState_ | 0, t4 > (e4.dependenciesState_ | 0) && (j2.lowestObserverState_ = e4.dependenciesState_);
    })(r2, W2));
    0 != t3 && (W2.dependenciesState_ = t3, W2.onBecomeStale_());
  })(W);
  return ne2;
};
var Xt = (W) => {
  var e2 = W.observing_;
  W.observing_ = [];
  var a2 = e2.length;
  while (a2 > 0) a2--, Nn(e2[a2], W);
  W.dependenciesState_ = -1;
};
var Le = (e2, k2, t2, n2) => {
  var K = (0, function() {
    var r2 = n2 == null ? this : n2;
    return Ln(e2, t2, k2, r2, arguments);
  });
  K.isMobxAction = true, K.toString = function() {
    return k2.toString();
  }, tr && (un.value = e2, de(K, "name", un));
  return K;
};
var An = (e2, t2) => {
  var i2 = X.trackingDerivation;
  t2 = !t2 || i2 == null, $();
  var r2 = !!X.allowStateChanges;
  t2 && Ce();
  var s2 = !!X.allowStateReads, n2 = Dt;
  Dt++;
  var o2 = ft;
  ft = n2, e2 = { runAsAction_: t2, prevDerivation_: i2, prevAllowStateChanges_: r2, prevAllowStateReads_: s2, notifySpy_: false, startTime_: 0, actionId_: n2, parentActionId_: o2 };
  return e2;
};
var Cn = (e2) => {
  ft != (e2.actionId_ | 0) && ne(30), ft = e2.parentActionId_ | 0, e2.error_ === void 0 || (X.suppressReactionErrors = true), ee(), !e2.runAsAction_ || ze(e2.prevDerivation_), X.suppressReactionErrors = false;
};
var Ln = (e2, t2, k2, n2, r2) => {
  var c2 = An(e2, t2, n2, r2);
  try {
    return k2.apply(n2, r2);
  } catch (e3) {
    c2.error_ = e3;
    throw e3;
  } finally {
    Cn(c2);
  }
};
var Te = (e2) => {
  if (e2.changeListeners_ !== void 0) var n2 = e2.changeListeners_, t2 = n2.length > 0;
  else {
    t2 = false;
  }
  return t2;
};
var Ki = (e2, P) => {
  e2.changeListeners_ === void 0 && (e2.changeListeners_ = []);
  var t2 = e2.changeListeners_;
  t2.push(P);
  return En(function() {
    var u2 = +t2.indexOf(P);
    u2 != -1 && t2.splice(u2, 1);
  });
};
var Ne = (a2, h2) => {
  var e2 = Ce(), t2 = a2.changeListeners_;
  if (!t2) {
    ze(e2);
    return;
  }
  t2 = Ye.call(t2);
  var n2 = t2.length;
  for (a2 = 0; a2 < n2; a2++) t2[a2](h2);
  ze(e2);
};
var je = (e2) => {
  if (e2.interceptors_ !== void 0) var n2 = e2.interceptors_, t2 = n2.length > 0;
  else {
    t2 = false;
  }
  return t2;
};
var Dn = (e2, P) => {
  e2.interceptors_ === void 0 && (e2.interceptors_ = []);
  var t2 = e2.interceptors_;
  t2.push(P);
  return En(function() {
    var u2 = +t2.indexOf(P);
    u2 != -1 && t2.splice(u2, 1);
  });
};
var qe = (e2, h2) => {
  var D2 = Ce();
  try {
    var H2 = [];
    !e2.interceptors_ || (H2 = e2.interceptors_);
    for (var P = Ye.call(H2), F = P.length, M = 0; M < F; M++) {
      h2 = P[M](h2), h2 && !h2.type && ne(14);
      if (!h2) break;
    }
    return h2;
  } finally {
    ze(D2);
  }
};
var Se = (u2, e2) => be(function(s2, H2) {
  if (H2 && "string" == typeof H2.kind) return e2(u2, s2, H2);
}, u2);
var Xe = (e2) => {
  var p2 = Ce(), f2 = true;
  $();
  try {
    return e2();
  } finally {
    ee(), ze(p2);
  }
};
var Tt = (s2) => !s2 ? false : oe(s2) || s2[Z] || Vt(s2) || jt(s2) || ke(s2);
var rt = /* @__PURE__ */ (function() {
  let e2 = (n2, s2) => {
    if (!n2) return false;
    if ("function" == typeof n2.isPrototypeOf) return true === n2.isPrototypeOf(s2);
    true === "constructor" in s2 ? (n2 = s2.constructor == n2, n2 = true === n2) : n2 = false;
    return n2;
  }, t2 = (v2) => fe(v2) ? v2.slice() : et(v2) || re(v2) ? pe(v2.entries()) : tt(v2) || se(v2) ? pe(v2.entries()) : v2;
  return function(v2, C2, n2, r2, i2) {
    if (v2 === C2) return 0 !== v2 ? v2 = true : (v2 = 1 / +v2, v2 = v2 === 1 / +C2), v2;
    if (v2 == null || C2 == null) return false;
    if (v2 !== v2) return C2 !== C2;
    var a2 = typeof v2;
    if ("function" != a2 && "object" != a2 && "object" != typeof C2) return false;
    var s2 = Q.prototype;
    a2 = s2.toString.call(v2) + "";
    if (a2 != Q.prototype.toString.call(C2) + "") return false;
    if ("[object RegExp]" == a2 || "[object String]" == a2) return "" + v2 == "" + C2;
    if ("[object Number]" == a2) {
      v2 = Number(v2), C2 = Number(C2);
      return true !== st(v2, v2) ? true !== st(C2, C2) : 0 === v2 ? (v2 = 1 / +v2, true === st(v2, 1 / +C2)) : v2 === C2;
    }
    if ("[object Date]" == a2 || "[object Boolean]" == a2) return v2 = Number(v2), v2 === Number(C2);
    if ("[object Symbol]" == a2) return v2 = Symbol.valueOf.call(v2), v2 === Symbol.valueOf.call(C2);
    ("[object Map]" == a2 || "[object Set]" == a2) && n2 >= 0 && (n2 = n2 + 1 | 0), s2 = t2(v2), v2 = t2(C2);
    var o2 = "[object Array]" == a2;
    if (!o2) {
      if ("object" != typeof s2 || "object" != typeof v2) return false;
      C2 = s2.constructor, a2 = v2.constructor;
      if (C2 !== a2 && !("function" == typeof C2 && e2(C2, C2) && "function" == typeof a2 && e2(a2, a2)) && true === "constructor" in s2 && true === "constructor" in v2) return false;
    }
    if (0 == n2) return false;
    else {
      n2 < 0 && (n2 = -1);
    }
    r2 === void 0 && (r2 = [], i2 = []);
    for (C2 = r2.length; C2--; ) if (r2[C2] === s2) return i2[C2] === v2;
    r2.push(s2), i2.push(v2);
    if (o2) {
      C2 = s2.length;
      if (C2 != v2.length) return false;
      while (C2 > 0) {
        C2--;
        if (!rt(s2[C2], v2[C2], n2 - 1 | 0, r2, i2)) return false;
      }
    } else {
      o2 = Q.keys(s2);
      var u2 = o2.length;
      if (Q.keys(v2).length != u2) return false;
      for (a2 = 0; a2 < u2; a2++) {
        C2 = o2[a2];
        if (De.call(v2, C2)) {
          var c2 = s2[C2];
          C2 = v2[C2], C2 = rt(c2, C2, n2 - 1 | 0, r2, i2);
        } else {
          C2 = false;
        }
        if (!C2) return false;
      }
    }
    r2.pop();
    i2.pop();
    return true;
  };
})();
var Nt = (l2) => {
  var e2 = l2.deep;
  if (true === e2) return Ve;
  e2 = l2.deep;
  if (false === e2) return at;
  if (l2.defaultDecorator) {
    var t2 = l2.defaultDecorator;
    e2 = !!t2.options_;
  } else {
    e2 = false;
  }
  return e2 && l2.defaultDecorator.options_.enhancer_ ? (e2 = l2.defaultDecorator, t2 = e2.options_, t2.enhancer_) : Ve;
};
var Rt = (m2) => !!m2 ? m2 : cn;
var me = (e2) => e2.proxy_ ? e2.proxy_ : e2.target_;
var Hn = (n2) => {
  var e2 = hn[n2];
  if (e2) return e2;
  e2 = { get: function() {
    let t2 = this[Z];
    return t2.getObservablePropValue_(n2);
  }, set: function(s2) {
    let t2 = this[Z];
    return t2.setObservablePropValue_(n2, s2);
  } }, hn[n2] = e2;
  return e2;
};
var Pn = (e2, n2, s2, N2) => {
  var t2 = e2.target_;
  if (De.call(t2, n2)) {
    t2 = e2.values_;
    if (t2.has(n2)) return e2.setObservablePropValue_(n2, s2);
    if (N2) return N2 = e2.target_, true === Reflect.set(N2, n2, s2);
    e2.target_[n2] = s2;
    return true;
  }
  return e2.extend_(n2, { value: s2, enumerable: true, writable: true, configurable: true }, e2.defaultAnnotation_, N2);
};
var It = /* @__PURE__ */ (function() {
  return function(n2, L2, h2, A2) {
    var K = n2.values_, r2 = K.length;
    L2 > r2 ? L2 = r2 : L2 < 0 && (L2 = r2 + L2 | 0, L2 < 0 && (L2 = 0)), h2 < 0 && (h2 = 0), r2 = r2 - L2 | 0, h2 > r2 || (r2 = h2), A2 == null ? A2 = [] : Array.isArray(A2) || (h2 = Array.prototype, A2 = h2.slice.call(A2));
    if (je(n2)) {
      h2 = n2.proxy_, h2 = qe(n2, { object: h2, type: "splice", index: L2, removedCount: r2, added: A2 });
      if (!h2) return _t;
      r2 = h2.removedCount | 0, A2 = h2.added;
    }
    if (0 != A2.length) {
      h2 = [];
      var i2 = A2.length;
      for (K = 0; K < i2; K++) h2.push(n2.enhancer_(A2[K], void 0));
    } else {
      h2 = A2;
    }
    K = ((a2, L3, n3, A3) => {
      var O2 = a2.values_, q2 = A3.length, E2 = +q2, r3 = E2 | 0;
      if (0 == n3 && L3 == O2.length) {
        for (a2 = 0; a2 < r3; a2++) L3 = A3[a2], O2.push(L3);
        return _t;
      }
      if (r3 < 1e4) {
        for (a2 = [], a2.push(L3), a2.push(n3), L3 = 0; L3 < A3.length; L3++) n3 = A3[L3], a2.push(n3);
        return O2.splice.apply(O2, a2);
      }
      a2 = L3 + n3 | 0;
      var i3 = Ye.call(O2, L3, a2);
      for (r3 = Ye.call(O2, a2, O2.length), a2 = O2.length, O2.length = a2 + A3.length - n3 | 0, a2 = 0; a2 < A3.length; a2++) O2[L3 + a2 | 0] = A3[a2];
      for (a2 = 0; a2 < r3.length; a2++) O2[L3 + A3.length + a2 | 0] = r3[a2];
      return i3;
    })(n2, L2, r2, h2);
    (0 != r2 || 0 != h2.length) && ((n3, L3, r3, i3) => {
      var s2, o2, u2, E2 = Te(n3), h3 = null;
      E2 && (h3 = n3.proxy_, s2 = n3.atom_, o2 = s2.name_, u2 = i3.length, h3 = { observableKind: "array", object: h3, debugObjectName: o2, type: "splice", index: L3, removed: i3, added: r3, removedCount: u2, addedCount: r3.length }), xe(n3.atom_), E2 && Ne(n3, h3);
    })(n2, L2, h2, K);
    return n2.dehanceValues_(K);
  };
})();
var ye = (U2) => {
  "function" == typeof Array.prototype[U2] && (ce[U2] = function() {
    let i2 = this[Z];
    le(i2.atom_);
    let t2 = i2.dehanceValues_(i2.values_);
    return t2[U2].apply(t2, arguments);
  });
};
var Re = (U2) => {
  "function" == typeof Array.prototype[U2] && (ce[U2] = function(S2, l2) {
    var t2 = this, i2 = t2[Z];
    le(i2.atom_);
    var e2, n2 = i2.dehanceValues_(i2.values_);
    e2 = l2;
    return n2[U2](function(i3, s2) {
      let r2 = e2;
      return S2.call(r2, i3, s2, t2);
    });
  });
};
var Fn = (U2) => {
  "function" == typeof Array.prototype[U2] && (ce[U2] = function() {
    var e2 = this;
    let i2 = e2[Z];
    le(i2.atom_);
    let t2 = i2.dehanceValues_(i2.values_), S2 = arguments[0];
    arguments[0] = function(r2, i3, s2) {
      return S2(r2, i3, s2, e2);
    };
    return t2[U2].apply(t2, arguments);
  });
};
var St = (e2, s2) => e2.dehancer !== void 0 ? e2.dehancer(s2) : s2;
var Ze = (U2) => {
  ie.prototype[U2] = function(t2) {
    var r2 = this.atom_;
    le(r2);
    return ("intersection" == U2 || "union" == U2 || "symmetricDifference" == U2 || "isDisjointFrom" == U2) && tt(t2) && !se(t2) && "function" == typeof t2[U2] ? t2[U2](this) : new Set(this)[U2](t2);
  };
};
var Ot = (o2, l2) => ({ annotationType_: o2, options_: l2, make_: pn, extend_: sr });
var Zt = (o2, l2) => ({ annotationType_: o2, options_: l2, make_: pn, extend_: or });
var Mn = (i2, u2, n2, p2, e2) => {
  var s2 = p2.value;
  if (u2.options_) {
    var t2 = u2.options_;
    p2 = !!t2.bound;
  } else {
    p2 = false;
  }
  p2 && (s2 = s2.bind(me(i2)));
  t2 = ve(n2), u2.options_ ? (p2 = u2.options_, n2 = !!p2.name) : n2 = false, n2 && (n2 = u2.options_, t2 = n2.name + ""), u2.options_ ? (p2 = u2.options_, n2 = !!p2.autoAction) : n2 = false;
  var r2, o2 = n2;
  r2 = void 0, n2 = !!((p2 = u2.options_) && p2.bound), n2 && (r2 = me(i2)), e2 ? (u2 = !!i2.isPlainObject_, i2 = false) : (u2 = true, i2 = true);
  return { value: Le(t2, s2, o2, r2), configurable: u2, enumerable: false, writable: i2 };
};
var dt = (o2, l2) => ({ annotationType_: o2, options_: l2, make_: ur, extend_: ar });
var Gn = (i2, p2, e2, t2) => {
  var s2 = p2.value;
  nt(s2) || (s2 = Be(s2)), e2 && (s2 = s2.bind(me(i2)), s2.isMobXFlow = true), t2 ? (p2 = !!i2.isPlainObject_, i2 = false) : (p2 = true, i2 = true);
  return { value: s2, configurable: p2, enumerable: false, writable: i2 };
};
var Jt = (d2, u2, f2, s2) => {
  var i2 = $e(d2)[Z];
  i2.lazyObservableKeys_ || (i2.lazyObservableKeys_ = /* @__PURE__ */ new Map()), i2.lazyObservableKeys_.set(f2, function() {
    var h2, G, I2 = Ve, d3 = !!((G = u2.options_) && G.enhancer_);
    d3 && (d3 = u2.options_, I2 = d3.enhancer_), h2 = ts + ve(f2);
    return new te(s2, I2, h2, false);
  });
  return i2;
};
var Yn = (b2) => b2.scheduler ? b2.scheduler : b2.delay ? function(S2) {
  return setTimeout(S2, b2.delay);
} : function(S2) {
  return S2();
};
var vr = (e2, t2) => !e2 ? t2 : function() {
  try {
    return t2.apply(this, arguments);
  } catch (i2) {
    e2.call(this, i2);
    return;
  }
};
var Zi = (r2, i2, b2) => {
  b2 = b2 || {};
  var e2, t2;
  if ("number" == typeof b2.timeout) {
    var u2 = new Error("WHEN_TIMEOUT"), s2 = function() {
      var n3 = e2[Z];
      !n3.isDisposed && (e2(), b2.onError ? b2.onError(u2) : xt(u2));
    }, o2 = b2.timeout;
    t2 = setTimeout(s2, o2);
  }
  b2.name || (b2.name = "When");
  var n2 = Le("When-effect", i2, false, void 0);
  e2 = Gt(function(i3) {
    on(false, r2) && (i3.dispose(), !t2 || clearTimeout(t2), n2());
  }, b2);
  return e2;
};
var Bn = (i2, n2, u2) => {
  true === u2 && (u2 = i2.defaultAnnotation_);
  if (false !== u2) {
    if (true !== n2 in i2.target_) {
      var e2 = u2.annotationType_, t2 = i2.name_ + "." + ve(n2), V = [];
      V.push(e2), V.push(t2), We(1, V);
    }
    for (V = i2.target_; ; ) {
      e2 = V && V !== Q.prototype;
      if (!e2) break;
      if (e2 = Q.getOwnPropertyDescriptor(V, n2)) {
        e2 = u2.make_(i2, n2, e2, V);
        if (0 === e2) return;
        if (1 === e2) break;
      }
      V = Q.getPrototypeOf(V);
    }
  }
};
var Xi = (i2, n2, r2) => {
  if (ke(i2)) {
    var t2, e2 = true;
    return Gt(function() {
      var u2 = i2.get, o2 = i2.get();
      if (!e2 || r2) {
        var s2 = Ce(), b2 = i2.name_;
        n2({ observableKind: "computed", debugObjectName: b2, type: "update", object: i2, newValue: o2, oldValue: t2 }), ze(s2);
      }
      e2 = false;
      t2 = o2;
    });
  }
  r2 && (r2 = i2.name_, n2({ observableKind: "value", debugObjectName: r2, object: i2, type: "update", newValue: i2.value_, oldValue: void 0 }));
  return Ki(i2, n2);
};
var Vn = (n2, r2) => {
  var e2, s2 = r2[1], t2 = s2;
  r2.length > 2 && "function" == typeof r2[2] ? (e2 = Fe(r2[0], r2[1]), t2 = r2[2]) : e2 = Fe(r2[0]), e2[n2] ? (r2 = e2[n2], r2.add(t2)) : (r2 = e2, r2[n2] = /* @__PURE__ */ new Set(), r2 = e2[n2], r2.add(t2));
  return function() {
    var r3 = e2[n2];
    r3 && (r3.delete(t2), 0 == r3.size && delete e2[n2]);
  };
};
var it = (V, e2) => {
  if (V == null || "object" != typeof V || zn(Date, V) || !Tt(V)) return V;
  if (ot(V) || ke(V)) return it(V.get(), e2);
  if (e2.has(V)) return e2.get(V);
  if (fe(V)) {
    var K = [];
    e2.set(V, K);
    for (var a2 = 0; a2 < V.length; a2++) K[a2] = it(V[a2], e2);
    return K;
  }
  if (se(V)) {
    for (a2 = /* @__PURE__ */ new Set(), e2.set(V, a2), K = pe(V.values()), V = 0; V < K.length; V++) a2.add(it(K[V], e2));
    return a2;
  }
  if (re(V)) {
    for (K = /* @__PURE__ */ new Map(), e2.set(V, K), a2 = pe(V.entries()), V = 0; V < a2.length; V++) t = a2[V][0], n = a2[V], K.set(t, it(n[1], e2));
    return K;
  }
  t = {};
  e2.set(V, t), K = xn(V), a2 = 0;
  for (; a2 < K.length; a2++) n = Q.prototype, true === n.propertyIsEnumerable.call(V, K[a2]) && (n = K[a2], t[n] = it(V[K[a2]], e2));
  return t;
};
var Wn = (e2) => {
  var R2 = { name: e2.name_ };
  if (e2.observing_) var t2 = e2.observing_, a2 = t2.length > 0;
  else {
    a2 = false;
  }
  if (a2) {
    for (t2 = [], a2 = 0; ; a2++) {
      if (a2 >= e2.observing_.length) break;
      t2.push(Wn(e2.observing_[a2]));
    }
    R2.dependencies = t2;
  }
  return R2;
};
var Wi = (a2) => {
  var R2 = { name: a2.name_ };
  if (((j2) => {
    var t3;
    return !!((t3 = j2.observers_) && t3.size);
  })(a2)) {
    var e2 = a2.observers_;
    e2 = pe(e2.values());
    var t2 = [];
    for (a2 = 0; a2 < e2.length; a2++) t2.push(Wi(e2[a2]));
    R2.observers = t2;
  }
  return R2;
};
var Q = Object;
var t = Object.prototype;
var De = t.hasOwnProperty;
var st = Object.is;
var n = Array.prototype;
var Ye = n.slice;
var r = Object.prototype;
var Kn = r.isPrototypeOf;
var Xn = Object.toString();
var Ut = void 0;
var Qt = false;
var Zn = (0, function() {
  return this;
});
var Je = function() {
};
var u = [];
Object.freeze(u);
var _t = u;
u = {}, Object.freeze(u);
var $t = u;
var Z = Symbol("mobx administration");
var At = function(v2, C2) {
  return true === st(v2, C2);
};
var ot;
var en;
var tn;
var nn;
var rn;
var ht = true;
var sn = false;
var Ee = [];
(() => {
  Ee.push("mobxGuid"), Ee.push("spyListeners"), Ee.push("enforceActions"), Ee.push("computedRequiresReaction"), Ee.push("reactionRequiresObservable"), Ee.push("observableRequiresReaction"), Ee.push("allowStateReads"), Ee.push("disableErrorBoundaries"), Ee.push("runId"), Ee.push("UNCHANGED");
})();
var X = (() => {
  var t2;
  globalThis.__mobxInstanceCount && (globalThis.__mobxInstanceCount | 0) > 0 && !globalThis.__mobxGlobals && (ht = false), t2 = globalThis.__mobxGlobals, t2 && 7 != (t2.version | 0) && (ht = false);
  if (!ht) return setTimeout(function() {
    sn || ne(35);
  }, 1), qt();
  else {
    if (t2) return globalThis.__mobxInstanceCount++, t2.UNCHANGED || (t2.UNCHANGED = {}), t2;
  }
  globalThis.__mobxInstanceCount = 1;
  t2 = qt(), globalThis.__mobxGlobals = t2;
  return t2;
})();
var Jn = function() {
  var c2 = X.pendingReactions;
  (0 != c2.length || 0 != (X.inBatch | 0) || X.isRunningReactions) && ne(36), sn = true;
  if (ht) c2 = globalThis, 0 == --c2.__mobxInstanceCount && (c2.__mobxGlobals = void 0), X = qt();
};
var i = function() {
  return X;
};
var s = function() {
  for (var n2, e2 = qt(), t2 = Q.keys(e2), r2 = t2.length, a2 = 0; a2 < r2; a2++) n2 = t2[a2], +Ee.indexOf(n2) == -1 && (X[n2] = e2[n2]);
  X.allowStateChanges = !X.enforceActions;
};
var o = function(e2) {
  console.warn("[mobx.spy] Is a no-op in production builds");
  return function() {
  };
};
var Qn = function(e2) {
  e2.dependenciesState_ || e2.onBecomeStale_(), e2.dependenciesState_ = 2;
};
var _n = function(e2) {
  e2.dependenciesState_ || (e2.dependenciesState_ = 1, e2.onBecomeStale_());
};
var pt = void 0;
var $n = function(e2) {
  var c2 = e2.dependenciesState_;
  1 === c2 ? e2.dependenciesState_ = 2 : c2 || (pt.lowestObserverState_ = 0);
};
var Ct = (e2) => e2();
var er = () => {
  X.isRunningReactions = true;
  var a2, r2, n2, i2, e2 = X.pendingReactions, t2 = 0;
  while (e2.length > 0) {
    t2++, 100 == t2 && (a2 = "[mobx] cycle in reaction: " + e2[0], console.error(a2), e2.splice(0, e2.length)), n2 = e2.splice(0, e2.length), i2 = n2.length, a2 = 0;
    for (; a2 < i2; a2++) r2 = n2[a2], r2.runReaction_();
  }
  X.isRunningReactions = false;
};
var a = function(e2) {
  var o2 = Ce();
  try {
    return e2();
  } finally {
    ze(o2);
  }
};
var on = function(g2, S2) {
  var c2 = !!g2;
  g2 = !!X.allowStateChanges, X.allowStateChanges = c2;
  try {
    return S2();
  } finally {
    X.allowStateChanges = g2;
  }
};
var ut = class {
  constructor(t2) {
    this.cause = t2;
  }
};
de(ut, "name", { value: "CaughtException", configurable: true });
ut.prototype.isMobXCaughtException = true;
var ge = class {
  constructor(o2 = "Atom") {
    o2 = o2 + "", this.name_ = o2, this.observers_ = /* @__PURE__ */ new Set(), this.lastAccessedBy_ = 0, this.lowestObserverState_ = -1, this.flags_ = 0;
  }
  onBO() {
    Sn(this);
  }
  onBUO() {
    On(this);
  }
  reportObserved() {
    return le(this);
  }
  reportChanged() {
    xe(this);
  }
  toString() {
    return this.name_;
  }
  get isBeingObserved() {
    return 0 != (this.flags_ & 1);
  }
  set isBeingObserved(s2) {
    s2 ? this.flags_ |= 1 : this.flags_ &= ~1;
  }
  get isPendingUnobservation() {
    return 0 != (this.flags_ & 2);
  }
  set isPendingUnobservation(s2) {
    s2 ? this.flags_ |= 2 : this.flags_ &= ~2;
  }
  get diffValue() {
    return 0 != (this.flags_ & 4) ? 1 : 0;
  }
  set diffValue(s2) {
    1 == (s2 | 0) ? this.flags_ |= 4 : this.flags_ &= ~4;
  }
};
Ge("Atom", ge);
var Lt = function(e2, t2 = Je, n2 = Je) {
  var c2 = e2 !== void 0 ? new ge(e2) : new ge();
  t2 === Je || (c2.onBOL = /* @__PURE__ */ new Set(), e2 = c2.onBOL, e2.add(t2)), n2 === Je || (c2.onBUOL = /* @__PURE__ */ new Set(), e2 = c2.onBUOL, e2.add(n2));
  return c2;
};
var ft = 0;
var Dt = 1;
var un = { value: "action", configurable: true, writable: false, enumerable: false };
var e = Object.getOwnPropertyDescriptor(function() {
}, "name");
u = e != null && e.configurable;
var tr = u;
var he = class {
  constructor(i2 = "Reaction", u2, c2, h2) {
    var o2 = i2 + "";
    this.name_ = o2, this.onInvalidate_ = void 0, u2 !== void 0 && (this.onInvalidate_ = u2), c2 && (this.errorHandler_ = c2), h2 !== void 0 && (this.requiresObservable_ = h2), this.observing_ = [], this.newObserving_ = null, this.dependenciesState_ = -1, this.runId_ = 0, this.unboundDepsCount_ = 0, this.flags_ = 0;
  }
  onBecomeStale_() {
    this.schedule_();
  }
  schedule_() {
    if (!this.isScheduled) this.isScheduled = true, X.pendingReactions.push(this), In();
  }
  runReaction_() {
    if (!this.isDisposed) {
      $(), this.isScheduled = false;
      var g2 = X.trackingContext;
      X.trackingContext = this;
      if (Kt(this)) {
        this.isTrackPending = true;
        try {
          this.onInvalidate_();
          if (false) {
          }
        } catch (t2) {
          this.reportExceptionInDerivation_(t2);
        }
      }
      X.trackingContext = g2;
      ee();
    }
  }
  track(R2) {
    if (!this.isDisposed) {
      $(), this.isRunning = true;
      var t2 = X.trackingContext;
      X.trackingContext = this, R2 = Un(this, R2, void 0), X.trackingContext = t2, this.isRunning = false, this.isTrackPending = false, !this.isDisposed || Xt(this), Et(R2) && this.reportExceptionInDerivation_(R2.cause), ee();
    }
  }
  reportExceptionInDerivation_(t2) {
    if (this.errorHandler_) {
      this.errorHandler_(t2, this);
      return;
    }
    !X.disableErrorBoundaries || xt(t2);
    var a2 = "[mobx] uncaught error in '" + this + "'";
    X.suppressReactionErrors || console.error(a2, t2);
    var n2 = X.globalReactionErrorHandlers, r2 = n2.length;
    for (a2 = 0; a2 < r2; a2++) n2[a2](t2, this);
  }
  dispose() {
    this.isDisposed || (this.isDisposed = true, this.isRunning || ($(), Xt(this), ee()));
  }
  getDisposer_(n2) {
    var t2 = this, e2 = () => {
      var r2 = t2.dispose;
      t2.dispose(), n2 != null && "function" == typeof n2.removeEventListener && n2.removeEventListener("abort", e2);
    };
    n2 != null && "function" == typeof n2.addEventListener && n2.addEventListener("abort", e2), e2[Z] = t2, true === "dispose" in Symbol && "symbol" == typeof Symbol.dispose && (e2[Symbol.dispose] = e2);
    return e2;
  }
  toString() {
    return "Reaction[" + this.name_ + "]";
  }
  get isDisposed() {
    return 0 != (this.flags_ & 1);
  }
  set isDisposed(s2) {
    s2 ? this.flags_ |= 1 : this.flags_ &= ~1;
  }
  get isScheduled() {
    return 0 != (this.flags_ & 2);
  }
  set isScheduled(s2) {
    s2 ? this.flags_ |= 2 : this.flags_ &= ~2;
  }
  get isTrackPending() {
    return 0 != (this.flags_ & 4);
  }
  set isTrackPending(s2) {
    s2 ? this.flags_ |= 4 : this.flags_ &= ~4;
  }
  get isRunning() {
    return 0 != (this.flags_ & 8);
  }
  set isRunning(s2) {
    s2 ? this.flags_ |= 8 : this.flags_ &= ~8;
  }
  get diffValue() {
    return 0 != (this.flags_ & 16) ? 1 : 0;
  }
  set diffValue(s2) {
    1 == (s2 | 0) ? this.flags_ |= 16 : this.flags_ &= ~16;
  }
};
Ge("Reaction", he);
n = function(P) {
  X.globalReactionErrorHandlers.push(P);
  return function() {
    var e2 = X.globalReactionErrorHandlers, l2 = +e2.indexOf(P);
    l2 >= 0 && X.globalReactionErrorHandlers.splice(l2, 1);
  };
};
var ue = class {
  constructor(l2) {
    l2.get || ne(31), this.derivation = l2.get;
    var o2 = l2.name ? l2.name + "" : "ComputedValue";
    this.name_ = o2, l2.set ? this.setter_ = Le("ComputedValue-setter", l2.set, false, void 0) : this.setter_ = void 0, this.equals_ = At, !l2.equals || (this.equals_ = l2.equals), this.scope_ = l2.context, this.requiresReaction_ = l2.requiresReaction, this.keepAlive_ = !!l2.keepAlive, this.dependenciesState_ = -1, this.observing_ = [], o2 = null, this.newObserving_ = o2, this.observers_ = /* @__PURE__ */ new Set(), this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = 0, this.unboundDepsCount_ = 0, this.value_ = new ut(o2), this.flags_ = 0;
  }
  onBecomeStale_() {
    ((j2) => {
      if (!j2.lowestObserverState_) j2.lowestObserverState_ = 1, j2.observers_.forEach(_n);
    })(this);
  }
  onBO() {
    Sn(this);
  }
  onBUO() {
    On(this);
  }
  computeValue_(t2) {
    this.isComputing = true;
    var j2, g2 = false;
    if (t2) t2 = this.derivation, j2 = Un(this, t2, this.scope_);
    else {
      t2 = X.disableErrorBoundaries;
      if (true === t2) j2 = this.derivation.call(this.scope_);
      else try {
        j2 = this.derivation.call(this.scope_);
      } catch (d2) {
        j2 = new ut(d2);
      }
    }
    this.isComputing = false;
    return j2;
  }
  trackAndCompute() {
    var r2 = this.value_, t2 = (this.dependenciesState_ | 0) == -1, n2 = this.computeValue_(true);
    t2 = t2 || Et(r2) || Et(n2) || true !== this.equals_(r2, n2), t2 && (this.value_ = n2);
    return t2;
  }
  get() {
    if (this.isComputing) {
      var t2 = this.name_, n2 = this.derivation, R2 = [];
      R2.push(t2), R2.push(n2), We(32, R2);
    }
    !X.inBatch ? (t2 = this.observers_, R2 = !t2.size) : R2 = false;
    if (R2 && !this.keepAlive_) Kt(this) && ($(), this.value_ = this.computeValue_(false), ee());
    else le(this), Kt(this) && (R2 = X.trackingContext, this.keepAlive_ && !R2 && (X.trackingContext = this), !this.trackAndCompute() || ((j2) => {
      var g2 = j2.lowestObserverState_;
      if (2 !== g2) j2.lowestObserverState_ = 2, g2 = pt, pt = j2, j2.observers_.forEach($n), pt = g2;
    })(this), X.trackingContext = R2);
    R2 = this.value_, Et(R2) && xt(R2.cause);
    return R2;
  }
  get isComputing() {
    return 0 != (this.flags_ & 1);
  }
  set isComputing(s2) {
    s2 ? this.flags_ |= 1 : this.flags_ &= ~1;
  }
  get isRunningSetter() {
    return 0 != (this.flags_ & 2);
  }
  set isRunningSetter(s2) {
    s2 ? this.flags_ |= 2 : this.flags_ &= ~2;
  }
  get isBeingObserved() {
    return 0 != (this.flags_ & 4);
  }
  set isBeingObserved(s2) {
    s2 ? this.flags_ |= 4 : this.flags_ &= ~4;
  }
  get isPendingUnobservation() {
    return 0 != (this.flags_ & 8);
  }
  set isPendingUnobservation(s2) {
    s2 ? this.flags_ |= 8 : this.flags_ &= ~8;
  }
  get diffValue() {
    return 0 != (this.flags_ & 16) ? 1 : 0;
  }
  set diffValue(s2) {
    1 == (s2 | 0) ? this.flags_ |= 16 : this.flags_ &= ~16;
  }
  suspend_() {
    this.keepAlive_ || (Xt(this), this.value_ = void 0);
  }
  warnAboutUntrackedRead_() {
  }
  toString() {
    let t2 = this.name_ + "[", n2 = this.derivation;
    return t2 + n2.toString() + "]";
  }
  valueOf() {
    return qn(this.get());
  }
  [Symbol.toPrimitive]() {
    return this.valueOf();
  }
  set(s2) {
    if (this.setter_) {
      !this.isRunningSetter || we(33, this.name_), this.isRunningSetter = true;
      try {
        this.setter_.call(this.scope_, s2);
      } finally {
        this.isRunningSetter = false;
      }
    } else we(34, this.name_);
  }
};
Ge("ComputedValue", ue), r = function(e2, t2) {
  $();
  try {
    return e2.apply(t2);
  } finally {
    ee();
  }
};
var c = function(s2) {
  return Tt(s2);
};
var l = function(s2, D2) {
  if (!oe(s2)) return false;
  var i2 = s2[Z], e2 = i2.values_;
  if (e2.has(D2)) return true;
  i2.lazyComputedKeys_ ? (s2 = i2.lazyComputedKeys_, s2 = !!s2.has(D2)) : s2 = false;
  if (s2) return true;
  i2.lazyObservableKeys_ ? (s2 = i2.lazyObservableKeys_, s2 = !!s2.has(D2)) : s2 = false;
  return s2 ? true : false;
};
var J = void 0;
var mt = void 0;
var Qe = void 0;
var _e;
var gt = void 0;
var Ht = void 0;
var Be = void 0;
var Pt = void 0;
var an;
var yt;
var at = function(B) {
  return B;
};
var Ve = function(B, e2, o2) {
  return Tt(B) ? B : Array.isArray(B) ? o2 ? J.array.call(J, B, { name: o2 }) : J.array.call(J, B) : Ae(B) ? o2 ? J.object.call(J, B, void 0, { name: o2 }) : J.object.call(J, B) : et(B) ? o2 ? J.map.call(J, B, { name: o2 }) : J.map.call(J, B) : tt(B) ? o2 ? J.set.call(J, B, { name: o2 }) : J.set.call(J, B) : "function" == typeof B && !Ke(B) && !nt(B) ? jn(B) ? Be(B) : gt(o2, B) : B;
};
t = function(B, e2, o2) {
  return B == null ? B : oe(B) || fe(B) || re(B) || se(B) ? B : Array.isArray(B) ? J.array.call(J, B, { name: o2, deep: false }) : Ae(B) ? J.object.call(J, B, void 0, { name: o2, deep: false }) : et(B) ? J.map.call(J, B, { name: o2, deep: false }) : tt(B) ? J.set.call(J, B, { name: o2, deep: false }) : B;
};
var d = function(B, e2) {
  return rt(B, e2, -1, void 0, void 0) ? e2 : B;
};
var cn = { deep: true, name: void 0, defaultDecorator: void 0 };
Object.freeze(cn);
var te = class extends ge {
  constructor(s2, I2, u2 = "ObservableValue", E2, d2) {
    var o2 = u2 + "";
    E2;
    var t2 = At;
    d2 && (t2 = d2), super(o2), this.enhancer_ = I2, this.name_ = o2, this.equals_ = t2, this.hasUnreportedChange_ = false, this.value_ = I2(s2, void 0, o2);
  }
  prepareNewValue_(q2) {
    if (je(this)) {
      var h2 = qe(this, { object: this, type: "update", newValue: q2 });
      if (!h2) return X.UNCHANGED;
      q2 = h2.newValue;
    }
    q2 = this.enhancer_(q2, this.value_, this.name_);
    return true === this.equals_(this.value_, q2) ? X.UNCHANGED : q2;
  }
  setNewValue_(q2) {
    var t2 = this.value_;
    this.value_ = q2, xe(this), Te(this) && Ne(this, { type: "update", object: this, newValue: q2, oldValue: t2 });
  }
  set(q2) {
    q2 = this.prepareNewValue_(q2), q2 === X.UNCHANGED || this.setNewValue_(q2);
  }
  get() {
    le(this);
    return this.dehancer === void 0 ? this.value_ : this.dehancer(this.value_);
  }
  raw() {
    return this.value_;
  }
  toJSON() {
    return this.get();
  }
  toString() {
    let t2 = this.name_ + "[";
    return t2 + this.value_ + "]";
  }
  valueOf() {
    return qn(this.get());
  }
  [Symbol.toPrimitive]() {
    return this.valueOf();
  }
};
ot = Ge("ObservableValue", te), e = { annotationType_: "override", make_: function(i2, n2) {
  return 0;
}, extend_: function() {
  we(44, this.annotationType_);
  return false;
} };
var ln = (0, function(i2, n2, p2, V) {
  if (p2.get) return Qe.make_.call(Qe, i2, n2, p2, V);
  if (p2.set) {
    var e2 = p2.set;
    Ke(e2) || (e2 = Le(ve(n2), e2, false, void 0));
    if (V === i2.target_) return i2.defineProperty_(n2, { configurable: true, set: e2 }) == null ? 0 : 2;
    de(V, n2, { configurable: true, set: e2 });
    return 2;
  }
  if (V !== i2.target_ && "function" == typeof p2.value) {
    if (jn(p2.value)) {
      var t2 = Be;
      if (this.options_) var s2 = this.options_, r2 = !!s2.autoBind;
      else {
        r2 = false;
      }
      r2 && (t2 = Pt);
      return t2.make_(i2, n2, p2, V);
    }
    t2 = gt;
    this.options_ ? (s2 = this.options_, r2 = !!s2.autoBind) : r2 = false, r2 && (t2 = Ht);
    return t2.make_(i2, n2, p2, V);
  }
  t2 = J;
  this.options_ ? (s2 = this.options_, r2 = s2.deep, r2 = false === r2) : r2 = false, r2 && (t2 = mt), "function" == typeof p2.value && this.options_ && this.options_.autoBind && (p2.value = p2.value.bind(me(i2)));
  return t2.make_(i2, n2, p2, V);
});
var dn = (0, function(i2, n2, p2, N2) {
  if (p2.get) return Qe.extend_.call(Qe, i2, n2, p2, N2);
  if (p2.set) {
    var e2 = i2.defineProperty_;
    return i2.defineProperty_(n2, { configurable: true, set: Le(ve(n2), p2.set, false, void 0) }, N2);
  }
  var r2;
  "function" == typeof p2.value && this.options_ && this.options_.autoBind && (p2.value = p2.value.bind(me(i2)));
  var t2 = J;
  this.options_ ? (e2 = this.options_, r2 = e2.deep, r2 = false === r2) : r2 = false, r2 && (t2 = mt);
  return t2.extend_(i2, n2, p2, N2);
});
an = u = { annotationType_: "true", options_: void 0, make_: ln, extend_: dn };
var hn = /* @__PURE__ */ Object.create(null);
var ae = class {
  constructor(n2, s2, u2, l2) {
    this.target_ = n2, s2 ? this.values_ = s2 : this.values_ = /* @__PURE__ */ new Map(), this.name_ = u2 + "", this.defaultAnnotation_ = an, l2 && (this.defaultAnnotation_ = l2), this.keysAtom_ = new ge("ObservableObject.keys"), this.isPlainObject_ = Ae(this.target_);
  }
  materializeLazyComputed_(n2) {
    if (!!this.lazyComputedKeys_) {
      var t2 = this.lazyComputedKeys_;
      if (t2 = t2.get(n2)) {
        var r2 = this.lazyComputedKeys_;
        r2.delete(n2), r2 = this.lazyComputedKeys_, 0 == r2.size && (this.lazyComputedKeys_ = void 0), t2 = t2(), r2 = this.values_, r2.set(n2, t2);
        return t2;
      }
    }
  }
  materializeLazyObservable_(n2) {
    if (!!this.lazyObservableKeys_) {
      var t2 = this.lazyObservableKeys_;
      if (t2 = t2.get(n2)) {
        var r2 = this.lazyObservableKeys_;
        r2.delete(n2), r2 = this.lazyObservableKeys_, 0 == r2.size && (this.lazyObservableKeys_ = void 0), t2 = t2(), r2 = this.values_, r2.set(n2, t2);
        return t2;
      }
    }
  }
  getObservablePropValue_(n2) {
    var t2 = this.values_;
    t2 = t2.get(n2), t2 || (t2 = this.materializeLazyComputed_(n2), t2 = t2 || this.materializeLazyObservable_(n2));
    return t2.get();
  }
  setObservablePropValue_(n2, q2) {
    var t2 = this.values_;
    t2 = t2.get(n2), t2 = t2 || this.materializeLazyComputed_(n2), t2 = t2 || this.materializeLazyObservable_(n2);
    if (ke(t2)) return t2.set(q2), true;
    if (je(this)) {
      var h2 = qe(this, { type: "update", object: me(this), name: n2, newValue: q2 });
      if (!h2) return null;
      q2 = h2.newValue;
    }
    q2 = t2.prepareNewValue_(q2);
    if (q2 !== X.UNCHANGED) {
      var E2 = Te(this);
      h2 = null;
      if (E2 || false) h2 = this.name_, i = t2.value_, h2 = { type: "update", observableKind: "object", debugObjectName: h2, object: me(this), oldValue: i, name: n2, newValue: q2 };
      t2.setNewValue_(q2), E2 && Ne(this, h2);
    }
    return true;
  }
  get_(n2) {
    if (X.trackingDerivation) {
      var t2 = this.target_;
      t2 = !De.call(t2, n2);
    } else {
      t2 = false;
    }
    t2 && this.has_(n2);
    return this.target_[n2];
  }
  set_(n2, s2) {
    return Pn(this, n2, s2, false);
  }
  has_(n2) {
    if (!X.trackingDerivation) return true === n2 in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var t2 = this.pendingKeys_;
    t2 = t2.get(n2);
    if (!t2) t2 = te, t2 = new t2(true === n2 in this.target_, at, "ObservableObject.key?", false), this.pendingKeys_.set(n2, t2);
    return t2.get();
  }
  extend_(a2, b2, c2, d2) {
    var u2 = c2;
    true === u2 && (u2 = this.defaultAnnotation_);
    if (false === u2) return this.defineProperty_(a2, b2, d2);
    var e2 = u2.extend_(this, a2, b2, d2);
    if (e2) {
    }
    return e2;
  }
  notifyPropertyAddition_(n2, h2) {
    var E2 = Te(this);
    (E2 || false) && (h2 = { type: "add", observableKind: "object", debugObjectName: this.name_, object: me(this), name: n2, newValue: h2 }, E2 && Ne(this, h2)), !this.pendingKeys_ || (h2 = this.pendingKeys_, n2 = h2.get(n2), !n2 || n2.set(true)), xe(this.keysAtom_);
  }
  defineProperty_(n2, p2, N2) {
    N2 = !!N2;
    try {
      $();
      var V = this.delete_(n2);
      if (!V) return V;
      if (je(this)) {
        var t2 = me(this), W = qe(this, { object: t2, name: n2, type: "add", newValue: p2.value });
        if (!W) return null;
        p2.value !== W.newValue && (p2 = be({}, p2), p2.value = W.newValue);
      }
      if (N2 && (N2 = this.target_, true !== Reflect.defineProperty(N2, n2, p2))) return false;
      else {
        de(this.target_, n2, p2);
      }
      this.notifyPropertyAddition_(n2, p2.value);
    } finally {
      ee();
    }
    return true;
  }
  defineObservableProperty_(a2, b2, c2, d2) {
    var Se2 = b2;
    try {
      $();
      var Le2 = this.delete_(a2);
      if (!Le2) return Le2;
      if (je(this)) {
        var Me2 = qe(this, { object: me(this), name: a2, type: "add", newValue: Se2 });
        if (!Me2) return null;
        Se2 = Me2.newValue;
      }
      var Ge2 = Hn(a2), We2 = true;
      !X.safeDescriptors || (We2 = !!this.isPlainObject_);
      var r2 = We2, t2 = Ge2.get, Ke2 = { configurable: r2, enumerable: true, get: t2, set: Ge2.set };
      if (d2 && (r2 = this.target_, true !== Reflect.defineProperty(r2, a2, Ke2))) return false;
      else {
        de(this.target_, a2, Ke2);
      }
      r2 = new te(Se2, c2, es, false);
      this.values_.set(a2, r2), this.notifyPropertyAddition_(a2, r2.value_);
    } finally {
      ee();
    }
    return true;
  }
  defineComputedProperty_(n2, l2, N2) {
    N2 = !!N2;
    try {
      $();
      var ke2 = this.delete_(n2);
      if (!ke2) return ke2;
      if (je(this)) {
        var xe2 = qe(this, { object: me(this), name: n2, type: "add", newValue: void 0 });
        if (!xe2) return null;
      }
      l2.name || (l2.name = es);
      l2.context = me(this);
      var ze2 = Hn(n2), Te2 = true;
      !X.safeDescriptors || (Te2 = !!this.isPlainObject_);
      var r2 = ze2.get, Ne2 = { configurable: Te2, enumerable: false, get: r2, set: ze2.set };
      if (N2 && (N2 = this.target_, true !== Reflect.defineProperty(N2, n2, Ne2))) return false;
      else {
        de(this.target_, n2, Ne2);
      }
      this.values_.set(n2, new ue(l2));
      this.notifyPropertyAddition_(n2, void 0);
    } finally {
      ee();
    }
    return true;
  }
  delete_(n2, t2) {
    var N2 = !!t2;
    t2 = this.target_;
    if (!De.call(t2, n2)) return true;
    if (je(this) && !qe(this, { object: me(this), name: n2, type: "remove" })) return null;
    try {
      $();
      var xt2 = Te(this);
      t2 = false;
      var qt2, zt2 = t2, r2 = this.values_, K = r2.get(n2);
      if (!K && (xt2 || zt2)) {
        t2 = this.target_;
        var Et2 = Q.getOwnPropertyDescriptor(t2, n2);
        Et2 && (qt2 = Et2.value);
      }
      if (N2 && (t2 = this.target_, true !== Reflect.deleteProperty(t2, n2))) return false;
      else {
        t2 = this.target_, true === Reflect.deleteProperty(t2, n2) || ((e2) => {
          throw new TypeError(e2);
        })("Cannot delete property '" + ve(n2) + "'");
      }
      t2 = false;
      t2 && delete this.appliedAnnotations_[n2], K && (t2 = this.values_, t2.delete(n2), !ot(K) || (qt2 = K.value_), Rn(K)), xe(this.keysAtom_), this.pendingKeys_ && (t2 = this.pendingKeys_, Et2 = t2.get(n2), Et2 && (t2 = Et2.set, N2 = Et2, t2.call(N2, true === n2 in this.target_)));
      if (xt2 || zt2) {
        t2 = me(this), N2 = this.name_;
        if (false) {
        }
        xt2 && Ne(this, { type: "remove", observableKind: "object", object: t2, debugObjectName: N2, oldValue: qt2, name: n2 });
        if (false) {
        }
      }
    } finally {
      ee();
    }
    return true;
  }
  ownKeys_() {
    le(this.keysAtom_);
    let t2 = this.target_;
    return Reflect.ownKeys(t2);
  }
  keys_() {
    le(this.keysAtom_);
    let t2 = this.target_;
    return Q.keys(t2);
  }
};
rn = Ge("ObservableObjectAdministration", ae);
var $e = function(d2, l2) {
  if (De.call(d2, Z)) return d2;
  var i2;
  i2 = l2 && l2.name ? l2.name + "" : "ObservableObject", i2 = new ae(d2, /* @__PURE__ */ new Map(), i2, ((l3) => {
    if (l3) {
      if (l3.defaultDecorator !== void 0) return l3.defaultDecorator;
      if (l3.autoBind || false === l3.deep) return { annotationType_: "true", options_: l3, make_: ln, extend_: dn };
    }
  })(l2)), de(d2, Z, { enumerable: false, writable: true, configurable: true, value: i2 });
  return d2;
};
var He = { has: function(d2, n2) {
  let t2 = d2[Z];
  return t2.has_.call(d2[Z], n2);
} };
He.get = function(d2, n2) {
  let t2 = d2[Z];
  return t2.get_.call(d2[Z], n2);
}, He.set = function(d2, n2, s2) {
  if (!Bt(n2)) return false;
  var R2 = Pn(d2[Z], n2, s2, true);
  return R2 == null ? true : !!R2;
}, He.deleteProperty = function(d2, n2) {
  if (!Bt(n2)) return false;
  var e2 = d2[Z], R2 = e2.delete_.call(d2[Z], n2, true);
  return R2 == null ? true : !!R2;
}, He.defineProperty = function(d2, n2, p2) {
  var e2 = d2[Z], t2 = e2.defineProperty_.call(d2[Z], n2, p2);
  return t2 == null ? true : !!t2;
}, He.ownKeys = function(d2) {
  let t2 = d2[Z];
  return t2.ownKeys_.call(d2[Z]);
}, He.preventExtensions = function(e2) {
  ne(13);
  return false;
};
var ce = {};
var bt = {};
bt.get = function(d2, o2) {
  var i2 = d2[Z];
  return o2 === Z ? i2 : "length" === o2 ? i2.getArrayLength_() : "string" == typeof o2 && true !== isNaN(o2) ? i2.get_(parseInt(o2)) : De.call(ce, o2) ? ce[o2] : d2[o2];
}, bt.set = function(d2, o2, s2) {
  var i2 = d2[Z];
  "length" === o2 && i2.setArrayLength_(s2);
  "symbol" == typeof o2 || true === isNaN(o2) ? d2[o2] = s2 : i2.set_(parseInt(o2), s2);
  return true;
}, bt.preventExtensions = function() {
  ne(15);
  return false;
};
var Oe = class {
  constructor(s2 = "ObservableArray", I2, a2) {
    var o2 = s2 + "";
    this.owned_ = false, a2 !== void 0 && (this.owned_ = !!a2), this.atom_ = new ge(o2), this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, o2 = "ObservableArray[..]", this.enhancer_ = function(n2, r2, Y) {
      return I2(n2, r2, o2);
    };
  }
  dehanceValue_(s2) {
    return this.dehancer !== void 0 ? this.dehancer(s2) : s2;
  }
  dehanceValues_(O2) {
    return this.dehancer !== void 0 && O2.length > 0 ? O2.map(this.dehancer) : O2;
  }
  getArrayLength_() {
    le(this.atom_);
    let t2 = this.values_;
    return t2.length;
  }
  setArrayLength_(A2) {
    ("number" != typeof A2 || true === Number.isNaN(A2) || (A2 | 0) < 0) && we(40, A2), A2 = A2 | 0;
    var n2 = this.values_, t2 = n2.length;
    if (A2 != t2) A2 > t2 ? (A2 = new Array(A2 - t2 | 0), this.spliceWithArray_(t2, 0, A2)) : this.spliceWithArray_(A2, t2 - A2 | 0);
  }
  spliceWithArray_(a2 = 0, b2, c2) {
    var t2 = this.values_, A2 = t2.length, L2 = a2 | 0;
    t2 = 1 == arguments.length ? A2 - L2 | 0 : b2 !== void 0 && b2 != null ? b2 | 0 : 0, A2 = void 0, A2 = c2;
    return It(this, L2, t2, c2);
  }
  get_(L2) {
    le(this.atom_);
    let t2 = this.dehanceValue_;
    return this.dehanceValue_(this.values_[L2]);
  }
  set_(A2, q2) {
    A2 |= 0;
    var O2 = this.values_;
    if (A2 < O2.length) {
      var t2 = O2[A2];
      if (je(this)) {
        var h2 = this.proxy_;
        h2 = qe(this, { type: "update", object: h2, index: A2, newValue: q2 });
        if (!h2) return;
        q2 = h2.newValue;
      }
      q2 = this.enhancer_(q2, t2);
      q2 === t2 || (O2[A2] = q2, ((e2, L2, q3, t3) => {
        var n2, r2, E2 = Te(e2), h3 = null;
        E2 && (h3 = e2.proxy_, n2 = e2.atom_, r2 = n2.name_, h3 = { observableKind: "array", object: h3, type: "update", debugObjectName: r2, index: L2, newValue: q3, oldValue: t3 }), xe(e2.atom_), E2 && Ne(e2, h3);
      })(this, A2, q2, t2));
    } else A2++, A2 = new Array(A2 - O2.length), A2[A2.length - 1 | 0] = q2, It(this, O2.length, 0, A2);
  }
};
var nr = function(i2, I2, o2, c2) {
  var e2 = "ObservableArray";
  o2 !== void 0 && (e2 = o2 + "");
  var t2 = false;
  t2 = !!c2;
  return Xe(function() {
    var w2 = new Oe(e2, I2, t2), r2 = w2.values_;
    de(r2, Z, { enumerable: false, writable: false, configurable: true, value: w2 }), r2 = w2.values_, r2 = new Proxy(r2, bt), w2.proxy_ = r2;
    var n2;
    i2 && i2.length > 0 && (n2 = w2.spliceWithArray_, w2.spliceWithArray_(0, 0, i2));
    return r2;
  });
};
nn = Ge("ObservableArrayAdministration", Oe), ce.clear = function() {
  return this.splice(0);
}, ce.replace = function(A2) {
  let i2 = this[Z], t2 = i2.spliceWithArray_, n2 = i2.values_;
  return i2.spliceWithArray_(0, n2.length, A2);
}, ce.toJSON = function() {
  return this.slice();
}, ce.splice = function(a2, g2) {
  var i2 = this[Z];
  if (0 == arguments.length) return [];
  if (1 == arguments.length) return i2.spliceWithArray_(a2);
  if (2 == arguments.length) return i2.spliceWithArray_(a2, g2);
  var e2 = Ye.call(arguments, 2, arguments.length);
  return i2.spliceWithArray_(a2, g2, e2);
}, ce.spliceWithArray = function() {
  let t2 = this[Z];
  return t2.spliceWithArray_.apply(this[Z], arguments);
}, ce.push = function() {
  let i2 = this[Z], t2 = i2.values_;
  It(i2, t2.length, 0, arguments);
  return i2.values_.length;
}, ce.pop = function() {
  var n2 = this[Z], r2 = n2.values_, t2 = r2.length - 1 | 0;
  t2 < 0 && (t2 = 0);
  return this.splice(t2, 1)[0];
}, ce.shift = function() {
  return this.splice(0, 1)[0];
}, ce.unshift = function() {
  let i2 = this[Z];
  It(i2, 0, 0, arguments);
  return i2.values_.length;
}, ce.reverse = function() {
  return !X.trackingDerivation || we(37, "reverse"), this.replace(this.slice().reverse()), this;
}, ce.sort = function() {
  !X.trackingDerivation || we(37, "sort");
  var t2 = this.slice();
  t2.sort.apply(t2, arguments), this.replace(t2);
  return this;
}, ce.remove = function(s2) {
  var i2 = this[Z];
  s2 = +i2.dehanceValues_(i2.values_).indexOf(s2);
  return s2 > -1 ? (this.splice(s2, 1), true) : false;
}, ye("at"), ye("concat"), ye("flat"), ye("includes"), ye("indexOf"), ye("join"), ye("lastIndexOf"), ye("slice"), ye("toString"), ye("toLocaleString"), ye("toSorted"), ye("toSpliced"), ye("with"), Re("every"), Re("filter"), Re("find"), Re("findIndex"), Re("findLast"), Re("findLastIndex"), Re("flatMap"), Re("forEach"), Re("map"), Re("some"), Re("toReversed"), Fn("reduce"), Fn("reduceRight");
var rr = {};
var _ = class {
  constructor(t2, o2, n2 = "ObservableMap") {
    var e2 = this;
    e2[Z] = rr, e2.enhancer_ = Ve, o2 && (e2.enhancer_ = o2), o2 = n2 + "", e2.name_ = o2, e2.interceptors_ = void 0, e2.changeListeners_ = void 0, e2.dehancer = void 0, Xe(function() {
      e2.keysAtom_ = Lt("ObservableMap.keys()"), e2.data_ = /* @__PURE__ */ new Map(), e2.hasMap_ = /* @__PURE__ */ new Map(), !t2 || e2.merge(t2);
    });
  }
  has_(n2) {
    let t2 = this.data_;
    return !!t2.has(n2);
  }
  has(n2) {
    var e2 = this;
    if (!X.trackingDerivation) return e2.has_(n2);
    var t2 = e2.hasMap_;
    t2 = t2.get(n2);
    if (!t2) t2 = te, t2 = new t2(e2.has_(n2), at, "ObservableMap.key?", false), e2.hasMap_.set(n2, t2), t2.onBUOL = /* @__PURE__ */ new Set(), t2.onBUOL.add(function() {
      e2.hasMap_.delete(n2);
    });
    return t2.get();
  }
  set(n2, s2) {
    var h2 = this.data_, t2 = !!h2.has(n2);
    if (je(this)) {
      h2 = t2 ? "update" : "add", h2 = qe(this, { type: h2, object: this, newValue: s2, name: n2 });
      if (!h2) return this;
      s2 = h2.newValue;
    }
    t2 ? this.updateValue_(n2, s2) : this.addValue_(n2, s2);
    return this;
  }
  updateValue_(n2, q2) {
    var t2 = this.data_;
    t2 = t2.get(n2), q2 = t2.prepareNewValue_(q2);
    if (q2 !== X.UNCHANGED) {
      var r2, E2 = Te(this), h2 = null;
      E2 && (h2 = this.name_, r2 = t2.value_, h2 = { observableKind: "map", debugObjectName: h2, type: "update", object: this, oldValue: r2, name: n2, newValue: q2 }), t2.setNewValue_(q2), E2 && Ne(this, h2);
    }
  }
  addValue_(n2, q2) {
    $();
    try {
      var C2 = "ObservableMap.key", L2 = new te(q2, this.enhancer_, C2, false);
      this.data_.set(n2, L2), q2 = L2.value_;
      var z2 = this.hasMap_, D2 = z2.get(n2);
      !D2 || D2.setNewValue_.call(D2, true), xe(this.keysAtom_);
    } finally {
      ee();
    }
    z2 = false;
    var E2 = Te(this), h2 = null;
    E2 && (z2 = true), z2 && (z2 = this.name_, h2 = { observableKind: "map", debugObjectName: z2, type: "add", object: this, name: n2, newValue: q2 }), E2 && Ne(this, h2);
  }
  delete(n2) {
    if (je(this) && !qe(this, { type: "delete", object: this, name: n2 })) return false;
    var z2 = this.data_;
    if (z2.has(n2)) {
      z2 = false;
      var E2 = Te(this), h2 = null;
      E2 && (z2 = true);
      if (z2) z2 = this.name_, h2 = this.data_.get(n2).value_, h2 = { observableKind: "map", debugObjectName: z2, type: "delete", object: this, oldValue: h2, name: n2 };
      $();
      try {
        xe(this.keysAtom_), z2 = this.hasMap_;
        var H2 = z2.get(n2);
        !H2 || H2.setNewValue_.call(H2, false), z2 = this.data_;
        var P = z2.get(n2);
        P.setNewValue_.call(P, void 0), z2 = this.data_, z2.delete(n2);
      } finally {
        ee();
      }
      E2 && Ne(this, h2);
      return true;
    }
    return false;
  }
  get(n2) {
    return this.has(n2) ? (n2 = this.data_.get(n2), St(this, n2.get())) : St(this, void 0);
  }
  getOrInsert(n2, s2) {
    this.has(n2) || this.set(n2, s2);
    return this.get(n2);
  }
  getOrInsertComputed(n2, t2) {
    this.has(n2) || this.set(n2, t2(n2));
    return this.get(n2);
  }
  keys() {
    le(this.keysAtom_);
    let t2 = this.data_;
    return t2.keys();
  }
  values() {
    var e2 = this;
    let n2 = e2.keys(), t2 = { next: function() {
      var l2 = n2.next();
      return l2.done ? { done: true, value: void 0 } : { done: false, value: e2.get(l2.value) };
    } };
    t2[Symbol.toStringTag] = "MapIterator";
    return zt(t2);
  }
  entries() {
    var e2 = this;
    let n2 = e2.keys(), t2 = { next: function() {
      var f2 = n2.next();
      if (f2.done) return { done: true, value: void 0 };
      var Y = [], t3 = f2.value;
      Y.push(t3), Y.push(e2.get(f2.value));
      return { done: false, value: Y };
    } };
    t2[Symbol.toStringTag] = "MapIterator";
    return zt(t2);
  }
  forEach(S2, t2) {
    var r2 = this.entries(), n2 = r2.next();
    while (!n2.done) {
      var i2 = n2.value[1];
      S2.call(t2, i2, n2.value[0], this), n2 = i2 = r2.next();
    }
  }
  merge(t2) {
    var e2 = this;
    re(t2) && (t2 = new Map(t2)), $();
    try {
      if (Ae(t2)) {
        var as = lr(t2), cs = 0;
        for (; ; cs++) {
          var n2 = cs;
          if (n2 >= as.length) break;
          n2 = e2.set;
          var r2 = as[cs];
          e2.set(r2, t2[as[cs]]);
          var a2 = as, l2 = as, h2 = as;
        }
      } else if (Array.isArray(t2)) for (var ls = 0; ; ls++) {
        n2 = ls;
        if (n2 >= t2.length) break;
        n2 = e2.set, r2 = t2[ls][0];
        var i2 = t2[ls];
        e2.set(r2, i2[1]);
      }
      else et(t2) ? (Q.getPrototypeOf(Q.getPrototypeOf(Q.getPrototypeOf(t2))) == null || we(19, t2), t2.forEach(function(i3, r3) {
        e2.set(r3, i3);
      })) : t2 == null || we(20, t2);
    } finally {
      ee();
    }
    return e2;
  }
  clear() {
    $();
    try {
      var z2 = Ce();
      try {
        for (var j2 = pe(this.keys()), q2 = 0; ; q2++) {
          if (q2 >= j2.length) break;
          this.delete(j2[q2]);
        }
      } finally {
        ze(z2);
      }
    } finally {
      ee();
    }
  }
  replace(O2) {
    $();
    try {
      var Jt2 = ((e2) => {
        if (et(e2) || re(e2)) return e2;
        if (Array.isArray(e2)) return new Map(e2);
        if (Ae(e2)) {
          for (var r2, i2, n2 = /* @__PURE__ */ new Map(), t3 = Q.keys(e2), a2 = 0; a2 < t3.length; a2++) r2 = t3[a2], i2 = e2[t3[a2]], n2.set(r2, i2);
          return n2;
        }
        we(21, e2);
        return /* @__PURE__ */ new Map();
      })(O2), zn2 = /* @__PURE__ */ new Map(), jn2 = false;
      O2 = this.data_;
      for (var qn2 = pe(O2.keys()), En2 = 0; ; En2++) {
        O2 = En2;
        if (O2 >= qn2.length) break;
        var Tn2 = qn2[En2];
        if (!Jt2.has(Tn2)) if (this.delete(Tn2)) jn2 = true;
        else {
          O2 = zn2;
          var t2 = Tn2;
          O2.set(t2, this.data_.get(Tn2));
        }
      }
      qn2 = pe(Jt2.entries());
      for (En2 = 0; ; En2++) {
        O2 = En2;
        if (O2 >= qn2.length) break;
        var Rn2 = qn2[En2][0], In2 = qn2[En2][1], Sn2 = !!this.data_.has(Rn2);
        this.set(Rn2, In2), this.data_.has(Rn2) && (O2 = zn2, t2 = Rn2, O2.set(t2, this.data_.get(Rn2)), Sn2 || (jn2 = true));
      }
      if (!jn2) {
        O2 = this.data_, t2 = O2.size;
        if (t2 != zn2.size) xe(this.keysAtom_);
        else {
          O2 = this.data_;
          var On2 = O2.keys(), Un2 = zn2.keys(), An2 = On2.next(), Cn2 = Un2.next();
          while (!An2.done) {
            O2 = An2.value;
            if (O2 !== Cn2.value) {
              xe(this.keysAtom_);
              break;
            }
            An2 = On2.next();
            Cn2 = Un2.next();
          }
        }
      }
      this.data_ = zn2;
    } finally {
      ee();
    }
    return this;
  }
  toJSON() {
    return pe(this);
  }
  toString() {
    return "[object ObservableMap]";
  }
  get size() {
    le(this.keysAtom_);
    let t2 = this.data_;
    return t2.size;
  }
  get [Symbol.toStringTag]() {
    return "Map";
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
h = Symbol.toStringTag, en = Ge("ObservableMap", _), ir = {};
var ie = class {
  constructor(r2, i2, s2) {
    var n2 = this;
    n2[Z] = ir;
    var e2 = "ObservableSet";
    s2 === void 0 || (e2 = s2 + ""), n2.name_ = e2;
    var t2 = Ve;
    i2 && (t2 = i2), n2.enhancer_ = function(a2, n3, Y) {
      return t2(a2, n3, e2);
    }, n2.data_ = /* @__PURE__ */ new Set(), n2.changeListeners_ = void 0, n2.interceptors_ = void 0, n2.dehancer = void 0, Xe(function() {
      n2.atom_ = Lt(n2.name_), !r2 || n2.replace(r2);
    });
  }
  has(s2) {
    le(this.atom_);
    return !!this.data_.has(St(this, s2));
  }
  add(s2) {
    if (je(this)) {
      var z2 = qe(this, { type: "add", object: this, newValue: s2 });
      if (!z2) return this;
      s2 = z2.newValue;
    }
    if (!this.has(s2)) {
      $();
      try {
        z2 = this.data_, z2.add(this.enhancer_(s2, void 0)), xe(this.atom_);
      } finally {
        ee();
      }
      z2 = false;
      var E2 = Te(this), h2 = null;
      E2 && (z2 = true), z2 && (z2 = this.name_, h2 = { observableKind: "set", debugObjectName: z2, type: "add", object: this, newValue: s2 }), E2 && Ne(this, h2);
    }
    return this;
  }
  delete(s2) {
    if (je(this) && !qe(this, { type: "delete", object: this, oldValue: s2 })) return false;
    if (this.has(s2)) {
      var z2 = false, E2, h2;
      E2 = Te(this), h2 = null, E2 && (z2 = true), z2 && (z2 = this.name_, h2 = { observableKind: "set", debugObjectName: z2, type: "delete", object: this, oldValue: s2 }), $();
      try {
        xe(this.atom_), z2 = this.data_, z2.delete(s2);
      } finally {
        ee();
      }
      E2 && Ne(this, h2);
      return true;
    }
    return false;
  }
  values() {
    var e2 = this;
    le(e2.atom_);
    let t2 = e2.data_, O2 = t2.values();
    t2 = { next: function() {
      var c2 = O2.next();
      return c2.done ? { done: true, value: void 0 } : { done: false, value: St(e2, c2.value) };
    } }, t2[Symbol.toStringTag] = "SetIterator";
    return zt(t2);
  }
  keys() {
    return this.values();
  }
  entries() {
    let n2 = this.values(), t2 = { next: function() {
      var h2 = n2.next();
      if (h2.done) return { done: true, value: void 0 };
      var Y = [], e2 = h2.value;
      Y.push(e2), Y.push(h2.value);
      return { done: false, value: Y };
    } };
    t2[Symbol.toStringTag] = "SetIterator";
    return zt(t2);
  }
  forEach(S2, t2) {
    var r2 = this.values(), n2 = r2.next();
    while (!n2.done) {
      S2.call(t2, n2.value, n2.value, this);
      var i2 = r2.next();
      n2 = i2;
    }
  }
  replace(t2) {
    var e2 = this;
    se(t2) && (t2 = new Set(t2)), $();
    try {
      if (Array.isArray(t2)) {
        e2.clear();
        for (var R2 = 0; ; R2++) {
          if (R2 >= t2.length) break;
          e2.add(t2[R2]);
        }
      } else tt(t2) ? (e2.clear(), t2.forEach(function(s2) {
        e2.add(s2);
      })) : t2 == null || we(41, t2);
    } finally {
      ee();
    }
    return e2;
  }
  clear() {
    $();
    try {
      var x2 = Ce();
      try {
        for (var t2 = this.data_, z2 = pe(t2.values()), j2 = 0; ; j2++) {
          if (j2 >= z2.length) break;
          this.delete(z2[j2]);
        }
      } finally {
        ze(x2);
      }
    } finally {
      ee();
    }
  }
  toJSON() {
    return pe(this);
  }
  toString() {
    return "[object ObservableSet]";
  }
  get size() {
    le(this.atom_);
    let t2 = this.data_;
    return t2.size;
  }
  get [Symbol.toStringTag]() {
    return "Set";
  }
  [Symbol.iterator]() {
    return this.values();
  }
};
Ze("intersection"), Ze("union"), Ze("difference"), Ze("symmetricDifference"), Ze("isSubsetOf"), Ze("isSupersetOf"), Ze("isDisjointFrom"), tn = Ge("ObservableSet", ie);
var pn = (0, function(i2, n2, p2) {
  return this.extend_(i2, n2, p2, false) == null ? 0 : 1;
});
var sr = (0, function(i2, n2, p2, N2) {
  var t2, I2 = Ve, r2 = !!((t2 = this.options_) && t2.enhancer_);
  r2 && (r2 = this.options_, I2 = r2.enhancer_);
  return i2.defineObservableProperty_(n2, p2.value, I2, N2);
});
var or = (0, function(i2, n2, p2, N2) {
  var r2 = be({}, this.options_);
  r2.get = p2.get, r2.set = p2.set;
  return i2.defineComputedProperty_(n2, r2, N2);
});
var ur = (0, function(i2, n2, p2, V) {
  var t2, r2 = !!((t2 = this.options_) && t2.bound);
  if (r2) return this.extend_(i2, n2, p2, false) == null ? 0 : 1;
  if (V === i2.target_) return this.extend_(i2, n2, p2, false) == null ? 0 : 2;
  if (Ke(p2.value)) return 1;
  de(V, n2, Mn(i2, this, n2, p2, false));
  return 2;
});
var ar = (0, function(i2, n2, o2, d2) {
  let t2 = i2.defineProperty_;
  return i2.defineProperty_(n2, Mn(i2, this, n2, o2, !!X.safeDescriptors), d2);
});
var fn = function(u2, e2, H2) {
  var f2 = H2.name;
  nt(e2) || (e2 = Be(e2));
  var n2, t2 = !!((n2 = u2.options_) && n2.bound);
  t2 && H2.addInitializer(function() {
    let t3 = this[f2];
    t3 = t3.bind(this), t3.isMobXFlow = true, this[f2] = t3;
  });
  return e2;
};
var mn = (0, function(i2, n2, p2, V) {
  if (V === i2.target_) return this.extend_(i2, n2, p2, false) == null ? 0 : 2;
  var t2, r2 = !!((t2 = this.options_) && t2.bound);
  r2 ? (r2 = i2.target_, r2 = !De.call(r2, n2) || !nt(i2.target_[n2])) : r2 = false;
  if (r2 && this.extend_(i2, n2, p2, false) == null) return 0;
  if (nt(p2.value)) return 1;
  de(V, n2, Gn(i2, p2, false, false));
  return 2;
});
var gn = (0, function(a2, b2, c2, d2) {
  var n2, e2, t2 = !!((n2 = this.options_) && n2.bound);
  e2 = a2.defineProperty_, b2;
  return a2.defineProperty_(b2, Gn(a2, c2, t2, !!X.safeDescriptors), d2);
});
yt = function(d2, n2, s2, u2) {
  var e2, t2;
  e2 = s2, t2 = u2;
  var r2 = Q.getOwnPropertyDescriptors(n2);
  Xe(function() {
    for (var A2, U2, i2 = $e(d2, t2)[Z], L2 = Reflect.ownKeys(r2), a2 = 0; a2 < L2.length; a2++) A2 = L2[a2], U2 = e2 ? true === A2 in e2 ? e2[A2] : true : true, i2.extend_(A2, r2[A2], U2);
  });
  return d2;
};
var ct = function(u2, e2, H2) {
  if ("accessor" == H2.kind + "") {
    var f2 = H2.name;
    return { get: function() {
      var i2 = this[Z];
      i2 = i2 || Jt(this, u2, f2, e2.get.call(this));
      return i2.getObservablePropValue_(f2);
    }, set: function(s2) {
      var i2 = this[Z];
      i2 = i2 || Jt(this, u2, f2, s2);
      return i2.setObservablePropValue_(f2, s2);
    }, init: function(s2) {
      Jt(this, u2, f2, s2);
      return s2;
    } };
  }
};
var Ft = Ot("observable", void 0);
u = Ot("observable.ref", { enhancer_: at }), t = Ot("observable.shallow", { enhancer_: t }), d = Ot("observable.struct", { enhancer_: d }), J = be(function(s2, e2, n2) {
  return e2 && "string" == typeof e2.kind ? ct(Ft, s2, e2) : Tt(s2) ? s2 : Ae(s2) ? J.object.call(J, s2, e2, n2) : Array.isArray(s2) ? J.array.call(J, s2, e2) : et(s2) ? J.map.call(J, s2, e2) : tt(s2) ? J.set.call(J, s2, e2) : "object" == typeof s2 && s2 != null ? s2 : J.box.call(J, s2, e2);
}, Ft), J.box = function(s2, l2) {
  let t2 = Rt(l2);
  return new te(s2, Nt(t2), t2.name, true, t2.equals);
}, J.array = function(e2, l2) {
  let t2 = Rt(l2);
  return nr(e2, Nt(t2), t2.name);
}, J.map = function(e2, l2) {
  let t2 = Rt(l2);
  return new _(e2, Nt(t2), t2.name);
}, J.set = function(e2, l2) {
  let t2 = Rt(l2);
  return new ie(e2, Nt(t2), t2.name);
}, J.object = function(e2, n2, l2) {
  return Xe(function() {
    var d2 = {};
    d2 = $e(d2, l2);
    var b2 = d2[Z];
    b2.proxy_ || (b2.proxy_ = new Proxy(d2, He)), d2 = b2.proxy_;
    return yt(d2, e2, n2);
  });
}, mt = Se(u, ct), h = Se(t, ct);
var p = Se(Ft, ct);
d = Se(d, ct);
var Mt = function(u2, t2, H2) {
  var e2, f2 = H2.name, n2 = function(d2, i2) {
    var l2 = be({}, u2.options_);
    l2.get = t2, l2.context = d2, l2.name || (l2.name = ts + ve(f2));
    return new ue(l2);
  };
  H2.addInitializer(function() {
    var e3 = this, i2 = $e(e3)[Z], r2 = i2.values_;
    r2 = r2.get(f2);
    var E2;
    ke(r2) && r2.derivation !== t2 && (E2 = i2.values_, E2.delete(f2)), i2.lazyComputedKeys_ || (i2.lazyComputedKeys_ = /* @__PURE__ */ new Map()), i2.lazyComputedKeys_.set(f2, function() {
      return n2(e3, i2);
    });
  });
  return function() {
    var i2 = this[Z], s2 = i2.values_;
    s2 = s2.get(f2);
    var R2;
    return ke(s2) && s2.derivation !== t2 ? (!e2 && (e2 = /* @__PURE__ */ new WeakMap()), R2 = e2.get(this), R2 || (R2 = n2(this, i2), e2.set(this, R2)), R2.get()) : i2.getObservablePropValue_(f2);
  };
};
var yn = Zt("computed", void 0);
u = Zt("computed.struct", { equals: function(v2, C2) {
  return rt(v2, C2, -1, void 0, void 0);
} }), Qe = be(function(e2, t2) {
  if (t2 && "string" == typeof t2.kind) return Mt(yn, e2, t2);
  if (Ae(e2)) return Se(Zt("computed", e2), Mt);
  var b2 = {};
  Ae(t2) && (b2 = be({}, t2)), b2.get = e2, b2.name || (b2.name = e2.name);
  return new ue(b2);
}, yn);
var f = Se(u, Mt);
t = (0, function(k2) {
  var w2 = k2.name + "";
  "" == w2 && (w2 = ns);
  return Ln(w2, false, k2, this, void 0);
});
var vt = function(u2, e2, H2) {
  var f2 = H2.name, r2 = function(t3) {
    var w2 = ve(f2);
    if (u2.options_) var e3 = u2.options_, m2 = !!e3.name;
    else {
      m2 = false;
    }
    m2 && (m2 = u2.options_, w2 = m2.name + "");
    m2 = !!((e3 = u2.options_) && e3.autoAction);
    return Le(w2, t3, m2, void 0);
  };
  if ("field" == H2.kind + "") return function(n3) {
    Ke(n3) || (n3 = r2(n3));
    var h2, e3 = !!((h2 = u2.options_) && h2.bound);
    e3 && (n3 = n3.bind(this), n3.isMobxAction = true);
    return n3;
  };
  if ("method" == H2.kind + "") {
    Ke(e2) || (e2 = r2(e2));
    if (u2.options_) {
      var t2 = u2.options_;
      r2 = !!t2.bound;
    } else {
      r2 = false;
    }
    r2 && H2.addInitializer(function() {
      let t3 = this[f2];
      t3 = t3.bind(this), t3.isMobxAction = true, this[f2] = t3;
    });
    return e2;
  }
  e2 = u2.annotationType_;
  t2 = ve(f2);
  var n2 = H2.kind;
  r2 = [], r2.push(e2), r2.push(t2), r2.push(n2), We(43, r2);
};
var bn = dt("action", void 0);
u = dt("action.bound", { bound: true });
var vn = dt("autoAction", { autoAction: true });
var m = dt("autoAction.bound", { autoAction: true, bound: true });
_e = be(function(t2, n2) {
  if (n2 && "string" == typeof n2.kind) {
    var w2 = bn;
    return vt(w2, t2, n2);
  }
  if ("function" == typeof t2) return w2 = t2.name + "", "" == w2 && (w2 = ns), Le(w2, t2, false, void 0);
  if ("function" == typeof n2) return Le(t2 + "", n2, false, void 0);
  if (Bt(t2)) return w2 = "action", Se(dt(w2, { name: t2, autoAction: false }), vt);
}, bn), gt = be(function(t2, n2) {
  if (n2 && "string" == typeof n2.kind) {
    var w2 = vn;
    return vt(w2, t2, n2);
  }
  if ("function" == typeof t2) return w2 = t2.name + "", "" == w2 && (w2 = ns), Le(w2, t2, true, void 0);
  if ("function" == typeof n2) return Le(t2 + "", n2, true, void 0);
  if (Bt(t2)) return w2 = "autoAction", Se(dt(w2, { name: t2, autoAction: true }), vt);
}, vn);
var g = Se(u, vt);
Ht = Se(m, vt);
var Pe = class extends Error {
  constructor() {
    super(), this.message = "FLOW_CANCELLED", this.name = "FlowCancellationError";
  }
  toString() {
    return "Error: " + this.message;
  }
};
de(Pe, "name", { value: "FlowCancellationError", configurable: true });
u = Pe.prototype, m = function(e2) {
  return zn(Pe, e2);
};
var y = function(t2, H2) {
  if (H2 && "string" == typeof H2.kind) return fn(Be, t2, H2);
  var e2 = t2.name + "";
  "" == e2 && (e2 = "flow");
  var K = (0, function() {
    var K2, r2, rs, u2 = e2, i2 = _e(u2, t2).apply(this, arguments), W = { rejector: void 0, pending: void 0, stepId: 0 };
    K2 = function(B) {
      W.pending = void 0;
      try {
        var U2 = e2, C2 = _e(U2, i2.next).call(i2, B);
        rs(C2);
      } catch (D2) {
        W.rejector(D2);
      }
    }, r2 = function(r3) {
      W.pending = void 0;
      try {
        var C2 = e2, D2 = _e(C2, i2.throw).call(i2, r3);
        rs(D2);
      } catch (H3) {
        W.rejector(H3);
      }
    }, rs = function(j2) {
      if ("function" == typeof j2.then) {
        j2.then(rs, W.rejector);
        return;
      }
      if (j2.done) {
        W.resolve(j2.value);
        return;
      }
      W.pending = Promise.resolve(j2.value);
      W.pending.then(K2, r2);
    };
    var s2 = new Promise(function(r3, i3) {
      W.resolve = r3, W.rejector = i3, K2(void 0);
    });
    u2 = e2, s2.cancel = _e(u2, function() {
      var P;
      try {
        if (W.pending) var n2 = W.pending, t3 = "function" == typeof n2.cancel;
        else {
          t3 = false;
        }
        t3 && (t3 = W.pending, t3.cancel.call(W.pending)), H2 = i2.return(void 0), P = Promise.resolve(H2.value);
        P.then(Je, Je), "function" == typeof P.cancel && P.cancel.call(P), W.rejector(new Pe());
      } catch (F) {
        W.rejector(F);
      }
    });
    return s2;
  });
  K.isMobXFlow = true;
  return K;
};
u = { annotationType_: "flow", options_: void 0, make_: mn, extend_: gn }, Be = be(y, u), u = { annotationType_: "flow.bound", options_: { bound: true }, make_: mn, extend_: gn }, Pt = Se(u, fn), u = function(R2) {
  return R2;
}, y = function(k2) {
  return nt(k2);
};
var Gt = function(n2, b2) {
  var o2 = $t;
  b2 = b2 || o2, o2 = b2.name ? b2.name + "" : "Autorun";
  var e2, r2 = !b2.scheduler && !b2.delay, i2 = () => {
    n2(e2);
  };
  if (r2) {
    var g2 = e2;
    e2 = new he(o2, function() {
      this.track(i2);
    }, b2.onError, b2.requiresObservable);
  } else {
    r2 = Yn(b2);
    var t2 = false, s2 = he;
    g2 = e2, e2 = new s2(o2, function() {
      var h2 = this;
      !t2 && (t2 = true, r2(() => {
        t2 = false, h2.isDisposed || h2.track(i2);
      }));
    }, b2.onError, b2.requiresObservable);
  }
  o2 = !!((s2 = b2.signal) && s2.aborted);
  o2 || e2.schedule_(), o2 = e2.getDisposer_;
  return o2.call(e2, b2.signal);
};
var b = function(a2, c2, l2) {
  var e2 = $t;
  l2 && (e2 = l2);
  var u2 = e2.name ? e2.name + "" : "Reaction", o2 = At;
  !e2.equals || (o2 = e2.equals);
  var r2, t2, d2 = Le(u2, vr(e2.onError, c2), false, void 0), n2 = true, i2 = false, h2 = () => {
    var R2 = !!X.allowStateChanges;
    X.allowStateChanges = false;
    var T2;
    try {
      T2 = a2(t2);
    } finally {
      X.allowStateChanges = R2;
    }
    i2 = n2 || true !== o2(r2, T2);
    r2 = T2;
  };
  c2 = !e2.scheduler && !e2.delay;
  var s2 = false, p2 = Yn(e2), f2 = () => {
    s2 = false;
    if (!t2.isDisposed) {
      var u3 = r2;
      t2.track.call(t2, h2), n2 && e2.fireImmediately ? d2(r2, u3, t2) : !n2 && false, n2 = false;
    }
  }, g2 = () => {
    if (n2 || c2) f2();
    else !s2 && (s2 = true, p2(f2));
  }, y2 = e2.onError;
  var as = n2;
  t2 = new he(u2, g2, y2, e2.requiresObservable), u2 = !!((l2 = e2.signal) && l2.aborted), u2 || (u2 = t2.schedule_, u2.call(t2)), u2 = t2.getDisposer_;
  return u2.call(t2, e2.signal);
};
var v = function(a2, c2, d2) {
  var b2;
  return 1 == arguments.length || c2 && "object" == typeof c2 ? (b2 = void 0, b2 = c2, ((e2, b3) => {
    var T2;
    if (b3 && b3.signal && b3.signal.aborted) return e2 = Promise.reject(new Error("WHEN_ABORTED")), e2.cancel = function() {
      return null;
    }, e2;
    T2 = { cancel: void 0, abort: void 0 };
    var K = new Promise(function(s2, r2) {
      var i2 = be({}, b3);
      i2.onError = r2, i2 = Zi(e2, s2, i2), T2.cancel = function() {
        i2(), r2(new Error("WHEN_CANCELLED"));
      }, T2.abort = function() {
        i2(), r2(new Error("WHEN_ABORTED"));
      }, b3 && b3.signal && "function" == typeof b3.signal.addEventListener && b3.signal.addEventListener("abort", T2.abort);
    });
    b3 && b3.signal && "function" == typeof b3.signal.removeEventListener && (K = K.finally(function() {
      b3.signal.removeEventListener("abort", T2.abort);
    })), K.cancel = T2.cancel;
    return K;
  })(a2, b2)) : Zi(a2, c2, d2);
};
var w = function(l2) {
  var t2 = l2.isolateGlobalState;
  true === t2 && Jn(), l2.enforceActions === void 0 || (t2 = l2.enforceActions, "always" === t2 ? (X.enforceActions = "always", X.allowStateChanges = false) : "observed" === t2 ? (X.enforceActions = true, X.allowStateChanges = false) : (X.enforceActions = false, X.allowStateChanges = true)), true === "computedRequiresReaction" in l2 && (t2 = X, t2.computedRequiresReaction = !!l2.computedRequiresReaction), true === "reactionRequiresObservable" in l2 && (t2 = X, t2.reactionRequiresObservable = !!l2.reactionRequiresObservable), true === "observableRequiresReaction" in l2 && (t2 = X, t2.observableRequiresReaction = !!l2.observableRequiresReaction), true === "disableErrorBoundaries" in l2 && (t2 = X, t2.disableErrorBoundaries = !!l2.disableErrorBoundaries), true === "safeDescriptors" in l2 && (t2 = X, t2.safeDescriptors = !!l2.safeDescriptors), t2 = X, t2.allowStateReads = !X.observableRequiresReaction;
  if (l2.reactionScheduler) {
    t2 = l2.reactionScheduler;
    var e2 = Ct;
    Ct = (o2) => t2(() => e2(o2));
  }
};
var Yt = Symbol("mobx-keys");
var k = function(d2, e2, l2) {
  Xe(function() {
    for (var j2, i2 = $e(d2, l2)[Z], t2 = Reflect.ownKeys(e2), z2 = 0; z2 < t2.length; z2++) j2 = t2[z2], Bn(i2, j2, e2[t2[z2]]);
  });
  return d2;
};
var x = function(d2, e2, l2) {
  if (Ae(d2)) return yt(d2, d2, e2, l2);
  Xe(function() {
    var i2 = $e(d2, l2)[Z];
    if (true !== Yt in d2) {
      for (var s2, t2 = Q.getPrototypeOf(d2), os = /* @__PURE__ */ new Set(), n2 = Reflect.ownKeys(d2), r2 = Reflect.ownKeys(t2), a2 = 0; a2 < n2.length; a2++) s2 = n2[a2], os.add(s2);
      for (a2 = 0; a2 < r2.length; a2++) n2 = r2[a2], os.add(n2);
      os.delete("constructor"), os.delete(Z), de(t2, Yt, { enumerable: false, writable: true, configurable: true, value: os });
    }
    d2[Yt].forEach(function(n3) {
      var u2 = e2 && true === n3 in e2 ? e2[n3] : true;
      Bn(i2, n3, u2);
    });
  });
  return d2;
};
var wt = function(y2) {
  if (oe(y2)) {
    var a2 = y2[Z];
    return a2.keys_.call(y2[Z]);
  }
  if (re(y2) || se(y2)) return pe(y2.keys());
  if (fe(y2)) {
    var e2 = [];
    for (a2 = 0; a2 < y2.length; a2++) e2.push(a2);
    return e2;
  }
  ne(5);
};
var z = function(y2) {
  if (oe(y2)) {
    for (var n2, t2 = wt(y2), e2 = [], a2 = 0; a2 < t2.length; a2++) n2 = y2[t2[a2]], e2.push(n2);
    return e2;
  }
  if (re(y2)) {
    for (t2 = wt(y2), e2 = [], a2 = 0; a2 < t2.length; a2++) e2.push(y2.get(t2[a2]));
    return e2;
  }
  if (se(y2)) return pe(y2.values());
  if (fe(y2)) return y2.slice();
  ne(6);
};
var j = function(y2) {
  if (oe(y2) || re(y2)) {
    for (var e2, r2, t2 = wt(y2), n2 = [], a2 = 0; a2 < t2.length; a2++) e2 = [], r2 = t2[a2], e2.push(r2), re(y2) ? e2.push(y2.get(t2[a2])) : (r2 = y2[t2[a2]], e2.push(r2)), n2.push(e2);
    return n2;
  }
  if (se(y2)) return pe(y2.entries());
  if (fe(y2)) {
    for (t2 = [], a2 = 0; a2 < y2.length; a2++) e2 = [], e2.push(a2), e2.push(y2[a2]), t2.push(e2);
    return t2;
  }
  ne(7);
};
var wn = function(b2, e2, g2) {
  var n2 = e2, s2 = g2;
  if (2 == arguments.length && !se(b2)) {
    $();
    try {
      for (var Te2 = Q.keys(n2), Ne2 = 0; ; Ne2++) {
        var r2 = Ne2;
        if (r2 >= Te2.length) break;
        r2 = wn, s2 = Te2[Ne2], r2(b2, s2, n2[Te2[Ne2]]);
        var o2 = Te2, a2 = Te2, c2 = Ne2, l2 = Te2, d2 = Ne2, f2 = Ne2;
      }
    } finally {
      ee();
    }
    return;
  }
  oe(b2) ? (r2 = b2[Z], r2.set_.call(b2[Z], n2, s2)) : re(b2) ? b2.set(n2, s2) : se(b2) ? b2.add(n2) : fe(b2) ? ($(), r2 = n2 | 0, r2 >= b2.length && (b2.length = (n2 | 0) + 1 | 0), b2[n2] = s2, ee()) : ne(8);
};
var q = function(y2, n2) {
  if (oe(y2)) {
    var t2 = y2[Z];
    t2.delete_.call(y2[Z], n2);
  } else re(y2) || se(y2) ? y2.delete(n2) : fe(y2) ? y2.splice(n2, 1) : ne(9);
};
var kn = function(y2, n2) {
  if (oe(y2)) {
    var t2 = y2[Z];
    return t2.has_.call(y2[Z], n2);
  }
  if (re(y2) || se(y2)) return y2.has(n2);
  if (fe(y2)) return (n2 | 0) >= 0 ? (t2 = n2 | 0, t2 = t2 < y2.length) : t2 = false, t2;
  ne(10);
  return false;
};
var E = function(y2, n2) {
  if (!!kn(y2, n2)) {
    if (oe(y2)) return y2[Z].get_.call(y2[Z], n2);
    if (re(y2)) return y2.get(n2);
    if (fe(y2)) return y2[n2];
    ne(11);
  }
};
var xn = function(y2) {
  if (oe(y2)) return y2[Z].ownKeys_.call(y2[Z]);
  ne(38);
};
var T = function(y2, n2, p2) {
  if (oe(y2)) return y2[Z].defineProperty_.call(y2[Z], n2, p2);
  ne(39);
};
var Fe = function(m2, D2) {
  if ("object" == typeof m2 && m2 != null) {
    if (fe(m2)) {
      D2 === void 0 || ne(23);
      var t2 = m2[Z];
      return t2.atom_;
    }
    if (se(m2)) return m2.atom_;
    if (re(m2)) {
      if (D2 === void 0) return m2.keysAtom_;
      t2 = m2.data_, t2 = t2.get(D2), t2 || (t2 = m2.hasMap_, t2 = t2.get(D2));
      if (!t2) {
        var e2 = m2.name_, i2 = [];
        i2.push(D2), i2.push(e2), We(25, i2);
      }
      return t2;
    }
    if (D2 && !m2[Z] && m2[D2] === void 0) {
    }
    if (oe(m2)) return D2 || ne(26), i2 = m2[Z], t2 = i2.values_, t2 = t2.get(D2), t2 = t2 || i2.materializeLazyComputed_(D2), t2 = t2 || i2.materializeLazyObservable_(D2), t2 || (e2 = i2.name_, m2 = [], m2.push(D2), m2.push(e2), We(27, m2)), t2;
    if (Vt(m2) || ke(m2) || jt(m2)) return m2;
  } else {
    if ("function" == typeof m2 && jt(m2[Z])) return m2[Z];
  }
  we(28, m2);
};
var Ue = function(m2, D2) {
  m2 || ne(29);
  if (D2 !== void 0) return Ue(Fe(m2, D2));
  if (Vt(m2) || ke(m2) || jt(m2) || re(m2) || se(m2)) return m2;
  if (m2[Z]) return m2[Z];
  we(24, m2);
};
var N = function(m2, D2) {
  if (D2 !== void 0) var t2 = Fe(m2, D2);
  else if (Ke(m2)) return m2.name;
  else {
    t2 = oe(m2) || re(m2) || se(m2) ? Ue(m2) : Fe(m2);
  }
  return t2.name_;
};
var R = function(a2, b2, c2, d2) {
  var m2 = a2;
  if (arguments.length > 2 && "function" == typeof c2) {
    var i2 = d2;
    m2 = Ue(m2, b2);
    return Xi(m2, c2, i2);
  }
  var t2 = arguments.length > 2 && c2;
  i2 = Ue(m2);
  if (fe(m2)) {
    if (t2) {
      var r2 = i2.values_;
      r2 = Ye.call(r2), m2 = i2.proxy_, t2 = i2.atom_, b2({ observableKind: "array", object: m2, debugObjectName: t2.name_, type: "splice", index: 0, added: r2, addedCount: r2.length, removed: [], removedCount: 0 });
    }
    i2 = Ki(i2, b2);
    return i2;
  }
  if (re(m2)) return i2 = Ki(i2, b2), i2;
  if (se(m2)) return i2 = Ki(i2, b2), i2;
  if (oe(m2)) return i2 = Ki(i2, b2), i2;
  i2 = Xi(i2, b2, t2);
  return i2;
};
var I = function(m2, s2, n2) {
  if (arguments.length > 2 && "function" == typeof n2) {
    var t2 = Ue(m2, s2);
    return Dn(t2, n2);
  }
  t2 = Ue(m2);
  return Dn(t2, s2);
};
var S = function() {
  return Vn("onBOL", arguments);
};
var O = function() {
  return Vn("onBUOL", arguments);
};
var U = function(t2) {
  return it(t2, /* @__PURE__ */ new Map());
};
var A = function(m2, D2) {
  return Wn(Fe(m2, D2));
};
var C = function(m2, D2) {
  return Wi(Fe(m2, D2));
};
var L = function(s2) {
  return ke(s2);
};
var D = function(s2, D2) {
  if (!oe(s2)) return false;
  var i2 = s2[Z];
  i2.lazyComputedKeys_ ? (s2 = i2.lazyComputedKeys_, s2 = !!s2.has(D2)) : s2 = false;
  if (s2) return true;
  s2 = i2.values_;
  if (!s2.has(D2)) return false;
  s2 = i2.values_;
  return ke(s2.get(D2));
};
var H = function(a2, b2, c2) {
  var e2, P = void 0;
  re(a2) || fe(a2) || ot(a2) || se(a2) ? (e2 = Ue(a2), P = b2) : oe(a2) && (e2 = Ue(a2, b2), P = c2), e2.dehancer = P;
  return function() {
    e2.dehancer = void 0;
  };
};
var jr = t;
var qr = (g2) => {
  X.allowStateReads = g2;
};
var Er = (e2) => {
  let g2 = !!X.allowStateReads;
  X.allowStateReads = e2;
  return g2;
};
var Ir = (v2, C2) => true === st(v2, C2);
var Sr = (v2, C2) => v2 === C2;
var Or = (v2, C2) => rt(v2, C2, 1, void 0, void 0);
var Ur = (v2, C2) => rt(v2, C2, -1, void 0, void 0);
var _r = i;
var ti = H;
var ri = (F) => !!ot(F);
var oi = () => X.trackingDerivation != null;
