import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-random-companies',
  templateUrl: './random-companies.component.html',
  styleUrls: ['./random-companies.component.scss']
})
export class RandomCompaniesComponent implements OnInit {
  companies: Array<Company>;
  loading = false;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.loading = true;
    this.backendService.getCompanies()
      .subscribe(response => {
        console.log(response);
        this.companies = response as Array<Company>;
        },
        error => {
          console.log(error);
        },
        () =>{
          this.loading = false;
        });
  }

}
