import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Import images explicitly
import Project1 from '../assets/projects/project-1.jpg';
import Project2 from '../assets/projects/project-2.jpg';
import Project3 from '../assets/projects/project-3.jpg';
import Project4 from '../assets/projects/project-4.jpg';

// Map image imports to project data
const projectImages = {
  "project-1.jpg": Project1,
  "project-2.jpg": Project2,
  "project-3.jpg": Project3,
  "project-4.jpg": Project4,
};

const Projects = () => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 py-24">
      <div className="container mx-auto px-8">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center text-4xl font-semibold text-neutral-800 dark:text-neutral-200"
        >
          Projects
        </motion.h1>

        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-48 h-48 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                  src={projectImages[project.image]}
                  alt={project.title}
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl"
            >
              <h6 className="mb-3 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                {project.title}
              </h6>
              <p className="mb-5 text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="mb-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mb-2 inline-block rounded bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 dark:text-purple-300 hover:underline inline-flex items-center gap-1"
              >
                View on GitHub <FaExternalLinkAlt className="text-xs" />
              </a>
            </motion.div>
          </div>
        ))}

        {/* View More Projects */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/thanojkrishna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 dark:text-purple-300 hover:underline inline-flex items-center gap-1 text-lg font-medium"
          >
            View More Projects <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Projects;
