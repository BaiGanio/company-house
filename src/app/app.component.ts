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

    this.backendService.getCompany(name).subscribe({
      next: data => {
        data.forEach((element: { id: any; name: any; companyNumber: any; addressLine1: any; companyStatus: any; countryOfOrigin: any; }) => {
          const c = {
            Id: element.id,
            Name: element.name,
            CompanyNumber: element.companyNumber,
            AddressLine1: element.addressLine1,
            CompanyStatus: element.companyStatus,
            CountryOfOrigin: element.countryOfOrigin
          };
          console.log(c);
          this.companies.push(c);
        }); 
        console.log(this.companies ); 
      },
      error: error => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
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
