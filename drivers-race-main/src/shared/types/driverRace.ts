import { State, Response } from '.';

export interface DriverRace {
  season: string;
  round: string;
  url: string;
  raceName: string;
  number: string;
  position: string;
  date: string;
  time: string;
}

export type DriverRaceState = State<DriverRace>;
export type DriverRaceResponse = Response<DriverRace>;
