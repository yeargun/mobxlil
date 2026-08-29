import {
  getAnnotationFromOptions,
  propagateChanged,
  $mobx,
  Atom,
  ComputedValue,
  ObservableValue,
  addHiddenProp,
  createInstanceofPredicate,
  endBatch,
  hasInterceptors,
  hasListeners,
  interceptChange,
  isObject,
  isPlainObject,
  notifyListeners,
  referenceEnhancer,
  startBatch,
  globalState,
  ADD,
  UPDATE,
  hasProp,
  getDescriptor,
  ownKeys,
  defineProperty,
  autoAnnotation,
  checkIfStateModificationsAreAllowed,
  assign
} from "../internal";
const descriptorCache = /* @__PURE__ */ Object.create(null);
const REMOVE = "remove";
class ObservableObjectAdministration {
  constructor(target_, values_ = /* @__PURE__ */ new Map(), name_, defaultAnnotation_ = autoAnnotation) {
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom(false ? `${this.name_}.keys` : "ObservableObject.keys");
    this.isPlainObject_ = isPlainObject(this.target_);
    if (false) {
      die(`defaultAnnotation must be valid annotation`);
    }
    if (false) {
      this.appliedAnnotations_ = {};
    }
  }
  keysAtom_;
  changeListeners_;
  interceptors_;
  proxy_;
  isPlainObject_;
  appliedAnnotations_;
  pendingKeys_;
  lazyComputedKeys_;
  lazyObservableKeys_;
  getObservablePropValue_(key) {
    const observable = this.values_.get(key) ?? this.materializeLazyComputed_(key) ?? this.materializeLazyObservable_(key);
    return observable.get();
  }
  materializeLazyComputed_(key) {
    const factory = this.lazyComputedKeys_?.get(key);
    if (!factory) {
      return void 0;
    }
    this.lazyComputedKeys_.delete(key);
    if (this.lazyComputedKeys_.size === 0) {
      this.lazyComputedKeys_ = void 0;
    }
    const computed = factory();
    this.values_.set(key, computed);
    return computed;
  }
  materializeLazyObservable_(key) {
    const factory = this.lazyObservableKeys_?.get(key);
    if (!factory) {
      return void 0;
    }
    this.lazyObservableKeys_.delete(key);
    if (this.lazyObservableKeys_.size === 0) {
      this.lazyObservableKeys_ = void 0;
    }
    const observable = factory();
    this.values_.set(key, observable);
    return observable;
  }
  setObservablePropValue_(key, newValue) {
    const observable = this.values_.get(key) ?? this.materializeLazyComputed_(key) ?? this.materializeLazyObservable_(key);
    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return true;
    }
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue
      });
      if (!change) {
        return null;
      }
      newValue = change.newValue;
    }
    newValue = observable.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      const notify = hasListeners(this);
      const notifySpy = false;
      const change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable.value_,
        name: key,
        newValue
      } : null;
      if (false) {
        spyReportStart(change);
      }
      ;
      observable.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, change);
      }
      if (false) {
        spyReportEnd();
      }
    }
    return true;
  }
  get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      this.has_(key);
    }
    return this.target_[key];
  }
  /**
   * @param {PropertyKey} key
   * @param {any} value
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  set_(key, value, proxyTrap = false) {
    if (hasProp(this.target_, key)) {
      if (this.values_.has(key)) {
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        return Reflect.set(this.target_, key, value);
      } else {
        this.target_[key] = value;
        return true;
      }
    } else {
      return this.extend_(
        key,
        { value, enumerable: true, writable: true, configurable: true },
        this.defaultAnnotation_,
        proxyTrap
      );
    }
  }
  // Trap for "in"
  has_(key) {
    if (!globalState.trackingDerivation) {
      return key in this.target_;
    }
    this.pendingKeys_ ||= /* @__PURE__ */ new Map();
    let entry = this.pendingKeys_.get(key);
    if (!entry) {
      entry = new ObservableValue(
        key in this.target_,
        referenceEnhancer,
        false ? `${this.name_}.${stringifyKey(key)}?` : "ObservableObject.key?",
        false
      );
      this.pendingKeys_.set(key, entry);
    }
    return entry.get();
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  extend_(key, descriptor, annotation, proxyTrap = false) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }
    assertAnnotable(this, annotation, key);
    const outcome = annotation.extend_(this, key, descriptor, proxyTrap);
    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }
    return outcome;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  defineProperty_(key, descriptor, proxyTrap = false) {
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      const deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        const change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change) {
          return null;
        }
        const { newValue } = change;
        if (descriptor.value !== newValue) {
          descriptor = assign({}, descriptor, {
            value: newValue
          });
        }
      }
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }
    return true;
  }
  // If original descriptor becomes relevant, move this to annotation directly
  defineObservableProperty_(key, value, enhancer, proxyTrap = false) {
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      const deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        const change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change) {
          return null;
        }
        value = change.newValue;
      }
      const cachedDescriptor = getCachedObservablePropDescriptor(key);
      const descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      const observable = new ObservableValue(
        value,
        enhancer,
        false ? `${this.name_}.${key.toString()}` : "ObservableObject.key",
        false
      );
      this.values_.set(key, observable);
      this.notifyPropertyAddition_(key, observable.value_);
    } finally {
      endBatch();
    }
    return true;
  }
  // If original descriptor becomes relevant, move this to annotation directly
  defineComputedProperty_(key, options, proxyTrap = false) {
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      const deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        const change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: void 0
        });
        if (!change) {
          return null;
        }
      }
      options.name ||= false ? `${this.name_}.${key.toString()}` : "ObservableObject.key";
      options.context = this.proxy_ || this.target_;
      const cachedDescriptor = getCachedObservablePropDescriptor(key);
      const descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.values_.set(key, new ComputedValue(options));
      this.notifyPropertyAddition_(key, void 0);
    } finally {
      endBatch();
    }
    return true;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  delete_(key, proxyTrap = false) {
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (!hasProp(this.target_, key)) {
      return true;
    }
    if (hasInterceptors(this)) {
      const change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      });
      if (!change) {
        return null;
      }
    }
    try {
      startBatch();
      const notify = hasListeners(this);
      const notifySpy = false;
      const observable = this.values_.get(key);
      let value = void 0;
      if (!observable && (notify || notifySpy)) {
        value = getDescriptor(this.target_, key)?.value;
      }
      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      }
      if (false) {
        delete this.appliedAnnotations_[key];
      }
      if (observable) {
        this.values_.delete(key);
        if (observable instanceof ObservableValue) {
          value = observable.value_;
        }
        propagateChanged(observable);
      }
      this.keysAtom_.reportChanged();
      this.pendingKeys_?.get(key)?.set(key in this.target_);
      if (notify || notifySpy) {
        const change = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
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
    } finally {
      endBatch();
    }
    return true;
  }
  notifyPropertyAddition_(key, value) {
    const notify = hasListeners(this);
    const notifySpy = false;
    if (notify || notifySpy) {
      const change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
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
    this.pendingKeys_?.get(key)?.set(true);
    this.keysAtom_.reportChanged();
  }
  ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  }
  keys_() {
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  }
}
function asObservableObject(target, options) {
  if (false) {
    die(`Options can't be provided for already observable objects.`);
  }
  if (hasProp(target, $mobx)) {
    if (false) {
      die(
        `Cannot convert '${getDebugName(target)}' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`
      );
    }
    return target;
  }
  if (false) {
    die("Cannot make the designated object observable; it is not extensible");
  }
  const name = options?.name ?? (false ? `${isPlainObject(target) ? "ObservableObject" : target.constructor.name}@${getNextId()}` : "ObservableObject");
  const adm = new ObservableObjectAdministration(
    target,
    /* @__PURE__ */ new Map(),
    String(name),
    getAnnotationFromOptions(options)
  );
  addHiddenProp(target, $mobx, adm);
  return target;
}
const isObservableObjectAdministration = createInstanceofPredicate(
  "ObservableObjectAdministration",
  ObservableObjectAdministration
);
function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}
function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }
  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  if (false) {
    adm.appliedAnnotations_[key] = annotation;
  }
}
function assertAnnotable(adm, annotation, key) {
  if (false) {
    die(`Cannot annotate '${adm.name_}.${key.toString()}': Invalid annotation.`);
  }
  if (false) {
    const fieldName = `${adm.name_}.${key.toString()}`;
    const currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
    const requestedAnnotationType = annotation.annotationType_;
    die(
      `Cannot apply '${requestedAnnotationType}' to '${fieldName}':
The field is already annotated with '${currentAnnotationType}'.
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`
    );
  }
}
export {
  ObservableObjectAdministration,
  asObservableObject,
  assertAnnotable,
  isObservableObject,
  recordAnnotationApplied
};
