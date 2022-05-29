import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientData } from '../../data/client-data';
import { TicketData } from '../../data/ticket-data';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
  details = [
    {title: 'Bought Time', selector: this.data.boughtTime.toISOString().slice(0,10)},
    this.data.validatedInBus ? {title: 'Validated Time', selector: this.data.validatedTime } : null,
    {title: 'Price', selector: (this.data.type.price/100).toFixed(2) + ' PLN'},
    {title: 'Reduction', selector: this.data.type.reduced ? 'Reduced price' : 'Standard price'},
    {title: 'Category', selector: this.data.type.category.name},
    {title: 'Duration', selector: this.data.type.minutesOfValidity != 0 ? this.data.type.minutesOfValidity + ' minutes' : this.data.type.daysOfValidity + ' days'},
  ]
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: TicketData) { }

  ngOnInit(): void {
  }

}
