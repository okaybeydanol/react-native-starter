// React & React Native
import React from 'react';
import { TouchableOpacity } from 'react-native';

// Third-Party Libraries
import { useTheme } from '@react-navigation/native';

// Internal Imports (Absolute)
import { getTabSvg } from '@components/tabbar/helpers/tabBarSvg';

// Parent Directory Imports (Relative)
import type { StateRoutesMapParams } from '../types';

// Sibling Directory Imports (Relative)
import createStyles from './styles';

const TabBarButton = ({ state, navigation, index }: StateRoutesMapParams) => {
  const { colors } = useTheme();
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
      style={styles.container}
    >
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
