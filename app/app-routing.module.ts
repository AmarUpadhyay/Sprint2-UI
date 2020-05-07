import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { OrderListComponent } from './order-list/order-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },  
  { path: 'product-list', component: ProductListComponent },  
  { path: 'add-product', component: AddProductComponent }, 
  {path: 'home',component: HomeComponent} ,
  {path: 'view-cart',component: ViewCartComponent},
  {path: 'order-list', component: OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
