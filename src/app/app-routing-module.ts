import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './pages/features/features.component';
import { HomeComponent } from './pages/home/home.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { RandomCompaniesComponent } from './pages/random-companies/random-companies.component';
import { UploadComponent } from './pages/upload/upload.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'random-companies', component: RandomCompaniesComponent },
  { path: 'upload', component: UploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
