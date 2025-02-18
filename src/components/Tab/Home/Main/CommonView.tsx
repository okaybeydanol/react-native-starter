import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {FlatNamespace} from 'i18next';

// Utils
import {NestedDotNotationPaths} from '@utils/object';

// I18n
import {resources} from '@i18n/index';

// Styles
import getStyles from './styles';

interface TranslationKeys<K extends FlatNamespace> {
  key: NestedDotNotationPaths<(typeof resources.tr)[K]>;
  ns: K;
}

const CommonView = <K extends FlatNamespace>({ns, key}: TranslationKeys<K>) => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const {t} = useTranslation(ns as FlatNamespace);

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Text numberOfLines={1} style={styles.text}>
          {t(key)}
        </Text>
      </View>
    </View>
  );
};

export default CommonView;
