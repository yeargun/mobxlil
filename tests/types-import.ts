import * as mobx from "mobx"
import {
    observable,
    computed,
    action,
    autorun,
    reaction,
    when,
    flow,
    makeObservable,
    makeAutoObservable,
    configure,
    ObservableMap,
    ObservableSet
} from "mobx"

const box = observable.box(1)
const value: number = box.get()
const obj = observable({ n: value })
const doubled = computed(() => obj.n * 2)
const stop = autorun(() => {
    doubled.get()
})
action(() => {
    obj.n = 2
})()
reaction(
    () => obj.n,
    (n: number) => n
)
configure({ enforceActions: "never" })
const map = new ObservableMap<string, number>([["a", 1]])
const set = new ObservableSet<number>([1])
class Annotated {
    n = 1
    constructor() {
        makeObservable(this, { n: observable })
    }
}
class Auto {
    n = 1
    constructor() {
        makeAutoObservable(this)
    }
}
const annotated = new Annotated()
const auto = new Auto()
void map.get("a")
void set.has(1)
void when(() => obj.n > 0)
void flow(function* (): Generator<Promise<number>, number, number> {
    return yield Promise.resolve(1)
})
void annotated.n
void auto.n
void mobx
void stop
void box.set(2)
