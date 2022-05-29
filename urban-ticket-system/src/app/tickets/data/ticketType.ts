import { TicketCategory } from "./ticketCategory";

export interface TicketType {
  id: number;
  price: number;
  reduced: boolean;
  category: TicketCategory;
  minutesOfValidity: number;
  daysOfValidity: number;
  displayName:string;
}
