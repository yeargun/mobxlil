from pathlib import Path

root = Path("/Users/yeargun/mobxlil/src")
src = (root / "kernel.lil").read_text().splitlines(True)

def body(a, b):
    return "".join(src[a - 1 : b])

def emit(rel, text):
    path = root / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text if text.endswith("\n") else text + "\n")
    print(rel, path.stat().st_size)

emit(
    "constants.lil",
    """import {
  symbol,
  emptyArrayFrozen,
  emptyObjectFrozen
} from "./host.lil";

"""
    + body(103, 131),
)

emit(
    "errors.lil",
    """import { DEV } from "./dev-flag.lil";
import {
  isStr,
  toInt,
  toStr,
  stringifyKey,
  throwErr,
  makeError,
  len,
  gString,
  push
} from "./host.lil";

"""
    + body(226, 385),
)

emit(
    "utils/comparer.lil",
    """import { objectIs } from "../host.lil";

"""
    + body(387, 397),
)

emit(
    "core/predicates.lil",
    """import {
  undef,
  isFn,
  isObj,
  isNullish
} from "../host.lil";
import { $mobx } from "../constants.lil";

export JsValue isAtomPred = undef();
export JsValue isComputedValuePred = undef();
export JsValue isReactionPred = undef();
export JsValue isObservableValuePred = undef();
export JsValue isObservableMapPred = undef();
export JsValue isObservableSetPred = undef();
export JsValue isObservableArrayAdmPred = undef();
export JsValue isObservableObjectAdmPred = undef();

export bool isAtom(JsValue x) {
  return isObj(x) && JS.strictEqual(x["isMobXAtom"], true);
}

export bool isComputedValue(JsValue x) {
  return isObj(x) && JS.strictEqual(x["isMobXComputedValue"], true);
}

export bool isReaction(JsValue x) {
  return isObj(x) && JS.strictEqual(x["isMobXReaction"], true);
}

export bool isObservableValue(JsValue x) {
  return JS.call(isObservableValuePred, undef(), x).truthy();
}

export bool isObservableMap(JsValue x) {
  return JS.call(isObservableMapPred, undef(), x).truthy();
}

export bool isObservableSet(JsValue x) {
  return JS.call(isObservableSetPred, undef(), x).truthy();
}

export bool isObservableArray(JsValue thing) {
  if (!isObj(thing)) {
    return false;
  }
  return JS.call(isObservableArrayAdmPred, undef(), thing[$mobx]).truthy();
}

export bool isObservableObject(JsValue thing) {
  if (!isObj(thing)) {
    return false;
  }
  return JS.call(isObservableObjectAdmPred, undef(), thing[$mobx]).truthy();
}

export bool isAction(JsValue thing) {
  return isFn(thing) && JS.strictEqual(thing["isMobxAction"], true);
}

export bool isFlow(JsValue fn) {
  if (JS.isNullish(fn)) {
    return false;
  }
  return JS.strictEqual(fn["isMobXFlow"], true);
}
""",
)

emit(
    "core/globalstate.lil",
    """import { DEV } from "../dev-flag.lil";
import {
  hostGlobal,
  toInt,
  undef,
  objectKeys,
  indexOf,
  setTimeoutHost,
  push,
  len
} from "../host.lil";
import { die } from "../errors.lil";

bool canMergeGlobalState = true;
bool isolateCalled = false;

"""
    + body(145, 224)
    + "\n"
    + body(1563, 1598),
)

emit(
    "core/spy.lil",
    """import { DEV } from "../dev-flag.lil";
import {
  len,
  call1,
  undef,
  assign3,
  push,
  once,
  warn
} from "../host.lil";
import { globalState } from "./globalstate.lil";

"""
    + body(457, 526),
)

