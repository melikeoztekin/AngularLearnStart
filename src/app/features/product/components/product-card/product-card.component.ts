import { ToastrService } from 'ngx-toastr';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from 'src/app/features/product/model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Output() onAddToCartClick = new EventEmitter<Product>();
  @Output() onAddToFavClick = new EventEmitter<Product>();
  dateNow: Date = new Date();

  constructor(private toastr: ToastrService) {}
  ngOnInit(): void {}

  addToCartClick() {
    //# Parent componenti uyar
    //# Event emitter'i triggerla(emit et)
    this.onAddToCartClick.emit(this.product);
    if (this.onAddToCartClick) {
      this.toastr.success(this.product.name + ' sepete eklendi');
    }
  }
  addToFavClick() {
    this.onAddToFavClick.emit(this.product);
    if (this.onAddToFavClick) {
      this.toastr.show(this.product.name + ' favorilere eklendi', '🚀');
    }
  }
}
