import { Product } from 'src/app/models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProductByPrice',
})
export class FilterProductByPricePipe implements PipeTransform {
  transform(products: Product[], price: number, operator?: string): Product[] {
    if (operator == 'gt') {
      let filterProductByPrice = products.filter((p) => p.unitPrice > price);
      return filterProductByPrice;
    }
    if (operator == 'lt') {
      let filterProductByPrice = products.filter((p) => p.unitPrice < price);
      return filterProductByPrice;
    }
    if (operator == 'gte') {
      let filterProductByPrice = products.filter((p) => p.unitPrice >= price);
      return filterProductByPrice;
    }
    if (operator == 'lte') {
      let filterProductByPrice = products.filter((p) => p.unitPrice <= price);
      return filterProductByPrice;
    } else operator == '';
    let filterProductByPrice = products.filter((p) => p.unitPrice <= price);
    return filterProductByPrice;
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
