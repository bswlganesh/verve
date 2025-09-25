import React from 'react';
import './NukkadSection.css';

const ContentCard = ({ subHeading, title, imageUrl, imageAlt, description, ctaText, imageClassName }) => (
  <div className="nukkad-card">
    <div className="nukkad-card-header">
      <p className="nukkad-card-subheading">{subHeading}</p>
      <h3 className="nukkad-card-title">{title}</h3>
    </div>
    <div className="nukkad-image-frame">
      <img src={imageUrl} alt={imageAlt} className={`nukkad-card-image ${imageClassName || ''}`} />
    </div>
    <p className="nukkad-card-description">{description}</p>
    <button className="nukkad-cta-button">{ctaText}</button>
  </div>
);

const NukkadSection = () => {
  const cardsData = [
    {
      subHeading: 'Nukkad ki Awaazein',
      title: 'AN INITIATIVE',
      imageUrl: 'https://i.imgur.com/O3s5fA5.png', // Placeholder for turntable
      imageAlt: 'Vintage record player',
      description: 'An initiative to bring the raw, powerful voices of the street to a wider audience through beautifully captured performances.',
      ctaText: 'Visit Us',
      imageClassName: 'turntable-image'
    },
    {
      subHeading: 'Spotify',
      title: 'NUKKAD KE GAANE',
      imageUrl: 'https://i.imgur.com/yXg9x0f.png', // Placeholder for cassette
      imageAlt: 'Vintage audio cassette',
      description: 'Listen to the soulful and energetic soundtracks from our plays, featuring original compositions and folk music adaptations.',
      ctaText: 'Visit Us',
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
            imageClassName={card.imageClassName}
          />
        ))}
      </div>
    </section>
  );
};

export default NukkadSection;