export const planned = [
  "utils",
  "comparer-leaf",
  "errors",
  "iterable",
  "host",
  "atom",
  "globalstate",
  "derivation",
  "observable-core",
  "action",
  "spy",
  "reaction",
  "computed-value",
  "listen-utils",
  "intercept-utils",
  "transaction",
  "observable-value",
  "observable-object",
  "observable-array",
  "observable-map",
  "observable-set",
  "eq",
  "autorun",
  "when",
  "observable-api",
  "object-api",
  "isobservable",
  "iscomputed",
  "tojs",
  "makeobservable",
  "observe",
  "flow",
  "full",
];

export const layers = [
  {
    id: "utils",
    title: "Official src/utils/utils.ts without globalState/getNextId",
    dependsOn: [],
    officialFiles: ["src/utils/utils.ts"],
    lilEntry: "src/layers/utils.lil",
    upstream: "layers/upstream/utils.js",
    exports: [
      "assign",
      "getDescriptor",
      "defineProperty",
      "objectPrototype",
      "EMPTY_ARRAY",
      "EMPTY_OBJECT",
      "once",
      "noop",
      "isFunction",
      "isString",
      "isStringish",
      "isObject",
      "isPlainObject",
      "isGenerator",
      "addHiddenProp",
      "addHiddenFinalProp",
      "createInstanceofPredicate",
      "isES6Map",
      "isPlainES6Map",
      "isES6Set",
      "getPlainObjectKeys",
      "ownKeys",
      "stringifyKey",
      "toPrimitive",
      "hasProp",
      "getOwnPropertyDescriptors",
      "getFlag",
      "setFlag",
    ],
  },
];

export function layerById(id) {
  const layer = layers.find((entry) => entry.id === id);
  if (!layer) {
    throw new Error(
      `unknown mobx layer ${JSON.stringify(id)}; implemented: ${layers
        .map((entry) => entry.id)
        .join(", ")}; planned: ${planned.join(" → ")}`,
    );
  }
  return layer;
}
