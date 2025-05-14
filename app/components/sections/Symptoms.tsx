'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Symptom = {
  id: string;
  title: string;
  description: string;
  signs: string[];
};

export function Symptoms() {
  const symptoms: Symptom[] = [
    {
      id: 'depression',
      title: 'Depression',
      description: 'Depression is more than just feeling sad. Its a persistent feeling of sadness or loss of interest that can affect how you feel, think and behave.',
      signs: [
        'Persistent sad, anxious, or "empty" mood',
        'Loss of interest in activities once enjoyed',
        'Decreased energy, fatigue',
        'Difficulty sleeping or oversleeping',
        'Changes in appetite or weight'
      ]
    },
    {
      id: 'anxiety',
      title: 'Anxiety',
      description: 'Anxiety disorders involve more than temporary worry or fear. The anxiety does not go away and can get worse over time.',
      signs: [
        'Excessive worry or fear',
        'Feeling restless or on-edge',
        'Rapid breathing or heart rate',
        'Difficulty concentrating',
        'Sleep problems'
      ]
    },
    {
      id: 'ptsd',
      title: 'PTSD',
      description: 'Post-traumatic stress disorder develops in some people who have experienced a shocking, scary, or dangerous event.',
      signs: [
        'Flashbacks or nightmares',
        'Avoidance of trauma-related thoughts or feelings',
        'Negative thoughts and feelings',
        'Hyperarousal or being easily startled',
        'Sleep disturbances'
      ]
    },
    {
      id: 'bipolar',
      title: 'Bipolar Disorder',
      description: 'Bipolar disorder causes unusual shifts in mood, energy, activity levels, concentration, and the ability to carry out day-to-day tasks.',
      signs: [
        'Extreme mood swings',
        'Periods of unusually intense happiness',
        'Periods of deep sadness or hopelessness',
        'Changes in activity and energy levels',
        'Risky behavior during manic episodes'
      ]
    }
  ];

  const [activeSymptom, setActiveSymptom] = useState<string>(symptoms[0].id);

  return (
    <section id="symptoms" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Common <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">Symptoms</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recognizing the signs of mental health conditions is the first step toward getting help
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {symptoms.map((symptom) => (
            <motion.button
              key={symptom.id}
              onClick={() => setActiveSymptom(symptom.id)}
              className={`p-4 rounded-lg text-left transition-all ${activeSymptom === symptom.id ? 'bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500' : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-bold text-lg mb-1">{symptom.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Click to learn more</p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {symptoms.map((symptom) => (
            activeSymptom === symptom.id && (
              <motion.div
                key={symptom.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{symptom.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{symptom.description}</p>
                
                <h4 className="font-bold text-lg mb-3">Common Signs:</h4>
                <ul className="space-y-3">
                  {symptom.signs.map((sign, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{sign}</p>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold">Important:</span> This information is for educational purposes only and should not be used for self-diagnosis. If you're experiencing these symptoms, please consult with a healthcare professional.
                  </p>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}