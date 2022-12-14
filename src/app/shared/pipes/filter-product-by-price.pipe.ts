import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../features/product/model/product';

@Pipe({
  name: 'filterProductByPrice',
})
export class FilterProductByPricePipe implements PipeTransform {
  transform(
    products: Product[],
    price: number,
    operator: 'gt' | 'lt' | 'gte' | 'lte' | 'eq' = 'eq'
  ): Product[] {
    if (price <= 0) return products;
    let filteredProducts: Product[] = products;
    //# filteredProducts => içini doldurma

    switch (operator) {
      case 'eq':
        filteredProducts = products.filter((p) => p.unitPrice == price);
        break;
      case 'gt':
        filteredProducts = products.filter((p) => p.unitPrice > price);
        break;
      case 'lt':
        filteredProducts = products.filter((p) => p.unitPrice < price);
        break;
      case 'lte':
        filteredProducts = products.filter((p) => p.unitPrice <= price);
        break;
      case 'gte':
        filteredProducts = products.filter((p) => p.unitPrice >= price);
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
