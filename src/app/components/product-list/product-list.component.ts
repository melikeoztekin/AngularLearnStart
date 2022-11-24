import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title: string = 'Product List';
  productCardClass: string = 'card col-3 ms-3 mb-3';
  products: any[] = [
    {
      id: 1,
      name: 'Chai',
      categoryId: 1,
      unitPrice: 18,
      unitsInStock: 39,
      quantityPerUnit: '10 boxes x 20 bags',
      discontinued: false,
    },
    {
      id: 2,
      name: 'Chang',
      categoryId: 1,
      unitPrice: 19,
      unitsInStock: 0,
      quantityPerUnit: '24 - 12 oz bottles',
      discontinued: true,
    },
    {
      id: 3,
      name: 'Aniseed Syrup',
      categoryId: 3,
      unitPrice: 10,
      unitsInStock: 13,
      quantityPerUnit: '12 - 550 ml bottles',
      discontinued: false,
    },
    {
      id: 4,
      name: "Chef Anton's Cajun Seasoning",
      categoryId: 3,
      unitPrice: 22,
      unitsInStock: 53,
      quantityPerUnit: '48 - 6 oz jars',
      discontinued: false,
    },
    {
      id: 5,
      name: "Chef Anton's Gumbo Mix",
      categoryId: 2,
      unitPrice: 21.35,
      unitsInStock: 0,
      quantityPerUnit: '36 boxes',
      discontinued: false,
    },
    {
      id: 6,
      name: "Grandma's Boysenberry Spread",
      categoryId: 2,
      unitPrice: 25,
      unitsInStock: 120,
      quantityPerUnit: '12 - 8 oz jars',
      discontinued: false,
    },
  ];

  public selectedProductCategoryId: number | null = null;
  get filteredProducts(): any[] {
    if (this.selectedProductCategoryId) {
      return this.products.filter(
        (p) => p.categoryId === this.selectedProductCategoryId
      );
    }
    return this.products;
  }

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getSelectedCategoryIdFromRoute();
  }

  getSelectedCategoryIdFromRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.selectedProductCategoryId = parseInt(params['categoryId']);
      } else {
        this.selectedProductCategoryId = null;
      }
    });
  }

  isProductCardShow(product: any): boolean {
    return product.discontinued == false;
  }
}
