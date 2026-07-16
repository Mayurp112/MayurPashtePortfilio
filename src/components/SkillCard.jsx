import { motion } from 'framer-motion';
import { getIcon } from '../utils/iconMap';
import { TIERS } from '../data/skills';
import { fadeInUp } from '../utils/animations';

/**
 * SkillCard — a category card listing skills as tier-coded chips.
 * The colored dot encodes proficiency (Core / Proficient / Familiar) — see
 * the legend in the Skills section. Tier is exposed to screen readers via title.
 */
export default function SkillCard({ category }) {
  const CategoryIcon = getIcon(category.icon);

  return (
    <motion.div
      className="card p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-600/10"
      variants={fadeInUp}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-xl text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
          <CategoryIcon aria-hidden="true" />
        </span>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {category.title}
        </h3>
      </div>

      <ul className="flex flex-wrap gap-2">
        {category.skills.map((skill) => {
          const SkillIcon = getIcon(skill.icon);
          const tier = TIERS[skill.tier] ?? TIERS.proficient;
          return (
            <li key={skill.name}>
              <span
                className="chip gap-2 py-1.5"
                title={`${skill.name} — ${tier.label}`}
              >
                <SkillIcon className="text-brand-500 dark:text-brand-400" aria-hidden="true" />
                {skill.name}
                <span
                  className={`ml-0.5 h-2 w-2 rounded-full ${tier.color}`}
                  aria-hidden="true"
                />
                <span className="sr-only">Proficiency: {tier.label}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
