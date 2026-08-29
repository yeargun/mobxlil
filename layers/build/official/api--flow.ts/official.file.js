import {
  action,
  noop,
  isFunction,
  createFlowAnnotation,
  decorateFlow20223_,
  assign
} from "../internal";
import { createDecoratorAnnotation } from "./decoratorannotation";
const FLOW = "flow";
let generatorId = 0;
class FlowCancellationError extends Error {
  constructor() {
    super("FLOW_CANCELLED");
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = "FlowCancellationError";
  }
  toString() {
    return `Error: ${this.message}`;
  }
}
function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}
function createFlowDecoratorAnnotation(annotation) {
  return createDecoratorAnnotation(annotation, decorateFlow20223_);
}
const flowAnnotation = createFlowAnnotation("flow");
const flowBoundAnnotation = createFlowAnnotation("flow.bound", { bound: true });
const flow = assign(
  function flow2(arg1, arg2) {
    if (arg2 && typeof arg2.kind === "string") {
      return decorateFlow20223_(flowAnnotation, arg1, arg2);
    }
    if (false) {
      die(`Flow expects single argument with generator function`);
    }
    const generator = arg1;
    const name = generator.name || (false ? "<unnamed flow>" : "flow");
    const res = function() {
      const ctx = this;
      const args = arguments;
      const runId = false ? ++generatorId : 0;
      const gen = action(
        false ? `${name} - runid: ${runId} - init` : name,
        generator
      ).apply(ctx, args);
      let rejector;
      let pendingPromise = void 0;
      const promise = new Promise(function(resolve, reject) {
        let stepId = 0;
        rejector = reject;
        function onFulfilled(res2) {
          pendingPromise = void 0;
          let ret;
          try {
            ret = action(
              false ? `${name} - runid: ${runId} - yield ${stepId++}` : name,
              gen.next
            ).call(gen, res2);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }
        function onRejected(err) {
          pendingPromise = void 0;
          let ret;
          try {
            ret = action(
              false ? `${name} - runid: ${runId} - yield ${stepId++}` : name,
              gen.throw
            ).call(gen, err);
          } catch (e) {
            return reject(e);
          }
          next(ret);
        }
        function next(ret) {
          if (isFunction(ret?.then)) {
            ret.then(next, reject);
            return;
          }
          if (ret.done) {
            return resolve(ret.value);
          }
          pendingPromise = Promise.resolve(ret.value);
          return pendingPromise.then(onFulfilled, onRejected);
        }
        onFulfilled(void 0);
      });
      const cancelActionName = false ? `${name} - runid: ${runId} - cancel` : name;
      promise.cancel = action(cancelActionName, function() {
        try {
          if (pendingPromise) {
            cancelPromise(pendingPromise);
          }
          const res2 = gen.return(void 0);
          const yieldedPromise = Promise.resolve(res2.value);
          yieldedPromise.then(noop, noop);
          cancelPromise(yieldedPromise);
          rejector(new FlowCancellationError());
        } catch (e) {
          rejector(e);
        }
      });
      return promise;
    };
    res.isMobXFlow = true;
    return res;
  },
  flowAnnotation
);
const flowBound = createFlowDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(promise) {
  if (isFunction(promise.cancel)) {
    promise.cancel();
  }
}
function flowResult(result) {
  return result;
}
function isFlow(fn) {
  return fn?.isMobXFlow === true;
}
export {
  FLOW,
  FlowCancellationError,
  flow,
  flowBound,
  flowResult,
  isFlow,
  isFlowCancellationError
};
