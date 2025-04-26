import { State, Response } from '.';

export interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  url: string;
}

export type DriversResponse = Response<Driver>;

export type DriverState = State<Driver>;
