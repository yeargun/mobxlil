# @itslil/mobx

MobX 7.0.0 API implemented in LilScript, with the official type declarations and ESM, CommonJS and browser-global delivery.

[Live comparison and examples](https://yeargun.github.io/mobxlil/) · [Checked repository package](https://yeargun.github.io/mobxlil/downloads/package.tgz) · [Package build evidence](https://yeargun.github.io/mobxlil/package-build.json)

```sh
npm install @itslil/mobx
```

```js
import {observable, computed, autorun, runInAction} from "@itslil/mobx"
const state = observable({count: 0})
const doubled = computed(() => state.count * 2)
const stop = autorun(() => console.log(doubled.get()))
runInAction(() => { state.count++ })
stop()
```

The repository download contains the checked build of this checkout. npm publication is independent; an npm install can resolve a different published snapshot.

## Comparison with the original

[Current raw, gzip and Brotli results and build times](COMPARISON.md) compare three independently targeted LilScript compilations with the smallest recorded original result for each codec from Terser, esbuild and Oxc. Exact bytes, configuration hashes, source inputs and commands are downloadable from the comparison page. Package formats and browser application bundles have different boundaries from the standalone comparison entries.

## Compatibility and scope

The unchanged upstream suite passes 769 tests and 32 snapshots on Node 24, with 11 upstream skips. Node 24 supplies the Set and iterator helpers required by that suite. Size and compile-time measurements do not imply a runtime speedup.

## Rebuild and verify

Set `LILSCRIPT_COMPILER` to the current LilScript executable. Builds use one compiler job at a time.

```sh
npm ci
npm run build
npm test
npm run check:site
```

See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md) for licensing and upstream attribution.
