import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartButton.scss';

const CartButton: React.FC = () => {
  return (
    <div className="cart-button">
      <FaShoppingCart className="cart-button__icon" />
    </div>
  );
};

export default CartButton;
