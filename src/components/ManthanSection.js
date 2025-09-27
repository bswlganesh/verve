import React from 'react';
import './ManthanSection.css';

import manthanSwadesh from '../assets/manthanleft.png';
import manthanMahotsav from '../assets/manhan1.png';
import manthanPardes from '../assets/manthanright.png';

const ManthanSection = () => {
  return (
    <section className="manthan-section" id="manthan">
      <div className="manthan-overlay"></div>
      <div className="manthan-content">
        <div className="manthan-title-bar">
          <h2 className="manthan-main-title">Manthan - The Street play Festival</h2>
        </div>

        <div className="tiers-container">
          {/* Tier 1: Swadesh */}
          <div className="tier-column">
            <img
              src={manthanSwadesh}
              alt="Manthan Swadesh Banner"
              className="tier-banner-image"
            />
            <div className="tier-description">
              <h3>Manthan Swadesh</h3>
              <p>
                The national chapter of our festival, bringing together the most powerful street play performances from colleges and universities across India to compete and collaborate.
              </p>
            </div>
          </div>

          {/* Tier 2: Mahotsav */}
          <div className="tier-column">
            <img
              src={manthanMahotsav}
              alt="Manthan Mahotsav Banner"
              className="tier-banner-image"
            />
            <div className="tier-description">
              <h3>Manthan Mahotsav</h3>
              <p>
                The grand finale, a celebration of street theatre where the best of the best showcase their talent. It's a vibrant confluence of art, culture, and social change.
              </p>
            </div>
          </div>

          {/* Tier 3: Pardes */}
          <div className="tier-column">
            <img
              src={manthanPardes}
              alt="Manthan Pardes Banner"
              className="tier-banner-image"
            />
            <div className="tier-description">
              <h3>Manthan Pardes</h3>
              <p>
                Our international outreach, connecting with global artists and theatre groups to foster a worldwide community dedicated to the art of street performance.
              </p>
            </div>
          </div>
        </div>

        <div className="manthan-cta-group">
          <a
            href="https://www.youtube.com/@manthansscbs1203" // Replace with your YouTube link
            target="_blank"
            rel="noopener noreferrer"
            className="manthan-cta-button"
          >YouTube</a>
          <a
            href="https://www.instagram.com/manthan.cbs?igsh=OTg2YmowNHRzd2lq" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="manthan-cta-button"
          >Instagram</a>
          <a
            href="https://open.spotify.com/artist/7fKsvX6XWM4AfjD5jQR93L" // Replace with your Spotify link
            target="_blank"
            rel="noopener noreferrer"
            className="manthan-cta-button"
          >Spotify</a>
        </div>
      </div>
    </section>
  );
};

export default ManthanSection;