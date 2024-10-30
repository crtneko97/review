'use client';
import '../styles/globals.scss';


import React, { useEffect, useState } from 'react';
import ProductCard from '../components/productCard/ProductCard';
import { Product } from '../types/products/product';
import { fetchProducts } from '../services/products/productService';
import Navbar from '@/components/navbar/Navbar';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar />
    <main>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </main>
    </>
  );
};

export default Home;
