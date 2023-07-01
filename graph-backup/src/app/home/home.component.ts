import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cp: any;
  h: any;
  l: any;
  op: any;
  pc: any;
  apiurl =  "https://finnhub.io/api/v1/quote?symbol=AAPL&token=ciekou9r01qmfas4ek7gciekou9r01qmfas4ek80";
 
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getquote();
  }

  getquote() {
    this.httpClient.get<any>(this.apiurl).subscribe((response: any) => {
      this.cp = response.c;
      this.h = response.h;
      this.l = response.l;
      this.op = response.o;
      this.pc = response.pc;
    });
  }
}
