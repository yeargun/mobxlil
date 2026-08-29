import { die, MakeResult } from "../internal";
const OVERRIDE = "override";
const override = {
  annotationType_: OVERRIDE,
  make_,
  extend_
};
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}
function make_(adm, key) {
  if (false) {
    die(
      `Cannot apply '${this.annotationType_}' to '${adm.name_}.${key.toString()}':
'${this.annotationType_}' cannot be used on plain objects.`
    );
  }
  if (false) {
    die(
      `'${adm.name_}.${key.toString()}' is annotated with '${this.annotationType_}', but no such annotated member was found on prototype.`
    );
  }
  return MakeResult.Cancel;
}
function extend_(adm, key, descriptor, proxyTrap) {
  die(44, this.annotationType_);
}
export {
  isOverride,
  override
};
