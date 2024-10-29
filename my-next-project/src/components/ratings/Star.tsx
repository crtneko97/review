import React from 'react';

interface StarProps {
  filled: boolean; // Indicates if the star is filled
}

const Star: React.FC<StarProps> = ({ filled }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }} // Optional: Add cursor style if you want stars to be clickable
    >
      <g clipPath="url(#clip0_1_38">
        <path
          d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
          stroke={filled ? "#F7B559" : "#F7B559"} // Use the fill color for filled stars
          fill={filled ? "#F7B559" : "none"} // Fill the star if filled, otherwise transparent
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_38">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Star;
