import React from 'react';
import './StatsBanner.css';

const StatItem = ({ icon, number, description }) => (
  <div className="stat-item">
    <div className="stat-main">
      <div className="stat-icon">{icon}</div>
      <span className="stat-number">{number}</span>
    </div>
    <p className="stat-description">{description}</p>
  </div>
);

const StatsBanner = () => {
  const stats = [
    {
      icon: '😊',
      number: '17',
      description: '• years of raising voices',
    },
    {
      icon: '🏆',
      number: '40',
      description: '• awards and counting',
    },
    {
      icon: '🎧',
      number: '100',
      description: '• workshops conducted',
    },
    {
      icon: '👥',
      number: '15',
      description: '• active members',
    },
  ];

  return (
    <section className="stats-banner-container">
      <div className="stats-inner-content">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            number={stat.number}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;