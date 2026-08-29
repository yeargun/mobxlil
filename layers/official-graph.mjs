import { readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const officialSrc = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "node_modules/mobx/src",
);

const skip = new Set(["global.d.ts", "internal.ts"]);

function walkTs(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkTs(path, out);
      continue;
    }
    if (entry.name.endsWith(".ts") && !skip.has(entry.name)) {
      out.push(path);
    }
  }
  return out.sort();
}

function stripTypes(source) {
  return source
    .replace(/^\s*import\s+type\s+[\s\S]*?;\s*$/gm, "")
    .replace(/^\s*export\s+type\s+[\s\S]*?;\s*$/gm, "")
    .replace(/^\s*export\s+interface\s+[\s\S]*?(?=\n(?:export|import|const|function|class|type|interface|$))/gm, "");
}

const IDENT = "\\$?[A-Za-z_][\\w$]*";

function parseNamedList(list) {
  return list
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .filter((part) => !part.startsWith("type "))
    .map((part) => {
      const aliased = part.match(new RegExp(`^(${IDENT})\\s+as\\s+(${IDENT})$`));
      if (aliased) {
        return { imported: aliased[1], local: aliased[2] };
      }
      const name = part.match(new RegExp(`^(${IDENT})$`));
      return name ? { imported: name[1], local: name[1] } : null;
    })
    .filter(Boolean);
}

function parseModule(source) {
  const imports = [];
  const exports = new Set();
  const stars = [];
  const text = stripTypes(source).replace(/^\s*import\s+type\s+[\s\S]*?;\s*$/gm, "");
  const importRe = new RegExp(
    `(?:^|\\n)\\s*import\\s+(?:(${IDENT})|(?:\\{([^}]*)\\})|(\\*\\s+as\\s+${IDENT}))\\s+from\\s+["']([^"']+)["']`,
    "g",
  );
  let match;
  while ((match = importRe.exec(text))) {
    const spec = match[4];
    if (match[1]) {
      imports.push({ spec, names: [match[1]], star: false });
    } else if (match[2]) {
      imports.push({
        spec,
        names: parseNamedList(match[2]).map((item) => item.imported),
        star: false,
      });
    } else {
      imports.push({ spec, names: [], star: true });
    }
  }
  const exportFromRe =
    /(?:^|\n)\s*export\s+(?:\*|\{([^}]*)\})\s+from\s+["']([^"']+)["']/g;
  while ((match = exportFromRe.exec(text))) {
    const spec = match[2];
    if (match[1]) {
      for (const item of parseNamedList(match[1])) {
        exports.add(item.local);
      }
      imports.push({
        spec,
        names: parseNamedList(match[1]).map((item) => item.imported),
        star: false,
      });
    } else {
      stars.push(spec);
      imports.push({ spec, names: [], star: true });
    }
  }
  const exportDeclRe = new RegExp(
    `(?:^|\\n)\\s*export\\s+(?:async\\s+)?(?:function|class|(?:const\\s+)?enum|const|let|var)\\s+(${IDENT})`,
    "g",
  );
  while ((match = exportDeclRe.exec(text))) {
    exports.add(match[1]);
  }
  const exportListRe = /(?:^|\n)\s*export\s+\{([^}]+)\}/g;
  while ((match = exportListRe.exec(text))) {
    if (match[0].includes(" from ")) {
      continue;
    }
    for (const item of parseNamedList(match[1])) {
      exports.add(item.local);
    }
  }
  return { imports, exports, stars };
}

function resolveSpec(fromFile, spec) {
  if (!spec.startsWith(".")) {
    return null;
  }
  const base = resolve(dirname(fromFile), spec);
  if (base.endsWith(".ts")) {
    return base;
  }
  return `${base}.ts`;
}

function isInternal(spec) {
  return spec === "../internal" || spec === "./internal" || spec.endsWith("/internal");
}

export function officialModules() {
  const files = walkTs(officialSrc);
  const modules = new Map();
  for (const file of files) {
    const id = relative(officialSrc, file).replace(/\\/g, "/");
    modules.set(id, {
      id,
      file,
      ...parseModule(readFileSync(file, "utf8")),
    });
  }
  return modules;
}

export function exportOwners(modules) {
  const owners = new Map();
  const internal = readFileSync(join(officialSrc, "internal.ts"), "utf8");
  const starFrom = [];
  const namedFrom = [];
  const starRe = /export\s+\*\s+from\s+["']([^"']+)["']/g;
  let match;
  while ((match = starRe.exec(internal))) {
    starFrom.push(match[1]);
  }
  const namedRe = /export\s+\{([^}]+)\}\s+from\s+["']([^"']+)["']/g;
  while ((match = namedRe.exec(internal))) {
    namedFrom.push({
      spec: match[2],
      names: parseNamedList(match[1]).map((item) => item.imported),
    });
  }
  for (const spec of starFrom) {
    const file = resolveSpec(join(officialSrc, "internal.ts"), spec);
    const id = relative(officialSrc, file).replace(/\\/g, "/");
    const mod = modules.get(id);
    if (!mod) {
      continue;
    }
    for (const name of mod.exports) {
      owners.set(name, id);
    }
  }
  for (const entry of namedFrom) {
    const file = resolveSpec(join(officialSrc, "internal.ts"), entry.spec);
    const id = relative(officialSrc, file).replace(/\\/g, "/");
    for (const name of entry.names) {
      owners.set(name, id);
    }
  }
  for (const [id, mod] of modules) {
    if (id === "mobx.ts") {
      continue;
    }
    for (const name of mod.exports) {
      if (!owners.has(name)) {
        owners.set(name, id);
      }
    }
  }
  return owners;
}

export function closedGraph(entryId, modules, owners) {
  const seen = new Set();
  const stack = [entryId];
  while (stack.length) {
    const id = stack.pop();
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    const mod = modules.get(id);
    if (!mod) {
      continue;
    }
    for (const imp of mod.imports) {
      if (isInternal(imp.spec)) {
        if (imp.star) {
          for (const owner of new Set(owners.values())) {
            stack.push(owner);
          }
          continue;
        }
        for (const name of imp.names) {
          const owner = owners.get(name);
          if (owner && owner !== "mobx.ts") {
            stack.push(owner);
          }
        }
        continue;
      }
      const resolved = resolveSpec(mod.file, imp.spec);
      if (!resolved) {
        continue;
      }
      stack.push(relative(officialSrc, resolved).replace(/\\/g, "/"));
    }
  }
  return [...seen].sort();
}

export function moduleOrder(modules, owners) {
  return [...modules.keys()]
    .map((id) => ({
      id,
      files: closedGraph(id, modules, owners).length,
      exports: [...modules.get(id).exports].sort(),
    }))
    .sort((left, right) => left.files - right.files || left.id.localeCompare(right.id));
}
