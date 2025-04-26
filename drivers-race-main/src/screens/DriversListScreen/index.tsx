import { SafeAreaView, View, Text, ActivityIndicator } from 'react-native';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppNavigation } from '@shared/hooks/useAppNavigation';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { selectDriversState } from '@store/driversSlice/selectors';
import { setLimit, setPage } from '@store/driversSlice';
import { useCallback, useEffect } from 'react';
import { styles } from './styles';
import { ScreenNames } from '@navigation/routes';
import { DriversTable } from './components/DriversTable';
import { fetchDrivers } from '@store/driversSlice/thunk';

export const DriversListScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const {
    data: drivers,
    loading: isLoading,
    error,
    page,
    limit,
    total,
  } = useAppSelector(selectDriversState);

  const handleChangePage = useCallback(
    (newPage: number) => dispatch(setPage(newPage)),
    [],
  );

  const handleSelectDriver = useCallback((driverId: string) => {
    navigation.navigate(ScreenNames.DRIVER_INFO, { driverId });
  }, []);

  const handleViewRace = useCallback((driverId: string) => {
    navigation.navigate(ScreenNames.DRIVER_RACE_LIST, { driverId });
  }, []);

  const handleLimitChange = useCallback(
    (newLimit: number) => dispatch(setLimit(newLimit)),
    [],
  );

  useEffect(() => {
    dispatch(fetchDrivers({ page, limit }));
  }, [dispatch, page, limit]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {isLoading && <ActivityIndicator size="large" style={styles.loader} />}

        {!isLoading && error && (
          <Text style={styles.error}>{error.message}</Text>
        )}

        {!isLoading && !error && drivers.length && (
          <>
            <DriversTable
              data={drivers}
              onSelect={handleSelectDriver}
              onViewRace={handleViewRace}
              page={page}
              limit={limit}
              total={total}
              onPageChange={handleChangePage}
              onLimitChange={handleLimitChange}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
