import { ScreenNames } from './routes';

export type RootStackParamList = {
  [ScreenNames.DRIVERS_LIST]: undefined;
  [ScreenNames.DRIVER_INFO]: { driverId: string };
  [ScreenNames.DRIVER_RACE_LIST]: { driverId: string };
};
