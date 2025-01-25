import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

// Styles
import getStyles from './styles';

// Types
import {HomeHeaderButtonProps} from '../types';

const HomeHeaderButton = ({
  onPress,
  condition,
  keys,
}: HomeHeaderButtonProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getStyles(colors), [colors]);
  const {t} = useTranslation('global');

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{condition ? t(keys[0]) : t(keys[1])}</Text>
    </TouchableOpacity>
  );
};

export default HomeHeaderButton;
