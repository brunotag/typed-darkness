interface PenguinInfo {
    height : number;
    name : string;
}

interface SomePenguinInfo {
    height? : number;
    name? : string;
}

interface ImmutablePenguinInfo {
    readonly height : number;
    readonly name : string;
}


interface ProjectedPenguinInfo {
    height : number;
}

function project<T, K extends keyof T>(o : T, props : K[]) : T[K][] {
    return props.map(p => o[p]);
}

function projectAPenguin(p : PenguinInfo) : number[] {
    return project(p, ['height']);
}

let k : keyof PenguinInfo;
k = 'height';
k = 'name';
// k = 'species';

let opus : PenguinInfo = {
    height : 1.3,
    name : 'Opus'
};

console.log(opus[k]);
opus[k].substr(1);
k = 'height';
opus[k].toExponential();

type TestReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}

type TestPartial<T> = {
    [P in keyof T]?: T[P];
}

type TestNullable<T> = {
    [P in keyof T]: T[P] | undefined;
}

type SomePenguinInfo2 = TestPartial<PenguinInfo>;
type ImmutablePenguinInfo2 = TestReadOnly<PenguinInfo>;

let spi : SomePenguinInfo2 = opus;
let ipi : ImmutablePenguinInfo2 = opus;

// opus.name = 'ernesto';
// opus.name = undefined;
// ipi.name = 'ernesto';
// spi.name = undefined;
