import React from 'react';
import './Ratings.scss';
import Star from './Star';

interface RatingsProps {
  rating: number;
}

const Ratings: React.FC<RatingsProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="ratings">
      <p>Ratings</p>
      <div className="stars">
        {stars.map((filled, index) => (
          <Star key={index} filled={filled} />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
