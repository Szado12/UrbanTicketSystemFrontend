import { Component, Input, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { TicketType } from '../../data/ticketType';
import { BuyTicketCartService } from '../service/buy-ticket-cart.service';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  constructor(private buyTicketCart : BuyTicketCartService) {}
  message:string = "";
  messageVisible :boolean = false;
  @Input() availableTypes : TicketType[] = [];

  ngOnInit(): void {}


  addTicket(ticketData:any){
      this.buyTicketCart.addTicket(ticketData[0],ticketData[1]);
      this.message = ticketData[0].category.name + " added to cart!";
      this.showMessage();
  }

  async showMessage(){
    this.messageVisible =true;
    setTimeout(() => {
      this.messageVisible = false;
    }, 5000);
  }
}
