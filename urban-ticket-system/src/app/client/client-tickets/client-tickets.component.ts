import { Component, Input, OnInit } from '@angular/core';
import { TicketData } from '../data/ticket-data';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import {MatDialog } from '@angular/material/dialog';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-client-tickets',
  templateUrl: './client-tickets.component.html',
  styleUrls: ['./client-tickets.component.scss']
})
export class ClientTicketsComponent implements OnInit {
  constructor(public dialog: MatDialog){}
  faSpinner = faSpinner;
  allLoaded = false;
  dataLoaded = false;
  ticketsLoaded = false;

  ticketsExists = false;
  ticketsList: TicketData[] = [];

  @Input() set userTickets(value: TicketData[]) {
    if(value){
      console.log(value)
      this.ticketsLoaded = true;
      this.ticketsList = value;
      if(this.ticketsList.length) {
        this.ticketsExists = true;
      }
      this.updateLoading();
    }
  }

  @Input() set loaded(value: boolean) {
    if(value)
      this.dataLoaded = true;
    this.updateLoading();
      
  }

  ngOnInit(): void {
  }

  updateLoading() {
    this.allLoaded = this.ticketsLoaded && this.dataLoaded;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TicketDetailsComponent, {
      width: '250px'
    });
  }
}
