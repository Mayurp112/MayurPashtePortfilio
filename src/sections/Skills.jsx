import { motion } from 'framer-motion';
import { skillCategories, softSkills, TIERS } from '../data/skills';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { staggerContainer, viewportOnce, fadeInUp } from '../utils/animations';

/**
 * Skills — category cards with progress bars + soft-skill chips.
 */
export default function Skills() {
  return (
    <section id="skills" className="bg-slate-100/60 py-24 dark:bg-slate-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Technologies"
          subtitle="My toolkit centers on Python backend engineering, AWS cloud infrastructure, and applied GenAI."
        />

        {/* Proficiency legend */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8 flex flex-wrap items-center justify-center gap-4"
        >
          {Object.entries(TIERS).map(([key, tier]) => (
            <span key={key} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className={`h-2.5 w-2.5 rounded-full ${tier.color}`} aria-hidden="true" />
              {tier.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </motion.div>

        {/* Soft skills */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
            Soft Skills
          </h3>
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-transform hover:-translate-y-0.5 dark:border-brand-800 dark:bg-slate-900 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
