import React from 'react';
import './ProductCard.scss';
import Ratings from '../ratings/Ratings';
import { Product } from '@/types/products/product'; 

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
      </div>
      
      <div className="product-info">
        <h3 className="product-name" style={{ color: product.color }}>
          {product.name}
        </h3>
        
        <Ratings rating={product.rating} />
        
        <div className="price-tag">
          ${product.price.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
