import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type
import {LanguageState} from '../types';

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
