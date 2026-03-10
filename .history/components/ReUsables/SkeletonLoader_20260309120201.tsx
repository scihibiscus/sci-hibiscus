
import React from 'react';
import styles from "../../styles/"

interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  animation?: 'pulse' | 'wave' | 'none';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  className = '',
  variant = 'rectangular',
  animation = 'pulse',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
        return {
          borderRadius: '50%',
          width: width,
          height: width, // Make it square for circular
        };
      case 'text':
        return {
          borderRadius: '4px',
          width: width,
          height: height || '16px',
        };
      case 'rectangular':
      default:
        return {
          borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
        };
    }
  };

  const animationClass = animation !== 'none' ? styles[animation] : '';

  return (
    <div
      className={`${styles.skeleton} ${animationClass} ${className}`}
      style={getVariantStyles()}
    />
  );
};

export default SkeletonLoader;