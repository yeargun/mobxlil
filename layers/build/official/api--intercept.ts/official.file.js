import {
  getAdministration,
  isFunction,
  registerInterceptor
} from "../internal";
function intercept(thing, propOrHandler, handler) {
  if (isFunction(handler)) {
    return interceptProperty(thing, propOrHandler, handler);
  } else {
    return interceptInterceptable(thing, propOrHandler);
  }
}
function interceptInterceptable(thing, handler) {
  return registerInterceptor(getAdministration(thing), handler);
}
function interceptProperty(thing, property, handler) {
  return registerInterceptor(getAdministration(thing, property), handler);
}
export {
  intercept
};
