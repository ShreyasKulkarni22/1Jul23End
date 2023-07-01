
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stockItem } from '../Models/stockdetails';


@Component({
  selector: 'app-allstocks',
  templateUrl: './allstocks.component.html',
  styleUrls: ['./allstocks.component.css']
})

export class AllstocksComponent {
 

  items: stockItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

  fetchStocks() {
    const url1 = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=ciekou9r01qmfas4ek7gciekou9r01qmfas4ek80`;
    this.http.get<stockItem[]>(url1).subscribe((data) => {
      this.items = data.slice(0, 10);
    });
  }
}
