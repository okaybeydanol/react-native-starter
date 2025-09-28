// Third-Party Libraries
import { combineReducers } from '@reduxjs/toolkit';

// Sibling Directory Imports (Relative)
import { homeApi } from './api/homeApi';
import languageReducer from './slices/languageSlice';
import themeReducer from './slices/themeSlice';

export const apiMiddleware = [homeApi.middleware];

export const rootReducer = combineReducers({
  [homeApi.reducerPath]: homeApi.reducer,
  theme: themeReducer,
  language: languageReducer,
});
