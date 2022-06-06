import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';
import { addCartItem, decrementCartItem, removeCartItem } from './cart.utils';

const setCartItems = (items) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, items);

export const setIsCartIsOpen = (isCartOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const decrementItem = (cartItems, productToDecrement) => {
  const newCartItems = decrementCartItem(cartItems, productToDecrement);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};