emit(
    "core/shared.lil",
    """import {
  defineProperty,
  toInt,
  call0,
  undef
} from "../host.lil";

"""
    + body(991, 1030).replace("void installFlagAccessor", "export void installFlagAccessor").replace("void installNumericFlagAccessor", "export void installNumericFlagAccessor")
    + "\n"
    + body(940, 956).replace("void onBOImpl", "export void onBOImpl").replace("void onBUOImpl", "export void onBUOImpl")
    + "\n"
    + body(827, 839).replace("bool isBoolish", "export bool isBoolish")
    + "\n"
    + """
export void installAtomFlags(JsValue proto) {
  installFlagAccessor(proto, "isBeingObserved", 1);
  installFlagAccessor(proto, "isPendingUnobservation", 2);
  installNumericFlagAccessor(proto, "diffValue", 4);
}

export void installReactionFlags(JsValue proto) {
  installFlagAccessor(proto, "isDisposed", 1);
  installFlagAccessor(proto, "isScheduled", 2);
  installFlagAccessor(proto, "isTrackPending", 4);
  installFlagAccessor(proto, "isRunning", 8);
  installNumericFlagAccessor(proto, "diffValue", 16);
}

export void installComputedFlags(JsValue proto) {
  installFlagAccessor(proto, "isComputing", 1);
  installFlagAccessor(proto, "isRunningSetter", 2);
  installFlagAccessor(proto, "isBeingObserved", 4);
  installFlagAccessor(proto, "isPendingUnobservation", 8);
  installNumericFlagAccessor(proto, "diffValue", 16);
}
""",
)

emit(
    "core/observable.lil",
    """import { DEV } from "../dev-flag.lil";
import {
  setAdd,
  setDelete,
  toInt,
  sizeOf,
  push,
  len,
  invoke0,
  call1,
  undef,
  warn,
  toStr,
  error1,
  splice1
} from "../host.lil";
import {
  STALE,
  POSSIBLY_STALE,
  UP_TO_DATE,
  MAX_REACTION_ITERATIONS
} from "../constants.lil";
import { globalState } from "./globalstate.lil";
import { isComputedValue } from "./predicates.lil";

"""
    + body(528, 673)
    + "\n"
    + body(1165, 1210),
)

emit(
    "core/derivation.lil",
    """import { DEV } from "../dev-flag.lil";
import {
  undef,
  isUndef,
  isObj,
  isNullish,
  toInt,
  toStr,
  len,
  call0,
  call1,
  invoke0,
  construct1,
  defineProperty,
  newArrayLen,
  warn
} from "../host.lil";
import {
  NOT_TRACKING,
  UP_TO_DATE,
  POSSIBLY_STALE,
  STALE
} from "../constants.lil";
import { globalState } from "./globalstate.lil";
import { die, die2 } from "../errors.lil";
import { isComputedValue } from "./predicates.lil";
import {
  addObserver,
  removeObserver,
  startBatch
} from "./observable.lil";
import { isBoolish } from "./shared.lil";

"""
    + body(675, 764)
    + body(766, 825)
    + body(841, 937),
)

emit(
    "core/atom.lil",
    """import { DEV } from "../dev-flag.lil";
import {
  isUndef,
  toStr,
  newSet,
  construct0,
  construct1,
  setAdd,
  noop,
  createInstanceofPredicate
} from "../host.lil";
import { NOT_TRACKING } from "../constants.lil";
import { getNextId } from "./globalstate.lil";
import { reportObserved, reportChanged } from "./observable.lil";
import { onBOImpl, onBUOImpl, installAtomFlags } from "./shared.lil";
import { isAtomPred } from "./predicates.lil";

"""
    + body(958, 990)
    + """
isAtomPred = createInstanceofPredicate("Atom", Atom);
installAtomFlags(Atom["prototype"]);

"""
    + body(1037, 1061),
)

emit(
    "core/action.lil",
    """import { DEV } from "../dev-flag.lil";
import {
  isFn,
  isStr,
  isNullish,
  isUndef,
  undef,
  toInt,
  apply,
  arrayFrom,
  defineProperty,
  getDescriptor,
  now
} from "../host.lil";
import { ACTION, EMPTY_ARRAY } from "../constants.lil";
import { die } from "../errors.lil";
import { globalState } from "./globalstate.lil";
import {
  startBatch,
  endBatch
} from "./observable.lil";
import {
  untrackedStart,
  untrackedEnd,
  allowStateChangesStart,
  allowStateChangesEnd,
  allowStateReadsStart,
  allowStateReadsEnd
} from "./derivation.lil";
import { isSpyEnabled, spyReportStart, spyReportEnd } from "./spy.lil";

int currentActionId = 0;
int nextActionId = 1;

JsValue tmpNameDescriptor = JS.object("value", "action", "configurable", true, "writable", false, "enumerable", false);

JsValue isFunctionNameConfigurableDesc = getDescriptor(JS.method0((JsValue _self) => {
  return undef();
}), "name");
bool isFunctionNameConfigurable = !isNullish(isFunctionNameConfigurableDesc) && isFunctionNameConfigurableDesc["configurable"].truthy();

"""
    + body(1063, 1163),
)

