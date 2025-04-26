import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
  },
  cell: {
    flex: 2,
    fontSize: 14,
    paddingHorizontal: 8,
    color: '#333',
  },
  headerCell: {
    flex: 2,
    fontSize: 14,
    paddingHorizontal: 8,
    color: 'black',
    fontWeight: 600,
  },
  iconCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 15,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
});
