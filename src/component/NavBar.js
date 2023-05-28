import React from "react";
import { Link } from "react-router-dom"; 
import {FiShoppingCart}from 'react-icons/fi'


const NavBar = () => {
  const cart= JSON.parse(localStorage.getItem('cart'))|| [];
  return (
    <nav className="nav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <li>Product</li>
        <Link to={"/ItemCart"}><li><FiShoppingCart/>Cart {cart.length}</li></Link>
      </ul>
    </nav>
  );
};

export default NavBar;
