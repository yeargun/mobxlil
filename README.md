# @itslil/mobx

MobX 7.0.0, reimplemented in [LilScript](https://github.com/yeargun/lilscript) and published as a dependency-free drop-in.

This is **not** the official `mobx` package. It implements the `mobx@7.0.0` public API. Types are the official 7.0.0 declarations.

**Official MobX tests pass.** The unchanged `mobx@7.0.0` suite runs against this runtime: **769 passed, 0 failed** (11 tests are skipped in upstream itself). Mixed-version tests are part of the same check.

**Site:** [yeargun.github.io/mobxlil](https://yeargun.github.io/mobxlil/)

```sh
npm install @itslil/mobx
```

```js
import { observable, computed, autorun, action } from "@itslil/mobx"

const count = observable.box(0)
const doubled = computed(() => count.get() * 2)
autorun(() => console.log(doubled.get()))
action(() => count.set(count.get() + 1))()
```

Alias the import if you already write `from "mobx"`:

```js
{
  "dependencies": { "@itslil/mobx": "7.0.0" },
  "overrides": { "mobx": "npm:@itslil/mobx@7.0.0" }
}
```

## Size

The fair production comparison is **Vite + Terser of official `mobx@7.0.0`**. That is what a React/Vite app actually ships. Published official ESM is the npm file *before* that minify, so it is not the headline.

Measured with `lilscript-codec` gzip-9 / Brotli-11.

| Lane | Raw | gzip-9 | Brotli-11 | vs Vite+Terser |
| --- | ---: | ---: | ---: | ---: |
| Official published ESM | 180,997 | 40,282 | 33,453 | 1.90× |
| Vite + esbuild of official | 71,447 | 20,025 | 17,808 | 1.01× |
| Vite + Terser of official | 71,255 | 19,850 | 17,610 | 1.00× |
| **`@itslil/mobx` production ESM** | **65,664** | **18,690** | **16,736** | **0.95×** |

**0.95× Brotli vs Vite+Terser** (17,610 → 16,736). This is an open-world npm package: property names and `|0` stay so it remains a drop-in for app code that already minifies `mobx` with Vite.

## Performance

Quiet Node v24.11.1 versus `mobx@7.0.0`, `NODE_ENV=production`. 8 samples, first 2 discarded, median of the rest. Ratio is `@itslil/mobx` / official (**lower is faster**). Every suite checksums equal, so the graphs compute the same values. Retained memory **0.98×**.

Compiled for realistic performance, not maximum compression. The pattern is: reaction scheduling and collection work tend to be faster; box/proxy/map sit at official ± a few percent; the slowest suite is still under the 1.05× gate.

| Suite | What it stresses | mobx@7.0.0 | @itslil/mobx | Ratio |
| --- | --- | ---: | ---: | ---: |
| reactions | autorun / reaction fire | 6.35 ms | 5.52 ms | **0.869×** |
| computed-diamond | shared computed graph | 9.11 ms | 8.31 ms | **0.912×** |
| array | observable array mutate | 7.31 ms | 6.70 ms | **0.916×** |
| batching-actions | `runInAction` | 7.64 ms | 7.27 ms | **0.952×** |
| set | observable set | 11.10 ms | 10.56 ms | **0.951×** |
| decorators | `makeObservable` | 7.26 ms | 7.04 ms | **0.970×** |
| computed-chain | long computed pipe | 16.55 ms | 16.36 ms | 0.989× |
| flow-when | `flow` + `when` | 14.01 ms | 13.99 ms | 0.998× |
| map | observable map | 10.18 ms | 10.29 ms | 1.011× |
| boxes | `observable.box` | 12.12 ms | 12.31 ms | 1.016× |
| object-proxy | object proxy traps | 22.85 ms | 23.27 ms | 1.019× |
| dynamic-deps | deps added/removed | 5.30 ms | 5.53 ms | 1.044× |

**12 / 12 suites ≤ 1.05×.** Worst case is dynamic-deps at 1.044×. Reactions, arrays, and diamonds are the clear wins.

## Compatibility

- Official `mobx@7.0.0` tests: 769 passed, 0 failed
- 78/78 runtime exports
- ESM, CJS (`NODE_ENV` switcher), and UMD, same layout as official
- Official `mobx.d.ts` surface
- Some `fn.length` values differ because LilScript emits rest wrappers. Call them with the documented arguments; do not branch on `.length`.

Zero runtime dependencies.

## Rebuild

Compiled JavaScript in `dist/` is what npm installs. Rebuilding from `src/**/*.lil` needs a release [LilScript](https://github.com/yeargun/lilscript) compiler next to this repo, or `LILSCRIPT_COMPILER`.

```sh
npm run build     # development + production artifacts
npm run check     # tests, types, mixed-version, bench, size, Playwright
npm run examples  # http://127.0.0.1:4177/examples/
```

## License

MIT. See [NOTICE.md](./NOTICE.md).
