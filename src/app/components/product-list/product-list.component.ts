import { ActivatedRoute, Router } from '@angular/router';
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

  selectedProductCategoryId: number | null = null;
  searchProductNameInput: string | null = null;
  get filteredProducts(): any[] {
    let filteredProducts = this.products;
    if (this.selectedProductCategoryId) {
      filteredProducts = filteredProducts.filter(
        (p) => p.categoryId === this.selectedProductCategoryId
      );
    }
    if (this.searchProductNameInput) {
      filteredProducts = filteredProducts.filter((p) =>
        p.name
          .toLowerCase()
          .includes(this.searchProductNameInput?.toLowerCase())
      );
    }
    return filteredProducts;
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getCategoryIdFromRoute();
    this.getSearchProductNameFromRoute();
  }

  getCategoryIdFromRoute(): void {
    //# route params'ları almak adına activatedRoute.params kullanılır
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.selectedProductCategoryId = parseInt(params['categoryId']);
      } else {
        this.selectedProductCategoryId = null;
      }
    });
  }

  getSearchProductNameFromRoute(): void {
    //# query params'ları almak adına activatedRoute.queryParams kullanılır
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams['searchProductName']) {
        this.searchProductNameInput = queryParams['searchProductName'];
      } else {
        this.searchProductNameInput = '';
      }
    });
  }

  isProductCardShow(product: any): boolean {
    return product.discontinued == false;
  }

  onSearchProductNameChange(event: any): void {
    this.searchProductNameInput = event.target.value;
    const queryParams: any = {};
    if (this.searchProductNameInput !== '') {
      queryParams['searchProductName'] = this.searchProductNameInput;
      this.router.navigate([], {
        queryParams: queryParams,
      });
    }
  }
}
