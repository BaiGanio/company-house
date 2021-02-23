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
  loading = false;
  haveSearchResult = false;
  haveNoSearchResult = false;

  constructor(private backendService: BackendService) { }

  ngOnInit() {}

  public getCompany(){
    this.loading = true;
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
        this.loading = false;
        this.setSearchStatus();
      }, 
      error => {
        this.loading = false;
        console.log(error);
      },
      () =>{ }
    );
  }

  private setSearchStatus(){
    if(this.companies.length >= 1 ){
      this.haveSearchResult = true;
    } else{
      this.haveNoSearchResult = true;
    }
  }
}
