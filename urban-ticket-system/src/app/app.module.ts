import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { ClientLoginComponent } from './auth/client-login/client-login.component';
import { ClientRegisterComponent } from './auth/client-register/client-register.component';
import { InspectorLoginComponent } from './auth/inspector-login/inspector-login.component';
import { TicketInspectorComponent } from './ticket-inspector/ticket-inspector.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FacebookLoginProvider,	SocialLoginModule, SocialAuthServiceConfig, } from 'angularx-social-login';

@NgModule({
	declarations: [
		AppComponent,
		AuthComponent,
		ClientLoginComponent,
		ClientRegisterComponent,
		InspectorLoginComponent,
		TicketInspectorComponent,
		ClientComponent
	],
	imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, NgbModule, FlexLayoutModule, SocialLoginModule ],
	providers: [ { provide: 'BASE_API_URL', useValue: 'http://localhost:8080' },
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
				 } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
