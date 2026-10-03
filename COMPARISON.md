# Current comparison with the original

Production MobX 7 main-entry API with matching shared exports. Each original is bundled under production conditions and minified independently. The published development and production artifacts have separate package checks.

Each compression row uses a separate LilScript compilation targeting that objective. Original results are the smallest of Terser, esbuild and Oxc for the named codec.

| Objective | LilScript bytes | Original minified bytes | Original minifier | LilScript build (s) | Original bundle + minify (s) |
|---|---:|---:|---|---:|---:|
| raw | 56,508 | 51,334 | Oxc | 70.110 | 0.208 |
| gzip | 16,796 | 14,705 | Oxc | 60.819 | 0.208 |
| brotli | 15,159 | 13,342 | Oxc | 109.804 | 0.208 |

Original version: `mobx@7.0.0`. gzip level 9; Brotli quality 11/window 22. Each time is one sequential fresh-output build on the recorded shared machine. Original timing starts from installed ESM and does not include the original repository’s TypeScript compilation. Dependency installation, tests and final file compression are excluded.

Validation: 90 checks across raw, gzip and Brotli main entries. This does not cover every package format or establish complete upstream API equivalence.

[Artifacts, hashes and settings](site/comparison.json) · [Commands, source identities and timings](site/comparison-builds.json) · [Exact checked source inputs](site/comparison-artifacts/sources.tar.gz).
