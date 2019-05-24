import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(res => {
      this.products = res;
    })
  }

  changeRoute() {
    this.router.navigateByUrl('/product/form');
  }

  editProduct(){
    this.router.navigateByUrl('/product/form');
  }

  deleteProduct(id){
    this.productService.deleteIdProduct(id).subscribe(res => {
      this.getProducts();
    })
  }

  // deleteProduct(){
  //   this.router.navigateByUrl('/product/form');
  // }
}
