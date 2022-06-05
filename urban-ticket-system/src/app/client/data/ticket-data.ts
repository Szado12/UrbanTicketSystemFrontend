export interface TicketData {
    id: number,
    boughtTime: Date,
    validatedTime: Date,
    validatedInBus: number,
    status: string,
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


