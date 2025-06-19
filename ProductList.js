import React from 'react';

const products = [
  { id: 1, name: 'T-shirt', price: '$20', description: 'Comfortable cotton T-shirt' },
  { id: 2, name: 'Sneakers', price: '$50', description: 'Running sneakers' },
  { id: 3, name: 'Backpack', price: '$35', description: 'Casual backpack for everyday use' },
];

const ProductList = () => (
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    {products.map((product) => (
      <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <strong>{product.price}</strong>
      </div>
    ))}
  </div>
);

export default ProductList;