export class Company {
    Id: string;
    CompanyName: string;
    CompanyNumber: string;
    AddressLine1: string;
    CompanyStatus: number;
    CountryOfOrigin: string;
    URI: string;

    constructor(id?: any, companyName?: any, companyNumber?: any, addressLine1?: any,
        companyStatus?: any, countryOfOrigin?: any, uri?: any) {
        this.Id = id;
        this.CompanyName = companyName;
        this.CompanyNumber = companyNumber;
        this.AddressLine1 = addressLine1;
        this.CompanyStatus = companyStatus;
        this.CountryOfOrigin = countryOfOrigin;
        this.URI = uri;
    }
}