// Third-Party Libraries
import { DarkTheme } from '@react-navigation/native';

// Sibling Directory Imports (Relative)
import type { AppTheme } from './types';

export const darkTheme: AppTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#000000',
    background: '#151617',
    splashBackground: '#3A4B8C',
    card: '#30353A',
    text: '#FFFFFF',
    border: '#3F4752',
    notification: '#FDC500',

    secondary: '#FFFFFF',
    tertiary: {
      light: '#FFCF71',
      main: '#FDC500',
      dark: '#CE9400',
    },
    danger: {
      light: '#A45454',
      main: '#D10000',
      dark: '#880000',
    },
    success: {
      light: '#72F195',
      main: '#18B042',
      dark: '#00601B',
    },
    gray: {
      900: '#FFFFFF',
      800: '#ECF0F5',
      700: '#D7DCE0',
      600: '#BAC2CA',
      500: '#A3AFBA',
      400: '#8593A0',
      300: '#687582',
      200: '#3F4752',
      100: '#30353A',
      50: '#151617',
      0: '#000000',
    },
    constant: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
};
