import { $mobx, IEnhancer, IInterceptable, IListenable, ObservableValue, IAtom } from "../internal";
export interface IKeyValueMap<V = any> {
    [key: string]: V;
}
export type IMapEntry<K = any, V = any> = [K, V];
export type IReadonlyMapEntry<K = any, V = any> = readonly [K, V];
export type IMapEntries<K = any, V = any> = IMapEntry<K, V>[];
export type IReadonlyMapEntries<K = any, V = any> = readonly IReadonlyMapEntry<K, V>[];
export type IMapDidChange<K = any, V = any> = {
    observableKind: "map";
    debugObjectName: string;
} & ({
    object: ObservableMap<K, V>;
    name: K;
    type: "update";
    newValue: V;
    oldValue: V;
} | {
    object: ObservableMap<K, V>;
    name: K;
    type: "add";
    newValue: V;
} | {
    object: ObservableMap<K, V>;
    name: K;
    type: "delete";
    oldValue: V;
});
export interface IMapWillChange<K = any, V = any> {
    object: ObservableMap<K, V>;
    type: "update" | "add" | "delete";
    name: K;
    newValue?: V;
}
export declare const ADD = "add";
export declare const DELETE = "delete";
export type IObservableMapInitialValues<K = any, V = any> = IMapEntries<K, V> | IReadonlyMapEntries<K, V> | IKeyValueMap<V> | Map<K, V>;
export declare class ObservableMap<K = any, V = any> implements Map<K, V>, IInterceptable<IMapWillChange<K, V>>, IListenable {
    enhancer_: IEnhancer<V>;
    name_: string;
    [$mobx]: {};
    data_: Map<K, ObservableValue<V>>;
    hasMap_: Map<K, ObservableValue<boolean>>;
    keysAtom_: IAtom;
    interceptors_: any;
    changeListeners_: any;
    dehancer: any;
    constructor(initialData?: IObservableMapInitialValues<K, V>, enhancer_?: IEnhancer<V>, name_?: string);
    private has_;
    has(key: K): boolean;
    set(key: K, value: V): this;
    delete(key: K): boolean;
    private updateValue_;
    private addValue_;
    get(key: K): V | undefined;
    getOrInsert(key: K, value: V): V;
    getOrInsertComputed(key: K, callback: (key: K) => V): V;
    private dehanceValue_;
    keys(): MapIterator<K>;
    values(): MapIterator<V>;
    entries(): MapIterator<IMapEntry<K, V>>;
    [Symbol.iterator](): MapIterator<IMapEntry<K, V>>;
    forEach(callback: (value: V, key: K, object: Map<K, V>) => void, thisArg?: any): void;
    /** Merge another object into this object, returns this. */
    merge(other?: IObservableMapInitialValues<K, V>): ObservableMap<K, V>;
    clear(): void;
    replace(values: IObservableMapInitialValues<K, V>): ObservableMap<K, V>;
    get size(): number;
    toString(): string;
    toJSON(): [K, V][];
    get [Symbol.toStringTag](): string;
}
export declare var isObservableMap: (thing: any) => thing is ObservableMap<any, any>;
