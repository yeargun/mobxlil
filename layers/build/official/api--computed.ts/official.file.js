import {
  ComputedValue,
  isPlainObject,
  createComputedAnnotation,
  compareStructural,
  decorateComputed20223_,
  assign
} from "../internal";
import { createDecoratorAnnotation } from "./decoratorannotation";
const COMPUTED = "computed";
const COMPUTED_STRUCT = "computed.struct";
function createComputedDecoratorAnnotation(annotation) {
  return createDecoratorAnnotation(annotation, decorateComputed20223_);
}
const computedAnnotation = createComputedAnnotation(COMPUTED);
const computedStructAnnotation = createComputedAnnotation(COMPUTED_STRUCT, {
  equals: compareStructural
});
const computedStruct = createComputedDecoratorAnnotation(computedStructAnnotation);
const computed = function computed2(arg1, arg2) {
  if (arg2 && typeof arg2.kind === "string") {
    return decorateComputed20223_(computedAnnotation, arg1, arg2);
  }
  if (isPlainObject(arg1)) {
    return createComputedDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  }
  if (false) {
    if (!isFunction(arg1)) {
      die("First argument to `computed` should be an expression.");
    }
    if (isFunction(arg2)) {
      die(
        "A setter as second argument is no longer supported, use `{ set: fn }` option instead"
      );
    }
  }
  const opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name ||= arg1.name || "";
  return new ComputedValue(opts);
};
assign(computed, computedAnnotation);
export {
  COMPUTED,
  COMPUTED_STRUCT,
  computed,
  computedStruct
};
