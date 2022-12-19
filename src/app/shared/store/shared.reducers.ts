import { cartReducer } from './cart/cart.reducer';

//# Store'da değer güncvelleyen tüm reducerları tanımla

export const sharedReducers = {
  cart: cartReducer,
};
