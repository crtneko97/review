// src/components/Button/Button.tsx
import React from 'react';

interface FuncButtonProps {
  color?: string;
  height?: string;
  width?: string;
  onClick?: () => void;
  text?: string;
}

const FuncButton: React.FC<FuncButtonProps> = ({ color, height, width, onClick, text }) => {
  return (
    <button
      style={{ backgroundColor: color, height, width }}
      onClick={onClick}
      className="custom-button"
    >
      {text}
    </button>  
  );
};

export default FuncButton;
