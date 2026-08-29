import {
  $mobx,
  Atom,
  EMPTY_ARRAY,
  addHiddenFinalProp,
  checkIfStateModificationsAreAllowed,
  createInstanceofPredicate,
  hasInterceptors,
  hasListeners,
  interceptChange,
  isObject,
  notifyListeners,
  hasProp,
  die,
  globalState,
  initObservable
} from "../internal";
const SPLICE = "splice";
const UPDATE = "update";
const MAX_SPLICE_SIZE = 1e4;
const arrayTraps = {
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
class ObservableArrayAdministration {
  constructor(name = false ? "ObservableArray@" + getNextId() : "ObservableArray", enhancer, owned_) {
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
}
function createObservableArray(initialValues, enhancer, name = false ? "ObservableArray@" + getNextId() : "ObservableArray", owned = false) {
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
const isObservableArrayAdministration = createInstanceofPredicate(
  "ObservableArrayAdministration",
  ObservableArrayAdministration
);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}
export {
  MAX_SPLICE_SIZE,
  ObservableArrayAdministration,
  UPDATE,
  arrayExtensions,
  createObservableArray,
  isObservableArray
};
