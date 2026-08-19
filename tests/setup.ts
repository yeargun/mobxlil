import { configure, _getGlobalState, _resetGlobalState } from "../dist/index.js"

;(globalThis as any).setImmediate =
    (globalThis as any).setImmediate ||
    ((fn: (...args: any[]) => void, ...args: any[]) => globalThis.setTimeout(fn, 0, ...args))

function resetMobxTestState() {
    _resetGlobalState()
    _getGlobalState().spyListeners = []
    configure({
        enforceActions: "never",
        computedRequiresReaction: false,
        reactionRequiresObservable: false,
        observableRequiresReaction: false,
        disableErrorBoundaries: false,
        safeDescriptors: true
    })
}

beforeEach(() => {
    ;(globalThis as any).__DEV__ = true
    resetMobxTestState()
})

afterEach(resetMobxTestState)
