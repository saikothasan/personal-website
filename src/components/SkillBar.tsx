import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
  };
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className="bg-primary-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;