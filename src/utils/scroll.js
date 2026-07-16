// A shared reference to the active Lenis instance (set by useSmoothScroll).
// Navigation helpers route through Lenis when it's running, and fall back to
// native smooth scrolling otherwise (e.g. reduced-motion users).
let lenisInstance = null;

/** Register (or clear) the active Lenis instance. */
export function setLenis(instance) {
  lenisInstance = instance;
}

/** Get the active Lenis instance, if any. */
export function getLenis() {
  return lenisInstance;
}

// Offset so the fixed navbar doesn't cover section headings.
const NAV_OFFSET = -72;

/**
 * scrollToSection — smoothly scrolls to an element by id.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: NAV_OFFSET });
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/** scrollToTop — smoothly scrolls back to the top of the page. */
export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
