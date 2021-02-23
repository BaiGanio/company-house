import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-companies-search-result',
  templateUrl: './companies-search-result.component.html',
  styleUrls: ['./companies-search-result.component.scss']
})
export class CompaniesSearchResultComponent implements OnInit {
  @Input('companies')
  companies = new Array<Company>();
  constructor() { }

  ngOnInit() { }

}
