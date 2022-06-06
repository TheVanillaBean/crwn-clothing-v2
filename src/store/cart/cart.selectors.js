import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector([selectCartReducer], (cartSlice) => {
  return cartSlice.cartItems;
});

export const selectIsCartOpen = createSelector([selectCartReducer], (cartSlice) => {
  return cartSlice.isCartOpen;
});

export const selectCartCount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);
});

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);
});
