import React from 'react';
import './ProductList.scss';
import { Product } from '../../types/product';
import FuncButton from '../buttons/funcbutton/FuncButton';

interface ProductListProps {
  products: Product[];
  onRemove: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onRemove }) => {
  return (
    <table className="product-list">
      <thead className="product-list__header">
        <tr>
          <th>Image</th><th>Name</th><th>Price</th><th>Rating</th><th>Action</th>
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
            <td className="product-list__cell">
              <FuncButton
                onClick={() => onRemove(product.uuid)}
                text="Remove"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
