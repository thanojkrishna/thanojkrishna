import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/ThanojProfile.jpg';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';

const container = (delay) => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  },
});

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-700 pt-40 pb-12">
      <div className="container mx-auto flex flex-col items-center px-8 text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          src={profilePic}
          alt="Thanoj Muddana"
          className="rounded-full w-40 h-40 object-cover shadow-lg mb-6"
        />

        <motion.h1
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="text-5xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4"
        >
          Thanoj Muddana
        </motion.h1>

        <motion.span
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="text-3xl bg-gradient-to-r from-pink-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4"
        >
          Data Specialist
        </motion.span>

        <motion.p
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed px-4"
        >
          {HERO_CONTENT}
        </motion.p>

        <motion.div
          variants={container(2)}
          initial="hidden"
          animate="visible"
          className="mt-6 mb-20 flex gap-4"
        >
          <button
            onClick={scrollToContact}
            className="border-2 border-neutral-800 dark:border-neutral-200 text-neutral-800 dark:text-neutral-200 py-2 px-6 rounded-full hover:bg-neutral-800 hover:text-white dark:hover:bg-neutral-200 dark:hover:text-neutral-900 transition duration-200 flex items-center gap-2"
          >
            Contact Me <FaArrowRight />
          </button>
          <a
            href="ThanojCV.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900 py-2 px-6 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-300 transition duration-200 flex items-center gap-2"
          >
            My Resume <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
