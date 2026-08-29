import "../internal";
function assert20223DecoratorType(context, types) {
  if (false) {
    die(
      `The decorator applied to '${String(context.name)}' cannot be used on a ${context.kind} element`
    );
  }
}
export {
  assert20223DecoratorType
};
