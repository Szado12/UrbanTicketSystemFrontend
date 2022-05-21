import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;
  let token_key = 'access_token';
  let token_value = 'token1';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get token', () => {
    localStorage.setItem(token_key, token_value);
    
    expect(service.getToken()).toBe(token_value);
  });

  it('should save token', () => {
    service.saveToken(token_value);

    expect(localStorage.getItem(token_key)).toBe(token_value);
  });

  it('should remove token', () => {
    localStorage.setItem(token_key, token_value);
    service.removeToken();

    expect(localStorage.getItem(token_key)).toBeNull();
  });
});
