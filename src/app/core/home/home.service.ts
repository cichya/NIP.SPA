import { Company } from './../../models/company';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class HomeService {

  constructor() {}

  searchCompany(paramName: string, paramValue: string): Observable<Company> {
    const comp: Company = {
      id: 1,
      city: 'Poznan',
      name: 'JanuszSoft',
      postalCode: '12-123',
      street: 'Glogowska',
      streetNumber: '1'
    };

    return of(comp);
  }

}
