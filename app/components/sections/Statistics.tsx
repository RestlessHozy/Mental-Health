'use client';

import { motion } from 'framer-motion';

type StatItemProps = {
  number: string;
  label: string;
  color: 'teal' | 'purple' | 'blue';
};

function StatItem({ number, label, color }: StatItemProps) {
  const colorClasses = {
    teal: 'from-teal-500 to-teal-600',
    purple: 'from-purple-500 to-purple-600',
    blue: 'from-blue-500 to-blue-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center"
    >
      <h3 className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${colorClasses[color]} bg-clip-text text-transparent`}>
        {number}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
}

export function Statistics() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Mental Health <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">By The Numbers</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understanding the scale of mental health challenges helps us recognize we're not alone
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem 
            number="1 in 5"
            label="Adults experience mental illness each year"
            color="teal"
          />
          <StatItem 
            number="50%"
            label="Of all mental illness begins by age 14"
            color="purple"
          />
          <StatItem 
            number="300M+"
            label="People suffer from depression globally"
            color="blue"
          />
          <StatItem 
            number="60%"
            label="Of people with mental illness don't receive treatment"
            color="teal"
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-gray-500 dark:text-gray-400 text-center mt-8">
          Source: World Health Organization and National Alliance on Mental Illness
        </motion.p>
      </div>
    </section>
  );
}