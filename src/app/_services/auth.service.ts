import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

const ACCESS_TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loginUrl = environment.API_URL + 'auth/login';
  private readonly registerUrl = environment.API_URL + 'auth/register';
  private readonly meUrl = environment.API_URL + 'me';

  constructor(private http: HttpClient) {}

  login(login: string, password: string): Observable<any> {
    const body = { login, password };

    return this.http
      .post<any>(this.loginUrl, body, environment.httpOptions)
      .pipe(
        tap((response) => {
          // Store the access token and user in local storage
          localStorage.setItem(ACCESS_TOKEN_KEY, response.access_token);
          localStorage.setItem('user', JSON.stringify(response.user));
        })
      );
  }

  register(name: string, email: string, password: string): Observable<any> {
    const body = { name, email, password, password_confirmation: password };
    return this.http.post<any>(this.registerUrl, body, environment.httpOptions);
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem('user');
  }

  me(): Observable<any> {
    return this.http.get<any>(this.meUrl, environment.httpOptions);
  }

  getAccessToken(): string {
    return localStorage.getItem(ACCESS_TOKEN_KEY) || '';
  }

  getUser(): any {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  isAuthenticated(): boolean {
    // Check if the access token exists and is not expired
    const accessToken = this.getAccessToken();
    return !!accessToken;
  }

  // google login

  signInWithGoogle(idToken: string): Observable<any> {
    const body = { id_token: idToken };
    return this.http.post<any>(
      this.loginUrl + '/google',
      body,
      environment.httpOptions
    );
  }
}
