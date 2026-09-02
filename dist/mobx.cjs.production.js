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
  $mobx: () => X,
  FlowCancellationError: () => Na,
  ObservableMap: () => _,
  ObservableSet: () => ea,
  Reaction: () => ma,
  _allowStateChanges: () => gc,
  _allowStateChangesInsideComputed: () => e,
  _allowStateReadsEnd: () => Ed,
  _allowStateReadsStart: () => Fd,
  _autoAction: () => rb,
  _autoActionBound: () => Nb,
  _endAction: () => Jc,
  _getAdministration: () => Ha,
  _getGlobalState: () => i,
  _interceptReads: () => P,
  _isComputingDerivation: () => le,
  _resetGlobalState: () => j,
  _startAction: () => Ic,
  action: () => _a,
  actionBound: () => t,
  autorun: () => Rb,
  compareDefault: () => Jd,
  compareIdentity: () => Kd,
  compareShallow: () => Ld,
  compareStructural: () => Md,
  computed: () => Za,
  computedStruct: () => r,
  configure: () => x,
  createAtom: () => Lb,
  defineProperty: () => E,
  entries: () => B,
  extendObservable: () => sb,
  flow: () => Sa,
  flowBound: () => Ob,
  flowResult: () => h,
  get: () => D,
  getAtom: () => Oa,
  getDebugName: () => F,
  getDependencyTree: () => L,
  getObserverTree: () => ee,
  has: () => vc,
  intercept: () => H,
  isAction: () => Va,
  isBoxedObservable: () => ie,
  isComputed: () => T,
  isComputedProp: () => O,
  isFlow: () => u,
  isFlowCancellationError: () => s,
  isObservable: () => m,
  isObservableArray: () => oa,
  isObservableMap: () => da,
  isObservableObject: () => ga,
  isObservableProp: () => n,
  isObservableSet: () => fa,
  keys: () => vb,
  makeAutoObservable: () => z,
  makeObservable: () => y,
  observable: () => Y,
  observableDeep: () => q,
  observableRef: () => qb,
  observableShallow: () => p,
  observableStruct: () => o,
  observe: () => G,
  onBecomeObserved: () => I,
  onBecomeUnobserved: () => J,
  onReactionError: () => f,
  override: () => d,
  ownKeys: () => wc,
  reaction: () => v,
  remove: () => C,
  runInAction: () => e,
  set: () => uc,
  spy: () => k,
  toJS: () => K,
  transaction: () => g,
  untracked: () => l,
  values: () => A,
  when: () => w
});
module.exports = __toCommonJS(mobx_esm_exports);
var Ye = "ObservableObject.key";
var Ze = "ObservableObject.";
var _e = "<unnamed action>";
var Pa = (a) => a != null && "object" == typeof a;
var Tb = (a) => {
  a = typeof a;
  return "string" == a || "symbol" == a || "number" == a;
};
var xc = (a, b) => b == null ? false : true === Yc.call(a.prototype, b);
var na = (a) => Array.from(a);
var la = (a, b, c) => {
  Z.defineProperty(a, b, c);
};
var sa = (a, b) => Z.assign(a, b);
var Qa = (a, b) => {
  a = "isMobX" + a, b.prototype[a] = true;
  return function(b2) {
    return Pa(b2) && true === b2[a];
  };
};
var xb = (a) => {
  throw a;
};
var yc = (a) => {
  if (a == null) return false;
  var b = a.constructor;
  return !b ? false : "GeneratorFunction" == b.name + "" ? true : "GeneratorFunction" == b.displayName + "" ? true : false;
};
var Ia = (a) => {
  if (!Pa(a)) return false;
  var b = Z.getPrototypeOf(a);
  if (b == null) return true;
  a = void 0, !La.call(b, "constructor") || (a = b.constructor), a = "function" == typeof a && a.toString() === Zc;
  return a;
};
var ab = (a) => a == null ? false : "[object Map]" == Z.prototype.toString.call(a) + "";
var bb = (a) => a == null ? false : "[object Set]" == Z.prototype.toString.call(a) + "";
var ta = (a) => "string" == typeof a ? a : "symbol" == typeof a ? a.toString() : new String(a) + "";
var zc = (a) => null === a ? null : "object" == typeof a ? "" + a : a;
var yb = (a) => {
  a[Symbol.iterator] = _c;
  if (!_b) {
    _b = true;
    var b = globalThis.Iterator;
    Ib = b ? b.prototype : {};
  }
  b = Ib;
  return sa(Z.create(b), a);
};
var Ac = (a) => {
  var b = false;
  return function() {
    if (!b) return b = true, a.apply(this, arguments);
  };
};
var Ua = (a, b) => {
  b = b.length > 0 ? " " + b.map(String).join(",") : "", xb(new Error("[MobX] minified error nr: " + a + b + ". See mobx.js.org/errors"));
};
var ca = (a) => {
  Ua(a, []);
};
var ua = (a, b) => {
  let c = [];
  c.push(b), Ua(a, c);
};
var Ub = (a) => Pa(a) && true === a.isMobXAtom;
var va = (a) => Pa(a) && true === a.isMobXComputedValue;
var zb = (a) => Pa(a) && true === a.isMobXReaction;
var da = (a) => !!bc(a);
var fa = (a) => !!cc(a);
var oa = (a) => !Pa(a) ? false : !!dc(a[X]);
var ga = (a) => !Pa(a) ? false : !!ec(a[X]);
var Va = (a) => "function" == typeof a && true === a.isMobxAction;
var cb = (a) => a == null ? false : true === a.isMobXFlow;
var Ab = () => {
  let a = {};
  a.version = 7, a.UNCHANGED = {};
  let b = null;
  a.trackingDerivation = b, a.trackingContext = b, a.runId = 0, a.mobxGuid = 0, a.inBatch = 0, a.pendingUnobservations = [], a.pendingReactions = [], a.isRunningReactions = false, a.allowStateChanges = false, a.allowStateReads = true, a.enforceActions = true, a.spyListeners = [], a.globalReactionErrorHandlers = [], a.computedRequiresReaction = false, a.reactionRequiresObservable = false, a.observableRequiresReaction = false, a.disableErrorBoundaries = false, a.suppressReactionErrors = false, a.safeDescriptors = true;
  return a;
};
var Bc = (a) => {
  if (!a.isPendingUnobservation) a.isPendingUnobservation = true, W.pendingUnobservations.push(a);
};
var Cc = (a, b) => {
  a.observers_.delete(b), b = a.observers_, b.size || Bc(a);
};
var $ = () => {
  W.inBatch++;
};
var aa = () => {
  var a = --W.inBatch;
  if (0 == a) {
    Ec();
    for (var c, e2 = W.pendingUnobservations, b = 0; b < e2.length; b++) a = e2[b], a.isPendingUnobservation = false, c = a.observers_, c.size || (!a.isBeingObserved || (a.isBeingObserved = false, a.onBUO()), va(a) && a.suspend_());
    W.pendingUnobservations = [];
  }
};
var ka = (a) => {
  var b = W.trackingDerivation;
  if (b != null) {
    var c = b.runId_;
    c === a.lastAccessedBy_ || (a.lastAccessedBy_ = b.runId_, c = b.unboundDepsCount_ | 0, b.newObserving_[c] = a, b.unboundDepsCount_ = c + 1 | 0, !a.isBeingObserved && W.trackingContext && (a.isBeingObserved = true, a.onBO()));
    return !!a.isBeingObserved;
  } else {
    b = a.observers_, !b.size && W.inBatch && Bc(a);
  }
  return false;
};
var Dc = (a) => {
  if (2 !== a.lowestObserverState_) a.lowestObserverState_ = 2, a.observers_.forEach(ad);
};
var wa = (a) => {
  $(), Dc(a), aa();
};
var Ec = () => {
  if (!((W.inBatch | 0) > 0 || W.isRunningReactions)) Kb(dd);
};
var Fc = (a) => {
  !a.onBOL || a.onBOL.forEach(function(a2) {
    a2();
  });
};
var Gc = (a) => {
  !a.onBUOL || a.onBUOL.forEach(function(a2) {
    a2();
  });
};
var Ja = () => {
  let a = W.trackingDerivation;
  W.trackingDerivation = null;
  return a;
};
var xa = (a) => {
  W.trackingDerivation = a;
};
var Bb = (a) => Pa(a) && true === a.isMobXCaughtException;
var Wb;
var Hc;
(function() {
  let a = (a2) => {
    if (0 != (a2.dependenciesState_ | 0)) {
      a2.dependenciesState_ = 0;
      var c = a2.observing_, b = c.length;
      while (b > 0) b--, a2 = c[b], a2.lowestObserverState_ = 0;
    }
  };
  Wb = function(b) {
    var c = b.dependenciesState_ | 0;
    if (0 == c) return false;
    if (c == -1 || 2 == c) return true;
    if (1 == c) {
      c = true, c = Ja();
      for (var e2, d2, r2 = b.observing_, i2 = r2.length, t2 = 0; t2 < i2; t2++) {
        e2 = r2[t2];
        if (va(e2)) {
          d2 = W.disableErrorBoundaries;
          if (true === d2) e2.get();
          else try {
            e2.get();
          } catch {
            xa(c);
            return true;
          }
          e2 = b.dependenciesState_;
          if (2 === e2) return xa(c), true;
        }
      }
      a(b);
      xa(c);
      return false;
    }
    return false;
  }, Hc = function(b, c, e2) {
    var d2, t2 = true;
    a(b), 0 != (b.runId_ | 0) ? (d2 = b.observing_, t2 = d2.length) : t2 = 100, b.newObserving_ = new Array(t2), b.unboundDepsCount_ = 0, t2 = (W.runId | 0) + 1 | 0, W.runId = t2, b.runId_ = t2, t2 = W.trackingDerivation, W.trackingDerivation = b, d2 = W, d2.inBatch = (W.inBatch | 0) + 1 | 0;
    var r2;
    d2 = W.disableErrorBoundaries;
    if (true === d2) r2 = c.call(e2);
    else try {
      r2 = c.call(e2);
    } catch (a2) {
      r2 = new hb(a2);
    }
    W.inBatch--;
    W.trackingDerivation = t2, ((a2) => {
      var i2 = a2.observing_, t3 = a2.newObserving_;
      a2.observing_ = t3;
      for (var b2, d3, f2 = a2.unboundDepsCount_ | 0, r3 = 0, e3 = 0, c2 = 0; c2 < f2; c2++) b2 = t3[c2], 0 == (b2.diffValue | 0) && (b2.diffValue = 1, e3 != c2 && (t3[e3] = b2), e3++), d3 = b2.dependenciesState_, d3 !== void 0 && (d3 | 0) > r3 && (r3 = d3 | 0);
      t3.length = e3, a2.newObserving_ = null, b2 = i2.length;
      while (b2 > 0) b2--, c2 = i2[b2], 0 == (c2.diffValue | 0) && Cc(c2, a2), c2.diffValue = 0;
      while (e3 > 0) e3--, b2 = t3[e3], 1 == (b2.diffValue | 0) && (b2.diffValue = 0, ((a3, b3) => {
        var c3 = a3.observers_;
        c3.add(b3), c3 = a3.lowestObserverState_ | 0, c3 > (b3.dependenciesState_ | 0) && (a3.lowestObserverState_ = b3.dependenciesState_);
      })(b2, a2));
      0 != r3 && (a2.dependenciesState_ = r3, a2.onBecomeStale_());
    })(b);
    return r2;
  };
})();
var Xb = (a) => {
  var c = a.observing_;
  a.observing_ = [];
  var b = c.length;
  while (b > 0) b--, Cc(c[b], a);
  a.dependenciesState_ = -1;
};
var Ka = (a, b, c, e2) => {
  var t2 = (0, function() {
    var t3 = e2 == null ? this : e2;
    return Kc(a, c, b, t3, arguments);
  });
  t2.isMobxAction = true, t2.toString = function() {
    return b.toString();
  }, ed && (hc.value = a, la(t2, "name", hc));
  return t2;
};
var Ic = (a, b) => {
  var c = W.trackingDerivation;
  b = !b || c == null, $();
  var t2 = !!W.allowStateChanges;
  b && Ja();
  var d2 = !!W.allowStateReads, e2 = Mb;
  Mb++;
  var r2 = pb;
  pb = e2, a = {}, a.runAsAction_ = b, a.prevDerivation_ = c, a.prevAllowStateChanges_ = t2, a.prevAllowStateReads_ = d2, a.notifySpy_ = false, a.startTime_ = 0, a.actionId_ = e2, a.parentActionId_ = r2;
  return a;
};
var Jc = (a) => {
  pb != (a.actionId_ | 0) && ca(30), pb = a.parentActionId_ | 0, a.error_ === void 0 || (W.suppressReactionErrors = true), aa(), !a.runAsAction_ || xa(a.prevDerivation_), W.suppressReactionErrors = false;
};
var Kc = (a, b, c, e2, t2) => {
  var d2 = Ic(a, b, e2, t2);
  try {
    return c.apply(e2, t2);
  } catch (a2) {
    d2.error_ = a2;
    throw a2;
  } finally {
    Jc(d2);
  }
};
var Ba = (a) => {
  if (a.changeListeners_ !== void 0) var c = a.changeListeners_, b = c.length > 0;
  else {
    b = false;
  }
  return b;
};
var lb = (a, b) => {
  a.changeListeners_ === void 0 && (a.changeListeners_ = []);
  var c = a.changeListeners_;
  c.push(b);
  return Ac(function() {
    var a2 = +c.indexOf(b);
    a2 != -1 && c.splice(a2, 1);
  });
};
var Ca = (a, b) => {
  var e2 = Ja(), c = a.changeListeners_;
  if (!c) {
    xa(e2);
    return;
  }
  c = Ra.call(c);
  var t2 = c.length;
  for (a = 0; a < t2; a++) c[a](b);
  xa(e2);
};
var ya = (a) => {
  if (a.interceptors_ !== void 0) var c = a.interceptors_, b = c.length > 0;
  else {
    b = false;
  }
  return b;
};
var Lc = (a, b) => {
  a.interceptors_ === void 0 && (a.interceptors_ = []);
  var c = a.interceptors_;
  c.push(b);
  return Ac(function() {
    var a2 = +c.indexOf(b);
    a2 != -1 && c.splice(a2, 1);
  });
};
var za = (a, b) => {
  var d2 = Ja();
  try {
    var e2 = [];
    !a.interceptors_ || (e2 = a.interceptors_);
    for (var t2 = Ra.call(e2), r2 = t2.length, c = 0; c < r2; c++) {
      b = t2[c](b), b && !b.type && ca(14);
      if (!b) break;
    }
    return b;
  } finally {
    xa(d2);
  }
};
var Fa = (a, b) => sa(function(c, e2) {
  if (e2 && "string" == typeof e2.kind) return b(a, c, e2);
}, a);
var Wa = (a) => {
  var b = Ja(), c = true;
  $();
  try {
    return a();
  } finally {
    aa(), xa(b);
  }
};
var Cb = (a) => !a ? false : ga(a) || a[X] || Ub(a) || zb(a) || va(a);
var db = /* @__PURE__ */ (function() {
  let a = (a2, b2) => {
    if (!a2) return false;
    if ("function" == typeof a2.isPrototypeOf) return true === a2.isPrototypeOf(b2);
    true === "constructor" in b2 ? (a2 = b2.constructor == a2, a2 = true === a2) : a2 = false;
    return a2;
  }, b = (a2) => oa(a2) ? a2.slice() : ab(a2) || da(a2) ? na(a2.entries()) : bb(a2) || fa(a2) ? na(a2.entries()) : a2;
  return function(c, e2, t2, d2, r2) {
    if (c === e2) return 0 !== c ? c = true : (c = 1 / +c, c = c === 1 / +e2), c;
    if (c == null || e2 == null) return false;
    if (c !== c) return e2 !== e2;
    var i2 = typeof c;
    if ("function" != i2 && "object" != i2 && "object" != typeof e2) return false;
    var f2 = Z.prototype;
    i2 = f2.toString.call(c) + "";
    if (i2 != Z.prototype.toString.call(e2) + "") return false;
    if ("[object RegExp]" == i2 || "[object String]" == i2) return "" + c == "" + e2;
    if ("[object Number]" == i2) {
      c = Number(c), e2 = Number(e2);
      return true !== fb(c, c) ? true !== fb(e2, e2) : 0 === c ? (c = 1 / +c, true === fb(c, 1 / +e2)) : c === e2;
    }
    if ("[object Date]" == i2 || "[object Boolean]" == i2) return c = Number(c), c === Number(e2);
    if ("[object Symbol]" == i2) return c = Symbol.valueOf.call(c), c === Symbol.valueOf.call(e2);
    ("[object Map]" == i2 || "[object Set]" == i2) && t2 >= 0 && (t2 = t2 + 1 | 0), f2 = b(c), c = b(e2);
    var n2 = "[object Array]" == i2;
    if (!n2) {
      if ("object" != typeof f2 || "object" != typeof c) return false;
      e2 = f2.constructor, i2 = c.constructor;
      if (e2 !== i2 && !("function" == typeof e2 && a(e2, e2) && "function" == typeof i2 && a(i2, i2)) && true === "constructor" in f2 && true === "constructor" in c) return false;
    }
    if (0 == t2) return false;
    else {
      t2 < 0 && (t2 = -1);
    }
    d2 === void 0 && (d2 = [], r2 = []);
    for (e2 = d2.length; e2--; ) if (d2[e2] === f2) return r2[e2] === c;
    d2.push(f2), r2.push(c);
    if (n2) {
      e2 = f2.length;
      if (e2 != c.length) return false;
      while (e2 > 0) {
        e2--;
        if (!db(f2[e2], c[e2], t2 - 1 | 0, d2, r2)) return false;
      }
    } else {
      n2 = Z.keys(f2);
      var s2 = n2.length;
      if (Z.keys(c).length != s2) return false;
      for (i2 = 0; i2 < s2; i2++) {
        e2 = n2[i2];
        if (La.call(c, e2)) {
          var o2 = f2[e2];
          e2 = c[e2], e2 = db(o2, e2, t2 - 1 | 0, d2, r2);
        } else {
          e2 = false;
        }
        if (!e2) return false;
      }
    }
    d2.pop();
    r2.pop();
    return true;
  };
})();
var Db = (a) => {
  var b = a.deep;
  if (true === b) return Ta;
  b = a.deep;
  if (false === b) return ib;
  if (a.defaultDecorator) {
    var c = a.defaultDecorator;
    b = !!c.options_;
  } else {
    b = false;
  }
  return b && a.defaultDecorator.options_.enhancer_ ? (b = a.defaultDecorator, c = b.options_, c.enhancer_) : Ta;
};
var Eb = (a) => !!a ? a : jc;
var pa = (a) => a.proxy_ ? a.proxy_ : a.target_;
var Mc = (a) => {
  var b = mc[a];
  if (b) return b;
  b = {}, b.get = function() {
    let b2 = this[X];
    return b2.getObservablePropValue_(a);
  }, b.set = function(b2) {
    let c = this[X];
    return c.setObservablePropValue_(a, b2);
  }, mc[a] = b;
  return b;
};
var Nc = (a, b, c, e2) => {
  var t2 = a.target_;
  if (La.call(t2, b)) {
    t2 = a.values_;
    if (t2.has(b)) return a.setObservablePropValue_(b, c);
    if (e2) return e2 = a.target_, true === Reflect.set(e2, b, c);
    a.target_[b] = c;
    return true;
  }
  return a.extend_(b, { value: c, enumerable: true, writable: true, configurable: true }, a.defaultAnnotation_, e2);
};
var Fb = /* @__PURE__ */ (function() {
  return function(a, b, c, e2) {
    var d2 = a.values_, t2 = d2.length;
    b > t2 ? b = t2 : b < 0 && (b = t2 + b | 0, b < 0 && (b = 0)), c < 0 && (c = 0), t2 = t2 - b | 0, c > t2 || (t2 = c), e2 == null ? e2 = [] : Array.isArray(e2) || (c = Array.prototype, e2 = c.slice.call(e2));
    if (ya(a)) {
      c = a.proxy_, c = za(a, { object: c, type: "splice", index: b, removedCount: t2, added: e2 });
      if (!c) return $b;
      t2 = c.removedCount | 0, e2 = c.added;
    }
    if (0 != e2.length) {
      c = [];
      var r2 = e2.length;
      for (d2 = 0; d2 < r2; d2++) c.push(a.enhancer_(e2[d2], void 0));
    } else {
      c = e2;
    }
    d2 = ((a2, b2, c2, e3) => {
      var t3 = a2.values_, r3 = e3.length, i2 = +r3, d3 = i2 | 0;
      if (0 == c2 && b2 == t3.length) {
        for (a2 = 0; a2 < d3; a2++) b2 = e3[a2], t3.push(b2);
        return $b;
      }
      if (d3 < 1e4) {
        for (a2 = [], a2.push(b2), a2.push(c2), b2 = 0; b2 < e3.length; b2++) c2 = e3[b2], a2.push(c2);
        return t3.splice.apply(t3, a2);
      }
      a2 = b2 + c2 | 0;
      var f2 = Ra.call(t3, b2, a2);
      for (d3 = Ra.call(t3, a2, t3.length), a2 = t3.length, t3.length = a2 + e3.length - c2 | 0, a2 = 0; a2 < e3.length; a2++) t3[b2 + a2 | 0] = e3[a2];
      for (a2 = 0; a2 < d3.length; a2++) t3[b2 + e3.length + a2 | 0] = d3[a2];
      return f2;
    })(a, b, t2, c);
    (0 != t2 || 0 != c.length) && ((a2, b2, c2, e3) => {
      var d3, r3, i2, f2 = Ba(a2), t3 = null;
      f2 && (t3 = a2.proxy_, d3 = a2.atom_, r3 = d3.name_, i2 = e3.length, t3 = { observableKind: "array", object: t3, debugObjectName: r3, type: "splice", index: b2, removed: e3, added: c2, removedCount: i2, addedCount: c2.length }), wa(a2.atom_), f2 && Ca(a2, t3);
    })(a, b, c, d2);
    return a.dehanceValues_(d2);
  };
})();
var ra = (a) => {
  "function" == typeof Array.prototype[a] && (ja[a] = function() {
    let b = this[X];
    ka(b.atom_);
    let c = b.dehanceValues_(b.values_);
    return c[a].apply(c, arguments);
  });
};
var Da = (a) => {
  "function" == typeof Array.prototype[a] && (ja[a] = function(b, c) {
    var t2 = this, e2 = t2[X];
    ka(e2.atom_);
    var d2, r2 = e2.dehanceValues_(e2.values_);
    d2 = c;
    return r2[a](function(a2, c2) {
      return b.call(d2, a2, c2, t2);
    });
  });
};
var Oc = (a) => {
  "function" == typeof Array.prototype[a] && (ja[a] = function() {
    var c = this;
    let b = c[X];
    ka(b.atom_);
    let e2 = b.dehanceValues_(b.values_), t2 = arguments[0];
    arguments[0] = function(a2, b2, e3) {
      return t2(a2, b2, e3, c);
    };
    return e2[a].apply(e2, arguments);
  });
};
var Gb = (a, b) => a.dehancer !== void 0 ? a.dehancer(b) : b;
var Xa = (a) => {
  ea.prototype[a] = function(b) {
    var c = this.atom_;
    ka(c);
    return ("intersection" == a || "union" == a || "symmetricDifference" == a || "isDisjointFrom" == a) && bb(b) && !fa(b) && "function" == typeof b[a] ? b[a](this) : new Set(this)[a](b);
  };
};
var Hb = (a, b) => {
  let c = {};
  c.annotationType_ = a, c.options_ = b, c.make_ = nc, c.extend_ = id;
  return c;
};
var Yb = (a, b) => {
  let c = {};
  c.annotationType_ = a, c.options_ = b, c.make_ = nc, c.extend_ = jd;
  return c;
};
var Pc = (a, b, c, e2, t2) => {
  var r2 = e2.value;
  if (b.options_) {
    var d2 = b.options_;
    e2 = !!d2.bound;
  } else {
    e2 = false;
  }
  e2 && (r2 = r2.bind(pa(a)));
  d2 = ta(c), b.options_ ? (e2 = b.options_, c = !!e2.name) : c = false, c && (c = b.options_, d2 = c.name + ""), b.options_ ? (e2 = b.options_, c = !!e2.autoAction) : c = false;
  var i2, f2 = c;
  i2 = void 0, c = !!((e2 = b.options_) && e2.bound), c && (i2 = pa(a)), t2 ? (b = !!a.isPlainObject_, a = false) : (b = true, a = true);
  return { value: Ka(d2, r2, f2, i2), configurable: b, enumerable: false, writable: a };
};
var mb = (a, b) => {
  let c = {};
  c.annotationType_ = a, c.options_ = b, c.make_ = kd, c.extend_ = ld;
  return c;
};
var Qc = (a, b, c, e2) => {
  var t2 = b.value;
  cb(t2) || (t2 = Sa(t2)), c && (t2 = t2.bind(pa(a)), t2.isMobXFlow = true), e2 ? (b = !!a.isPlainObject_, a = false) : (b = true, a = true);
  return { value: t2, configurable: b, enumerable: false, writable: a };
};
var Zb = (a, b, c, e2) => {
  var t2 = $a(a)[X];
  t2.lazyObservableKeys_ || (t2.lazyObservableKeys_ = /* @__PURE__ */ new Map()), t2.lazyObservableKeys_.set(c, function() {
    var t3, d2 = Ta, a2 = !!((t3 = b.options_) && t3.enhancer_);
    a2 && (a2 = b.options_, d2 = a2.enhancer_), m = Ze + ta(c);
    return new ba(e2, d2, m, false);
  });
  return t2;
};
var Rc = (a) => a.scheduler ? a.scheduler : a.delay ? function(b) {
  return setTimeout(b, a.delay);
} : function(a2) {
  return a2();
};
var Sc = (a, b, c) => {
  c = c || {};
  var e2, t2;
  if ("number" == typeof c.timeout) {
    var d2 = new Error("WHEN_TIMEOUT"), r2 = function() {
      var a2 = e2[X];
      if (!a2.isDisposed) e2(), c.onError ? c.onError(d2) : xb(d2);
    }, i2 = c.timeout;
    t2 = setTimeout(r2, i2);
  }
  c.name || (c.name = "When");
  var f2 = Ka("When-effect", b, false, void 0);
  e2 = Rb(function(b2) {
    gc(false, a) && (b2.dispose(), !t2 || clearTimeout(t2), f2());
  }, c);
  return e2;
};
var Tc = (a, b, c) => {
  true === c && (c = a.defaultAnnotation_);
  if (false !== c) {
    if (true !== b in a.target_) {
      var t2 = c.annotationType_, d2 = a.name_ + "." + ta(b), e2 = [];
      e2.push(t2), e2.push(d2), Ua(1, e2);
    }
    for (e2 = a.target_; ; ) {
      t2 = e2 && e2 !== Z.prototype;
      if (!t2) break;
      if (t2 = Z.getOwnPropertyDescriptor(e2, b)) {
        t2 = c.make_(a, b, t2, e2);
        if (0 === t2) return;
        if (1 === t2) break;
      }
      e2 = Z.getPrototypeOf(e2);
    }
  }
};
var Uc = (a, b, c) => {
  if (va(a)) {
    var e2, t2 = true;
    return Rb(function() {
      var d2 = a.get;
      d2 = a.get();
      if (!t2 || c) {
        var r2 = Ja(), i2 = a.name_;
        b({ observableKind: "computed", debugObjectName: i2, type: "update", object: a, newValue: d2, oldValue: e2 }), xa(r2);
      }
      t2 = false;
      e2 = d2;
    });
  }
  c && (c = a.name_, b({ observableKind: "value", debugObjectName: c, object: a, type: "update", newValue: a.value_, oldValue: void 0 }));
  return lb(a, b);
};
var Vc = (a, b) => {
  var c, t2 = b[1], e2 = t2;
  b.length > 2 && "function" == typeof b[2] ? (c = Oa(b[0], b[1]), e2 = b[2]) : c = Oa(b[0]), c[a] ? (b = c[a], b.add(e2)) : (b = c, b[a] = /* @__PURE__ */ new Set(), b = c[a], b.add(e2));
  return function() {
    var b2 = c[a];
    b2 && (b2.delete(e2), 0 == b2.size && delete c[a]);
  };
};
var eb = (a, b) => {
  var t2;
  if (a == null || "object" != typeof a || xc(Date, a) || !Cb(a)) return a;
  if (gb(a) || va(a)) return eb(a.get(), b);
  if (b.has(a)) return b.get(a);
  if (oa(a)) {
    var e2 = [];
    b.set(a, e2);
    for (var c = 0; c < a.length; c++) e2[c] = eb(a[c], b);
    return e2;
  }
  if (fa(a)) {
    for (c = /* @__PURE__ */ new Set(), b.set(a, c), e2 = na(a.values()), a = 0; a < e2.length; a++) c.add(eb(e2[a], b));
    return c;
  }
  if (da(a)) {
    for (e2 = /* @__PURE__ */ new Map(), b.set(a, e2), c = na(a.entries()), a = 0; a < c.length; a++) d2 = c[a][0], t2 = c[a], e2.set(d2, eb(t2[1], b));
    return e2;
  }
  var d2;
  for (d2 = {}, b.set(a, d2), e2 = wc(a), c = 0; c < e2.length; c++) t2 = Z.prototype, true === t2.propertyIsEnumerable.call(a, e2[c]) && (t2 = e2[c], d2[t2] = eb(a[e2[c]], b));
  return d2;
};
var Wc = (a) => {
  var e2 = { name: a.name_ };
  if (a.observing_) var c = a.observing_, b = c.length > 0;
  else {
    b = false;
  }
  if (b) {
    for (c = [], b = 0; ; b++) {
      if (b >= a.observing_.length) break;
      c.push(Wc(a.observing_[b]));
    }
    e2.dependencies = c;
  }
  return e2;
};
var Xc = (a) => {
  var c = { name: a.name_ };
  if (((a2) => {
    var b2;
    return !!((b2 = a2.observers_) && b2.size);
  })(a)) {
    var b = a.observers_;
    b = na(b.values());
    var e2 = [];
    for (a = 0; a < b.length; a++) e2.push(Xc(b[a]));
    c.observers = e2;
  }
  return c;
};
var Z = Object;
var e = Object.prototype;
var La = e.hasOwnProperty;
var fb = Object.is;
var f = Array.prototype;
var Ra = f.slice;
var g = Object.prototype;
var Yc = g.isPrototypeOf;
var Zc = Object.toString();
var Ib = void 0;
var _b = false;
var _c = (0, function() {
  return this;
});
var Ya = function() {
};
var h = [];
Object.freeze(h);
var $b = h;
h = {}, Object.freeze(h);
var ac = h;
var X = Symbol("mobx administration");
var Jb = function(a, b) {
  return true === fb(a, b);
};
var gb;
var bc;
var cc;
var dc;
var ec;
var nb = true;
var fc = false;
var Aa = [];
Aa.push("mobxGuid"), Aa.push("spyListeners"), Aa.push("enforceActions"), Aa.push("computedRequiresReaction"), Aa.push("reactionRequiresObservable"), Aa.push("observableRequiresReaction"), Aa.push("allowStateReads"), Aa.push("disableErrorBoundaries"), Aa.push("runId"), Aa.push("UNCHANGED");
var W = (() => {
  var a;
  globalThis.__mobxInstanceCount && (globalThis.__mobxInstanceCount | 0) > 0 && !globalThis.__mobxGlobals && (nb = false), a = globalThis.__mobxGlobals, a && 7 != (a.version | 0) && (nb = false);
  if (!nb) return setTimeout(function() {
    fc || ca(35);
  }, 1), Ab();
  else if (a) {
    var b = (globalThis.__mobxInstanceCount | 0) + 1 | 0;
    globalThis.__mobxInstanceCount = b, a.UNCHANGED || (a.UNCHANGED = {});
    return a;
  }
  globalThis.__mobxInstanceCount = 1;
  a = Ab(), globalThis.__mobxGlobals = a;
  return a;
})();
var $c = function() {
  var a = W.pendingReactions;
  (0 != a.length || 0 != (W.inBatch | 0) || W.isRunningReactions) && ca(36), fc = true;
  if (nb) a = globalThis, 0 == --a.__mobxInstanceCount && (a.__mobxGlobals = void 0), W = Ab();
};
var i = function() {
  return W;
};
var j = function() {
  for (var a, c = Ab(), e2 = Z.keys(c), t2 = e2.length, b = 0; b < t2; b++) a = e2[b], +Aa.indexOf(a) == -1 && (W[a] = c[a]);
  W.allowStateChanges = !W.enforceActions;
};
var k = function(a) {
  console.warn("[mobx.spy] Is a no-op in production builds");
  return function() {
  };
};
var ad = function(a) {
  a.dependenciesState_ || a.onBecomeStale_(), a.dependenciesState_ = 2;
};
var bd = function(a) {
  a.dependenciesState_ || (a.dependenciesState_ = 1, a.onBecomeStale_());
};
var ob = void 0;
var cd = function(a) {
  var b = a.dependenciesState_;
  1 === b ? a.dependenciesState_ = 2 : b || (ob.lowestObserverState_ = 0);
};
var Kb = (a) => a();
var dd = () => {
  W.isRunningReactions = true;
  var a, e2, c, t2, b = W.pendingReactions, d2 = 0;
  while (b.length > 0) {
    d2++, 100 == d2 && (a = "[mobx] cycle in reaction: " + b[0], console.error(a), b.splice(0, b.length)), c = b.splice(0, b.length), t2 = c.length, a = 0;
    for (; a < t2; a++) e2 = c[a], e2.runReaction_();
  }
  W.isRunningReactions = false;
};
var l = function(a) {
  var b = Ja();
  try {
    return a();
  } finally {
    xa(b);
  }
};
var gc = function(a, b) {
  var c = !!a;
  a = !!W.allowStateChanges, W.allowStateChanges = c;
  try {
    return b();
  } finally {
    W.allowStateChanges = a;
  }
};
var hb = class {
  constructor(a) {
    this.cause = a;
  }
};
la(hb, "name", { value: "CaughtException", configurable: true });
hb.prototype.isMobXCaughtException = true;
var qa = class {
  constructor(a = "Atom") {
    a = a + "", this.name_ = a, this.observers_ = /* @__PURE__ */ new Set(), this.lastAccessedBy_ = 0, this.lowestObserverState_ = -1, this.flags_ = 0;
  }
  onBO() {
    Fc(this);
  }
  onBUO() {
    Gc(this);
  }
  reportObserved() {
    return ka(this);
  }
  reportChanged() {
    wa(this);
  }
  toString() {
    return this.name_;
  }
  get isBeingObserved() {
    return 0 != (this.flags_ & 1);
  }
  set isBeingObserved(a) {
    a ? this.flags_ |= 1 : this.flags_ &= ~1;
  }
  get isPendingUnobservation() {
    return 0 != (this.flags_ & 2);
  }
  set isPendingUnobservation(a) {
    a ? this.flags_ |= 2 : this.flags_ &= ~2;
  }
  get diffValue() {
    return 0 != (this.flags_ & 4) ? 1 : 0;
  }
  set diffValue(a) {
    1 == (a | 0) ? this.flags_ |= 4 : this.flags_ &= ~4;
  }
};
Qa("Atom", qa);
h = qa.prototype;
var Lb = function(a, b = Ya, c = Ya) {
  var e2 = a !== void 0 ? new qa(a) : new qa();
  b === Ya || (e2.onBOL = /* @__PURE__ */ new Set(), a = e2.onBOL, a.add(b)), c === Ya || (e2.onBUOL = /* @__PURE__ */ new Set(), a = e2.onBUOL, a.add(c));
  return e2;
};
var pb = 0;
var Mb = 1;
var hc = { value: "action", configurable: true, writable: false, enumerable: false };
var d = Object.getOwnPropertyDescriptor(function() {
}, "name");
h = d != null && d.configurable;
var ed = h;
var ma = class {
  constructor(a = "Reaction", b, c, e2) {
    var t2 = a + "";
    this.name_ = t2, this.onInvalidate_ = void 0, b !== void 0 && (this.onInvalidate_ = b), c && (this.errorHandler_ = c), e2 !== void 0 && (this.requiresObservable_ = e2), this.observing_ = [], this.newObserving_ = null, this.dependenciesState_ = -1, this.runId_ = 0, this.unboundDepsCount_ = 0, this.flags_ = 0;
  }
  onBecomeStale_() {
    this.schedule_();
  }
  schedule_() {
    if (!this.isScheduled) this.isScheduled = true, W.pendingReactions.push(this), Ec();
  }
  runReaction_() {
    if (!this.isDisposed) {
      $(), this.isScheduled = false;
      var a = W.trackingContext;
      W.trackingContext = this;
      if (Wb(this)) {
        this.isTrackPending = true;
        try {
          this.onInvalidate_();
          if (false) {
          }
        } catch (a2) {
          this.reportExceptionInDerivation_(a2);
        }
      }
      W.trackingContext = a;
      aa();
    }
  }
  track(a) {
    if (!this.isDisposed) {
      $(), this.isRunning = true;
      var b = W.trackingContext;
      W.trackingContext = this, a = Hc(this, a, void 0), W.trackingContext = b, this.isRunning = false, this.isTrackPending = false, !this.isDisposed || Xb(this), Bb(a) && this.reportExceptionInDerivation_(a.cause), aa();
    }
  }
  reportExceptionInDerivation_(a) {
    if (this.errorHandler_) {
      this.errorHandler_(a, this);
      return;
    }
    !W.disableErrorBoundaries || xb(a);
    var b = "[mobx] uncaught error in '" + this + "'";
    W.suppressReactionErrors || console.error(b, a);
    var c = W.globalReactionErrorHandlers, e2 = c.length;
    for (b = 0; b < e2; b++) c[b](a, this);
  }
  dispose() {
    this.isDisposed || (this.isDisposed = true, this.isRunning || ($(), Xb(this), aa()));
  }
  getDisposer_(a) {
    var c = this, b = () => {
      var e2 = c.dispose;
      c.dispose(), a != null && "function" == typeof a.removeEventListener && a.removeEventListener("abort", b);
    };
    a != null && "function" == typeof a.addEventListener && a.addEventListener("abort", b), b[X] = c, true === "dispose" in Symbol && "symbol" == typeof Symbol.dispose && (b[Symbol.dispose] = b);
    return b;
  }
  toString() {
    return "Reaction[" + this.name_ + "]";
  }
  get isDisposed() {
    return 0 != (this.flags_ & 1);
  }
  set isDisposed(a) {
    a ? this.flags_ |= 1 : this.flags_ &= ~1;
  }
  get isScheduled() {
    return 0 != (this.flags_ & 2);
  }
  set isScheduled(a) {
    a ? this.flags_ |= 2 : this.flags_ &= ~2;
  }
  get isTrackPending() {
    return 0 != (this.flags_ & 4);
  }
  set isTrackPending(a) {
    a ? this.flags_ |= 4 : this.flags_ &= ~4;
  }
  get isRunning() {
    return 0 != (this.flags_ & 8);
  }
  set isRunning(a) {
    a ? this.flags_ |= 8 : this.flags_ &= ~8;
  }
  get diffValue() {
    return 0 != (this.flags_ & 16) ? 1 : 0;
  }
  set diffValue(a) {
    1 == (a | 0) ? this.flags_ |= 16 : this.flags_ &= ~16;
  }
};
Qa("Reaction", ma);
f = function(a) {
  W.globalReactionErrorHandlers.push(a);
  return function() {
    var c = W.globalReactionErrorHandlers, b = +c.indexOf(a);
    b >= 0 && W.globalReactionErrorHandlers.splice(b, 1);
  };
};
var ha = class {
  constructor(a) {
    a.get || ca(31), this.derivation = a.get;
    var b = a.name ? a.name + "" : "ComputedValue";
    this.name_ = b, a.set ? this.setter_ = Ka("ComputedValue-setter", a.set, false, void 0) : this.setter_ = void 0, this.equals_ = Jb, !a.equals || (this.equals_ = a.equals), this.scope_ = a.context, this.requiresReaction_ = a.requiresReaction, this.keepAlive_ = !!a.keepAlive, this.dependenciesState_ = -1, this.observing_ = [], b = null, this.newObserving_ = b, this.observers_ = /* @__PURE__ */ new Set(), this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = 0, this.unboundDepsCount_ = 0, this.value_ = new hb(b), this.flags_ = 0;
  }
  onBecomeStale_() {
    ((a) => {
      if (!a.lowestObserverState_) a.lowestObserverState_ = 1, a.observers_.forEach(bd);
    })(this);
  }
  onBO() {
    Fc(this);
  }
  onBUO() {
    Gc(this);
  }
  computeValue_(a) {
    this.isComputing = true;
    var b, c = false;
    if (a) a = this.derivation, b = Hc(this, a, this.scope_);
    else {
      a = W.disableErrorBoundaries;
      if (true === a) b = this.derivation.call(this.scope_);
      else try {
        b = this.derivation.call(this.scope_);
      } catch (a2) {
        b = new hb(a2);
      }
    }
    this.isComputing = false;
    return b;
  }
  trackAndCompute() {
    var c = this.value_, a = (this.dependenciesState_ | 0) == -1, b = this.computeValue_(true);
    a = a || Bb(c) || Bb(b) || true !== this.equals_(c, b), a && (this.value_ = b);
    return a;
  }
  get() {
    if (this.isComputing) {
      var b = this.name_, c = this.derivation, a = [];
      a.push(b), a.push(c), Ua(32, a);
    }
    !W.inBatch ? (b = this.observers_, a = !b.size) : a = false;
    if (a && !this.keepAlive_) Wb(this) && ($(), this.value_ = this.computeValue_(false), aa());
    else ka(this), Wb(this) && (a = W.trackingContext, this.keepAlive_ && !a && (W.trackingContext = this), !this.trackAndCompute() || ((a2) => {
      var b2 = a2.lowestObserverState_;
      if (2 !== b2) a2.lowestObserverState_ = 2, b2 = ob, ob = a2, a2.observers_.forEach(cd), ob = b2;
    })(this), W.trackingContext = a);
    a = this.value_, Bb(a) && xb(a.cause);
    return a;
  }
  get isComputing() {
    return 0 != (this.flags_ & 1);
  }
  set isComputing(a) {
    a ? this.flags_ |= 1 : this.flags_ &= ~1;
  }
  get isRunningSetter() {
    return 0 != (this.flags_ & 2);
  }
  set isRunningSetter(a) {
    a ? this.flags_ |= 2 : this.flags_ &= ~2;
  }
  get isBeingObserved() {
    return 0 != (this.flags_ & 4);
  }
  set isBeingObserved(a) {
    a ? this.flags_ |= 4 : this.flags_ &= ~4;
  }
  get isPendingUnobservation() {
    return 0 != (this.flags_ & 8);
  }
  set isPendingUnobservation(a) {
    a ? this.flags_ |= 8 : this.flags_ &= ~8;
  }
  get diffValue() {
    return 0 != (this.flags_ & 16) ? 1 : 0;
  }
  set diffValue(a) {
    1 == (a | 0) ? this.flags_ |= 16 : this.flags_ &= ~16;
  }
  suspend_() {
    this.keepAlive_ || (Xb(this), this.value_ = void 0);
  }
  warnAboutUntrackedRead_() {
  }
  toString() {
    let a = this.name_ + "[", b = this.derivation;
    return a + b.toString() + "]";
  }
  valueOf() {
    return zc(this.get());
  }
  [Symbol.toPrimitive]() {
    return this.valueOf();
  }
  set(a) {
    if (this.setter_) {
      !this.isRunningSetter || ua(33, this.name_), this.isRunningSetter = true;
      try {
        this.setter_.call(this.scope_, a);
      } finally {
        this.isRunningSetter = false;
      }
    } else ua(34, this.name_);
  }
};
d = Symbol.toPrimitive, Qa("ComputedValue", ha), g = function(a, b) {
  $();
  try {
    return a.apply(b);
  } finally {
    aa();
  }
};
var m = function(a) {
  return Cb(a);
};
var n = function(a, b) {
  if (!ga(a)) return false;
  var c = a[X], e2 = c.values_;
  if (e2.has(b)) return true;
  c.lazyComputedKeys_ ? (a = c.lazyComputedKeys_, a = !!a.has(b)) : a = false;
  if (a) return true;
  c.lazyObservableKeys_ ? (a = c.lazyObservableKeys_, a = !!a.has(b)) : a = false;
  return a ? true : false;
};
var Y = void 0;
var qb = void 0;
var Za = void 0;
var _a;
var rb = void 0;
var Nb = void 0;
var Sa = void 0;
var Ob = void 0;
var ic;
var sb;
var ib = function(a) {
  return a;
};
var Ta = function(a, b, c) {
  return Cb(a) ? a : Array.isArray(a) ? c ? Y.array.call(Y, a, { name: c }) : Y.array.call(Y, a) : Ia(a) ? c ? Y.object.call(Y, a, void 0, { name: c }) : Y.object.call(Y, a) : ab(a) ? c ? Y.map.call(Y, a, { name: c }) : Y.map.call(Y, a) : bb(a) ? c ? Y.set.call(Y, a, { name: c }) : Y.set.call(Y, a) : "function" == typeof a && !Va(a) && !cb(a) ? yc(a) ? Sa(a) : rb(c, a) : a;
};
e = function(a, b, c) {
  return a == null ? a : ga(a) || oa(a) || da(a) || fa(a) ? a : Array.isArray(a) ? Y.array.call(Y, a, { name: c, deep: false }) : Ia(a) ? Y.object.call(Y, a, void 0, { name: c, deep: false }) : ab(a) ? Y.map.call(Y, a, { name: c, deep: false }) : bb(a) ? Y.set.call(Y, a, { name: c, deep: false }) : a;
};
var o = function(a, b) {
  return db(a, b, -1, void 0, void 0) ? b : a;
};
var jc = { deep: true, name: void 0, defaultDecorator: void 0 };
Object.freeze(jc);
var ba = class extends qa {
  constructor(a, b, c = "ObservableValue", e2, t2) {
    var d2 = c + "";
    e2;
    var r2 = Jb;
    t2 && (r2 = t2), super(d2), this.enhancer_ = b, this.name_ = d2, this.equals_ = r2, this.hasUnreportedChange_ = false, this.value_ = b(a, void 0, d2);
  }
  prepareNewValue_(a) {
    if (ya(this)) {
      var b = za(this, { object: this, type: "update", newValue: a });
      if (!b) return W.UNCHANGED;
      a = b.newValue;
    }
    a = this.enhancer_(a, this.value_, this.name_);
    return true === this.equals_(this.value_, a) ? W.UNCHANGED : a;
  }
  setNewValue_(a) {
    var b = this.value_;
    this.value_ = a, wa(this), Ba(this) && Ca(this, { type: "update", object: this, newValue: a, oldValue: b });
  }
  set(a) {
    a = this.prepareNewValue_(a), a === W.UNCHANGED || this.setNewValue_(a);
  }
  get() {
    ka(this);
    return this.dehancer === void 0 ? this.value_ : this.dehancer(this.value_);
  }
  raw() {
    return this.value_;
  }
  toJSON() {
    return this.get();
  }
  toString() {
    let a = this.name_ + "[";
    return a + this.value_ + "]";
  }
  valueOf() {
    return zc(this.get());
  }
  [Symbol.toPrimitive]() {
    return this.valueOf();
  }
};
h = ba.prototype;
d = Symbol.toPrimitive, gb = Qa("ObservableValue", ba), d = {}, d.annotationType_ = "override", d.make_ = function(a, b) {
  return 0;
}, d.extend_ = function() {
  ua(44, this.annotationType_);
  return false;
};
var kc = (0, function(a, b, c, e2) {
  if (c.get) return Za.make_.call(Za, a, b, c, e2);
  if (c.set) {
    var r2 = c.set;
    Va(r2) || (r2 = Ka(ta(b), r2, false, void 0));
    if (e2 === a.target_) return a.defineProperty_(b, { configurable: true, set: r2 }) == null ? 0 : 2;
    la(e2, b, { configurable: true, set: r2 });
    return 2;
  }
  if (e2 !== a.target_ && "function" == typeof c.value) {
    if (yc(c.value)) {
      var d2 = Sa;
      if (this.options_) var i2 = this.options_, t2 = !!i2.autoBind;
      else {
        t2 = false;
      }
      t2 && (d2 = Ob);
      return d2.make_(a, b, c, e2);
    }
    d2 = rb;
    this.options_ ? (i2 = this.options_, t2 = !!i2.autoBind) : t2 = false, t2 && (d2 = Nb);
    return d2.make_(a, b, c, e2);
  }
  d2 = Y;
  this.options_ ? (i2 = this.options_, t2 = i2.deep, t2 = false === t2) : t2 = false, t2 && (d2 = qb), "function" == typeof c.value && this.options_ && this.options_.autoBind && (r2 = c.value.bind(pa(a)), c.value = r2);
  return d2.make_(a, b, c, e2);
});
var lc = (0, function(a, b, c, e2) {
  if (c.get) return Za.extend_.call(Za, a, b, c, e2);
  if (c.set) {
    var d2 = a.defineProperty_;
    return a.defineProperty_(b, { configurable: true, set: Ka(ta(b), c.set, false, void 0) }, e2);
  }
  var t2;
  "function" == typeof c.value && this.options_ && this.options_.autoBind && (d2 = c.value.bind(pa(a)), c.value = d2);
  var r2 = Y;
  this.options_ ? (d2 = this.options_, t2 = d2.deep, t2 = false === t2) : t2 = false, t2 && (r2 = qb);
  return r2.extend_(a, b, c, e2);
});
h = {}, h.annotationType_ = "true", h.options_ = void 0, h.make_ = kc, h.extend_ = lc, ic = h;
var mc = /* @__PURE__ */ Object.create(null);
var ia = class {
  constructor(a, b, c, e2) {
    this.target_ = a, b ? this.values_ = b : this.values_ = /* @__PURE__ */ new Map(), this.name_ = c + "", this.defaultAnnotation_ = ic, e2 && (this.defaultAnnotation_ = e2), this.keysAtom_ = new qa("ObservableObject.keys"), this.isPlainObject_ = Ia(this.target_);
  }
  materializeLazyComputed_(a) {
    if (!!this.lazyComputedKeys_) {
      var b = this.lazyComputedKeys_;
      if (b = b.get(a)) {
        var c = this.lazyComputedKeys_;
        c.delete(a), c = this.lazyComputedKeys_, 0 == c.size && (this.lazyComputedKeys_ = void 0), b = b(), c = this.values_, c.set(a, b);
        return b;
      }
    }
  }
  materializeLazyObservable_(a) {
    if (!!this.lazyObservableKeys_) {
      var b = this.lazyObservableKeys_;
      if (b = b.get(a)) {
        var c = this.lazyObservableKeys_;
        c.delete(a), c = this.lazyObservableKeys_, 0 == c.size && (this.lazyObservableKeys_ = void 0), b = b(), c = this.values_, c.set(a, b);
        return b;
      }
    }
  }
  getObservablePropValue_(a) {
    var b = this.values_;
    b = b.get(a), b || (b = this.materializeLazyComputed_(a), b = b || this.materializeLazyObservable_(a));
    return b.get();
  }
  setObservablePropValue_(a, b) {
    var c = this.values_;
    c = c.get(a), c = c || this.materializeLazyComputed_(a), c = c || this.materializeLazyObservable_(a);
    if (va(c)) return c.set(b), true;
    if (ya(this)) {
      var t2 = za(this, { type: "update", object: pa(this), name: a, newValue: b });
      if (!t2) return null;
      b = t2.newValue;
    }
    b = c.prepareNewValue_(b);
    if (b !== W.UNCHANGED) {
      var d2 = Ba(this);
      t2 = null;
      if (d2 || false) t2 = this.name_, e = c.value_, t2 = { type: "update", observableKind: "object", debugObjectName: t2, object: pa(this), oldValue: e, name: a, newValue: b };
      c.setNewValue_(b), d2 && Ca(this, t2);
    }
    return true;
  }
  get_(a) {
    if (W.trackingDerivation) {
      var b = this.target_;
      b = !La.call(b, a);
    } else {
      b = false;
    }
    b && this.has_(a);
    return this.target_[a];
  }
  set_(a, b) {
    return Nc(this, a, b, false);
  }
  has_(a) {
    if (!W.trackingDerivation) return true === a in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var b = this.pendingKeys_;
    b = b.get(a);
    if (!b) b = ba, b = new b(true === a in this.target_, ib, "ObservableObject.key?", false), this.pendingKeys_.set(a, b);
    return b.get();
  }
};
h = ia.prototype;
var Vi = function(a, b, c, e2) {
  var t2 = c;
  true === t2 && (t2 = this.defaultAnnotation_);
  if (false === t2) return this.defineProperty_(a, b, e2);
  var d2 = t2.extend_(this, a, b, e2);
  if (d2) {
  }
  return d2;
};
h.extend_ = Vi, h = ia.prototype, h.notifyPropertyAddition_ = function(a, b) {
  var c = Ba(this);
  (c || false) && (b = { type: "add", observableKind: "object", debugObjectName: this.name_, object: pa(this), name: a, newValue: b }, c && Ca(this, b)), !this.pendingKeys_ || (b = this.pendingKeys_, a = b.get(a), !a || a.set(true)), wa(this.keysAtom_);
}, h = ia.prototype, h.defineProperty_ = function(a, b, c) {
  c = !!c;
  try {
    $();
    var d2 = this.delete_(a);
    if (!d2) return d2;
    if (ya(this)) {
      var e2 = pa(this), t2 = za(this, { object: e2, name: a, type: "add", newValue: b.value });
      if (!t2) return null;
      e2 = b.value, e2 === t2.newValue || (e2 = b = sa({}, b), b.value = t2.newValue);
    }
    if (c && (c = this.target_, true !== Reflect.defineProperty(c, a, b))) return false;
    else {
      la(this.target_, a, b);
    }
    this.notifyPropertyAddition_(a, b.value);
  } finally {
    aa();
  }
  return true;
}, h = ia.prototype, h.defineObservableProperty_ = function(a, b, c, e2) {
  var t2 = b;
  try {
    $();
    var r2 = this.delete_(a);
    if (!r2) return r2;
    if (ya(this)) {
      var i2 = za(this, { object: pa(this), name: a, type: "add", newValue: t2 });
      if (!i2) return null;
      t2 = i2.newValue;
    }
    var f2 = Mc(a), n2 = true;
    !W.safeDescriptors || (n2 = !!this.isPlainObject_);
    var d2 = n2, g2 = f2.get, s2 = { configurable: d2, enumerable: true, get: g2, set: f2.set };
    if (e2 && (d2 = this.target_, true !== Reflect.defineProperty(d2, a, s2))) return false;
    else {
      la(this.target_, a, s2);
    }
    d2 = new ba(t2, c, Ye, false);
    this.values_.set(a, d2), this.notifyPropertyAddition_(a, d2.value_);
  } finally {
    aa();
  }
  return true;
}, h = ia.prototype, h.defineComputedProperty_ = function(a, b, c) {
  c = !!c;
  try {
    $();
    var e2 = this.delete_(a);
    if (!e2) return e2;
    if (ya(this)) {
      var i2 = za(this, { object: pa(this), name: a, type: "add", newValue: void 0 });
      if (!i2) return null;
    }
    b.name || (b.name = Ye);
    b.context = pa(this);
    var t2 = Mc(a), d2 = true;
    !W.safeDescriptors || (d2 = !!this.isPlainObject_);
    var f2 = t2.get, r2 = { configurable: d2, enumerable: false, get: f2, set: t2.set };
    if (c && (c = this.target_, true !== Reflect.defineProperty(c, a, r2))) return false;
    else {
      la(this.target_, a, r2);
    }
    this.values_.set(a, new ha(b));
    this.notifyPropertyAddition_(a, void 0);
  } finally {
    aa();
  }
  return true;
}, h = ia.prototype, h.delete_ = function(a, b) {
  var c = !!b;
  b = this.target_;
  if (!La.call(b, a)) return true;
  if (ya(this) && !za(this, { object: pa(this), name: a, type: "remove" })) return null;
  try {
    $();
    var t2 = Ba(this);
    b = false;
    var d2, i2 = b, n2 = this.values_, e2 = n2.get(a);
    if (!e2 && (t2 || i2)) {
      b = this.target_;
      var f2 = Z.getOwnPropertyDescriptor(b, a);
      f2 && (d2 = f2.value);
    }
    if (c && (b = this.target_, true !== Reflect.deleteProperty(b, a))) return false;
    else {
      b = this.target_, true === Reflect.deleteProperty(b, a) || ((a2) => {
        throw new TypeError(a2);
      })("Cannot delete property '" + ta(a) + "'");
    }
    b = false;
    b && delete this.appliedAnnotations_[a], e2 && (b = this.values_, b.delete(a), !gb(e2) || (d2 = e2.value_), Dc(e2)), wa(this.keysAtom_), this.pendingKeys_ && (b = this.pendingKeys_, f2 = b.get(a), f2 && (b = f2.set, c = f2, b.call(c, true === a in this.target_)));
    if (t2 || i2) {
      c = this.name_;
      var s2 = { type: "remove", observableKind: "object", object: pa(this), debugObjectName: c, oldValue: d2, name: a };
      if (a = false) {
      }
      t2 && Ca(this, s2);
      if (false) {
      }
    }
  } finally {
    aa();
  }
  return true;
}, h = ia.prototype, h.ownKeys_ = function() {
  ka(this.keysAtom_);
  let a = this.target_;
  return Reflect.ownKeys(a);
}, h = ia.prototype, h.keys_ = function() {
  ka(this.keysAtom_);
  let a = this.target_;
  return Z.keys(a);
}, ec = Qa("ObservableObjectAdministration", ia);
var $a = function(a, b) {
  if (La.call(a, X)) return a;
  var c;
  c = b && b.name ? b.name + "" : "ObservableObject", c = new ia(a, /* @__PURE__ */ new Map(), c, ((a2) => {
    if (a2) {
      if (a2.defaultDecorator !== void 0) return a2.defaultDecorator;
      if (a2.autoBind || false === a2.deep) {
        var b2 = {};
        b2.annotationType_ = "true", b2.options_ = a2, b2.make_ = kc, b2.extend_ = lc;
        return b2;
      }
    }
  })(b)), la(a, X, { enumerable: false, writable: true, configurable: true, value: c });
  return a;
};
var Ma = {};
Ma.has = function(a, b) {
  let c = a[X];
  return c.has_.call(a[X], b);
}, Ma.get = function(a, b) {
  let c = a[X];
  return c.get_.call(a[X], b);
}, Ma.set = function(a, b, c) {
  if (!Tb(b)) return false;
  var e2 = Nc(a[X], b, c, true);
  return e2 == null ? true : !!e2;
}, Ma.deleteProperty = function(a, b) {
  if (!Tb(b)) return false;
  var e2 = a[X], c = e2.delete_.call(a[X], b, true);
  return c == null ? true : !!c;
}, Ma.defineProperty = function(a, b, c) {
  var t2 = a[X], e2 = t2.defineProperty_.call(a[X], b, c);
  return e2 == null ? true : !!e2;
}, Ma.ownKeys = function(a) {
  let b = a[X];
  return b.ownKeys_.call(a[X]);
}, Ma.preventExtensions = function(a) {
  ca(13);
  return false;
};
var ja = {};
var tb = {};
tb.get = function(a, b) {
  var c = a[X];
  return b === X ? c : "length" === b ? c.getArrayLength_() : "string" == typeof b && true !== isNaN(b) ? c.get_(parseInt(b)) : La.call(ja, b) ? ja[b] : a[b];
}, tb.set = function(a, b, c) {
  var e2 = a[X];
  "length" === b && e2.setArrayLength_(c);
  "symbol" == typeof b || true === isNaN(b) ? a[b] = c : e2.set_(parseInt(b), c);
  return true;
}, tb.preventExtensions = function() {
  ca(15);
  return false;
};
var Ga = class {
  constructor(a = "ObservableArray", b, c) {
    var e2 = a + "";
    this.owned_ = false, c !== void 0 && (this.owned_ = !!c), this.atom_ = new qa(e2), this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0;
    var t2 = "ObservableArray[..]";
    this.enhancer_ = function(a2, c2, e3) {
      return b(a2, c2, t2);
    };
  }
  dehanceValue_(a) {
    return this.dehancer !== void 0 ? this.dehancer(a) : a;
  }
  dehanceValues_(a) {
    return this.dehancer !== void 0 && a.length > 0 ? a.map(this.dehancer) : a;
  }
  getArrayLength_() {
    ka(this.atom_);
    let a = this.values_;
    return a.length;
  }
  setArrayLength_(a) {
    ("number" != typeof a || true === Number.isNaN(a) || (a | 0) < 0) && ua(40, a), a = a | 0;
    var c = this.values_, b = c.length;
    if (a != b) a > b ? (a = new Array(a - b | 0), this.spliceWithArray_(b, 0, a)) : this.spliceWithArray_(a, b - a | 0);
  }
  spliceWithArray_(a = 0, b, c) {
    var e2 = this.values_, t2 = e2.length, d2 = a | 0;
    e2 = 1 == arguments.length ? t2 - d2 | 0 : b !== void 0 && b != null ? b | 0 : 0, t2 = void 0, t2 = c;
    return Fb(this, d2, e2, c);
  }
  get_(a) {
    ka(this.atom_);
    let b = this.dehanceValue_;
    return this.dehanceValue_(this.values_[a]);
  }
  set_(a, b) {
    a |= 0;
    var c = this.values_;
    if (a < c.length) {
      var t2 = c[a];
      if (ya(this)) {
        var e2 = this.proxy_;
        e2 = za(this, { type: "update", object: e2, index: a, newValue: b });
        if (!e2) return;
        b = e2.newValue;
      }
      b = this.enhancer_(b, t2);
      b === t2 || (c[a] = b, ((a2, b2, c2, e3) => {
        var d3, r2, i2 = Ba(a2), t3 = null;
        i2 && (t3 = a2.proxy_, d3 = a2.atom_, r2 = d3.name_, t3 = { observableKind: "array", object: t3, type: "update", debugObjectName: r2, index: b2, newValue: c2, oldValue: e3 }), wa(a2.atom_), i2 && Ca(a2, t3);
      })(this, a, b, t2));
    } else {
      a++, a = new Array(a - c.length);
      var d2 = a.length - 1 | 0;
      a[d2] = b, Fb(this, c.length, 0, a);
    }
  }
};
var fd = function(a, b, c, e2) {
  var t2 = "ObservableArray";
  c !== void 0 && (t2 = c + "");
  var d2 = false;
  d2 = !!e2;
  return Wa(function() {
    var c2 = new Ga(t2, b, d2), e3 = c2.values_;
    la(e3, X, { enumerable: false, writable: false, configurable: true, value: c2 }), e3 = c2.values_, e3 = new Proxy(e3, tb), c2.proxy_ = e3;
    var r2;
    a && a.length > 0 && (r2 = c2.spliceWithArray_, c2.spliceWithArray_(0, 0, a));
    return e3;
  });
};
dc = Qa("ObservableArrayAdministration", Ga), ja.clear = function() {
  return this.splice(0);
}, ja.replace = function(a) {
  let b = this[X], e2 = b.spliceWithArray_, c = b.values_;
  return b.spliceWithArray_(0, c.length, a);
}, ja.toJSON = function() {
  return this.slice();
}, ja.splice = function(a, b) {
  var c = this[X];
  if (0 == arguments.length) return [];
  if (1 == arguments.length) return c.spliceWithArray_(a);
  if (2 == arguments.length) return c.spliceWithArray_(a, b);
  var e2 = Ra.call(arguments, 2, arguments.length);
  return c.spliceWithArray_(a, b, e2);
}, ja.spliceWithArray = function() {
  let a = this[X];
  return a.spliceWithArray_.apply(this[X], arguments);
}, ja.push = function() {
  let a = this[X], b = a.values_;
  Fb(a, b.length, 0, arguments);
  return a.values_.length;
}, ja.pop = function() {
  var b = this[X], c = b.values_, a = c.length - 1 | 0;
  a < 0 && (a = 0);
  return this.splice(a, 1)[0];
}, ja.shift = function() {
  return this.splice(0, 1)[0];
}, ja.unshift = function() {
  let a = this[X];
  Fb(a, 0, 0, arguments);
  return a.values_.length;
}, ja.reverse = function() {
  return !W.trackingDerivation || ua(37, "reverse"), this.replace(this.slice().reverse()), this;
}, ja.sort = function() {
  !W.trackingDerivation || ua(37, "sort");
  var a = this.slice();
  a.sort.apply(a, arguments), this.replace(a);
  return this;
}, ja.remove = function(a) {
  var b = this[X];
  a = +b.dehanceValues_(b.values_).indexOf(a);
  return a > -1 ? (this.splice(a, 1), true) : false;
}, ra("at"), ra("concat"), ra("flat"), ra("includes"), ra("indexOf"), ra("join"), ra("lastIndexOf"), ra("slice"), ra("toString"), ra("toLocaleString"), ra("toSorted"), ra("toSpliced"), ra("with"), Da("every"), Da("filter"), Da("find"), Da("findIndex"), Da("findLast"), Da("findLastIndex"), Da("flatMap"), Da("forEach"), Da("map"), Da("some"), Da("toReversed"), Oc("reduce"), Oc("reduceRight");
var gd = {};
var _ = class {
  constructor(a, b, c = "ObservableMap") {
    var e2 = this;
    e2[X] = gd, e2.enhancer_ = Ta, b && (e2.enhancer_ = b), b = c + "", e2.name_ = b, e2.interceptors_ = void 0, e2.changeListeners_ = void 0, e2.dehancer = void 0, Wa(function() {
      e2.keysAtom_ = Lb("ObservableMap.keys()"), e2.data_ = /* @__PURE__ */ new Map(), e2.hasMap_ = /* @__PURE__ */ new Map(), !a || e2.merge(a);
    });
  }
  has_(a) {
    let b = this.data_;
    return !!b.has(a);
  }
  has(a) {
    var c = this;
    if (!W.trackingDerivation) return c.has_(a);
    var b = c.hasMap_;
    b = b.get(a);
    if (!b) b = ba, b = new b(c.has_(a), ib, "ObservableMap.key?", false), c.hasMap_.set(a, b), b.onBUOL = /* @__PURE__ */ new Set(), b.onBUOL.add(function() {
      c.hasMap_.delete(a);
    });
    return b.get();
  }
  set(a, b) {
    var c = this.data_, e2 = !!c.has(a);
    if (ya(this)) {
      c = e2 ? "update" : "add", c = za(this, { type: c, object: this, newValue: b, name: a });
      if (!c) return this;
      b = c.newValue;
    }
    e2 ? this.updateValue_(a, b) : this.addValue_(a, b);
    return this;
  }
  updateValue_(a, b) {
    var c = this.data_;
    c = c.get(a), b = c.prepareNewValue_(b);
    if (b !== W.UNCHANGED) {
      var t2, d2 = Ba(this), e2 = null;
      d2 && (e2 = this.name_, t2 = c.value_, e2 = { observableKind: "map", debugObjectName: e2, type: "update", object: this, oldValue: t2, name: a, newValue: b }), c.setNewValue_(b), d2 && Ca(this, e2);
    }
  }
  addValue_(a, b) {
    $();
    try {
      var i2 = "ObservableMap.key", t2 = new ba(b, this.enhancer_, i2, false);
      this.data_.set(a, t2), b = t2.value_;
      var c = this.hasMap_, e2 = c.get(a);
      !e2 || e2.setNewValue_.call(e2, true), wa(this.keysAtom_);
    } finally {
      aa();
    }
    c = false;
    var d2 = Ba(this), r2 = null;
    d2 && (c = true), c && (c = this.name_, r2 = { observableKind: "map", debugObjectName: c, type: "add", object: this, name: a, newValue: b }), d2 && Ca(this, r2);
  }
  delete(a) {
    if (ya(this) && !za(this, { type: "delete", object: this, name: a })) return false;
    var b = this.data_;
    if (b.has(a)) {
      b = false;
      var t2 = Ba(this), c = null;
      t2 && (b = true);
      if (b) b = this.name_, c = this.data_.get(a).value_, c = { observableKind: "map", debugObjectName: b, type: "delete", object: this, oldValue: c, name: a };
      $();
      try {
        wa(this.keysAtom_), b = this.hasMap_;
        var e2 = b.get(a);
        !e2 || e2.setNewValue_.call(e2, false), b = this.data_;
        var d2 = b.get(a);
        d2.setNewValue_.call(d2, void 0), b = this.data_, b.delete(a);
      } finally {
        aa();
      }
      t2 && Ca(this, c);
      return true;
    }
    return false;
  }
  get(a) {
    return this.has(a) ? (a = this.data_.get(a), Gb(this, a.get())) : Gb(this, void 0);
  }
  getOrInsert(a, b) {
    this.has(a) || this.set(a, b);
    return this.get(a);
  }
  getOrInsertComputed(a, b) {
    this.has(a) || this.set(a, b(a));
    return this.get(a);
  }
  keys() {
    ka(this.keysAtom_);
    let a = this.data_;
    return a.keys();
  }
  values() {
    var b = this;
    let c = b.keys(), a = {};
    a.next = function() {
      var a2 = c.next();
      return a2.done ? { done: true, value: void 0 } : { done: false, value: b.get(a2.value) };
    }, a[Symbol.toStringTag] = "MapIterator";
    return yb(a);
  }
  entries() {
    var b = this;
    let c = b.keys(), a = {};
    a.next = function() {
      var a2 = c.next();
      if (a2.done) return { done: true, value: void 0 };
      var e2 = [], t2 = a2.value;
      e2.push(t2), e2.push(b.get(a2.value));
      return { done: false, value: e2 };
    }, a[Symbol.toStringTag] = "MapIterator";
    return yb(a);
  }
  forEach(a, b) {
    var e2 = this.entries(), c = e2.next();
    while (!c.done) {
      var t2 = c.value[1];
      a.call(b, t2, c.value[0], this), c = t2 = e2.next();
    }
  }
  merge(a) {
    var b = this;
    da(a) && (a = new Map(a)), $();
    try {
      if (Ia(a)) for (var d2 = ((a2) => {
        var b2 = Z.keys(a2), c2 = Z.getOwnPropertySymbols(a2);
        if (0 == c2.length) return b2;
        var e3 = Ra.call(b2), d3 = c2.length;
        for (b2 = 0; b2 < d3; b2++) {
          var t3 = c2[b2], r3 = Z.prototype;
          true === r3.propertyIsEnumerable.call(a2, t3) && e3.push(t3);
        }
        return e3;
      })(a), e2 = 0; ; e2++) {
        var c = e2;
        if (c >= d2.length) break;
        c = b.set;
        var r2 = d2[e2];
        b.set(r2, a[d2[e2]]);
      }
      else if (Array.isArray(a)) for (var t2 = 0; ; t2++) {
        c = t2;
        if (c >= a.length) break;
        c = b.set, r2 = a[t2][0];
        var i2 = a[t2];
        b.set(r2, i2[1]);
      }
      else ab(a) ? (Z.getPrototypeOf(Z.getPrototypeOf(Z.getPrototypeOf(a))) == null || ua(19, a), a.forEach(function(a2, c2) {
        b.set(c2, a2);
      })) : a == null || ua(20, a);
    } finally {
      aa();
    }
    return b;
  }
  clear() {
    $();
    try {
      var c = Ja();
      try {
        for (var b = na(this.keys()), a = 0; ; a++) {
          if (a >= b.length) break;
          this.delete(b[a]);
        }
      } finally {
        xa(c);
      }
    } finally {
      aa();
    }
  }
  replace(a) {
    $();
    try {
      var n2 = ((a2) => {
        if (ab(a2) || da(a2)) return a2;
        if (Array.isArray(a2)) return new Map(a2);
        if (Ia(a2)) {
          for (var e3, t3, d3 = /* @__PURE__ */ new Map(), c2 = Z.keys(a2), b2 = 0; b2 < c2.length; b2++) e3 = c2[b2], t3 = a2[c2[b2]], d3.set(e3, t3);
          return d3;
        }
        ua(21, a2);
        return /* @__PURE__ */ new Map();
      })(a), c = /* @__PURE__ */ new Map(), r2 = false;
      a = this.data_;
      for (var s2 = na(a.keys()), b = 0; ; b++) {
        a = b;
        if (a >= s2.length) break;
        var d2 = s2[b];
        if (!n2.has(d2)) if (this.delete(d2)) r2 = true;
        else {
          a = c;
          var e2 = d2;
          a.set(e2, this.data_.get(d2));
        }
      }
      var i2 = na(n2.entries());
      for (b = 0; ; b++) {
        a = b;
        if (a >= i2.length) break;
        var t2 = i2[b][0], l2 = i2[b][1], m2 = !!this.data_.has(t2);
        this.set(t2, l2), !this.data_.has(t2) || (a = c, e2 = t2, a.set(e2, this.data_.get(t2)), m2 || (r2 = true));
      }
      if (!r2) {
        a = this.data_, e2 = a.size;
        if (e2 != c.size) wa(this.keysAtom_);
        else {
          a = this.data_;
          var o2 = a.keys(), g2 = c.keys(), f2 = o2.next(), u2 = g2.next();
          while (!f2.done) {
            a = f2.value;
            if (a !== u2.value) {
              wa(this.keysAtom_);
              break;
            }
            f2 = o2.next();
            u2 = g2.next();
          }
        }
      }
      this.data_ = c;
    } finally {
      aa();
    }
    return this;
  }
  toJSON() {
    return na(this);
  }
  toString() {
    return "[object ObservableMap]";
  }
  get size() {
    ka(this.keysAtom_);
    let a = this.data_;
    return a.size;
  }
  get [Symbol.toStringTag]() {
    return "Map";
  }
  [Symbol.iterator]() {
    return this.entries();
  }
};
var p = Symbol.iterator;
bc = Qa("ObservableMap", _);
var hd = {};
var ea = class {
  constructor(a, b, c) {
    var e2 = this;
    e2[X] = hd;
    var t2 = "ObservableSet";
    c === void 0 || (t2 = c + ""), e2.name_ = t2;
    var d2 = Ta;
    b && (d2 = b), e2.enhancer_ = function(a2, b2, c2) {
      return d2(a2, b2, t2);
    }, e2.data_ = /* @__PURE__ */ new Set(), e2.changeListeners_ = void 0, e2.interceptors_ = void 0, e2.dehancer = void 0, Wa(function() {
      e2.atom_ = Lb(e2.name_), !a || e2.replace(a);
    });
  }
  has(a) {
    ka(this.atom_);
    return !!this.data_.has(Gb(this, a));
  }
  add(a) {
    if (ya(this)) {
      var b = za(this, { type: "add", object: this, newValue: a });
      if (!b) return this;
      a = b.newValue;
    }
    if (!this.has(a)) {
      $();
      try {
        b = this.data_, b.add(this.enhancer_(a, void 0)), wa(this.atom_);
      } finally {
        aa();
      }
      b = false;
      var c = Ba(this), e2 = null;
      c && (b = true), b && (b = this.name_, e2 = { observableKind: "set", debugObjectName: b, type: "add", object: this, newValue: a }), c && Ca(this, e2);
    }
    return this;
  }
  delete(a) {
    if (ya(this) && !za(this, { type: "delete", object: this, oldValue: a })) return false;
    if (this.has(a)) {
      var b = false, c, e2;
      c = Ba(this), e2 = null, c && (b = true), b && (b = this.name_, e2 = { observableKind: "set", debugObjectName: b, type: "delete", object: this, oldValue: a }), $();
      try {
        wa(this.atom_), b = this.data_, b.delete(a);
      } finally {
        aa();
      }
      c && Ca(this, e2);
      return true;
    }
    return false;
  }
  values() {
    var b = this;
    ka(b.atom_);
    let a = b.data_, c = a.values();
    a = {}, a.next = function() {
      var a2 = c.next();
      return a2.done ? { done: true, value: void 0 } : { done: false, value: Gb(b, a2.value) };
    }, a[Symbol.toStringTag] = "SetIterator";
    return yb(a);
  }
  keys() {
    return this.values();
  }
  entries() {
    let b = this.values(), a = {};
    a.next = function() {
      var a2 = b.next();
      if (a2.done) return { done: true, value: void 0 };
      var c = [], e2 = a2.value;
      c.push(e2), c.push(a2.value);
      return { done: false, value: c };
    }, a[Symbol.toStringTag] = "SetIterator";
    return yb(a);
  }
  forEach(a, b) {
    var e2 = this.values(), c = e2.next();
    while (!c.done) {
      a.call(b, c.value, c.value, this);
      var t2 = e2.next();
      c = t2;
    }
  }
  replace(a) {
    var b = this;
    fa(a) && (a = new Set(a)), $();
    try {
      if (Array.isArray(a)) {
        b.clear();
        for (var c = 0; ; c++) {
          if (c >= a.length) break;
          b.add(a[c]);
        }
      } else bb(a) ? (b.clear(), a.forEach(function(a2) {
        b.add(a2);
      })) : a == null || ua(41, a);
    } finally {
      aa();
    }
    return b;
  }
  clear() {
    $();
    try {
      var c = Ja();
      try {
        for (var e2 = this.data_, b = na(e2.values()), a = 0; ; a++) {
          if (a >= b.length) break;
          this.delete(b[a]);
        }
      } finally {
        xa(c);
      }
    } finally {
      aa();
    }
  }
  toJSON() {
    return na(this);
  }
  toString() {
    return "[object ObservableSet]";
  }
  get size() {
    ka(this.atom_);
    let a = this.data_;
    return a.size;
  }
  get [Symbol.toStringTag]() {
    return "Set";
  }
  [Symbol.iterator]() {
    return this.values();
  }
};
h = ea.prototype, Xa("intersection"), Xa("union"), Xa("difference"), Xa("symmetricDifference"), Xa("isSubsetOf"), Xa("isSupersetOf"), Xa("isDisjointFrom"), cc = Qa("ObservableSet", ea);
var nc = (0, function(a, b, c) {
  return this.extend_(a, b, c, false) == null ? 0 : 1;
});
var id = (0, function(a, b, c, e2) {
  var d2, r2 = Ta, t2 = !!((d2 = this.options_) && d2.enhancer_);
  t2 && (t2 = this.options_, r2 = t2.enhancer_);
  return a.defineObservableProperty_(b, c.value, r2, e2);
});
var jd = (0, function(a, b, c, e2) {
  var t2 = sa({}, this.options_);
  t2.get = c.get, t2.set = c.set;
  return a.defineComputedProperty_(b, t2, e2);
});
var kd = (0, function(a, b, c, e2) {
  var t2, d2 = !!((t2 = this.options_) && t2.bound);
  if (d2) return this.extend_(a, b, c, false) == null ? 0 : 1;
  if (e2 === a.target_) return this.extend_(a, b, c, false) == null ? 0 : 2;
  if (Va(c.value)) return 1;
  la(e2, b, Pc(a, this, b, c, false));
  return 2;
});
var ld = (0, function(a, b, c, e2) {
  let t2 = a.defineProperty_;
  return a.defineProperty_(b, Pc(a, this, b, c, !!W.safeDescriptors), e2);
});
var oc = function(a, b, c) {
  var e2 = c.name;
  cb(b) || (b = Sa(b));
  var t2, d2 = !!((t2 = a.options_) && t2.bound);
  d2 && c.addInitializer(function() {
    let a2 = this[e2];
    a2 = a2.bind(this), a2.isMobXFlow = true, this[e2] = a2;
  });
  return b;
};
var pc = (0, function(a, b, c, e2) {
  if (e2 === a.target_) return this.extend_(a, b, c, false) == null ? 0 : 2;
  var d2, t2 = !!((d2 = this.options_) && d2.bound);
  t2 ? (t2 = a.target_, t2 = !La.call(t2, b) || !cb(a.target_[b])) : t2 = false;
  if (t2 && this.extend_(a, b, c, false) == null) return 0;
  if (cb(c.value)) return 1;
  la(e2, b, Qc(a, c, false, false));
  return 2;
});
var qc = (0, function(a, b, c, e2) {
  var t2, d2, r2 = !!((t2 = this.options_) && t2.bound);
  d2 = a.defineProperty_, b;
  return a.defineProperty_(b, Qc(a, c, r2, !!W.safeDescriptors), e2);
});
sb = function(a, b, c, e2) {
  var t2, d2;
  t2 = c, d2 = e2;
  var r2 = Z.getOwnPropertyDescriptors(b);
  Wa(function() {
    for (var b2, e3, f2 = $a(a, d2)[X], i2 = Reflect.ownKeys(r2), c2 = 0; c2 < i2.length; c2++) b2 = i2[c2], e3 = t2 ? true === b2 in t2 ? t2[b2] : true : true, f2.extend_(b2, r2[b2], e3);
  });
  return a;
};
var jb = function(a, b, c) {
  if ("accessor" != c.kind + "") return;
  var e2 = c.name, t2 = {};
  t2.get = function() {
    var c2 = this[X];
    c2 = c2 || Zb(this, a, e2, b.get.call(this));
    return c2.getObservablePropValue_(e2);
  }, t2.set = function(b2) {
    var c2 = this[X];
    c2 = c2 || Zb(this, a, e2, b2);
    return c2.setObservablePropValue_(e2, b2);
  }, t2.init = function(b2) {
    Zb(this, a, e2, b2);
    return b2;
  };
  return t2;
};
var Pb = Hb("observable", void 0);
h = Hb("observable.ref", { enhancer_: ib }), e = Hb("observable.shallow", { enhancer_: e }), o = Hb("observable.struct", { enhancer_: o }), Y = sa(function(a, b, c) {
  return b && "string" == typeof b.kind ? jb(Pb, a, b) : Cb(a) ? a : Ia(a) ? Y.object.call(Y, a, b, c) : Array.isArray(a) ? Y.array.call(Y, a, b) : ab(a) ? Y.map.call(Y, a, b) : bb(a) ? Y.set.call(Y, a, b) : "object" == typeof a && a != null ? a : Y.box.call(Y, a, b);
}, Pb), Y.box = function(a, b) {
  let c = Eb(b);
  return new ba(a, Db(c), c.name, true, c.equals);
}, Y.array = function(a, b) {
  let c = Eb(b);
  return fd(a, Db(c), c.name);
}, Y.map = function(a, b) {
  let c = Eb(b);
  return new _(a, Db(c), c.name);
}, Y.set = function(a, b) {
  let c = Eb(b);
  return new ea(a, Db(c), c.name);
}, Y.object = function(a, b, c) {
  return Wa(function() {
    var e2 = {};
    e2 = $a(e2, c);
    var t2 = e2[X];
    t2.proxy_ || (t2.proxy_ = new Proxy(e2, Ma)), e2 = t2.proxy_;
    return sb(e2, a, b);
  });
}, qb = Fa(h, jb), p = Fa(e, jb);
var q = Fa(Pb, jb);
o = Fa(o, jb);
var Qb = function(a, b, c) {
  var t2, e2 = c.name, d2 = function(c2, t3) {
    var d3 = sa({}, a.options_);
    d3.get = b, d3.context = c2, d3.name || (d3.name = Ze + ta(e2));
    return new ha(d3);
  };
  c.addInitializer(function() {
    var t3 = this, a2 = $a(t3)[X], c2 = a2.values_;
    c2 = c2.get(e2);
    var r2;
    va(c2) && c2.derivation !== b && (r2 = a2.values_, r2.delete(e2)), a2.lazyComputedKeys_ || (a2.lazyComputedKeys_ = /* @__PURE__ */ new Map()), a2.lazyComputedKeys_.set(e2, function() {
      return d2(t3, a2);
    });
  });
  return function() {
    var r2 = this[X], c2 = r2.values_;
    c2 = c2.get(e2);
    var a2;
    return va(c2) && c2.derivation !== b ? (t2 = t2 || /* @__PURE__ */ new WeakMap(), a2 = t2.get(this), a2 || (a2 = d2(this, r2), t2.set(this, a2)), a2.get()) : r2.getObservablePropValue_(e2);
  };
};
var rc = Yb("computed", void 0);
h = Yb("computed.struct", { equals: function(a, b) {
  return db(a, b, -1, void 0, void 0);
} }), Za = sa(function(a, b) {
  if (b && "string" == typeof b.kind) return Qb(rc, a, b);
  if (Ia(a)) return Fa(Yb("computed", a), Qb);
  var c = {};
  Ia(b) && (c = sa({}, b)), c.get = a, c.name || (c.name = a.name);
  return new ha(c);
}, rc);
var r = Fa(h, Qb);
e = (0, function(a) {
  var b = a.name + "";
  "" == b && (b = _e);
  return Kc(b, false, a, this, void 0);
});
var ub = function(a, b, c) {
  var t2 = c.name, e2 = function(b2) {
    var d3 = ta(t2);
    if (a.options_) var e3 = a.options_, c2 = !!e3.name;
    else {
      c2 = false;
    }
    c2 && (c2 = a.options_, d3 = c2.name + "");
    c2 = !!((e3 = a.options_) && e3.autoAction);
    return Ka(d3, b2, c2, void 0);
  };
  if ("field" == c.kind + "") return function(b2) {
    Va(b2) || (b2 = e2(b2));
    var c2, t3 = !!((c2 = a.options_) && c2.bound);
    t3 && (b2 = b2.bind(this), b2.isMobxAction = true);
    return b2;
  };
  if ("method" == c.kind + "") {
    Va(b) || (b = e2(b));
    if (a.options_) {
      var d2 = a.options_;
      e2 = !!d2.bound;
    } else {
      e2 = false;
    }
    e2 && c.addInitializer(function() {
      let a2 = this[t2];
      a2 = a2.bind(this), a2.isMobxAction = true, this[t2] = a2;
    });
    return b;
  }
  b = a.annotationType_;
  d2 = ta(t2);
  var r2 = c.kind;
  e2 = [], e2.push(b), e2.push(d2), e2.push(r2), Ua(43, e2);
};
var sc = mb("action", void 0);
h = mb("action.bound", { bound: true });
var tc = mb("autoAction", { autoAction: true });
var s = mb("autoAction.bound", { autoAction: true, bound: true });
_a = sa(function(a, b) {
  if (b && "string" == typeof b.kind) {
    var c = sc;
    return ub(c, a, b);
  }
  if ("function" == typeof a) return c = a.name + "", "" == c && (c = _e), Ka(c, a, false, void 0);
  if ("function" == typeof b) return Ka(a + "", b, false, void 0);
  if (Tb(a)) return c = "action", Fa(mb(c, { name: a, autoAction: false }), ub);
}, sc), rb = sa(function(a, b) {
  if (b && "string" == typeof b.kind) {
    var c = tc;
    return ub(c, a, b);
  }
  if ("function" == typeof a) return c = a.name + "", "" == c && (c = _e), Ka(c, a, true, void 0);
  if ("function" == typeof b) return Ka(a + "", b, true, void 0);
  if (Tb(a)) return c = "autoAction", Fa(mb(c, { name: a, autoAction: true }), ub);
}, tc);
var t = Fa(h, ub);
Nb = Fa(s, ub);
var Na = class extends Error {
  constructor() {
    super(), this.message = "FLOW_CANCELLED", this.name = "FlowCancellationError";
  }
  toString() {
    return "Error: " + this.message;
  }
};
la(Na, "name", { value: "FlowCancellationError", configurable: true });
h = Na.prototype, s = function(a) {
  return xc(Na, a);
};
var u = function(a, b) {
  if (b && "string" == typeof b.kind) return oc(Sa, a, b);
  var c = a.name + "";
  "" == c && (c = "flow");
  var e2 = (0, function() {
    var e3 = _a(c, a).apply(this, arguments), b2 = {};
    b2.rejector = void 0, b2.pending = void 0, b2.stepId = 0;
    var r2, i2, t2;
    r2 = function(a2) {
      b2.pending = void 0;
      try {
        var r3 = _a(c, e3.next).call(e3, a2);
        t2(r3);
      } catch (a3) {
        b2.rejector(a3);
      }
    }, i2 = function(a2) {
      b2.pending = void 0;
      try {
        var r3 = _a(c, e3.throw).call(e3, a2);
        t2(r3);
      } catch (a3) {
        b2.rejector(a3);
      }
    }, t2 = function(a2) {
      if ("function" == typeof a2.then) {
        a2.then(t2, b2.rejector);
        return;
      }
      if (a2.done) {
        b2.resolve(a2.value);
        return;
      }
      b2.pending = Promise.resolve(a2.value);
      b2.pending.then(r2, i2);
    };
    var f2 = new Promise(function(a2, c2) {
      b2.resolve = a2, b2.rejector = c2, r2(void 0);
    });
    f2.cancel = _a(c, function() {
      try {
        if (b2.pending) var c2 = b2.pending, a2 = "function" == typeof c2.cancel;
        else {
          a2 = false;
        }
        a2 && (a2 = b2.pending, a2.cancel.call(b2.pending)), M = e3.return(void 0), T = Promise.resolve(M.value);
        T.then(Ya, Ya), "function" == typeof T.cancel && T.cancel.call(T), b2.rejector(new Na());
      } catch (a3) {
        b2.rejector(a3);
      }
    });
    return f2;
  });
  e2.isMobXFlow = true;
  return e2;
};
h = {}, h.annotationType_ = "flow", h.options_ = void 0, h.make_ = pc, h.extend_ = qc, Sa = sa(u, h), h = {}, h.annotationType_ = "flow.bound", h.options_ = { bound: true }, h.make_ = pc, h.extend_ = qc, Ob = Fa(h, oc), h = function(a) {
  return a;
}, u = function(a) {
  return cb(a);
};
var Rb = function(a, b) {
  var c = ac;
  b = b || c, c = b.name ? b.name + "" : "Autorun";
  var e2, t2 = !b.scheduler && !b.delay, i2 = () => {
    a(e2);
  };
  if (t2) e2 = new ma(c, function() {
    this.track(i2);
  }, b.onError, b.requiresObservable);
  else {
    t2 = Rc(b);
    var d2 = false, r2 = ma;
    e2 = new r2(c, function() {
      var a2 = this;
      d2 || (d2 = true, t2(() => {
        d2 = false, a2.isDisposed || a2.track(i2);
      }));
    }, b.onError, b.requiresObservable);
  }
  c = !!((r2 = b.signal) && r2.aborted);
  c || e2.schedule_(), c = e2.getDisposer_;
  return c.call(e2, b.signal);
};
var v = function(a, b, c) {
  var e2 = ac;
  c && (e2 = c);
  var d2 = e2.name ? e2.name + "" : "Reaction", n2 = Jb;
  !e2.equals || (n2 = e2.equals);
  var r2, t2, s2 = Ka(d2, /* @__PURE__ */ ((a2, b2) => !a2 ? b2 : function() {
    try {
      return b2.apply(this, arguments);
    } catch (b3) {
      a2.call(this, b3);
      return;
    }
  })(e2.onError, b), false, void 0), i2 = true, g2 = false, u2 = () => {
    var c2 = !!W.allowStateChanges;
    W.allowStateChanges = false;
    var b2;
    try {
      b2 = a(t2);
    } finally {
      W.allowStateChanges = c2;
    }
    g2 = i2 || true !== n2(r2, b2);
    r2 = b2;
  };
  b = !e2.scheduler && !e2.delay;
  var f2 = false, l2 = Rc(e2), o2 = () => {
    f2 = false;
    if (!t2.isDisposed) {
      var a2 = r2;
      t2.track.call(t2, u2), i2 && e2.fireImmediately ? s2(r2, a2, t2) : !i2 && false, i2 = false;
    }
  }, m2 = () => {
    i2 || b ? o2() : f2 || (f2 = true, l2(o2));
  }, h2 = e2.onError;
  t2 = new ma(d2, m2, h2, e2.requiresObservable), d2 = !!((c = e2.signal) && c.aborted), d2 || (d2 = t2.schedule_, d2.call(t2)), d2 = t2.getDisposer_;
  return d2.call(t2, e2.signal);
};
var w = function(a, b, c) {
  var e2;
  return 1 == arguments.length || b && "object" == typeof b ? (e2 = void 0, e2 = b, ((a2, b2) => {
    var c2;
    if (b2 && b2.signal && b2.signal.aborted) return a2 = Promise.reject(new Error("WHEN_ABORTED")), a2.cancel = function() {
      return null;
    }, a2;
    c2 = {}, c2.cancel = void 0, c2.abort = void 0;
    var e3 = new Promise(function(e4, t2) {
      var d2 = sa({}, b2);
      d2.onError = t2, d2 = Sc(a2, e4, d2), c2.cancel = function() {
        d2(), t2(new Error("WHEN_CANCELLED"));
      }, c2.abort = function() {
        d2(), t2(new Error("WHEN_ABORTED"));
      }, b2 && b2.signal && "function" == typeof b2.signal.addEventListener && b2.signal.addEventListener("abort", c2.abort);
    });
    b2 && b2.signal && "function" == typeof b2.signal.removeEventListener && (e3 = e3.finally(function() {
      b2.signal.removeEventListener("abort", c2.abort);
    })), e3.cancel = c2.cancel;
    return e3;
  })(a, b)) : Sc(a, b, c);
};
var x = function(a) {
  var b = a.isolateGlobalState;
  true === b && $c(), a.enforceActions === void 0 || (b = a.enforceActions, "always" === b ? (W.enforceActions = "always", W.allowStateChanges = false) : "observed" === b ? (W.enforceActions = true, W.allowStateChanges = false) : (W.enforceActions = false, W.allowStateChanges = true)), true === "computedRequiresReaction" in a && (b = W, b.computedRequiresReaction = !!a.computedRequiresReaction), true === "reactionRequiresObservable" in a && (b = W, b.reactionRequiresObservable = !!a.reactionRequiresObservable), true === "observableRequiresReaction" in a && (b = W, b.observableRequiresReaction = !!a.observableRequiresReaction), true === "disableErrorBoundaries" in a && (b = W, b.disableErrorBoundaries = !!a.disableErrorBoundaries), true === "safeDescriptors" in a && (b = W, b.safeDescriptors = !!a.safeDescriptors), b = W, b.allowStateReads = !W.observableRequiresReaction;
  if (a.reactionScheduler) {
    b = a.reactionScheduler;
    var c = Kb;
    Kb = (a2) => b(() => c(a2));
  }
};
var Sb = Symbol("mobx-keys");
var y = function(a, b, c) {
  Wa(function() {
    for (var d2, r2 = $a(a, c)[X], t2 = Reflect.ownKeys(b), e2 = 0; e2 < t2.length; e2++) d2 = t2[e2], Tc(r2, d2, b[t2[e2]]);
  });
  return a;
};
var z = function(a, b, c) {
  if (Ia(a)) return sb(a, a, b, c);
  Wa(function() {
    var n2 = $a(a, c)[X];
    if (true !== Sb in a) {
      for (var r2, i2 = Z.getPrototypeOf(a), t2 = /* @__PURE__ */ new Set(), d2 = Reflect.ownKeys(a), f2 = Reflect.ownKeys(i2), e2 = 0; e2 < d2.length; e2++) r2 = d2[e2], t2.add(r2);
      for (e2 = 0; e2 < f2.length; e2++) d2 = f2[e2], t2.add(d2);
      t2.delete("constructor"), t2.delete(X), la(i2, Sb, { enumerable: false, writable: true, configurable: true, value: t2 });
    }
    a[Sb].forEach(function(a2) {
      var c2 = b && true === a2 in b ? b[a2] : true;
      Tc(n2, a2, c2);
    });
  });
  return a;
};
var vb = function(a) {
  if (ga(a)) {
    var b = a[X];
    return b.keys_.call(a[X]);
  }
  if (da(a) || fa(a)) return na(a.keys());
  if (oa(a)) {
    var c = [];
    for (b = 0; b < a.length; b++) c.push(b);
    return c;
  }
  ca(5);
};
var A = function(a) {
  if (ga(a)) {
    for (var t2, c = vb(a), e2 = [], b = 0; b < c.length; b++) t2 = a[c[b]], e2.push(t2);
    return e2;
  }
  if (da(a)) {
    for (c = vb(a), e2 = [], b = 0; b < c.length; b++) e2.push(a.get(c[b]));
    return e2;
  }
  if (fa(a)) return na(a.values());
  if (oa(a)) return a.slice();
  ca(6);
};
var B = function(a) {
  if (ga(a) || da(a)) {
    for (var c, t2, e2 = vb(a), d2 = [], b = 0; b < e2.length; b++) c = [], t2 = e2[b], c.push(t2), da(a) ? c.push(a.get(e2[b])) : (t2 = a[e2[b]], c.push(t2)), d2.push(c);
    return d2;
  }
  if (fa(a)) return na(a.entries());
  if (oa(a)) {
    for (e2 = [], b = 0; b < a.length; b++) c = [], c.push(b), c.push(a[b]), e2.push(c);
    return e2;
  }
  ca(7);
};
var uc = function(a, b, c) {
  var e2 = b, d2 = c;
  if (2 == arguments.length && !fa(a)) {
    $();
    try {
      for (var i2 = Z.keys(e2), r2 = 0; ; r2++) {
        var t2 = r2;
        if (t2 >= i2.length) break;
        t2 = uc, d2 = i2[r2], t2(a, d2, e2[i2[r2]]);
      }
    } finally {
      aa();
    }
    return;
  }
  ga(a) ? (t2 = a[X], t2.set_.call(a[X], e2, d2)) : da(a) ? a.set(e2, d2) : fa(a) ? a.add(e2) : oa(a) ? ($(), t2 = e2 | 0, t2 >= a.length && (a.length = (e2 | 0) + 1 | 0), a[e2] = d2, aa()) : ca(8);
};
var C = function(a, b) {
  if (ga(a)) {
    var c = a[X];
    c.delete_.call(a[X], b);
  } else da(a) || fa(a) ? a.delete(b) : oa(a) ? a.splice(b, 1) : ca(9);
};
var vc = function(a, b) {
  if (ga(a)) {
    var c = a[X];
    return c.has_.call(a[X], b);
  }
  if (da(a) || fa(a)) return a.has(b);
  if (oa(a)) return (b | 0) >= 0 ? (c = b | 0, c = c < a.length) : c = false, c;
  ca(10);
  return false;
};
var D = function(a, b) {
  if (!!vc(a, b)) {
    if (ga(a)) return a[X].get_.call(a[X], b);
    if (da(a)) return a.get(b);
    if (oa(a)) return a[b];
    ca(11);
  }
};
var wc = function(a) {
  if (ga(a)) return a[X].ownKeys_.call(a[X]);
  ca(38);
};
var E = function(a, b, c) {
  if (ga(a)) return a[X].defineProperty_.call(a[X], b, c);
  ca(39);
};
var Oa = function(a, b) {
  if ("object" == typeof a && a != null) {
    if (oa(a)) {
      b === void 0 || ca(23);
      var c = a[X];
      return c.atom_;
    }
    if (fa(a)) return a.atom_;
    if (da(a)) {
      if (b === void 0) return a.keysAtom_;
      c = a.data_, c = c.get(b), c || (c = a.hasMap_, c = c.get(b));
      if (!c) {
        var t2 = a.name_, e2 = [];
        e2.push(b), e2.push(t2), Ua(25, e2);
      }
      return c;
    }
    if (b && !a[X] && a[b] === void 0) {
    }
    if (ga(a)) return b || ca(26), e2 = a[X], c = e2.values_, c = c.get(b), c = c || e2.materializeLazyComputed_(b), c = c || e2.materializeLazyObservable_(b), c || (t2 = e2.name_, a = [], a.push(b), a.push(t2), Ua(27, a)), c;
    if (Ub(a) || va(a) || zb(a)) return a;
  } else {
    if ("function" == typeof a && zb(a[X])) return a[X];
  }
  ua(28, a);
};
var Ha = function(a, b) {
  a || ca(29);
  if (b !== void 0) return Ha(Oa(a, b));
  if (Ub(a) || va(a) || zb(a) || da(a) || fa(a)) return a;
  if (a[X]) return a[X];
  ua(24, a);
};
var F = function(a, b) {
  if (b !== void 0) var c = Oa(a, b);
  else if (Va(a)) return a.name;
  else {
    c = ga(a) || da(a) || fa(a) ? Ha(a) : Oa(a);
  }
  return c.name_;
};
var G = function(a, b, c, e2) {
  var d2 = a;
  if (arguments.length > 2 && "function" == typeof c) {
    var t2 = e2;
    d2 = Ha(d2, b);
    return Uc(d2, c, t2);
  }
  var r2 = arguments.length > 2 && c;
  t2 = Ha(d2);
  if (oa(d2)) {
    if (r2) {
      var i2 = t2.values_;
      i2 = Ra.call(i2), d2 = t2.proxy_, r2 = t2.atom_, b({ observableKind: "array", object: d2, debugObjectName: r2.name_, type: "splice", index: 0, added: i2, addedCount: i2.length, removed: [], removedCount: 0 });
    }
    t2 = lb(t2, b);
    return t2;
  }
  if (da(d2)) return t2 = lb(t2, b), t2;
  if (fa(d2)) return t2 = lb(t2, b), t2;
  if (ga(d2)) return t2 = lb(t2, b), t2;
  t2 = Uc(t2, b, r2);
  return t2;
};
var H = function(a, b, c) {
  if (arguments.length > 2 && "function" == typeof c) {
    var e2 = Ha(a, b);
    return Lc(e2, c);
  }
  e2 = Ha(a);
  return Lc(e2, b);
};
var I = function() {
  return Vc("onBOL", arguments);
};
var J = function() {
  return Vc("onBUOL", arguments);
};
var K = function(a) {
  return eb(a, /* @__PURE__ */ new Map());
};
var L = function(a, b) {
  return Wc(Oa(a, b));
};
var M = function(a, b) {
  return Xc(Oa(a, b));
};
var T = function(a) {
  return va(a);
};
var O = function(a, b) {
  if (!ga(a)) return false;
  var c = a[X];
  c.lazyComputedKeys_ ? (a = c.lazyComputedKeys_, a = !!a.has(b)) : a = false;
  if (a) return true;
  a = c.values_;
  if (!a.has(b)) return false;
  a = c.values_;
  return va(a.get(b));
};
var P = function(a, b, c) {
  var e2, t2 = void 0;
  da(a) || oa(a) || gb(a) || fa(a) ? (e2 = Ha(a), t2 = b) : ga(a) && (e2 = Ha(a, b), t2 = c), e2.dehancer = t2;
  return function() {
    e2.dehancer = void 0;
  };
};
var Ed = (a) => {
  W.allowStateReads = a;
};
var Fd = (a) => {
  let b = !!W.allowStateReads;
  W.allowStateReads = a;
  return b;
};
var Jd = (a, b) => true === fb(a, b);
var Kd = (a, b) => a === b;
var Ld = (a, b) => db(a, b, 1, void 0, void 0);
var Md = (a, b) => db(a, b, -1, void 0, void 0);
var ee = M;
var ie = (a) => !!gb(a);
var le = () => W.trackingDerivation != null;
