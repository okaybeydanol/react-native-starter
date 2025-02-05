import React, {useMemo} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Types
import {HomeHeaderButtonProps} from '../types';

// Styles
import getStyles from './styles';

const HomeHeaderButton = ({
  onPress,
  condition,
  keys,
}: HomeHeaderButtonProps) => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const {t} = useTranslation('global');

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{t(condition ? keys[0] : keys[1])}</Text>
    </TouchableOpacity>
  );
};

export default HomeHeaderButton;
