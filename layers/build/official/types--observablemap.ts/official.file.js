import {
  $mobx,
  ObservableValue,
  checkIfStateModificationsAreAllowed,
  createAtom,
  createInstanceofPredicate,
  makeIterable,
  deepEnhancer,
  getPlainObjectKeys,
  hasInterceptors,
  hasListeners,
  interceptChange,
  isES6Map,
  isPlainES6Map,
  isPlainObject,
  notifyListeners,
  referenceEnhancer,
  transaction,
  untracked,
  globalState,
  die,
  UPDATE,
  initObservable
} from "../internal";
const ObservableMapMarker = {};
const ADD = "add";
const DELETE = "delete";
class ObservableMap {
  constructor(initialData, enhancer_ = deepEnhancer, name_ = false ? "ObservableMap@" + getNextId() : "ObservableMap") {
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
        false ? `${this.name_}.${stringifyKey(key)}?` : "ObservableMap.key?",
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
        const observable = this.data_.get(key);
        observable.setNewValue_(void 0);
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
    const observable = this.data_.get(key);
    newValue = observable.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      const notifySpy = false;
      const notify = hasListeners(this);
      const change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable.value_,
        name: key,
        newValue
      } : null;
      if (false) {
        spyReportStart(change);
      }
      observable.setNewValue_(newValue);
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
      const observable = new ObservableValue(
        newValue,
        this.enhancer_,
        false ? `${this.name_}.${stringifyKey(key)}` : "ObservableMap.key",
        false
      );
      this.data_.set(key, observable);
      newValue = observable.value_;
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
}
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
export {
  ADD,
  DELETE,
  ObservableMap,
  isObservableMap
};
