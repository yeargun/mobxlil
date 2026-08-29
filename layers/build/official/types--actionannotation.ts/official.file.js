import {
  createAction,
  isAction,
  defineProperty,
  die,
  globalState,
  MakeResult
} from "../internal";
function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_,
    extend_
  };
}
function make_(adm, key, descriptor, source) {
  if (this.options_?.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? MakeResult.Cancel : MakeResult.Break;
  }
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? MakeResult.Cancel : MakeResult.Continue;
  }
  if (isAction(descriptor.value)) {
    return MakeResult.Break;
  }
  const actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return MakeResult.Continue;
}
function extend_(adm, key, descriptor, proxyTrap) {
  const actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function decorateAction20223_(annotation, mthd, context) {
  if (false) {
    assert20223DecoratorType(context, ["method", "field"]);
  }
  const { kind, name, addInitializer } = context;
  const ann = annotation;
  const _createAction = (m) => createAction(ann.options_?.name ?? name.toString(), m, ann.options_?.autoAction ?? false);
  if (kind == "field") {
    return function(initMthd) {
      let mthd2 = initMthd;
      if (!isAction(mthd2)) {
        mthd2 = _createAction(mthd2);
      }
      if (ann.options_?.bound) {
        mthd2 = mthd2.bind(this);
        mthd2.isMobxAction = true;
      }
      return mthd2;
    };
  }
  if (kind == "method") {
    if (!isAction(mthd)) {
      mthd = _createAction(mthd);
    }
    if (ann.options_?.bound) {
      addInitializer(function() {
        const self = this;
        const bound = self[name].bind(self);
        bound.isMobxAction = true;
        self[name] = bound;
      });
    }
    return mthd;
  }
  die(43, ann.annotationType_, String(name), kind);
}
function assertActionDescriptor(adm, { annotationType_ }, key, { value }) {
  if (false) {
    die(
      `Cannot apply '${annotationType_}' to '${adm.name_}.${key.toString()}':
'${annotationType_}' can only be used on properties with a function value.`
    );
  }
}
function createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors = globalState.safeDescriptors) {
  assertActionDescriptor(adm, annotation, key, descriptor);
  let { value } = descriptor;
  if (annotation.options_?.bound) {
    value = value.bind(adm.proxy_ ?? adm.target_);
  }
  return {
    value: createAction(
      annotation.options_?.name ?? key.toString(),
      value,
      annotation.options_?.autoAction ?? false,
      // https://github.com/mobxjs/mobx/discussions/3140
      annotation.options_?.bound ? adm.proxy_ ?? adm.target_ : void 0
    ),
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
  createActionAnnotation,
  createActionDescriptor,
  decorateAction20223_
};
