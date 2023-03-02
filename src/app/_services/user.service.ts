import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { }

  setLoggedInUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  getUserId() {
    return JSON.parse(localStorage.getItem('user')!).id;
  }

  getUserName() {
    return JSON.parse(localStorage.getItem('user')!).name;
  }

  getUserEmail() {
    return JSON.parse(localStorage.getItem('user')!).email;
  }

  destroyUser() {
    localStorage.removeItem('user');
  }


}
