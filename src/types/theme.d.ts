import '@react-navigation/native';

// Types
import type {AppTheme} from '@theme/types';

declare module '@react-navigation/native' {
  export function useTheme(): AppTheme;
}
