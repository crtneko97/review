import React from 'react';
import './AddButton.scss';

interface AddButtonProps {
  color: string; 
  onClick?: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ color, onClick }) => {
  return (
    <button
      className="add-button"
      style={{ backgroundColor: color }}
      onClick={onClick} 
    >
      Add to Cart
    </button>
  );
};

export default AddButton;
