import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Types
import type {UsersState} from '../types';

const initialState: UsersState[] = [];
export const usersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setUsers: (_: UsersState[], action: PayloadAction<UsersState[]>) => {
      return action.payload;
    },
  },
});

export const {setUsers} = usersSlice.actions;
export default usersSlice.reducer;
