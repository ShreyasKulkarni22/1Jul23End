


//   import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-details',
//   templateUrl: './details.component.html',
//   styleUrls: ['./details.component.css']
// })
// export class DetailsComponent {
//   searchStocks: any
//   symbol: string = '';
//   details: any = null;
//   cp:any
//   h:any
//   l:any
//   op:any
//   pc:any
//   constructor(private httpClient: HttpClient) 
//   {
    
//    }
//   searchItem(searchTerm: string) {
//     const apiUrl = `https://finnhub.io/api/v1/quote?symbol=${this.searchStocks}&token=cc676uaad3i9rj8tb1s0`;
  
    
//     this.httpClient.get(apiUrl, { params: { q: this.searchStocks } })
//       .subscribe((response:any) => {
//        this.cp=response.c;
//        this.h=response.h;
//        this.l=response.l;
//        this.op=response.o; 
//        this.pc=response.pc;          
//       });
 
//     }
//   fetchDetailsFromAPI() {
//     const apiUrl = `https://finnhub.io/api/v1/stock/profile2?symbol=${this.symbol}&token=cc676uaad3i9rj8tb1s0`;

//     this.httpClient.get<any>(apiUrl).subscribe((data: any) => {
//       this.details = data;
//     });
//   }
//   }



import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  symbol: string = '';
  details: any = null;
  cp: any;
  h: any;
  l: any;
  op: any;
  pc: any;

  symbols?: string;
  chartUrl?: SafeResourceUrl;

  constructor(private httpClient: HttpClient , private sanitizer: DomSanitizer) {}


  fetchDetailsAndPrices() {
    const apiUrl = `https://finnhub.io/api/v1/stock/profile2?symbol=${this.symbol}&token=ciekou9r01qmfas4ek7gciekou9r01qmfas4ek80`;
    const quoteUrl = `https://finnhub.io/api/v1/quote?symbol=${this.symbol}&token=ciekou9r01qmfas4ek7gciekou9r01qmfas4ek80`;
    const chartUrl = `https://widget.finnhub.io/widgets/stocks/chart?symbol=${this.symbol}&watermarkColor=%231db954&backgroundColor=%23222222&textColor=white`;
    
    this.httpClient.get<any>(apiUrl).subscribe((data: any) => {
      this.details = data;
    });

    this.httpClient.get<any>(quoteUrl).subscribe((response: any) => {
      this.cp = response.c;
      this.h = response.h;
      this.l = response.l;
      this.op = response.o;
      this.pc = response.pc;
    });
    
    this.chartUrl = this.sanitizer.bypassSecurityTrustResourceUrl(chartUrl);
  }
}

