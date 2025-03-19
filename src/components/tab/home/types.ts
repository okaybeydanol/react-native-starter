import {FlatNamespace} from 'i18next';

// Types
import {NestedKeysDotNotationPaths} from '@utils/object';
import {TabStackScreenProps} from '@navigation/types';

// Resources
import {resources} from '@i18n/index';

// Global
export type TKeys<K extends FlatNamespace> = NestedKeysDotNotationPaths<
  (typeof resources.tr)[K]
>;

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
