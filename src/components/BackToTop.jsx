import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { scrollToTop } from '../utils/scroll';

/**
 * BackToTop — floating button that appears after scrolling down.
 */
export default function BackToTop() {
  const scrollY = useScrollPosition();
  const visible = scrollY > 500;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ y: -3 }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/40 hover:bg-brand-700"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
