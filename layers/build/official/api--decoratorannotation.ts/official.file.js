import "../errors";
import { assign } from "../utils/utils";
function createDecoratorAnnotation(annotation, decorate) {
  return assign(function decoratorAnnotation(value, context) {
    if (context && typeof context.kind === "string") {
      return decorate(annotation, value, context);
    }
    if (false) {
      die(`Invalid arguments for \`${annotation.annotationType_}\``);
    }
    return void 0;
  }, annotation);
}
export {
  createDecoratorAnnotation
};
