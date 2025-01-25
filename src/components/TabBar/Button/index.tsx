import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

// Types
import {StateRoutesMapParams} from '../types';

// Helpers
import {tabSvgHelper} from '@helpers/svg';

// Styles
import getStyles from './styles';

const TabBarButton = ({state, navigation, index}: StateRoutesMapParams) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getStyles(colors), [colors]);

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
      {tabSvgHelper({
        code: route.name,
        props: {
          fill: isFocused ? colors.gray[600] : colors.gray[300],
        },
      })}
    </TouchableOpacity>
  );
};

export default TabBarButton;
