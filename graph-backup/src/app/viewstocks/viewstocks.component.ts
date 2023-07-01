import { Component, OnInit } from '@angular/core';
import { stock } from '../Models/stock';
import { HttpClient } from '@angular/common/http';
import { StockService } from '../stock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewstocks',
  templateUrl: './viewstocks.component.html',
  styleUrls: ['./viewstocks.component.css']
})
export class ViewstocksComponent implements OnInit{
    stocks:Array<stock>
    
    constructor(private stockservice:StockService,private route:ActivatedRoute){}
    ngOnInit(): void {
      

    }
    
    getStocksbyusername(id:number){
      this.stockservice.getStocksbyusername(id).subscribe(res=>{
        this.stocks=res
      })
    }

    deleteStock(id:number){
      this.stockservice.deleteStockById(id).subscribe(res=>{
          console.log("stock deleted")
          this.getStocksbyusername(id)
      })
    }
}
