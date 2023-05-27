import React from "react";
import { Link } from "react-router-dom"; 
import {FiShoppingCart}from 'react-icons/fi'

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <li>Product</li>
        <li><FiShoppingCart/>Cart</li>
      </ul>
    </nav>
  );
};

export default NavBar;
