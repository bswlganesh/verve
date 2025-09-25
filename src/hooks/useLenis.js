import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenis() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2, // Controls the animation duration (slower scroll)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    });

    setLenis(lenisInstance);

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on component unmount
    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return lenis;
}