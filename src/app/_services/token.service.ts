import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signOut() {
    localStorage.removeItem('access_token');
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  setAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

}
