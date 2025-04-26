import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { selectDriverRacesState } from '@store/driverRaceSlice/selectors';
import { useCallback, useEffect } from 'react';
import { setLimit, setPage } from '@store/driverRaceSlice';
import { fetchDriverRace } from '@store/driverRaceSlice/thunk';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@navigation/params';
import { ScreenNames } from '@navigation/routes';
import { styles } from './styles';
import { DriverRaceTable } from './components/DriverRaceTable';

export const DriversRaceListScreen = () => {
  const dispatch = useAppDispatch();
  const route =
    useRoute<RouteProp<RootStackParamList, ScreenNames.DRIVER_RACE_LIST>>();

  const { driverId } = route.params;

  const {
    data: driverRace,
    loading: isLoading,
    error,
    page,
    limit,
    total,
  } = useAppSelector(selectDriverRacesState);

  const handleChangePage = useCallback(
    (newPage: number) => dispatch(setPage(newPage)),
    [],
  );

  const handleLimitChange = useCallback(
    (newLimit: number) => dispatch(setLimit(newLimit)),
    [],
  );

  useEffect(() => {
    dispatch(fetchDriverRace({ driverId, page, limit }));
  }, [dispatch, driverId, page, limit]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {isLoading && <ActivityIndicator size="large" style={styles.loader} />}

        {!isLoading && error && (
          <Text style={styles.error}>{error.message}</Text>
        )}

        {!isLoading && !error && driverRace.length && (
          <>
            <DriverRaceTable
              data={driverRace}
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
