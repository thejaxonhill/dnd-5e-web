export interface ApiReference {
    index: string
    name: string
    url: string
}

export interface Damage {
    damageDice?: String
    damageType?: ApiReference
}

export interface Page {
    page: number
    size: number
    sort: string[]
}

export interface PagedModel<T> {
    content: T[]
    page: Page
}