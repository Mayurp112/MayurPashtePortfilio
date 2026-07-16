import { FaHeart } from 'react-icons/fa';
import { personal } from '../data/personal';
import { navLinks } from '../data/navLinks';
import SocialLinks from '../components/SocialLinks';
import { scrollToSection } from '../utils/scroll';

/**
 * Footer — brand, quick links, socials, and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-x py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="text-xl font-extrabold text-slate-900 dark:text-white"
            >
              Mayur Pashte<span className="gradient-text">.</span>
            </button>
            <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
              {personal.title} — {personal.tagline}. Building reliable backends and AI-powered systems.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
              Connect
            </h4>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart className="text-rose-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
