import React from 'react';
import './Navbar.scss';
import CartButton from '../buttons/cartbutton/CartButton';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <p>Review</p>
      </div>
      <CartButton />
    </nav>
  );
};

export default Navbar;
