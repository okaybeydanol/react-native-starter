import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Types
import {UsersState} from '../types';

const initialState: UsersState[] = [];
export const usersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setUsers: (state: UsersState[], action: PayloadAction<UsersState[]>) => {
      state = action.payload;
    },
  },
});

export const {setUsers} = usersSlice.actions;
export default usersSlice.reducer;
