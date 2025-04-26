import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DriverRaceState } from '@shared/types/driverRace';
import { fetchDriverRace } from './thunk';

const initialState: DriverRaceState = {
  data: [],
  loading: false,
  error: null,
  page: 0,
  limit: 10,
  total: 0,
};

const driverRaceSlice = createSlice({
  name: 'driverRace',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
      state.page = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDriverRace.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDriverRace.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(fetchDriverRace.rejected, (state, action) => {
        state.error = action.error as Error;
        state.loading = false;
      });
  },
});

export const { setPage, setLimit } = driverRaceSlice.actions;
export default driverRaceSlice.reducer;
