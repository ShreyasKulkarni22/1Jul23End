import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { StockService } from '../stock.service';
import { portfolio } from '../Models/portfolio';
import { PortfolioService } from '../portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createportfolio',
  templateUrl: './createportfolio.component.html',
  styleUrls: ['./createportfolio.component.css']
})
export class CreateportfolioComponent implements OnInit {
  // username:string=""
  // portfolioname:string=""
  // obj!:portfolio
  myForm!:FormGroup
  constructor(private portfolioservice:PortfolioService,private router:Router){

  }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      userName: new FormControl(''),
      portfolioName: new FormControl('')
    });
  }

  addPortfolio(obj:portfolio){
    // this.obj.userName=this.username
    // this.obj.portfolioName=this.portfolioname
    this.portfolioservice.addPortfolio(obj).subscribe(res=>{
      console.log(res);
      this.router.navigate(['yourportfolios'])
    })
  }
  
}
