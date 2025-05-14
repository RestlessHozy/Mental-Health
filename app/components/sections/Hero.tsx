'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
            <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
              Your Mental Health
            </span>{' '}
            Matters More Than You Think
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 md:pr-10">
            Everyone deserves support on their mental health journey. Discover resources, 
            take our self-assessment, and connect with professionals who care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="primary" size="lg">
              Take Self-Assessment
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-medium">
                  {/* Placeholder for user avatars */}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-bold">2,000+</span> people have found help through our resources
            </p>
          </div>
        </motion.div>
        
        {/* Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] flex items-center justify-center"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-teal-200/30 to-purple-200/30 rounded-full blur-3xl" />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* Placeholder for hero image - will be replaced with actual image */}
            <div className="w-full h-full max-w-[400px] max-h-[400px] rounded-2xl bg-gradient-to-br from-teal-100 to-purple-100 dark:from-teal-900/20 dark:to-purple-900/20 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-center px-8">
                [Hero illustration will be placed here]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}