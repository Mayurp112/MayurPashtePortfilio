import { Suspense, lazy } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';

// Lazy-load below-the-fold sections to shrink the initial bundle.
const Projects = lazy(() => import('../sections/Projects'));
const Experience = lazy(() => import('../sections/Experience'));
const Education = lazy(() => import('../sections/Education'));
const Resume = lazy(() => import('../sections/Resume'));
const Contact = lazy(() => import('../sections/Contact'));

// Lightweight fallback while a lazy section loads.
function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
    </div>
  );
}

/**
 * Home — single-page composition of all portfolio sections.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Suspense fallback={<SectionFallback />}>
        <Projects />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </Suspense>
    </>
  );
}
