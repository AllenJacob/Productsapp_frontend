import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService }  from '../product.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  title:String = "Product-List";
  products:ProductModel[];

  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = false;
  pid=this.productService.pid;
  editProduct=<any>[]
  _id:number
  
  

  constructor(private productService: ProductService,private router:Router) { 
}
toggleImage(){
  this.showImage = !this.showImage;
}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }
  delItem(id){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
    })
    alert("successfully deleted")
    this.router.navigate(['/'])
  }
  editItem(id){
    this.productService.editProduct(id).subscribe(data=>{

      console.log(data);
    })
  }
  edit(id){
    this.productService.pid=id;
    this.router.navigate(['edit'])
    console.log(this.products)
    this.editProduct=this.products.find(p=> p._id === id);
    console.log(this.editProduct)
    this.productService.editItem=this.editProduct;
  }
  
    
    
      
      

  

}
