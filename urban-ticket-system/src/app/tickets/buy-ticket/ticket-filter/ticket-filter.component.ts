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
        this.availableTypes.push({id:element.id,name: this.remapName(element.name)} as TicketCategory)
      });
    }
  }


  availableTypes : TicketCategory[] =[{id:0,name:"Any Type"} as TicketCategory];
  reduces = ['Both', 'Reduced', 'Standard'];
  selectedType: number = 0; 
  selectedReduce: number = 0;

  onChange() {
    this.filters.emit({type : this.selectedType, reduce : this.selectedReduce});
  }

  remapName(oldName:string):string{
    switch (oldName){
      case 'SINGLE_TICKET':
        return 'Single ticket';
      case 'TIME_TICKET':
        return 'Time ticket';
      case 'SEASON_TICKET':
        return 'Season ticket';
      default:
        return oldName;
    }
  }

  ngOnInit(): void {
  }
}
