import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  activeButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
