import { useState } from 'react';
import { EXPERIENCES, ADDITIONAL_EXPERIENCES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import InfosysLogo from '../assets/infosys.png';
import AccentureLogo from '../assets/accenture.png';
import StanfordLogo from '../assets/stanford.png';
import SFSULogo from '../assets/sfsu.png';

const companyLogos = {
  'Infosys Limited': InfosysLogo,
  'Accenture': AccentureLogo,
  'Stanford Department of Medicine': StanfordLogo,
  'San Francisco State University': SFSULogo,
};

const Experience = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 py-24">
      <div className="container mx-auto px-8">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center text-4xl font-semibold text-neutral-800 dark:text-neutral-200"
        >
          Experience
        </motion.h1>

        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 text-center lg:text-left mb-4 lg:mb-0 flex flex-col items-center"
            >
              <img
                src={companyLogos[experience.company]}
                alt={`${experience.company} logo`}
                className="w-24 h-24 object-contain rounded-lg shadow-md mb-4"
              />
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                {experience.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl"
            >
              <h6 className="mb-3 text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                {experience.role} {" "}
                <span className="text-sm text-purple-500">
                  @{experience.company}
                </span>
              </h6>
              <p className="mb-5 text-neutral-600 dark:text-neutral-400">
                {experience.description}
              </p>
              <div>
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 inline-block rounded bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(experience.projects || experience.details) && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 text-sm font-medium text-purple-700 hover:underline flex items-center gap-2"
                >
                  {expanded[index] ? 'Hide Details' : 'View More Details'}
                  {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
              <AnimatePresence>
                {expanded[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4"
                  >
                    {experience.projects?.map((project, projIndex) => (
                      <div key={projIndex} className="mb-4">
                        <h6 className="text-md font-semibold text-neutral-700 dark:text-neutral-300">
                          {project.title}
                        </h6>
                        <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
                          {project.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {experience.details && (
                      <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
                        {experience.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="mb-10 mt-12 text-center text-3xl font-semibold text-neutral-800 dark:text-neutral-200"
        >
          Additional Experience
        </motion.h2>

        {ADDITIONAL_EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 text-center lg:text-left mb-4 lg:mb-0 flex flex-col items-center"
            >
              <img
                src={companyLogos[experience.company]}
                alt={`${experience.company} logo`}
                className="w-24 h-24 object-contain rounded-lg shadow-md mb-4"
              />
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                {experience.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl"
            >
              <h6 className="mb-3 text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                {experience.role} {" "}
                <span className="text-sm text-purple-500">
                  @{experience.company}
                </span>
              </h6>
              <p className="mb-5 text-neutral-600 dark:text-neutral-400">
                {experience.description}
              </p>
              <div>
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 inline-block rounded bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
