import React from 'react';
import './NukkadSection.css';

import nkaImage1 from '../assets/nka1.png';
import nkaImage2 from '../assets/nka2.png';

const ContentCard = ({ subHeading, title, imageUrl, imageAlt, description, ctaText, ctaUrl, imageClassName }) => (
  <div className="nukkad-card">
    <div className="nukkad-card-header">
      <p className="nukkad-card-subheading">{subHeading}</p>
      <h3 className="nukkad-card-title">{title}</h3>
    </div>
    <div className="nukkad-image-frame">
      <img src={imageUrl} alt={imageAlt} className={`nukkad-card-image ${imageClassName || ''}`} />
    </div>
    <p className="nukkad-card-description">{description}</p>
    <a
      href={ctaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="nukkad-cta-button"
    >
      {ctaText}
    </a>
  </div>
);

const NukkadSection = () => {
  const cardsData = [
    {
      subHeading: 'Nukkad ki Awaazein',
      title: 'AN INITIATIVE',
      imageUrl: nkaImage1, // Placeholder for turntable
      imageAlt: 'Vintage record player',
      description: '‘Nukkad ki Awaazein’, which caters to the Delhi Collegiate Theatre Circuit, professionally records and uploads all the music that is composed by various street theatre groups for their annual productions in a studio. Close to 50 teams are invited over two days to record 3-4 of their songs in an hour. It is in this way that close to 600 songs have been recorded to date, with the voices of ~1000 artists remaining easily accessible to everyone through Manthan’s YouTube channel. Some songs have gained a viewership of ~1M.',
      ctaText: 'Visit Us',
      ctaUrl: 'https://www.youtube.com/@manthansscbs1203',
      imageClassName: 'turntable-image'
    },
    {
      subHeading: 'Spotify',
      title: 'NUKKAD KE GAANE',
      imageUrl: nkaImage2,
      imageAlt: 'Vintage audio cassette',
      description: 'The songs, in a recent collaboration with Iris Studios, have also been uploaded onto streaming platforms like Spotify for better reach and ease of usage.',
      ctaText: 'Visit Us',
      ctaUrl: 'https://open.spotify.com/artist/7fKsvX6XWM4AfjD5jQR93L',
      imageClassName: 'cassette-image'
    }
  ];

  return (
    <section className="nukkad-section" id="wa">
      <h2 className="nukkad-section-heading">Nukkad ki Awaazein</h2>
      <div className="nukkad-cards-container">
        {cardsData.map((card, index) => (
          <ContentCard
            key={index}
            subHeading={card.subHeading}
            title={card.title}
            imageUrl={card.imageUrl}
            imageAlt={card.imageAlt}
            description={card.description}
            ctaText={card.ctaText}
            ctaUrl={card.ctaUrl}
            imageClassName={card.imageClassName}
          />
        ))}
      </div>
    </section>
  );
};

export default NukkadSection;