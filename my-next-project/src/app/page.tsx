import React from 'react';
import ProductCard from '@/components/productCard/ProductCard';
import { Product } from '@/types/products/product';

const Home = () => {

//Check if it works
  const p1: Product = {
    name: 'Product 1',
    rating: 4.0,
    price: 90000,
    imageUrl: '/images/Product1.png',
    color: '#DC840A'
  };

  return (
    <div>
      <ProductCard product={p1} />
    
    </div>
  );
};

export default Home;
