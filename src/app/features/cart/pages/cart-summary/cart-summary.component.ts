import { CartItem } from './../../models/cart-item';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cartService/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscribeToCartService();
  }

  subscribeToCartService() {
    this.cartService.cartItemModel$.subscribe((response) => {
      this.cartItems = response;
    });
  }

  removeItem(cartItem: CartItem) {
    if (cartItem.id) this.cartService.removeState(cartItem.id);
  }
}
