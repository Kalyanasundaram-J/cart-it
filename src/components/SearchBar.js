import React, { useState } from 'react';

function SearchBar({ onSearch, searchProduct }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="search-bar">
        <input className="search-input" type="text" placeholder="Search products..." value={searchTerm} onChange={handleInputChange}></input>
        <button className="button search-button" onClick={searchProduct}>Search</button>
    </div>
  );
}

export default SearchBar;
