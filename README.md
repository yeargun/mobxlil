# @itslil/mobx

MobX 7.0.0, reimplemented in [LilScript](https://github.com/yeargun/lilscript) and published as a dependency-free drop-in.

This is **not** the official `mobx` package. It is an independent runtime that implements the `mobx@7.0.0` public API. Types are the official 7.0.0 declarations. Upstream core tests pass (769 passed, 11 pending, 0 failed on the last full Jest run).

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

Reusable production ESM, measured with `lilscript-codec` gzip-9 / Brotli-11.

| Lane | Raw | gzip-9 | Brotli-11 | vs official Brotli |
| --- | ---: | ---: | ---: | ---: |
| Official `mobx@7.0.0` ESM | 180,997 | 40,282 | 33,453 | 1.00× |
| Vite + esbuild of official | 71,447 | 20,025 | 17,808 | 0.53× |
| Vite + Terser of official | 71,255 | 19,850 | 17,610 | 0.53× |
| **`@itslil/mobx` production ESM** | **65,664** | **18,690** | **16,736** | **0.50×** |
| Closure ADVANCED of official | 48,686 | 15,393 | 13,701 | 0.41× |

Brotli is about **0.50×** the official published ESM and **0.95×** Vite+Terser of that same source. Closure ADVANCED of official is still smaller (~0.82× this package). This build keeps the reusable package ABI and compiles `realistic-performance-first`. The current source is open-world `JsValue` bags, so LilScript property mangling does not rename `value_` / `observers_` the way Closure renames official internals.

## Performance

Quiet Node v24.11.1 run versus `mobx@7.0.0`, `NODE_ENV=production`. 8 samples, first 2 discarded, median of the rest. Ratio is `@itslil/mobx` / official (lower is faster). Checksums match on every suite. Retained memory **0.98×**.

| Suite | mobx@7.0.0 | @itslil/mobx | Ratio |
| --- | ---: | ---: | ---: |
| boxes | 12.12 ms | 12.31 ms | 1.016× |
| dynamic-deps | 5.30 ms | 5.53 ms | 1.044× |
| computed-chain | 16.55 ms | 16.36 ms | 0.989× |
| computed-diamond | 9.11 ms | 8.31 ms | 0.912× |
| batching-actions | 7.64 ms | 7.27 ms | 0.952× |
| reactions | 6.35 ms | 5.52 ms | 0.869× |
| object-proxy | 22.85 ms | 23.27 ms | 1.019× |
| array | 7.31 ms | 6.70 ms | 0.916× |
| map | 10.18 ms | 10.29 ms | 1.011× |
| set | 11.10 ms | 10.56 ms | 0.951× |
| decorators | 7.26 ms | 7.04 ms | 0.970× |
| flow-when | 14.01 ms | 13.99 ms | 0.998× |

**12 / 12 suites ≤ 1.05×.** The automated `npm run check` bench can exceed 1.05× on map/decorators immediately after a long compile (thermal). Treat the quiet numbers as the product claim.

## Compatibility

- 78/78 `mobx@7.0.0` runtime exports
- ESM, CJS (`NODE_ENV` switcher), and UMD artifacts, same layout as official
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
