import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-ticket',
  templateUrl: './scan-ticket.component.html',
  styleUrls: ['./scan-ticket.component.scss']
})
export class ScanTicketComponent implements OnInit {

  constructor() { }

  availableDevices: MediaDeviceInfo[] = [];
  ticketCode:string = "";
  selectedDevice: MediaDeviceInfo;

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

}
