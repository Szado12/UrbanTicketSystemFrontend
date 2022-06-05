import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketType } from '../../data/ticketType';
import { BuyTicketCartService } from '../service/buy-ticket-cart.service';
import { AddToCartPopupComponent } from './add-to-cart-popup/add-to-cart-popup.component';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  constructor(private buyTicketCart : BuyTicketCartService,public dialog: MatDialog) {}
  message:string = "";
  messageVisible :boolean = false;
  @Input() availableTypes : TicketType[] = [];

  ngOnInit(): void {}


  addTicket(ticketData:any){
      this.buyTicketCart.addTicket(ticketData[0],ticketData[1]);
      this.message = ticketData[0].displayName + " added to cart!";
      const dialogRef = this.dialog.open(AddToCartPopupComponent,{data : ticketData[0]});
  }

}
