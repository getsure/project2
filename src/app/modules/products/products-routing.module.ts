import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from 'src/app/product/product.component';
import { ProductsComponent } from 'src/app/products/products.component';

const routes: Routes = [
  {path:'', component:ProductsComponent}, //locahost:4200/products
  {path:':id', component:ProductComponent}, //locahost:4200/products/id
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
