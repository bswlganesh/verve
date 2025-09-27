import React from 'react';
import './PlaysSection.css';

import ilzaamEAdalatImage from '../assets/Ilzaam-E-Adaalat.webp';
import daasTaanImage from '../assets/Daas-Taan.webp';
import notSoLawfulImage from '../assets/NotSoLawful.webp';
import jalHitMeiJaariImage from '../assets/JalHitMeiJaari.webp';
import emotionalAtyachaarImage from '../assets/EmotionalAtyachaar.webp';
import fasciTantraImage from '../assets/Fasci-Tantra.webp';
import LaIlaajImage from '../assets/LaIlaaj.webp';

const PlayCard = ({ title, imageUrl }) => (
  <div className="play-card">
    <img
      src={imageUrl}
      alt={title}
      className="play-card-background"
      loading="lazy"
    />
    <div className="play-card-overlay"></div>
    <h3 className="play-card-title">{title}</h3>
  </div>
);

const PlaysSection = () => {
  const playsData = [
    
    { title: 'La-Ilaaj', imageUrl: LaIlaajImage, playUrl: 'https://photos.app.goo.gl/RJaCt8sbVTkbhdSt7' },
    { title: 'Ilzaam-E-Adaalat', imageUrl: ilzaamEAdalatImage, playUrl: 'https://youtu.be/9lDPIyJuF2E?si=LcoIXwDqiq0isbkm' },
    { title: 'Daas-Taan', imageUrl: daasTaanImage, playUrl: 'https://youtu.be/L_fZJ75bqgs?si=C26zZKhzWKVSZR50' },
    { title: 'Not So Lawful', imageUrl: notSoLawfulImage, playUrl: 'https://youtu.be/LzKQzoG33E0?si=JTqrWUKjMQeJaPKa' },
    { title: 'Jal Hit Mei Jaari', imageUrl: jalHitMeiJaariImage, playUrl: 'https://youtu.be/jXfablup7QY?si=GJkw1lWLz47MbGJ4' },
    { title: 'Emotional Atyachaar', imageUrl: emotionalAtyachaarImage, playUrl: 'https://youtu.be/vwRte4KznPg?si=ZU5P_W-ux3lYqvzc' },
    { title: 'Fasci - Tantra', imageUrl: fasciTantraImage, playUrl: 'https://youtu.be/I585Au3wqns?si=AweY3MrefhCNpo0t' },
  ];

  return (
    <section className="plays-section" id="plays">
      <h2 className="plays-section-heading">OUR PLAYS</h2>
      <p className="plays-intro-text">
        Each year’s annual production sees a different topic come to light. The production for 2021 focussed on National Security Laws in India, while for 2023, the topic was Dignity of Labour. The production goes through various stages: research (both primary and secondary), scripting, production, execution and music composition of the scenes. It is only after several iterations that a final performance piece is created for the primary purpose of Verve: provoking thought and emotion, where there was none before, on an issue that lagged behind in the shadows.
      </p>
      <div className="plays-grid">
        {playsData.map((play, index) => (
          <a target='blank' key={index} href={play.playUrl} className="play-card-link">
            <PlayCard title={play.title} imageUrl={play.imageUrl} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PlaysSection;