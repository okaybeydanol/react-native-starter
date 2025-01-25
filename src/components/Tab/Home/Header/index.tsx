import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

// Store
import {useAppDispatch, useAppSelector} from '@store/index';
import {setTheme} from '@store/slices/theme';
import {setLogin} from '@store/slices/user';

// Types
import {HomeHeaderButtonProps, HomeHeaderParams} from '../types';

// Styles
import getStyles from './styles';

// Components
import HomeHeaderButton from './Button';

const HomeHeader = ({setLoading}: HomeHeaderParams) => {
  const {colors, dark} = useTheme();
  const styles = React.useMemo(() => getStyles(colors), [colors]);
  const {i18n} = useTranslation('global');

  const isLogin = useAppSelector(state => state.user.isLogin);
  const dispatch = useAppDispatch();

  // Handle login and logout actions
  const authActionHandler = () => {
    setLoading(true);
    dispatch(setLogin({isLogin: !isLogin}));
  };

  // Change the language handler
  const changeLanguageHandler = () => {
    const newLanguage = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  // Change the theme handler
  const changeThemeHandler = () => {
    dispatch(setTheme({mode: dark ? 'light' : 'dark'}));
  };

  const buttons: HomeHeaderButtonProps[] = [
    {
      onPress: authActionHandler,
      condition: isLogin,
      keys: ['auth.logout', 'auth.login'],
    },
    {
      onPress: changeThemeHandler,
      condition: dark,
      keys: ['theme.light', 'theme.dark'],
    },
    {
      onPress: changeLanguageHandler,
      condition: i18n.language === 'en',
      keys: ['lang.tr', 'lang.en'],
    },
  ];

  const renderButtons = (button: HomeHeaderButtonProps) => (
    <HomeHeaderButton key={button.keys.join('-')} {...button} />
  );

  return <View style={styles.header}>{buttons.map(renderButtons)}</View>;
};

export default HomeHeader;
