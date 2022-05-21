import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientLoginData } from '../data/client-login-data';
import { AuthService } from '../service/auth.service';
import {
	SocialAuthService,
	FacebookLoginProvider,
	SocialUser,
} from 'angularx-social-login';
import { FacebookLoginData } from '../data/facebook-login-data';

@Component({
	selector: 'app-client-login',
	templateUrl: './client-login.component.html',
	styleUrls: [ './client-login.component.scss' ]
})
export class ClientLoginComponent {
	dataForm = new FormGroup({
		username: new FormControl(
			'',
			Validators.compose([ Validators.email, Validators.required, Validators.maxLength(50) ])
		),
		password: new FormControl('', Validators.compose([ Validators.required, Validators.maxLength(50) ]))
	});

	constructor(private authService: AuthService, private socialAuthService: SocialAuthService, private route: Router) {}

	login() {
		this.authService.clientLogin(this.dataForm.value as ClientLoginData).subscribe(
			(value) => {
				if (value) {
					this.route.navigate([ '/client' ]);
				}
			},
			(error) => {}
		);
	}

	loginWithFacebook(): void {
		this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
		this.socialAuthService.authState.subscribe((user) => {
			console.log(user.authToken);
			this.authService.facebookLogin(JSON.parse('{ "accessToken": "'+user.authToken+'" }') as FacebookLoginData).subscribe(
				response => console.log(response)
			);
		});
	}
}
