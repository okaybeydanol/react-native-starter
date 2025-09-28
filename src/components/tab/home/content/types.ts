// Third-Party Libraries
import type { FlatNamespace } from 'i18next';

// Internal Imports (Absolute)
import type { TKeys } from '@components/ui/types';
import type { TabStackScreenProps } from '@navigation/types';

// Tab Home Header
export interface HomeHeaderParams extends TabStackScreenProps<'HomeScreen'> {}
export interface HomeHeaderButtonProps<K extends FlatNamespace> {
  onPress: () => void;
  condition: boolean;
  tKeys: [TKeys<K>, TKeys<K>];
  ns: K;
}

// Tab Home Main
export interface HomeContentProps extends TabStackScreenProps<'HomeScreen'> {}
