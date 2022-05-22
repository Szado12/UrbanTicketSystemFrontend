import { TestBed } from '@angular/core/testing';
import * as sha512 from 'js-sha512';
import { HashingService } from './hashing.service';

describe('HashingService', () => {
	let service: HashingService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(HashingService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should hash', () => {
		expect(service.hashString('password')).toBe(sha512.sha512('password'));
	});
});
