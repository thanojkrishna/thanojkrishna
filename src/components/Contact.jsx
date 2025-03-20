import { CONTACT } from '../constants';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-700 py-16">
      <div className="container mx-auto px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 text-center text-4xl font-semibold text-neutral-800 dark:text-neutral-200"
        >
          Get in Touch
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center tracking-tight"
        >
          <p className="my-4 text-neutral-600 dark:text-neutral-400">{CONTACT.address}</p>

          <p className="my-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 transition duration-200"
            >
              {CONTACT.email}
            </a>
          </p>

          <p className="my-4">
            <span
              onClick={() => window.open(`tel:${CONTACT.phoneNo}`)}
              className="cursor-pointer text-purple-500 hover:text-purple-400 transition duration-200"
            >
              {CONTACT.phoneNo}
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
