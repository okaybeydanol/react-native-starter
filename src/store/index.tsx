import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

// Reducers
import userReducer from './slices/user';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  user: userReducer,
});

// Create the Redux store with the root reducer
export const store = configureStore({
  reducer: rootReducer,
});

// Infer the RootState type from the store's state
export type RootState = ReturnType<typeof store.getState>;

// Infer the AppDispatch type from the store's dispatch function
export type AppDispatch = typeof store.dispatch;

// Custom hooks for typed usage of useDispatch and useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
