import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {FlatNamespace} from 'i18next';

// Types
import {CommonViewProps} from '../types';

// Styles
import getStyles from './styles';

const CommonView = <K extends FlatNamespace>({
  ns,
  tKey,
}: CommonViewProps<K>) => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const {t} = useTranslation<FlatNamespace>(ns);

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Text numberOfLines={1} style={styles.text}>
          {t(tKey)}
        </Text>
      </View>
    </View>
  );
};

export default CommonView;
