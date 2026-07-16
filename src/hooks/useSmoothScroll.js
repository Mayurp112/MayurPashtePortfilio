import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../utils/scroll';

/**
 * useSmoothScroll — initializes Lenis for buttery inertia scrolling and drives
 * its RAF loop. Skips entirely for users who prefer reduced motion (they get
 * native scrolling instead). Exposes the instance via setLenis() so navigation
 * helpers can use lenis.scrollTo().
 */
export function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      // easeOutExpo — a gentle, premium deceleration.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(lenis);

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenis(null);
    };
  }, []);
}
