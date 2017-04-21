interface Penguin {
    height : number;
    name : string;
    swim() : void;
    eat(fish: any);
    waddle(distance: number) : void;
}

class PenguinImpl implements Penguin {
    constructor(height: number, name: string) {
        this.height = height;
        this.name = name;
    }
    height : number;
    name : string;
    swim() { return; }
    eat(fish: any) { return; }
    waddle(distance: number) { return; }

    static fascinatingFact : string = 'In Welsh, the phrase "pen gwyn" means "white head"';
}

function waddleYourOwnHeight(p : Penguin) {
    p.waddle(p.height);
}

let opus1 = new PenguinImpl(1.3, "opus");

let opus2 : Penguin = {
    height : 1.3,
    name : 'Opus',
    swim() { return; },
    eat(fish: any) { return; },
    waddle(distance: number) { return; }
}

waddleYourOwnHeight(opus1);

let penguinMaker : typeof PenguinImpl;
penguinMaker = PenguinImpl;
let ernesto = new penguinMaker(2.4, 'ernesto');

penguinMaker.fascinatingFact = "In Antarctica they found the fossils of ancient 2 metre tall penguins.";

interface EmperorPenguin extends PenguinImpl {
    empire : { region: string, size: number }
}
