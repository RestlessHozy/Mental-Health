'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            About <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">MindfulHealth</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're dedicated to raising awareness and providing support for mental health issues
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            {/* Placeholder for about image */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-purple-100 dark:from-teal-900/20 dark:to-purple-900/20 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-center px-8">
                [About section image will be placed here]
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              At MindfulHealth, we believe that mental health is just as important as physical health. 
              Our mission is to break the stigma surrounding mental health issues and provide accessible 
              resources for everyone seeking help and information.
            </p>
            
            <h3 className="text-2xl font-bold mt-4">What We Offer</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Educational resources about common mental health conditions</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Self-assessment tools to help you understand your mental wellbeing</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Connection to professional help and community support</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Stories from people who have overcome mental health challenges</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}