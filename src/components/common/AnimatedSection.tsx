import React from 'react';
import { motion } from 'framer-motion';
import { AnimationConfig } from '../../types/animations';
import { fadeInUp } from '../../utils/animations/variants';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationConfig;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = fadeInUp,
  delay = 0
}) => {
  return (
    <motion.div
      variants={animation.variants}
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;