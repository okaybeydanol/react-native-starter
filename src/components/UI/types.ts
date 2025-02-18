import {MyTheme} from '@theme/types';
import {NestedDotNotationPaths} from '@utils/object';

export type ColorPath = NestedDotNotationPaths<MyTheme['colors']>;
export interface LoadingIndicatorProps {
  color: ColorPath;
}
