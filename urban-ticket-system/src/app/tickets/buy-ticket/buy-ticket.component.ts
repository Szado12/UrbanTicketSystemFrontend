import { Component, OnInit } from '@angular/core';
import { TicketDataService } from './service/ticket-data.service';
import { TicketCategory } from '../data/ticketCategory';
import { TicketType } from '../data/ticketType';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.scss'],
})
export class BuyTicketComponent implements OnInit {
  ticketCategories: TicketCategory[] = [];
  ticketTypes : TicketType[] = [];
  filtredTypes : TicketType[] = [];




  constructor(private ticketDataService: TicketDataService) {}

  filterTicketsTypes(filters: any){
    if(filters.type != 0)
      this.filtredTypes = this.ticketTypes.filter(x=>x.category.id == filters.type)
    else
      this.filtredTypes = this.ticketTypes;

    switch (filters.reduce){
      case 0:
        break;
      case 1:
        this.filtredTypes = this.filtredTypes.filter(x=>x.reduced);
        break;
      case 2:
        this.filtredTypes = this.filtredTypes.filter(x=>!x.reduced);
        break;
    }
  }

  ngOnInit(): void {
    this.ticketDataService
      .getTicketCategories()
      .subscribe(res => this.ticketCategories = res);
    this.ticketDataService.getTicketTypes().subscribe(res => 
    {
      this.ticketTypes = res;
      this.filtredTypes = res;
    });
  }
}
