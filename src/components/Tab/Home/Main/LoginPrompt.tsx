import {useTheme} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

// Styles
import getStyles from './styles';

const LoginPrompt = () => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const {t} = useTranslation('global');

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Text numberOfLines={1} style={styles.text}>
          {t('loginToView')}
        </Text>
      </View>
    </View>
  );
};

export default LoginPrompt;
