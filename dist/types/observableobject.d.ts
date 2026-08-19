import { CreateObservableOptions, $mobx, Annotation, ComputedValue, IAtom, IComputedValueOptions, IEnhancer, IInterceptable, IListenable, ObservableValue } from "../internal";
export type IObjectDidChange<T = any> = {
    observableKind: "object";
    name: PropertyKey;
    object: T;
    debugObjectName: string;
} & ({
    type: "add";
    newValue: any;
} | {
    type: "update";
    oldValue: any;
    newValue: any;
} | {
    type: "remove";
    oldValue: any;
});
export type IObjectWillChange<T = any> = {
    object: T;
    type: "update" | "add";
    name: PropertyKey;
    newValue: any;
} | {
    object: T;
    type: "remove";
    name: PropertyKey;
};
export declare class ObservableObjectAdministration implements IInterceptable<IObjectWillChange>, IListenable {
    target_: any;
    values_: Map<PropertyKey, ComputedValue<any> | ObservableValue<any>>;
    name_: string;
    defaultAnnotation_: Annotation;
    keysAtom_: IAtom;
    changeListeners_: any;
    interceptors_: any;
    proxy_: any;
    isPlainObject_: boolean;
    appliedAnnotations_?: object;
    private pendingKeys_;
    lazyComputedKeys_: undefined | Map<PropertyKey, () => ComputedValue<any>>;
    lazyObservableKeys_: undefined | Map<PropertyKey, () => ObservableValue<any>>;
    constructor(target_: any, values_: Map<PropertyKey, ComputedValue<any> | ObservableValue<any>> | undefined, name_: string, defaultAnnotation_?: Annotation);
    getObservablePropValue_(key: PropertyKey): any;
    materializeLazyComputed_(key: PropertyKey): ComputedValue<any> | undefined;
    materializeLazyObservable_(key: PropertyKey): ObservableValue<any> | undefined;
    setObservablePropValue_(key: PropertyKey, newValue: any): boolean | null;
    get_(key: PropertyKey): any;
    /**
     * @param {PropertyKey} key
     * @param {any} value
     * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    set_(key: PropertyKey, value: any, proxyTrap?: boolean): boolean | null;
    has_(key: PropertyKey): boolean;
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    extend_(key: PropertyKey, descriptor: PropertyDescriptor, annotation: Annotation | boolean, proxyTrap?: boolean): boolean | null;
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    defineProperty_(key: PropertyKey, descriptor: PropertyDescriptor, proxyTrap?: boolean): boolean | null;
    defineObservableProperty_(key: PropertyKey, value: any, enhancer: IEnhancer<any>, proxyTrap?: boolean): boolean | null;
    defineComputedProperty_(key: PropertyKey, options: IComputedValueOptions<any>, proxyTrap?: boolean): boolean | null;
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    delete_(key: PropertyKey, proxyTrap?: boolean): boolean | null;
    notifyPropertyAddition_(key: PropertyKey, value: any): void;
    ownKeys_(): Array<string | symbol>;
    keys_(): PropertyKey[];
}
export interface IIsObservableObject {
    [$mobx]: ObservableObjectAdministration;
}
export declare function asObservableObject(target: any, options?: CreateObservableOptions): IIsObservableObject;
export declare function isObservableObject(thing: any): boolean;
export declare function recordAnnotationApplied(adm: ObservableObjectAdministration, annotation: Annotation, key: PropertyKey): void;
export declare function assertAnnotable(adm: ObservableObjectAdministration, annotation: Annotation, key: PropertyKey): void;
