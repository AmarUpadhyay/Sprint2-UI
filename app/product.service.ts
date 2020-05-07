import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class ProductService {  
  
  private baseUrl = 'http://localhost:8103//product-management';  
  
  constructor(private http:HttpClient) { }  
  
  getAllProduct(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/product-list');  
  }  
  
  addProduct(product: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/add-product', product);  
  }  
  
  deleteProduct(product_id: String): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/delete-product/${product_id}`, { responseType: 'text' });  
  }  
  
  
  editProduct(product_id: String, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/edit-product/${product_id}`, value);  
  } 
  
  getProduct(product_id: String): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/product/${product_id}`);  
  }  
    
}  