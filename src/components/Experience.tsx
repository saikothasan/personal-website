import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      period: '2021 - Present',
      description: 'Led the frontend development team in building modern web applications using React and TypeScript.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions',
      period: '2019 - 2021',
      description: 'Developed and maintained full-stack applications using the MERN stack.'
    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      period: '2018 - 2019',
      description: 'Designed user interfaces and experiences for various client projects.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">Work Experience</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-primary-200 dark:bg-gray-700" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 bg-white dark:bg-gray-900 p-4 rounded-full border-2 border-primary-500">
                  <Briefcase className="w-6 h-6 text-primary-500" />
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;