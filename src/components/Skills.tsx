import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'DevOps', level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Expertise</h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;