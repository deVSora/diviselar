export interface Weapon{
    name: string,
    hp: number,
    ac: number,
    ca: number,
    dmg: string,
    effect: string,
    description: string
}

export interface Armor{
    name: string,
    hp: number,
    ac: number,
    ca: number,
    effect: string,
    description: string
}

export interface ExtraItem{
    name: string,
    hp: number,
    ac: number,
    ca: number,
    effect: string,
    description: string
}

export interface CharInventory {
    weapons ?: Weapon[],
    armors ?: Armor[],
    extraItems ?: ExtraItem[],
}