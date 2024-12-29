import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-primary-600 bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
            <a href={project.link} className="p-2 bg-white rounded-full hover:bg-gray-100" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 text-gray-900" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-100">
              <Github className="w-5 h-5 text-gray-900" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;