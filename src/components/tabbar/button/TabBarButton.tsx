import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';

import React from 'react';
import {TouchableOpacity} from 'react-native';

// Helpers
import {getTabSvg} from '@helpers/svg';

// Styles
import createStyles from './styles';

export interface StateRoutesMapParams extends BottomTabBarProps {
  index: number;
}

const TabBarButton = ({state, navigation, index}: StateRoutesMapParams) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  const route = state.routes[index];
  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return (
    <TouchableOpacity
      key={route.name}
      onPress={onPress}
      style={styles.container}>
      {getTabSvg({
        code: route.name,
        props: {
          fill: isFocused ? colors.gray[600] : colors.gray[300],
        },
      })}
    </TouchableOpacity>
  );
};

export default TabBarButton;
