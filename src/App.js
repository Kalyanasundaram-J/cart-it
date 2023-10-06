import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import './App.css';

function App() {
  const [products, setProducts] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch products from the backend API
    async function fetchProduct() {
      axios.get('http://localhost:3000/products')
      .then(response => {
        const responseData = response.data;
        setProducts(responseData);
      })
      .catch(error => {
        console.log(error);
      });
    }
    fetchProduct();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const handleSearchProduct = async () => {
    await axios.get(`http://localhost:3000/products?name=${searchTerm}`).then(response => {
      const responseData = response.data;
      setProducts(responseData);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <Header>
        <SearchBar onSearch={handleSearch} searchProduct={handleSearchProduct} />
      </Header>
      { Object.keys(products).length ? <ProductList products={products} searchTerm={searchTerm} /> : 
      <div><h3>Product with this filter not available</h3></div>}
    </div>
  );
}

export default App;
