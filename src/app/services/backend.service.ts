import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  getCompany(name: string): Observable<any> {
    return this.http.get(environment.bgapiUrl + name);
  }
}