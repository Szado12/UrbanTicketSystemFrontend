import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../../../data/ticket';
@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.scss'],
})
export class SingleTicketComponent implements OnInit {
  @Input() ticketData: Ticket;

  constructor() {}
  ngOnInit(): void {}
}
