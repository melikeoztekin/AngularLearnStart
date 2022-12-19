import { CartItem } from './../../../features/cart/models/cart-item';
//# state'i değiştirecek fonksiyonların tanımlandığı nokta..

import { createAction, props } from '@ngrx/store';

//# export => state'i değiştirecek aksiyonu uygulamanın herhangi bir yer yerinden çağırabilirisin

//# createAction 1. parametre (string)="[Cart] Add Item to Cart"
// ! unique olmalı
export const addItemToCart = createAction(
  '[Cart] Add Item To Cart',
  props<{ cartItem: CartItem }>()
);

/* addItemTocart(cartItem){} */

export const removeItemFromCart = createAction(
  '[Cart] Remove Item To Cart',
  props<{ id: number }>
);
/* removeItemFromCart(id:number) */
