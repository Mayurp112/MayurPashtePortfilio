import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { experience } from '../data/experience';
import SectionHeading from '../components/SectionHeading';
import { fadeInUp, staggerContainer, viewportOnce } from '../utils/animations';

/**
 * Experience — vertical timeline of work history.
 */
export default function Experience() {
  return (
    <section id="experience" className="bg-slate-100/60 py-24 dark:bg-slate-900/40">
      <div className="container-x">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto max-w-3xl"
        >
          {/* Timeline spine */}
          <div className="absolute left-4 top-2 h-full w-0.5 bg-slate-200 dark:bg-slate-700 sm:left-1/2" />

          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={fadeInUp}
              className={`relative mb-10 pl-12 sm:w-1/2 sm:pl-0 ${
                index % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'
              }`}
            >
              {/* Node */}
              <span
                className={`absolute left-2.5 top-2 h-4 w-4 rounded-full border-4 border-white bg-brand-500 dark:border-slate-950 sm:left-auto ${
                  index % 2 === 0 ? 'sm:-right-2' : 'sm:-left-2'
                }`}
              />
              <div className="card p-6 text-left">
                <div className="mb-2 flex items-center gap-2 text-brand-600 dark:text-brand-400">
                  <FaBriefcase />
                  <span className="text-sm font-semibold">{job.period}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
                <p className="mb-1 font-medium text-slate-700 dark:text-slate-300">{job.company}</p>
                <p className="mb-3 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                  <FaMapMarkerAlt className="text-xs" /> {job.location}
                </p>
                <ul className="space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
