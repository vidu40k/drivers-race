import { RootState } from '..';

export const selectDriverRacesState = (state: RootState) => state.driverRace;
export const selectDriverRace = (state: RootState) => state.driverRace.data;
