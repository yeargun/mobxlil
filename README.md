# @itslil/mobx

<!-- current-build-audit -->
**Build audit, 2026-09-10:** [verified; compiler, machine, build times, version gaps and behavior checks](https://yeargun.github.io/mobxlil/#build-audit). The [JSON receipt](site/build-audit.json) records the current comparison; older benchmark prose retains its original scope.


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

The size gate is **current Vite of official unminified `mobx.esm.js`**. That is what a Vite app minifies. Official `dist/mobx.esm.production.min.js` is a different, DEV-stripped compile and is not the Vite lane.

Same codec (`lilscript-codec` gzip-9 / Brotli-11), verified 2026-08-19:

| Lane | Raw | gzip-9 | Brotli-11 | vs Vite 8 Oxc |
| --- | ---: | ---: | ---: | ---: |
| Official ESM unminified | 180,997 | 40,282 | 33,453 | 1.95× |
| Vite + esbuild of official | 71,447 | 20,025 | 17,808 | 1.04× |
| Vite + Terser of official | 71,255 | 19,850 | 17,610 | 1.03× |
| **Vite 8 Oxc of official** | **69,506** | **19,282** | **17,159** | **1.00×** |
| **`@itslil/mobx`** | **65,664** | **18,690** | **16,736** | **0.975×** |
| Official ESM production.min | 46,483 | 14,299 | 12,937 | 0.75× |

**0.975× Brotli vs Vite 8 Oxc** (17,159 → 16,736). **0.950× vs Vite+Terser** (17,610 → 16,736). Official production.min is still smaller. Candidate search stays on for production compiles.

## Performance

Quiet Node v24.11.1 versus `mobx@7.0.0`, `NODE_ENV=production`. 8 samples, first 2 discarded, median of the rest. Ratio is `@itslil/mobx` / official (**lower is faster**). Every suite checksums equal. Retained memory **0.98×**.

Compiled `realistic-performance-first`. Arrays, diamonds, reactions, and batching are faster. Four suites miss the 1.05× gate on this verification.

| Suite | What it stresses | mobx@7.0.0 | @itslil/mobx | Ratio |
| --- | --- | ---: | ---: | ---: |
| array | observable array mutate | 6.35 ms | 5.80 ms | **0.913×** |
| computed-diamond | shared computed graph | 8.38 ms | 7.84 ms | **0.936×** |
| reactions | autorun / reaction fire | 5.82 ms | 5.46 ms | **0.939×** |
| batching-actions | `runInAction` | 7.21 ms | 6.84 ms | **0.949×** |
| computed-chain | long computed pipe | 15.66 ms | 15.11 ms | 0.964× |
| dynamic-deps | deps added/removed | 4.78 ms | 4.65 ms | 0.972× |
| flow-when | `flow` + `when` | 18.50 ms | 18.14 ms | 0.981× |
| boxes | `observable.box` | 11.29 ms | 11.50 ms | 1.019× |
| object-proxy | object proxy traps | 19.82 ms | 21.26 ms | 1.072× |
| decorators | `makeObservable` | 6.02 ms | 6.95 ms | 1.155× |
| map | observable map | 9.20 ms | 10.85 ms | 1.180× |
| set | observable set | 9.48 ms | 11.20 ms | 1.182× |

**8 / 12 suites ≤ 1.05×.** Worst cases are set and map. A later size-first compile was smaller versus Vite but did not load; it is not what this package ships.

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
