// import { Component } from '@angular/core';
// import { UserdataService } from './service/userdata.service';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'graph';
//   users:any;
//   constructor(private userdataService: UserdataService){
//     userdataService.user().subscribe(res=>
//      this.users=res
//     )
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://finnhub.io/api/v1/quote';
const API_TOKEN = 'cc676uaad3i9rj8tb1s0';

interface StockQuote {
  symbol: string;
  currentPrice: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  stockQuotes: StockQuote[] = [];
  symbols: string[] = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'NVDA', 'PCGU', 'META', 'TSM', 'UNH', 'LLY',
                          'V', 'JNJ', 'XOM', 'WMT', 'JPM', 'MA', 'PG', 'NVO', 'AVGO', 'ORCL', 'HD', 
                        'BHP', 'CVX', 'MRK', 'ASML', 'KO', 'PEP', 'COST', 'ABBV', 'BABA', 'BAC', 'ADBE']; // Add your desired stock symbols here

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchStockQuotes();
  }

  fetchStockQuotes() {
    this.symbols.forEach((symbol) => {
      this.http
        .get(`${API_URL}?symbol=${symbol}&token=${API_TOKEN}`)
        .subscribe((response: any) => {
          const stockQuote: StockQuote = {
            symbol: symbol,
            currentPrice: response.c
          };
          this.stockQuotes.push(stockQuote);
        });
    });
  }
}
