import React from 'react';
import './PlaysSection.css';

const PlayCard = ({ title, imageUrl }) => (
  <div className="play-card">
    <div
      className="play-card-background"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="play-card-overlay"></div>
    <h3 className="play-card-title">{title}</h3>
  </div>
);

const PlaysSection = () => {
  const playsData = [
    { title: 'Ilzaam-E-Adaalat', imageUrl: 'https://unsplash.it/400/500?image=101' },
    { title: 'Daas-Taan', imageUrl: 'https://unsplash.it/400/500?image=102' },
    { title: 'Not So Lawful', imageUrl: 'https://unsplash.it/400/500?image=103' },
    { title: 'Jal Hit Mei Jaari', imageUrl: 'https://unsplash.it/400/500?image=104' },
    { title: 'Emotional Atyachaar', imageUrl: 'https://unsplash.it/400/500?image=105' },
    { title: 'Fasci - Tantra', imageUrl: 'https://unsplash.it/400/500?image=106' },
  ];

  return (
    <section className="plays-section">
      <h2 className="plays-section-heading">OUR PLAYS</h2>
      <p className="plays-intro-text">
        Every year, Verve crafts a powerful and thought-provoking street play on a pressing social issue. From mental health to political satire, our productions aim to spark conversation and inspire change.
      </p>
      <div className="plays-grid">
        {playsData.map((play, index) => (
          <PlayCard key={index} title={play.title} imageUrl={play.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default PlaysSection;