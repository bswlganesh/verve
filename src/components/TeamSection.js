import { useState } from 'react';
import './TeamSection.css';
import PhotoViewer from './PhotoViewer';

// Placeholder data for team members
const teamMembers = [
  { id: 1, name: 'Alex Doe', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Jane Smith', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Samuel Green', imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Priya Singh', imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Chris Lee', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Maria Garcia', imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80' },
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
          {teamMembers.map((member, index) => (
            <div key={member.id} className="gallery-item" onClick={() => openViewer(index)}>
              <img
                src={member.imageUrl}
                alt={member.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      {viewerOpen && (
        <PhotoViewer
          images={teamMembers.map(m => m.imageUrl)}
          currentIndex={currentImageIndex}
          onClose={closeViewer}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      )}
    </>
  );
};

export default TeamSection;