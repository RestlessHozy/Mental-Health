'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Testimonial = {
  id: string;
  name: string;
  age: number;
  condition: string;
  quote: string;
  story: string;
};

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<string>('1');

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah',
      age: 28,
      condition: 'Anxiety & Depression',
      quote: 'I never thought I would feel like myself again, but with the right support, I found my way back.',
      story: 'For years, I struggled with anxiety and depression that made even simple daily tasks feel overwhelming. I would lie awake at night with racing thoughts, and during the day I could barely find the energy to leave my apartment. After months of isolating myself, a friend encouraged me to seek help. Through therapy, mindfulness practices, and connecting with a supportive community, I gradually began to feel more like myself again. Today, I still have difficult days, but I have the tools to manage my mental health and a support system I can rely on.'
    },
    {
      id: '2',
      name: 'Michael',
      age: 35,
      condition: 'PTSD',
      quote: 'Healing isn\'t linear, but every step forward matters, no matter how small.',
      story: 'After serving in the military for eight years, I returned home with invisible wounds. Loud noises would trigger panic attacks, and nightmares kept me from getting restful sleep. I tried to handle it on my own, thinking I needed to be strong, but that only made things worse. When I finally opened up to a VA counselor, it was the first step in a long journey of healing. Through specialized trauma therapy and connecting with other veterans, I\'ve learned that seeking help isn\'t weakness—it\'s one of the bravest things you can do. My PTSD doesn\'t define me, and while recovery has had its ups and downs, each day gets a little easier.'
    },
    {
      id: '3',
      name: 'Aisha',
      age: 22,
      condition: 'Bipolar Disorder',
      quote: 'Understanding my condition was the first step toward taking control of my life again.',
      story: 'Being diagnosed with bipolar disorder at 19 was scary and confusing. I didn\'t understand why I would feel incredibly energetic and creative for weeks, only to crash into deep depression afterward. College became nearly impossible as my moods swung unpredictably. After my diagnosis, I worked with my psychiatrist to find the right medication, and with my therapist to develop coping strategies for both manic and depressive episodes. I also joined a support group where I met others with similar experiences. Today, I\'m back in school, managing my condition, and even helping to run a mental health awareness club on campus. My journey has taught me resilience and self-compassion.'
    },
    {
      id: '4',
      name: 'David',
      age: 41,
      condition: 'OCD',
      quote: 'I learned that I am not my thoughts, and that realization changed everything.',
      story: 'My OCD started in childhood with simple rituals that gradually became more complex and time-consuming. By my thirties, intrusive thoughts and compulsive behaviors were consuming hours of my day and affecting my career and relationships. I was ashamed and kept my struggles hidden until the anxiety became unbearable. When I finally sought help, my therapist introduced me to Exposure and Response Prevention therapy. It was incredibly challenging to face my fears without performing compulsions, but over time, it gave me my life back. I still have OCD, but now I have the skills to manage it rather than letting it manage me. I wish I hadn\'t waited so long to ask for help.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Real <span className="bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Personal experiences from people who have faced mental health challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {testimonials.map((testimonial) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(testimonial.id)}
              className={`p-4 rounded-lg text-left transition-all ${activeTestimonial === testimonial.id ? 'bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500' : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="font-bold text-lg mb-1">{testimonial.name}, {testimonial.age}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.condition}</p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {testimonials.map((testimonial) => (
            activeTestimonial === testimonial.id && (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-100 to-teal-100 dark:from-purple-900/20 dark:to-teal-900/20 flex items-center justify-center mx-auto md:mx-0 mb-4">
                      <p className="text-2xl font-bold">{testimonial.name.charAt(0)}</p>
                    </div>
                    <blockquote className="text-xl italic text-gray-600 dark:text-gray-300 text-center md:text-left">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="mt-4 text-center md:text-left">
                      <span className="font-bold">{testimonial.name}</span>, {testimonial.age}
                      <br />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{testimonial.condition}</span>
                    </p>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-center md:text-left">{testimonial.name}'s Story</h3>
                    <p className="text-gray-600 dark:text-gray-300">{testimonial.story}</p>
                    
                    <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-bold">Note:</span> These stories are based on common experiences of people with mental health conditions. Each person's journey is unique, and recovery looks different for everyone.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}