// Third-Party Libraries
import type {Theme} from '@react-navigation/native';

export interface AppTheme extends Theme {
  colors: Theme['colors'] & {
    secondary: string;
    splashBackground: string;
    tertiary: {
      light: string;
      main: string;
      dark: string;
    };
    danger: {
      light: string;
      main: string;
      dark: string;
    };
    success: {
      light: string;
      main: string;
      dark: string;
    };
    gray: {
      900: string;
      800: string;
      700: string;
      600: string;
      500: string;
      400: string;
      300: string;
      200: string;
      100: string;
      50: string;
      0: string;
    };
    constant: {
      white: string;
      black: string;
    };
  };
}
