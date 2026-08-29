from pathlib import Path
import re

root = Path("/Users/yeargun/mobxlil/src")
src_path = root.parent / "scripts" / "types.unsplit.lil"
if not src_path.exists():
    src_path = root / "types.lil"
src = src_path.read_text().splitlines(True)


def body(a, b):
    return "".join(src[a - 1 : b])


HOST = {
    "hostGlobal",
    "gObject",
    "gArray",
    "gMap",
    "gSet",
    "gWeakMap",
    "gProxy",
    "gReflect",
    "gSymbol",
    "gError",
    "gTypeError",
    "gPromise",
    "gConsole",
    "gNumber",
    "gString",
    "undef",
    "isUndef",
    "isNullish",
    "isFn",
    "isStr",
    "isSym",
    "isNum",
    "isBool",
    "isObj",
    "isArr",
    "isStringish",
    "yes",
    "objectIs",
    "protoIsPrototypeOf",
    "toInt",
    "toNum",
    "toStr",
    "len",
    "sizeOf",
    "call0",
    "call1",
    "call2",
    "apply",
    "invoke0",
    "invoke1",
    "invoke2",
    "invoke3",
    "construct0",
    "construct1",
    "construct2",
    "construct3",
    "newMap",
    "newSet",
    "newArray",
    "newArrayLen",
    "arrayFrom",
    "slice",
    "slice2",
    "push",
    "pop",
    "indexOf",
    "splice1",
    "setAdd",
    "setHas",
    "setDelete",
    "mapHas",
    "mapGet",
    "mapSet",
    "mapDelete",
    "ownKeys",
    "objectKeys",
    "getDescriptor",
    "getDescriptors",
    "defineProperty",
    "getPrototypeOf",
    "setPrototypeOf",
    "hasOwn",
    "inOp",
    "isExtensible",
    "assign",
    "assign3",
    "createProto",
    "addHiddenProp",
    "addHiddenFinalProp",
    "defineGetter",
    "createInstanceofPredicate",
    "symbol",
    "wellKnown",
    "now",
    "warn",
    "warn2",
    "error1",
    "error2",
    "makeError",
    "throwErr",
    "throwMsg",
    "throwTypeError",
    "bind",
    "fnName",
    "isGenerator",
    "isPlainObject",
    "isES6Map",
    "isES6Set",
    "isPlainES6Map",
    "stringifyKey",
    "toPrimitive",
    "getPlainObjectKeys",
    "iteratorPrototype",
    "makeIterable",
    "once",
    "noop",
    "includesStr",
    "filterArr",
    "setTimeoutHost",
    "clearTimeoutHost",
    "queueMicrotaskHost",
    "dateCtor",
    "isNaNNum",
    "unaryPlus",
    "parseIntHost",
    "hostIsNaN",
    "numberIsNaN",
    "arrayConcat",
    "reflectSet",
    "reflectDefine",
    "reflectDelete",
    "newProxy",
}

