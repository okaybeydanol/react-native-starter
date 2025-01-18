import '@react-navigation/native';

// Type
import {MyTheme} from '@theme/types';

declare module '@react-navigation/native' {
  export function useTheme(): MyTheme;
}
