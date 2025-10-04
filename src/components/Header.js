import React, { useState, useContext } from 'react';
import './Header.css'; // We will update this file next
import verveLogo from '../assets/logo.png';
import { LenisContext } from '../context/LenisContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenis = useContext(LenisContext);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsMenuOpen(false); // close after clicking a link
    lenis?.scrollTo(target, { duration: 2 });
  };

  return (
    <header className="header-container">
      <div className="header-main">
        <div className="logo-container">
          <img src={verveLogo} alt="Verve Logo" className="logo-icon" />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><a href="#home" className="active" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Us</a></li>
            <li><a href="#manthan" onClick={(e) => handleNavClick(e, '#manthan')}>Manthan</a></li>
            <li><a href="#wa" onClick={(e) => handleNavClick(e, '#wa')}>NKA</a></li>
            <li><a href="#plays" onClick={(e) => handleNavClick(e, '#plays')}>Our Plays</a></li>
            <li><a href="#team" onClick={(e) => handleNavClick(e, '#team')}>Our Team</a></li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <div
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          role="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>AboutUs</a>
            <a href="#manthan" onClick={(e) => handleNavClick(e, '#manthan')}>Manthan</a>
            <a href="#wa" onClick={(e) => handleNavClick(e, '#wa')}>NKA</a>
            <a href="#plays" onClick={(e) => handleNavClick(e, '#plays')}>Our Plays</a>
            <a href="#team" onClick={(e) => handleNavClick(e, '#team')}>Our Team</a>
          </nav>
        )}
      </div>
    </header>
  );
}
