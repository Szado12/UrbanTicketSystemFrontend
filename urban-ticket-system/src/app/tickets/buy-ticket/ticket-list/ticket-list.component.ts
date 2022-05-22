import { Component, Input, OnInit } from '@angular/core';
import { TicketType } from '../../data/ticketType';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  constructor() {}
  
  @Input() availableTypes : TicketType[] = [];

  ngOnInit(): void {}
}
