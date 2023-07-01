// // import { Component, OnInit } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Chart, ChartDataset, ChartOptions } from 'chart.js';
// // import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';

// // @Component({
// //   selector: 'app-chart',
// //   templateUrl: './chart.component.html',
// //   styleUrls: ['./chart.component.css']
// // })
// // export class ChartComponent implements OnInit {
// //   public chartData: any[] = [];
// //   public chartOptions: ChartOptions = {
// //     responsive: true,
// //     scales: {
// //       x: {
// //         display: true
// //       },
// //       y: {
// //         display: true
// //       }
// //     },
// //     plugins: {
// //       legend: {
// //         display: false
// //       }
// //     }
// //   };

// //   constructor(private httpClient: HttpClient) { }

// //   ngOnInit() {
// //     Chart.register(CandlestickController, CandlestickElement);
// //     this.fetchPriceData();
// //   }

// //   fetchPriceData() {
// //     const apiUrl = 'https://finnhub.io/api/v1/crypto/candle';
// //     const symbol = 'BINANCE:BTCUSDT';
// //     const resolution = 'D';
// //     const from = '1572651390';
// //     const to = '1575243390';
// //     const token = 'cc676uaad3i9rj8tb1s0';

// //     const url = `${apiUrl}?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${token}`;

// //     this.httpClient.get<any>(url).subscribe((response: any) => {
// //       const prices = response.c;
// //       const timestamps = response.t;

// //       const data = [];
// //       for (let i = 0; i < prices.length; i++) {
// //         data.push({
// //           t: new Date(timestamps[i] * 1000),
// //           o: prices[i],
// //           h: prices[i],
// //           l: prices[i],
// //           c: prices[i],
// //         });
// //       }

// //       this.chartData = [{
// //         data: data,
// //         borderColor: 'rgba(255, 0, 0, 1)',
// //         borderWidth: 1,
// //         type: 'candlestick'
// //       }];
// //     });
// //   }
// // }


// import { Component, OnInit } from '@angular/core';
// import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.css']
// })
// export class ChartComponent implements OnInit {
//   public chartOptions: ChartOptions = {
//     responsive: true,
//     scales: {
//       x: {
//         display: true,
//         type: 'time',
//         time: {
//           unit: 'day',
//         },
//       },
//       y: {
//         display: true,
//       },
//     },
//   };

//   public chartData: ChartDataset[] = [
//     {
//       datasets: ChartDataset[] = [
//         {
//           label: 'Bitcoin Price',
//           data: this.prices,
//           fill: false,
//           borderColor: 'rgba(75,192,192,1)',
//           tension: 0.2,
//           type: 'line', // Specify the type as 'line'
//         },
//       ];
      
//     },
//   ];

//   public chartLabels: string[] = [
//     new Date(1572651390 * 1000).toISOString(),
//     new Date(1572737790 * 1000).toISOString(),
//     // Add more timestamps here
//   ];

//   public chartType: ChartType = 'candlestick';

//   public chartLegend = true;
//   public chartPlugins = [];

//   constructor() { }

//   ngOnInit(): void {
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
  })
  export class ChartComponent {
    symbol?: string;
    chartUrl?: SafeResourceUrl;
  
    constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  
    getChart() {
      const unsafeUrl = `https://widget.finnhub.io/widgets/stocks/chart?symbol=${this.symbol}&watermarkColor=%231db954&backgroundColor=%23222222&textColor=white`;
      this.chartUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
    }
  }
  
