interface Swimmer {
    swim() : void;
    eat(food: any) : void;
}

interface Waddler {
    waddle(distance : number);
    eat(food: any) : void;
}

class Fish implements Swimmer {
    swim() { return; }
    eat(food : any) { return; }
}

class Armadillo implements Waddler {
    waddle(distance: number) { return; }
    eat(food : any) { return; }
}

function waddleToTheWaterThenSwim(a : Swimmer & Waddler) {
    a.waddle(10);
    a.swim();
}

function feed(a : Swimmer | Waddler) {
    a.eat('biscuits');
}

function fleePredator_ugh(a : Swimmer | Waddler) {
    if ((<Swimmer>a).swim) {
        (<Swimmer>a).swim();
    } else {
        (<Waddler>a).waddle(100);
    }
}

function isSwimmer(a : Swimmer | Waddler) : a is Swimmer {
    return (<Swimmer>a).swim !== undefined;
}

function fleePredator(a : Swimmer | Waddler) {
    if (isSwimmer(a)) {
        a.swim();
    } else {
        a.waddle(100);
    }
}

function fleePredator2(a : Swimmer | Waddler) {
    if (a instanceof PenguinImpl /* classes only */) {
        a.swim();
    } else {
        fleePredator(a);
    }
}

function processStringN(s : string | null) {
    console.log(s);
}

// processStringN('hello');
// processStringN(null);
// processStringN(undefined);

type PenguinSpecies = 'Emperor' | 'King' | 'Adelie';

// let species1 : PenguinSpecies = 'Adelie';
// let species2 : PenguinSpecies = 'Gentoo';
