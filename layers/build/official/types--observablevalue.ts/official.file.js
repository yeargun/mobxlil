import {
  Atom,
  checkIfStateModificationsAreAllowed,
  compareDefault,
  createInstanceofPredicate,
  hasInterceptors,
  hasListeners,
  interceptChange,
  notifyListeners,
  toPrimitive,
  globalState,
  UPDATE
} from "../internal";
const CREATE = "create";
class ObservableValue extends Atom {
  constructor(value, enhancer_, name_ = false ? "ObservableValue@" + getNextId() : "ObservableValue", notifySpy = true, equals_ = compareDefault) {
    super(name_);
    this.enhancer_ = enhancer_;
    this.name_ = name_;
    this.equals_ = equals_;
    this.value_ = enhancer_(value, void 0, name_);
    if (false) {
      spyReport({
        type: CREATE,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: "" + this.value_?.toString()
      });
    }
  }
  hasUnreportedChange_ = false;
  interceptors_;
  changeListeners_;
  value_;
  dehancer;
  dehanceValue(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  }
  set(newValue) {
    const oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      const notifySpy = false;
      if (false) {
        spyReportStart({
          type: UPDATE,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue,
          oldValue
        });
      }
      this.setNewValue_(newValue);
      if (false) {
        spyReportEnd();
      }
    }
  }
  prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue
      });
      if (!change) {
        return globalState.UNCHANGED;
      }
      newValue = change.newValue;
    }
    newValue = this.enhancer_(newValue, this.value_, this.name_);
    return this.equals_(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  }
  setNewValue_(newValue) {
    const oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();
    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue,
        oldValue
      });
    }
  }
  get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  }
  raw() {
    return this.value_;
  }
  toJSON() {
    return this.get();
  }
  toString() {
    return `${this.name_}[${this.value_}]`;
  }
  valueOf() {
    return toPrimitive(this.get());
  }
  [Symbol.toPrimitive]() {
    return this.valueOf();
  }
}
const isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
export {
  ObservableValue,
  isObservableValue
};
