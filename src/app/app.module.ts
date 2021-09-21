import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HomeComponent } from './pages/home/home.component';
import { BackendService } from './services/backend.service';
import { HttpClientModule } from '@angular/common/http';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { CompaniesSearchResultComponent } from './components/companies-search-result/companies-search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { RandomCompaniesComponent } from './pages/random-companies/random-companies.component';
import { UploadComponent } from './pages/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    FeaturesComponent,
    HomeComponent,
    CompaniesSearchResultComponent,
    HowItWorksComponent,
    RandomCompaniesComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      primaryColour: '#88078e',
      secondaryColour: '#c6ef23',
      backdropBorderRadius: '14px',
      fullScreenBackdrop: true
    }),
  ],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
