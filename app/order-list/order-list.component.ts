import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable,Subject } from "rxjs"; 
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private cartservice:CartService) { }
  ordersArray: any[] = [];  
  dtOptions: DataTables.Settings = {};   
  dtTrigger: Subject<any>= new Subject();  
  orders: Observable<Order[]>;  
  order : Order=new Order();    
  orderlist:any;
  cancleMessage=false;  
  
  ngOnInit(): void {
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
  };
  this.cartservice.getOrderListByID(this.order.userID).subscribe(data =>{  
    this.orders=data;  
    this.dtTrigger.next();  
    })  

}
}
