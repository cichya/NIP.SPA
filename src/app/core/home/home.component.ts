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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createSearchForm();

    this.searchForm.get('searchData').setValue('');
  }

  createSearchForm() {
    this.searchForm = this.fb.group({
      searchData: ['']
    });
  }

  search() {
    const searchParamValue: string = this.searchForm.get('searchData').value;

    const paramName: string = this.parseSearchParam(searchParamValue);
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
