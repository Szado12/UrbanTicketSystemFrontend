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
  allLoaded = false;
  dataLoaded = false;
  ticketsLoaded = false;

  ticketsList: TicketData[] = [];

  @Input() set userTickets(value: TicketData[]) {
    if(value){
      console.log(value)
      this.ticketsLoaded = true;
      this.ticketsList = value;
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

  openDialog(value: number) {
    const dialogRef = this.dialog.open(TicketDetailsComponent, {
      data: this.ticketsList.find(t => t.id == value),
      width: '400px'
    })
  }
}
