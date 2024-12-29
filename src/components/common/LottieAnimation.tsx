import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  src: string;
  height?: string | number;
  width?: string | number;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  src,
  height = '100%',
  width = '100%',
  className = ''
}) => {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{ height, width }}
      className={className}
    />
  );
};

export default LottieAnimation;