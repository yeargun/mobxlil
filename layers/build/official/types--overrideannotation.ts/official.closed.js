// errors.ts
function die(error, ...args) {
  if (false) {
    let e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function") e = e.apply(null, args);
    throw new Error(`[MobX] ${e}`);
  }
  throw new Error(
    `[MobX] minified error nr: ${error}${args.length ? " " + args.map(String).join(",") : ""}. See mobx.js.org/errors`
  );
}

// types/overrideannotation.ts
var OVERRIDE = "override";
var override = {
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
  return 0 /* Cancel */;
}
function extend_(adm, key, descriptor, proxyTrap) {
  die(44, this.annotationType_);
}
export {
  isOverride,
  override
};
