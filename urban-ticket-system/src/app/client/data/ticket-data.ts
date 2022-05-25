export interface TicketData {
    id: number,
    boughtTime: Date,
    validatedTime: Date,
    validatedInBus: number,
    status: string,
    type: TicketType
}

export interface TicketType {
    price: number,
    reduced: boolean,
    category: TicketCategory,
    minutesOfValidity: number,
    daysOfValidity: number
}

export interface TicketCategory {
    name: string
}

