// Third-Party Libraries
import { combineReducers } from '@reduxjs/toolkit';

// Internal Imports (Absolute)
import { homeApi } from '@features/home/api/homeApi';
import languageReducer from '@features/settings/screens/language/slices/languageSlice';
import themeReducer from '@features/settings/screens/theme/slices/themeSlice';

export const apiMiddleware = [homeApi.middleware];

export const rootReducer = combineReducers({
  [homeApi.reducerPath]: homeApi.reducer,
  theme: themeReducer,
  language: languageReducer,
});
