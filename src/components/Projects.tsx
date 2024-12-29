import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with dark mode',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      link: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      category: 'fullstack',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      link: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>
          
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'frontend', 'fullstack', 'design'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${filter === category 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;