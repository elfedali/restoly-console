import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaginationMeta, IShopResponse } from '../models';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatgoriesService {
  constructor(private http: HttpClient) {}

  getCateories(
    pagination?: IPaginationMeta,
    includes?: any
  ): Observable<IShopResponse> {
    let url = environment.API_URL + 'categories';
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
    return this.http.get<any>(environment.API_URL + 'categories/' + id);
  }
}
