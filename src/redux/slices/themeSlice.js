/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initState } from '../initState';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initState.theme,
  reducers: {
    set: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { set } = themeSlice.actions;

export const getCurrentTheme = (state) => state.theme.currentTheme;

export const themeReducer = themeSlice.reducer;
