import '@react-navigation/native';

// Types
import {AppTheme} from '@theme/types';

declare module '@react-navigation/native' {
  export function useTheme(): AppTheme;
}
