import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

/**
 * CountUp — animates a numeric value from 0 → target when it scrolls into view.
 * Accepts display strings like "150K+", "6,000+", "2+", "5" and preserves the
 * non-numeric prefix/suffix (e.g. "K+", "+"). Respects reduced-motion.
 *
 * @param {string} value - the display value from data (e.g. "6,000+")
 */
export default function CountUp({ value, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  // Parse leading number + trailing suffix (e.g. "150" + "K+").
  const match = String(value).match(/^([\d,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, '')) : null;
  const suffix = match ? match[2] : '';

  const [display, setDisplay] = useState(target === null ? value : '0');

  useEffect(() => {
    if (target === null || !inView) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(target.toLocaleString());
      return undefined;
    }

    const controls = animate(0, target, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref} className={className}>
      {target === null ? value : `${display}${suffix}`}
    </span>
  );
}
