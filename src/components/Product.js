import React from 'react';
import axios from 'axios';

function Product({ product }) {
  const handlePurchase = () => {
    // Send a purchase request to the backend API
    axios.post('http://localhost:3000/purchases/place-order',{ productId: product.id })
    .then(response=>{
        if (response.status === 201){
            console.log("Purchase Successful")
            alert("Purchase Successful");
        }
    })
    .catch((error)=>{
        console.error('Error purchasing product:', error);
    });
  };

  return (
    <div className="product card">
      <img src={product.image} alt={product.name} className="card-image" />
      <h5>{product.name}</h5>
      <p>Price: ${product.price}</p>
      <p>Average Rating: {product.rating}</p>
      
      <button className="button " onClick={handlePurchase}>Purchase</button>
    </div>
  );
}

export default Product;
