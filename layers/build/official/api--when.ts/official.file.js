import {
  $mobx,
  autorun,
  createAction,
  allowStateChanges,
  assign
} from "../internal";
function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") {
    return whenPromise(predicate, arg1);
  }
  return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
  let timeoutHandle;
  if (typeof opts.timeout === "number") {
    const error = new Error("WHEN_TIMEOUT");
    timeoutHandle = setTimeout(() => {
      if (!disposer[$mobx].isDisposed) {
        disposer();
        if (opts.onError) {
          opts.onError(error);
        } else {
          throw error;
        }
      }
    }, opts.timeout);
  }
  opts.name = false ? opts.name || "When@" + getNextId() : "When";
  const effectAction = createAction(
    false ? opts.name + "-effect" : "When-effect",
    effect
  );
  var disposer = autorun((r) => {
    let cond = allowStateChanges(false, predicate);
    if (cond) {
      r.dispose();
      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }
      effectAction();
    }
  }, opts);
  return disposer;
}
function whenPromise(predicate, opts) {
  if (false) {
    return die(`the options 'onError' and 'promise' cannot be combined`);
  }
  if (opts?.signal?.aborted) {
    return assign(Promise.reject(new Error("WHEN_ABORTED")), { cancel: () => null });
  }
  let cancel;
  let abort;
  const res = new Promise((resolve, reject) => {
    let disposer = _when(predicate, resolve, assign({}, opts, { onError: reject }));
    cancel = () => {
      disposer();
      reject(new Error("WHEN_CANCELLED"));
    };
    abort = () => {
      disposer();
      reject(new Error("WHEN_ABORTED"));
    };
    opts?.signal?.addEventListener?.("abort", abort);
  }).finally(() => opts?.signal?.removeEventListener?.("abort", abort));
  res.cancel = cancel;
  return res;
}
export {
  when
};
