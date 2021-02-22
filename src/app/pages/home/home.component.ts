import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companies = new Array<Company>();
  constructor(private backendService: BackendService) { }

  ngOnInit() {}

  public getCompany(){
    this.backendService.getCompany('alma').subscribe(response => {
      response.forEach(element => {
          const c = {
            Id: element.id,
            CompanyName: element.companyName,
            CompanyNumber: element.companyNumber,
            AddressLine1: element.addressLine1,
            CompanyStatus: element.companyStatus,
            CountryOfOrigin: element.countryOfOrigin
          };
          this.companies.push(c as Company);
        });
      }, 
      error => {
         console.log(error);
      }, 
      () => { 
        console.log(this.companies); }
    );
  }
}
