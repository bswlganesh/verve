import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-background-graphic"></div>

      <div className="about-heading">
        <h2 className="about-primary-title">We are Verve</h2>
        <p className="about-subtitle">
          The Street Play Society Of Shaheed Sukhdev College Of Business Studies, University Of Delhi
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
            Verve is a collective of passionate storytellers and performers dedicated to the art of street play. We use public spaces as our stage to explore compelling narratives, challenge perspectives, and engage with the community on issues that matter.
          </p>
          <button className="about-cta-button">
            About us &gt;
          </button>
        </div>

        <div className="about-right-column">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎭</div>
              <h4 className="feature-title">Annual Production</h4>
              <p className="feature-description">
                Every year, we craft a major production that tours various public spaces, reaching thousands.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4 className="feature-title">Achievements</h4>
              <p className="feature-description">
                Our work has been recognized with numerous awards at university and national level competitions.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h4 className="feature-title">Workshops</h4>
              <p className="feature-description">
                We conduct workshops to nurture new talent and spread the culture of street theatre.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h4 className="feature-title">Collaborations</h4>
              <p className="feature-description">
                We collaborate with NGOs and other organizations to amplify important social messages.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="fab" aria-label="Scroll to top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
};

export default AboutSection;