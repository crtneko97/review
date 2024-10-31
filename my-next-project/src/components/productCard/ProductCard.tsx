import React from 'react';
import './ProductCard.scss';
import Ratings from '../ratings/Ratings';
import { Product } from '../../types/product'; 
import PriceTag from '../priceTag/PriceTag';
import AddButton from '../buttons/addbutton/AddButton';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void; // Add this prop
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
        <PriceTag price={product.price} />
      </div>
      
      <div className="product-info">
        <h3 className="product-name" style={{ color: product.color }}>
          {product.name}
        </h3>

        <Ratings rating={product.rating} />
        
        {/* Pass the product to AddButton's onClick through onAddToCart */}
        <AddButton
          text="ADD TO CART"
          color={product.color}
          onClick={() => onAddToCart(product)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
