'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

type Question = {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
  }[];
};

type Result = {
  range: [number, number];
  title: string;
  description: string;
  recommendation: string;
};

export function SelfCheck() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions: Question[] = [
    {
      id: 1,
      text: "Over the past 2 weeks, how often have you felt little interest or pleasure in doing things?",
      options: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    {
      id: 2,
      text: "Over the past 2 weeks, how often have you felt down, depressed, or hopeless?",
      options: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    {
      id: 3,
      text: "Over the past 2 weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
      options: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    {
      id: 4,
      text: "Over the past 2 weeks, how often have you felt tired or had little energy?",
      options: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    },
    {
      id: 5,
      text: "Over the past 2 weeks, how often have you felt nervous, anxious, or on edge?",
      options: [
        { text: "Not at all", score: 0 },
        { text: "Several days", score: 1 },
        { text: "More than half the days", score: 2 },
        { text: "Nearly every day", score: 3 }
      ]
    }
  ];

  const results: Result[] = [
    {
      range: [0, 4],
      title: "Minimal Symptoms",
      description: "Your responses suggest you may be experiencing minimal symptoms of depression or anxiety.",
      recommendation: "Continue to monitor your mental health and practice self-care regularly."
    },
    {
      range: [5, 9],
      title: "Mild Symptoms",
      description: "Your responses suggest you may be experiencing mild symptoms of depression or anxiety.",
      recommendation: "Consider speaking with a trusted friend or family member about how you're feeling, and practice stress-reduction techniques."
    },
    {
      range: [10, 14],
      title: "Moderate Symptoms",
      description: "Your responses suggest you may be experiencing moderate symptoms of depression or anxiety.",
      recommendation: "Consider consulting with a mental health professional to discuss your symptoms and possible support options."
    },
    {
      range: [15, 20],
      title: "Severe Symptoms",
      description: "Your responses suggest you may be experiencing severe symptoms of depression or anxiety.",
      recommendation: "We strongly recommend reaching out to a mental health professional as soon as possible to discuss your symptoms and treatment options."
    }
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);
    setScore(newAnswers.reduce((a, b) => a + b, 0));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowResults(false);
    setScore(0);
    setAnswers([]);
  };

  const getCurrentResult = () => {
    return results.find(result => score >= result.range[0] && score <= result.range[1]);
  };

  return (
    <section id="self-check" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Mental Health <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">Self-Check</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            This brief questionnaire can help you assess your mental wellbeing. Your answers are completely private and not stored anywhere.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="question"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-teal-500 to-purple-600 rounded-full"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h3 className="text-xl font-medium mb-6">{questions[currentQuestion].text}</h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full text-left p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-2">{getCurrentResult()?.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{getCurrentResult()?.description}</p>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg mb-8">
                  <h4 className="font-bold mb-2">Recommendation:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{getCurrentResult()?.recommendation}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" onClick={resetQuiz}>
                    Take the Quiz Again
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = '#contact'}>
                    Find Support
                  </Button>
                </div>

                <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                  <strong>Disclaimer:</strong> This self-check tool is not a diagnostic instrument and is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}