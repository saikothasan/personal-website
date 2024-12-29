import { AnimationConfig } from '../../types/animations';

export const fadeInUp: AnimationConfig = {
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit'
};

export const scaleIn: AnimationConfig = {
  variants: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  initial: 'hidden',
  animate: 'visible'
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};