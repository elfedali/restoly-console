import { environment } from './../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  endpoint = 'about/';

  constructor(private http: HttpClient) { }

  getAbout() {
    return this.http.get(environment.API_URL + this.endpoint, environment.httpOptions);
  }


}
