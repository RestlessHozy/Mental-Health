'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

type HelpResource = {
  name: string;
  description: string;
  contact: string;
  hours: string;
};

export function EmergencyHelp() {
  const resources: HelpResource[] = [
    {
      name: "National Suicide Prevention Lifeline",
      description: "Free and confidential support for people in distress, and prevention and crisis resources.",
      contact: "1-800-273-8255",
      hours: "24/7"
    },
    {
      name: "Crisis Text Line",
      description: "Free mental health support via text message. Text HOME to connect with a Crisis Counselor.",
      contact: "Text HOME to 741741",
      hours: "24/7"
    },
    {
      name: "SAMHSA's National Helpline",
      description: "Treatment referral and information service for individuals facing mental health or substance use disorders.",
      contact: "1-800-662-4357",
      hours: "24/7"
    },
    {
      name: "Veterans Crisis Line",
      description: "Connects veterans and their families with qualified responders through a confidential toll-free hotline.",
      contact: "1-800-273-8255 (Press 1)",
      hours: "24/7"
    }
  ];

  return (
    <section className="py-16 bg-red-50 dark:bg-red-900/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Emergency Help
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            If you or someone you know is in crisis, please use these resources to get immediate help
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-2">In Immediate Danger?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you or someone else is in immediate danger or at risk of harm, please call emergency services immediately.
              </p>
              <Button variant="emergency" size="lg">
                Call 911 (US) or Local Emergency Services
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
            >
              <h3 className="text-xl font-bold mb-2">{resource.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="font-bold text-lg">{resource.contact}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Available: {resource.hours}</p>
                </div>
                <Button variant="primary">
                  Get Help Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Note:</strong> These resources are primarily for the United States. If you're located in another country, 
            please search for local mental health emergency services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}