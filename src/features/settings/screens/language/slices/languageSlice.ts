// Third-Party Libraries
import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

// Parent Directory Imports (Relative)
import type {LanguageState} from '../types';

const initialState: LanguageState = {
  language: '',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (_, action: PayloadAction<LanguageState>) => {
      return action.payload;
    },
  },
});

export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;
