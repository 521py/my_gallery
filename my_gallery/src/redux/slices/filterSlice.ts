/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initState } from '../initState.ts';

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

export const getSearchSelector = (state: { filter: string }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  state.filter.search;

export const getSearchRangeSelector = (state: {
  filter: { rangeStart: string };
}) => state.filter.rangeStart;
export const getSearchRangeSelectorEnd = (state: {
  filter: { rangeEnd: string };
}) => state.filter.rangeEnd;
export const getSearchAuthorIdSelector = (state: {
  filter: { authorId: string };
}) => state.filter.authorId;
export const getCurrentPage = (state: {
  filter: {
    currentPage: string;
  };
}) => state.filter.currentPage;

export const filterReducer = filterSlice.reducer;
