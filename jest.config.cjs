const path = require("path")

module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/tests"],
    testRegex: "tests/upstream/base/.*\\.(t|j)sx?$|tests/differential/.*\\.(t|j)sx?$",
    setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
    globals: {
        __DEV__: true
    },
    transform: {
        "^.+\\.[jt]sx?$": [
            "ts-jest",
            {
                tsconfig: path.resolve(__dirname, "tests/tsconfig.json"),
                diagnostics: false
            }
        ]
    },
    transformIgnorePatterns: ["/node_modules/", "/dist/", "/upstream/mobx/"],
    moduleNameMapper: {
        "^\\.\\./\\.\\./dist/mobx\\.cjs\\.production\\.min\\.js$": "<rootDir>/dist/mobx.cjs.production.min.js",
        "^\\.\\./\\.\\./src/mobx(\\.ts)?$": "<rootDir>/dist/index.js",
        "^\\.\\./\\.\\./src/internal$": "<rootDir>/tests/internal-compat.cjs",
        "^\\.\\./\\.\\./src/api/flow$": "<rootDir>/dist/index.js",
        "^\\.\\./\\.\\./package\\.json$": "<rootDir>/package.json",
        "^\\.\\./\\.\\./dist/mobx\\.umd\\.development\\.js$": "<rootDir>/dist/mobx.umd.development.js",
        "^\\.\\./\\.\\./dist/?$": "<rootDir>/dist/index.js"
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/", "/upstream/mobx/"]
}
