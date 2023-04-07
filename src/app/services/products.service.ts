import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url:string = "https://fakestoreapi.com/products";
  constructor(private httpClient:HttpClient){ }

  getProduct(id:number){
    return this.httpClient.get(this.url+'/'+id)
  }

  getAllProducts(){
    return this.httpClient.get(this.url)
  }
  
}
