import { FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { TbHomeSignal } from 'react-icons/tb';
import { motion } from "framer-motion";

const Navbar = ({ toggleTheme, currentTheme }) => {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#technologies" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-8 bg-neutral-50 dark:bg-neutral-900 shadow-md">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <TbHomeSignal className="w-10 h-10 text-neutral-600 dark:text-neutral-200 hover:text-neutral-500 transition duration-200" />
      </div>

      {/* Navigation Items */}
      <motion.div
        className="absolute inset-x-0 mx-auto flex gap-6 items-center border-2 border-neutral-600 dark:border-neutral-200 rounded-full px-6 py-3 bg-neutral-100 dark:bg-neutral-800 shadow-lg w-max"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.link.substring(1))}
            className="text-lg text-neutral-600 dark:text-neutral-200 hover:text-neutral-500 transition duration-200"
          >
            {item.name}
          </button>
        ))}
      </motion.div>

      {/* Social and Theme Icons */}
      <motion.div
        className="flex items-center gap-4 text-2xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button onClick={toggleTheme}>
          {currentTheme === 'dark' ? (
            <FaSun className="text-yellow-400 hover:text-yellow-300 transition duration-200" />
          ) : (
            <FaMoon className="text-gray-600 hover:text-gray-500 transition duration-200" />
          )}
        </button>
        <a href="https://linkedin.com/in/thanojkrishna" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[#0A66C2] hover:text-[#004182] transition duration-200" />
        </a>
        <a href="mailto:thanojkrishna.muddana@outlook.com">
          <FaEnvelope className="text-neutral-600 hover:text-neutral-500 transition duration-200" />
        </a>
        <a href="https://github.com/thanojkrishna" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-600 hover:text-gray-500 transition duration-200" />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
