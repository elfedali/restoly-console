import { Injectable } from '@angular/core';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userStorageKey = 'user';

  constructor() {}

  setLoggedInUser(user: IUser): void {
    localStorage.setItem(this.userStorageKey, JSON.stringify(user));
  }

  removeLoggedInUser(): void {
    localStorage.removeItem(this.userStorageKey);
  }

  getLoggedInUser(): IUser | null {
    const userJson = localStorage.getItem(this.userStorageKey);
    return userJson ? JSON.parse(userJson) : null;
  }

  getUserId(): number | null {
    const user = this.getLoggedInUser();
    return user ? user.id : null;
  }

  // getUserName(): string | null {
  //   const user = this.getLoggedInUser();
  //   return user ? `${user.first_name} ${user.last_name}` : null;
  // }

  // getUserEmail(): string | null {
  //   const user = this.getLoggedInUser();
  //   return user ? user.email : null;
  // }

  // getUserRole(): string | null {
  //   const user = this.getLoggedInUser();
  //   return user ? user.role : null;
  // }
}
