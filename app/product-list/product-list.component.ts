import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable,Subject } from "rxjs"; 
import { Product } from '../product';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productservice:ProductService) { }

  productsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};   
  dtTrigger: Subject<any>= new Subject();  
  
  products: Observable<Product[]>;  
  product : Product=new Product();  
  deleteMessage=false;  
  productlist:any;  
  isupdated = false;      

  ngOnInit(): void {
    this.isupdated=false;
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
  };
  this.productservice.getAllProduct().subscribe(data =>{  
    this.products =data;  
    this.dtTrigger.next();  
    })  

  }

  deleteProduct(product_id: String) {  
    this.productservice.deleteProduct(product_id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.productservice.getAllProduct().subscribe(data =>{  
            this.products =data  
            })  
        },  
        error => console.log(error));  
  }  
  
  editProduct(product_id: String){  
    this.productservice.getProduct(product_id)  
      .subscribe(  
        data => {  
          this.productlist=data             
        },  
        error => console.log(error));  
  }  

  productupdateform=new FormGroup({  
    product_id:new FormControl(),  
    productName:new FormControl('',[Validators.required]),  
    price:new FormControl('',[Validators.required]),
    colour:new FormControl('',[Validators.required]),
    dimension:new FormControl('',[Validators.required]),
    quantity:new FormControl('',[Validators.required]),
    specifications:new FormControl('',[Validators.required]),
    manufacturer:new FormControl('',[Validators.required]),
    productCategory:new FormControl('',[Validators.required])
  }); 
  
  updateProduct(updateProd){  
    this.product=new Product();     
    this.product.product_id=this.ProductID.value;  
    this.product.productName=this.ProductName.value;  
    this.product.colour=this.Colour.value;  
    this.product.dimension=this.Dimension.value;
    this.product.manufacturer=this.Manufacturer.value;
    this.product.price=this.Price.value;
    this.product.productCategory=this.ProductCategory.value;
    this.product.quantity=this.Quantity.value;
    this.product.specifications=this.Specifications.value;
    console.log(this.ProductCategory.value);  
     
  
   this.productservice.editProduct(this.product.product_id,this.product).subscribe(  
    data => {       
      this.isupdated=true;  
      this.productservice.getAllProduct().subscribe(data =>{  
        this.products =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  

  get ProductID(){  
    return this.productupdateform.get('product_id');  
  }  
  
  get ProductName(){  
    return this.productupdateform.get('productName');  
  }  
  
  get Colour(){  
    return this.productupdateform.get('colour');  
  }  

  get Dimension(){  
    return this.productupdateform.get('dimension');  
  }  

  get Manufacturer(){  
    return this.productupdateform.get('manufacturer');  
  }  

  get Price(){  
    return this.productupdateform.get('price');  
  }  


  get ProductCategory(){  
    return this.productupdateform.get('productCategory');  
  }  

  get Quantity(){  
    return this.productupdateform.get('quantity');  
  }  

  get Specifications(){  
    return this.productupdateform.get('specifications');  
  }  
}