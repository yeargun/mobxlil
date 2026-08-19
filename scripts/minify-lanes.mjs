import { transform as esbuildTransform } from "esbuild";
import { minify as terserMinify } from "terser";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const lilscriptRoot = process.env.LILSCRIPT_ROOT ?? resolve(import.meta.dirname, "../..", "lilscript");

async function viteOxcMinify(filename, source, options) {
  const vite = await import("vite");
  if (typeof vite.minify === "function") {
    return vite.minify(filename, source, options);
  }
  const popularVite = resolve(lilscriptRoot, "benchmarks/popular/node_modules/vite/dist/node/index.js");
  const lab = await import(pathToFileURL(popularVite).href);
  if (typeof lab.minify !== "function") {
    throw new Error("Vite/Oxc minify needs Vite 8 (Oxc). Use the lilscript popular lab or upgrade vite.");
  }
  return lab.minify(filename, source, options);
}

function requireCode(label, code) {
  if (typeof code !== "string" || code.length === 0) {
    throw new Error(`${label} did not produce JavaScript`);
  }
  return code;
}

function formatOxcErrors(errors) {
  return errors
    .map((error) =>
      [error.severity, error.message, error.codeframe].filter(Boolean).join(": "),
    )
    .join("\n");
}

export async function minifyLanes(source, filename) {
  const [esbuildResult, terserResult, oxcResult] = await Promise.all([
    esbuildTransform(source, {
      sourcefile: filename,
      loader: "js",
      format: "esm",
      target: "esnext",
      minify: true,
      legalComments: "none",
    }),
    terserMinify(source, {
      module: true,
      compress: { passes: 3 },
      mangle: true,
      format: { comments: false },
    }),
    viteOxcMinify(filename, source, {
      module: true,
      compress: true,
      mangle: true,
      codegen: {
        removeWhitespace: true,
        legalComments: "none",
      },
      sourcemap: false,
    }),
  ]);
  if (oxcResult.errors.length > 0) {
    throw new Error(`Vite/Oxc minification failed:\n${formatOxcErrors(oxcResult.errors)}`);
  }
  return {
    esbuild: requireCode("esbuild", esbuildResult.code),
    terser: requireCode("Terser", terserResult.code),
    oxc: requireCode("Vite/Oxc", oxcResult.code),
  };
}
