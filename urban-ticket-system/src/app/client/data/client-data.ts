import { TicketData } from "./ticket-data";

export interface ClientData {
	name: string;
	surname: string;
	tickets: TicketData[];
}
