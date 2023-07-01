import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stock } from './Models/stock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  

  baseUrl="https://localhost:7200/"
  constructor(private http:HttpClient) { }

  getStocksbyusername(id:number):Observable<Array<stock>>{
    return this.http.get<Array<stock>>(this.baseUrl+`api/Stock/${id}`)
  }

  deleteStockById(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+`api/Stock/${id}`)
  }
}
