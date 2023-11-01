import { createSlice } from '@reduxjs/toolkit';
import { initState } from '../initState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initState.filter,
  reducers: {
    changeSearchFilter: (state, action) => {
      state.search = action.payload;
    },
    changeSearchRange: (state, action) => {
      state.rangeStart = action.payload;
    },
    changeSearchRangeEnd: (state, action) => {
      state.rangeEnd = action.payload;
    },
    changeSearchAuthorId: (state, action) => {
      state.authorId = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  changeSearchFilter,
  changeSearchRange,
  changeSearchRangeEnd,
  changeSearchAuthorId,
  setCurrentPage,
} = filterSlice.actions;

export const getSearchSelector = (state) => state.filter.search;
export const getSearchRangeSelector = (state) => state.filter.rangeStart;
export const getSearchRangeSelectorEnd = (state) => state.filter.rangeEnd;
export const getSearchAuthorIdSelector = (state) => state.filter.authorId;
export const getCurrentPage = (state) => state.filter.currentPage;

export const filterReducer = filterSlice.reducer;
