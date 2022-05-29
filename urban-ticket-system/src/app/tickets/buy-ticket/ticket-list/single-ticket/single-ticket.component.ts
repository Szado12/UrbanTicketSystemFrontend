import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TicketType } from '../../../data/ticketType';
import { faBus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { BuyTicketCartService } from '../../service/buy-ticket-cart.service';

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.scss'],
})
export class SingleTicketComponent implements OnInit {

  faBus = faBus;
  faCartShopping = faCartShopping;
  @Input() ticketData: TicketType;
  @Output() addTicketEvent = new EventEmitter<any>();

  
  constructor() {
  }
  buyTicket(){
    this.addTicketEvent.emit([this.ticketData,1]);
  }
  ngOnInit(): void {}
}
