import React, { useState } from 'react';
import './Header.css';
import verveLogo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false); // close after clicking a link
  };

  return (
    <header className="header-container">
      <div className="header-main">
        <div className="logo-container">
          <img src={verveLogo} alt="Verve Logo" className="logo-icon" />
        </div>

        {/* Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list" onClick={handleNavClick}>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">AboutUs</a></li>
            <li><a href="#manthan">Manthan</a></li>
            <li><a href="#wa">NKA</a></li>
            <li><a href="#plays">Our Plays</a></li>
            <li><a href="#team">Our Team</a></li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <button
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Optional overlay */}
        {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
      </div>
    </header>
  );
}
