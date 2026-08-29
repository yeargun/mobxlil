import {
  createAction,
  executeAction,
  isFunction,
  isStringish,
  createActionAnnotation,
  decorateAction20223_,
  assign
} from "../internal";
import { createDecoratorAnnotation } from "./decoratorannotation";
const ACTION = "action";
const ACTION_BOUND = "action.bound";
const AUTOACTION = "autoAction";
const AUTOACTION_BOUND = "autoAction.bound";
const DEFAULT_ACTION_NAME = "<unnamed action>";
const actionAnnotation = createActionAnnotation(ACTION);
const actionBoundAnnotation = createActionAnnotation(ACTION_BOUND, {
  bound: true
});
const autoActionAnnotation = createActionAnnotation(AUTOACTION, {
  autoAction: true
});
const autoActionBoundAnnotation = createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});
function createActionDecoratorAnnotation(annotation) {
  return createDecoratorAnnotation(annotation, decorateAction20223_);
}
function createActionFactory(autoAction2) {
  const res = function action2(arg1, arg2) {
    if (arg2 && typeof arg2.kind === "string") {
      return decorateAction20223_(
        autoAction2 ? autoActionAnnotation : actionAnnotation,
        arg1,
        arg2
      );
    }
    if (isFunction(arg1)) {
      return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction2);
    }
    if (isFunction(arg2)) {
      return createAction(arg1, arg2, autoAction2);
    }
    if (isStringish(arg1)) {
      return createActionDecoratorAnnotation(
        createActionAnnotation(autoAction2 ? AUTOACTION : ACTION, {
          name: arg1,
          autoAction: autoAction2
        })
      );
    }
    if (false) {
      die("Invalid arguments for `action`");
    }
  };
  return res;
}
const action = createActionFactory(false);
assign(action, actionAnnotation);
const autoAction = createActionFactory(true);
assign(autoAction, autoActionAnnotation);
const actionBound = createActionDecoratorAnnotation(actionBoundAnnotation);
const autoActionBound = createActionDecoratorAnnotation(autoActionBoundAnnotation);
function runInAction(fn) {
  return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, void 0);
}
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}
export {
  ACTION,
  ACTION_BOUND,
  AUTOACTION,
  AUTOACTION_BOUND,
  action,
  actionBound,
  autoAction,
  autoActionBound,
  isAction,
  runInAction
};
