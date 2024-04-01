import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 50 }) => {
  return (
    <div className="loading-spinner" style={{ width: size, height: size }}>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
