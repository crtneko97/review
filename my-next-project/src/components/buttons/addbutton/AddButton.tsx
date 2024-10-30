import React from 'react';
import './AddButton.scss';

interface AddButtonProps {
  text: string;
  color: string;
  onClick?: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ text, color, onClick }) => {
  return (
    <button
      className="add-button"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <span className="btn-text">{text}</span>
    </button>
  );
};

export default AddButton;
