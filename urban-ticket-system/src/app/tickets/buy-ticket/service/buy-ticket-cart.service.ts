import { Injectable } from '@angular/core';
import { TicketType } from '../../data/ticketType';

@Injectable({
  providedIn: 'root'
})
export class BuyTicketCartService {


  cartTickets : Map<number,number> = new Map<number,number>();
  constructor() { 
    this.getSavedTickets();
  }

  addTicket(ticketType:TicketType,count : number){
    if(this.cartTickets.has(ticketType.id))
    {
      var previousCount = this.cartTickets.get(ticketType.id)!;
      this.cartTickets.set(ticketType.id,previousCount + count);
    }
    else{
      this.cartTickets.set(ticketType.id,count);
    }
    this.saveCurrentTickets();
  }
  getSavedTickets(){
      var localStorageCartTickets = localStorage.getItem("cartTickets");
      if(localStorageCartTickets == null)
        return;
      if(localStorageCartTickets == '')
        return;
      this.cartTickets = JSON.parse(localStorageCartTickets,this.reviver) as Map<number,number>;
  }

  getListOfTicketsInCart(){
    return this.cartTickets;
  }

  saveCurrentTickets(){
    localStorage.setItem("cartTickets",JSON.stringify(this.cartTickets,this.replacer));
  }

  removeTickets(ticketTypeId:number){
    if(this.cartTickets.has(ticketTypeId))
    {
      this.cartTickets.delete(ticketTypeId);
      this.saveCurrentTickets();
    }
  }

  changeValue(ticketTypeId:number,count:number){
    if(this.cartTickets.has(ticketTypeId)){
      this.cartTickets.set(ticketTypeId,count);
      this.saveCurrentTickets();
    }
  }

  
  clearAll(){
    this.cartTickets.clear();
    this.saveCurrentTickets();
  }

  //Extra code for Map to work with JSON.parse/stringify
  replacer(key:any, value:any) {
    if(value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()),
      };
    } else {
      return value;
    }
  }


  reviver(key:any, value:any) {
    if(typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
  }
}
