// utils/utils.ts
var assign = Object.assign;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var plainObjectString = Object.toString();

// api/decoratorannotation.ts
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
