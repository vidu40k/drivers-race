import { View, Text, FlatList, Pressable, Linking } from 'react-native';
import { styles } from './styles';
import {
  PaginationControls,
  PaginationControlsProps,
} from '@shared/components/PaginationControls';
import { DriverRace } from '@shared/types/driverRace';

export interface DriversTableProps extends PaginationControlsProps {
  data: DriverRace[];
}

export const DriverRaceTable = ({
  data,
  page,
  limit,
  total,
  onPageChange,
  onLimitChange,
}: DriversTableProps) => {
  const renderHeader = () => (
    <View style={styles.row}>
      <Text style={styles.headerCell}>Name</Text>
      <Text style={styles.headerCell}>Season</Text>
      <Text style={styles.headerCell}>Round</Text>
      <Text style={styles.headerCell}>Number</Text>
      <Text style={styles.headerCell}>Pos</Text>
      <Text style={styles.headerCell}>Info</Text>
    </View>
  );

  const renderItem = ({ item }: { item: DriverRace }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.raceName}</Text>
      <Text style={styles.cell}>{item.season}</Text>
      <Text style={styles.cell}>{item.round}</Text>
      <Text style={styles.cell}>{item.number}</Text>
      <Text style={styles.cell}>{item.position}</Text>
      <Pressable style={styles.cell} onPress={() => Linking.openURL(item.url)}>
        <Text style={styles.link}>more</Text>
      </Pressable>
    </View>
  );

  return (
    <>
      <FlatList
        data={data}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => `${item.season}_${item.round}_${item.date}`}
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
      />
      <PaginationControls
        page={page}
        limit={limit}
        total={total}
        onPageChange={onPageChange}
        onLimitChange={onLimitChange}
      />
    </>
  );
};
