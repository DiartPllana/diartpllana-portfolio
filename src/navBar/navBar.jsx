import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><p>Diart Pllana</p></Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div className="navbar-login">
        <Link to="/Login">Login</Link>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
