import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { education } from '../data/education';
import { certifications, achievements } from '../data/certifications';
import SectionHeading from '../components/SectionHeading';
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/animations';

/**
 * Education — degrees plus Achievements & Certifications.
 */
export default function Education() {
  const realCerts = certifications.filter((c) => !c.placeholder);
  const realAchievements = achievements.filter((a) => !a.placeholder);
  const hasPlaceholders =
    certifications.some((c) => c.placeholder) || achievements.some((a) => a.placeholder);

  return (
    <section id="education" className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="My background" title="Education & Achievements" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
        >
          {/* Education */}
          {education.map((edu) => (
            <motion.div key={edu.id} variants={fadeInUp} className="card p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-xl text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
                  <FaGraduationCap />
                </span>
                <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
              <p className="mb-1 font-medium text-slate-700 dark:text-slate-300">
                {edu.institution}
              </p>
              <p className="mb-3 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                <FaMapMarkerAlt className="text-xs" /> {edu.location}
              </p>
              <ul className="space-y-1.5">
                {edu.details.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Achievements & Certifications */}
          <motion.div variants={fadeInUp} className="card p-6">
            <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
              Achievements & Certifications
            </h3>

            {realCerts.length === 0 && realAchievements.length === 0 ? (
              <p className="text-sm italic text-slate-500 dark:text-slate-400">
                {/* Placeholder note — replace entries in src/data/certifications.js */}
                Add your certifications and achievements in
                <code className="mx-1 rounded bg-slate-100 px-1 dark:bg-slate-800">
                  src/data/certifications.js
                </code>
                (e.g., AWS Certified Developer – Associate).
              </p>
            ) : (
              <div className="space-y-4">
                {realAchievements.map((a) => (
                  <div key={a.id}>
                    <p className="font-medium text-slate-800 dark:text-slate-200">{a.title}</p>
                    {a.detail && (
                      <p className="text-sm text-slate-500 dark:text-slate-400">{a.detail}</p>
                    )}
                  </div>
                ))}
                {realCerts.map((c) => (
                  <div key={c.id} className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">{c.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {c.issuer} · {c.year}
                      </p>
                    </div>
                    {c.credentialUrl && c.credentialUrl !== '#' && (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
                      >
                        View
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {hasPlaceholders && (realCerts.length > 0 || realAchievements.length > 0) && (
              <p className="mt-4 text-xs italic text-slate-500 dark:text-slate-400">
                Tip: remove placeholder entries in src/data/certifications.js.
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
