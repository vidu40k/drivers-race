import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from './routes';
import { DriversListScreen } from '@src/screens/DriversListScreen';
import { DriversInfoScreen } from '@src/screens/DriverInfoScreen';
import { DriversRaceListScreen } from '@src/screens/DriverRaceListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './params';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.DRIVERS_LIST}>
        <Stack.Screen
          name={ScreenNames.DRIVERS_LIST}
          component={DriversListScreen}
          options={{ title: 'Drivers' }}
        />
        <Stack.Screen
          name={ScreenNames.DRIVER_INFO}
          component={DriversInfoScreen}
          options={{ title: 'Driver Info' }}
        />
        <Stack.Screen
          name={ScreenNames.DRIVER_RACE_LIST}
          component={DriversRaceListScreen}
          options={{ title: 'Driver Race' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
