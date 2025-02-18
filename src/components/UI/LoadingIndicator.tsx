import React, {useCallback} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Types
import {ColorPath, LoadingIndicatorProps} from './types';

const LoadingIndicator = ({color}: LoadingIndicatorProps) => {
  const {colors} = useTheme();

  // Renk değerini dinamik olarak çözümle
  const resolveColor = useCallback(
    (colorPath: ColorPath): string => {
      return colorPath.split('.').reduce((acc, current) => {
        return acc[current as keyof typeof acc];
      }, colors as any);
    },
    [colors],
  );

  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={resolveColor(color)} />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
