import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data/navLinks';
import { personal } from '../data/personal';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { scrollToSection } from '../utils/scroll';
import ThemeToggle from './ThemeToggle';

const sectionIds = navLinks.map((l) => l.id);

/**
 * Navbar — fixed, responsive navigation with active-link highlight,
 * scroll shadow, theme toggle, and a mobile drawer.
 */
export default function Navbar({ isDark, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const scrolled = useScrollPosition() > 20;

  const handleNav = (id) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85'
          : 'bg-transparent'
      }`}
    >
      <nav
        className={`container-x flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}
        aria-label="Primary"
      >
        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNav(link.id)}
                aria-current={activeId === link.id ? 'true' : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeId === link.id
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <a href={personal.resumeUrl} download={personal.resumeFileName} className="btn-primary hidden sm:inline-flex">
            Resume
          </a>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden dark:border-slate-700 dark:text-slate-200"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden dark:border-slate-800 dark:bg-slate-950"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                      activeId === link.id
                        ? 'bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-300'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a href={personal.resumeUrl} download={personal.resumeFileName} className="btn-primary mt-2 w-full">
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
