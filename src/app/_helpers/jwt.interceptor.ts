import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private token: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add authorization header with jwt token if available
    let currentUser = this.token.getAccessToken();
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`
        }
      });
    }
    return next.handle(request);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
];
