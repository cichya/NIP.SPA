import { environment } from './../../../environments/environment';
import { Company } from './../../models/company';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {}

  baseUrl: string = environment.apiUrl;

  searchCompany(paramName: string, paramValue: string): Observable<Company> {
    return this.http.get<Company>(this.baseUrl + 'company?' + paramName + '=' + paramValue);
  }

}
