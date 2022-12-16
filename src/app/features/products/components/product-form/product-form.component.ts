import { Supplier } from '../../../suppliers/models/supplier';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/features/categories/models/category';
import { Product } from 'src/app/features/products/models/product';
import { CategoriesService } from 'src/app/features/categories/services/categoriesService/categories.service';
import { ProductsService } from 'src/app/features/products/services/productsService/products.service';
import { SuppliersService } from 'src/app/features/suppliers/services/suppliersService/suppliers.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  title: string = 'Product Form';

  productForm!: FormGroup;
  productToUpdate: Product | null = null;
  categories: Category[] = [];
  suppliers: Supplier[] = [];

  get isEditting(): boolean {
    return this.productToUpdate !== null;
  }

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
    private suppliersService: SuppliersService
  ) {
    // this.productForm = new FormGroup({
    //   name: new FormControl(''),
    // });
  }
  ngOnInit(): void {
    this.createProductForm();
    this.getProductIdFromRoute();
    this.getCategories();
    this.getSuppliers();
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
    if (this.isEditting) this.update();
    else this.add();
  }

  add(): void {
    //TODO: product service yardımıyla ekleme
    const request: Product = {
      //# backend'in product add endpoint'ine gönderilecek olan request modeli
      ...this.productForm.value,
      categoryId: Number(this.productForm.value.categoryId),
      supplierId: Number(this.productForm.value.supplierId),
      name: this.productForm.value.name.trim(), //# ...this.productForm.value ile gelen 'name' değerinin üzerine tekrar yazıyoruz
    };
    this.productsService.add(request).subscribe((response) => {
      this.toastrService.success('Product added successfully');
      this.router.navigate(['/dashboard', 'products', 'edit', response.id]);
    });
  }

  getProductIdFromRoute() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['productId']) this.getProductById(params['productId']);
    });
  }

  getProductById(productId: number) {
    this.productsService.getById(productId).subscribe({
      next: (response) => {
        this.productToUpdate = response;
        this.productForm.patchValue(this.productToUpdate); //# Formun içine productToUpdate modelini doldurur.
      },
      error: () => {
        this.toastrService.error('Product not found');
        this.router.navigate(['/dashboard', 'products']);
      },
    });
  }

  update(): void {
    const request: Product = {
      id: this.productToUpdate!.id,
      categoryId: Number.parseInt(this.productForm.value.categoryId),
      supplierId: Number.parseInt(this.productForm.value.supplierId),
      quantityPerUnit: this.productForm.value.quantityPerUnit,
      unitPrice: Number.parseInt(this.productForm.value.unitPrice),
      unitsInStock: Number.parseInt(this.productForm.value.unitsInStock),
      unitsOnOrder: this.productForm.value.unitsOnOrder,
      reorderLevel: this.productForm.value.reorderLevel,
      discontinued: Boolean(this.productForm.value.discontinued),
      name: this.productForm.value.name.trim(),
    };
    this.productsService.update(request).subscribe((response) => {
      this.productToUpdate = response;
      this.toastrService.success('Product updated successfully');
    });
  }

  onDeleteProduct() {
    if (confirm('Are you sure you want to delete this product?') === false)
      return;
    this.delete();
  }

  delete(): void {
    this.productsService.delete(this.productToUpdate!.id).subscribe(() => {
      this.toastrService.success('Product deleted successfully');
      this.router.navigate(['/dashboard', 'products']);
    });
  }

  getCategories(): void {
    this.categoriesService.getList().subscribe((response: Category[]) => {
      this.categories = response;
    });
  }

  getSuppliers(): void {
    this.suppliersService.getList().subscribe((response: Supplier[]) => {
      this.suppliers = response;
    });
  }
}
