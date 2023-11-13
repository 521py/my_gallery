/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice.ts';
import { themeReducer } from './slices/themeSlice.ts';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    theme: themeReducer,
  },
});
