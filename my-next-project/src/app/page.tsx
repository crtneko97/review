
'use client';
import React, { useEffect, useState } from 'react';
import '../styles/globals.scss';
import Navbar from '../components/navbar/Navbar';
import ProductCard from '../components/productCard/ProductCard';
import { Product } from '../types/product';
import { fetchProducts } from '../services/products/productService';
import { v4 as uuidv4 } from 'uuid';

interface CartItem extends Product {
  uuid: string; // Unique identifier for cart items
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
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

    // Load initial cart from session storage
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    loadProducts();
  }, []);

  // Handle adding a product to the cart
  const handleAddToCart = (product: Product) => {
    const cartItem = { ...product, uuid: uuidv4() }; // Add a unique ID to the product

    setCart((prevCart) => {
      const updatedCart = [...prevCart, cartItem];
      sessionStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Navbar cart={cart} />
      <main className="home-page">
        {products.map((product) => (
          <ProductCard
            key={product.id}  // Assuming each product has a unique 'id'
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </main>
    </>
  );
};

export default Home;
