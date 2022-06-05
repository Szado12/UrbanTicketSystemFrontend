import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostScanTicket } from './data/post-scan-ticket';
import { PopupTicketValidationComponent } from './popup-ticket-validation/popup-ticket-validation.component';
import { ScanTicketService } from './services/scan-ticket.service';

@Component({
  selector: 'app-scan-ticket',
  templateUrl: './scan-ticket.component.html',
  styleUrls: ['./scan-ticket.component.scss']
})
export class ScanTicketComponent implements OnInit {

  constructor(private scanTicketService:ScanTicketService, public dialog: MatDialog) { }

  availableDevices: MediaDeviceInfo[] = [];
  ticketCode:string = "";
  selectedDevice: MediaDeviceInfo;
  buses = ["234","435435","432532","KL324234"];
  selectedBus = this.buses[0];

  ngOnInit(): void {
    this.loadAvailableCameras();
  }
  scanSuccessHandler(scannerResponse : any){
    this.ticketCode = scannerResponse;
  }
  
  loadAvailableCameras(){
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() not supported.");
      return;
    }
    navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      devices.filter(device => device.kind == 'videoinput').forEach(device => {
        this.availableDevices.push(device);
      });
    console.log(this.availableDevices);
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    });
  }

  scanTicket(){
    if(this.ticketCode == "")
      console.log("wypełnij dane");
    else
    this.scanTicketService.scanTicket({ticketCode:this.ticketCode, busNumber:this.selectedBus} as PostScanTicket)
    .subscribe(res => 
      {
        var dialogRef = this.dialog.open(PopupTicketValidationComponent,{data : res});
      });
    var dialogRef = this.dialog.open(PopupTicketValidationComponent);
  }
}
