// src/components/Button/Button.tsx
import React from 'react';
import './FuncButton.scss';


interface FuncButtonProps {
  height?: string;
  width?: string;
  onClick?: () => void;
  text?: string;
}

const FuncButton: React.FC<FuncButtonProps> = ({  height, width, onClick, text }) => {
  return (
    <button
      style={{ backgroundColor: height, width }}
      onClick={onClick}
      className="custom-button"
    >
      <span className="btn-text">{text}</span>

    </button>  
  );
};

export default FuncButton;
