import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { IPaginationMeta, IShopResponse } from '../models';

/*
{
    "meta": {
        "page": {
            "currentPage": 1,
            "from": 1,
            "lastPage": 214,
            "perPage": 1,
            "to": 1,
            "total": 214
        }
    },
    "jsonapi": {
        "version": "1.0"
    },
    "links": {
        "first": "http://localhost:8000/api/v1/shops?page%5Bnumber%5D=1&page%5Bsize%5D=1",
        "last": "http://localhost:8000/api/v1/shops?page%5Bnumber%5D=214&page%5Bsize%5D=1",
        "next": "http://localhost:8000/api/v1/shops?page%5Bnumber%5D=2&page%5Bsize%5D=1"
    },
    "data": [
        {
            "type": "shops",
            "id": "1",
            "attributes": {
                "name": "Hodkiewicz-Wolff",
                "slug": "hodkiewicz-wolff",
                "description": "Unde ab nemo qui. Mollitia hic illo vel aut provident aliquam autem. Sit qui natus quis sed aspernatur impedit nesciunt enim.",
                "phoneNumber": null,
                "address": null,
                "city": null,
                "zipCode": null,
                "country": null,
                "logoPhoto": null,
                "coverPhoto": null,
                "isEnabled": true,
                "isApproved": true,
                "approvedAt": "1986-12-01T07:22:00.000000Z",
                "createdAt": "2023-05-28T14:41:42.000000Z",
                "updatedAt": "2023-05-28T14:41:42.000000Z"
            },
            "relationships": {
                "owner": {
                    "links": {
                        "related": "http://localhost:8000/api/v1/shops/1/owner",
                        "self": "http://localhost:8000/api/v1/shops/1/relationships/owner"
                    }
                },
                "categories": {
                    "links": {
                        "related": "http://localhost:8000/api/v1/shops/1/categories",
                        "self": "http://localhost:8000/api/v1/shops/1/relationships/categories"
                    }
                },
                "tags": {
                    "links": {
                        "related": "http://localhost:8000/api/v1/shops/1/tags",
                        "self": "http://localhost:8000/api/v1/shops/1/relationships/tags"
                    }
                },
                "images": {
                    "links": {
                        "related": "http://localhost:8000/api/v1/shops/1/images",
                        "self": "http://localhost:8000/api/v1/shops/1/relationships/images"
                    }
                },
                "reviews": {
                    "links": {
                        "related": "http://localhost:8000/api/v1/shops/1/reviews",
                        "self": "http://localhost:8000/api/v1/shops/1/relationships/reviews"
                    }
                }
            },
            "links": {
                "self": "http://localhost:8000/api/v1/shops/1"
            }
        }
    ]
}
*/

@Injectable({
  providedIn: 'root',
})
export class ShopsService {
  constructor(private http: HttpClient) {}

  getShops(
    pagination?: IPaginationMeta,
    includes?: any
  ): Observable<IShopResponse> {
    let url = environment.API_URL + 'shops';
    if (pagination) {
      url += '?page[number]=' + pagination.currentPage;
      url += '&page[size]=' + pagination.perPage;
    }
    if (includes) {
      url += '&include=' + includes;
    }
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
