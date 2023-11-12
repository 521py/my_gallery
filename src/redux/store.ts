import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice';
import { themeReducer } from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    theme: themeReducer,
  },
});
