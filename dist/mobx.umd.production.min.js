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
    $mobx: () => $,
    FlowCancellationError: () => We,
    ObservableMap: () => ne,
    ObservableSet: () => ce,
    Reaction: () => _e,
    _allowStateChanges: () => ur,
    _allowStateChangesInsideComputed: () => Mn,
    _allowStateReadsEnd: () => Nn,
    _allowStateReadsStart: () => zn,
    _autoAction: () => xt,
    _autoActionBound: () => Wt,
    _endAction: () => Br,
    _getAdministration: () => Xe,
    _getGlobalState: () => va,
    _interceptReads: () => N,
    _isComputingDerivation: () => ga,
    _resetGlobalState: () => o,
    _startAction: () => Pr,
    action: () => Ye,
    actionBound: () => v,
    autorun: () => $t,
    compareDefault: () => Xn,
    compareIdentity: () => qn,
    compareShallow: () => Un,
    compareStructural: () => Wn,
    computed: () => ut,
    computedStruct: () => p,
    configure: () => h,
    createAtom: () => qt,
    defineProperty: () => x,
    entries: () => S,
    extendObservable: () => Ct,
    flow: () => Ze,
    flowBound: () => Ht,
    flowResult: () => z,
    get: () => k,
    getAtom: () => He,
    getDebugName: () => C,
    getDependencyTree: () => D,
    getObserverTree: () => P,
    has: () => wr,
    intercept: () => V,
    isAction: () => nt,
    isBoxedObservable: () => ha,
    isComputed: () => B,
    isComputedProp: () => M,
    isFlow: () => I,
    isFlowCancellationError: () => g,
    isObservable: () => d,
    isObservableArray: () => me,
    isObservableMap: () => ve,
    isObservableObject: () => fe,
    isObservableProp: () => b,
    isObservableSet: () => pe,
    keys: () => Et,
    makeAutoObservable: () => w,
    makeObservable: () => m,
    observable: () => Y,
    observableDeep: () => c,
    observableRef: () => kt,
    observableShallow: () => l,
    observableStruct: () => u,
    observe: () => T,
    onBecomeObserved: () => j,
    onBecomeUnobserved: () => E,
    onReactionError: () => a,
    override: () => y,
    ownKeys: () => Or,
    reaction: () => _,
    remove: () => A,
    runInAction: () => t,
    set: () => mr,
    spy: () => r,
    toJS: () => R,
    transaction: () => s,
    untracked: () => n,
    values: () => O,
    when: () => f
  });
  var $e = (e2) => !!e2 ? e2 : pr;
  var Ve = (e2) => {
    ae(), Vr(e2), ie();
  };
  var Nr = () => {
    if (!(Q(J.inBatch) > 0 || J.isRunningReactions)) Ut(sn);
  };
  var ae = () => {
    J.inBatch++;
  };
  var le = (e2) => {
    rt(e2, []);
  };
  var Q = (e2) => +e2 | 0;
  var Z = (e2) => true === e2;
  var pe = (e2) => re(e2, "isMobXObservableSet");
  var ve = (e2) => re(e2, "isMobXObservableMap");
  var fe = (e2) => !gt(e2) ? false : re(e2[$], "isMobXObservableObjectAdministration");
  var me = (e2) => !gt(e2) ? false : re(e2[$], "isMobXObservableArrayAdministration");
  var Kr = (e2) => me(e2) ? e2.slice() : vt(e2) || ve(e2) ? ye(e2.entries()) : _t(e2) || pe(e2) ? ye(e2.entries()) : e2;
  var kr = (e2) => null === e2 ? null : "object" == typeof e2 ? "" + e2 : e2;
  var gt = (e2) => e2 != null && "object" == typeof e2;
  var te = (e2) => "function" == typeof e2;
  var Zt = (e2) => {
    e2 = typeof e2;
    return "string" == e2 || "symbol" == e2 || "number" == e2;
  };
  var zt = (e2) => !e2 ? false : fe(e2) || e2[$] || re(e2, "isMobXAtom") || re(e2, "isMobXReaction") || re(e2, "isMobXComputedValue");
  var Jr = (r2, n2, a2) => {
    if (re(r2, "isMobXComputedValue")) {
      var t2, e2 = true;
      return $t(function() {
        var s2 = r2.get;
        s2 = r2.get(), (!e2 || a2) && (n2({ __proto__: null, observableKind: "computed", debugObjectName: r2.name_, type: "update", object: r2, newValue: s2, oldValue: t2 }), je(Ue())), e2 = false, t2 = s2;
      });
    }
    a2 && n2({ __proto__: null, observableKind: "value", debugObjectName: r2.name_, object: r2, type: "update", newValue: r2.value_, oldValue: void 0 });
    return mt(r2, n2);
  };
  var Mt = (e2, t2, r2, n2) => {
    var a2 = e2.values_.length;
    t2 > a2 ? t2 = a2 : t2 < 0 && (t2 = a2 + t2 | 0, t2 < 0 && (t2 = 0)), r2 < 0 && (r2 = 0), a2 = a2 - t2 | 0, r2 > a2 || (a2 = r2), n2 == null ? n2 = [] : Array.isArray(n2) || (n2 = globalThis.Array.prototype.slice.call(n2));
    if (Ee(e2)) {
      r2 = Re(e2, { __proto__: null, object: e2.proxy_, type: "splice", index: t2, removedCount: a2, added: n2 });
      if (!r2) return ar;
      a2 = Q(r2.removedCount), n2 = r2.added;
    }
    if (0 != n2.length) {
      r2 = [];
      var o2 = n2.length, i2 = 0;
      while (i2 < o2) r2.push(e2.enhancer_(n2[i2], void 0)), i2 = i2 + 1 | 0;
    } else {
      r2 = n2;
    }
    i2 = ((e3, t3, r3, n3) => {
      var a3 = e3.values_, i3 = n3.length;
      if (0 == r3 && t3 == a3.length) {
        e3 = 0;
        while (e3 < i3) a3.push(n3[e3]), e3 = e3 + 1 | 0;
        return ar;
      }
      if (i3 < 1e4) {
        e3 = [], e3.push(t3), e3.push(r3), t3 = 0;
        while (t3 < n3.length) e3.push(n3[t3]), t3 = t3 + 1 | 0;
        return a3.splice.apply(a3, e3);
      }
      e3 = t3 + r3 | 0;
      var o3 = Qe.call(a3, t3, e3);
      i3 = Qe.call(a3, e3, a3.length), e3 = a3.length, a3.length = (e3 + n3.length | 0) - r3 | 0, e3 = 0;
      while (e3 < n3.length) a3[t3 + e3 | 0] = n3[e3], e3 = e3 + 1 | 0;
      e3 = 0;
      while (e3 < i3.length) r3 = (t3 + n3.length | 0) + e3 | 0, a3[r3] = i3[e3], e3 = e3 + 1 | 0;
      return o3;
    })(e2, t2, a2, r2);
    (0 != a2 || 0 != r2.length) && ((e3, t3, r3, n3) => {
      var o3, a3 = Be(e3), i3 = null;
      a3 && (i3 = e3.proxy_, o3 = e3.atom_.name_, i3 = { __proto__: null, observableKind: "array", object: i3, debugObjectName: o3, type: "splice", index: t3, removed: n3, added: r3, removedCount: n3.length, addedCount: r3.length }), Ve(e3.atom_), a3 && Me(e3, i3);
    })(e2, t2, r2, i2);
    return e2.dehanceValues_(i2);
  };
  var Ne = (e2) => {
    te(globalThis.Array.prototype[e2]) && (de[e2] = function() {
      var r2 = this, a2 = r2[$];
      be(a2.atom_);
      var i2;
      i2 = a2.dehanceValues_(a2.values_), a2 = arguments[0];
      var n2;
      arguments.length > 1 && (n2 = arguments[1]);
      return i2[e2](function(u2, i3) {
        let s2 = n2;
        return a2.call(s2, u2, i3, r2);
      });
    });
  };
  var qr = (e2) => {
    te(globalThis.Array.prototype[e2]) && (de[e2] = function() {
      var t2 = this;
      let n2 = t2[$];
      be(n2.atom_);
      let a2 = n2.dehanceValues_;
      n2 = n2.dehanceValues_(n2.values_), a2 = arguments[0], arguments[0] = function(r2, n3, i2) {
        return a2(r2, n3, i2, t2);
      };
      return n2[e2].apply(n2, arguments);
    });
  };
  var ke = (e2) => {
    te(globalThis.Array.prototype[e2]) && (de[e2] = function() {
      let t2 = this[$];
      be(t2.atom_), t2 = t2.dehanceValues_(t2.values_);
      return t2[e2].apply(t2, arguments);
    });
  };
  var ot = (e2) => {
    let t2 = ce.prototype;
    t2[e2] = function(n2) {
      var i2 = this.atom_;
      be(i2);
      if (("intersection" == e2 || "union" == e2 || "symmetricDifference" == e2 || "isDisjointFrom" == e2) && _t(n2) && !pe(n2) && te(n2[e2])) return n2[e2](this);
      var t3 = new globalThis.Set(this);
      return te(t3[e2]) ? t3[e2].apply(t3, arguments) : ((n3, a2, i3) => {
        if ("intersection" == n3) {
          n3 = new globalThis.Set(), it(a2, function(s2) {
            rr(i3, s2) && n3.add(s2);
          });
          return n3;
        }
        if ("union" == n3) {
          n3 = new globalThis.Set(a2), it(i3, function(r3) {
            n3.add(r3);
          });
          return n3;
        }
        if ("difference" == n3) {
          n3 = new globalThis.Set(a2), it(i3, function(r3) {
            n3.delete(r3);
          });
          return n3;
        }
        if ("symmetricDifference" == n3) {
          n3 = new globalThis.Set(a2), it(i3, function(r3) {
            Z(n3.has(r3)) ? n3.delete(r3) : n3.add(r3);
          });
          return n3;
        }
        if ("isSubsetOf" == n3) {
          var e3 = true;
          it(a2, function(n4) {
            rr(i3, n4) || (e3 = false);
          });
          return e3;
        }
        if ("isSupersetOf" == n3) {
          var t4 = true;
          it(i3, function(n4) {
            Z(a2.has(n4)) || (t4 = false);
          });
          return t4;
        }
        var r2 = true;
        it(a2, function(n4) {
          rr(i3, n4) && (r2 = false);
        });
        return r2;
      })(e2, t3, n2);
    };
  };
  var Gr = (n2, a2, i2) => {
    i2 = i2 || {};
    var e2, t2;
    if ("number" == typeof i2.timeout) {
      var u2 = new globalThis.Error("WHEN_TIMEOUT"), s2 = i2.timeout;
      t2 = globalThis.setTimeout(function() {
        if (!e2[$].isDisposed) e2(), i2.onError ? i2.onError(u2) : Rt(u2);
      }, s2);
    }
    i2.name || (i2.name = "When");
    var r2 = Je("When-effect", a2, false, void 0);
    e2 = $t(function(a3) {
      if (ur(false, n2)) a3.dispose(), t2 && globalThis.clearTimeout(t2), r2();
    }, i2);
    return e2;
  };
  var Hr = (e2) => e2.scheduler ? e2.scheduler : e2.delay ? function(r2) {
    return globalThis.setTimeout(r2, e2.delay);
  } : function(t2) {
    return t2();
  };
  var $r = (r2, n2) => {
    var e2, a2, t2 = n2[1];
    n2.length > 2 && te(n2[2]) ? (a2 = He, e2 = a2(n2[0], n2[1]), t2 = n2[2]) : (a2 = He, e2 = a2(n2[0])), e2[r2] ? (n2 = e2[r2], n2.add(t2)) : (n2 = e2, n2[r2] = new globalThis.Set(), n2 = e2[r2], n2.add(t2));
    return function() {
      var n3 = e2[r2];
      n3 && (n3.delete(t2), 0 == (+n3.size | 0) && delete e2[r2]);
    };
  };
  var xr = (t2) => {
    var e2 = false;
    return function() {
      if (!e2) {
        e2 = true;
        return t2.apply(this, arguments);
      }
    };
  };
  var jn = (e2, t2) => !e2 ? t2 : function() {
    try {
      return t2.apply(this, arguments);
    } catch (a2) {
      e2.call(this, a2);
      return;
    }
  };
  var Dt = (e2) => {
    let t2 = xe().iterator;
    e2[t2] = function() {
      return this;
    }, t2 = (() => {
      var e3 = globalThis.Iterator;
      return e3 ? e3.prototype : { __proto__: null };
    })();
    return Ce(ee().create(t2), e2);
  };
  var Je = (e2, t2, r2, n2) => {
    var a2 = (0, function() {
      var a3 = n2 == null ? this : n2;
      return Mr(e2, r2, t2, a3, arguments);
    });
    a2.isMobxAction = true, a2.toString = function() {
      return t2.toString();
    }, rn && (sr.value = e2, se(a2, "name", sr));
    return a2;
  };
  var ft = (e2, t2) => {
    if (e2 == null || "object" != typeof e2 || !zt(e2)) return e2;
    if (re(e2, "isMobXObservableValue") || re(e2, "isMobXComputedValue")) return ft(e2.get(), t2);
    if (t2.has(e2)) return t2.get(e2);
    if (me(e2)) {
      var n2 = [];
      t2.set(e2, n2);
      var a2, i2, r2 = 0;
      while (r2 < Q(e2.length)) n2[r2] = ft(e2[r2], t2), r2 = r2 + 1 | 0;
      return n2;
    }
    if (pe(e2)) {
      r2 = new globalThis.Set(), t2.set(e2, r2), n2 = ye(e2.values()), e2 = 0;
      while (e2 < n2.length) r2.add(ft(n2[e2], t2)), e2 = e2 + 1 | 0;
      return r2;
    }
    if (ve(e2)) {
      n2 = new (Oe())(), t2.set(e2, n2), r2 = ye(e2.entries()), e2 = 0;
      while (e2 < r2.length) a2 = r2[e2][0], n2.set(a2, ft(r2[e2][1], t2)), e2 = e2 + 1 | 0;
      return n2;
    }
    a2 = {};
    t2.set(e2, a2), n2 = Or(e2), r2 = 0;
    while (r2 < n2.length) i2 = ee().prototype.propertyIsEnumerable, Z(i2.call(e2, n2[r2])) && (i2 = n2[r2], a2[i2] = ft(e2[n2[r2]], t2)), r2 = r2 + 1 | 0;
    return a2;
  };
  var dn = (e2) => {
    var r2 = ee().keys(e2), t2 = ee().getOwnPropertySymbols(e2);
    if (0 == t2.length) return r2;
    var a2 = Qe.call(r2), i2 = t2.length;
    r2 = 0;
    while (r2 < i2) {
      var n2 = t2[r2];
      Z(ee().prototype.propertyIsEnumerable.call(e2, n2)) && a2.push(n2), r2 = r2 + 1 | 0;
    }
    return a2;
  };
  var Ie = (e2, t2) => Ce(function(a2, r2) {
    if (r2 && "string" == typeof r2.kind) return t2(e2, a2, r2);
  }, e2);
  var Rr = (e2) => {
    !e2.onBOL || (e2 = e2.onBOL, e2.forEach(function(t2) {
      t2();
    }));
  };
  var Dr = (e2) => {
    !e2.onBUOL || (e2 = e2.onBUOL, e2.forEach(function(t2) {
      t2();
    }));
  };
  var zr = (e2, t2) => {
    e2.interceptors_ === void 0 && (e2.interceptors_ = []), e2 = e2.interceptors_, e2.push(t2);
    return xr(function() {
      var r2 = +e2.indexOf(t2) | 0;
      r2 != -1 && e2.splice(r2, 1);
    });
  };
  var mt = (e2, t2) => {
    e2.changeListeners_ === void 0 && (e2.changeListeners_ = []), e2 = e2.changeListeners_, e2.push(t2);
    return xr(function() {
      var r2 = +e2.indexOf(t2) | 0;
      r2 != -1 && e2.splice(r2, 1);
    });
  };
  var Be = (e2) => {
    e2 = e2.changeListeners_ !== void 0 && e2.changeListeners_.length > 0;
    return e2;
  };
  var Ee = (e2) => {
    e2 = e2.interceptors_ !== void 0 && e2.interceptors_.length > 0;
    return e2;
  };
  var Re = (e2, t2) => {
    try {
      var N2 = [];
      !e2.interceptors_ || (N2 = e2.interceptors_);
      var z2 = Qe.call(N2), I2 = z2.length, K = 0;
      while (K < I2) {
        t2 = z2[K](t2), t2 && !t2.type && le(14);
        if (!t2) break;
        K = K + 1 | 0;
      }
      return t2;
    } finally {
      je(Ue());
    }
  };
  var Me = (e2, t2) => {
    var r2 = Ue();
    e2 = e2.changeListeners_;
    if (!e2) {
      je(r2);
      return;
    }
    var n2 = Qe.call(e2), a2 = n2.length;
    e2 = 0;
    while (e2 < a2) n2[e2](t2), e2 = e2 + 1 | 0;
    je(r2);
  };
  var Ge = (e2, t2) => {
    t2.prototype["isMobX" + e2] = true;
  };
  var Te = (e2, t2) => {
    let r2 = [];
    r2.push(t2), rt(e2, r2);
  };
  var Ce = (e2, t2) => ee().assign(e2, t2);
  var re = (e2, t2) => gt(e2) && true === e2[t2];
  var Bt = (e2) => gt(e2) && true === e2.isMobXCaughtException;
  var nt = (e2) => te(e2) && true === e2.isMobxAction;
  var ct = (e2) => e2 == null ? false : true === e2.isMobXFlow;
  var _t = (e2) => e2 == null ? false : "[object Set]" == ee().prototype.toString.call(e2) + "";
  var vt = (e2) => e2 == null ? false : "[object Map]" == ee().prototype.toString.call(e2) + "";
  var pt = (e2, t2, r2, n2, a2) => {
    if (e2 === t2) {
      if (0 !== e2) return true;
      r2 = 1 / Fe(e2) | 0, tt(r2, 1 / Fe(t2) | 0) ? e2 = true : (e2 = Fe(e2), e2 = tt(e2, Fe(t2)));
      return e2;
    }
    if (e2 == null || t2 == null) return false;
    if (e2 !== e2) return t2 !== t2;
    var i2 = typeof e2;
    if ("function" != i2 && "object" != i2 && "object" != typeof t2) return false;
    i2 = ee().prototype.toString.call(e2) + "";
    if (i2 != ee().prototype.toString.call(t2) + "") return false;
    if ("[object RegExp]" == i2 || "[object String]" == i2) {
      e2 = "" + e2;
      return e2 == "" + t2;
    }
    if ("[object Number]" == i2) {
      e2 = Fe(e2), t2 = Fe(t2);
      if (!tt(e2, e2)) return !tt(t2, t2);
      if (0 === e2) {
        e2 = 1 / +e2;
        return tt(e2, 1 / +t2);
      }
      return e2 === t2;
    }
    if ("[object Date]" == i2 || "[object Boolean]" == i2) {
      e2 = Fe(e2);
      return e2 === Fe(t2);
    }
    if ("[object Symbol]" == i2) {
      e2 = globalThis.Symbol.valueOf.call(e2);
      return e2 === globalThis.Symbol.valueOf.call(t2);
    }
    ("[object Map]" == i2 || "[object Set]" == i2) && r2 >= 0 && (r2 = r2 + 1 | 0);
    var o2 = Kr(e2);
    e2 = Kr(t2);
    var s2 = "[object Array]" == i2;
    if (!s2) {
      if ("object" != typeof o2 || "object" != typeof e2) return false;
      t2 = o2.constructor, i2 = e2.constructor;
      if (t2 !== i2 && !(te(t2) && Ir(t2, t2) && te(i2) && Ir(i2, i2)) && Z("constructor" in o2) && Z("constructor" in e2)) return false;
    }
    if (0 == r2) return false;
    else {
      r2 < 0 && (r2 = -1);
    }
    n2 === void 0 && (n2 = [], a2 = []);
    t2 = n2.length;
    while (t2 > 0) {
      t2 = t2 - 1 | 0;
      if (n2[t2] === o2) return a2[t2] === e2;
    }
    n2.push(o2);
    a2.push(e2);
    if (s2) {
      t2 = o2.length;
      if (t2 != e2.length) return false;
      while (t2 > 0) {
        t2 = t2 - 1 | 0, i2 = o2[t2], s2 = e2[t2];
        if (!pt(i2, s2, r2 - 1 | 0, n2, a2)) return false;
      }
    } else {
      var u2 = ee().keys(o2);
      s2 = u2.length;
      if (ee().keys(e2).length != s2) return false;
      i2 = 0;
      while (i2 < s2) {
        t2 = u2[i2];
        if (Ke.call(e2, t2)) {
          var l2 = o2[t2];
          t2 = e2[t2], t2 = pt(l2, t2, r2 - 1 | 0, n2, a2);
        } else {
          t2 = false;
        }
        if (!t2) return false;
        i2 = i2 + 1 | 0;
      }
    }
    n2.pop();
    a2.pop();
    return true;
  };
  var Ar = (e2) => {
    if (e2 == null) return false;
    e2 = e2.constructor;
    return !e2 ? false : "GeneratorFunction" == e2.name + "" ? true : "GeneratorFunction" == e2.displayName + "" ? true : false;
  };
  var qe = (e2) => {
    if (!gt(e2)) return false;
    var t2 = ee().getPrototypeOf(e2);
    if (t2 == null) return true;
    e2 = void 0, !Ke.call(t2, "constructor") || (e2 = t2.constructor), e2 = te(e2) && e2.toString() === tn;
    return e2;
  };
  var Ir = (e2, t2) => {
    if (!e2) return false;
    if (te(e2.isPrototypeOf)) return Z(e2.isPrototypeOf(t2));
    e2 = Z("constructor" in t2) && Z(t2.constructor == e2);
    return e2;
  };
  var rr = (e2, t2) => te(e2.has) ? Z(e2.has(t2)) : false;
  var it = (e2, t2) => {
    if (te(e2.forEach)) {
      e2.forEach(t2);
      return;
    }
    if (te(e2.keys)) {
      e2 = e2.keys();
      var r2 = e2.next();
      while (!r2.done) t2(r2.value), r2 = e2.next();
    }
  };
  var Nt = (e2, t2) => e2.dehancer !== void 0 ? e2.dehancer(t2) : t2;
  var Fe = (e2) => globalThis.Number(e2);
  var ye = (e2) => globalThis.Array.from(e2);
  var xe = () => globalThis.Symbol;
  var Pe = () => globalThis.Reflect;
  var Oe = () => globalThis.Map;
  var ee = () => globalThis.Object;
  var Sr = (e2) => {
    throw new globalThis.TypeError(e2);
  };
  var rt = (e2, t2) => {
    t2 = t2.length > 0 ? " " + t2.map(globalThis.String).join(",") : "", e2 = "[MobX] minified error nr: " + e2 + t2 + ". See mobx.js.org/errors", Rt(new globalThis.Error(e2));
  };
  var Ae = (e2) => "string" == typeof e2 ? e2 + "" : "symbol" == typeof e2 ? e2.toString() + "" : new globalThis.String(e2) + "";
  var G = (e2) => e2.proxy_ ? e2.proxy_ : e2.target_;
  var Tr = (e2, t2) => {
    e2.observers_.delete(t2), e2.observers_.size || Cr(e2);
  };
  var tt = (e2, t2) => Z(Zr(e2, t2));
  var se = (e2, t2, r2) => {
    ee().defineProperty(e2, t2, r2);
  };
  var Fr = (e2, t2, r2) => {
    true === r2 && (r2 = e2.defaultAnnotation_);
    if (false !== r2) {
      if (!Z(t2 in e2.target_)) {
        var n2 = e2.name_ + ".", i2 = n2 + Ae(t2);
        n2 = [], n2.push(r2.annotationType_), n2.push(i2), rt(1, n2);
      }
      for (n2 = e2.target_; ; ) {
        a = n2 && n2 !== ee().prototype;
        if (!a) break;
        if (a = ee().getOwnPropertyDescriptor(n2, t2)) {
          a = r2.make_(e2, t2, a, n2);
          if (0 === a) return;
          if (1 === a) break;
        }
        n2 = ee().getPrototypeOf(n2);
      }
    }
  };
  var wt = (e2, t2) => ({ annotationType_: e2, options_: t2, make_: pn, extend_: fn });
  var Kt = (e2, t2) => ({ annotationType_: e2, options_: t2, make_: Vt, extend_: cn });
  var It = (e2) => true === e2.deep ? et : false === e2.deep ? dt : e2.defaultDecorator && e2.defaultDecorator.options_ && e2.defaultDecorator.options_.enhancer_ ? e2.defaultDecorator.options_.enhancer_ : et;
  var nr = (e2, t2, r2, n2) => {
    e2 = lt(e2)[$], e2.lazyObservableKeys_ || (e2.lazyObservableKeys_ = new (Oe())());
    var a2 = e2.lazyObservableKeys_;
    a2.set(r2, function() {
      var a3, i2 = et;
      t2.options_ && t2.options_.enhancer_ && (i2 = t2.options_.enhancer_), a3 = "ObservableObject." + Ae(r2);
      return new ue(n2, i2, a3, false);
    });
    return e2;
  };
  var Ur = (e2, t2, r2, n2, a2) => {
    var i2 = n2.value;
    t2.options_ && t2.options_.bound && (i2 = i2.bind(G(e2)));
    var o2 = Ae(r2);
    t2.options_ && t2.options_.name && (o2 = t2.options_.name + ""), r2 = t2.options_ && t2.options_.autoAction;
    var s2 = void 0;
    t2.options_ && t2.options_.bound && (s2 = G(e2)), a2 ? (e2 = !!e2.isPlainObject_, t2 = false) : (e2 = true, t2 = true);
    return { __proto__: null, value: Je(o2, i2, r2, s2), configurable: e2, enumerable: false, writable: t2 };
  };
  var Wr = (e2, t2, r2, n2) => {
    t2 = t2.value, ct(t2) || (t2 = Ze(t2)), r2 && (t2 = t2.bind(G(e2)), t2.isMobXFlow = true), n2 ? (e2 = !!e2.isPlainObject_, r2 = false) : (e2 = true, r2 = true);
    return { __proto__: null, value: t2, configurable: e2, enumerable: false, writable: r2 };
  };
  var Xr = (e2, t2, r2, n2) => {
    if (Ke.call(e2.target_, t2)) {
      if (e2.values_.has(t2)) return e2.setObservablePropValue_(t2, r2);
      if (n2) {
        e2 = e2.target_;
        return Z(Pe().set(e2, t2, r2));
      }
      e2.target_[t2] = r2;
      return true;
    }
    return e2.extend_(t2, { __proto__: null, value: r2, enumerable: true, writable: true, configurable: true }, e2.defaultAnnotation_, n2);
  };
  var ze = (e2, t2, r2) => {
    se(e2, t2, { __proto__: null, configurable: true, get: function() {
      return 0 != (this.flags_ & r2);
    }, set: function(t3) {
      var n2 = this.flags_;
      t3 ? this.flags_ = n2 | r2 : this.flags_ = n2 & (r2 ^ -1);
    } });
  };
  var Lr = (e2) => {
    var t2 = vr.get(e2);
    if (t2) return t2;
    t2 = { __proto__: null, get: function() {
      return this[$].getObservablePropValue_(e2);
    }, set: function(r2) {
      return this[$].setObservablePropValue_(e2, r2);
    } }, vr.set(e2, t2);
    return t2;
  };
  var Yr = (e2) => {
    var t2 = { __proto__: null, name: e2.name_ };
    if (((e3) => {
      e3 = e3.observers_ && e3.observers_.size;
      return e3;
    })(e2)) {
      var r2 = ye(e2.observers_.values()), n2 = [];
      e2 = 0;
      while (e2 < r2.length) n2.push(Yr(r2[e2])), e2 = e2 + 1 | 0;
      t2.observers = n2;
    }
    return t2;
  };
  var Qr = (e2) => {
    var t2, n2, r2 = { __proto__: null, name: e2.name_ };
    if (e2.observing_ && e2.observing_.length > 0) {
      n2 = [], t2 = 0;
      while (t2 < e2.observing_.length) n2.push(Qr(e2.observing_[t2])), t2 = t2 + 1 | 0;
      r2.dependencies = n2;
    }
    return r2;
  };
  var tr = (e2) => {
    var r2 = e2.observing_;
    e2.observing_ = [];
    var t2 = r2.length;
    while (t2 > 0) t2 = t2 - 1 | 0, Tr(r2[t2], e2);
    e2.dependenciesState_ = -1;
  };
  var jr = (e2) => {
    if (0 != Q(e2.dependenciesState_)) {
      e2.dependenciesState_ = 0;
      var t2 = e2.observing_;
      e2 = t2.length;
      while (e2 > 0) e2 = e2 - 1 | 0, t2[e2].lowestObserverState_ = 0;
    }
  };
  var Vr = (e2) => {
    if (2 !== e2.lowestObserverState_) e2.lowestObserverState_ = 2, e2 = e2.observers_, e2.forEach(nn);
  };
  var er = (e2) => {
    var t2 = Q(e2.dependenciesState_);
    if (0 == t2) return false;
    if (t2 == -1 || 2 == t2) return true;
    if (1 == t2) {
      t2 = true, t2 = Ue();
      var r2, a2 = e2.observing_, i2 = a2.length, n2 = 0;
      while (n2 < i2) {
        r2 = a2[n2];
        if (re(r2, "isMobXComputedValue")) {
          if (true === J.disableErrorBoundaries) r2.get();
          else {
            try {
              r2.get();
            } catch {
              je(t2);
              return true;
            }
          }
          if (2 === e2.dependenciesState_) {
            je(t2);
            return true;
          }
        }
        n2 = n2 + 1 | 0;
      }
      jr(e2);
      je(t2);
      return false;
    }
    return false;
  };
  var Er = (e2, t2, r2) => {
    var n2 = true;
    jr(e2), n2 = 0 != Q(e2.runId_) ? e2.observing_.length : 100, e2.newObserving_ = new globalThis.Array(n2), e2.unboundDepsCount_ = 0, n2 = Q(J.runId) + 1 | 0, J.runId = n2, e2.runId_ = n2, n2 = J.trackingDerivation, J.trackingDerivation = e2, J.inBatch++;
    var Z2;
    if (true === J.disableErrorBoundaries) Z2 = t2.call(r2);
    else {
      try {
        Z2 = t2.call(r2);
      } catch (S2) {
        Z2 = new ht(S2);
      }
    }
    J.inBatch--;
    J.trackingDerivation = n2, ((e3) => {
      var o2 = e3.observing_, r3 = e3.newObserving_;
      e3.observing_ = r3;
      var a2, s2 = Q(e3.unboundDepsCount_), n3 = 0, t3 = 0, i2 = 0;
      while (i2 < s2) a2 = e3.observing_[i2], 0 == Q(a2.diffValue) && (a2.diffValue = 1, t3 != i2 && (e3.observing_[t3] = a2), t3 = t3 + 1 | 0), a2 = a2.dependenciesState_, a2 !== void 0 && Q(a2) > n3 && (n3 = Q(a2)), i2 = i2 + 1 | 0;
      r3.length = t3, e3.newObserving_ = null, a2 = o2.length;
      while (a2 > 0) a2 = a2 - 1 | 0, i2 = o2[a2], 0 == Q(i2.diffValue) && Tr(i2, e3), i2.diffValue = 0;
      while (t3 > 0) t3 = t3 - 1 | 0, a2 = e3.observing_[t3], 1 == Q(a2.diffValue) && (a2.diffValue = 0, ((e4, t4) => {
        e4.observers_.add(t4), Q(e4.lowestObserverState_) > Q(t4.dependenciesState_) && (e4.lowestObserverState_ = t4.dependenciesState_);
      })(a2, e3));
      0 != n3 && (e3.dependenciesState_ = n3, e3.onBecomeStale_());
    })(e2);
    return Z2;
  };
  var Ue = () => {
    let e2 = J.trackingDerivation;
    J.trackingDerivation = null;
    return e2;
  };
  var je = (e2) => {
    J.trackingDerivation = e2;
  };
  var be = (e2) => {
    var t2 = J.trackingDerivation;
    if (t2 != null) {
      var r2 = t2.runId_;
      r2 === e2.lastAccessedBy_ || (e2.lastAccessedBy_ = r2, t2.newObserving_[t2.unboundDepsCount_++] = e2, !e2.isBeingObserved && J.trackingContext && (e2.isBeingObserved = true, e2.onBO()));
      return !!e2.isBeingObserved;
    } else {
      !e2.observers_.size && J.inBatch && Cr(e2);
    }
    return false;
  };
  var ie = () => {
    var e2 = --J.inBatch;
    if (0 == e2) {
      Nr();
      var r2 = J.pendingUnobservations, t2 = 0;
      while (t2 < r2.length) e2 = r2[t2], e2.isPendingUnobservation = false, e2.observers_.size || (!e2.isBeingObserved || (e2.isBeingObserved = false, e2.onBUO()), re(e2, "isMobXComputedValue") && e2.suspend_()), t2 = t2 + 1 | 0;
      J.pendingUnobservations = [];
    }
  };
  var Cr = (e2) => {
    e2.isPendingUnobservation || (e2.isPendingUnobservation = true, J.pendingUnobservations.push(e2));
  };
  var L = () => {
    let e2 = null;
    return { version: 7, UNCHANGED: {}, trackingDerivation: e2, trackingContext: e2, runId: 0, mobxGuid: 0, inBatch: 0, pendingUnobservations: [], pendingReactions: [], isRunningReactions: false, allowStateChanges: false, allowStateReads: true, enforceActions: true, spyListeners: [], globalReactionErrorHandlers: [], computedRequiresReaction: false, reactionRequiresObservable: false, observableRequiresReaction: false, disableErrorBoundaries: false, suppressReactionErrors: false, safeDescriptors: true };
  };
  var Pr = (e2, t2) => {
    var a2 = J.trackingDerivation;
    e2 = !t2 || a2 == null, ae();
    var r2 = !!J.allowStateChanges;
    e2 && Ue();
    var n2 = !!J.allowStateReads;
    t2 = Lt, Lt = Lt + 1 | 0;
    var i2 = Ot;
    Ot = t2;
    return { runAsAction_: e2, prevDerivation_: a2, prevAllowStateChanges_: r2, prevAllowStateReads_: n2, notifySpy_: false, startTime_: 0, actionId_: t2, parentActionId_: i2 };
  };
  var Br = (e2) => {
    Ot != Q(e2.actionId_) && le(30), Ot = Q(e2.parentActionId_), e2.error_ === void 0 || (J.suppressReactionErrors = true), ie(), !e2.runAsAction_ || je(e2.prevDerivation_), J.suppressReactionErrors = false;
  };
  var at = (e2) => {
    var h2 = true;
    ae();
    try {
      return e2();
    } finally {
      ie(), je(Ue());
    }
  };
  var Mr = (e2, t2, r2, n2, a2) => {
    var v2 = Pr(e2, t2, n2, a2);
    try {
      return r2.apply(n2, a2);
    } catch (e3) {
      v2.error_ = e3;
      throw e3;
    } finally {
      Br(v2);
    }
  };
  var Rt = (e2) => {
    throw e2;
  };
  var Ke = globalThis.Object.prototype.hasOwnProperty;
  var Zr = globalThis.Object.is;
  var Qe = globalThis.Array.prototype.slice;
  var en = globalThis.Object.prototype.isPrototypeOf;
  var tn = ee().toString();
  var st = (0, function() {
  });
  var e = [];
  ee().freeze(e);
  var ar = e;
  e = { __proto__: null }, ee().freeze(e);
  var ir = e;
  var $ = xe()("mobx administration");
  var Ot = 0;
  var Lt = 1;
  var St = true;
  var or = false;
  var sr = { __proto__: null, value: "action", configurable: true, writable: false, enumerable: false };
  var t = function() {
  };
  t = ee().getOwnPropertyDescriptor(t, "name"), e = t != null && t.configurable;
  var rn = e;
  var De = [];
  De.push("mobxGuid"), De.push("spyListeners"), De.push("enforceActions"), De.push("computedRequiresReaction"), De.push("reactionRequiresObservable"), De.push("observableRequiresReaction"), De.push("allowStateReads"), De.push("disableErrorBoundaries"), De.push("runId"), De.push("UNCHANGED");
  var J = (function() {
    var t2, e2 = globalThis;
    e2.__mobxInstanceCount && Q(e2.__mobxInstanceCount) > 0 && !e2.__mobxGlobals && (St = false), t2 = e2.__mobxGlobals, t2 && 7 != Q(t2.version) && (St = false);
    if (!St) {
      e2 = function() {
        or || le(35);
      }, t2 = globalThis.setTimeout, t2(e2, 1);
      return L();
    } else {
      if (t2) {
        e2.__mobxInstanceCount++, t2.UNCHANGED || (t2.UNCHANGED = {});
        return t2;
      }
    }
    e2.__mobxInstanceCount = 1;
    t2 = L(), e2.__mobxGlobals = t2;
    return t2;
  })();
  var Xt = (0, function(t2, r2) {
    return tt(t2, r2);
  });
  e = true;
  var r = (0, function(t2) {
    globalThis.console.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
  });
  var nn = (0, function(t2) {
    t2.dependenciesState_ || t2.onBecomeStale_(), t2.dependenciesState_ = 2;
  });
  var an = (0, function(t2) {
    t2.dependenciesState_ || (t2.dependenciesState_ = 1, t2.onBecomeStale_());
  });
  var At = void 0;
  var on = (0, function(t2) {
    var e2 = t2.dependenciesState_;
    1 === e2 ? t2.dependenciesState_ = 2 : e2 || (At.lowestObserverState_ = 0);
  });
  var n = (0, function(t2) {
    try {
      return t2();
    } finally {
      je(Ue());
    }
  });
  var ur = (0, function() {
    var e2 = arguments[0];
    e2 = !!e2;
    var r2 = !!J.allowStateChanges;
    J.allowStateChanges = e2;
    try {
      return arguments[1]();
    } finally {
      J.allowStateChanges = r2;
    }
  });
  var ht = (0, function(t2) {
    return this.cause = t2, this;
  });
  se(ht, "name", { __proto__: null, value: "CaughtException", configurable: e }), ht.prototype.isMobXCaughtException = e;
  var ge = (0, function(s2) {
    var t2 = arguments.length > 0 && s2 !== void 0 ? s2 + "" : "Atom";
    this.name_ = t2, this.observers_ = new globalThis.Set(), this.lastAccessedBy_ = 0, this.lowestObserverState_ = -1, this.flags_ = 0;
    return this;
  });
  t = ge.prototype, t.onBO = function() {
    Rr(this);
  }, t = ge.prototype, t.onBUO = function() {
    Dr(this);
  }, t = ge.prototype, t.reportObserved = function() {
    return be(this);
  }, t = ge.prototype, t.reportChanged = function() {
    Ve(this);
  }, t = ge.prototype, t.toString = function() {
    return this.name_;
  }, Ge("Atom", ge), ze(t, "isBeingObserved", 1), ze(t, "isPendingUnobservation", 2), t = ge.prototype, se(t, "diffValue", { __proto__: null, configurable: e, get: function() {
    return 0 != (this.flags_ & 4) ? 1 : 0;
  }, set: function(r2) {
    var n2 = this.flags_;
    1 == Q(r2) ? this.flags_ = n2 | 4 : this.flags_ = n2 & (4 ^ -1);
  } });
  var qt = (0, function(o2, c2, h2) {
    if (arguments.length > 0 && o2 !== void 0) {
      var e2 = ge;
      e2 = new e2(o2);
    } else {
      e2 = new ge();
    }
    var r2 = st;
    arguments.length > 1 && (r2 = c2);
    var n2 = st;
    arguments.length > 2 && (n2 = h2), r2 === st || (e2.onBOL = new globalThis.Set(), e2.onBOL.add(r2)), n2 === st || (e2.onBUOL = new globalThis.Set(), e2.onBUOL.add(n2));
    return e2;
  });
  var Ut = (e2) => e2();
  var sn = () => {
    J.isRunningReactions = true;
    var r2, n2, e2 = J.pendingReactions, t2 = 0;
    while (e2.length > 0) {
      t2 = t2 + 1 | 0, 100 == t2 && (r2 = "[mobx] cycle in reaction: " + e2[0], globalThis.console.error(r2), e2.splice(0, e2.length)), n2 = e2.splice(0, e2.length), r2 = 0;
      while (r2 < n2.length) n2[r2].runReaction_(), r2 = r2 + 1 | 0;
    }
    J.isRunningReactions = false;
  };
  var _e = (0, function(s2, v2, p2, g2) {
    var r2 = arguments.length > 0 && s2 !== void 0 ? s2 + "" : "Reaction";
    this.name_ = r2, this.onInvalidate_ = void 0, arguments.length > 1 && (this.onInvalidate_ = v2), arguments.length > 2 && p2 && (this.errorHandler_ = p2), arguments.length > 3 && g2 !== void 0 && (this.requiresObservable_ = g2), this.observing_ = [], this.newObserving_ = null, this.dependenciesState_ = -1, this.runId_ = 0, this.unboundDepsCount_ = 0, this.flags_ = 0;
    return this;
  });
  t = _e.prototype, t.onBecomeStale_ = function() {
    this.schedule_();
  }, t = _e.prototype, t.schedule_ = function() {
    this.isScheduled || (this.isScheduled = true, J.pendingReactions.push(this), Nr());
  }, t = _e.prototype, t.runReaction_ = function() {
    if (!this.isDisposed) {
      ae(), this.isScheduled = false;
      var t2 = J.trackingContext;
      J.trackingContext = this;
      if (er(this)) {
        this.isTrackPending = true;
        try {
          this.onInvalidate_();
          var r2, e2 = false;
          if (e2) {
          }
        } catch (r3) {
          this.reportExceptionInDerivation_(r3);
        }
      }
      J.trackingContext = t2;
      ie();
    }
  }, t = _e.prototype, t.track = function(t2) {
    if (!this.isDisposed) {
      ae(), this.isRunning = true;
      var r2 = J.trackingContext;
      J.trackingContext = this, t2 = Er(this, t2, void 0), J.trackingContext = r2, this.isRunning = false, this.isTrackPending = false, !this.isDisposed || tr(this), Bt(t2) && this.reportExceptionInDerivation_(t2.cause), ie();
    }
  }, t = _e.prototype, t.reportExceptionInDerivation_ = function(t2) {
    if (this.errorHandler_) {
      var r2 = this.errorHandler_;
      r2(t2, this);
      return;
    }
    !J.disableErrorBoundaries || Rt(t2);
    r2 = "[mobx] uncaught error in '" + this + "'", J.suppressReactionErrors || globalThis.console.error(r2, t2);
    var n2 = J.globalReactionErrorHandlers, a2 = n2.length;
    r2 = 0;
    while (r2 < a2) n2[r2](t2, this), r2 = r2 + 1 | 0;
  }, t = _e.prototype, t.dispose = function() {
    this.isDisposed || (this.isDisposed = true, this.isRunning || (ae(), tr(this), ie()));
  }, t = _e.prototype, t.getDisposer_ = function(r2) {
    var t2 = this, e2 = () => {
      t2.dispose(), r2 != null && te(r2.removeEventListener) && r2.removeEventListener("abort", e2);
    };
    r2 != null && te(r2.addEventListener) && r2.addEventListener("abort", e2), e2[$] = t2;
    var n2, a2;
    Z("dispose" in globalThis.Symbol) && "symbol" == typeof globalThis.Symbol.dispose && (n2 = e2, a2 = globalThis.Symbol.dispose, n2[a2] = e2);
    return e2;
  }, t = _e.prototype, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, Ge("Reaction", _e), ze(t, "isDisposed", 1), ze(t, "isScheduled", 2), ze(t, "isTrackPending", 4), ze(t, "isRunning", 8), t = _e.prototype, se(t, "diffValue", { __proto__: null, configurable: e, get: function() {
    return 0 != (this.flags_ & 16) ? 1 : 0;
  }, set: function(r2) {
    var n2 = this.flags_;
    1 == Q(r2) ? this.flags_ = n2 | 16 : this.flags_ = n2 & (16 ^ -1);
  } });
  var a = (0, function(t2) {
    J.globalReactionErrorHandlers.push(t2);
    return function() {
      var c2 = +J.globalReactionErrorHandlers.indexOf(t2) | 0;
      c2 >= 0 && J.globalReactionErrorHandlers.splice(c2, 1);
    };
  });
  var oe = (0, function(t2) {
    t2.get || le(31), this.derivation = t2.get;
    var r2 = t2.name ? t2.name + "" : "ComputedValue";
    this.name_ = r2, t2.set ? (r2 = t2.set, this.setter_ = Je("ComputedValue-setter", r2, false, void 0)) : this.setter_ = void 0, this.equals_ = Xt, !t2.equals || (this.equals_ = t2.equals), this.scope_ = t2.context, this.requiresReaction_ = t2.requiresReaction, this.keepAlive_ = !!t2.keepAlive, this.dependenciesState_ = -1, this.observing_ = [], t2 = null, this.newObserving_ = t2, this.observers_ = new globalThis.Set(), this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = 0, this.unboundDepsCount_ = 0, this.value_ = new ht(t2), this.flags_ = 0;
    return this;
  });
  t = oe.prototype, t.onBecomeStale_ = function() {
    ((e2) => {
      if (!e2.lowestObserverState_) e2.lowestObserverState_ = 1, e2 = e2.observers_, e2.forEach(an);
    })(this);
  }, t = oe.prototype, t.onBO = function() {
    Rr(this);
  }, t = oe.prototype, t.onBUO = function() {
    Dr(this);
  }, t = oe.prototype, t.computeValue_ = function(t2) {
    this.isComputing = true;
    var S2, r2 = false;
    if (t2) t2 = this.derivation, S2 = Er(this, t2, this.scope_);
    else {
      if (true === J.disableErrorBoundaries) t2 = this.derivation, S2 = t2.call(this.scope_);
      else {
        try {
          t2 = this.derivation, S2 = t2.call(this.scope_);
        } catch (_2) {
          S2 = new ht(_2);
        }
      }
    }
    this.isComputing = false;
    return S2;
  }, t = oe.prototype, t.trackAndCompute = function() {
    var n2 = this.value_, t2 = Q(this.dependenciesState_) == -1, r2 = this.computeValue_(true);
    t2 = t2 || Bt(n2) || Bt(r2) || !Z(this.equals_(n2, r2)), t2 && (this.value_ = r2);
    return t2;
  }, t = oe.prototype, t.get = function() {
    if (this.isComputing) {
      var r2 = this.name_, n2 = this.derivation, t2 = [];
      t2.push(r2), t2.push(n2), rt(32, t2);
    }
    if (!J.inBatch && !this.observers_.size && !this.keepAlive_) er(this) && (ae(), this.value_ = this.computeValue_(false), ie());
    else be(this), er(this) && (t2 = J.trackingContext, this.keepAlive_ && !t2 && (J.trackingContext = this), !this.trackAndCompute() || ((e3) => {
      if (2 !== e3.lowestObserverState_) {
        e3.lowestObserverState_ = 2;
        var t3 = At;
        At = e3, e3 = e3.observers_, e3.forEach(on), At = t3;
      }
    })(this), J.trackingContext = t2);
    var e2 = this.value_;
    Bt(e2) && Rt(e2.cause);
    return e2;
  }, t = oe.prototype, t.set = /* @__PURE__ */ ((e2) => function(a2) {
    return e2(this, a2);
  })((e2, t2) => {
    if (e2.setter_) {
      !e2.isRunningSetter || Te(33, e2.name_), e2.isRunningSetter = true;
      try {
        var r2 = e2.setter_;
        r2.call(e2.scope_, t2);
      } finally {
        e2.isRunningSetter = false;
      }
    } else Te(34, e2.name_);
  }), t = oe.prototype, t.suspend_ = function() {
    this.keepAlive_ || (tr(this), this.value_ = void 0);
  }, t = oe.prototype, t.warnAboutUntrackedRead_ = function() {
  }, t = oe.prototype, t.toString = function() {
    let t2 = this.name_ + "[";
    return t2 + this.derivation.toString() + "]";
  }, t = oe.prototype, t.valueOf = function() {
    return kr(this.get());
  }, t = oe.prototype;
  var i = xe().toPrimitive;
  t[i] = function() {
    return this.valueOf();
  }, Ge("ComputedValue", oe), ze(t, "isComputing", 1), ze(t, "isRunningSetter", 2), ze(t, "isBeingObserved", 4), ze(t, "isPendingUnobservation", 8), t = oe.prototype, se(t, "diffValue", { __proto__: null, configurable: e, get: function() {
    return 0 != (this.flags_ & 16) ? 1 : 0;
  }, set: function(r2) {
    var n2 = this.flags_;
    1 == Q(r2) ? this.flags_ = n2 | 16 : this.flags_ = n2 & (16 ^ -1);
  } });
  var un = (0, function() {
    var e2, t2;
    (0 != J.pendingReactions.length || 0 != Q(J.inBatch) || J.isRunningReactions) && le(36), or = true, St && (e2 = globalThis, t2 = --e2.__mobxInstanceCount, 0 == t2 && (e2.__mobxGlobals = void 0), J = L());
  });
  i = (0, function() {
    return J;
  });
  var o = (0, function() {
    var e2, i2, r2 = L(), n2 = ee().keys(r2), a2 = n2.length, t2 = 0;
    while (t2 < a2) e2 = n2[t2], (+De.indexOf(e2) | 0) == -1 && (i2 = J, i2[e2] = r2[e2]), t2 = t2 + 1 | 0;
    J.allowStateChanges = !J.enforceActions;
  });
  var s = (0, function(r2, i2) {
    var e2 = void 0;
    arguments.length > 1 && (e2 = i2), ae();
    try {
      return r2.apply(e2);
    } finally {
      ie();
    }
  });
  var Y = void 0;
  var kt = void 0;
  var ut = void 0;
  var Ye;
  var xt = void 0;
  var Wt = void 0;
  var Ze = void 0;
  var Ht = void 0;
  var lr = void 0;
  var Ct = void 0;
  var et = void 0;
  var Tt = [];
  var dt = (0, function(t2) {
    return t2;
  });
  var ue = (0, function(i2, n2, l2, k2, d2) {
    var a2, r2 = arguments.length > 2 && l2 !== void 0 ? l2 + "" : "ObservableValue";
    arguments.length > 3 && k2, a2 = Xt, arguments.length > 4 && d2 && (a2 = d2), ge.call(this, r2), this.enhancer_ = n2, this.name_ = r2, this.equals_ = a2, this.hasUnreportedChange_ = false, this.value_ = n2(i2, void 0, r2);
    return this;
  });
  t = ue.prototype;
  var u = ge.prototype;
  ee().setPrototypeOf(t, u), t = ue.prototype, t.constructor = ue, t = ue.prototype, t.prepareNewValue_ = function(t2) {
    if (Ee(this)) {
      t2 = Re(this, { __proto__: null, object: this, type: "update", newValue: t2 });
      if (!t2) return J.UNCHANGED;
      t2 = t2.newValue;
    }
    var n2 = this.value_;
    t2 = this.enhancer_(t2, n2, this.name_);
    return Z(this.equals_(n2, t2)) ? J.UNCHANGED : t2;
  }, t = ue.prototype, t.setNewValue_ = function(t2) {
    var r2 = this.value_;
    this.value_ = t2, Ve(this), Be(this) && Me(this, { __proto__: null, type: "update", object: this, newValue: t2, oldValue: r2 });
  }, t = ue.prototype, t.set = function(t2) {
    t2 = this.prepareNewValue_(t2), t2 === J.UNCHANGED || this.setNewValue_(t2);
  }, t = ue.prototype, t.get = function() {
    be(this);
    if (this.dehancer === void 0) return this.value_;
    var t2 = this.dehancer;
    return t2(this.value_);
  }, t = ue.prototype, t.raw = function() {
    return this.value_;
  }, t = ue.prototype, t.toJSON = function() {
    return this.get();
  }, t = ue.prototype, t.toString = function() {
    let t2 = this.name_ + "[";
    return t2 + this.value_ + "]";
  }, t = ue.prototype, t.valueOf = function() {
    return kr(this.get());
  }, t = ue.prototype, u = xe().toPrimitive, t[u] = function() {
    return this.valueOf();
  }, Ge("ObservableValue", ue);
  var vr = new (Oe())();
  var he = (0, function(n2, o2, l2, p2) {
    return this.target_ = n2, arguments.length > 1 && o2 ? this.values_ = o2 : this.values_ = new (Oe())(), this.name_ = l2 + "", this.defaultAnnotation_ = lr, arguments.length > 3 && p2 && (this.defaultAnnotation_ = p2), this.keysAtom_ = new ge("ObservableObject.keys"), this.isPlainObject_ = qe(this.target_), this;
  });
  t = he.prototype, t.materializeLazyComputed_ = function(t2) {
    if (!!this.lazyComputedKeys_) {
      var r2 = this.lazyComputedKeys_.get(t2);
      if (r2) {
        this.lazyComputedKeys_.delete(t2), 0 == (+this.lazyComputedKeys_.size | 0) && (this.lazyComputedKeys_ = void 0), r2 = r2(), this.values_.set(t2, r2);
        return r2;
      }
    }
  }, t = he.prototype, t.materializeLazyObservable_ = function(t2) {
    if (!!this.lazyObservableKeys_) {
      var r2 = this.lazyObservableKeys_.get(t2);
      if (r2) {
        this.lazyObservableKeys_.delete(t2), 0 == (+this.lazyObservableKeys_.size | 0) && (this.lazyObservableKeys_ = void 0), r2 = r2(), this.values_.set(t2, r2);
        return r2;
      }
    }
  }, t = he.prototype, t.getObservablePropValue_ = function(t2) {
    var r2 = this.values_.get(t2);
    r2 = r2 || this.materializeLazyComputed_(t2), r2 = r2 || this.materializeLazyObservable_(t2);
    return r2.get();
  }, t = he.prototype, t.setObservablePropValue_ = function(t2, r2) {
    var n2 = this.values_.get(t2);
    n2 = n2 || this.materializeLazyComputed_(t2), n2 = n2 || this.materializeLazyObservable_(t2);
    if (re(n2, "isMobXComputedValue")) {
      n2.set(r2);
      return true;
    }
    if (Ee(this)) {
      r2 = Re(this, { __proto__: null, type: "update", object: G(this), name: t2, newValue: r2 });
      if (!r2) return null;
      r2 = r2.newValue;
    }
    r2 = n2.prepareNewValue_(r2);
    if (r2 !== J.UNCHANGED) {
      var a2 = Be(this), i2 = null;
      (a2 || false) && (i2 = this.name_, i2 = { __proto__: null, type: "update", observableKind: "object", debugObjectName: i2, object: G(this), oldValue: n2.value_, name: t2, newValue: r2 }), n2.setNewValue_(r2), a2 && Me(this, i2);
    }
    return true;
  }, t = he.prototype, t.get_ = function(t2) {
    if (J.trackingDerivation) {
      var r2 = this.target_;
      r2 = !Ke.call(r2, t2);
    } else {
      r2 = false;
    }
    r2 && this.has_(t2);
    return this.target_[t2];
  }, t = he.prototype, t.set_ = function(t2, r2) {
    return Xr(this, t2, r2, false);
  }, t = he.prototype, t.has_ = function(t2) {
    if (!J.trackingDerivation) return Z(t2 in this.target_);
    this.pendingKeys_ || (this.pendingKeys_ = new (Oe())());
    var r2 = this.pendingKeys_.get(t2);
    r2 = r2 || ue, r2 = new r2(Z(t2 in this.target_), dt, "ObservableObject.key?", false), this.pendingKeys_.set(t2, r2);
    return r2.get();
  }, t = he.prototype, t.extend_ = function() {
    var e2, n2 = arguments[0], a2 = arguments[1], r2 = arguments[2], t2 = arguments.length > 3 && arguments[3];
    true === r2 && (r2 = this.defaultAnnotation_);
    if (false === r2) return this.defineProperty_(n2, a2, t2);
    if (e2 = r2.extend_(this, n2, a2, t2)) {
    }
    return e2;
  }, t = he.prototype, t.notifyPropertyAddition_ = function(t2, r2) {
    var n2 = Be(this);
    (n2 || false) && (r2 = { __proto__: null, type: "add", observableKind: "object", debugObjectName: this.name_, object: G(this), name: t2, newValue: r2 }, n2 && Me(this, r2)), !this.pendingKeys_ || (t2 = this.pendingKeys_.get(t2), !t2 || t2.set(true)), Ve(this.keysAtom_);
  }, t = he.prototype, t.defineProperty_ = function(t2, r2, n2) {
    n2 = !!n2;
    try {
      ae();
      var X = this.delete_(t2);
      if (!X) return X;
      if (Ee(this)) {
        var a2 = G(this), q = Re(this, { __proto__: null, object: a2, name: t2, type: "add", newValue: r2.value });
        if (!q) return null;
        a2 = r2.value, a2 === q.newValue || (a2 = r2 = Ce({}, r2), r2.value = q.newValue);
      }
      if (n2 && (n2 = this.target_, !Z(Pe().defineProperty(n2, t2, r2)))) return false;
      else {
        n2 = this.target_, se(n2, t2, r2);
      }
      this.notifyPropertyAddition_(t2, r2.value);
    } finally {
      ie();
    }
    return true;
  }, t = he.prototype, t.defineObservableProperty_ = function(r2, ke2, n2, l2) {
    var t2, a2, i2 = arguments.length > 3 && l2;
    try {
      ae();
      var Te2 = this.delete_(r2);
      if (!Te2) return Te2;
      if (Ee(this)) {
        var Ve2 = Re(this, { __proto__: null, object: G(this), name: r2, type: "add", newValue: ke2 });
        if (!Ve2) return null;
        ke2 = Ve2.newValue;
      }
      var je2 = Lr(r2), Be2 = true;
      !J.safeDescriptors || (Be2 = !!this.isPlainObject_), t2 = Be2, a2 = je2.get;
      var Me2 = { __proto__: null, configurable: t2, enumerable: true, get: a2, set: je2.set };
      if (i2 && (t2 = this.target_, !Z(Pe().defineProperty(t2, r2, Me2)))) return false;
      else {
        t2 = this.target_, se(t2, r2, Me2);
      }
      var Ne2 = "ObservableObject.key", ze2 = new ue(ke2, n2, Ne2, false);
      t2 = this.values_, t2.set(r2, ze2), this.notifyPropertyAddition_(r2, ze2.value_);
    } finally {
      ie();
    }
    return true;
  }, t = he.prototype, t.defineComputedProperty_ = function(t2, r2, n2) {
    n2 = !!n2;
    try {
      ae();
      var ve2 = this.delete_(t2);
      if (!ve2) return ve2;
      if (Ee(this)) {
        var pe2 = Re(this, { __proto__: null, object: G(this), name: t2, type: "add", newValue: void 0 });
        if (!pe2) return null;
      }
      r2.name || (r2.name = "ObservableObject.key");
      r2.context = G(this);
      var fe2 = Lr(t2), be2 = true;
      !J.safeDescriptors || (be2 = !!this.isPlainObject_);
      var i2 = fe2.get, ye2 = { __proto__: null, configurable: be2, enumerable: false, get: i2, set: fe2.set };
      if (n2 && (n2 = this.target_, !Z(Pe().defineProperty(n2, t2, ye2)))) return false;
      else {
        n2 = this.target_, se(n2, t2, ye2);
      }
      n2 = this.values_;
      n2.set(t2, new oe(r2)), this.notifyPropertyAddition_(t2, void 0);
    } finally {
      ie();
    }
    return true;
  }, t = he.prototype, t.delete_ = function(t2, r2) {
    var n2 = !!r2;
    r2 = this.target_;
    if (!Ke.call(r2, t2)) return true;
    if (Ee(this) && !Re(this, { __proto__: null, object: G(this), name: t2, type: "remove" })) return null;
    try {
      ae();
      var pt2 = Be(this);
      r2 = false;
      var mt2, ft2 = r2, f2 = this.values_, fe2 = f2.get(t2);
      if (!fe2 && (pt2 || ft2)) {
        r2 = this.target_;
        var wt2 = ee().getOwnPropertyDescriptor(r2, t2);
        wt2 && (mt2 = wt2.value);
      }
      if (n2 && (r2 = this.target_, !Z(Pe().deleteProperty(r2, t2)))) return false;
      else {
        r2 = this.target_, Z(Pe().deleteProperty(r2, t2)) || Sr("Cannot delete property '" + Ae(t2) + "'");
      }
      r2 = false;
      r2 && delete this.appliedAnnotations_[t2], fe2 && (this.values_.delete(t2), re(fe2, "isMobXObservableValue") && (mt2 = fe2.value_), Vr(fe2)), Ve(this.keysAtom_);
      if (this.pendingKeys_) {
        var Rt2 = this.pendingKeys_.get(t2);
        Rt2 && (r2 = Rt2.set, n2 = Rt2, r2.call(n2, Z(t2 in this.target_)));
      }
      if (pt2 || ft2) {
        n2 = this.name_;
        if (t2 = false) {
        }
        pt2 && Me(this, { __proto__: null, type: "remove", observableKind: "object", object: G(this), debugObjectName: n2, oldValue: mt2, name: t2 });
        if (false) {
        }
      }
    } finally {
      ie();
    }
    return true;
  }, t = he.prototype, t.ownKeys_ = function() {
    be(this.keysAtom_);
    let e2 = this.target_;
    return Pe().ownKeys(e2);
  }, t = he.prototype, t.keys_ = function() {
    be(this.keysAtom_);
    let e2 = this.target_;
    return ee().keys(e2);
  }, Ge("ObservableObjectAdministration", he);
  var lt = (0, function(e2, s2) {
    var r2 = void 0;
    arguments.length > 1 && (r2 = s2);
    if (Ke.call(e2, $)) return e2;
    var t2, n2, a2;
    n2 = r2 && r2.name ? r2.name + "" : "ObservableObject", t2 = he, a2 = new (Oe())(), t2 = new t2(e2, a2, n2, ((e3) => {
      if (e3) {
        if (e3.defaultDecorator !== void 0) return e3.defaultDecorator;
        if (e3.autoBind || false === e3.deep) return { annotationType_: "true", options_: e3, make_: _r, extend_: cr };
      }
    })(r2)), se(e2, $, { __proto__: null, enumerable: false, writable: true, configurable: true, value: t2 });
    return e2;
  });
  Tt.push({ __proto__: null, has: function() {
    let e2 = arguments[0];
    e2 = e2[$].has_;
    let r2 = arguments[0];
    r2 = r2[$];
    return e2.call(r2, arguments[1]);
  }, get: function(t2, r2) {
    J.trackingDerivation && !Ke.call(t2, r2) && t2[$].has_(r2);
    return t2[r2];
  }, set: function(t2, r2, n2) {
    if (!Zt(r2)) return false;
    var e2 = Xr(t2[$], r2, n2, true);
    if (e2 == null) return true;
    e2 || Sr("'set' on proxy: trap returned falsish for property '" + Ae(r2) + "'");
    return true;
  }, deleteProperty: function() {
    if (!Zt(arguments[1])) return false;
    var e2 = arguments[0];
    e2 = e2[$].delete_;
    var r2 = arguments[0];
    r2 = r2[$], e2 = e2.call(r2, arguments[1], true);
    return e2 == null ? true : !!e2;
  }, defineProperty: function(t2, r2, n2) {
    var e2 = t2[$].defineProperty_;
    e2 = e2.call(t2[$], r2, n2);
    return e2 == null ? true : !!e2;
  }, ownKeys: function(t2) {
    let e2 = t2[$].ownKeys_;
    return e2.call(t2[$]);
  }, preventExtensions: function(t2) {
    le(13);
    return false;
  } });
  var _r = (0, function() {
    var n2 = arguments[0], a2 = arguments[1], r2 = arguments[2], t2 = arguments[3];
    if (r2.get) {
      var e2 = ut.make_;
      return e2.call(ut, n2, a2, r2, t2);
    }
    if (r2.set) {
      e2 = r2.set, nt(e2) || (e2 = Je(Ae(a2), e2, false, void 0));
      if (t2 === n2.target_) {
        t2 = n2.defineProperty_;
        return n2.defineProperty_(a2, { __proto__: null, configurable: true, set: e2 }) == null ? 0 : 2;
      }
      se(t2, a2, { __proto__: null, configurable: true, set: e2 });
      return 2;
    }
    var i2;
    if (t2 !== n2.target_ && te(r2.value)) {
      if (Ar(r2.value)) {
        i2 = Ze, this.options_ && this.options_.autoBind && (i2 = Ht);
        return i2.make_(n2, a2, r2, t2);
      }
      i2 = xt;
      this.options_ && this.options_.autoBind && (i2 = Wt);
      return i2.make_(n2, a2, r2, t2);
    }
    i2 = Y;
    this.options_ && false === this.options_.deep && (i2 = kt), te(r2.value) && this.options_ && this.options_.autoBind && (e2 = r2.value, r2.value = e2.bind(G(n2)));
    return i2.make_(n2, a2, r2, t2);
  });
  var cr = (0, function() {
    var n2 = arguments[0], a2 = arguments[1], r2 = arguments[2], t2 = arguments[3];
    if (r2.get) return ut.extend_.call(ut, n2, a2, r2, t2);
    if (r2.set) {
      r2 = r2.set;
      return n2.defineProperty_(a2, { __proto__: null, configurable: true, set: Je(Ae(a2), r2, false, void 0) }, t2);
    }
    te(r2.value) && this.options_ && this.options_.autoBind && (i = r2.value, r2.value = i.bind(G(n2)));
    i = Y, this.options_ && false === this.options_.deep && (i = kt);
    return i.extend_(n2, a2, r2, t2);
  });
  lr = { annotationType_: "true", options_: void 0, make_: _r, extend_: cr };
  var de = {};
  Tt.push({ __proto__: null, get: function(t2, r2) {
    var e2 = t2[$];
    if (r2 === $) return e2;
    if ("length" === r2) return e2.getArrayLength_();
    if ("string" == typeof r2 && !Z(globalThis.isNaN(r2))) {
      t2 = e2.get_;
      return e2.get_(globalThis.parseInt(r2));
    }
    return Ke.call(de, r2) ? de[r2] : t2[r2];
  }, set: function(t2, r2, n2) {
    var e2 = t2[$];
    "length" === r2 && e2.setArrayLength_(n2);
    "symbol" == typeof r2 || Z(globalThis.isNaN(r2)) ? t2[r2] = n2 : e2.set_(globalThis.parseInt(r2), n2);
    return true;
  }, preventExtensions: function() {
    le(15);
    return false;
  } });
  var Le = (0, function() {
    var n2, a2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] + "" : "ObservableArray";
    n2 = arguments[1], this.owned_ = false, arguments.length > 2 && (this.owned_ = !!arguments[2]), this.atom_ = new ge(a2), this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0;
    var e2 = "ObservableArray[..]";
    this.enhancer_ = function(r2, a3, i2) {
      return n2(r2, a3, e2);
    };
    return this;
  });
  t = Le.prototype, t.dehanceValue_ = function(t2) {
    return this.dehancer !== void 0 ? this.dehancer(t2) : t2;
  }, t = Le.prototype, t.dehanceValues_ = function(t2) {
    return this.dehancer !== void 0 && t2.length > 0 ? t2.map(this.dehancer) : t2;
  }, t = Le.prototype, t.getArrayLength_ = function() {
    be(this.atom_);
    return this.values_.length;
  }, t = Le.prototype, t.setArrayLength_ = function(t2) {
    ("number" != typeof t2 || Z(globalThis.Number.isNaN(t2)) || Q(t2) < 0) && Te(40, t2), t2 = Q(t2);
    var r2 = this.values_.length;
    if (t2 != r2) {
      if (t2 > r2) {
        var n2 = globalThis.Array;
        t2 = new n2(t2 - r2 | 0), this.spliceWithArray_(r2, 0, t2);
      } else this.spliceWithArray_(t2, r2 - t2 | 0);
    }
  }, t = Le.prototype, t.spliceWithArray_ = function(v2, y2, x2) {
    var n2, a2, r2 = this.values_.length;
    n2 = arguments.length > 0 && v2 !== void 0 ? Q(v2) : 0, r2 = 1 == arguments.length ? r2 - n2 | 0 : arguments.length > 1 && y2 !== void 0 && y2 != null ? Q(y2) : 0, a2 = void 0, arguments.length > 2 && (a2 = x2);
    return Mt(this, n2, r2, a2);
  }, t = Le.prototype, t.get_ = function(t2) {
    be(this.atom_);
    let r2 = this.dehanceValue_;
    return this.dehanceValue_(this.values_[t2]);
  }, t = Le.prototype, t.set_ = function(t2, r2) {
    t2 = Q(t2);
    var n2 = this.values_;
    if (t2 < n2.length) {
      var a2 = n2[t2];
      if (Ee(this)) {
        r2 = Re(this, { __proto__: null, type: "update", object: this.proxy_, index: t2, newValue: r2 });
        if (!r2) return;
        r2 = r2.newValue;
      }
      var i2 = this.enhancer_;
      r2 = i2(r2, a2), r2 === a2 || (n2[t2] = r2, ((e2, t3, r3, n3) => {
        var a3 = Be(e2), i3 = null;
        a3 && (i3 = e2.proxy_, i3 = { __proto__: null, observableKind: "array", object: i3, type: "update", debugObjectName: e2.atom_.name_, index: t3, newValue: r3, oldValue: n3 }), Ve(e2.atom_), a3 && Me(e2, i3);
      })(this, t2, r2, a2));
    } else t2 = t2 + 1 | 0, t2 = new globalThis.Array(t2 - n2.length | 0), t2[t2.length - 1 | 0] = r2, Mt(this, n2.length, 0, t2);
  };
  var ln = (0, function(a2, i2, u2, p2) {
    var e2 = "ObservableArray";
    arguments.length > 2 && u2 !== void 0 && (e2 = u2 + "");
    var t2 = false;
    arguments.length > 3 && (t2 = !!p2);
    return at(function() {
      var l2 = e2, v2 = t2, A2 = new Le(l2, i2, v2), o2 = A2.values_;
      se(o2, $, { __proto__: null, enumerable: false, writable: false, configurable: true, value: A2 }), o2 = A2.values_, o2 = new globalThis.Proxy(o2, Tt[1]), A2.proxy_ = o2, a2 && a2.length > 0 && A2.spliceWithArray_(0, 0, a2);
      return o2;
    });
  });
  Ge("ObservableArrayAdministration", Le), de.clear = function() {
    return this.splice(0);
  }, de.replace = function(t2) {
    let e2 = this[$];
    return e2.spliceWithArray_(0, e2.values_.length, t2);
  }, de.toJSON = function() {
    return this.slice();
  }, de.splice = function(_2, b2) {
    var e2 = this[$];
    return 0 == arguments.length ? [] : 1 == arguments.length ? e2.spliceWithArray_(_2) : 2 == arguments.length ? e2.spliceWithArray_(_2, b2) : e2.spliceWithArray_(_2, b2, Qe.call(arguments, 2, arguments.length));
  }, de.spliceWithArray = function() {
    let r2 = this[$].spliceWithArray_;
    return r2.apply(this[$], arguments);
  }, de.push = function() {
    let e2 = this[$];
    Mt(e2, e2.values_.length, 0, arguments);
    return e2.values_.length;
  }, de.pop = function() {
    var t2 = this[$].values_.length - 1 | 0;
    t2 < 0 && (t2 = 0);
    return this.splice(t2, 1)[0];
  }, de.shift = function() {
    return this.splice(0, 1)[0];
  }, de.unshift = function() {
    let e2 = this[$];
    Mt(e2, 0, 0, arguments);
    return e2.values_.length;
  }, de.reverse = function() {
    return !J.trackingDerivation || Te(37, "reverse"), this.replace(this.slice().reverse()), this;
  }, de.sort = function() {
    !J.trackingDerivation || Te(37, "sort");
    var r2 = this.slice();
    r2.sort.apply(r2, arguments), this.replace(r2);
    return this;
  }, de.remove = function(t2) {
    var r2 = this[$];
    t2 = +r2.dehanceValues_(r2.values_).indexOf(t2) | 0;
    if (t2 > -1) {
      this.splice(t2, 1);
      return true;
    }
    return false;
  }, ke("at"), ke("concat"), ke("flat"), ke("includes"), ke("indexOf"), ke("join"), ke("lastIndexOf"), ke("slice"), ke("toString"), ke("toLocaleString"), ke("toSorted"), ke("toSpliced"), ke("with"), Ne("every"), Ne("filter"), Ne("find"), Ne("findIndex"), Ne("findLast"), Ne("findLastIndex"), Ne("flatMap"), Ne("forEach"), Ne("map"), Ne("some"), Ne("toReversed"), qr("reduce"), qr("reduceRight");
  var ne = (0, function(y2, _2, f2) {
    var t2 = this;
    t2[$] = {}, t2.enhancer_ = et;
    var n2;
    arguments.length > 1 && _2 && (t2.enhancer_ = _2), n2 = arguments.length > 2 && f2 !== void 0 ? f2 + "" : "ObservableMap", t2.name_ = n2, t2.interceptors_ = void 0, t2.changeListeners_ = void 0, t2.dehancer = void 0;
    var e2;
    arguments.length > 0 && (e2 = y2), at(function() {
      t2.keysAtom_ = qt("ObservableMap.keys()"), t2.data_ = new (Oe())(), t2.hasMap_ = new (Oe())(), e2 && t2.merge(e2);
    });
    return t2;
  });
  t = ne.prototype, t.has_ = function(t2) {
    return this.data_.has(t2);
  }, t = ne.prototype, t.has = function(t2) {
    var e2 = this;
    if (!J.trackingDerivation) return e2.has_(t2);
    var r2 = e2.hasMap_.get(t2);
    if (!r2) r2 = ue, r2 = new r2(e2.has_(t2), dt, "ObservableMap.key?", false), e2.hasMap_.set(t2, r2), r2.onBUOL = new globalThis.Set(), r2.onBUOL.add(function() {
      e2.hasMap_.delete(t2);
    });
    return r2.get();
  }, t = ne.prototype, t.set = function(t2, r2) {
    var n2 = this.data_.has(t2);
    if (Ee(this)) {
      r2 = Re(this, { __proto__: null, type: n2 ? "update" : "add", object: this, newValue: r2, name: t2 });
      if (!r2) return this;
      r2 = r2.newValue;
    }
    n2 ? this.updateValue_(t2, r2) : this.addValue_(t2, r2);
    return this;
  }, t = ne.prototype, t.updateValue_ = function(t2, r2) {
    var n2 = this.data_.get(t2);
    r2 = n2.prepareNewValue_(r2);
    if (r2 !== J.UNCHANGED) {
      var a2 = Be(this), i2 = null;
      a2 && (i2 = this.name_, i2 = { __proto__: null, observableKind: "map", debugObjectName: i2, type: "update", object: this, oldValue: n2.value_, name: t2, newValue: r2 }), n2.setNewValue_(r2), a2 && Me(this, i2);
    }
  }, t = ne.prototype, t.addValue_ = function(t2, r2) {
    ae();
    try {
      var R2 = "ObservableMap.key", n2 = ue, a2 = r2, i2 = this.enhancer_, D2 = new n2(a2, i2, R2, false);
      n2 = this.data_, n2.set(t2, D2), r2 = D2.value_;
      var P2 = this.hasMap_.get(t2);
      P2 && (n2 = P2.setNewValue_, n2.call(P2, true)), Ve(this.keysAtom_);
    } finally {
      ie();
    }
    n2 = false;
    a2 = Be(this), i2 = null, a2 && (n2 = true), n2 && (n2 = this.name_, i2 = { __proto__: null, observableKind: "map", debugObjectName: n2, type: "add", object: this, name: t2, newValue: r2 }), a2 && Me(this, i2);
  }, t = ne.prototype, t.delete = function(t2) {
    if (Ee(this) && !Re(this, { __proto__: null, type: "delete", object: this, name: t2 })) return false;
    if (this.data_.has(t2)) {
      var n2, a2, r2 = false;
      n2 = Be(this), a2 = null, n2 && (r2 = true), r2 && (r2 = this.name_, a2 = { __proto__: null, observableKind: "map", debugObjectName: r2, type: "delete", object: this, oldValue: this.data_.get(t2).value_, name: t2 }), ae();
      try {
        Ve(this.keysAtom_);
        var X = this.hasMap_.get(t2);
        X && (r2 = X.setNewValue_, r2.call(X, false));
        var q = this.data_.get(t2);
        q.setNewValue_.call(q, void 0), this.data_.delete(t2);
      } finally {
        ie();
      }
      n2 && Me(this, a2);
      return true;
    }
    return false;
  }, t = ne.prototype, t.get = function(t2) {
    if (this.has(t2)) {
      t2 = this.data_.get(t2);
      return Nt(this, t2.get());
    }
    return Nt(this, void 0);
  }, t = ne.prototype, t.getOrInsert = function(r2, s2) {
    if (!this.has(r2)) {
      var n2 = this.set;
      this.set(r2, s2);
    }
    return this.get(r2);
  }, t = ne.prototype, t.getOrInsertComputed = function(r2, t2) {
    if (!this.has(r2)) {
      var n2 = this.set;
      this.set(r2, t2(r2));
    }
    return this.get(r2);
  }, t = ne.prototype, t.keys = function() {
    be(this.keysAtom_);
    return this.data_.keys();
  }, t = ne.prototype, t.values = function() {
    var e2 = this;
    let r2 = e2.keys(), t2 = { __proto__: null, next: function() {
      var _2 = r2.next();
      if (_2.done) return { __proto__: null, done: true, value: void 0 };
      var c2 = e2.get;
      return { __proto__: null, done: false, value: e2.get(_2.value) };
    } };
    t2[xe().toStringTag] = "MapIterator";
    return Dt(t2);
  }, t = ne.prototype, t.entries = function() {
    var e2 = this;
    let r2 = e2.keys(), t2 = { __proto__: null, next: function() {
      var d2 = r2.next();
      if (d2.done) return { __proto__: null, done: true, value: void 0 };
      var b2 = [];
      b2.push(d2.value);
      var n2 = e2.get;
      b2.push(e2.get(d2.value));
      return { __proto__: null, done: false, value: b2 };
    } };
    t2[xe().toStringTag] = "MapIterator";
    return Dt(t2);
  }, t = ne.prototype, t.forEach = function(a2, u2) {
    var r2 = void 0;
    arguments.length > 1 && (r2 = u2);
    var i2, n2 = this.entries(), t2 = n2.next();
    while (!t2.done) i2 = t2.value[1], a2.call(r2, i2, t2.value[0], this), t2 = n2.next();
  }, t = ne.prototype, t.merge = function(t2) {
    var e2 = this;
    ve(t2) && (t2 = new globalThis.Map(t2)), ae();
    try {
      if (qe(t2)) {
        for (var Z2 = dn(t2), te2 = 0; ; ) {
          var r2 = te2;
          if (r2 >= Z2.length) break;
          r2 = e2.set;
          var n2 = Z2[te2];
          e2.set(n2, t2[Z2[te2]]), te2 = te2 + 1 | 0;
        }
      } else {
        if (Array.isArray(t2)) {
          for (var re2 = 0; ; ) {
            r2 = re2;
            if (r2 >= t2.length) break;
            r2 = e2.set;
            n2 = t2[re2][0], e2.set(n2, t2[re2][1]), re2 = re2 + 1 | 0;
          }
        } else vt(t2) ? (r2 = ee().getPrototypeOf(t2), r2 = ee().getPrototypeOf(r2), ee().getPrototypeOf(r2) == null || Te(19, t2), t2.forEach(function(a2, n3) {
          let t3 = e2.set;
          e2.set(n3, a2);
        })) : t2 == null || Te(20, t2);
      }
    } finally {
      ie();
    }
    return e2;
  }, t = ne.prototype, t.clear = function() {
    ae();
    try {
      try {
        for (var w2 = ye(this.keys()), O2 = 0; ; ) {
          var t2 = O2;
          if (t2 >= w2.length) break;
          t2 = this.delete;
          this.delete(w2[O2]), O2 = O2 + 1 | 0;
        }
      } finally {
        je(Ue());
      }
    } finally {
      ie();
    }
  }, t = ne.prototype, t.replace = function(t2) {
    ae();
    try {
      for (var mt2 = ((e2) => {
        if (vt(e2) || ve(e2)) return e2;
        if (Array.isArray(e2)) return new globalThis.Map(e2);
        if (qe(e2)) {
          var n3 = new (Oe())(), r3 = ee().keys(e2), t3 = 0;
          while (t3 < r3.length) n3.set(r3[t3], e2[r3[t3]]), t3 = t3 + 1 | 0;
          return n3;
        }
        Te(21, e2);
        return new (Oe())();
      })(t2), wt2 = new (Oe())(), Rt2 = false, Dt2 = ye(this.data_.keys()), L2 = 0; ; ) {
        t2 = L2;
        if (t2 >= Dt2.length) break;
        var Bt2 = Dt2[L2];
        if (!mt2.has(Bt2)) {
          t2 = this.delete;
          if (this.delete(Bt2)) Rt2 = true;
          else {
            t2 = wt2;
            var r2 = Bt2, n2 = this.data_;
            t2.set(r2, n2.get(Bt2));
          }
        }
        L2 = L2 + 1 | 0;
      }
      var Mt2 = ye(mt2.entries());
      for (L2 = 0; ; ) {
        t2 = L2;
        if (t2 >= Mt2.length) break;
        var Nt2 = Mt2[L2][0];
        t2 = this.data_;
        var It2 = t2.has(Nt2);
        t2 = this.set, this.set(Nt2, Mt2[L2][1]), t2 = this.data_, t2.has(Nt2) && (t2 = wt2, r2 = Nt2, n2 = this.data_, t2.set(Nt2, n2.get(Nt2)), It2 || (Rt2 = true)), L2 = L2 + 1 | 0;
      }
      if (!Rt2) {
        t2 = +this.data_.size | 0;
        if (t2 != (+wt2.size | 0)) Ve(this.keysAtom_);
        else {
          var Kt2 = this.data_.keys(), Zt2 = wt2.keys(), er2 = Kt2.next(), tr2 = Zt2.next();
          while (!er2.done) {
            if (er2.value !== tr2.value) {
              Ve(this.keysAtom_);
              break;
            }
            er2 = Kt2.next();
            tr2 = Zt2.next();
          }
        }
      }
      this.data_ = wt2;
    } finally {
      ie();
    }
    return this;
  }, t = ne.prototype, t.toJSON = function() {
    return ye(this);
  }, t = ne.prototype, t.toString = function() {
    return "[object ObservableMap]";
  }, t = ne.prototype, u = xe().iterator, t[u] = function() {
    return this.entries();
  }, t = ne.prototype, se(t, "size", { __proto__: null, enumerable: false, configurable: e, get: function() {
    be(this.keysAtom_);
    return this.data_.size;
  } }), t = ne.prototype, u = xe().toStringTag, se(t, u, { __proto__: null, enumerable: false, configurable: e, get: function() {
    return "Map";
  } }), Ge("ObservableMap", ne);
  var ce = (0, function(x2, b2, c2) {
    var n2 = this;
    n2[$] = {};
    var e2 = "ObservableSet";
    arguments.length > 2 && c2 !== void 0 && (e2 = c2 + ""), n2.name_ = e2;
    var t2 = et;
    arguments.length > 1 && b2 && (t2 = b2), n2.enhancer_ = function(n3, a2, i2) {
      return t2(n3, a2, e2);
    }, n2.data_ = new globalThis.Set(), n2.changeListeners_ = void 0, n2.interceptors_ = void 0, n2.dehancer = void 0;
    var r2;
    arguments.length > 0 && (r2 = x2), at(function() {
      var _2 = qt;
      n2.atom_ = _2(n2.name_), r2 && n2.replace(r2);
    });
    return n2;
  });
  t = ce.prototype, t.has = function(t2) {
    be(this.atom_);
    let r2 = this.data_;
    return !!r2.has(Nt(this, t2));
  }, t = ce.prototype, t.add = function(t2) {
    if (Ee(this)) {
      t2 = Re(this, { __proto__: null, type: "add", object: this, newValue: t2 });
      if (!t2) return this;
      t2 = t2.newValue;
    }
    if (!this.has(t2)) {
      ae();
      try {
        var r2 = this.data_, n2 = this.enhancer_;
        r2.add(n2(t2, void 0)), Ve(this.atom_);
      } finally {
        ie();
      }
      r2 = false;
      n2 = Be(this);
      var a2 = null;
      n2 && (r2 = true), r2 && (a2 = { __proto__: null, observableKind: "set", debugObjectName: this.name_, type: "add", object: this, newValue: t2 }), n2 && Me(this, a2);
    }
    return this;
  }, t = ce.prototype, t.delete = function(t2) {
    if (Ee(this) && !Re(this, { __proto__: null, type: "delete", object: this, oldValue: t2 })) return false;
    if (this.has(t2)) {
      var n2, a2, r2 = false;
      n2 = Be(this), a2 = null, n2 && (r2 = true), r2 && (a2 = { __proto__: null, observableKind: "set", debugObjectName: this.name_, type: "delete", object: this, oldValue: t2 }), ae();
      try {
        Ve(this.atom_), this.data_.delete(t2);
      } finally {
        ie();
      }
      n2 && Me(this, a2);
      return true;
    }
    return false;
  }, t = ce.prototype, t.values = function() {
    var e2 = this;
    be(e2.atom_);
    let r2 = e2.data_.values(), t2 = { __proto__: null, next: function() {
      var _2 = r2.next();
      return _2.done ? { __proto__: null, done: true, value: void 0 } : { __proto__: null, done: false, value: Nt(e2, _2.value) };
    } };
    t2[xe().toStringTag] = "SetIterator";
    return Dt(t2);
  }, t = ce.prototype, t.keys = function() {
    return this.values();
  }, t = ce.prototype, t.entries = function() {
    let t2 = this.values(), e2 = { __proto__: null, next: function() {
      var p2 = t2.next();
      if (p2.done) return { __proto__: null, done: true, value: void 0 };
      var f2 = [];
      f2.push(p2.value), f2.push(p2.value);
      return { __proto__: null, done: false, value: f2 };
    } };
    e2[xe().toStringTag] = "SetIterator";
    return Dt(e2);
  }, t = ce.prototype, t.forEach = function(a2, u2) {
    var r2 = void 0;
    arguments.length > 1 && (r2 = u2);
    var n2 = this.values(), t2 = n2.next();
    while (!t2.done) a2.call(r2, t2.value, t2.value, this), t2 = n2.next();
  }, t = ce.prototype, t.replace = function(t2) {
    var e2 = this;
    pe(t2) && (t2 = new globalThis.Set(t2)), ae();
    try {
      if (Array.isArray(t2)) {
        e2.clear();
        for (var T2 = 0; ; ) {
          var r2 = T2;
          if (r2 >= t2.length) break;
          r2 = e2.add;
          e2.add(t2[T2]), T2 = T2 + 1 | 0;
        }
      } else _t(t2) ? (e2.clear(), t2.forEach(function(r3) {
        e2.add(r3);
      })) : t2 == null || Te(41, t2);
    } finally {
      ie();
    }
    return e2;
  }, t = ce.prototype, t.clear = function() {
    ae();
    try {
      try {
        for (var w2 = ye(this.data_.values()), O2 = 0; ; ) {
          var t2 = O2;
          if (t2 >= w2.length) break;
          t2 = this.delete;
          this.delete(w2[O2]), O2 = O2 + 1 | 0;
        }
      } finally {
        je(Ue());
      }
    } finally {
      ie();
    }
  }, t = ce.prototype, t.toJSON = function() {
    return ye(this);
  }, t = ce.prototype, t.toString = function() {
    return "[object ObservableSet]";
  }, t = ce.prototype, u = xe().iterator, t[u] = function() {
    return this.values();
  }, t = ce.prototype, se(t, "size", { __proto__: null, enumerable: false, configurable: e, get: function() {
    be(this.atom_);
    return this.data_.size;
  } }), t = ce.prototype, u = xe().toStringTag, se(t, u, { __proto__: null, enumerable: false, configurable: e, get: function() {
    return "Set";
  } }), ot("intersection"), ot("union"), ot("difference"), ot("symmetricDifference"), ot("isSubsetOf"), ot("isSupersetOf"), ot("isDisjointFrom"), Ge("ObservableSet", ce), et = (0, function(t2, r2, n2) {
    return zt(t2) ? t2 : Array.isArray(t2) ? n2 ? Y.array.call(Y, t2, { __proto__: null, name: n2 }) : Y.array.call(Y, t2) : qe(t2) ? n2 ? Y.object.call(Y, t2, void 0, { __proto__: null, name: n2 }) : Y.object.call(Y, t2) : vt(t2) ? n2 ? Y.map.call(Y, t2, { __proto__: null, name: n2 }) : Y.map.call(Y, t2) : _t(t2) ? n2 ? Y.set.call(Y, t2, { __proto__: null, name: n2 }) : Y.set.call(Y, t2) : te(t2) && !nt(t2) && !ct(t2) ? Ar(t2) ? Ze(t2) : xt(n2, t2) : t2;
  }), t = function(t2, r2, n2) {
    return t2 == null ? t2 : fe(t2) || me(t2) || ve(t2) || pe(t2) ? t2 : Array.isArray(t2) ? Y.array.call(Y, t2, { __proto__: null, name: n2, deep: false }) : qe(t2) ? Y.object.call(Y, t2, void 0, { __proto__: null, name: n2, deep: false }) : vt(t2) ? Y.map.call(Y, t2, { __proto__: null, name: n2, deep: false }) : _t(t2) ? Y.set.call(Y, t2, { __proto__: null, name: n2, deep: false }) : t2;
  }, u = function(t2, r2) {
    return pt(t2, r2, -1, void 0, void 0) ? r2 : t2;
  };
  var pr = { __proto__: null, deep: e, name: void 0, defaultDecorator: void 0 };
  ee().freeze(pr);
  var Vt = (0, function(n2, a2, i2) {
    return this.extend_(n2, a2, i2, false) == null ? 0 : 1;
  });
  var cn = (0, function(r2, a2, i2, t2) {
    var n2 = et;
    this.options_ && this.options_.enhancer_ && (n2 = this.options_.enhancer_);
    return r2.defineObservableProperty_(a2, i2.value, n2, t2);
  });
  var Gt = (0, function(r2, a2, n2, t2) {
    var e2 = Ce({}, this.options_);
    e2.get = n2.get, e2.set = n2.set;
    return r2.defineComputedProperty_(a2, e2, t2);
  });
  var pn = (0, function(r2, n2, a2, i2) {
    if (this.options_ && this.options_.bound) return this.extend_(r2, n2, a2, false) == null ? 0 : 1;
    if (i2 === r2.target_) return this.extend_(r2, n2, a2, false) == null ? 0 : 2;
    if (nt(a2.value)) return 1;
    se(i2, n2, Ur(r2, this, n2, a2, false));
    return 2;
  });
  var fn = (0, function(r2, a2, o2, v2) {
    return r2.defineProperty_(a2, Ur(r2, this, a2, o2, !!J.safeDescriptors), v2);
  });
  var bt = (0, function() {
    var e2 = arguments[0], r2 = arguments[1], t2 = arguments[2];
    if ("accessor" == t2.kind + "") {
      t2 = t2.name;
      return { get: function() {
        var a2 = this[$];
        a2 = a2 || nr(this, e2, t2, r2.get.call(this));
        return a2.getObservablePropValue_(t2);
      }, set: function(n2) {
        var a2 = this[$];
        a2 = a2 || nr(this, e2, t2, n2);
        return a2.setObservablePropValue_(t2, n2);
      }, init: function(n2) {
        nr(this, e2, t2, n2);
        return n2;
      } };
    }
  });
  var Ft = (0, function(i2, t2, r2) {
    var e2, n2 = r2.name, a2 = (0, function(g2, f2) {
      f2;
      var y2 = Ce({}, i2.options_);
      y2.get = t2, y2.context = g2, y2.name || (y2.name = "ObservableObject." + Ae(n2));
      return new oe(y2);
    });
    r2.addInitializer(function() {
      var T2 = this, j2 = lt(T2)[$], i3 = j2.values_.get(n2);
      re(i3, "isMobXComputedValue") && i3.derivation !== t2 && j2.values_.delete(n2), j2.lazyComputedKeys_ || (j2.lazyComputedKeys_ = new (Oe())()), j2.lazyComputedKeys_.set(n2, function() {
        return a2(T2, j2);
      });
    });
    return function() {
      var R2, i3 = this[$], o2 = i3.values_.get(n2);
      if (re(o2, "isMobXComputedValue") && o2.derivation !== t2) {
        e2 = e2 || new globalThis.WeakMap(), R2 = e2.get(this), R2 = R2 || a2(this, i3), e2.set(this, R2);
        return R2.get();
      }
      return i3.getObservablePropValue_(n2);
    };
  });
  var jt = (0, function() {
    var r2 = arguments[0], n2 = arguments[1], e2 = arguments[2], t2 = e2.name, a2 = (0, function(n3) {
      var O2, a3 = Ae(t2);
      r2.options_ && r2.options_.name && (a3 = r2.options_.name + ""), O2 = r2.options_ && r2.options_.autoAction;
      return Je(a3, n3, O2, void 0);
    });
    if ("field" == e2.kind + "") return function(n3) {
      nt(n3) || (n3 = a2(n3)), r2.options_ && r2.options_.bound && (n3 = n3.bind(this), n3.isMobxAction = true);
      return n3;
    };
    if ("method" == e2.kind + "") {
      nt(n2) || (n2 = a2(n2)), r2.options_ && r2.options_.bound && (a2 = e2.addInitializer, e2.addInitializer(function() {
        let r3 = this[t2].bind(this);
        r3.isMobxAction = true, this[t2] = r3;
      }));
      return n2;
    }
    a2 = Ae(t2);
    e2 = [], e2.push(r2.annotationType_), e2.push(a2), e2.push(e2.kind), rt(43, e2);
  });
  var fr = (0, function() {
    var r2 = arguments[0], e2 = arguments[1], t2 = arguments[2], n2 = t2.name;
    ct(e2) || (e2 = Ze(e2)), r2.options_ && r2.options_.bound && t2.addInitializer(function() {
      let r3 = this[n2].bind(this);
      r3.isMobXFlow = true, this[n2] = r3;
    });
    return e2;
  });
  var hr = (0, function(r2, n2, a2, i2) {
    if (i2 === r2.target_) return this.extend_(r2, n2, a2, false) == null ? 0 : 2;
    var t2;
    this.options_ && this.options_.bound ? (t2 = r2.target_, t2 = !Ke.call(t2, n2) || !ct(r2.target_[n2])) : t2 = false;
    if (t2 && this.extend_(r2, n2, a2, false) == null) return 0;
    if (ct(a2.value)) return 1;
    se(i2, n2, Wr(r2, a2, false, false));
    return 2;
  });
  var dr = (0, function() {
    var a2, i2, r2 = arguments[0];
    i2 = this.options_ && this.options_.bound, arguments[1], a2 = arguments[2], a2 = Wr(r2, a2, i2, !!J.safeDescriptors);
    return r2.defineProperty_(arguments[1], a2, arguments[3]);
  });
  var Jt = Kt("observable", void 0);
  var l = Kt("observable.ref", { __proto__: null, enhancer_: dt });
  t = Kt("observable.shallow", { __proto__: null, enhancer_: t }), u = Kt("observable.struct", { __proto__: null, enhancer_: u });
  var br = { annotationType_: "computed", options_: void 0, make_: Vt, extend_: Gt };
  var p = { annotationType_: "computed.struct", options_: { __proto__: null, equals: function(t2, r2) {
    return pt(t2, r2, -1, void 0, void 0);
  } }, make_: Vt, extend_: Gt };
  var gr = wt("action", void 0);
  var v = wt("action.bound", { __proto__: null, bound: e });
  var yr = wt("autoAction", { __proto__: null, autoAction: e });
  var _ = wt("autoAction.bound", { __proto__: null, autoAction: e, bound: e });
  Y = Ce(function(l2, i2, u2) {
    var e2 = void 0, r2 = void 0;
    arguments.length > 1 && (e2 = i2), arguments.length > 2 && (r2 = u2);
    return e2 && "string" == typeof e2.kind ? bt(Jt, l2, e2) : zt(l2) ? l2 : qe(l2) ? Y.object.call(Y, l2, e2, r2) : Array.isArray(l2) ? Y.array.call(Y, l2, e2) : vt(l2) ? Y.map.call(Y, l2, e2) : _t(l2) ? Y.set.call(Y, l2, e2) : "object" == typeof l2 && l2 != null ? l2 : Y.box.call(Y, l2, e2);
  }, Jt), Y.box = function(_2, s2) {
    var e2 = $e(void 0);
    arguments.length > 1 && (e2 = $e(s2));
    var r2 = void 0;
    arguments.length > 0 && (r2 = _2);
    var a2 = e2.name;
    return new ue(r2, It(e2), a2, true, e2.equals);
  }, Y.array = function(v2, o2) {
    var e2 = $e(void 0);
    arguments.length > 1 && (e2 = $e(o2));
    var r2 = void 0;
    arguments.length > 0 && (r2 = v2);
    return ln(r2, It(e2), e2.name);
  }, Y.map = function(v2, o2) {
    var e2 = $e(void 0);
    arguments.length > 1 && (e2 = $e(o2));
    var r2 = void 0;
    arguments.length > 0 && (r2 = v2);
    return new ne(r2, It(e2), e2.name);
  }, Y.set = function(v2, o2) {
    var e2 = $e(void 0);
    arguments.length > 1 && (e2 = $e(o2));
    var r2 = void 0;
    arguments.length > 0 && (r2 = v2);
    return new ce(r2, It(e2), e2.name);
  }, Y.object = function(r2, o2, l2) {
    var e2, t2;
    arguments.length > 1 && (e2 = o2), arguments.length > 2 && (t2 = l2);
    return at(function() {
      var n2 = {}, i2 = t2;
      n2 = lt(n2, i2);
      var y2 = n2[$];
      y2.proxy_ || (y2.proxy_ = new globalThis.Proxy(n2, Tt[0])), y2 = y2.proxy_;
      return Ct(y2, r2, e2);
    });
  }, kt = Ie(l, bt), l = Ie(t, bt);
  var c = Ie(Jt, bt);
  u = Ie(u, bt), ut = Ce(function(r2, i2) {
    var e2 = void 0;
    arguments.length > 1 && (e2 = i2);
    if (e2 && "string" == typeof e2.kind) return Ft(br, r2, e2);
    if (qe(r2)) return Ie({ annotationType_: "computed", options_: r2, make_: Vt, extend_: Gt }, Ft);
    var t2 = {};
    qe(e2) && (t2 = Ce({}, e2)), t2.get = r2, t2.name || (t2.name = r2.name);
    return new oe(t2);
  }, br), p = Ie(p, Ft), Ye = Ce(function(t2, o2) {
    var n2 = void 0;
    arguments.length > 1 && (n2 = o2);
    if (n2 && "string" == typeof n2.kind) {
      var r2 = gr;
      return jt(r2, t2, n2);
    }
    if (te(t2)) {
      r2 = t2.name + "", "" == r2 && (r2 = "<unnamed action>");
      return Je(r2, t2, false, void 0);
    }
    if (te(n2)) return Je(t2 + "", n2, false, void 0);
    if (Zt(t2)) return Ie(wt("action", { __proto__: null, name: t2, autoAction: false }), jt);
  }, gr), xt = Ce(function(t2, o2) {
    var n2 = void 0;
    arguments.length > 1 && (n2 = o2);
    if (n2 && "string" == typeof n2.kind) {
      var r2 = gr;
      e && (r2 = yr);
      return jt(r2, t2, n2);
    }
    if (te(t2)) {
      r2 = t2.name + "", "" == r2 && (r2 = "<unnamed action>");
      return Je(r2, t2, e, void 0);
    }
    if (te(n2)) return Je(t2 + "", n2, e, void 0);
    if (Zt(t2)) return Ie(wt(e ? "autoAction" : "action", { __proto__: null, name: t2, autoAction: e }), jt);
  }, yr), v = Ie(v, jt), Wt = Ie(_, jt), t = (0, function(r2) {
    var t2 = r2.name + "";
    "" == t2 && (t2 = "<unnamed action>");
    return Mr(t2, false, r2, this, void 0);
  }), Ct = (0, function(r2, a2, s2, v2) {
    var e2, t2;
    arguments.length > 2 && (e2 = s2), arguments.length > 3 && (t2 = v2);
    var n2 = ee().getOwnPropertyDescriptors(a2);
    at(function() {
      var D2, s3, i2, a3 = lt(r2, t2)[$], o2 = Pe().ownKeys(n2), R2 = 0;
      while (R2 < o2.length) D2 = o2[R2], i2 = e2 ? Z(D2 in e2) ? e2[D2] : true : true, s3 = a3.extend_, a3.extend_(D2, n2[D2], i2), R2 = R2 + 1 | 0;
    });
    return r2;
  });
  var $t = (0, function(i2, c2) {
    var r2, o2, s2, u2, n2, a2 = ir;
    arguments.length > 1 && c2 && (a2 = c2), n2 = a2.name ? a2.name + "" : "Autorun", o2 = !a2.scheduler && !a2.delay;
    var e2;
    r2 = () => {
      i2(e2);
    };
    if (o2) o2 = _e, s2 = function() {
      this.track(r2);
    }, u2 = a2.onError, e2 = new o2(n2, s2, u2, a2.requiresObservable);
    else {
      o2 = Hr(a2);
      var t2 = false;
      u2 = function() {
        var n3 = this;
        t2 = t2 || true, o2(() => {
          t2 = false, n3.isDisposed || n3.track(r2);
        });
      }, e2 = new _e(n2, u2, a2.onError, a2.requiresObservable);
    }
    n2 = a2.signal && a2.signal.aborted;
    n2 || e2.schedule_();
    return e2.getDisposer_.call(e2, a2.signal);
  });
  _ = (0, function() {
    var s2, _2, u2, c2, p2, h2, l2 = arguments[0], v2 = arguments[1], e2 = ir;
    arguments.length > 2 && arguments[2] && (e2 = arguments[2]), s2 = e2.name ? e2.name + "" : "Reaction";
    var o2 = Xt;
    !e2.equals || (o2 = e2.equals), _2 = Ye, v2 = _2(s2, jn(e2.onError, v2));
    var n2, t2, r2 = true, a2 = false;
    _2 = () => {
      var j2 = !!J.allowStateChanges;
      J.allowStateChanges = false;
      var C2;
      try {
        C2 = l2(t2);
      } finally {
        J.allowStateChanges = j2;
      }
      a2 = r2 || !Z(o2(n2, C2));
      n2 = C2;
    }, u2 = !e2.scheduler && !e2.delay;
    var i2 = false;
    c2 = Hr(e2), p2 = () => {
      i2 = false;
      if (!t2.isDisposed) {
        var u3 = n2;
        a2 = false;
        var l3 = t2.track;
        l3.call(t2, _2), r2 && e2.fireImmediately ? v2(n2, u3, t2) : !r2 && a2 && v2(n2, u3, t2), r2 = false;
      }
    }, h2 = () => {
      r2 || u2 ? p2() : (i2 = i2 || true, c2(p2));
    }, t2 = new _e(s2, h2, e2.onError, e2.requiresObservable), s2 = e2.signal && e2.signal.aborted, s2 = s2 || t2.schedule_, s2.call(t2);
    return t2.getDisposer_.call(t2, e2.signal);
  });
  var f = (0, function(r2, f2, d2) {
    var e2;
    if (1 == arguments.length || arguments.length > 1 && f2 && "object" == typeof f2) {
      e2 = void 0, arguments.length > 1 && (e2 = f2);
      return ((e3, t2) => {
        var r3, n2;
        if (t2 && t2.signal && t2.signal.aborted) {
          e3 = globalThis.Promise, e3 = e3.reject(new globalThis.Error("WHEN_ABORTED")), e3.cancel = function() {
            return null;
          };
          return e3;
        }
        n2 = { cancel: void 0, abort: void 0 };
        r3 = globalThis.Promise, r3 = new r3(function(s2, i2) {
          var o2 = Ce({}, t2);
          o2.onError = i2, o2 = Gr(e3, s2, o2), n2.cancel = function() {
            o2(), i2(new globalThis.Error("WHEN_CANCELLED"));
          }, n2.abort = function() {
            o2(), i2(new globalThis.Error("WHEN_ABORTED"));
          };
          var a2;
          t2 && t2.signal && te(t2.signal.addEventListener) && (a2 = t2.signal, a2.addEventListener("abort", n2.abort));
        }), t2 && t2.signal && te(t2.signal.removeEventListener) && (r3 = r3.finally(function() {
          let r4 = t2.signal;
          r4.removeEventListener("abort", n2.abort);
        })), r3.cancel = n2.cancel;
        return r3;
      })(r2, e2);
    }
    return Gr(r2, f2, d2);
  });
  var h = (0, function(t2) {
    true === t2.isolateGlobalState && un();
    if (t2.enforceActions !== void 0) {
      var e2 = t2.enforceActions;
      "always" === e2 ? (J.enforceActions = "always", J.allowStateChanges = false) : "observed" === e2 ? (J.enforceActions = true, J.allowStateChanges = false) : (J.enforceActions = false, J.allowStateChanges = true);
    }
    Z("computedRequiresReaction" in t2) && (e2 = J, e2.computedRequiresReaction = !!t2.computedRequiresReaction);
    Z("reactionRequiresObservable" in t2) && (e2 = J, e2.reactionRequiresObservable = !!t2.reactionRequiresObservable), Z("observableRequiresReaction" in t2) && (e2 = J, e2.observableRequiresReaction = !!t2.observableRequiresReaction), Z("disableErrorBoundaries" in t2) && (e2 = J, e2.disableErrorBoundaries = !!t2.disableErrorBoundaries), Z("safeDescriptors" in t2) && (e2 = J, e2.safeDescriptors = !!t2.safeDescriptors), e2 = J, e2.allowStateReads = !J.observableRequiresReaction, !t2.reactionScheduler || (e2 = t2.reactionScheduler, t2 = Ut, Ut = (r2) => e2(() => t2(r2)));
  });
  var d = (0, function(r2) {
    return zt(r2);
  });
  var b = (0, function() {
    var e2 = arguments[0], t2 = arguments[1];
    if (!fe(e2)) return false;
    e2 = e2[$];
    return e2.values_.has(t2) ? true : e2.lazyComputedKeys_ && e2.lazyComputedKeys_.has(t2) ? true : e2.lazyObservableKeys_ && e2.lazyObservableKeys_.has(t2) ? true : false;
  });
  var We = (0, function() {
    return this.message = "FLOW_CANCELLED", this.name = "FlowCancellationError", this;
  });
  var g = We.prototype;
  var y = globalThis.Error.prototype;
  ee().setPrototypeOf(g, y), g = We.prototype, g.constructor = We, se(We, "name", { __proto__: null, value: "FlowCancellationError", configurable: e }), g = We.prototype, g.toString = function() {
    return "Error: " + this.message;
  }, g = (0, function(t2) {
    return t2 == null ? false : Z(en.call(We.prototype, t2));
  });
  var Qt = 0;
  Ze = Ce(function(n2, s2) {
    var t2, a2;
    if (arguments.length > 1 && s2 && "string" == typeof s2.kind) {
      t2 = fr, a2 = Ze;
      return t2(a2, n2, s2);
    }
    var e2 = n2.name + "";
    "" == e2 && (e2 = "flow");
    t2 = (0, function() {
      Qt = Qt + 1 | 0;
      var r2, Z2, u2 = e2, i2 = Ye(u2, n2).apply(this, arguments), U = { rejector: void 0, pending: void 0, stepId: 0 }, t3 = (0, function(o3) {
        U.pending = void 0;
        try {
          var D2 = Ye, P2 = e2, R2 = D2(P2, i2.next).call(i2, o3);
          Z2(R2);
        } catch (D3) {
          U.rejector(D3);
        }
      });
      r2 = (0, function(o3) {
        U.pending = void 0;
        try {
          var D2 = Ye, P2 = e2, R2 = D2(P2, i2.throw).call(i2, o3);
          Z2(R2);
        } catch (D3) {
          U.rejector(D3);
        }
      }), Z2 = (0, function(i3) {
        if (te(i3.then)) {
          i3.then(Z2, U.rejector);
          return;
        }
        if (i3.done) {
          U.resolve(i3.value);
          return;
        }
        var A2 = globalThis.Promise;
        U.pending = A2.resolve(i3.value), U.pending.then(t3, r2);
      });
      var o2 = globalThis.Promise;
      o2 = new o2(function(a3, i3) {
        U.resolve = a3, U.rejector = i3, t3(void 0);
      }), u2 = e2, o2.cancel = Ye(u2, function() {
        try {
          var r3, M2;
          U.pending && te(U.pending.cancel) && (r3 = U.pending.cancel, r3.call(U.pending));
          var P2 = i2.return(void 0);
          M2 = globalThis.Promise;
          var B2 = M2.resolve(P2.value);
          B2.then(st, st), te(B2.cancel) && (M2 = B2.cancel, M2.call(B2)), M2 = U.rejector, M2(new We());
        } catch (M3) {
          U.rejector(M3);
        }
      });
      return o2;
    }), t2.isMobXFlow = true;
    return t2;
  }, { annotationType_: "flow", options_: void 0, make_: hr, extend_: dr }), Ht = Ie({ annotationType_: "flow.bound", options_: { __proto__: null, bound: e }, make_: hr, extend_: dr }, fr), y = { annotationType_: "override", make_: function(r2, n2) {
    r2, n2;
    return 0;
  }, extend_: function() {
    Te(44, this.annotationType_);
    return false;
  } };
  var m = globalThis.Symbol;
  var Yt = m("mobx-keys");
  m = (0, function(t2, n2, o2) {
    var e2;
    arguments.length > 2 && (e2 = o2), at(function() {
      var O2 = lt(t2, e2)[$], S2 = Pe().ownKeys(n2), w2 = 0;
      while (w2 < S2.length) Fr(O2, S2[w2], n2[S2[w2]]), w2 = w2 + 1 | 0;
    });
    return t2;
  });
  var w = (0, function(r2, o2, l2) {
    var e2, t2;
    arguments.length > 1 && (e2 = o2), arguments.length > 2 && (t2 = l2);
    if (qe(r2)) return Ct(r2, r2, e2, t2);
    at(function() {
      var s2 = lt(r2, t2)[$];
      if (!Z(Yt in r2)) {
        var a2 = ee().getPrototypeOf(r2), ve2 = new globalThis.Set(), i2 = Pe().ownKeys(r2), o3 = Pe().ownKeys(a2), n2 = 0;
        while (n2 < i2.length) ve2.add(i2[n2]), n2 = n2 + 1 | 0;
        n2 = 0;
        while (n2 < o3.length) ve2.add(o3[n2]), n2 = n2 + 1 | 0;
        ve2.delete("constructor"), ve2.delete($), se(a2, Yt, { __proto__: null, enumerable: false, writable: true, configurable: true, value: ve2 });
      }
      r2[Yt].forEach(function(n3) {
        var f2;
        f2 = e2 && Z(n3 in e2) ? e2[n3] : true, Fr(s2, n3, f2);
      });
    });
    return r2;
  });
  var Et = (0, function(t2) {
    if (fe(t2)) {
      var e2 = t2[$].keys_;
      return e2.call(t2[$]);
    }
    if (ve(t2) || pe(t2)) return ye(t2.keys());
    if (me(t2)) {
      var r2 = [];
      e2 = 0;
      while (e2 < Q(t2.length)) r2.push(e2), e2 = e2 + 1 | 0;
      return r2;
    }
    le(5);
  });
  var O = (0, function(t2) {
    if (fe(t2)) {
      var a2, n2 = Et(t2), r2 = [], e2 = 0;
      while (e2 < n2.length) r2.push(t2[n2[e2]]), e2 = e2 + 1 | 0;
      return r2;
    }
    if (ve(t2)) {
      n2 = Et(t2), r2 = [], e2 = 0;
      while (e2 < n2.length) a2 = t2.get, r2.push(t2.get(n2[e2])), e2 = e2 + 1 | 0;
      return r2;
    }
    if (pe(t2)) return ye(t2.values());
    if (me(t2)) return t2.slice();
    le(6);
  });
  var S = (0, function(t2) {
    if (fe(t2) || ve(t2)) {
      var r2, i2, n2 = Et(t2), a2 = [], e2 = 0;
      while (e2 < n2.length) r2 = [], r2.push(n2[e2]), ve(t2) ? (i2 = t2.get, r2.push(t2.get(n2[e2]))) : r2.push(t2[n2[e2]]), a2.push(r2), e2 = e2 + 1 | 0;
      return a2;
    }
    if (pe(t2)) return ye(t2.entries());
    if (me(t2)) {
      n2 = [], e2 = 0;
      while (e2 < Q(t2.length)) r2 = [], r2.push(e2), r2.push(t2[e2]), n2.push(r2), e2 = e2 + 1 | 0;
      return n2;
    }
    le(7);
  });
  var mr = (0, function(e2, r2, o2) {
    var n2 = void 0;
    arguments.length > 2 && (n2 = o2);
    if (2 == arguments.length && !pe(e2)) {
      ae();
      try {
        for (var G2 = ee().keys(r2), Oe2 = 0; ; ) {
          var t2 = Oe2;
          if (t2 >= G2.length) break;
          t2 = mr;
          n2 = G2[Oe2], t2(e2, n2, r2[G2[Oe2]]), Oe2 = Oe2 + 1 | 0;
        }
      } finally {
        ie();
      }
      return;
    }
    fe(e2) ? (t2 = e2[$].set_, t2.call(e2[$], r2, n2)) : ve(e2) ? e2.set(r2, n2) : pe(e2) ? e2.add(r2) : me(e2) ? (ae(), Q(r2) >= Q(e2.length) && (e2.length = Q(r2) + 1 | 0), e2[r2] = n2, ie()) : le(8);
  });
  var A = (0, function(e2, t2) {
    if (fe(e2)) {
      var r2 = e2[$].delete_;
      r2.call(e2[$], t2);
    } else ve(e2) || pe(e2) ? e2.delete(t2) : me(e2) ? e2.splice(t2, 1) : le(9);
  });
  var wr = (0, function() {
    var e2 = arguments[0], t2 = arguments[1];
    if (fe(e2)) return e2[$].has_.call(e2[$], t2);
    if (ve(e2) || pe(e2)) return e2.has(t2);
    if (me(e2)) {
      Q(t2) >= 0 ? (t2 = Q(t2), e2 = t2 < Q(e2.length)) : e2 = false;
      return e2;
    }
    le(10);
    return false;
  });
  var k = (0, function(e2, t2) {
    if (!!wr(e2, t2)) {
      if (fe(e2)) return e2[$].get_.call(e2[$], t2);
      if (ve(e2)) return e2.get(t2);
      if (me(e2)) return e2[t2];
      le(11);
    }
  });
  var Or = (0, function(t2) {
    if (fe(t2)) return t2[$].ownKeys_.call(t2[$]);
    le(38);
  });
  var x = (0, function(a2, n2, l2) {
    if (fe(a2)) return a2[$].defineProperty_.call(a2[$], n2, l2);
    le(39);
  });
  var He = (0, function() {
    var e2 = arguments[0], r2 = void 0;
    arguments.length > 1 && (r2 = arguments[1]);
    if ("object" == typeof e2 && e2 != null) {
      if (me(e2)) {
        r2 === void 0 || le(23);
        return e2[$].atom_;
      }
      if (pe(e2)) return e2.atom_;
      if (ve(e2)) {
        if (r2 === void 0) return e2.keysAtom_;
        var t2 = e2.data_.get(r2);
        t2 = t2 || e2.hasMap_.get(r2), !t2 && (e2 = [], e2.push(r2), e2.push(e2.name_), rt(25, e2));
        return t2;
      }
      if (r2 && !e2[$]) {
        if (e2[r2] === void 0) {
        }
      }
      if (fe(e2)) {
        r2 || le(26), e2 = e2[$], t2 = e2.values_.get(r2), t2 = t2 || e2.materializeLazyComputed_(r2), t2 = t2 || e2.materializeLazyObservable_(r2), t2 || (n = e2.name_, e2 = [], e2.push(r2), e2.push(n), rt(27, e2));
        return t2;
      }
      if (re(e2, "isMobXAtom") || re(e2, "isMobXComputedValue") || re(e2, "isMobXReaction")) return e2;
    } else {
      if (te(e2) && re(e2[$], "isMobXReaction")) return e2[$];
    }
    Te(28, e2);
  });
  var Xe = (0, function(e2, v2) {
    e2 || le(29);
    if (arguments.length > 1 && v2 !== void 0) {
      var r2 = Xe, n2 = He;
      return Xe(He(e2, v2));
    }
    if (re(e2, "isMobXAtom") || re(e2, "isMobXComputedValue") || re(e2, "isMobXReaction") || ve(e2) || pe(e2)) return e2;
    if (e2[$]) return e2[$];
    Te(24, e2);
  });
  var C = (0, function(b2, i2) {
    if (arguments.length > 1 && i2 !== void 0) {
      var e2 = He;
      e2 = e2(b2, i2);
    } else {
      if (nt(b2)) return b2.name;
      else fe(b2) || ve(b2) || pe(b2) ? (e2 = Xe, e2 = e2(b2)) : (e2 = He, e2 = e2(b2));
    }
    return e2.name_;
  });
  var T = (0, function() {
    var e2, t2, n2, a2, r2 = arguments[0];
    if (arguments.length > 2 && te(arguments[2])) {
      n2 = arguments.length > 3 && arguments[3], e2 = Xe, e2 = e2(r2, arguments[1]);
      return Jr(e2, arguments[2], n2);
    }
    n2 = arguments.length > 2 && arguments[2];
    t2 = arguments[1], e2 = Xe(r2);
    if (me(r2)) {
      n2 && (r2 = e2.values_, r2 = Qe.call(r2), n2 = e2.proxy_, a2 = e2.atom_.name_, t2({ __proto__: null, observableKind: "array", object: n2, debugObjectName: a2, type: "splice", index: 0, added: r2, addedCount: r2.length, removed: [], removedCount: 0 })), e2 = mt(e2, t2);
      return e2;
    }
    if (ve(r2)) {
      e2 = mt(e2, t2);
      return e2;
    }
    if (pe(r2)) {
      e2 = mt(e2, t2);
      return e2;
    }
    if (fe(r2)) {
      e2 = mt(e2, t2);
      return e2;
    }
    e2 = Jr(e2, t2, n2);
    return e2;
  });
  var V = (0, function(r2, s2, i2) {
    var e2;
    if (arguments.length > 2 && te(i2)) {
      e2 = Xe, e2 = e2(r2, s2);
      return zr(e2, i2);
    }
    e2 = Xe(r2);
    return zr(e2, s2);
  });
  var j = (0, function() {
    return $r("onBOL", arguments);
  });
  var E = (0, function() {
    return $r("onBUOL", arguments);
  });
  var R = (0, function(e2) {
    return ft(e2, new (Oe())());
  });
  var D = (0, function(r2, n2) {
    let e2 = He;
    return Qr(He(r2, n2));
  });
  var P = (0, function(r2, n2) {
    let e2 = He;
    return Yr(He(r2, n2));
  });
  var B = (0, function(t2) {
    return re(t2, "isMobXComputedValue");
  });
  var M = (0, function() {
    if (!fe(arguments[0])) return false;
    var e2 = arguments[0];
    e2 = e2[$];
    if (e2.lazyComputedKeys_) {
      var r2 = e2.lazyComputedKeys_;
      r2 = r2.has(arguments[1]);
    } else {
      r2 = false;
    }
    if (r2) return true;
    if (!e2.values_.has(arguments[1])) return false;
    e2 = e2.values_;
    return re(e2.get(arguments[1]), "isMobXComputedValue");
  });
  var N = (0, function(t2, c2, f2) {
    var e2, n2, a2 = void 0;
    ve(t2) || me(t2) || re(t2, "isMobXObservableValue") || pe(t2) ? (e2 = Xe(t2), a2 = c2) : fe(t2) && (n2 = Xe, e2 = n2(t2, c2), a2 = f2), e2.dehancer = a2;
    return function() {
      e2.dehancer = void 0;
    };
  });
  var z = (0, function(t2) {
    return t2;
  });
  var I = (0, function(t2) {
    return ct(t2);
  });
  var Mn = t;
  var Nn = (e2) => {
    J.allowStateReads = e2;
  };
  var zn = (e2) => {
    let t2 = !!J.allowStateReads;
    J.allowStateReads = e2;
    return t2;
  };
  var Xn = (e2, t2) => tt(e2, t2);
  var qn = (e2, t2) => e2 === t2;
  var Un = (e2, t2) => pt(e2, t2, 1, void 0, void 0);
  var Wn = (e2, t2) => pt(e2, t2, -1, void 0, void 0);
  var va = i;
  var ha = (e2) => re(e2, "isMobXObservableValue");
  var ga = () => J.trackingDerivation != null;
  return __toCommonJS(mobx_esm_exports);
})();
typeof module!=="undefined"&&module.exports&&(module.exports=mobx);
