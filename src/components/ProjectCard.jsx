import { useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaBuilding } from 'react-icons/fa';
import Badge from './Badge';
import { fadeInUp } from '../utils/animations';
import { getLenis } from '../utils/scroll';

/**
 * ProjectCard — animated card with an accessible "View details" modal.
 */
export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const lastFocused = useRef(null);
  const titleId = useId();

  // Subtle 3D hover tilt that follows the cursor (spring-smoothed).
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 8);
    rotateX.set((0.5 - py) * 8);
  };
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // Accessible modal behavior: Escape to close, focus trap, focus restore,
  // and background scroll lock while open. (WCAG 2.1.2 / 2.4.3)
  useEffect(() => {
    if (!open) return undefined;

    lastFocused.current = document.activeElement;
    const node = modalRef.current;
    const getFocusable = () =>
      node
        ? Array.from(
            node.querySelectorAll(
              'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
            )
          )
        : [];

    // Move focus into the dialog.
    const focusables = getFocusable();
    (focusables[0] || node)?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key === 'Tab') {
        const items = getFocusable();
        if (items.length === 0) {
          e.preventDefault();
          return;
        }
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Pause Lenis so the page behind the modal can't scroll.
    const lenis = getLenis();
    lenis?.stop();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
      // Restore focus to the trigger.
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus();
    };
  }, [open]);

  return (
    <>
      <motion.article
        variants={fadeInUp}
        whileHover={{ y: -8 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
        className="card group flex transform-gpu flex-col overflow-hidden"
      >
        {/* Cover: real image if provided, else gradient placeholder */}
        <div className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${project.accent}`}>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="px-6 text-center text-lg font-bold text-white">
                {project.title}
              </span>
            </div>
          )}
          <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
            {project.period}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-1 flex items-center gap-2 text-sm text-brand-600 dark:text-brand-400">
            <FaBuilding aria-hidden="true" />
            <span className="font-medium">{project.org}</span>
          </div>
          <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mb-4 flex-1 text-sm text-slate-600 dark:text-slate-400">
            {project.short}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge>+{project.techStack.length - 4}</Badge>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-primary flex-1"
              aria-haspopup="dialog"
            >
              View Details
            </button>
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="btn-outline px-3"
              >
                <FaGithub aria-hidden="true" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="btn-outline px-3"
              >
                <FaExternalLinkAlt aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {/* Details modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              tabIndex={-1}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl outline-none dark:bg-slate-900"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 24, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close dialog"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <FaTimes aria-hidden="true" />
              </button>

              <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                {project.org} · {project.period}
              </p>
              <h3 id={titleId} className="mb-4 mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mb-5 text-slate-600 dark:text-slate-300">{project.description}</p>

              {project.metrics?.length > 0 && (
                <div className="mb-6 grid grid-cols-3 gap-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-800"
                    >
                      <div className="text-lg font-bold text-brand-600 dark:text-brand-400">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <DetailBlock title="My Role">{project.role}</DetailBlock>

              <DetailList title="Key Features" items={project.keyFeatures} />

              <DetailBlock title="Challenges Solved">{project.challenges}</DetailBlock>

              <div className="mb-2 mt-5 text-sm font-semibold text-slate-900 dark:text-white">
                Tech Stack
              </div>
              <div className="mb-2 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {project.github && project.github !== '#' ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <FaGithub aria-hidden="true" /> View Code
                  </a>
                ) : (
                  <span className="btn-outline cursor-not-allowed opacity-60" title="Private / enterprise repository">
                    <FaGithub aria-hidden="true" /> Private Repo
                  </span>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FaExternalLinkAlt aria-hidden="true" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function DetailBlock({ title, children }) {
  return (
    <div className="mb-4">
      <h4 className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-300">{children}</p>
    </div>
  );
}

function DetailList({ title, items }) {
  return (
    <div className="mb-4">
      <h4 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">{title}</h4>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
