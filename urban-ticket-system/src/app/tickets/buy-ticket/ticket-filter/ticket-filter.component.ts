import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticket-filter',
  templateUrl: './ticket-filter.component.html',
  styleUrls: ['./ticket-filter.component.scss'],
})
export class TicketFilterComponent implements OnInit {
  constructor() {}

  @Output() filters = new EventEmitter<number[]>();

  types = ['any type', 'typ1', 'typ2', 'typ3'];
  reduces = ['any', 'yes', 'no'];
  selectedType:any;
  selectedReduce:any;

  onChange() {
    console.log([this.selectedType, this.selectedReduce]);
    this.filters.emit([this.selectedType, this.selectedReduce]);
  }

  ngOnInit(): void {}
}
