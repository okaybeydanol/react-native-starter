import React, {memo, useMemo} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {FlatNamespace} from 'i18next';

// Types
import {HomeHeaderButtonProps} from '../types';

// Styles
import getStyles from './styles';

const HomeHeaderButton = <K extends FlatNamespace>({
  onPress,
  condition,
  ns,
  tKeys,
}: HomeHeaderButtonProps<K>) => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const {t} = useTranslation<FlatNamespace>(ns);

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{t(condition ? tKeys[0] : tKeys[1])}</Text>
    </TouchableOpacity>
  );
};

export default memo(
  HomeHeaderButton,
  (p, n) => p.condition === n.condition,
) as typeof HomeHeaderButton;
