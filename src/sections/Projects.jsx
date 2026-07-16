import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { staggerContainer, viewportOnce } from '../utils/animations';

/**
 * Projects — grid of all five project cards.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Things I've built"
          title="Featured Projects"
          subtitle="Enterprise-scale backend systems, event-driven automation, and AI integration across banking and energy domains."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