OWNERS = {
    "DEV": ("dev-flag.lil", None),
    "EMPTY_ARRAY": ("constants.lil", None),
    "EMPTY_OBJECT": ("constants.lil", None),
    "$mobx": ("constants.lil", None),
    "ACTION": ("constants.lil", None),
    "ACTION_BOUND": ("constants.lil", None),
    "AUTOACTION": ("constants.lil", None),
    "AUTOACTION_BOUND": ("constants.lil", None),
    "OBSERVABLE": ("constants.lil", None),
    "OBSERVABLE_REF": ("constants.lil", None),
    "OBSERVABLE_SHALLOW": ("constants.lil", None),
    "OBSERVABLE_STRUCT": ("constants.lil", None),
    "COMPUTED": ("constants.lil", None),
    "COMPUTED_STRUCT": ("constants.lil", None),
    "FLOW": ("constants.lil", None),
    "UPDATE": ("constants.lil", None),
    "ADD": ("constants.lil", None),
    "DELETE": ("constants.lil", None),
    "SPLICE": ("constants.lil", None),
    "REMOVE": ("constants.lil", None),
    "CREATE": ("constants.lil", None),
    "MAX_SPLICE_SIZE": ("constants.lil", None),
    "MAKE_CANCEL": ("constants.lil", None),
    "MAKE_BREAK": ("constants.lil", None),
    "MAKE_CONTINUE": ("constants.lil", None),
    "die": ("errors.lil", None),
    "die1": ("errors.lil", None),
    "die2": ("errors.lil", None),
    "die3": ("errors.lil", None),
    "dieRest": ("errors.lil", None),
    "compareIdentity": ("utils/comparer.lil", None),
    "compareDefault": ("utils/comparer.lil", None),
    "defaultEquals": ("utils/comparer.lil", None),
    "isAtom": ("core/predicates.lil", None),
    "isComputedValue": ("core/predicates.lil", None),
    "isReaction": ("core/predicates.lil", None),
    "isObservableValue": ("core/predicates.lil", None),
    "isObservableMap": ("core/predicates.lil", None),
    "isObservableSet": ("core/predicates.lil", None),
    "isObservableArray": ("core/predicates.lil", None),
    "isObservableObject": ("core/predicates.lil", None),
    "isAction": ("core/predicates.lil", None),
    "isFlow": ("core/predicates.lil", None),
    "isObservableValuePred": ("core/predicates.lil", None),
    "isObservableMapPred": ("core/predicates.lil", None),
    "isObservableSetPred": ("core/predicates.lil", None),
    "isObservableArrayAdmPred": ("core/predicates.lil", None),
    "isObservableObjectAdmPred": ("core/predicates.lil", None),
    "globalState": ("core/globalstate.lil", None),
    "getNextId": ("core/globalstate.lil", None),
    "isolateGlobalState": ("core/globalstate.lil", None),
    "getGlobalState": ("core/globalstate.lil", None),
    "resetGlobalState": ("core/globalstate.lil", None),
    "isSpyEnabled": ("core/spy.lil", None),
    "spyReport": ("core/spy.lil", None),
    "spyReportStart": ("core/spy.lil", None),
    "spyReportEnd": ("core/spy.lil", None),
    "spyReportEnd0": ("core/spy.lil", None),
    "spy": ("core/spy.lil", None),
    "hasObservers": ("core/observable.lil", None),
    "getObservers": ("core/observable.lil", None),
    "addObserver": ("core/observable.lil", None),
    "removeObserver": ("core/observable.lil", None),
    "startBatch": ("core/observable.lil", None),
    "endBatch": ("core/observable.lil", None),
    "reportObserved": ("core/observable.lil", None),
    "reportChanged": ("core/observable.lil", None),
    "propagateChanged": ("core/observable.lil", None),
    "runReactions": ("core/observable.lil", None),
    "setReactionScheduler": ("core/observable.lil", None),
    "untrackedStart": ("core/derivation.lil", None),
    "untrackedEnd": ("core/derivation.lil", None),
    "untracked": ("core/derivation.lil", None),
    "allowStateReadsStart": ("core/derivation.lil", None),
    "allowStateReadsEnd": ("core/derivation.lil", None),
    "allowStateChangesStart": ("core/derivation.lil", None),
    "allowStateChangesEnd": ("core/derivation.lil", None),
    "allowStateChanges": ("core/derivation.lil", None),
    "checkIfStateModificationsAreAllowed": ("core/derivation.lil", None),
    "isComputingDerivation": ("core/derivation.lil", None),
    "Atom": ("core/atom.lil", None),
    "createAtom": ("core/atom.lil", None),
    "createAction": ("core/action.lil", None),
    "executeAction": ("core/action.lil", None),
    "_startAction": ("core/action.lil", None),
    "_endAction": ("core/action.lil", None),
    "Reaction": ("core/reaction.lil", None),
    "onReactionError": ("core/reaction.lil", None),
    "ComputedValue": ("core/computedvalue.lil", None),
    "hasListeners": ("types/listen-utils.lil", None),
    "registerListener": ("types/listen-utils.lil", None),
    "notifyListeners": ("types/listen-utils.lil", None),
    "hasInterceptors": ("types/intercept-utils.lil", None),
    "registerInterceptor": ("types/intercept-utils.lil", None),
    "interceptChange": ("types/intercept-utils.lil", None),
    "isAnnotation": ("api/annotation.lil", None),
    "assert20223DecoratorType": ("api/decorators.lil", None),
    "createDecoratorAnnotation": ("api/decoratorannotation.lil", None),
    "initObservable": ("types/type-utils-init.lil", None),
}

