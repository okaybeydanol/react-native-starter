import {StyleSheet} from 'react-native';

// Constants
import {fontFamily} from '@constants/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
  },
});

export default styles;
