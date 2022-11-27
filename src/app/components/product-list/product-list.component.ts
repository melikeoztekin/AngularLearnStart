import { ProductsService } from './../../services/productsService/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title: string = 'Product List';
  productCardClass: string = 'card col-3 ms-3 mb-3';
  products!: Product[];
  selectedProductCategoryId: number | null = 0;
  searchProductNameInput: string | null = null;
  isLoading: boolean = false;

  get productsListItems(): any[] {
    return [
      ...this.products.map((p) => {
        return {
          productName: p.name,
          categoryId: p.categoryId,
          discontinued: p.discontinued,
        };
      }),
    ];
  }

  get filteredProducts(): any[] {
    let filteredProducts = this.productsListItems;
    if (this.selectedProductCategoryId) {
      filteredProducts = filteredProducts.filter(
        (p) => p.categoryId === this.selectedProductCategoryId
      );
    }
    if (this.searchProductNameInput) {
      filteredProducts = filteredProducts.filter((p) =>
        p.productName
          .toLowerCase()
          .includes(this.searchProductNameInput?.toLowerCase())
      );
    }
    return filteredProducts;
  }

  //# ActivatedRoute mevcut route bilgisini almak için kullanılır.
  //# Router yeni route bilgisi oluşturmak için kullanılır.
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getCategoryIdFromRoute();
    this.getSearchProductNameFromRoute();
    this.getListProducts();
  }

  getListProducts() {
    this.productsService.getList().subscribe((response) => {
      //# setTimeout kullanmamızın sebebi localde çalıştığımız için veriler çok hızlı yüklenecektir. Spinner çalışma seklini görüntülemek için kullandık 1.5sn içinde ürünler görüntülenecektir.
      setTimeout(() => {
        this.products = response;
        this.isLoading = true;
      }, 1500);
    });
  }

  getCategoryIdFromRoute(): void {
    //# route params'ları almak adına activatedRoute.params kullanılır
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);

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
      console.log(queryParams);

      // && this.searchProductNameInput==null
      if (
        queryParams['searchProductName'] &&
        queryParams['searchProductName'] !== this.searchProductNameInput
      ) {
        this.searchProductNameInput = queryParams['searchProductName'];
      }
      //# Defensive Programing
      if (
        !queryParams['searchProductName'] &&
        this.searchProductNameInput !== null
      ) {
        this.searchProductNameInput = null;
      }
    });
  }

  isProductCardShow(product: any): boolean {
    return product.discontinued == false;
  }

  onSearchProductNameChange(event: any): void {
    // this.searchProductNameInput = event.target.value; //# ngModelimiz kendisi bu işlemi zaten gerçekleştirecek
    const queryParams: any = {};
    if (this.searchProductNameInput !== '') {
      queryParams['searchProductName'] = this.searchProductNameInput;
      this.router.navigate([], {
        queryParams: queryParams,
      });
    }
  }
}
