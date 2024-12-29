import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
                alt="Profile"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-2/3 text-left">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate developer and designer with over 5 years of experience creating beautiful digital experiences. 
                I specialize in building modern web applications using cutting-edge technologies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-primary-50 dark:bg-gray-800 rounded-lg">
                  <Code2 className="w-8 h-8 text-primary-600 mb-2" />
                  <h3 className="font-bold mb-1">Development</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Modern web apps</p>
                </div>
                <div className="p-4 bg-primary-50 dark:bg-gray-800 rounded-lg">
                  <Palette className="w-8 h-8 text-primary-600 mb-2" />
                  <h3 className="font-bold mb-1">Design</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">UI/UX Design</p>
                </div>
                <div className="p-4 bg-primary-50 dark:bg-gray-800 rounded-lg">
                  <Terminal className="w-8 h-8 text-primary-600 mb-2" />
                  <h3 className="font-bold mb-1">Architecture</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">System Design</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;