import { Product } from 'src/app/models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(products: Product[], name: string): Product[] {
    let filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    return filteredProducts;
  }
}
