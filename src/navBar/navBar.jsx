import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToSection }) => {
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
        <Link to="#homeSection" onClick={() => scrollToSection('homeSection')}>Home</Link>
        <Link to="#aboutMeSection" onClick={() => scrollToSection('aboutMeSection')}>About</Link>
        <Link to="#myResume" onClick={() => scrollToSection('myResume')}>Resume</Link>
        <Link to="#myProject" onClick={() => scrollToSection('myProject')}>Projects</Link>
        <Link to="#contactMe" onClick={() => scrollToSection('contactMe')}>Contact Me</Link>
      </div>
      <div className="navbar-login">
        <Link to="/Login">Login</Link>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className ="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;