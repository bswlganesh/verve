import React from 'react';
import './PlaysSection.css';

import ilzaamEAdalatImage from '../assets/Ilzaam-E-Adaalat.webp';
import daasTaanImage from '../assets/Daas-Taan.webp';
import notSoLawfulImage from '../assets/NotSoLawful.webp';
import jalHitMeiJaariImage from '../assets/JalHitMeiJaari.webp';
import emotionalAtyachaarImage from '../assets/EmotionalAtyachaar.webp';
import fasciTantraImage from '../assets/Fasci-Tantra.webp';

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
    { title: 'Ilzaam-E-Adaalat', imageUrl: ilzaamEAdalatImage, playUrl: '#' },
    { title: 'Daas-Taan', imageUrl: daasTaanImage, playUrl: '#' },
    { title: 'Not So Lawful', imageUrl: notSoLawfulImage, playUrl: '#' },
    { title: 'Jal Hit Mei Jaari', imageUrl: jalHitMeiJaariImage, playUrl: '#' },
    { title: 'Emotional Atyachaar', imageUrl: emotionalAtyachaarImage, playUrl: '#' },
    { title: 'Fasci - Tantra', imageUrl: fasciTantraImage, playUrl: '#' },
  ];

  return (
    <section className="plays-section" id="plays">
      <h2 className="plays-section-heading">OUR PLAYS</h2>
      <p className="plays-intro-text">
        Each year’s annual production sees a different topic come to light. The production for 2021 focussed on National Security Laws in India, while for 2023, the topic was Dignity of Labour. The production goes through various stages: research (both primary and secondary), scripting, production, execution and music composition of the scenes. It is only after several iterations that a final performance piece is created for the primary purpose of Verve: provoking thought and emotion, where there was none before, on an issue that lagged behind in the shadows.
      </p>
      <div className="plays-grid">
        {playsData.map((play, index) => (
          <a key={index} href={play.playUrl} className="play-card-link">
            <PlayCard title={play.title} imageUrl={play.imageUrl} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PlaysSection;