import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, decrementItem, removeItemFromCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selectors';
import './checkout-item.styles.scss';

const CheckoutItem = ({ checkoutItem }) => {
  const dispatch = useDispatch();
  const { name, quantity, imageUrl, price } = checkoutItem;
  const cartItems = useSelector(selectCartItems);

  const incrementHandler = () => {
    return dispatch(addItemToCart(cartItems, checkoutItem));
  };

  const decrementHandler = () => {
    return dispatch(decrementItem(cartItems, checkoutItem));
  };

  const removeItemHandler = () => {
    return dispatch(removeItemFromCart(cartItems, checkoutItem));
  };

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={decrementHandler}>
          &#10094;
        </div>
        <span className='value'> {quantity}</span>
        <div className='arrow' onClick={incrementHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
