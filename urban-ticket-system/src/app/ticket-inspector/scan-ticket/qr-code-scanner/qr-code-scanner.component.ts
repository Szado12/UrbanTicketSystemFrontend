import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.scss']
})
export class QrCodeScannerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QrCodeScannerComponent>) {}

  availableDevices: MediaDeviceInfo[] = [];
  selectedDevice: MediaDeviceInfo;

  ngOnInit(): void {
    this.loadAvailableCameras();
  }
  
  scanSuccessHandler(scannerResponse : any){
    this.dialogRef.close(scannerResponse);
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
