import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDrivers } from './thunk';
import { DriverState } from '@shared/types/driver';

const initialState: DriverState = {
  data: [],
  loading: false,
  error: null,
  page: 0,
  limit: 10,
  total: 0,
};

const driversSlice = createSlice({
  name: 'drivers',
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
      .addCase(fetchDrivers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDrivers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.drivers;
        state.total = action.payload.total;
      })
      .addCase(fetchDrivers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as Error;
      });
  },
});

export const { setPage, setLimit } = driversSlice.actions;
export default driversSlice.reducer;
