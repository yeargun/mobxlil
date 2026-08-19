import { Annotation } from "../internal";
export declare function createObservableAnnotation(name: string, options?: object): Annotation;
export declare function decorateObservable20223_(annotation: Annotation, desc: any, context: ClassAccessorDecoratorContext | ClassFieldDecoratorContext): {
    get(): any;
    set(value: any): boolean | null;
    init(value: any): any;
} | undefined;
