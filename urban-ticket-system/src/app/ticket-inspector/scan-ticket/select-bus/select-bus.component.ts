import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import { BusListAndSelectedOne } from '../data/bus-list-and-selected-one';
import { GetBusNumber } from '../data/get-bus-numbers';

@Component({
  selector: 'app-select-bus',
  templateUrl: './select-bus.component.html',
  styleUrls: ['./select-bus.component.scss']
})
export class SelectBusComponent implements OnInit {
  
  filteredBuses: Observable<GetBusNumber[]>;
  buses : GetBusNumber[];
  selectedBus:GetBusNumber;
  control = new FormControl('');
  

  @Input() set listOfBuses(value : BusListAndSelectedOne){
    if(value){
      this.buses = value.availableBuses;
      this.selectedBus = value.selectedBus;
    }
  };

  @Output() selectedBusEvent = new EventEmitter<any>();

  constructor() {
   }

   ngOnInit() {
    this.filteredBuses = this.control.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value?.name)),
      map(name => (name ? this._filter(name) : this.buses.slice())),
    );
  }

  displayFn(bus: GetBusNumber): string {
    return bus && bus.busNumber ? bus.busNumber : '';
  }

  emitSelectedBus(){
    this.selectedBusEvent.emit(this.selectedBus);
  }

  private _filter(str: string): GetBusNumber[] {
    const filterValue = str.toLowerCase();
    return this.buses.filter(bus => bus.busNumber.toLowerCase().includes(filterValue));
  }

}
