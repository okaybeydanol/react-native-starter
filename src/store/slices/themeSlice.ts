// Third-Party Libraries
import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

// Parent Directory Imports (Relative)
import type {ThemeState} from '../types';

const initialState: ThemeState = {
  mode: 'system',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state: ThemeState, action: PayloadAction<ThemeState>) => {
      state.mode = action.payload.mode;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
