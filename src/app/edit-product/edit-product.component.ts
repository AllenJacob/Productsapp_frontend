import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService }  from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  title:String="Edit Product";
  pid="";
  

  products:ProductModel;
  constructor(private productService:ProductService,private router:Router){
    
  }
  productItem=new ProductModel(null,null,null,null,null,null,null,null,null)
  

  ngOnInit(): void {

  }
  updateProduct(){
    console.log(this.productItem)
    this.productService.update(this.productItem);
    console.log("called")
    alert("Success data is updated")
    this.router.navigate(['/'])
  }

}

