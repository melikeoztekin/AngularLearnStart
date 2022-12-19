import { CartItem } from './../../../features/cart/models/cart-item';
//# actions'ta tanımlanmış fonksiyonların içerisinin doldurulduğu kısım

import { createReducer, on } from '@ngrx/store';
import { addItemToCart, removeItemFromCart } from './cart.actions';

//# initial state => hiç bir işlem yapılmadığında store'da değerin başlangıç degeri
//# =[]

const initialState: CartItem[] = [];

export const cartReducer = createReducer(
  [],
  on(addItemToCart, (state, action) => {
    //# store'daki addItemtoCart çağırıldığında ne istersen yap
    return state;
  }),
  on(removeItemFromCart, (state, action) => {
    return state;
  })
);
