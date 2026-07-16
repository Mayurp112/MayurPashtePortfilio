import { motion } from 'framer-motion';
import { FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { personal } from '../data/personal';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { fadeInUp, viewportOnce } from '../utils/animations';

/**
 * Resume — embedded PDF preview + download button.
 * The PDF must exist at public/resume.pdf (see public/README-ASSETS.md).
 */
export default function Resume() {
  return (
    <section id="resume" className="bg-slate-100/60 py-24 dark:bg-slate-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="My credentials"
          title="Resume"
          subtitle="Preview my resume below, or download the latest PDF copy."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            <Button href={personal.resumeUrl} download icon={FaFileDownload}>
              Download Resume
            </Button>
            <Button
              variant="outline"
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={FaExternalLinkAlt}
            >
              Open in New Tab
            </Button>
          </div>

          {/* Embedded preview. Browsers without inline PDF support see the fallback. */}
          <div className="card overflow-hidden p-2">
            <object
              data={personal.resumeUrl}
              type="application/pdf"
              className="h-[70vh] max-h-[820px] w-full rounded-xl"
              aria-label="Resume preview"
            >
              <div className="flex h-64 flex-col items-center justify-center gap-3 p-8 text-center">
                <p className="text-slate-600 dark:text-slate-300">
                  Your browser can't display the embedded PDF.
                </p>
                <Button href={personal.resumeUrl} download icon={FaFileDownload}>
                  Download Resume Instead
                </Button>
              </div>
            </object>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
            {/* Reminder for the developer */}
            Place your PDF at <code>public/resume.pdf</code> to enable the preview.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
