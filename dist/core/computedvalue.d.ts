import { CaughtException, IDerivation, IDerivationState_, IEqualsComparer, IObservable, Lambda } from "../internal";
export interface IComputedValue<T> {
    get(): T;
    set(value: T): void;
}
export interface IComputedValueOptions<T> {
    get?: () => T;
    set?: (value: T) => void;
    name?: string;
    equals?: IEqualsComparer<T>;
    context?: any;
    requiresReaction?: boolean;
    keepAlive?: boolean;
}
export type IComputedDidChange<T = any> = {
    type: "update";
    observableKind: "computed";
    object: unknown;
    debugObjectName: string;
    newValue: T;
    oldValue: T | undefined;
};
export declare class ComputedValue<T> implements IObservable, IComputedValue<T>, IDerivation {
    dependenciesState_: IDerivationState_;
    observing_: IObservable[];
    newObserving_: null;
    observers_: Set<IDerivation>;
    runId_: number;
    lastAccessedBy_: number;
    lowestObserverState_: IDerivationState_;
    unboundDepsCount_: number;
    protected value_: T | undefined | CaughtException;
    name_: string;
    triggeredBy_?: string;
    private flags_;
    derivation: () => T;
    setter_?: (value: T) => void;
    scope_: Object | undefined;
    private equals_;
    private requiresReaction_;
    keepAlive_: boolean;
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function used to determine if a newly produced
     * value differs from the previous value. Structural comparison can be convenient if you always
     * produce a new aggregated object and don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    constructor(options: IComputedValueOptions<T>);
    onBecomeStale_(): void;
    onBOL: Set<Lambda> | undefined;
    onBUOL: Set<Lambda> | undefined;
    onBO(): void;
    onBUO(): void;
    private get isComputing();
    private set isComputing(value);
    private get isRunningSetter();
    private set isRunningSetter(value);
    get isBeingObserved(): boolean;
    set isBeingObserved(newValue: boolean);
    get isPendingUnobservation(): boolean;
    set isPendingUnobservation(newValue: boolean);
    get diffValue(): 0 | 1;
    set diffValue(newValue: 0 | 1);
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    get(): T;
    set(value: T): void;
    trackAndCompute(): boolean;
    computeValue_(track: boolean): T | CaughtException;
    suspend_(): void;
    warnAboutUntrackedRead_(): void;
    toString(): string;
    valueOf(): T;
    [Symbol.toPrimitive](): T;
}
export declare const isComputedValue: (x: any) => x is ComputedValue<unknown>;
