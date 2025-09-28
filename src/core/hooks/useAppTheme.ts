// React & React Native
import { useColorScheme } from 'react-native';

// Internal Imports (Absolute)
import { useAppSelector } from '@store/store';
import { darkTheme } from '@theme/dark';
import { lightTheme } from '@theme/light';

const useAppTheme = () => {
  const themePreference = useAppSelector(state => state.theme.mode);
  const systemColorScheme = useColorScheme() ?? 'dark';

  const themes = { light: lightTheme, dark: darkTheme };
  return themes[
    themePreference === 'system' ? systemColorScheme : themePreference
  ];
};

export default useAppTheme;
