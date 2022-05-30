import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ checkoutItem }) => {
  const { name, quantity, imageUrl, price } = checkoutItem;
  const { addItemToCart, decrementItem, removeItemFromCart } = useContext(CartContext);

  const incrementHandler = () => {
    return addItemToCart(checkoutItem);
  };

  const decrementHandler = () => {
    return decrementItem(checkoutItem);
  };

  const removeItemHandler = () => {
    return removeItemFromCart(checkoutItem);
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
