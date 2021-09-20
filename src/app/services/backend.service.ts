import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  getCompany(name: string): Observable<any> {
    const headers: HttpHeaders =
      new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Headers', 'Content-Type')
      .set('Access-Control-Allow-Methods', 'GET')
      .set('Access-Control-Allow-Origin', '*');

    return this.http.get(environment.apiUrl + 'Companies?name=' + name,  {headers: headers});
  }
}
