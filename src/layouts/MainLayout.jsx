import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';
import ScrollProgressBar from '../components/ScrollProgressBar';
import Footer from '../sections/Footer';
import { useTheme } from '../hooks/useTheme';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

/**
 * MainLayout — app shell: navbar, page content, footer, back-to-top.
 * Owns the theme state and passes it to the navbar.
 */
export default function MainLayout({ children }) {
  const { isDark, toggleTheme } = useTheme();
  useSmoothScroll();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Keyboard users can jump straight to content (WCAG 2.4.1). */}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgressBar />
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
