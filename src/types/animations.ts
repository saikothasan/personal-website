import { Variants } from 'framer-motion';

export interface AnimationConfig {
  variants: Variants;
  initial: string;
  animate: string;
  exit?: string;
}

export interface LottieAnimationUrls {
  developer: string;
  skills: string;
  contact: string;
  loading: string;
}