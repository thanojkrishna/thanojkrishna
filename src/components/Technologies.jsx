import { motion } from 'framer-motion';
import { TbFileTypeSql, TbBrandDatabricks } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { FaPython } from 'react-icons/fa';
import { SiJupyter, SiR, SiSnowflake } from "react-icons/si";
import AzureIcon from '../assets/azure.png';
import SynapseIcon from '../assets/azure-synapse.png';
import PowerBIIcon from '../assets/powerbi.png';
import TableauIcon from '../assets/tableau.png';
import { CERTIFICATIONS } from '../constants';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className='bg-neutral-50 dark:bg-neutral-900 py-16 dark:border-neutral-700'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -150 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl font-semibold text-neutral-800 dark:text-neutral-200'>
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -150 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">

        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <FaPython className='text-7xl text-yellow-400' />
        </motion.div>

        <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <SiJupyter className='text-7xl text-orange-500' />
        </motion.div>

        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <TbFileTypeSql className='text-7xl text-blue-600' />
        </motion.div>

        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <TbBrandDatabricks className='text-7xl text-red-500' />
        </motion.div>

        <motion.div variants={iconVariants(3.7)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <DiMsqlServer className='text-7xl text-blue-700' />
        </motion.div>

        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <SiSnowflake className='text-7xl text-cyan-400' />
        </motion.div>

        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <img src={SynapseIcon} alt="Azure Synapse" className='w-14 h-14 object-contain' />
        </motion.div>

        <motion.div variants={iconVariants(4.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <img src={AzureIcon} alt="Azure" className='w-14 h-14 object-contain' />
        </motion.div>

        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <img src={PowerBIIcon} alt="Power BI" className='w-14 h-14 object-contain' />
        </motion.div>

        <motion.div variants={iconVariants(3.7)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <img src={TableauIcon} alt="Tableau" className='w-14 h-14 object-contain' />
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 dark:border-neutral-700 p-4">
          <SiR className='text-7xl text-blue-800' />
        </motion.div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
          Certifications
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {CERTIFICATIONS.map((cert, index) => (
            <span
              key={index}
              className="inline-block rounded bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
            >
              {cert}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
