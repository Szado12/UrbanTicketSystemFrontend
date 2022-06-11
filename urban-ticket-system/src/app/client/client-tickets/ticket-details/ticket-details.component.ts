import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ClientData } from '../../data/client-data';
import { TicketData } from '../../data/ticket-data';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
  faX = faX
  details = [
    {title: 'Bought Time', selector: moment(this.data.boughtTime).format('YYYY-MM-DD HH:mm:ss')},
    this.data.validatedInBus ? {title: 'Validated Time', selector: moment(this.data.validatedTime).format('YYYY-MM-DD HH:mm:ss')} : null,
    {title: 'Price', selector: (this.data.type.price/100).toFixed(2) + ' PLN'},
    {title: 'Reduction', selector: this.data.type.reduced ? 'Reduced price' : 'Standard price'},
    {title: 'Category', selector: this.data.type.displayName},
    {title: 'Duration', selector: this.data.type.minutesOfValidity != 0 ? this.data.type.minutesOfValidity + ' minutes' : 
      this.data.type.daysOfValidity + (this.data.type.daysOfValidity == 1 ? ' day':  ' days')},
  ]
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: TicketData) { }

  ngOnInit(): void {
  }

}
