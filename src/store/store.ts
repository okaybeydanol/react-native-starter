// Third-Party Libraries
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

// Internal Imports (Absolute)
import { reduxPersistStorage } from '@utils/MMKVStorage';

// Sibling Directory Imports (Relative)
import { apiMiddleware, rootReducer } from './rootReducer';

// Configuration for redux-persist
const rootPersistConfig = {
  key: 'root',
  storage: reduxPersistStorage,
  whitelist: ['theme', 'language'],
};

// Create a persisted reducer using the configuration
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// Create the Redux store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiMiddleware),
});

// Infer the RootState type from the store's state
export type RootState = ReturnType<typeof store.getState>;

// Infer the AppDispatch type from the store's dispatch function
export type AppDispatch = typeof store.dispatch;

// Custom hooks for typed usage of useDispatch and useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// Create a persistor for the Redux store persistence
export const persistor = persistStore(store);
