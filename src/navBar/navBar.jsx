import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    if (isOpen) {
      setIsOpen(false); 
    }
    scrollToSection(section); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><p>Diart Pllana</p></Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="#homeSection" onClick={() => handleLinkClick('homeSection')}>Home</Link>
        <Link to="#aboutMeSection" onClick={() => handleLinkClick('aboutMeSection')}>About</Link>
        <Link to="#myResume" onClick={() => handleLinkClick('myResume')}>Resume</Link>
        <Link to="#myProject" onClick={() => handleLinkClick('myProject')}>Projects</Link>
      </div>
      <div className="navbar-login">
        <Link to="#contactMe" onClick={() => handleLinkClick('contactMe')}>Contact Me</Link>
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