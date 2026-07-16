import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileDownload, FaEnvelope, FaFolderOpen, FaChevronDown } from 'react-icons/fa';
import { personal } from '../data/personal';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';
import HeroVisual from '../components/HeroVisual';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { scrollToSection } from '../utils/scroll';
import { fadeInUp, staggerContainer } from '../utils/animations';

/**
 * Hero — landing section with animated role rotation and CTAs.
 */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const scrollY = useScrollPosition();
  const showCue = scrollY < 80;

  useEffect(() => {
    // Don't auto-rotate for users who prefer reduced motion (WCAG 2.3.3).
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % personal.roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/20" />
        <div className="absolute -right-16 bottom-16 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-600/10" />
      </div>

      <motion.div
        className="container-x grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.p
            variants={fadeInUp}
            className="mb-4 inline-block rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-300"
          >
            👋 Hi, I'm
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {personal.name}
          </motion.h1>

          <motion.div
            variants={fadeInUp}
            className="mt-3 flex h-9 items-center text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl"
          >
            <span className="mr-2 gradient-text">I'm a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {personal.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {personal.intro}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            <Button href={personal.resumeUrl} download={personal.resumeFileName} icon={FaFileDownload}>
              Download Resume
            </Button>
            <Button variant="outline" icon={FaFolderOpen} onClick={() => scrollToSection('projects')}>
              View Projects
            </Button>
            <Button variant="outline" icon={FaEnvelope} onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8">
            <SocialLinks />
          </motion.div>
        </div>

        {/* Signature architecture visual */}
        <motion.div variants={fadeInUp} className="hidden lg:block">
          <HeroVisual />
        </motion.div>
      </motion.div>

      {/* Scroll-down cue — fades out once the user starts scrolling */}
      <AnimatePresence>
        {showCue && (
          <motion.button
            type="button"
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-slate-400 hover:text-brand-600 dark:hover:text-brand-400"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaChevronDown />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
