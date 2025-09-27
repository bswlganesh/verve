import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-background-graphic"></div>

      <div className="about-heading">
        <h2 className="about-primary-title">We are <span className='about-verve'>Verve</span></h2>
        <p className="about-subtitle">
          The Street Play Society Of Shaheed Sukhdev College Of Business Studies,University Of Delhi
        </p>
        <div className="about-scroll-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="#a98af8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="about-main-content">
        <div className="about-left-column">
          <h3 className="about-what-we-do-title">What we do</h3>
          <p className="about-body-text">
            Verve – The Street Play Society of SSCBS was established in 2006, and aims to bring about a change by focusing on sensitising masses on social evils prevailing in our society through the medium of street play.
          </p>
          <a className="about-cta-button" href="#about">
            About us
          </a>
        </div>

        <div className="about-right-column">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎭</div>
              <h4 className="feature-title">Annual Production</h4>
              <p className="feature-description">
                Every year, Verve makes its annual production based on a societal issue, wherein all the play making tasks including primary and secondary research, direction, music and execution are carried out by the team from scratch.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4 className="feature-title">Achievements</h4>
              <p className="feature-description">
                We take part in various Delhi based, outstation competitions and public performances to fulfil our goal and make the production a success.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h4 className="feature-title">Social Work</h4>
              <p className="feature-description">
                It not only shows a reflection of the society at large, but the ways it can metamorphose into something better and healthier for everyone. This art form gives you the chance to embrace yourself, explore new things and let you become the best version of yourself in this competitive world.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h4 className="feature-title">Alumni Network</h4>
              <p className="feature-description">
                Our alumni, spread across diverse fields, remain engaged, offering mentorship and support to current members. Their continued involvement enriches our society's legacy, fueling inspiration and growth.
              </p>
            </div>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default AboutSection;