import {
  defineProperty,
  flow,
  isFlow,
  globalState,
  MakeResult,
  hasProp
} from "../internal";
function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_,
    extend_
  };
}
function make_(adm, key, descriptor, source) {
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? MakeResult.Cancel : MakeResult.Continue;
  }
  if (this.options_?.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
    if (this.extend_(adm, key, descriptor, false) === null) {
      return MakeResult.Cancel;
    }
  }
  if (isFlow(descriptor.value)) {
    return MakeResult.Break;
  }
  const flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return MakeResult.Continue;
}
function extend_(adm, key, descriptor, proxyTrap) {
  const flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, this.options_?.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function decorateFlow20223_(annotation, mthd, context) {
  if (false) {
    assert20223DecoratorType(context, ["method"]);
  }
  const { name, addInitializer } = context;
  if (!isFlow(mthd)) {
    mthd = flow(mthd);
  }
  if (annotation.options_?.bound) {
    addInitializer(function() {
      const self = this;
      const bound = self[name].bind(self);
      bound.isMobXFlow = true;
      self[name] = bound;
    });
  }
  return mthd;
}
function assertFlowDescriptor(adm, { annotationType_ }, key, { value }) {
  if (false) {
    die(
      `Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':
'${annotationType_}' can only be used on properties with a generator function value.`
    );
  }
}
function createFlowDescriptor(adm, annotation, key, descriptor, bound, safeDescriptors = globalState.safeDescriptors) {
  assertFlowDescriptor(adm, annotation, key, descriptor);
  let { value } = descriptor;
  if (!isFlow(value)) {
    value = flow(value);
  }
  if (bound) {
    value = value.bind(adm.proxy_ ?? adm.target_);
    value.isMobXFlow = true;
  }
  return {
    value,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}
export {
  createFlowAnnotation,
  decorateFlow20223_
};
