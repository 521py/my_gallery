import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

export const filterSlice = createSlice({
  name: "filter",
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
  },
});

export const { changeSearchFilter, changeSearchRange, changeSearchRangeEnd } =
  filterSlice.actions;

export const getSearchSelector = (state) => state.filter.search;
export const getSearchRangeSelector = (state) => state.filter.rangeStart;
export const getSearchRangeSelectorEnd = (state) => state.filter.rangeEnd;

export const filterReducer = filterSlice.reducer;
