import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class BackendService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers =  new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Headers', 'Content-Type')
      .set('Access-Control-Allow-Methods', 'GET')
      .set('Access-Control-Allow-Origin', '*');
  }

  getCompany(name: string): Observable<any> {
    return this.http.get(environment.apiUrl + 'Companies?name=' + name,  {headers: this.headers});
  }
  getAllCompanies(): Observable<Array<any>> {
    return this.http.get<Array<any>>(environment.apiUrl,  {headers: this.headers});
  }
  getCompanies(name: string): Observable<any> {
    return this.http.get(environment.apiUrl + `/GetBy?name=${name}`,  {headers: this.headers});
  }

  getweather(): Observable<any> {
    return this.http.get("https://localhost:7140/weatherforecast",  {headers: this.headers});
  }

}
