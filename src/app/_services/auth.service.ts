import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    let login: string = email;

    return this.http.post<any>(
      environment.API_URL + 'auth/login',
      { login, password },
      environment.httpOptions
    );
  }

  register(name: string, email: string, password: string) {
    let password_confirmation: string = password;

    return this.http.post<any>(
      environment.API_URL + 'auth/register',
      { name, email, password, password_confirmation },
      environment.httpOptions
    );
  }

  logout() {
    localStorage.removeItem('access_token'); // remove token from local storage to log user out
    localStorage.removeItem('user'); // remove user from local storage to log user out
  }
  me() {
    return this.http.get<any>(
      environment.API_URL + 'me',
      environment.httpOptions
    );
  }
}
