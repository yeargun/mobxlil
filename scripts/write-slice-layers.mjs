import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { slices } from "../layers/lil-map.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
mkdirSync(resolve(root, "src/layers"), { recursive: true });

const sources = {
  host: "../host.lil",
  kernel: "../kernel.lil",
  types: "../types.lil",
};

const mixed = {
  comparer: `import { compareIdentity, compareDefault } from "../kernel.lil";
import { compareStructural, compareShallow } from "../types.lil";
export { compareIdentity, compareDefault, compareStructural, compareShallow };
`,
  "action-api": `import { isAction } from "../kernel.lil";
import { action, autoAction, actionBound, autoActionBound, runInAction } from "../types.lil";
export { action, autoAction, actionBound, autoActionBound, runInAction, isAction };
`,
};

let wrote = 0;
for (const layer of slices) {
  if (layer.kind === "full" || !layer.exports?.length) {
    continue;
  }
  if (layer.from === "mixed") {
    const source = mixed[layer.id];
    if (!source) {
      throw new Error(`no mixed template for ${layer.id}`);
    }
    writeFileSync(resolve(root, layer.lilEntry), source);
    wrote += 1;
    continue;
  }
  const source = sources[layer.from];
  if (!source) {
    continue;
  }
  writeFileSync(
    resolve(root, layer.lilEntry),
    `import { ${layer.exports.join(", ")} } from "${source}";
export { ${layer.exports.join(", ")} };
`,
  );
  wrote += 1;
}

console.log(`wrote ${wrote} slice entries`);
