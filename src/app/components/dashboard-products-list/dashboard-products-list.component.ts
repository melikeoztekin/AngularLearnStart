import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/productsService/products.service';

@Component({
  selector: 'app-dashboard-products-list',
  templateUrl: './dashboard-products-list.component.html',
  styleUrls: ['./dashboard-products-list.component.css'],
})
export class DashboardProductsListComponent implements OnInit {
  title: string = 'Products List Dashboard';
  products!: Product[];
  searchProductNameInput: string | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList(): void {
    this.productsService.getList().subscribe((response) => {
      this.products = response;
    });
  }

  get filteredProducts(): any[] {
    let filteredProducts = this.products;
    if (this.searchProductNameInput) {
      filteredProducts = filteredProducts.filter((p) =>
        p.name
          .toLowerCase()
          .includes(this.searchProductNameInput!.toLowerCase())
      );
    }
    return filteredProducts;
  }

  onSearchProductNameChange(event: any): void {
    this.searchProductNameInput = event.target.value;
  }
}
