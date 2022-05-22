import { TicketCategory } from "./ticketCategory";

export interface TicketType {
  id: number;
  price: number;
  reduce: boolean;
  category: TicketCategory;
  minutesOfValidity: number;
  daysOfValidity: number;
}