emit(
    "core/reaction.lil",
    """import { DEV } from "../dev-flag.lil";
import {
  isUndef,
  isNullish,
  isFn,
  toStr,
  toInt,
  len,
  push,
  indexOf,
  splice1,
  invoke0,
  call0,
  call1,
  call2,
  throwErr,
  error2,
  warn,
  inOp,
  gSymbol
} from "../host.lil";
import { NOT_TRACKING, $mobx } from "../constants.lil";
import { getNextId, globalState } from "./globalstate.lil";
import {
  startBatch,
  endBatch,
  runReactions
} from "./observable.lil";
import {
  shouldCompute,
  trackDerivedFunction,
  clearObserving,
  isCaughtException
} from "./derivation.lil";
import { isSpyEnabled, spyReport, spyReportStart, spyReportEnd } from "./spy.lil";
import { isReactionPred } from "./predicates.lil";
import { installReactionFlags } from "./shared.lil";
import { createInstanceofPredicate } from "../host.lil";

"""
    + body(1212, 1368)
    + """
isReactionPred = createInstanceofPredicate("Reaction", Reaction);
installReactionFlags(Reaction["prototype"]);

"""
    + body(1374, 1383),
)

emit(
    "core/computedvalue.lil",
    """import { DEV } from "../dev-flag.lil";
import {
  toStr,
  toInt,
  undef,
  yes,
  call0,
  call1,
  call2,
  invoke0,
  construct1,
  throwErr,
  createInstanceofPredicate,
  wellKnown
} from "../host.lil";
import {
  NOT_TRACKING,
  UP_TO_DATE,
  UPDATE
} from "../constants.lil";
import { die, die1, die2 } from "../errors.lil";
import { defaultEquals } from "../utils/comparer.lil";
import { getNextId, globalState } from "./globalstate.lil";
import {
  startBatch,
  endBatch,
  reportObserved,
  propagateMaybeChanged,
  propagateChangeConfirmed
} from "./observable.lil";
import {
  shouldCompute,
  trackDerivedFunction,
  clearObserving,
  isCaughtException,
  CaughtException,
  allowStateChangesStart,
  allowStateChangesEnd
} from "./derivation.lil";
import { createAction } from "./action.lil";
import { isSpyEnabled, spyReport } from "./spy.lil";
import { isComputedValuePred } from "./predicates.lil";
import { onBOImpl, onBUOImpl, installComputedFlags, isBoolish } from "./shared.lil";
import { toPrimitive } from "../host.lil";

"""
    + body(1385, 1556)
    + """
isComputedValuePred = createInstanceofPredicate("ComputedValue", ComputedValue);
installComputedFlags(ComputedValue["prototype"]);
""",
)

emit(
    "types/listen-utils.lil",
    """import {
  isUndef,
  undef,
  len,
  push,
  indexOf,
  splice1,
  slice,
  call1,
  once
} from "../host.lil";
import { untrackedStart, untrackedEnd } from "../core/derivation.lil";

"""
    + body(1645, 1679),
)

emit(
    "types/intercept-utils.lil",
    """import {
  isUndef,
  undef,
  len,
  push,
  indexOf,
  splice1,
  slice,
  call1,
  once
} from "../host.lil";
import { die } from "../errors.lil";
import { untrackedStart, untrackedEnd } from "../core/derivation.lil";

"""
    + body(1600, 1643),
)

emit(
    "api/transaction.lil",
    """import { startBatch, endBatch } from "../core/observable.lil";

"""
    + body(1699, 1706),
)

emit(
    "api/annotation.lil",
    """import { isObj, isFn, isStr } from "../host.lil";

"""
    + body(1708, 1710),
)

emit(
    "api/decorators.lil",
    """import { DEV } from "../dev-flag.lil";
import { includesStr, stringifyKey, toStr } from "../host.lil";
import { die } from "../errors.lil";

"""
    + body(1712, 1716),
)

emit(
    "api/decoratorannotation.lil",
    """import { DEV } from "../dev-flag.lil";
import { assign, isStr, undef, toStr } from "../host.lil";
import { die } from "../errors.lil";

"""
    + body(1718, 1728),
)

emit(
    "types/type-utils-init.lil",
    """import { DEV } from "../dev-flag.lil";
import { undef, call0 } from "../host.lil";
import { startBatch, endBatch } from "../core/observable.lil";
import {
  untrackedStart,
  untrackedEnd,
  allowStateChangesStart,
  allowStateChangesEnd
} from "../core/derivation.lil";

"""
    + body(1681, 1697),
)

print("done extract")
