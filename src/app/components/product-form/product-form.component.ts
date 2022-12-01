import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  title: string = 'Product Form';

  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // this.productForm = new FormGroup({
    //   name: new FormControl(''),
    // });
  }
  ngOnInit(): void {
    this.createProductForm();
  }

  createProductForm() {
    this.productForm = this.formBuilder.group({
      name: [''],
      categoryId: [''],
    });
  }
}
