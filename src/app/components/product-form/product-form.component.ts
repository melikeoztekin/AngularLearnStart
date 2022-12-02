import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/productsService/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  title: string = 'Product Form';

  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private toastrService: ToastrService
  ) {
    // this.productForm = new FormGroup({
    //   name: new FormControl(''),
    // });
  }
  ngOnInit(): void {
    this.createProductForm();
  }

  createProductForm() {
    this.productForm = this.formBuilder.group({
      supplierId: [0, Validators.min(1)],
      categoryId: [0, Validators.min(1)],
      quantityPerUnit: ['', Validators.required],
      unitPrice: [0, Validators.min(0)],
      unitsInStock: [0, Validators.min(0)],
      unitsOnOrder: ['', Validators.min(0)],
      reorderLevel: ['', Validators.min(0)],
      discontinued: [false],
      name: ['', [Validators.required, Validators.minLength(2)]], //# array, form control'ün parametrelerini temsil eder 1.eleman parametre default değer, 2.eleman parametre validator
    });
  }

  onProductFormSubmit(): void {
    if (this.productForm.invalid) {
      this.toastrService.error('Please fill in the form correctly');
      return;
    }
    this.add();
  }

  add() {
    //TODO: product service yardımıyla ekleme
    const request: Product = {
      //# backend'in product add endpoint'ine gönderilecek olan request modeli
      ...this.productForm.value,
      name: this.productForm.value.name.trim(), //# ...this.productForm.value ile gelen 'name' değerinin üzerine tekrar yazıyoruz
    };
    this.productsService.add(request).subscribe((response) => {
      this.toastrService.success('Product added successfully');
      console.log(response);
    });
  }
}
