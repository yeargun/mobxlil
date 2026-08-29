import { getAtom, getObservers, hasObservers } from "../internal";
function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
  const result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0) {
    result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  }
  return result;
}
function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
  const result = {
    name: node.name_
  };
  if (hasObservers(node)) {
    result.observers = Array.from(getObservers(node), nodeToObserverTree);
  }
  return result;
}
function unique(list) {
  return Array.from(new Set(list));
}
export {
  getDependencyTree,
  getObserverTree
};
