import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any = []

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(res => this.products = res)
  }

}
