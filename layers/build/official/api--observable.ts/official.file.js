import {
  ObservableMap,
  ObservableSet,
  ObservableValue,
  asDynamicObservableObject,
  createObservableArray,
  deepEnhancer,
  extendObservable,
  isES6Map,
  isES6Set,
  isObservable,
  isPlainObject,
  referenceEnhancer,
  shallowEnhancer,
  refStructEnhancer,
  assign,
  createObservableAnnotation,
  createAutoAnnotation,
  initObservable,
  decorateObservable20223_
} from "../internal";
import { createDecoratorAnnotation } from "./decoratorannotation";
const OBSERVABLE = "observable";
const OBSERVABLE_REF = "observable.ref";
const OBSERVABLE_SHALLOW = "observable.shallow";
const OBSERVABLE_STRUCT = "observable.struct";
const defaultCreateObservableOptions = {
  deep: true,
  name: void 0,
  defaultDecorator: void 0
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
const observableAnnotation = createObservableAnnotation(OBSERVABLE);
const observableRefAnnotation = createObservableAnnotation(OBSERVABLE_REF, {
  enhancer_: referenceEnhancer
});
const observableShallowAnnotation = createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer_: shallowEnhancer
});
const observableStructAnnotation = createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer_: refStructEnhancer
});
function createObservableDecoratorAnnotation(annotation) {
  return createDecoratorAnnotation(annotation, decorateObservable20223_);
}
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  return options ? options.defaultDecorator ?? createAutoAnnotation(options) : void 0;
}
function getEnhancerFromAnnotation(annotation) {
  return !annotation ? deepEnhancer : annotation.options_?.enhancer_ ?? deepEnhancer;
}
function createObservable(v, arg2, arg3) {
  if (arg2 && typeof arg2.kind === "string") {
    return decorateObservable20223_(observableAnnotation, v, arg2);
  }
  if (isObservable(v)) {
    return v;
  }
  if (isPlainObject(v)) {
    return observable.object(v, arg2, arg3);
  }
  if (Array.isArray(v)) {
    return observable.array(v, arg2);
  }
  if (isES6Map(v)) {
    return observable.map(v, arg2);
  }
  if (isES6Set(v)) {
    return observable.set(v, arg2);
  }
  if (typeof v === "object" && v !== null) {
    return v;
  }
  return observable.box(v, arg2);
}
const observableFactories = {
  box(value, options) {
    const o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array(initialValues, options) {
    const o = asCreateObservableOptions(options);
    return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map(initialValues, options) {
    const o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set(initialValues, options) {
    const o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object(props, annotations, options) {
    return initObservable(
      () => extendObservable(asDynamicObservableObject({}, options), props, annotations)
    );
  }
};
const observableRef = createObservableDecoratorAnnotation(observableRefAnnotation);
const observableShallow = createObservableDecoratorAnnotation(observableShallowAnnotation);
const observableDeep = createObservableDecoratorAnnotation(observableAnnotation);
const observableStruct = createObservableDecoratorAnnotation(observableStructAnnotation);
var observable = assign(
  createObservable,
  observableAnnotation,
  observableFactories
);
export {
  OBSERVABLE,
  OBSERVABLE_REF,
  OBSERVABLE_SHALLOW,
  OBSERVABLE_STRUCT,
  asCreateObservableOptions,
  defaultCreateObservableOptions,
  getAnnotationFromOptions,
  getEnhancerFromAnnotation,
  getEnhancerFromOptions,
  observable,
  observableDeep,
  observableRef,
  observableShallow,
  observableStruct
};
