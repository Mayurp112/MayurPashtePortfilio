import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '../utils/animations';

/**
 * SectionHeading — consistent, animated heading for every section.
 */
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="mb-12 text-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
