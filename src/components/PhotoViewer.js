import React, { useEffect, useState, useCallback } from 'react';
import './PhotoViewer.css';

const PhotoViewer = ({ images, currentIndex, setCurrentImageIndex, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  const goToPrevious = useCallback(() => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setCurrentImageIndex(newIndex);
    setIsLoading(true);
  }, [currentIndex, images.length, setCurrentImageIndex]);

  const goToNext = useCallback(() => {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentImageIndex(newIndex);
    setIsLoading(true);
  }, [currentIndex, images.length, setCurrentImageIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goToPrevious, goToNext]);

  // Preload next and previous images
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    const nextImage = new Image();
    nextImage.src = images[nextIndex];

    const prevImage = new Image();
    prevImage.src = images[prevIndex];
  }, [currentIndex, images]);

  // Handle touch gestures for swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    // We can add logic here for a "follow-finger" effect in the future
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const swipeDistance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Minimum distance in pixels for a swipe

    if (swipeDistance > minSwipeDistance) {
      goToNext();
    } else if (swipeDistance < -minSwipeDistance) {
      goToPrevious();
    }

    setTouchStart(null); // Reset touch start
  };

  return (
    <div className="photo-viewer-overlay" onClick={onClose}>
      <button className="viewer-close-button" onClick={onClose}>
        &times;
      </button>

      <button
        className="viewer-nav-button prev"
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
      >
        &lt;
      </button>

      <div
        className="viewer-image-container"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isLoading && <div className="viewer-spinner"></div>}
        <img
          className={`viewer-image ${isLoading ? 'loading' : ''}`}
          src={images[currentIndex]}
          alt={`View ${currentIndex + 1}`}
          onLoad={() => setIsLoading(false)}
          // Use srcset for responsive images
          srcSet={`${images[currentIndex].replace('w=600', 'w=600')} 600w,
                   ${images[currentIndex].replace('w=600', 'w=1200')} 1200w,
                   ${images[currentIndex].replace('w=600', 'w=1800')} 1800w`}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      <button
        className="viewer-nav-button next"
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default PhotoViewer;