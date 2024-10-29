import React from 'react';
import './PriceTag.scss';

interface PriceTagProps {
  price: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ price }) => {
  

  const formattedPrice = price.toLocaleString().replace(/,/g, ' ');

  return (
    <div className="price-tag">
      {formattedPrice} SEK
    </div>
  );
};

export default PriceTag;
