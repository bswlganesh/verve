import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logo-icon">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Hand 1 - Red */}
            <path d="M60,120 Q80,80 100,100 T140,120" fill="#E53935" />
            {/* Hand 2 - Yellow */}
            <path d="M70,130 Q90,90 110,110 T150,130" fill="#FDD835" transform="rotate(15, 100, 100)" />
            {/* Hand 3 - Blue */}
            <path d="M80,110 Q100,70 120,90 T160,110" fill="#1E88E5" transform="rotate(-15, 100, 100)" />
            {/* Hand 4 - Green */}
            <path d="M75,125 Q95,85 115,105 T155,125" fill="#43A047" transform="rotate(30, 100, 100)" />
          </svg>
        </div>
        <h1 className="hero-brand-name">VERVE</h1>
        <p className="hero-tagline">The Street Play Society</p>
      </div>
    </section>
  );
}