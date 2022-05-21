import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequestData } from '../data/login-request-data';
import { AuthService } from '../service/auth.service';

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

	constructor(private authService: AuthService, private route: Router) {}

	login() {
		this.authService.login(this.dataForm.value as LoginRequestData).subscribe(
			(value) => {
				if (value) {
					this.route.navigate([ '/client' ]);
				}
			},
			(error) => {}
		);
	}
}
