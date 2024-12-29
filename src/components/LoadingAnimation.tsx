import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { LOTTIE_ANIMATIONS } from '../utils/animations/lottieAnimations';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-primary-900">
      <Player
        autoplay
        loop
        src={LOTTIE_ANIMATIONS.loading}
        style={{ height: '200px', width: '200px' }}
      />
    </div>
  );
};