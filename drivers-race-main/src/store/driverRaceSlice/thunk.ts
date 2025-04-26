import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDriverRace } from './getDriverRace';

export const fetchDriverRace = createAsyncThunk(
  'driverRace/fetch',
  async (params: { driverId: string; page: number; limit: number }) => {
    const { driverId, page, limit } = params;
    return await getDriverRace(driverId, page, limit);
  },
);
