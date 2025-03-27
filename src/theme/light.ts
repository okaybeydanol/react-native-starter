// Third-Party Libraries
import {DefaultTheme} from '@react-navigation/native';

// Sibling Directory Imports (Relative)
import type {AppTheme} from './types';

export const lightTheme: AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFF',
    background: '#FFFFFF',
    splashBackground: '#6979F8',
    card: '#F8F9FA',
    text: '#000000',
    border: '#D7DCE0',
    notification: '#FDC500',

    secondary: '#000000',
    tertiary: {
      light: '#FFCF71',
      main: '#FDC500',
      dark: '#CE9400',
    },
    danger: {
      light: '#FF6161',
      main: '#D10000',
      dark: '#880000',
    },
    success: {
      light: '#72F195',
      main: '#18B042',
      dark: '#00601B',
    },
    gray: {
      900: '#000000',
      800: '#151617',
      700: '#30353A',
      600: '#3F4752',
      500: '#687582',
      400: '#8593A0',
      300: '#A3AFBA',
      200: '#BAC2CA',
      100: '#D7DCE0',
      50: '#ECF0F5',
      0: '#FFFFFF',
    },
    constant: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
};
