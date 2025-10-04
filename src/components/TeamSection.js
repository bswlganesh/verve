import { useState } from 'react';
import './TeamSection.css';
import PhotoViewer from './PhotoViewer';

import photo1 from '../assets/album/photo1.jpg';
import photo2 from '../assets/album/photo2.jpg';
import photo3 from '../assets/album/photo3.jpg';
import photo4 from '../assets/album/photo4.jpg';
import photo5 from '../assets/album/photo5.jpg';
import photo6 from '../assets/album/photo6.jpg';
import photo7 from '../assets/album/photo7.jpg';
import photo8 from '../assets/album/photo8.jpg';




// Placeholder data for team members
const teamImages = [
  photo8,photo7,photo1, photo2, photo3, photo4, photo5, photo6
];

const TeamSection = () => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openViewer = (index) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
  };

  return (
    <>
      <section className="team-section" id="team">
        <div className="team-heading-block">
          <h2 className="team-primary-title">Our Team</h2>
          <p className="team-subtitle">Meet the talented faces behind our success</p>
        </div>
        <div className="photo-gallery-grid">
          {teamImages.map((imageUrl, index) => (
            <div key={index} className="gallery-item" onClick={() => openViewer(index)}>
              <img
                src={imageUrl}
                alt={`Team member ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      {viewerOpen && (
        <PhotoViewer
          images={teamImages}
          currentIndex={currentImageIndex}
          onClose={closeViewer}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      )}
    </>
  );
};

export default TeamSection;