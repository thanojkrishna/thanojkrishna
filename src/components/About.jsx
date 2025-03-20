import { motion } from 'framer-motion';
import { ABOUT_TEXT, CAREER_TIMELINE } from '../constants';
import ThanojAbout from '../assets/ThanojAbout.jpg';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa6';

const About = () => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 py-20 dark:border-neutral-700">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mb-20 text-center text-4xl font-semibold text-neutral-800 dark:text-neutral-200">
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="container mx-auto flex flex-wrap items-start px-8">

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="relative ml-4 pl-8">
            {CAREER_TIMELINE.map((item, index) => (
              <div key={index} className="mb-10 relative">
                <div className="absolute left-0 top-2 w-6 h-6 bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500 rounded-full border-2 border-white dark:border-neutral-900 flex items-center justify-center">
                  {item.type && item.type.toLowerCase() === 'education' ? <FaGraduationCap className="text-white text-sm" /> : <FaBriefcase className="text-white text-sm" />}
                </div>
                <div className="ml-8 bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md shadow-lg">
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">{item.title}</h3>
                  <h4 className="text-md text-neutral-500 dark:text-neutral-400">{item.subtitle}</h4>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{item.date}</span>
                  <div className="mt-2">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="mr-2 mb-2 inline-block rounded bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500"></div>
          </div>
        </motion.div>

        {/* About Image and Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex flex-col items-center space-y-8"
        >
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={ThanojAbout}
            alt="Thanoj Muddana"
            className="rounded-2xl shadow-lg object-cover w-[500px] h-[500px]"
          />

          <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 tracking-tight max-w-xl space-y-2">
            {ABOUT_TEXT.map((text, idx) => (
              <li key={idx} className="leading-relaxed text-sm">
                {text}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
