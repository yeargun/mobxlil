const path = require("path")

module.exports = {
    testEnvironment: "node",
    roots: ["<rootDir>/tests"],
    testRegex: "tests/upstream/mixed-versions/.*\\.(t|j)sx?$",
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
        "^\\.\\./\\.\\./src/mobx(\\.ts)?$": "<rootDir>/dist/index.js",
        "^\\.\\./\\.\\./dist/mobx\\.umd\\.development\\.js$": "<rootDir>/dist/mobx.umd.development.js",
        "^\\.\\./\\.\\./dist/?$": "<rootDir>/dist/index.js"
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/", "/upstream/mobx/"]
}
