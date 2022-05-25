import { Component, OnInit } from '@angular/core';
import { ClientData } from './data/client-data';
import { ClientDataService } from './service/client-data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  data!: ClientData; 
  constructor(
    private clientDataService: ClientDataService
  ) { }

  ngOnInit(): void {
    this.clientDataService.getUserData()
    .subscribe(value => {
      this.data = value;
      console.log(value)
    })


  }

}
