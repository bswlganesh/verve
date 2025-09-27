import React, { useState } from 'react'
import './Header.css'
import verveLogo from '../assets/logo.png'; // Assuming this is the path to your logo

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="header-main">
        <div className="logo-container">
          <img
            src={verveLogo}
            alt="Verve Logo"
            className="logo-icon"
          />
        </div>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">AboutUs</a></li>
            <li><a href="#manthan">Manthan</a></li>
            <li><a href="#wa">NKA</a></li>
            <li><a href="#plays">Our Plays</a></li>
            <li><a href="#team">Our Team</a></li>
          </ul>
        </nav>
      </div>
      <button
        className="hamburger-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>
    </header>
  )
}
