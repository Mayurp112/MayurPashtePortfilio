import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgressBar — a thin gradient bar at the top of the viewport that
 * fills as the user scrolls the page. A spring smooths the motion so it
 * glides rather than jumps.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500"
      aria-hidden="true"
    />
  );
}
