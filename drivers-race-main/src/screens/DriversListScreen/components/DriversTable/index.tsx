import { Driver } from '@shared/types/driver';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import {
  PaginationControls,
  PaginationControlsProps,
} from '@shared/components/PaginationControls';

export interface DriversTableProps extends PaginationControlsProps {
  data: Driver[];
  onSelect: (id: string) => void;
  onViewRace: (id: string) => void;
}

export const DriversTable = ({
  data,
  onSelect,
  page,
  limit,
  total,
  onPageChange,
  onLimitChange,
  onViewRace,
}: DriversTableProps) => {
  const renderHeader = () => (
    <View style={styles.row}>
      <Text style={styles.headerCell}>Name</Text>
      <Text style={styles.headerCell}>Nationality</Text>
      <Text style={styles.headerCell}>DOB</Text>
      <Text style={[styles.headerCell, styles.iconCell]}>Info</Text>
      <Text style={[styles.headerCell, styles.iconCell]}>Race</Text>
    </View>
  );

  const renderItem = ({ item }: { item: Driver }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>
        {item.givenName} {item.familyName}
      </Text>
      <Text style={styles.cell}>{item.nationality}</Text>
      <Text style={styles.cell}>{item.dateOfBirth}</Text>
      <TouchableOpacity
        onPress={() => onSelect(item.driverId)}
        style={styles.iconCell}>
        <Text style={styles.icon}>👤</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onViewRace(item.driverId)}
        style={styles.iconCell}>
        <Text style={styles.icon}>🏎️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <FlatList
        data={data}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => item.driverId}
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
