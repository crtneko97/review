'use client';
import { Product } from '../../types/products/product';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/json/products.json');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data: Product[] = await response.json();
  return data;
};
