import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartButton.scss';

const CartButton: React.FC = () => {
  return (
    <div className="cart-button">
      <a href='/cart'>
      <FaShoppingCart className="cart-button__icon" />
      </a>
    </div>
  );
};

export default CartButton;
