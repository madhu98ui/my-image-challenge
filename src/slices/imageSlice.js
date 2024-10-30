import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://images-api.nasa.gov/search', {
        params: {
          q: searchTerm,
          media_type: 'image',
        },
      });
      return response.data.collection.items;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const imageSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    filteredImages: [],
    searchTerm: '',
    startDate: '',
    endDate: '',
    currentPage: 1,
    imagesPerPage: 10,
    isModalOpen: false,
    showFilter: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; 
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
      state.currentPage = 1; 
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
      state.currentPage = 1; 
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleFilter: (state) => {
      state.showFilter = !state.showFilter;
    },
    applyDateFilter: (state) => {
      const { startDate, endDate, images } = state;
      state.filteredImages = images.filter((image) => {
        const imageDate = new Date(image.data[0].date_created);
        const fromDate = startDate ? new Date(startDate) : null;
        const toDate = endDate ? new Date(endDate) : null;
        return (
          (!fromDate || imageDate >= fromDate) &&
          (!toDate || imageDate <= toDate)
        );
      });
      state.currentPage = 1; 
    },
    resetDateFilter: (state) => {
        state.startDate = '';
        state.endDate = '';
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
        state.filteredImages = action.payload;
        state.currentPage = 1; 
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const {
  setSearchTerm,
  setStartDate,
  setEndDate,
  setPage,
  toggleModal,
  toggleFilter,
  applyDateFilter,
  resetDateFilter,
} = imageSlice.actions;

export default imageSlice.reducer;
