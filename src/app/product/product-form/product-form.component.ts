import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ProductService } from 'src/app/services/products.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  formGroup: FormGroup;
  id: number;
  product: any ;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.id);
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.fb.group({
      name: [''],
      createdAt: [''],
      image: ['']
    });

    if (this.id > 0) {
      this.productService.getIdProduct(this.id).subscribe(res => {
        this.product = res;
        this.formGroup.setValue({
          name: this.product.name,
          image: this.product.image,
          createdAt: this.product.createdAt
        })
      })
    }
  }

  onSubmit() {
    if (this.id == 0){
      this.productService.postProduct(this.formGroup.value).subscribe(res => {
        this.location.back();
      })
    } else{
      this.productService.putIdProduct(this.id, this.formGroup.value).subscribe (res =>{
        this.location.back();
      })
    }
    
  }
}
