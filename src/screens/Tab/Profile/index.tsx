import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Types
import {ProfileScreenProps} from './types';

// Styles
import getStyles from './styles';

const ProfileScreen = ({}: ProfileScreenProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
