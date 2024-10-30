'use client';
import React, { useEffect, useState } from 'react';
import '../styles/globals.scss';
import Navbar from '../components/navbar/Navbar';
import ProductCard from '../components/productCard/ProductCard';
import { Product } from '../types/products/product';
import { fetchProducts } from '../services/products/productService';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
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

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar cart={cart} />
      <main>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </main>
    </>
  );
};

export default Home;