IDENT = re.compile(r"\b(\$?[A-Za-z_][A-Za-z0-9_]*)\b")
DECL = re.compile(
    r"(?:export\s+)?(?:JsValue|void|bool|string|int)\s+([A-Za-z_][A-Za-z0-9_]*)"
)


def used_names(text):
    names = set(IDENT.findall(text))
    if "$mobx" in text:
        names.add("$mobx")
    return names


def declared_names(text):
    return set(DECL.findall(text))


def rel_import(from_file, target):
    depth = len(Path(from_file).parts) - 1
    prefix = "../" * depth if depth else "./"
    return prefix + target


def format_import(path, names):
    names = list(dict.fromkeys(names))
    if len(names) == 1:
        return f'import {{ {names[0]} }} from "{path}";\n'
    inner = ",\n  ".join(names)
    return f'import {{\n  {inner}\n}} from "{path}";\n'


def ensure_export(text, names):
    for name in names:
        text = re.sub(
            rf"(?m)^(JsValue|void|bool|string|int) {name}\b",
            rf"export \1 {name}",
            text,
        )
    return text


def emit(rel, text, extra_imports=None, export=None, skip_auto=None, footer=""):
    extra_imports = extra_imports or []
    skip_auto = set(skip_auto or [])
    if export:
        text = ensure_export(text, export)
    declared = declared_names(text) | skip_auto
    used = used_names(text)
    host_names = sorted(n for n in HOST if n in used and n not in declared)
    if "reflectOwnKeys" in used:
        host_names = [n for n in host_names if n != "ownKeys"]
        host_names.append("ownKeys as reflectOwnKeys")
        host_names = list(dict.fromkeys(host_names))
    chunks = []
    if "DEV" in used:
        chunks.append(format_import(rel_import(rel, "dev-flag.lil"), ["DEV"]))
    if host_names:
        chunks.append(format_import(rel_import(rel, "host.lil"), host_names))
    grouped = {}
    for name in sorted(used):
        if name in declared or name == "DEV":
            continue
        owner = OWNERS.get(name)
        if not owner:
            continue
        path, alias = owner
        grouped.setdefault(path, []).append(alias or name)
    for path, names in grouped.items():
        chunks.append(format_import(rel_import(rel, path), names))
    for path, names in extra_imports:
        chunks.append(format_import(path, names))
    header = "".join(chunks)
    if header and not header.endswith("\n"):
        header += "\n"
    if header:
        header += "\n"
    out = header + (text if text.endswith("\n") else text + "\n")
    if footer:
        out = out + (footer if footer.endswith("\n") else footer + "\n")
    path = root / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(out)
    print(f"{rel:40} {path.stat().st_size:6}")


# already extracted: overrideannotation, configure, autorun, run-in-action

emit(
    "api/bindings.lil",
    """export JsValue observable = undef();
export JsValue observableRef = undef();
export JsValue observableShallow = undef();
export JsValue observableDeep = undef();
export JsValue observableStruct = undef();
export JsValue computed = undef();
export JsValue computedStruct = undef();
export JsValue action = undef();
export JsValue autoAction = undef();
export JsValue actionBound = undef();
export JsValue autoActionBound = undef();
export JsValue flow = undef();
export JsValue flowBound = undef();
export JsValue autoAnnotation = undef();
export JsValue extendObservable = undef();
""",
    skip_auto={"observable", "observableRef", "observableShallow", "observableDeep", "observableStruct", "computed", "computedStruct", "action", "autoAction", "actionBound", "autoActionBound", "flow", "flowBound", "autoAnnotation", "extendObservable"},
)

emit(
    "api/isobservable.lil",
    """export bool isObservableValueCheck(JsValue value) {
  if (!value.truthy()) {
    return false;
  }
  return isObservableObject(value) || value[$mobx].truthy() || isAtom(value) || isReaction(value) || isComputedValue(value);
}

"""
    + body(3112, 3134),
)

emit(
    "utils/eq.lil",
    body(219, 362),
    export=["deepEqual", "compareStructural", "compareShallow"],
)

