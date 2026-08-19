import { IEnhancer, IEqualsComparer, IObservableArray, IMapEntries, IReadonlyMapEntries, IKeyValueMap, IObservableSetInitialValues, IObservableValue, ObservableMap, ObservableSet, Annotation, AnnotationsMap } from "../internal";
import { type DecoratorAnnotation } from "./decoratorannotation";
import type { ClassAccessorAndFieldDecorator } from "../types/decorator_fills";
export declare const OBSERVABLE = "observable";
export declare const OBSERVABLE_REF = "observable.ref";
export declare const OBSERVABLE_SHALLOW = "observable.shallow";
export declare const OBSERVABLE_STRUCT = "observable.struct";
export type CreateObservableOptions = {
    name?: string;
    equals?: IEqualsComparer<any>;
    deep?: boolean;
    defaultDecorator?: Annotation;
    autoBind?: boolean;
};
export declare const defaultCreateObservableOptions: CreateObservableOptions;
export declare function asCreateObservableOptions(thing: any): CreateObservableOptions;
export declare function getEnhancerFromOptions(options: CreateObservableOptions): IEnhancer<any>;
export declare function getAnnotationFromOptions(options?: CreateObservableOptions): Annotation | undefined;
export declare function getEnhancerFromAnnotation(annotation?: Annotation): IEnhancer<any>;
export interface IObservableValueFactory {
    <T>(value: T, options?: CreateObservableOptions): IObservableValue<T>;
    <T>(value?: T, options?: CreateObservableOptions): IObservableValue<T | undefined>;
}
export interface IObservableMapFactory {
    <K = any, V = any>(): ObservableMap<K, V>;
    <K, V>(initialValues?: IMapEntries<K, V>, options?: CreateObservableOptions): ObservableMap<K, V>;
    <K, V>(initialValues?: IReadonlyMapEntries<K, V>, options?: CreateObservableOptions): ObservableMap<K, V>;
    <K, V>(initialValues?: IKeyValueMap<V>, options?: CreateObservableOptions): ObservableMap<K, V>;
    <K, V>(initialValues?: Map<K, V>, options?: CreateObservableOptions): ObservableMap<K, V>;
    <K = any, V = any>(initialValues: undefined, options?: CreateObservableOptions): ObservableMap<K, V>;
}
export interface IObservableFactory extends Annotation, ClassAccessorAndFieldDecorator {
    <T = any>(value: T[], options?: CreateObservableOptions): IObservableArray<T>;
    <T = any>(value: Set<T>, options?: CreateObservableOptions): ObservableSet<T>;
    <K = any, V = any>(value: Map<K, V>, options?: CreateObservableOptions): ObservableMap<K, V>;
    <T extends object>(value: T, annotations?: AnnotationsMap<T, never>, options?: CreateObservableOptions): T;
    box: IObservableValueFactory;
    array: <T = any>(initialValues?: T[], options?: CreateObservableOptions) => IObservableArray<T>;
    set: <T = any>(initialValues?: IObservableSetInitialValues<T>, options?: CreateObservableOptions) => ObservableSet<T>;
    map: IObservableMapFactory;
    object: <T = any>(props: T, annotations?: AnnotationsMap<T, never>, options?: CreateObservableOptions) => T;
}
export declare const observableRef: DecoratorAnnotation<ClassAccessorAndFieldDecorator>;
export declare const observableShallow: DecoratorAnnotation<ClassAccessorAndFieldDecorator>;
export declare const observableDeep: DecoratorAnnotation<ClassAccessorAndFieldDecorator>;
export declare const observableStruct: DecoratorAnnotation<ClassAccessorAndFieldDecorator>;
export declare var observable: IObservableFactory;
