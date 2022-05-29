import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TicketType } from '../../data/ticketType';
import { BuyTicketCartService } from '../service/buy-ticket-cart.service';
import { TicketDataService } from '../service/ticket-data.service';

@Component({
  selector: 'app-ticket-cart',
  templateUrl: './ticket-cart.component.html',
  styleUrls: ['./ticket-cart.component.scss']
})
export class TicketCartComponent implements OnInit {

  ticketTypes : TicketType[] = [];
  ticketsInCart : Map<number,number> = new Map<number,number>();
  displayTickets : [TicketType,number][] = [];
  constructor(private buyTicketCart : BuyTicketCartService,private ticketDataService: TicketDataService) { }

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
    console.log(this.displayTickets.length);
    this.ticketDataService.postTicketsToBuy(this.mapMaptoArray(this.ticketsInCart)).subscribe(
      result => {
        this.buyTicketCart.clearAll();
        this.filterOutCartTickets();
      },
      error => {
          console.log(error)
      }
  ); 
  }

  mapMaptoArray(map:Map<number,number>):[number,number][]
  {
    var remmapedData :[number,number][] = []
    for (let entry of map.entries()) {
      remmapedData.push([entry[0],entry[1]]);
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
}
