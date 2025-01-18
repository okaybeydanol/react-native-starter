import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {useDispatch, useSelector} from 'react-redux';

// Reducers
import userReducer from './slices/user';
import themeReducer from './slices/theme';

// Api
import {commonApi} from './api';

// Configuration for redux-persist
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  [commonApi.reducerPath]: commonApi.reducer,
  user: userReducer,
  theme: themeReducer,
});

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
    }).concat(commonApi.middleware),
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
