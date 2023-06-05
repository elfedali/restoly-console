import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { IPaginationMeta, IShopResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ShopsService {
  constructor(private http: HttpClient) {}

  getShops(
    pagination?: IPaginationMeta,
    includes?: any,
    filters?: any,
    sort?: any
  ): Observable<IShopResponse> {
    let url = environment.API_URL + 'shops';
    if (pagination) {
      url += '?page[number]=' + pagination.currentPage;
      url += '&page[size]=' + pagination.perPage;
    }
    if (includes) {
      url += '&include=' + includes;
    }
    if (filters) {
      url += '&filter[nameLike]=' + filters;
    }
    if (sort) {
      url += '&sort=' + sort;
    }
    console.log(url);
    return this.http.get<any>(url);
  }

  getShop(id: number) {
    return this.http.get<any>(
      environment.API_URL + 'shops/' + id,
      environment.jsonApiHttpOptions
    );
  }

  createShop(shop: any) {
    return this.http.post<any>(
      environment.API_URL + 'shops',
      shop,
      environment.jsonApiHttpOptions
    );
  }

  updateShop(id: number, shop: any) {
    return this.http.put<any>(
      environment.API_URL + 'shops/' + id,
      shop,
      environment.jsonApiHttpOptions
    );
  }

  deleteShop(id: number) {
    return this.http.delete<any>(
      environment.API_URL + 'shops/' + id,
      environment.jsonApiHttpOptions
    );
  }
}
