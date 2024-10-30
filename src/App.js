import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Icon } from 'semantic-ui-react';
import ImageSearch from './components/ImageSearch';
import ImageTable from './components/ImageTable';
import Pagination from './components/Pagination';
import {
  fetchImages,
  setStartDate,
  setEndDate,
  setPage,
  toggleModal,
  toggleFilter,
  applyDateFilter,
  resetDateFilter,
} from './slices/imageSlice';
import './App.css';

const App =() => {
const dispatch = useDispatch();
  const {
    filteredImages,
    isModalOpen,
    showFilter,
    startDate,
    endDate,
    currentPage,
    imagesPerPage,
    status,
    error,
  } = useSelector((state) => state.images);


  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  const handleSearch = (term) => {
    dispatch(fetchImages(term));
    dispatch(toggleModal()); 
  };

  const handleCloseModal = () => {
    dispatch(toggleModal());   
    dispatch(resetDateFilter());
    dispatch(toggleFilter());
    
  };

  const handleToggleFilter = () => {
    dispatch(toggleFilter());
  };
  return (
    <div className="app">
      
      <h1 className="header">CosmicView</h1>
      <ImageSearch onSearch={handleSearch} />

      <Modal open={isModalOpen} onClose={() => dispatch(toggleModal())} closeIcon={false} closeOnDimmerClick={false}>
        <Modal.Header>
          Search Results
          <Icon name="filter" onClick={handleToggleFilter} style={{ cursor: 'pointer', float: 'right' }} />
        </Modal.Header>
        
        <Modal.Content scrolling>
          {showFilter && (
            <div className="filter-section">
              <input
                type="date"
                value={startDate}
                onChange={(e) =>  dispatch(setStartDate(e.target.value))}
                placeholder="From Date"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => dispatch(setEndDate(e.target.value))}
                placeholder="To Date"
              />
              <Button onClick= {() =>dispatch(applyDateFilter())} color="blue" size="small">Apply Filter</Button>
            </div>
          )}
               {status === 'loading' && <div>Loading...</div>}
          {status === 'failed' && <div>Error: {error}</div>}
          {filteredImages.length === 0 && status === 'succeeded' ? (
              <div className="no-results"> No results found</div>
            ) : (
              <>
              <ImageTable images={currentImages}/>
              
              <Pagination
              imagesPerPage={imagesPerPage}
              totalImages={filteredImages.length}
              currentPage={currentPage}
              onPageChange={(page) => dispatch(setPage(page))}
            />
            </>
            )}
          
        </Modal.Content>
        
        <Modal.Actions>
          <Button color="red" onClick={handleCloseModal}>
            <Icon name="close" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default App;