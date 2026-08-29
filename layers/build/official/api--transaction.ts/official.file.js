import { endBatch, startBatch } from "../internal";
function transaction(action, thisArg = void 0) {
  startBatch();
  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}
export {
  transaction
};
