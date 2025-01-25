// Types
import {NestedKeys} from '@utils/types';

// Resources
import {resources} from '@i18n/index';

type TranslationKeys = NestedKeys<(typeof resources)['tr']['global']>;
type KeyPair = [TranslationKeys, TranslationKeys];

export interface HomeHeaderButtonProps {
  onPress: () => void;
  condition: boolean;
  keys: KeyPair;
}

export interface HomeHeaderParams {
  setLoading: (status: boolean) => void;
}

export interface HomeMainProps {
  isLoading: boolean;
  setLoading: (status: boolean) => void;
}
