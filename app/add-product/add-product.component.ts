import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productservice:ProductService) { }

  product: Product = new Product();
  submitted= false;

  ngOnInit(): void {
    this.submitted=false;
  }

  productsaveform=new FormGroup({  
    product_id:new FormControl('', [Validators.required , Validators.minLength(3),Validators.pattern('[a-zA-Z0-9 ]*')]  ),  
    productName:new FormControl('',[Validators.required]),  
    price:new FormControl('',[Validators.required]),
    colour:new FormControl('',[Validators.required]),
    dimension:new FormControl('',[Validators.required]),
    quantity:new FormControl('',[Validators.required]),
    specifications:new FormControl('',[Validators.required]),
    manufacturer:new FormControl('',[Validators.required]),
    productCategory:new FormControl('',[Validators.required])
  });  

  saveProduct(saveProduct){  
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
    this.submitted = true;  
    this.save();  
  }  
  save() {  
    this.productservice.addProduct(this.product)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.product = new Product();  
  }  
  
  get ProductID(){  
    return this.productsaveform.get('product_id');  
  }  
  
  get ProductName(){  
    return this.productsaveform.get('productName');  
  }  
  
  get Colour(){  
    return this.productsaveform.get('colour');  
  }  

  get Dimension(){  
    return this.productsaveform.get('dimension');  
  }  

  get Manufacturer(){  
    return this.productsaveform.get('manufacturer');  
  }  

  get Price(){  
    return this.productsaveform.get('price');  
  }  


  get ProductCategory(){  
    return this.productsaveform.get('productCategory');  
  }  

  get Quantity(){  
    return this.productsaveform.get('quantity');  
  }  

  get Specifications(){  
    return this.productsaveform.get('specifications');  
  }  
  
  addProductForm(){  
    this.submitted=false;  
    this.productsaveform.reset();  
  }  
}  


