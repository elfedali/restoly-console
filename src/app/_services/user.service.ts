import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { IPaginationMeta, IShopResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getCateories(
    pagination?: IPaginationMeta,
    includes?: any
  ): Observable<IShopResponse> {
    let url = environment.API_URL + 'users';
    if (pagination) {
      url += '?page[number]=' + pagination.currentPage;
      url += '&page[size]=' + pagination.perPage;
    }
    if (includes) {
      url += '&include=' + includes;
    }
    return this.http.get<any>(url);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get<any>(environment.API_URL + 'users/' + id);
  }
}
