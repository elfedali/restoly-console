import { Injectable } from '@angular/core';

const ACCESS_TOKEN_KEY = 'access_token';
const EXPIRATION_KEY = 'access_token_expiration';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  /**
   * Signs out the user by removing the access token and expiration from local storage.
   */
  signOut(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(EXPIRATION_KEY);
  }

  /**
   * Retrieves the access token from local storage.
   * @returns The access token as a string or null if it doesn't exist or has expired.
   */
  getAccessToken(): string | null {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    const expiration = localStorage.getItem(EXPIRATION_KEY);

    if (!token || !expiration || this.isTokenExpired(expiration)) {
      return null;
    }

    return token;
  }

  /**
   * Sets the access token and expiration in local storage.
   * @param token The access token as a string.
   * @param expiresIn The token expiration time in seconds.
   */
  setAccessToken(token: string, expiresIn: number = 90): void {
    const expirationTimestamp = Date.now() + expiresIn * 1000;
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    localStorage.setItem(EXPIRATION_KEY, expirationTimestamp.toString());
  }

  /**
   * Checks if the token has expired based on the expiration timestamp.
   * @param expiration The token expiration timestamp as a string.
   * @returns True if the token has expired, false otherwise.
   */
  private isTokenExpired(expiration: string): boolean {
    const expirationTimestamp = parseInt(expiration, 10);
    return Date.now() > expirationTimestamp;
  }

  /**
   * Clears all tokens stored in local storage.
   */
  clearAllTokens(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(EXPIRATION_KEY);
  }
}
