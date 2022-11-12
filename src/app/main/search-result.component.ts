import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  template: 
  `
  <div class="row">
  <div class="col-md-3" *ngFor='let c of companies;'>
    <div class="card">
      <div class="card-body">
        <div class="text-start">
          <h5 class="text-center">{{c.Name}} </h5>
          <hr>
          <p><b>ID</b> : {{c.Id}}</p>
          <p><b>№</b> : {{c.CompanyNumber}}</p>
          <p><b>Address</b> : {{c.AddressLine1}}</p>
          <p><b>Country Of Origin</b> : {{c.CountryOfOrigin}}</p>
          <p><b>Status</b> : {{c.CompanyStatus }}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
  `
})
export class SearchResultComponent implements OnInit {
  @Input('companies')
  companies = new Array<any>();
  constructor() { }
  ngOnInit(): void { console.log('here');}
}
