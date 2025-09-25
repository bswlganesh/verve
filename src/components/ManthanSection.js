import React from 'react';
import './ManthanSection.css';

const ManthanSection = () => {
  return (
    <section className="manthan-section">
      <div className="manthan-overlay"></div>
      <div className="manthan-content">
        <div className="manthan-title-bar">
          <h2 className="manthan-main-title">Manthan - The Street play Festival</h2>
        </div>

        <div className="tiers-container">
          {/* Tier 1: Swadesh */}
          <div className="tier-column">
            <div className="tier-banner swadesh-banner">
              <span className="manthan-logo-font">Manthan</span>
              <span className="manthan-logo-font">SWADESH</span>
            </div>
            <div className="tier-description">
              <h3>Manthan Swadesh</h3>
              <p>
                The national chapter of our festival, bringing together the most powerful street play performances from colleges and universities across India to compete and collaborate.
              </p>
            </div>
          </div>

          {/* Tier 2: Mahotsav */}
          <div className="tier-column">
            <div className="tier-banner mahotsav-banner">
              <div className="mahotsav-border">
                <span className="manthan-logo-font">Manthan Mahotsav</span>
              </div>
            </div>
            <div className="tier-description">
              <h3>Manthan Mahotsav</h3>
              <p>
                The grand finale, a celebration of street theatre where the best of the best showcase their talent. It's a vibrant confluence of art, culture, and social change.
              </p>
            </div>
          </div>

          {/* Tier 3: Pardes */}
          <div className="tier-column">
            <div className="tier-banner pardes-banner">
              <span className="manthan-logo-font">Manthan</span>
              <span className="manthan-logo-font">PARDES</span>
            </div>
            <div className="tier-description">
              <h3>Manthan Pardes</h3>
              <p>
                Our international outreach, connecting with global artists and theatre groups to foster a worldwide community dedicated to the art of street performance.
              </p>
            </div>
          </div>
        </div>

        <div className="manthan-cta-group">
          <button className="manthan-cta-button">YouTube</button>
          <button className="manthan-cta-button">Instagram</button>
          <button className="manthan-cta-button">Spotify</button>
        </div>
      </div>
    </section>
  );
};

export default ManthanSection;