emit(
    "types/modifiers.lil",
    """export JsValue deepEnhancerFn = undef();
export JsValue shallowEnhancerFn = undef();
export JsValue referenceEnhancerFn = undef();
export JsValue refStructEnhancerFn = undef();

"""
    + body(215, 217)
    + "\n"
    + body(2167, 2237)
    + "\n"
    + body(2246, 2267),
    extra_imports=[
        ("../api/bindings.lil", ["observable", "autoAction", "flow"]),
        ("../api/isobservable.lil", ["isObservableValueCheck"]),
        ("../utils/eq.lil", ["deepEqual"]),
    ],
    export=["getEnhancerFromOptions", "asCreateObservableOptions"],
    skip_auto={"deepEnhancerFn", "shallowEnhancerFn", "referenceEnhancerFn", "refStructEnhancerFn"},
)

emit(
    "types/adm-proxy.lil",
    body(460, 465),
    export=["admProxyOrTarget"],
)

emit(
    "types/observablevalue.lil",
    body(364, 458) + "\n" + body(467, 469),
)

emit(
    "types/observableobject.lil",
    body(471, 493) + "\n" + body(499, 959),
    extra_imports=[
        ("../api/bindings.lil", ["autoAnnotation"]),
        ("./adm-proxy.lil", ["admProxyOrTarget"]),
        ("./overrideannotation.lil", ["isOverride"]),
        ("./autoannotation.lil", ["createAutoAnnotation"]),
        ("./observablevalue.lil", ["ObservableValue"]),
        ("./modifiers.lil", ["referenceEnhancerFn"]),
    ],
    export=["recordAnnotationApplied", "assertAnnotable", "asObservableObject", "setObjectValue"],
)

emit(
    "types/dynamicobject.lil",
    body(961, 1010),
    extra_imports=[("./observableobject.lil", ["asObservableObject", "setObjectValue"])],
)

emit(
    "types/autoannotation.lil",
    body(1012, 1089),
    extra_imports=[
        ("../api/bindings.lil", ["computed", "flow", "flowBound", "autoAction", "autoActionBound", "observable", "observableRef", "autoAnnotation"]),
        ("./adm-proxy.lil", ["admProxyOrTarget"]),
    ],
    footer="export { autoAnnotation };\n",
)

emit(
    "types/observablearray.lil",
    body(1091, 1536),
)

emit(
    "types/observablemap.lil",
    """JsValue ObservableMapMarker = JS.object();

"""
    + body(1541, 1937),
    extra_imports=[
        ("./modifiers.lil", ["deepEnhancerFn", "referenceEnhancerFn"]),
        ("./observablevalue.lil", ["ObservableValue"]),
    ],
)

emit(
    "types/observableset.lil",
    """JsValue ObservableSetMarker = JS.object();

JsValue dehanceMap(JsValue self, JsValue value) {
  if (!isUndef(self["dehancer"])) {
    return call1(self["dehancer"], undef(), value);
  }
  return value;
}

"""
    + body(1939, 2165),
    extra_imports=[("./modifiers.lil", ["deepEnhancerFn"])],
)

emit(
    "types/observableannotation.lil",
    body(2269, 2299),
    extra_imports=[("./modifiers.lil", ["deepEnhancerFn"])],
    export=["annotationOwnMake", "createObservableAnnotation"],
)

emit(
    "types/computedannotation.lil",
    body(2301, 2322),
    extra_imports=[("./observableannotation.lil", ["annotationOwnMake"])],
)

emit(
    "types/actionannotation.lil",
    body(2324, 2391),
    extra_imports=[("./adm-proxy.lil", ["admProxyOrTarget"])],
)

emit(
    "types/flowannotation.lil",
    body(2550, 2630),
    extra_imports=[
        ("../api/bindings.lil", ["flow"]),
        ("./adm-proxy.lil", ["admProxyOrTarget"]),
    ],
    export=["decorateFlow20223_", "createFlowAnnotation"],
)

emit(
    "api/extendobservable.lil",
    body(2770, 2817),
    extra_imports=[
        ("./bindings.lil", ["extendObservable"]),
        ("./isobservable.lil", ["isObservableValueCheck"]),
        ("../types/observableobject.lil", ["asObservableObject"]),
    ],
    footer="export { extendObservable };\n",
)

