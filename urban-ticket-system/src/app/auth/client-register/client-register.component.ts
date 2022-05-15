import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientRegisterData } from '../data/client-register-data';
import { AuthService } from '../service/auth.service';

@Component({
	selector: 'app-client-register',
	templateUrl: './client-register.component.html',
	styleUrls: [ './client-register.component.scss' ]
})
export class ClientRegisterComponent {
	dataForm = new FormGroup({
		name: new FormControl('', Validators.compose([ Validators.required, Validators.maxLength(50) ])),
		surname: new FormControl('', Validators.compose([ Validators.required, Validators.maxLength(50) ])),
		email: new FormControl(
			'',
			Validators.compose([ Validators.email, Validators.required, Validators.maxLength(50) ])
		),
		password: new FormControl('', Validators.compose([ Validators.required, Validators.maxLength(50) ]))
	});

	constructor(private authService: AuthService, private route: Router) {}

	register() {
		this.authService.clientRegister(this.dataForm.value as ClientRegisterData).subscribe(
			(value) => {
				if (value) {
					this.route.navigate([ '/client' ]);
				}
			},
			(error) => {}
		);
	}
}
