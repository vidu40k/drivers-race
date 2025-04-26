import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontWeight: '600',
    width: 120,
    color: '#555',
  },
  value: {
    color: '#333',
  },
  link: {
    marginTop: 16,
    color: '#1e90ff',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  notFound: {
    marginTop: 32,
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
  },
});
