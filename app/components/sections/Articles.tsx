'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  imageUrl?: string; // Will be replaced with actual images
};

export function Articles() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const articles: Article[] = [
    {
      id: '1',
      title: 'Understanding Anxiety: Causes, Symptoms, and Treatment',
      excerpt: 'Anxiety disorders are the most common mental health concern in the United States. Learn about the different types of anxiety and how they can be treated.',
      category: 'education',
      readTime: '5 min read',
    },
    {
      id: '2',
      title: '10 Effective Strategies for Managing Stress in Daily Life',
      excerpt: 'Stress is a normal part of life, but too much stress can be harmful. Discover practical techniques to manage stress and improve your wellbeing.',
      category: 'self-help',
      readTime: '4 min read',
    },
    {
      id: '3',
      title: 'The Connection Between Physical Exercise and Mental Health',
      excerpt: 'Research shows that physical activity can have significant benefits for mental health. Learn how exercise can help reduce symptoms of depression and anxiety.',
      category: 'wellness',
      readTime: '6 min read',
    },
    {
      id: '4',
      title: 'Supporting a Loved One with Depression: A Guide for Family and Friends',
      excerpt: 'When someone you care about is experiencing depression, it can be difficult to know how to help. This guide provides practical advice for offering support.',
      category: 'support',
      readTime: '7 min read',
    },
    {
      id: '5',
      title: 'Mindfulness Meditation: A Beginner\'s Guide to Reducing Anxiety',
      excerpt: 'Mindfulness meditation is a powerful tool for managing anxiety and improving mental wellbeing. Learn how to get started with this simple practice.',
      category: 'self-help',
      readTime: '5 min read',
    },
    {
      id: '6',
      title: 'Understanding the Impact of Social Media on Mental Health',
      excerpt: 'Social media has transformed how we connect with others, but it can also affect our mental health. Explore the relationship between social media use and wellbeing.',
      category: 'education',
      readTime: '6 min read',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'education', name: 'Education' },
    { id: 'self-help', name: 'Self-Help' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'support', name: 'Support' },
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <section id="articles" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Helpful <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our collection of articles on mental health topics
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden flex flex-col h-full"
            >
              <div className="h-48 bg-gradient-to-r from-teal-100 to-purple-100 dark:from-teal-900/20 dark:to-purple-900/20 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 text-center px-8">
                  [Article image will be placed here]
                </p>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300">
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{article.excerpt}</p>
                <Button variant="text" className="self-start">
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}