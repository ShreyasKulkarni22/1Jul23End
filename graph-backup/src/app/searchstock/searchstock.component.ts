import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-searchstock',
  templateUrl: './searchstock.component.html',
  styleUrls: ['./searchstock.component.css']
})
export class SearchstockComponent {
  searchStocks: any
  
  constructor(private httpClient:HttpClient){}
  cp:any
  h:any
  l:any
  op:any
  pc:any

  searchItem(searchTerm: string) {
    const apiUrl = `https://finnhub.io/api/v1/quote?symbol=${this.searchStocks}&token=ciekou9r01qmfas4ek7gciekou9r01qmfas4ek80`;
  
    
    this.httpClient.get(apiUrl, { params: { q: this.searchStocks } })
      .subscribe((response:any) => {
       this.cp=response.c;
       this.h=response.h;
       this.l=response.l;
       this.op=response.o; 
       this.pc=response.pc;          
      });
  }
}
