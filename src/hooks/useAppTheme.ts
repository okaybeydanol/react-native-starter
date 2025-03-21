import {useColorScheme} from 'react-native';

// Stores
import {useThemeStore} from '@query/store/slices/theme';

// Colors
import {darkTheme} from '@theme/dark';
import {lightTheme} from '@theme/light';

const useAppTheme = () => {
  const themePreference = useThemeStore(store => store.mode);
  const systemColorScheme = useColorScheme() ?? 'dark';

  const themes = {light: lightTheme, dark: darkTheme};
  return themes[
    themePreference === 'system' ? systemColorScheme : themePreference
  ];
};

export default useAppTheme;
