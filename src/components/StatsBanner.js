import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './StatsBanner.css';

const AnimatedNumber = React.memo(({ end, duration = 50 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endNum = parseInt(end, 10);
    if (start === endNum) return;

    const incrementTime = (duration / endNum) * (1000 / 60); // Adjust for smooth animation

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endNum) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span className="stat-number">{count}</span>;
});

const StatItem = React.memo(({ icon, number, description, isVisible }) => (
  <div className="stat-item">
    <div className="stat-main">
      <div className="stat-icon">{icon}</div>
      {isVisible ? <AnimatedNumber end={number} /> : <span className="stat-number">0</span>}
    </div>
    <p className="stat-description">{description}</p>
  </div>
));

const StatsBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the banner is visible
  });

  const stats = [
    {
      icon: '😊',
      number: '17',
      description: '+ years of raising voices',
    },
    {
      icon: '🏆',
      number: '40',
      description: '+ awards winnings won till now',
    },
    {
      icon: '🎧',
      number: '100',
      description: '+ performances in the delhi circuit and public',
    },
    {
      icon: '👥',
      number: '15',
      description: '+ plays made on several societal issues',
    },
  ];

  return (
    <section className="stats-banner-container" ref={ref}>
      <div className="stats-inner-content">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            number={stat.number}
            description={stat.description}
            isVisible={inView}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;