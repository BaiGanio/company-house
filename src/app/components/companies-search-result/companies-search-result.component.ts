import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-search-result',
  templateUrl: './companies-search-result.component.html',
  styleUrls: ['./companies-search-result.component.scss']
})
export class CompaniesSearchResultComponent implements OnInit {
  @Input('companies')
  companies: any;
  constructor() { }

  ngOnInit() {
    console.log(this.companies);
  }

}
