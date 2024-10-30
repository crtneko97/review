import React from 'react';
import './Navbar.scss';
import CartButton from '../buttons/cartbutton/CartButton';
import { Product } from '../../types/products/product';

interface NavbarProps {
  cart: Product[];
}

const Navbar: React.FC<NavbarProps> = ({ cart }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <p>Review</p>
      </div>
      <CartButton />
      <div className="navbar__cart-count">
        {cart.length}
      </div>
    </nav>
  );
};

export default Navbar;
