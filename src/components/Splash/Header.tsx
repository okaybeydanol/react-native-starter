import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Store
import {useAppDispatch, useAppSelector} from '@store/index';
import {setTheme} from '@store/slices/theme';
import {setLogin} from '@store/slices/user';

// Constants
import {fontFamily} from '@constants/index';

// Theme
import {MyTheme} from '@theme/types';

// Types
import {SplashHeaderParams} from './types';

const SplashHeader = ({setLoading}: SplashHeaderParams) => {
  const {colors, dark} = useTheme();
  const styles = React.useMemo(() => getStyles(colors), [colors]);
  const {t, i18n} = useTranslation('global');

  const isLogin = useAppSelector(state => state.user.isLogin);
  const dispatch = useAppDispatch();

  // Handle login and logout actions
  const authActionHandler = (status: boolean) => {
    setLoading(true);
    dispatch(setLogin({isLogin: status}));
  };

  // Change the language handler
  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');
  };

  // Change the theme handler
  const changeThemeHandler = () => {
    dispatch(setTheme({mode: dark ? 'light' : 'dark'}));
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => authActionHandler(!isLogin)}
        style={styles.button}>
        <Text style={styles.text}>
          {isLogin ? t('auth.logout') : t('auth.login')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeThemeHandler} style={styles.button}>
        <Text style={styles.text}>
          {dark ? t('theme.dark') : t('theme.light')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeLanguageHandler} style={styles.button}>
        <Text style={styles.text}>
          {i18n.language === 'en' ? t('lang.en') : t('lang.tr')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashHeader;

const getStyles = (colors: MyTheme['colors']) =>
  StyleSheet.create({
    header: {
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: colors.gray[600],
      padding: 12,
      margin: 8,
      borderRadius: 8,
      width: '25%',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      color: colors.gray[100],
      fontFamily: fontFamily.semiBold,
    },
  });
