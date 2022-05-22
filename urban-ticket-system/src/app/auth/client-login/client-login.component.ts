import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequestData } from '../data/login-request-data';
import { AuthService } from '../service/auth.service';
import {
	SocialAuthService,
	FacebookLoginProvider,
	SocialUser,
} from 'angularx-social-login';
import { FacebookLoginData } from '../data/facebook-login-data';
import { UserRole } from '../data/user-roles';

@Component({
	selector: 'app-client-login',
	templateUrl: './client-login.component.html',
	styleUrls: [ './client-login.component.scss' ]
})
export class ClientLoginComponent {
	loginError: boolean = false; 
	loading: boolean = false; 

	dataForm = new FormGroup({
		username: new FormControl(
			'',
			Validators.compose([ Validators.email, Validators.required, Validators.maxLength(50) ])
		),
		password: new FormControl('', Validators.compose([ Validators.required, Validators.maxLength(50) ]))
	});

	constructor(private authService: AuthService, private socialAuthService: SocialAuthService, private route: Router) {}

	login() {
		this.loginError = false;
		this.loading = true; 
		this.authService.login(this.dataForm.value as LoginRequestData, UserRole.Client).subscribe(
			(value) => {
				if (value.role == UserRole.Client.toString()) {
					this.route.navigate([ '/client' ]);
				} else {
					this.loginError = true
				}
				this.loading = false; 
			},
			(error) => {
				this.loginError = true
				this.loading = false; 
			}
		);
	}

	loginWithFacebook(): void {
		this.loginError = false;
		this.loading = true; 
		this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
		this.socialAuthService.authState.subscribe((user: any) => {
			this.authService.facebookLogin(JSON.parse('{ "accessToken": "' + user.authToken + '" }') as FacebookLoginData).subscribe(
				(value) => {
					if (value.role == UserRole.OauthClient.toString()) {
						this.route.navigate([ '/client' ]);
					} else {
						this.loginError = true
					}
					this.loading = false; 
				},
				(error) => {
					this.loginError = true
					this.loading = false; 
				}
			);
		});
	}
}
