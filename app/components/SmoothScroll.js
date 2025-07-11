'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,           // Lower value = smoother scroll (recommended: 0.05)
      wheelMultiplier: 1,   // 1 is a good default for natural speed
      smooth: true          // Ensures smooth scroll is enabled
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
} 