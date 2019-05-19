import { Company } from './../../models/company';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly krsRgx: RegExp = /^0000\d{6}$/;
  readonly regonRgx: RegExp = /^\d{9}$/;
  readonly nipDigitsOnlyRgx: RegExp = /^\d{10}$/;
  readonly nipWithPrefixRgx: RegExp = /^PL\d{10}$/;
  readonly nipWithHyphensRgx: RegExp = /^\d{3}-\d{3}-\d{2}-\d{2}$/;

  searchForm: FormGroup;
  displayForm: FormGroup;

  constructor(private fb: FormBuilder, private homeService: HomeService) { }

  ngOnInit() {
    this.createSearchForm();
    this.createDisplayForm();

    this.searchForm.get('searchData').setValue('');
  }

  createSearchForm() {
    this.searchForm = this.fb.group({
      searchData: ['']
    });
  }

  createDisplayForm() {
    this.displayForm = this.fb.group({
      name: [''],
      street: [''],
      streetNumber: [''],
      postalCode: [''],
      city: ['']
    });

    this.displayForm.disable();
  }

  search() {
    const searchParamValue: string = this.searchForm.get('searchData').value;

    const searchParamName: string = this.parseSearchParam(searchParamValue);

    this.homeService.searchCompany(searchParamName, searchParamValue).subscribe((data: Company) => {
      this.displayForm.get('name').setValue(data.name);
      this.displayForm.get('street').setValue(data.street);
      this.displayForm.get('streetNumber').setValue(data.streetNumber);
      this.displayForm.get('postalCode').setValue(data.postalCode);
      this.displayForm.get('city').setValue(data.city);
    });
  }

  parseSearchParam(searchParam: string): string {
    if (!!searchParam.match(this.regonRgx)) {
      return 'regon';
    }

    if (!!searchParam.match(this.krsRgx)) {
      return 'krs';
    }

    if (searchParam.match(this.nipDigitsOnlyRgx) ||
        searchParam.match(this.nipWithHyphensRgx) ||
        searchParam.match(this.nipWithPrefixRgx)) {
      return 'nip';
    }

    return '';
  }
}
