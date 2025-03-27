// React & React Native
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

// Third-Party Libraries
import {useTheme} from '@react-navigation/native';

// Internal Imports (Absolute)
import type {AppTheme} from '@theme/types';

// Sibling Directory Imports (Relative)
import type {RadioButtonProps} from './types';

const RadioButton = ({onPress, isActive}: RadioButtonProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const radioButtonStyle = React.useMemo(
    () => ({
      backgroundColor: isActive ? colors.success.main : colors.background,
    }),
    [isActive, colors],
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <View style={[styles.radioButton, radioButtonStyle]} />
    </TouchableOpacity>
  );
};

export default RadioButton;

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 20,
      borderColor: colors.gray[400],
      borderWidth: 1,
    },
    radioButton: {
      width: 16,
      height: 16,
      borderRadius: 20,
    },
  });
