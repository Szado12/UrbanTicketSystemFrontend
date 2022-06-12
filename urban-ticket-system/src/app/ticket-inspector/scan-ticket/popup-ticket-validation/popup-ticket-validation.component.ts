import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ScanTicketResponse } from '../data/scan-ticket-response';

@Component({
  selector: 'app-popup-ticket-validation',
  templateUrl: './popup-ticket-validation.component.html',
  styleUrls: ['./popup-ticket-validation.component.scss']
})
export class PopupTicketValidationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ScanTicketResponse) {}

  ngOnInit(): void {
  }

}
