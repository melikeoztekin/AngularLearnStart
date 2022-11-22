import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
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
      categoryId: 2,
      unitPrice: 10,
      unitsInStock: 13,
      quantityPerUnit: '12 - 550 ml bottles',
      discontinued: false,
    },
  ];

  isProductCardShow(product: any): boolean {
    return product.discontinued == false;
  }
}
