import { RootState } from '..';
import { createSelector } from 'reselect';

export const selectDriversState = (state: RootState) => state.drivers;
export const selectDrivers = (state: RootState) => state.drivers.data;

export const selectDriverById = (driverId: string) =>
  createSelector(selectDrivers, drivers =>
    drivers.find(driver => driver.driverId === driverId),
  );
