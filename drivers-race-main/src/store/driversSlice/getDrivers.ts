import { api } from '@shared/api';

export const getDrivers = async (limit: number, offset: number) => {
  const response = await api.get(
    `/drivers.json?limit=${limit}&offset=${offset}`,
  );
  const drivers = response.data.MRData.DriverTable.Drivers;
  const {
    total,
    limit: responseLimit,
    offset: responseOffset,
  } = response.data.MRData;

  return {
    drivers: drivers,
    total: parseInt(total, 10),
    limit: parseInt(responseLimit, 10),
    offset: parseInt(responseOffset, 10),
  };
};
