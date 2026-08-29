import { deepEqual } from "../internal";
function compareIdentity(a, b) {
  return a === b;
}
function compareStructural(a, b) {
  return deepEqual(a, b);
}
function compareShallow(a, b) {
  return deepEqual(a, b, 1);
}
const compareDefault = Object.is;
export {
  compareDefault,
  compareIdentity,
  compareShallow,
  compareStructural
};
