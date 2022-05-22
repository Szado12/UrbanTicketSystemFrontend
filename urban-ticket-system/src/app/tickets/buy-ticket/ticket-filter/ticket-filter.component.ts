import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TicketCategory } from '../../data/ticketCategory';

@Component({
  selector: 'app-ticket-filter',
  templateUrl: './ticket-filter.component.html',
  styleUrls: ['./ticket-filter.component.scss'],
})
export class TicketFilterComponent implements OnInit {
  constructor() {}

  @Output() filters = new EventEmitter<any>();

  @Input() set types(value:any){
      if(value){
      this.selectedType = 0;
      value.forEach((element:any) => {
        this.availableTypes.push(element as TicketCategory)
      });
    }
  }


  availableTypes : TicketCategory[] =[{id:0,name:"Any Type"} as TicketCategory];
  reduces = ['any', 'yes', 'no'];
  selectedType: number = 0; 
  selectedReduce: number = 0;

  onChange() {
    this.filters.emit({type : this.selectedType, reduce : this.selectedReduce});
  }

  ngOnInit(): void {
  }
}
