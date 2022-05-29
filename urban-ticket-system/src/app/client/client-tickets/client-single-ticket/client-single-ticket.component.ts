import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBus, faInfo } from '@fortawesome/free-solid-svg-icons';
import { TicketData, TicketType } from '../../data/ticket-data';

@Component({
  selector: 'app-client-single-ticket',
  templateUrl: './client-single-ticket.component.html',
  styleUrls: ['./client-single-ticket.component.scss']
})
export class ClientSingleTicketComponent implements OnInit {
  faBus = faBus;
  faInfo = faInfo; 

  @Input() ticketData: TicketData;
  @Output() ticketDetailsEvent = new EventEmitter<number>(); 
  constructor() { }

  ngOnInit(): void {
  }

  getTicketDetails() {
    this.ticketDetailsEvent.emit(this.ticketData.id);
  }

}
