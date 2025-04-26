import { SafeAreaView, View, Text, Pressable, Linking } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScreenNames } from '@navigation/routes';
import { RootStackParamList } from '@navigation/params';
import { useAppSelector } from '@shared/hooks/useAppSelector';
import { selectDriverById } from '@store/driversSlice/selectors';
import { styles } from './styles';

export const DriversInfoScreen = () => {
  const route =
    useRoute<RouteProp<RootStackParamList, ScreenNames.DRIVER_INFO>>();
  const { driverId } = route.params;
  const driver = useAppSelector(selectDriverById(driverId));

  if (!driver) {
    return <Text>Driver not found</Text>;
  }

  const { givenName, familyName, nationality, dateOfBirth, url } = driver;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>
          {givenName} {familyName}
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Nationality</Text>
          <Text style={styles.value}>{nationality}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>DOB</Text>
          <Text style={styles.value}>{dateOfBirth}</Text>
        </View>

        <Pressable onPress={() => Linking.openURL(url)}>
          <Text style={styles.link}>Information</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
