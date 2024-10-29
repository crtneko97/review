import React from 'react';
import './ProductCard.scss';
import Ratings from '../ratings/Ratings';
import { Product } from '../../types/products/product'; 
import PriceTag from '../priceTag/PriceTag';
import AddButton from '../buttons/AddButton';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.imageUrl}
          alt={product.name}
        />
        <PriceTag price={product.price} />
      </div>
      
      <div className="product-info">
        <h3 className="product-name" style={{ color: product.color }}>
          {product.name}
        </h3>

          <Ratings rating={product.rating} />
        
          <AddButton text={"ADD TO CART"}color={product.color} />

      </div>
    </div>
  );
};

export default ProductCard;
