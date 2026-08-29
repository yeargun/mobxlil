import {
  observable,
  observableRef,
  defineProperty,
  createAction,
  globalState,
  flow,
  flowBound,
  computed,
  autoAction,
  autoActionBound,
  isGenerator,
  MakeResult,
  isAction
} from "../internal";
const AUTO = "true";
const autoAnnotation = createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_,
    extend_
  };
}
function make_(adm, key, descriptor, source) {
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  }
  if (descriptor.set) {
    const set = isAction(descriptor.set) ? descriptor.set : createAction(key.toString(), descriptor.set);
    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set
      }) === null ? MakeResult.Cancel : MakeResult.Continue;
    }
    defineProperty(source, key, {
      configurable: true,
      set
    });
    return MakeResult.Continue;
  }
  if (source !== adm.target_ && typeof descriptor.value === "function") {
    if (isGenerator(descriptor.value)) {
      const flowAnnotation = this.options_?.autoBind ? flowBound : flow;
      return flowAnnotation.make_(adm, key, descriptor, source);
    }
    const actionAnnotation = this.options_?.autoBind ? autoActionBound : autoAction;
    return actionAnnotation.make_(adm, key, descriptor, source);
  }
  let observableAnnotation = this.options_?.deep === false ? observableRef : observable;
  if (typeof descriptor.value === "function" && this.options_?.autoBind) {
    descriptor.value = descriptor.value.bind(adm.proxy_ ?? adm.target_);
  }
  return observableAnnotation.make_(adm, key, descriptor, source);
}
function extend_(adm, key, descriptor, proxyTrap) {
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  }
  if (descriptor.set) {
    return adm.defineProperty_(
      key,
      {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: createAction(key.toString(), descriptor.set)
      },
      proxyTrap
    );
  }
  if (typeof descriptor.value === "function" && this.options_?.autoBind) {
    descriptor.value = descriptor.value.bind(adm.proxy_ ?? adm.target_);
  }
  let observableAnnotation = this.options_?.deep === false ? observableRef : observable;
  return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
}
export {
  autoAnnotation,
  createAutoAnnotation
};
