'use client';
import React, { useEffect, useState } from 'react';
import ProductList from '../../components/cartproducts/ProductList';
import { Product } from '../../types/products/product';

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <main>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <ProductList products={cart} />
      ) : (
        <p>Your cart is empty.</p>
      )}
    </main>
  );
};

export default CartPage;
