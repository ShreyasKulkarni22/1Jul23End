import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstocksComponent } from './allstocks/allstocks.component';
import { SearchstockComponent } from './searchstock/searchstock.component';
import { NewsComponent } from './news/news.component';
import { DetailsComponent } from './details/details.component';
import { ChartComponent } from './chart/chart.component';
import { CreateportfolioComponent } from './createportfolio/createportfolio.component';
import { ShowportfoliosComponent } from './showportfolios/showportfolios.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewstocksComponent } from './viewstocks/viewstocks.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'allstocks',
    component: AllstocksComponent
  },
  {
    path:'searchstocks',
    component: SearchstockComponent
  },
  {
    path:'news',
    component: NewsComponent
  },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'chart',
    component: ChartComponent
  },
  {
    path:'createportfolio',
    component:CreateportfolioComponent
  },
  {
    path:'yourportfolios',
    component:ShowportfoliosComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'viewstocks/:id',
    component:ViewstocksComponent
  }
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
