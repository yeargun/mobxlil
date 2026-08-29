import {
  $mobx,
  endBatch,
  isObservableArray,
  isObservableMap,
  isObservableSet,
  isObservableObject,
  startBatch,
  die
} from "../internal";
function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].keys_();
  }
  if (isObservableMap(obj) || isObservableSet(obj)) {
    return Array.from(obj.keys());
  }
  if (isObservableArray(obj)) {
    return obj.map((_, index) => index);
  }
  die(5);
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map((key) => obj[key]);
  }
  if (isObservableMap(obj)) {
    return keys(obj).map((key) => obj.get(key));
  }
  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }
  if (isObservableArray(obj)) {
    return obj.slice();
  }
  die(6);
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map((key) => [key, obj[key]]);
  }
  if (isObservableMap(obj)) {
    return keys(obj).map((key) => [key, obj.get(key)]);
  }
  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }
  if (isObservableArray(obj)) {
    return obj.map((key, index) => [index, key]);
  }
  die(7);
}
function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    const values2 = key;
    try {
      for (let key2 in values2) {
        set(obj, key2, values2[key2]);
      }
    } finally {
      endBatch();
    }
    return;
  }
  if (isObservableObject(obj)) {
    ;
    obj[$mobx].set_(key, value);
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") {
      key = parseInt(key, 10);
    }
    if (key < 0) {
      die(42, key);
    }
    startBatch();
    if (key >= obj.length) {
      obj.length = key + 1;
    }
    obj[key] = value;
    endBatch();
  } else {
    die(8);
  }
}
function remove(obj, key) {
  if (isObservableObject(obj)) {
    ;
    obj[$mobx].delete_(key);
  } else if (isObservableMap(obj)) {
    obj.delete(key);
  } else if (isObservableSet(obj)) {
    obj.delete(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") {
      key = parseInt(key, 10);
    }
    obj.splice(key, 1);
  } else {
    die(9);
  }
}
function has(obj, key) {
  if (isObservableObject(obj)) {
    return obj[$mobx].has_(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  }
  die(10);
}
function get(obj, key) {
  if (!has(obj, key)) {
    return void 0;
  }
  if (isObservableObject(obj)) {
    return obj[$mobx].get_(key);
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  }
  die(11);
}
function apiDefineProperty(obj, key, descriptor) {
  if (isObservableObject(obj)) {
    return obj[$mobx].defineProperty_(key, descriptor);
  }
  die(39);
}
function apiOwnKeys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].ownKeys_();
  }
  die(38);
}
export {
  apiDefineProperty,
  apiOwnKeys,
  entries,
  get,
  has,
  keys,
  remove,
  set,
  values
};
