import React, { useState } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import '../App.css';

const ImageSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchTerm(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error detected:", event.error);
      };

      recognition.start();
    } else {
      alert("Sorry, your browser doesn't support Speech Recognition.");
    }
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <div
    className="search-box-wrapper">
    
      <div className="search-box expanded">
          <button onClick={handleVoiceSearch} className="mic-icon-button">
            <FaMicrophone />
          </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
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