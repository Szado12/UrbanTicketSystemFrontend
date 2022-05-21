import { Injectable } from '@angular/core';
import * as sha512 from 'js-sha512';

@Injectable({
	providedIn: 'root'
})
export class HashingService {
	constructor() {}

	hashString(stringToBeHashed: string){
		return sha512.sha512(stringToBeHashed);
	}
}
