import { Pagination } from './../../models/pagination';
import { GetListOptionsType } from './../../models/get-list-options';
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
  // selectedProductCategoryId: number | null = null;
  searchProductNameInput: string | null = null;
  pagination: Pagination = {
    page: 1,
    pageSize: 12,
  };
  lastPage?: number;
  filters: any = {};
  isLoading: boolean = false;

  //# Client Side Filter
  /* get filteredProducts(): Product[] {
    let filteredProducts = this.products;
    if (this.selectedProductCategoryId) {
      filteredProducts = filteredProducts.filter(
        (p) => p.categoryId === this.selectedProductCategoryId
      );
    }
    if (this.searchProductNameInput) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.name
            .toLowerCase()
            .includes(this.searchProductNameInput!.toLowerCase()) //#Non-null assertion operator :Sol tarafın null veya undefined olmadığı garanti edilir.
      );
    }
    return filteredProducts;
  } */

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
  }

  getListProducts(options?: GetListOptionsType): void {
    this.productsService.getList(options).subscribe((response) => {
      //# setTimeout kullanmamızın sebebi localde çalıştığımız için veriler çok hızlı yüklenecektir. Spinner çalışma seklini görüntülemek için kullandık 1.5sn içinde ürünler görüntülenecektir.
      setTimeout(() => {
        //# Etiya projelerinde pagination bilgileri body içerisinde gelmektedir. Direkt atamayı gerçekleştirebiliriz.
        // this.pagination.page = response.page;
        // this.pagination.pageSize = response.pageSize;
        // this.lastPage = response.lastPage;
        //# Json-server projelerinde pagination bilgileri header içerisinde gelmektedir. Header üzerinden atama yapmamız gerekmektedir. Bu yöntem pek kullanılmayacağı için, bu şekilde geçici bir çözüm ekleyebiliriz.
        if (response.length < this.pagination.pageSize) {
          if (response.length === 0 && this.pagination.page > 1)
            this.pagination.page = this.pagination.page - 1;
          this.lastPage = this.pagination.page;
        }
        this.products = response;
        this.isLoading = true;
      }, 1500);
    });
  }

  getCategoryIdFromRoute(): void {
    this.isLoading = true;
    //# route params'ları almak adına activatedRoute.params kullanılır
    this.activatedRoute.params.subscribe((params) => {
      this.resetPagination();
      if (params['categoryId']) {
        // this.selectedProductCategoryId = parseInt(params['categoryId']);
        this.filters['categoryId'] = parseInt(params['categoryId']);
      } else {
        // this.selectedProductCategoryId = null;
        // filters={categoryId:1}
        if (this.filters['categoryId']) delete this.filters['categoryId']; // filters={}
        //# delete operatörü, object içerisindeki bir property'i silmek için kullanılır.
      }
      this.isLoading = false;
      if (this.isLoading === false) {
        this.getListProducts({
          pagination: this.pagination,
          filters: this.filters,
        });
      }
    });
  }

  getSearchProductNameFromRoute(): void {
    this.isLoading = true;
    //# query params'ları almak adına activatedRoute.queryParams kullanılır
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      // && this.searchProductNameInput==null
      if (
        queryParams['searchProductName'] &&
        queryParams['searchProductName'] !== this.searchProductNameInput
      ) {
        this.searchProductNameInput = queryParams['searchProductName'];
        this.filters['name_like'] = this.searchProductNameInput;
      }
      //# Defensive Programming
      if (
        !queryParams['searchProductName'] &&
        this.searchProductNameInput !== null
      ) {
        this.searchProductNameInput = null;
        delete this.filters['name_like'];
      }
      this.isLoading = false;
      if (this.isLoading == false) {
        this.getListProducts({
          pagination: this.pagination,
          filters: this.filters,
        });
      }
    });
  }

  isProductCardShow(product: Product): boolean {
    return product.discontinued == false;
  }

  onSearchProductNameChange(event: any): void {
    // this.searchProductNameInput = event.target.value; //# ngModelimiz kendisi bu işlemi zaten gerçekleştirecek
    let queryParams: any = {};
    console.log(this.filters);

    if (this.searchProductNameInput !== '') {
      queryParams['searchProductName'] = this.searchProductNameInput;
      this.router.navigate([], {
        queryParams: queryParams,
      });
    }

    this.filters['name_like'] = this.searchProductNameInput;
    this.resetPagination();
    this.getListProducts({
      pagination: this.pagination,
      filters: this.filters,
    });
  }

  changePage(page: number): void {
    this.pagination.page = page;
    this.getListProducts({
      pagination: this.pagination,
      filters: this.filters,
    });
  }

  resetPagination(): void {
    this.pagination.page = 1;
    this.lastPage = undefined;
  }
}
