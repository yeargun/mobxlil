import {
  MakeResult,
  $mobx,
  asObservableObject,
  ComputedValue,
  assign
} from "../internal";
function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_,
    extend_
  };
}
function make_(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? MakeResult.Cancel : MakeResult.Break;
}
function extend_(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(
    key,
    assign({}, this.options_, {
      get: descriptor.get,
      set: descriptor.set
    }),
    proxyTrap
  );
}
function decorateComputed20223_(annotation, get, context) {
  if (false) {
    assert20223DecoratorType(context, ["getter"]);
  }
  const ann = annotation;
  const { name: key, addInitializer } = context;
  let computedValues;
  function createComputedValue(target, adm) {
    const options = assign({}, ann.options_, {
      get,
      context: target
    });
    options.name ||= false ? `${adm.name_}.${key.toString()}` : `ObservableObject.${key.toString()}`;
    return new ComputedValue(options);
  }
  addInitializer(function() {
    const adm = asObservableObject(this)[$mobx];
    const target = this;
    const observable = adm.values_.get(key);
    if (observable instanceof ComputedValue && observable.derivation !== get) {
      adm.values_.delete(key);
    }
    ;
    (adm.lazyComputedKeys_ ??= /* @__PURE__ */ new Map()).set(key, () => createComputedValue(target, adm));
  });
  return function() {
    const adm = this[$mobx];
    const observable = adm.values_.get(key);
    if (observable instanceof ComputedValue && observable.derivation !== get) {
      let computed = computedValues?.get(this);
      if (!computed) {
        computed = createComputedValue(this, adm);
        (computedValues ??= /* @__PURE__ */ new WeakMap()).set(this, computed);
      }
      return computed.get();
    }
    return adm.getObservablePropValue_(key);
  };
}
function assertComputedDescriptor(adm, { annotationType_ }, key, { get }) {
  if (false) {
    die(
      `Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':
'${annotationType_}' can only be used on getter(+setter) properties.`
    );
  }
}
export {
  createComputedAnnotation,
  decorateComputed20223_
};
