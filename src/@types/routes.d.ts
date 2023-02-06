interface Attributes{
    for : number,
    dex : number,
    con : number,
    int : number,
    sab : number,
    car : number,
} 

interface Weapon{
    name: string,
    hp: number,
    ac: number,
    ca: number,
    dmg: string,
    effect: string,
    description: string
}

interface Armor{
    name: string,
    hp: number,
    ac: number,
    ca: number,
    effect: string,
    description: string
}

interface ExtraItem{
    name: string,
    hp: number,
    ac: number,
    ca: number,
    effect: string,
    description: string
}

interface Magic{
    type : string,
    description : string
}

export interface CharProps {
    name : string,
    imgURL : string,
    sex : string,
    age : number,
    race : string,
    level : number,
    hp : number,
    hpPoints: number,
    attributePoints: number,
    history : string,
    attributes : Attributes,
    weapons : Weapon[],
    armors : Armor[],
    extraItems : ExtraItem[],
    magics : Magic[]
}

export interface CharInventory {
    weapons ?: Weapon[],
    armors ?: Armor[],
    extraItems ?: ExtraItem[],
}

export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            start: undefined;
            home : undefined;
            newCharacter : undefined;
            showCharacter : { charInfo : CharProps };
            upCharacter : { charInfo : CharProps };
            showInventory : { charInventory : CharInventory[]};
        }
    }
}