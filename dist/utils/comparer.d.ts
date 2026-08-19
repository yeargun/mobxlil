export interface IEqualsComparer<T> {
    (a: T, b: T): boolean;
}
export declare function compareIdentity(a: any, b: any): boolean;
export declare function compareStructural(a: any, b: any): boolean;
export declare function compareShallow(a: any, b: any): boolean;
export declare const compareDefault: (value1: any, value2: any) => boolean;
