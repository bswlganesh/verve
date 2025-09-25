import React, { useContext } from 'react';
import { LenisContext } from '../context/LenisContext';
// import footerImage from '../assets/verve-logo.png'; // Update with the correct path to your image
import './Footer.css';

const Footer = () => {
  const lenis = useContext(LenisContext);

  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1.5 });
  };

  return (
    <>
      <footer className="footer-container">
        {/* Image on top of the curve */}
        <div className="footer-top-image-container">
          {/* <img src={footerImage} alt="Verve" className="footer-top-image" /> */}
        </div>

        <div className="footer-content">
          {/* Column 1: Contact */}
          <div className="footer-column">
            <h3>CONTACT</h3>
            <p>
              <strong>Devam Juneja ( President )</strong>
              <br />
              +91 971110840
            </p>
            <p>
              <strong>Aryan Gauba ( Vice-President )</strong>
              <br />
              +91 9811778876
            </p>
          </div>

          {/* Column 2: Location */}
          <div className="footer-column">
            <h3>OUR LOCATION</h3>
            <p>
              Shaheed Sukhdev College of Business Studies,
              <br />
              Dr. K.N. Katju Marg, Sector 16,
              <br />
              Rohini, New Delhi – 110089
            </p>
          </div>

          {/* Column 3: Follow Us */}
          <div className="footer-column">
            <h3>FOLLOW US</h3>
            <ul>
              <li><a href="google.com">Facebook</a></li>
              <li><a href="google.com">Twitter</a></li>
              <li><a href="google.com">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer / Copyright Bar */}
        <div className="sub-footer">
          <hr />
          <p className="copyright-text">
            created by <strong>Verve</strong> | all rights reserved.
          </p>
        </div>
      </footer>

      {/* Back-to-Top Button */}
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        ↑
      </button>
    </>
  );
};

export default Footer;