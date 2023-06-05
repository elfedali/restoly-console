import { Injectable } from '@angular/core';

export const USER_STORAGE_KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userStorageKey = USER_STORAGE_KEY;

  constructor() {}

  setUser(user: any): void {
    localStorage.setItem(this.userStorageKey, JSON.stringify(user));
  }

  removeUser(): void {
    localStorage.removeItem(this.userStorageKey);
  }

  getUser(): any | null {
    const userJson = localStorage.getItem(this.userStorageKey);
    return userJson ? JSON.parse(userJson) : null;
  }

  getUserId(): number | null {
    const user = this.getUser();
    return user ? user.id : null;
  }

  getUserName(): string | null {
    const user = this.getUser();
    return user ? `${user.firstName} ${user.lastName}` : null;
  }

  getUserEmail(): string | null {
    const user = this.getUser();
    return user ? user.email : null;
  }

  getUserRole(): string | null {
    const user = this.getUser();
    return user ? user.role : null;
  }
}
