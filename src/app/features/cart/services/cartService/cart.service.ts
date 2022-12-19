import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CartItem } from './../../models/cart-item';
import { Injectable } from '@angular/core';
import { SharedState } from 'src/app/shared/store/shared.reducers';
import { Store } from '@ngrx/store';
import {
  addItemToCart,
  removeItemFromCart,
} from 'src/app/shared/store/cart/cart.actions';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemModel$: Observable<CartItem[]> = this.store.select(
    (state) => state.cart
  );

  //# initial value => başlangıç değeri = []
  cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  constructor(private store: Store<SharedState>) {}

  // initial value yok!!
  cartItems2: Subject<CartItem[]> = new Subject<CartItem[]>();

  add(cartItem: CartItem) {
    //# Sepeti kontrol et, aynı üründen varsa adeti gelen adet kadar arttır.
    //# Aynı üründen yoksa direkt ekle.
    //# id atama işlemi
    let sameProduct = this.cartItems.value.find(
      (i) => i.product.id == cartItem.product.id
    );
    if (sameProduct) {
      sameProduct.quantity += cartItem.quantity;
      //# yeni değerler ile cartItems'i değiştir..
      this.cartItems.next([
        ...this.cartItems.value.filter(
          (i) => i.product.id != cartItem.product.id
        ),
        sameProduct,
      ]);
      return;
    }
    //# Gelen yeni ürünü direkt sepete ekle..
    cartItem.id = Math.floor(Math.random() * 9999999);
    this.cartItems.next([...this.cartItems.value, cartItem]);
  }

  remove(id: number) {
    //# Gelen id değeri ile cartItem ara, bulursan sil..
    //  this.cartItems.next(this.cartItems.value.filter((i) => i.id != id));
    //# this.cartItems.value sadece ilgili değişkenin anlık değerini okumak için kullanılmal
    this.store.dispatch(removeItemFromCart({ id })); //# ngrx ile
  }

  addState(cartItem: CartItem) {
    // action'ı çağırmak için => dispatch
    this.store.dispatch(addItemToCart(cartItem));
  }

  removeState(id: number) {
    this.store.dispatch(removeItemFromCart({ id }));
  }
}