emit(
    "api/observable.lil",
    body(2393, 2445)
    + "\n"
    + body(2632, 2635)
    + "\n"
    + body(2645, 2697),
    extra_imports=[
        ("./bindings.lil", ["observable", "observableRef", "observableShallow", "observableDeep", "observableStruct"]),
        ("./isobservable.lil", ["isObservableValueCheck"]),
        ("./extendobservable.lil", ["extendObservable"]),
        ("../types/modifiers.lil", ["deepEnhancerFn", "referenceEnhancerFn", "shallowEnhancerFn", "refStructEnhancerFn", "getEnhancerFromOptions", "asCreateObservableOptions"]),
        ("../types/observablevalue.lil", ["ObservableValue"]),
        ("../types/observablearray.lil", ["createObservableArray"]),
        ("../types/observablemap.lil", ["ObservableMap"]),
        ("../types/observableset.lil", ["ObservableSet"]),
        ("../types/dynamicobject.lil", ["asDynamicObservableObject"]),
        ("../types/observableobject.lil", ["asObservableObject"]),
        ("../types/observableannotation.lil", ["createObservableAnnotation"]),
    ],
    footer="export { observable, observableRef, observableShallow, observableDeep, observableStruct };\n",
)

emit(
    "api/computed.lil",
    body(2447, 2498)
    + "\n"
    + body(2636, 2639)
    + "\n"
    + body(2699, 2722),
    extra_imports=[
        ("./bindings.lil", ["computed", "computedStruct"]),
        ("../utils/eq.lil", ["compareStructural"]),
        ("../types/computedannotation.lil", ["createComputedAnnotation"]),
        ("../types/observableobject.lil", ["asObservableObject"]),
    ],
    footer="export { computed, computedStruct };\n",
)

emit(
    "api/action.lil",
    body(2500, 2548)
    + "\n"
    + body(2640, 2643)
    + "\n"
    + body(2724, 2760),
    extra_imports=[
        ("./bindings.lil", ["action", "autoAction", "actionBound", "autoActionBound"]),
        ("../types/actionannotation.lil", ["createActionAnnotation"]),
        ("./run-in-action.lil", ["runInAction"]),
    ],
    footer="export { action, autoAction, actionBound, autoActionBound, runInAction };\n",
)

emit(
    "api/flow.lil",
    body(3136, 3262) + "\n" + body(3901, 3906),
    extra_imports=[
        ("./bindings.lil", ["flow", "flowBound"]),
        ("./action.lil", ["action"]),
        ("../types/flowannotation.lil", ["createFlowAnnotation", "decorateFlow20223_"]),
    ],
    footer="export { flow, flowBound };\n",
)

emit(
    "api/makeobservable.lil",
    body(3280, 3369),
    extra_imports=[
        ("./extendobservable.lil", ["extendObservable"]),
        ("../types/observableobject.lil", ["asObservableObject", "assertAnnotable", "recordAnnotationApplied"]),
    ],
)

emit(
    "api/object-api.lil",
    body(3371, 3557),
)

emit(
    "types/type-utils.lil",
    body(3559, 3650),
)

emit(
    "api/observe.lil",
    body(3652, 3718),
    extra_imports=[
        ("./autorun.lil", ["autorun"]),
        ("../types/type-utils.lil", ["getAdministration"]),
    ],
)

emit(
    "api/intercept.lil",
    body(3720, 3726),
    extra_imports=[("../types/type-utils.lil", ["getAdministration"])],
)

emit(
    "api/become-observed.lil",
    body(3728, 3760),
    extra_imports=[("../types/type-utils.lil", ["getAtom"])],
)

emit(
    "api/tojs.lil",
    body(3762, 3819),
    extra_imports=[
        ("./isobservable.lil", ["isObservableValueCheck"]),
        ("./object-api.lil", ["ownKeysApi"]),
    ],
)

emit(
    "api/extras.lil",
    body(3821, 3855),
    extra_imports=[("../types/type-utils.lil", ["getAtom"])],
)

emit(
    "api/iscomputed.lil",
    body(3857, 3875),
)

emit(
    "api/intercept-read.lil",
    body(3876, 3900),
    extra_imports=[("../types/type-utils.lil", ["getAdministration"])],
)

