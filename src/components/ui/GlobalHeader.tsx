// React & React Native
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Third-Party Libraries
import { useNavigation, useTheme } from '@react-navigation/native';

// Internal Imports (Absolute)
import { getGlobalSvg } from '@helpers/getSvg';
import type { RootStackScreenProps } from '@navigation/types';
import type { AppTheme } from '@theme/types';

// Sibling Directory Imports (Relative)
import type { ButtonConfig, GlobalHeaderProps } from './types';

const GlobalHeader = ({
  title = '',
  titleStyle = {},
  containerStyle = {},
  showRightButton = false,
  showLeftButton = true,
  rightButtonConfig,
  leftButtonConfig,
}: GlobalHeaderProps) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);
  const navigation =
    useNavigation<RootStackScreenProps<'MainNavigator'>['navigation']>();

  const defaultLeftConfig: ButtonConfig = {
    icon: 'back',
    iconProps: {
      stroke: colors.gray[500],
      strokeWidth: 1.5,
      width: 18,
      height: 18,
    },
    onPress: () => navigation.goBack(),
  };

  const finalLeftConfig = leftButtonConfig || defaultLeftConfig;
  const hasRightConfig = !!rightButtonConfig;

  const renderButton = (config: ButtonConfig) => {
    const { icon, iconProps, iconStyle, onPress, style } = config;

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.headerButton, style]}
        onPress={onPress}
      >
        {getGlobalSvg({
          code: icon,
          props: iconProps,
          style: iconStyle,
        })}
      </TouchableOpacity>
    );
  };

  const rightContent = React.useMemo(
    () => (
      <View style={styles.rightContainer}>
        {showRightButton && hasRightConfig && renderButton(rightButtonConfig!)}
      </View>
    ),
    [showRightButton, rightButtonConfig],
  );

  const titleContent = React.useMemo(
    () => (
      <View style={styles.titleContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
    ),
    [title, titleStyle],
  );

  const leftContent = React.useMemo(
    () => (
      <View style={styles.leftContainer}>
        {showLeftButton && renderButton(finalLeftConfig)}
      </View>
    ),
    [showLeftButton, finalLeftConfig],
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {leftContent}
      {titleContent}
      {rightContent}
    </View>
  );
};

export default GlobalHeader;

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.gray[100],
    },
    headerButton: {
      width: 24,
      height: 24,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftContainer: {
      position: 'absolute',
      left: 16,
      alignItems: 'flex-start',
      zIndex: 10,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      color: colors.secondary,
    },
    rightContainer: {
      position: 'absolute',
      right: 16,
      alignItems: 'flex-end',
      zIndex: 10,
    },
  });
