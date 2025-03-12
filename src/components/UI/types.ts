import {ActivityIndicatorProps} from 'react-native';

// Types
import {MyTheme} from '@theme/types';

// Utils
import {NestedDotNotationPaths} from '@utils/object';

export type ColorPath = NestedDotNotationPaths<MyTheme['colors']>;
export interface LoadingIndicatorProps extends ActivityIndicatorProps {
  color: ColorPath;
}
