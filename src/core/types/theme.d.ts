// Third-Party Libraries
import '@react-navigation/native';

// Internal Imports (Absolute)
import type {AppTheme} from '@theme/theme';

declare module '@react-navigation/native' {
  export function useTheme(): AppTheme;
}
