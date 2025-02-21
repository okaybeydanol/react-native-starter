import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

// Styles
import getStyles from './styles';

// Components
import TabBarButton from './Button';

export function TabBar(props: BottomTabBarProps) {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getStyles(colors), [colors]);

  const routes = (_: any, index: number) => {
    return <TabBarButton key={index} index={index} {...props} />;
  };

  return <View style={styles.container}>{props.state.routes.map(routes)}</View>;
}

export default TabBar;
