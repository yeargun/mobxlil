import { Annotation } from "../internal";
import { type DecoratorAnnotation } from "./decoratorannotation";
import type { ClassMethodDecorator } from "../types/decorator_fills";
export declare const FLOW = "flow";
export declare class FlowCancellationError extends Error {
    constructor();
    toString(): string;
}
export declare function isFlowCancellationError(error: Error): error is FlowCancellationError;
export type CancellablePromise<T> = Promise<T> & {
    cancel(): void;
};
interface Flow extends Annotation, ClassMethodDecorator {
    <R, Args extends any[]>(generator: (...args: Args) => Generator<any, R, any> | AsyncGenerator<any, R, any>, context?: never): (...args: Args) => CancellablePromise<R>;
}
export declare const flow: Flow;
export declare const flowBound: DecoratorAnnotation<ClassMethodDecorator>;
export declare function flowResult<T>(result: T): T extends Generator<any, infer R, any> ? CancellablePromise<R> : T extends CancellablePromise<any> ? T : never;
export declare function isFlow(fn: any): boolean;
export {};
