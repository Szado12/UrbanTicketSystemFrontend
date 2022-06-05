import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostBuyMultipleTickets } from '../../data/post-multiple-tickets';
import { TicketType } from '../../data/ticketType';
import { BuyTicketCartService } from '../service/buy-ticket-cart.service';
import { TicketDataService } from '../service/ticket-data.service';
import { SuccessfulBuyComponent } from './successful-buy/successful-buy.component';

@Component({
  selector: 'app-ticket-cart',
  templateUrl: './ticket-cart.component.html',
  styleUrls: ['./ticket-cart.component.scss']
})
export class TicketCartComponent implements OnInit {

  ticketTypes : TicketType[] = [];
  ticketsInCart : Map<number,number> = new Map<number,number>();
  displayTickets : [TicketType,number][] = [];
  constructor(private buyTicketCart : BuyTicketCartService,private ticketDataService: TicketDataService,public dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.ticketDataService.getTicketTypes().subscribe(res =>
      {
        this.ticketTypes = res;
        this.filterOutCartTickets();
      });
  }

  filterOutCartTickets(){
    this.ticketsInCart = this.buyTicketCart.getListOfTicketsInCart();
    this.displayTickets = [];
    this.ticketTypes.forEach(ticketType => {
      if(this.ticketsInCart.has(ticketType.id))
        this.displayTickets.push([ticketType,(this.ticketsInCart.get(ticketType.id)!)]);
      });
  }

  buyTickets(){
    this.ticketDataService.postTicketsToBuy(this.mapMaptoPostBuyMultipleTickets(this.ticketsInCart)).subscribe(
      result => {
        this.buyTicketCart.clearAll();
        this.filterOutCartTickets();
        const dialogRef = this.dialog.open(SuccessfulBuyComponent);
      },
      error => {
          console.log(error)
      }
  ); 
  }

  mapMaptoPostBuyMultipleTickets(map:Map<number,number>):PostBuyMultipleTickets
  {
    var remmapedData : PostBuyMultipleTickets = {
      ticketTypeIds: [],
      ticketTypeCounts: []
    }
    
    for (let entry of map.entries()) {
      remmapedData.ticketTypeIds.push(entry[0]);
      remmapedData.ticketTypeCounts.push(entry[1]);
    }
    return remmapedData;
  }

  removeItem(id:number){
    this.buyTicketCart.removeTickets(id);
    this.filterOutCartTickets();
  }

  changeValue(ticket:any){
    this.buyTicketCart.changeValue(ticket[0].id,ticket[1]);
    this.filterOutCartTickets();
  }
  getTotalPrice():number{
    var num = 0;
    this.displayTickets.forEach(value => {
      num += value[0].price * value[1];
    });
    return num;
  }
}
