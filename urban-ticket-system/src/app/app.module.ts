import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { ClientLoginComponent } from './auth/client-login/client-login.component';
import { ClientRegisterComponent } from './auth/client-register/client-register.component';
import { InspectorLoginComponent } from './auth/inspector-login/inspector-login.component';
import { TicketInspectorComponent } from './ticket-inspector/ticket-inspector.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FacebookLoginProvider,
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { AuthInterceptor } from './auth/service/auth.interceptor';
import { ClientTicketsComponent } from './client/client-tickets/client-tickets.component';
import { TicketDetailsComponent } from './client/client-tickets/ticket-details/ticket-details.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuyTicketComponent } from './tickets/buy-ticket/buy-ticket.component';
import { TicketListComponent } from './tickets/buy-ticket/ticket-list/ticket-list.component';
import { TicketFilterComponent } from './tickets/buy-ticket/ticket-filter/ticket-filter.component';
import { SingleTicketComponent } from './tickets/buy-ticket/ticket-list/single-ticket/single-ticket.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditClientDataDialogComponent } from './client/edit-client-data-dialog/edit-client-data-dialog.component';
import { EditClientPasswordDialogComponent } from './client/edit-client-password-dialog/edit-client-password-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TicketCartComponent } from './tickets/buy-ticket/ticket-cart/ticket-cart.component';
import { CartRowComponent } from './tickets/buy-ticket/ticket-cart/cart-row/cart-row.component';
import { ClientSingleTicketComponent } from './client/client-tickets/client-single-ticket/client-single-ticket.component';
import { SuccessfulBuyComponent } from './tickets/buy-ticket/ticket-cart/successful-buy/successful-buy.component';
import { AddToCartPopupComponent } from './tickets/buy-ticket/ticket-list/add-to-cart-popup/add-to-cart-popup.component';
import { QRCodeModule } from 'angularx-qrcode';
import { EditInspectorDataDialogComponent } from './ticket-inspector/edit-inspector-data-dialog/edit-inspector-data-dialog.component';
import { EditInspectorPasswordDialogComponent } from './ticket-inspector/edit-inspector-password-dialog/edit-inspector-password-dialog.component';
import { ScanTicketComponent } from './ticket-inspector/scan-ticket/scan-ticket.component';
import { PopupTicketValidationComponent } from './ticket-inspector/scan-ticket/popup-ticket-validation/popup-ticket-validation.component';
import { SelectBusComponent } from './ticket-inspector/scan-ticket/select-bus/select-bus.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QrCodeScannerComponent } from './ticket-inspector/scan-ticket/qr-code-scanner/qr-code-scanner.component';
import { FireworksComponent } from './ticket-inspector/fireworks/fireworks.component';
import { PopupTicketErrorHandlerComponent } from './ticket-inspector/scan-ticket/popup-ticket-error-handler/popup-ticket-error-handler.component';

@NgModule({
	declarations: [
		AppComponent,
		AuthComponent,
		ClientLoginComponent,
		ClientRegisterComponent,
		InspectorLoginComponent,
		TicketInspectorComponent,
		ClientComponent,
		ClientTicketsComponent,
		TicketDetailsComponent,
		BuyTicketComponent,
		TicketListComponent,
		TicketFilterComponent,
		SingleTicketComponent,
    	TicketCartComponent,
    	CartRowComponent,
		EditClientDataDialogComponent,
  EditClientPasswordDialogComponent,
  ClientSingleTicketComponent,
  SuccessfulBuyComponent,
  AddToCartPopupComponent,
  ScanTicketComponent,
  PopupTicketValidationComponent,
  EditInspectorDataDialogComponent,
  EditInspectorPasswordDialogComponent,
  SelectBusComponent,
  QrCodeScannerComponent,
  FireworksComponent,
  PopupTicketErrorHandlerComponent,
	],
	imports: [ 
		BrowserAnimationsModule,
		MatAutocompleteModule,
		MatDialogModule,
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		NgbModule,
		FormsModule,
		FlexLayoutModule,
		SocialLoginModule,
		FontAwesomeModule,
		MatTooltipModule,
		ZXingScannerModule,
		QRCodeModule
		 ],
	providers: [ { provide: 'BASE_API_URL', useValue: 'https://urban-ticket-system-backend.herokuapp.com'  },
				 {
					 provide: 'SocialAuthServiceConfig',
					 useValue: {
						 autoLogin: false,
						 providers: [
							 {
								 id: FacebookLoginProvider.PROVIDER_ID,
								 provider: new FacebookLoginProvider('375670794362966'),
							 }
						 ]
					 }  as SocialAuthServiceConfig,
				 },
				 {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
				],
				 
	bootstrap: [ AppComponent ]
})

export class AppModule {}
