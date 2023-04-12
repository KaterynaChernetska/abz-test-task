import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../services/api';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (count, thunkAPI) => {
    try {
      const response = await getUsers(count);
      console.log(response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
