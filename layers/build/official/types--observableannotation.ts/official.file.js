import {
  deepEnhancer,
  MakeResult,
  ObservableValue,
  asObservableObject,
  $mobx
} from "../internal";
function createObservableAnnotation(name, options) {
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
  assertObservableDescriptor(adm, this, key, descriptor);
  return adm.defineObservableProperty_(
    key,
    descriptor.value,
    this.options_?.enhancer_ ?? deepEnhancer,
    proxyTrap
  );
}
function decorateObservable20223_(annotation, desc, context) {
  if (false) {
    if (context.kind === "field") {
      throw die(
        `Please use \`@observable accessor ${String(
          context.name
        )}\` instead of \`@observable ${String(context.name)}\``
      );
    }
    assert20223DecoratorType(context, ["accessor"]);
  }
  const ann = annotation;
  const { kind, name } = context;
  if (kind !== "accessor") {
    return;
  }
  function registerLazy(target, value) {
    const adm = asObservableObject(target)[$mobx];
    (adm.lazyObservableKeys_ ??= /* @__PURE__ */ new Map()).set(
      name,
      () => new ObservableValue(
        value,
        ann.options_?.enhancer_ ?? deepEnhancer,
        false ? `${adm.name_}.${name.toString()}` : `ObservableObject.${name.toString()}`,
        false
      )
    );
    return adm;
  }
  return {
    get() {
      const adm = this[$mobx] ?? registerLazy(this, desc.get.call(this));
      return adm.getObservablePropValue_(name);
    },
    set(value) {
      const adm = this[$mobx] ?? registerLazy(this, value);
      return adm.setObservablePropValue_(name, value);
    },
    init(value) {
      registerLazy(this, value);
      return value;
    }
  };
}
function assertObservableDescriptor(adm, { annotationType_ }, key, descriptor) {
  if (false) {
    die(
      `Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':
'${annotationType_}' cannot be used on getter/setter properties`
    );
  }
}
export {
  createObservableAnnotation,
  decorateObservable20223_
};
