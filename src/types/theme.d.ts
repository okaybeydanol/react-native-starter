import '@react-navigation/native';

// Types
import {MyTheme} from '@theme/types';

declare module '@react-navigation/native' {
  export function useTheme(): MyTheme;
}
