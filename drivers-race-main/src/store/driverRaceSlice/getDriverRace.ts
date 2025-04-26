import { api } from '@shared/api';
import { DriverRaceResponse } from '@shared/types/driverRace';

export const getDriverRace = async (
  driverId: string,
  page: number,
  limit: number,
): Promise<DriverRaceResponse> => {
  const offset = page * limit;
  const response = await api.get(
    `/drivers/${driverId}/results.json?limit=${limit}&offset=${offset}`,
  );

  const { MRData } = response.data;
  const races = MRData.RaceTable.Races;

  const results = races.map((race: any) => {
    const result = race.Results?.[0] || {};
    return {
      season: race.season,
      round: race.round,
      raceName: race.raceName,
      url: race.url,
      date: race.date,
      time: race.time,
      number: result.number?.toString() || 'N/A',
      position: result.position?.toString() || 'N/A',
    };
  });

  return {
    data: results,
    total: parseInt(MRData.total, 10),
    limit: parseInt(MRData.limit, 10),
    offset: parseInt(MRData.offset, 10),
  };
};
