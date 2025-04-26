import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDrivers } from './getDrivers';

export const fetchDrivers = createAsyncThunk(
  'drivers/fetchDrivers',
  async ({ page, limit }: { page: number; limit: number }, thunkAPI) => {
    try {
      const offset = page * limit;
      return await getDrivers(limit, offset);
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
