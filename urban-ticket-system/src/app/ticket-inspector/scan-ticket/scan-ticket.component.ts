import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusListAndSelectedOne } from './data/bus-list-and-selected-one';
import { GetBusNumber } from './data/get-bus-numbers';
import { PostScanTicket } from './data/post-scan-ticket';
import { PopupTicketValidationComponent } from './popup-ticket-validation/popup-ticket-validation.component';
import { QrCodeScannerComponent } from './qr-code-scanner/qr-code-scanner.component';
import { ScanTicketService } from './services/scan-ticket.service';

@Component({
  selector: 'app-scan-ticket',
  templateUrl: './scan-ticket.component.html',
  styleUrls: ['./scan-ticket.component.scss']
})
export class ScanTicketComponent implements OnInit {

  constructor(private scanTicketService:ScanTicketService, public dialog: MatDialog) { }

  ticketCode:string = "";
  buses:GetBusNumber[] = [{id:1,busNumber:"1"}, {id:2,busNumber:"2"}, {id:3,busNumber:"3"},{id:4,busNumber:"4"}];
  selectedBus:GetBusNumber = this.buses[0];
  popupTicketValidationComponent:BusListAndSelectedOne = {
    availableBuses: this.buses,
    selectedBus: this.selectedBus
  };
  ngOnInit(): void {
  }

  openQRScanner(){
    const qrCodeSannerDialog = this.dialog.open(QrCodeScannerComponent);

    qrCodeSannerDialog.afterClosed().subscribe(res => {
      console.log(res);
      this.ticketCode = res;
    });
  }

  updateSelectedBus(value : GetBusNumber){
    this.selectedBus = value;
  }

  scanTicket(){
    if(this.ticketCode == "")
      console.log("wypełnij dane");
    else
    this.scanTicketService.scanTicket({ticketCode:this.ticketCode, busId :this.selectedBus.id} as PostScanTicket)
    .subscribe(res => 
      {
        this.dialog.open(PopupTicketValidationComponent,{data : res});
      });
    this.dialog.open(PopupTicketValidationComponent);
  }
}
