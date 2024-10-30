import React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {


    //Setup make component for cart later wip
  return (
    <nav className="navbar">
      <div className="navbar__logo"><p>Review</p></div>
      <div className="navbar__cart">🛒</div>
    </nav>
  );
};

export default Navbar;
