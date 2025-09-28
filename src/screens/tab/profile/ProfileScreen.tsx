// React & React Native
import React from 'react';
import { Text, View } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';

// Sibling Directory Imports (Relative)
import createStyles from './styles';
import type { ProfileScreenProps } from './types';

const ProfileScreen = ({}: ProfileScreenProps) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
