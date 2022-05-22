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
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-client-login',
	templateUrl: './client-login.component.html',
	styleUrls: [ './client-login.component.scss' ]
})
export class ClientLoginComponent {
	faFacebookSquare = faFacebookSquare;
	dataForm = new FormGroup({
		username: new FormControl(
			'',
			Validators.compose([ Validators.email, Validators.required, Validators.maxLength(50) ])
		),
		password: new FormControl('', Validators.compose([ Validators.required, Validators.maxLength(50) ]))
	});

	constructor(private authService: AuthService, private socialAuthService: SocialAuthService, private route: Router) {}

	login() {
		this.authService.login(this.dataForm.value as LoginRequestData, UserRole.Client).subscribe(
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
