import {
  $mobx,
  createAtom,
  deepEnhancer,
  hasListeners,
  notifyListeners,
  createInstanceofPredicate,
  makeIterable,
  hasInterceptors,
  interceptChange,
  checkIfStateModificationsAreAllowed,
  untracked,
  transaction,
  isES6Set,
  DELETE,
  ADD,
  die,
  initObservable
} from "../internal";
const ObservableSetMarker = {};
class ObservableSet {
  constructor(initialData, enhancer = deepEnhancer, name_ = false ? "ObservableSet@" + getNextId() : "ObservableSet") {
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
}
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);
function makeIterableForSet(iterator) {
  iterator[Symbol.toStringTag] = "SetIterator";
  return makeIterable(iterator);
}
export {
  ObservableSet,
  isObservableSet
};
