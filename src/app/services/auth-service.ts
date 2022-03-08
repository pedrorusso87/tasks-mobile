import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLoginRequest } from '../auth/models/login-models';
import { UserRegistrationRequest } from '../auth/models/user-register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = environment.API_URL;
  constructor(private httpClient: HttpClient) {}

  public login(userLoginRequest: UserLoginRequest): Observable<any> {
    return this.httpClient.post(`${this.url}/auth/login`, userLoginRequest);
  }

  public register(
    registerUserRequest: UserRegistrationRequest
  ): Observable<any> {
    return this.httpClient.post(`${this.url}/auth/users`, registerUserRequest);
  }
}
