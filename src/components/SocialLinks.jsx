import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa';
import { personal } from '../data/personal';

const ICON_MAP = {
  github: FaGithub,
  linkedin: FaLinkedin,
  portfolio: FaGlobe,
  email: FaEnvelope,
};

/**
 * SocialLinks — row of social/contact icon buttons.
 */
export default function SocialLinks({ className = '', size = 'md' }) {
  const items = [
    { key: 'github', href: personal.socials.github, label: 'GitHub' },
    { key: 'linkedin', href: personal.socials.linkedin, label: 'LinkedIn' },
    { key: 'portfolio', href: personal.socials.portfolio, label: 'Portfolio' },
    { key: 'email', href: `mailto:${personal.email}`, label: 'Email' },
  ];

  const sizeClass = size === 'lg' ? 'h-12 w-12 text-xl' : 'h-10 w-10 text-lg';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ key, href, label }) => {
        const Icon = ICON_MAP[key];
        return (
          <a
            key={key}
            href={href}
            target={key === 'email' ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className={`flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:text-brand-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-400 ${sizeClass}`}
          >
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
