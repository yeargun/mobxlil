import type { Annotation } from "./annotation";
export type DecoratorAnnotation<Decorator extends (...args: any[]) => any> = Annotation & Decorator;
export declare function createDecoratorAnnotation<Decorator extends (...args: any[]) => any>(annotation: Annotation, decorate: (annotation: Annotation, value: any, context: any) => any): DecoratorAnnotation<Decorator>;
