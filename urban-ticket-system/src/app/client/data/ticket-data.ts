export interface TicketData {
    id: number,
    uuid: string,
    boughtTime: Date,
    validatedTime: Date,
    validatedInBus: number,
    status: TicketStatus,
    type: TicketType
}

export interface TicketType {
    id: number,
    price: number,
    reduced: boolean,
    category: TicketCategory,
    minutesOfValidity: number,
    daysOfValidity: number,
    displayName: string
}

export interface TicketCategory {
    id: number,
    name: string
}

export enum TicketStatus {
    BOUGHT = 'BOUGHT',
    VALID = 'VALID',
    INVALID = 'INVALID'
}

