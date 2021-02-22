import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Company } from '../models/company.model';
@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  getCompany(name: string): Observable<Company[]> {
    return null;
  }
}