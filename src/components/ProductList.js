import React from 'react';
import Product from './Product';

function ProductList({ products }) {

  return (
    <div className="product-list cards">
      {Object.keys(products).map((key) => (
        <Product key={products[key].id} product={products[key]} />
      ))}
    </div>
  );
}

export default ProductList;
