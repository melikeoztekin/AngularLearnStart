import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterProductByPrice',
})
export class FilterProductByPricePipe implements PipeTransform {
  transform(
    products: Product[],
    price: number,
    operator: 0 | 1 | 2 | 3 | 4 = 0
  ): Product[] {
    if (price <= 0) return products;
    let filteredProducts!: Product[];
    //# filteredProducts => içini doldurma

    switch (operator) {
      case 0:
        filteredProducts = products.filter((p) => p.unitPrice == price);
        break;
      case 1:
        filteredProducts = products.filter((p) => p.unitPrice <= price);
        break;
      case 2:
        filteredProducts = products.filter((p) => p.unitPrice >= price);
        break;
      case 3:
        filteredProducts = products.filter((p) => p.unitPrice > price);
        break;
      case 4:
        filteredProducts = products.filter((p) => p.unitPrice < price);
        break;
    }
    return filteredProducts;
  }
}

// TODO filter-product-by-price
// TODO iki parametre alacak: price ve operator
// TODO gt (greater than) gönderilirse price değeri gelen değerden yüksek ürünler
// TODO operator lt (less than) gönderilirse price değeri gelen değerden düşük ürünler
// TODO gte (greater than or equals to) price
// TODO lte (less than or equals to) price
// TODO eq (equals) => price ==
// TODO ikinci parametre opsiyonel olacak, default olarak eq olacak
