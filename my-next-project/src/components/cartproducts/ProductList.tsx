import React from 'react';
import './ProductList.scss';
import { Product } from '../../types/products/product';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <table className="product-list">
      <thead className="product-list__header">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} className="product-list__row">
            <td className="product-list__cell">
              <img src={product.imageUrl} alt={product.name} className="product-list__image" />
            </td>
            <td className="product-list__cell">{product.name}</td>
            <td className="product-list__cell">${product.price}</td>
            <td className="product-list__cell">{product.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
