import {ApiReference, Damage} from "@/ts/common";

export interface ArmorClass {
    base: number
    dexBonus: boolean
    maxBonus?: number
}

export interface Content {
    item: ApiReference
    quantity: number
}

export interface Cost {
    quantity: number,
    unit: string
}

export interface Range {
    long?: number,
    normal: number,
}

export interface Speed {
    quantity: number,
    unit: string
}

export interface ThrowRange {
    long: number
    normal: number
}

export interface TwoHandedDamage {
    damageDice: string
    damageType: ApiReference
}

export interface Equipment {
    armorCategory?: string
    armorClass?: ArmorClass
    capacity?: string
    categoryRange?: string
    contents?: Content[]
    cost: Cost
    damage?: Damage
    desc?: string
    equipmentCategory: ApiReference
    gearCategory?: ApiReference
    index: string
    name: string
    properties?: ApiReference[]
    quantity?: number
    range?: Range
    special?: string[]
    speed?: Speed
    stealthDisadvantage?: Boolean
    strMinimum?: number
    throwRange?: ThrowRange
    toolCategory?: string
    twoHandedDamage?: TwoHandedDamage
    vehicleCategory?: string
    weaponCategory?: string
    weaponRange?: string
    weight?: number
    url: string
    updatedAt: number
}