import { globalState, isolateGlobalState, setReactionScheduler } from "../internal";
const ALWAYS = "always";
const OBSERVED = "observed";
function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }
  const { enforceActions } = options;
  if (enforceActions !== void 0) {
    const ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ;
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors"
  ].forEach((key) => {
    if (key in options) {
      globalState[key] = !!options[key];
    }
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;
  if (false) {
    console.warn(
      "WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."
    );
  }
  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}
export {
  configure
};
