import { globalState, assign } from "../internal";
function isSpyEnabled() {
  return false;
}
function spyReport(event) {
  if (true) {
    return;
  }
  if (!globalState.spyListeners.length) {
    return;
  }
  const listeners = globalState.spyListeners;
  for (let i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (true) {
    return;
  }
  const change = assign({}, event, { spyReportStart: true });
  spyReport(change);
}
const END_EVENT = { type: "report-end", spyReportEnd: true };
function spyReportEnd(change) {
  if (true) {
    return;
  }
  if (change) {
    spyReport(assign({}, change, { type: "report-end", spyReportEnd: true }));
  } else {
    spyReport(END_EVENT);
  }
}
function spy(listener) {
  if (true) {
    console.warn(`[mobx.spy] Is a no-op in production builds`);
    return function() {
    };
  } else {
    globalState.spyListeners.push(listener);
    return once(() => {
      globalState.spyListeners = globalState.spyListeners.filter((l) => l !== listener);
    });
  }
}
export {
  isSpyEnabled,
  spy,
  spyReport,
  spyReportEnd,
  spyReportStart
};
