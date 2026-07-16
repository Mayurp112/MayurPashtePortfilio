// Reusable Framer Motion variants shared across sections/components.
// A single shared easing curve keeps every reveal on the same "rhythm".

// easeOutExpo-style cubic-bezier — matches the Lenis scroll feel.
export const EASE = [0.22, 1, 0.36, 1];
const DURATION = 0.55;

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION, ease: EASE } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: DURATION, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

// Parent container that staggers its children's entrance.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// Shared viewport config for scroll-triggered reveals.
export const viewportOnce = { once: true, amount: 0.2 };
