import { configureStore } from '@reduxjs/toolkit';
import driversReducer from './driversSlice/index';
import driverRaceReducer from './driverRaceSlice/index';

export const store = configureStore({
  reducer: {
    drivers: driversReducer,
    driverRace: driverRaceReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
