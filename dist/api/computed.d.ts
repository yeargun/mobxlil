import { IComputedValueOptions, Annotation, IComputedValue } from "../internal";
import { type DecoratorAnnotation } from "./decoratorannotation";
import type { ClassGetterDecorator } from "../types/decorator_fills";
export declare const COMPUTED = "computed";
export declare const COMPUTED_STRUCT = "computed.struct";
export interface IComputedFactory extends Annotation, ClassGetterDecorator {
    <T>(options: IComputedValueOptions<T>): DecoratorAnnotation<ClassGetterDecorator>;
    <T>(func: () => T, options?: IComputedValueOptions<T>): IComputedValue<T>;
}
export declare const computedStruct: DecoratorAnnotation<ClassGetterDecorator>;
export declare const computed: IComputedFactory;
