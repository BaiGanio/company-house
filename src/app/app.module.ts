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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    FeaturesComponent,
    HomeComponent,
    CompaniesSearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
