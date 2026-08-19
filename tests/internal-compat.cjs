const mobx = require("../dist/index.js")

function deepEnhancer(value) {
    return value
}

module.exports = {
    ...mobx,
    deepEnhancer,
    MAX_SPLICE_SIZE: 10000,
    getGlobalState: mobx._getGlobalState
}