barrel = '''import { isObservable, isObservableProp, isObservableValueCheck } from "./api/isobservable.lil";
import { compareStructural, compareShallow, deepEqual } from "./utils/eq.lil";
import {
  deepEnhancerFn,
  shallowEnhancerFn,
  referenceEnhancerFn,
  refStructEnhancerFn,
  getEnhancerFromOptions,
  asCreateObservableOptions
} from "./types/modifiers.lil";
import { ObservableValue, isBoxedObservable } from "./types/observablevalue.lil";
import { override, isOverride } from "./types/overrideannotation.lil";
import { createAutoAnnotation, autoAnnotation } from "./types/autoannotation.lil";
import {
  recordAnnotationApplied,
  assertAnnotable,
  ObservableObjectAdministration,
  asObservableObject
} from "./types/observableobject.lil";
import { asDynamicObservableObject } from "./types/dynamicobject.lil";
import { createObservableArray, ObservableArrayAdministration } from "./types/observablearray.lil";
import { ObservableMap } from "./types/observablemap.lil";
import { ObservableSet } from "./types/observableset.lil";
import { createObservableAnnotation } from "./types/observableannotation.lil";
import { createComputedAnnotation } from "./types/computedannotation.lil";
import { createActionAnnotation } from "./types/actionannotation.lil";
import { createFlowAnnotation } from "./types/flowannotation.lil";
import { extendObservable } from "./api/extendobservable.lil";
import { observable, observableRef, observableShallow, observableDeep, observableStruct } from "./api/observable.lil";
import { computed, computedStruct } from "./api/computed.lil";
import { action, autoAction, actionBound, autoActionBound, runInAction } from "./api/action.lil";
import { flow, flowBound, FlowCancellationError, isFlowCancellationError, flowResult, isFlowApi } from "./api/flow.lil";
import { autorun, reaction, when } from "./api/autorun.lil";
import { configure } from "./api/configure.lil";
import { makeObservable, makeAutoObservable } from "./api/makeobservable.lil";
import {
  keys,
  values,
  entries,
  set,
  remove,
  has,
  get,
  ownKeysApi,
  definePropertyApi
} from "./api/object-api.lil";
import { getAtom, getAdministration, getDebugName } from "./types/type-utils.lil";
import { observe } from "./api/observe.lil";
import { intercept } from "./api/intercept.lil";
import { onBecomeObserved, onBecomeUnobserved } from "./api/become-observed.lil";
import { toJS } from "./api/tojs.lil";
import { getDependencyTree, getObserverTree } from "./api/extras.lil";
import { isComputed, isComputedProp } from "./api/iscomputed.lil";
import { interceptReads } from "./api/intercept-read.lil";

export {
  observable,
  observableRef,
  observableShallow,
  observableDeep,
  observableStruct,
  computed,
  computedStruct,
  action,
  autoAction,
  actionBound,
  autoActionBound,
  flow,
  flowBound,
  autoAnnotation,
  extendObservable,
  isObservable,
  isObservableProp,
  isObservableValueCheck,
  compareStructural,
  compareShallow,
  deepEqual,
  deepEnhancerFn,
  shallowEnhancerFn,
  referenceEnhancerFn,
  refStructEnhancerFn,
  getEnhancerFromOptions,
  asCreateObservableOptions,
  ObservableValue,
  isBoxedObservable,
  override,
  isOverride,
  createAutoAnnotation,
  recordAnnotationApplied,
  assertAnnotable,
  ObservableObjectAdministration,
  asObservableObject,
  asDynamicObservableObject,
  createObservableArray,
  ObservableArrayAdministration,
  ObservableMap,
  ObservableSet,
  createObservableAnnotation,
  createComputedAnnotation,
  createActionAnnotation,
  createFlowAnnotation,
  autorun,
  reaction,
  when,
  configure,
  runInAction,
  makeObservable,
  makeAutoObservable,
  keys,
  values,
  entries,
  set,
  remove,
  has,
  get,
  ownKeysApi,
  definePropertyApi,
  getAtom,
  getAdministration,
  getDebugName,
  observe,
  intercept,
  onBecomeObserved,
  onBecomeUnobserved,
  toJS,
  getDependencyTree,
  getObserverTree,
  isComputed,
  isComputedProp,
  interceptReads,
  FlowCancellationError,
  isFlowCancellationError,
  flowResult,
  isFlowApi
};
'''
(root / "types.lil").write_text(barrel)
print("types.lil barrel", (root / "types.lil").stat().st_size)
print("done")
