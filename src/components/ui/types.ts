import {ActivityIndicatorProps} from 'react-native';
import {FlatNamespace} from 'i18next';

// Types
import {AppTheme} from '@theme/types';
import {TKeys} from '@components/tab/home/types';

// Utils
import {NestedKeysDotNotationPaths} from '@utils/object';

export type ColorPath = NestedKeysDotNotationPaths<AppTheme['colors']>;
export interface LoadingIndicatorProps extends ActivityIndicatorProps {
  color: ColorPath;
}

export interface GenericViewProps<K extends FlatNamespace> {
  ns: K;
  tKey: TKeys<K>;
}
