// React & React Native
import React from 'react';
import {View} from 'react-native';

// Third-Party Libraries
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';

// Sibling Directory Imports (Relative)
import TabBarButton from './button/TabBarButton';
import createStyles from './styles';

export function TabBar(props: BottomTabBarProps) {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  const routes = (_: any, index: number) => {
    return <TabBarButton key={index} index={index} {...props} />;
  };

  return <View style={styles.container}>{props.state.routes.map(routes)}</View>;
}

export default TabBar;
