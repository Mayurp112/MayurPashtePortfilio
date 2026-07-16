import { motion } from 'framer-motion';
import { FaBullseye, FaUserTie } from 'react-icons/fa';
import { personal } from '../data/personal';
import SectionHeading from '../components/SectionHeading';
import CountUp from '../components/CountUp';
import { fadeInLeft, fadeInRight, staggerContainer, viewportOnce, fadeInUp } from '../utils/animations';

/**
 * About — summary, career objective, and highlight stats.
 */
export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Get to know me" title="About Me" />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <div className="card p-6">
              <div className="mb-3 flex items-center gap-3">
                <FaUserTie className="text-xl text-brand-600 dark:text-brand-400" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Summary</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">{personal.summary}</p>
            </div>

            <div className="card p-6">
              <div className="mb-3 flex items-center gap-3">
                <FaBullseye className="text-xl text-accent-600 dark:text-accent-400" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Career Objective
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">{personal.objective}</p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4"
          >
            {personal.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInRight}
                className="card flex flex-col items-center justify-center p-6 text-center hover:-translate-y-1 hover:shadow-lg"
              >
                <CountUp
                  value={stat.value}
                  className="gradient-text text-3xl font-extrabold sm:text-4xl"
                />
                <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
            <motion.div
              variants={fadeInUp}
              className="col-span-2 card bg-gradient-to-br from-brand-600 to-accent-600 p-6 text-center text-white"
            >
              <p className="text-sm font-medium opacity-90">
                Based in {personal.location} · Open to backend & GenAI engineering roles
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
