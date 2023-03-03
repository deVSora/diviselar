import {Weapon, Armor, ExtraItem} from './../inventory/inventoryDTO' 

interface Attributes{
    for : number,
    dex : number,
    con : number,
    int : number,
    sab : number,
    car : number,
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
    weight: number,
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