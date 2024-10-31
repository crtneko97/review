// src/pages/CartPage.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import ProductList from '../../components/productlist/ProductList';

// Extend the Product interface to include uuid
interface CartItem extends Product {
  uuid: string; // Unique identifier for cart items
}

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]); // Use CartItem instead of Product

  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleRemoveFromCart = (uuid: string) => {
    // Filter the cart to exclude the product with the matching uuid
    const updatedCart = cart.filter((product) => product.uuid !== uuid);
    setCart(updatedCart); // Set the new cart without the removed item
  };

  return (
    <main>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <ProductList products={cart} onRemove={handleRemoveFromCart} />
      ) : (
        <p>Your cart is empty.</p>
      )}
    </main>
  );
};

export default CartPage;
