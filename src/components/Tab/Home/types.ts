import {FlatNamespace} from 'i18next';

// Types
import {NestedDotNotationPaths} from '@utils/object';
import {TabStackScreenProps} from '@routes/types';

// Resources
import {resources} from '@i18n/index';

// Global
type TKeys<K extends FlatNamespace> = NestedDotNotationPaths<
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
export interface HomeMainProps extends TabStackScreenProps<'HomeScreen'> {}
export interface CommonViewProps<K extends FlatNamespace> {
  ns: K;
  tKey: TKeys<K>;
}
