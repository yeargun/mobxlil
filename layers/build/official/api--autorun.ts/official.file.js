import {
  EMPTY_OBJECT,
  Reaction,
  action,
  compareDefault,
  allowStateChanges
} from "../internal";
function autorun(view, opts = EMPTY_OBJECT) {
  if (false) {
    if (!isFunction(view)) {
      die("Autorun expects a function as first argument");
    }
    if (isAction(view)) {
      die("Autorun does not accept actions since actions are untrackable");
    }
  }
  const name = opts?.name ?? (false ? view.name || "Autorun@" + getNextId() : "Autorun");
  const runSync = !opts.scheduler && !opts.delay;
  let reaction2;
  if (runSync) {
    reaction2 = new Reaction(
      name,
      function() {
        this.track(reactionRunner);
      },
      opts.onError,
      opts.requiresObservable
    );
  } else {
    const scheduler = createSchedulerFromOptions(opts);
    let isScheduled = false;
    reaction2 = new Reaction(
      name,
      () => {
        if (!isScheduled) {
          isScheduled = true;
          scheduler(() => {
            isScheduled = false;
            if (!reaction2.isDisposed) {
              reaction2.track(reactionRunner);
            }
          });
        }
      },
      opts.onError,
      opts.requiresObservable
    );
  }
  function reactionRunner() {
    view(reaction2);
  }
  if (!opts?.signal?.aborted) {
    reaction2.schedule_();
  }
  return reaction2.getDisposer_(opts?.signal);
}
const run = (f) => f();
function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? (f) => setTimeout(f, opts.delay) : run;
}
function reaction(expression, effect, opts = EMPTY_OBJECT) {
  if (false) {
    if (!isFunction(expression) || !isFunction(effect)) {
      die("First and second argument to reaction should be functions");
    }
    if (!isPlainObject(opts)) {
      die("Third argument of reactions should be an object");
    }
  }
  const name = opts.name ?? (false ? "Reaction@" + getNextId() : "Reaction");
  const effectAction = action(
    name,
    opts.onError ? wrapErrorHandler(opts.onError, effect) : effect
  );
  const runSync = !opts.scheduler && !opts.delay;
  const scheduler = createSchedulerFromOptions(opts);
  let firstTime = true;
  let isScheduled = false;
  let value;
  const equals = opts.equals || compareDefault;
  const r = new Reaction(
    name,
    () => {
      if (firstTime || runSync) {
        reactionRunner();
      } else if (!isScheduled) {
        isScheduled = true;
        scheduler(reactionRunner);
      }
    },
    opts.onError,
    opts.requiresObservable
  );
  function reactionRunner() {
    isScheduled = false;
    if (r.isDisposed) {
      return;
    }
    let changed = false;
    const oldValue = value;
    r.track(() => {
      const nextValue = allowStateChanges(false, () => expression(r));
      changed = firstTime || !equals(value, nextValue);
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) {
      effectAction(value, oldValue, r);
    } else if (!firstTime && changed) {
      effectAction(value, oldValue, r);
    }
    firstTime = false;
  }
  if (!opts?.signal?.aborted) {
    r.schedule_();
  }
  return r.getDisposer_(opts?.signal);
}
function wrapErrorHandler(errorHandler, baseFn) {
  return function() {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}
export {
  autorun,
  reaction
};
