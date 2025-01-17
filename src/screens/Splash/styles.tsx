import {StyleSheet} from 'react-native';

// Constants
import {fontFamily} from '@constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    color: '#000000',
    fontFamily: fontFamily.semiBold,
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    backgroundColor: '#f9f9f9',
    padding: 8,
    marginBottom: 16,
  },
});

export default styles;
