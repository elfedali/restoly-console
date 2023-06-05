import { Observable } from 'rxjs';

import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TokenService } from '../_services/token.service';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Get the access token from the TokenService
    const accessToken = this.tokenService.getAccessToken();

    console.log('BearerInterceptor', accessToken);

    // Clone the request and add the Authorization header with the bearer token
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/vnd.api+json',
      },
    });

    // Pass the modified request to the next interceptor or HttpHandler
    return next.handle(modifiedRequest);
  }
}

export const bearerInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BearerInterceptor, multi: true },
];
