import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Stores
import {useAppDispatch, useAppSelector} from '@store/index';
import {setTheme} from '@store/slices/theme';
import {setLogin} from '@store/slices/user';

// Components
import HomeHeaderButton from './Button';

// Types
import {HomeHeaderParams} from '../types';

// Styles
import getStyles from './styles';

const HomeHeader = ({}: HomeHeaderParams) => {
  const {colors, dark} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const {i18n} = useTranslation();
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const dispatch = useAppDispatch();

  const handlerAuth = () => {
    dispatch(setLogin({isLoggedIn: !isLoggedIn}));
  };

  const handlerTheme = () =>
    dispatch(setTheme({mode: dark ? 'light' : 'dark'}));

  const handlerLang = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en');

  return (
    <View style={styles.header}>
      <HomeHeaderButton
        onPress={handlerAuth}
        condition={isLoggedIn}
        ns="global"
        tKeys={['auth.logout', 'auth.login']}
      />
      <HomeHeaderButton
        onPress={handlerTheme}
        condition={dark}
        ns="global"
        tKeys={['theme.light', 'theme.dark']}
      />
      <HomeHeaderButton
        onPress={handlerLang}
        condition={i18n.language === 'en'}
        ns="global"
        tKeys={['lang.tr', 'lang.en']}
      />
    </View>
  );
};

export default HomeHeader;
