import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Store
import {useAppDispatch, useAppSelector} from '@store/index';
import {setTheme} from '@store/slices/theme';
import {setLogin} from '@store/slices/user';

// Components
import HomeHeaderButton from './Button';

// Types
import {HomeHeaderButtonProps, HomeHeaderParams} from '../types';

// Styles
import getStyles from './styles';

const HomeHeader = ({setLoading}: HomeHeaderParams) => {
  const {colors, dark} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const {i18n} = useTranslation();
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const dispatch = useAppDispatch();

  const buttons = useMemo<HomeHeaderButtonProps[]>(
    () => [
      {
        onPress: () => {
          setLoading(true);
          dispatch(setLogin({isLoggedIn: !isLoggedIn}));
        },
        condition: isLoggedIn,
        keys: ['auth.logout', 'auth.login'],
      },
      {
        onPress: () => dispatch(setTheme({mode: dark ? 'light' : 'dark'})),
        condition: dark,
        keys: ['theme.light', 'theme.dark'],
      },
      {
        onPress: () =>
          i18n.changeLanguage(i18n.language === 'en' ? 'tr' : 'en'),
        condition: i18n.language === 'en',
        keys: ['lang.tr', 'lang.en'],
      },
    ],
    [isLoggedIn, dark, i18n, setLoading, dispatch],
  );

  return (
    <View style={styles.header}>
      {buttons.map((button, index) => (
        <HomeHeaderButton key={`header-button-${index}`} {...button} />
      ))}
    </View>
  );
};

export default HomeHeader;
