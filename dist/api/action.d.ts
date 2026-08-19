import { Annotation } from "../internal";
import { type DecoratorAnnotation } from "./decoratorannotation";
import type { ClassMethodAndFieldDecorator } from "../types/decorator_fills";
export declare const ACTION = "action";
export declare const ACTION_BOUND = "action.bound";
export declare const AUTOACTION = "autoAction";
export declare const AUTOACTION_BOUND = "autoAction.bound";
export interface IActionFactory extends Annotation, ClassMethodAndFieldDecorator {
    <T extends Function | undefined | null>(fn: T): T;
    <T extends Function | undefined | null>(name: string, fn: T): T;
    (customName: string): DecoratorAnnotation<ClassMethodAndFieldDecorator>;
}
export declare const action: IActionFactory;
export declare const autoAction: IActionFactory;
export declare const actionBound: DecoratorAnnotation<ClassMethodAndFieldDecorator>;
export declare const autoActionBound: DecoratorAnnotation<ClassMethodAndFieldDecorator>;
export declare function runInAction<T>(fn: () => T): T;
export declare function isAction(thing: any): boolean;
