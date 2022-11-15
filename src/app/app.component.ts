import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'company-house';
  companies = new Array<any>();
  loading = false;
  haveSearchResult = false;
  haveNoSearchResult = false;
  warning = false;
  search : string = '';

  constructor(private backendService: BackendService) { }

  ngOnInit() { }

  public getCompany(name: string){
    if(!name){
      this.warning = true;
      return;
    }
    this.loading = true;
    this.haveSearchResult = false;
    this.haveNoSearchResult = false;
    this.warning = false;
    this.companies = new Array<any>();    

    this.backendService.getCompanies(name).subscribe({
      next: data => {
        data.forEach((element) => {
          console.log(element);
          const c = {
            Id: element.id,
            CompanyName: element.companyName,
            CompanyNumber: element.companyNumber,
            Address: element.address,
            PostTown: element.postTown,
            PostCode: element.postCode,
            CompanyStatus: element.companyStatus,
            CountryOfOrigin: element.countryOfOrigin,
            Uri: element.uri,
            SicCode: element.sicCode_SicText_1
          };
          console.log(c);
          this.companies.push(c);
        }); 
        console.log(this.companies ); 
        this.haveSearchResult = true;
      },
      error: error => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
        this.loading = false;
        this.haveSearchResult = true;
        console.log('Request complete');
      }
    });
    
  }

  private setSearchStatus(){
    if(this.companies.length >= 1 ){
      this.haveSearchResult = true;
      this.warning = false;
    } else{
      this.haveNoSearchResult = true;
      this.warning = false;
    }
  }
}
