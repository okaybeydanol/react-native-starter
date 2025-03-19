import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Types
import {ThemeState} from '../types';

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
