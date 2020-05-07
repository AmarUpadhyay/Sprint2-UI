import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8103//cart-management';
  constructor(private http:HttpClient) { }
  getCartItem(userID: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/cart-item/${userID}`);  
  }

  addItemToCart(cartItem : Cart): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'/addItemToCart', cartItem);  
    
  }

  removeItemFromCart(product_id:String): Observable<any>{
    return this.http.delete(`${this.baseUrl}/remove-item/${product_id}`, { responseType: 'text' });
  } 

  registerOrder(order:Order): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'/register-order', order);
  }
  getOrderListByID(userID : number):Observable<any>{
    return this.http.get(`${this.baseUrl}/order-list/${userID}`);
  }

  getOrderDetails(orderID: number):Observable<object>{
    return this.http.get(`${this.baseUrl}/order-details/${orderID}`);
  }
}
