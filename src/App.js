import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Icon } from 'semantic-ui-react';
import ImageSearch from './components/ImageSearch';
import ImageTable from './components/ImageTable';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false); 
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchImages = async (searchTerm) => {
    try {
      const response = await axios.get('https://images-api.nasa.gov/search', {
        params: {
          q: searchTerm,
          media_type: 'image',
        },
      });
      setImages(response.data.collection.items);
      setFilteredImages(response.data.collection.items); 
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setImages([]);
    setFilteredImages([]);
    setShowFilter(false);
  };

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const applyDateFilter = () => {
    const filtered = images.filter((image) => {
      const imageDate = new Date(image.data[0].date_created);
      const fromDate = startDate ? new Date(startDate) : null;
      const toDate = endDate ? new Date(endDate) : null;
      return (
        (!fromDate || imageDate >= fromDate) &&
        (!toDate || imageDate <= toDate)
      );
    });
    setFilteredImages(filtered);
  };

  return (
    <div className="app">
      <h1 className="header">CosmicView</h1>
      <ImageSearch onSearch={fetchImages} />

      <Modal open={isModalOpen} onClose={handleClose} closeIcon>
        <Modal.Header>
          Search Results
          <Icon name="filter" onClick={toggleFilter} style={{ cursor: 'pointer', float: 'right' }} />
        </Modal.Header>
        
        <Modal.Content scrolling>
          {showFilter && (
            <div className="filter-section">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="From Date"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="To Date"
              />
              <Button onClick={applyDateFilter} color="blue" size="small">Apply Filter</Button>
            </div>
          )}
            {filteredImages.length === 0? (
              <div className="no-results"> No results found</div>
            ) : (
              <ImageTable images={filteredImages}/>
          
            )}
          
          <ImageTable images={filteredImages} />
        </Modal.Content>
        
        <Modal.Actions>
          <Button color="red" onClick={handleClose}>
            <Icon name="close" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default App;