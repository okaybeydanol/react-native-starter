// React & React Native
import React, { useCallback } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';

// Sibling Directory Imports (Relative)
import type { ColorPath, LoadingIndicatorProps } from './types';

const LoadingIndicator = ({
  color,
  containerStyle,
  ...props
}: LoadingIndicatorProps) => {
  const { colors } = useTheme();

  const resolveColor = useCallback(
    (colorPath: ColorPath): string => {
      const parts = colorPath.split('.');
      let result: any = colors;

      for (const part of parts) {
        if (result && typeof result === 'object' && part in result) {
          result = result[part];
        } else {
          console.warn(`Invalid color path: ${colorPath}`);
          return colors.primary;
        }
      }

      return typeof result === 'string' ? result : colors.primary;
    },
    [colors],
  );

  return (
    <View style={[styles.loading, containerStyle]}>
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
