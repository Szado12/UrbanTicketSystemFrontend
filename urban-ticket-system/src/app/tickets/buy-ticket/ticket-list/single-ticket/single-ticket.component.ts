import { Component, OnInit, Input } from '@angular/core';
import { TicketType } from '../../../data/ticketType';
@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.scss'],
})
export class SingleTicketComponent implements OnInit {
  @Input() ticketData: TicketType;

  constructor() {}
  ngOnInit(): void {}
}
