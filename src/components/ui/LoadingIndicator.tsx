import {useTheme} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

// Types
import {ColorPath, LoadingIndicatorProps} from './types';

const LoadingIndicator = ({color, ...props}: LoadingIndicatorProps) => {
  const {colors} = useTheme();

  // TODO: Find better way to resolve color
  const resolveColor = useCallback(
    (colorPath: ColorPath): string => {
      return colorPath.split('.').reduce((acc, current) => {
        return acc[current as keyof typeof acc];
      }, colors as any);
    },
    [colors],
  );

  // TODO: container style should be passed as prop
  return (
    <View style={[styles.loading]}>
      <ActivityIndicator size="large" {...props} color={resolveColor(color)} />
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
