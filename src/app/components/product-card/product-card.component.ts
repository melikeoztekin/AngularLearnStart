import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() onAddToCartClick = new EventEmitter<Product>();
  dateNow: Date = new Date();

  addToCartClick() {
    //# Parent componenti uyar
    //# Event emitter'i triggerla(emit et)
    this.onAddToCartClick.emit(this.product);
  }
}
