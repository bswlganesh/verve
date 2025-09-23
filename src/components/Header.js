import React, { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="logo-container">
        <svg
          className="logo-icon"
          width="50"
          height="50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ff4b2b', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#ffc107', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#4285f4', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#flameGradient)" d="M50 0 C-10 40, 20 100, 50 100 C80 100, 110 40, 50 0 Z" transform="rotate(20 50 50)" />
        </svg>
        <span className="brand-name">VERVE</span>
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
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#manthan">Manthan</a></li>
          <li><a href="#wa">W&A</a></li>
          <li><a href="#plays">Our Plays</a></li>
          <li><a href="#team">Our Team</a></li>
        </ul>
      </nav>
    </header>
  )
}
