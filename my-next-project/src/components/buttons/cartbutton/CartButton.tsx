'use client';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartButton.scss';

interface CartButtonProps {
  cartCount: number;
}

const CartButton: React.FC<CartButtonProps> = ({ cartCount }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300); // Match duration of the CSS animation
    return () => clearTimeout(timer);
  }, [cartCount]);

  return (
    <div className="cart-button">
      <a href='/cart'>
        <FaShoppingCart className="cart-button__icon" />
        {cartCount > 0 && (
          <span className={`cart-button__count ${animate ? 'cart-count-update' : ''}`}>
            {cartCount}
          </span>
        )}
      </a>
    </div>
  );
};

export default CartButton;
