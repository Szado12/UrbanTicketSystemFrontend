import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../data/ticket';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  constructor() {}
  public tickets = [
    {
      id: 0,
      price: 170,
      reduce: false,
      displayName: 'Ticket 1',
      category: 1,
      minutesOfValidity: 0,
      daysOfValidity: 0
    } as Ticket,
    {
      id: 1,
      price: 320,
      reduce: true,
      displayName: 'Ticket 2',
      category: 2,
      minutesOfValidity: 60,
      daysOfValidity: 0
    } as Ticket,
    {
      id: 0,
      price: 2560,
      reduce: false,
      displayName: 'Ticket 3',
      category: 3,
      minutesOfValidity: 0,
      daysOfValidity: 30
    } as Ticket,
  ];
  ngOnInit(): void {}
}
