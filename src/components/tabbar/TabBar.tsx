import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

// Styles
import createStyles from './styles';

// Components
import TabBarButton from './button/TabBarButton';

export function TabBar(props: BottomTabBarProps) {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  const routes = (_: any, index: number) => {
    return <TabBarButton key={index} index={index} {...props} />;
  };

  return <View style={styles.container}>{props.state.routes.map(routes)}</View>;
}

export default TabBar;
