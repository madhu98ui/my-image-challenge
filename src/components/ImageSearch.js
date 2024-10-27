import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../App.css';

const ImageSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <div className="search-box-wrapper">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Type to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
        />
        <button onClick={handleSearch} className="search-icon-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default ImageSearch;