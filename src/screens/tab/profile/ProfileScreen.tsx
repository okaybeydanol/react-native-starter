import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

// Types
import {ProfileScreenProps} from './types';

// Styles
import createStyles from './styles';

const ProfileScreen = ({}: ProfileScreenProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
