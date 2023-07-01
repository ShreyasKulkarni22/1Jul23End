import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AllstocksComponent } from './allstocks/allstocks.component';
import { SearchstockComponent } from './searchstock/searchstock.component';
import { NewsComponent } from './news/news.component';
import { DetailsComponent } from './details/details.component';
import { CommonModule, DatePipe } from '@angular/common';
import {HomeComponent} from 'src/app/home/home.component';

import { ChartComponent } from './chart/chart.component';
import { Chart, registerables } from 'chart.js';
import { CreateportfolioComponent } from './createportfolio/createportfolio.component';
import { ShowportfoliosComponent } from './showportfolios/showportfolios.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ViewstocksComponent } from './viewstocks/viewstocks.component';
import { ViewstockdetailsComponent } from './viewstockdetails/viewstockdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    AllstocksComponent,
    SearchstockComponent,
   LoginComponent,
    NewsComponent,
     DetailsComponent,
      HomeComponent,
         ChartComponent,
       CreateportfolioComponent,
       ShowportfoliosComponent,
       SignupComponent,
       ViewstocksComponent,
       ViewstockdetailsComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    CommonModule,
    ReactiveFormsModule    
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
