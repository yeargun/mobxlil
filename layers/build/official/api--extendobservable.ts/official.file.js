import {
  asObservableObject,
  getOwnPropertyDescriptors,
  $mobx,
  ownKeys,
  initObservable
} from "../internal";
function extendObservable(target, properties, annotations, options) {
  if (false) {
    if (arguments.length > 4) {
      die("'extendObservable' expected 2-4 arguments");
    }
    if (typeof target !== "object") {
      die("'extendObservable' expects an object as first argument");
    }
    if (isObservableMap(target)) {
      die("'extendObservable' should not be used on maps, use map.merge instead");
    }
    if (!isPlainObject(properties)) {
      die(`'extendObservable' only accepts plain objects as second argument`);
    }
    if (isObservable(properties) || isObservable(annotations)) {
      die(`Extending an object with another observable (object) is not supported`);
    }
  }
  const descriptors = getOwnPropertyDescriptors(properties);
  initObservable(() => {
    const adm = asObservableObject(target, options)[$mobx];
    ownKeys(descriptors).forEach((key) => {
      adm.extend_(
        key,
        descriptors[key],
        // must pass "undefined" for { key: undefined }
        !annotations ? true : key in annotations ? annotations[key] : true
      );
    });
  });
  return target;
}
export {
  extendObservable
};
