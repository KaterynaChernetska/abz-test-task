import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './usersOperations';

const usersInitialState = {
  users: [],
  isLoading: false,
  error: null,
  totalUsers: null,
};

const usersSlice = createSlice({
  name: 'contacts',
  initialState: usersInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.users;
        state.totalUsers = action.payload.total_users;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const usersReducer = usersSlice.reducer;
