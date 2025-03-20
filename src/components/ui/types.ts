import type {ActivityIndicatorProps, StyleProp, ViewStyle} from 'react-native';
import type {FlatNamespace} from 'i18next';
import type {SvgProps} from 'react-native-svg';

// Types
import type {AppTheme} from '@theme/types';
import type {TKeys} from '@components/tab/home/content/types';

// Utils
import type {NestedKeysDotNotationPaths} from 'types/object';

export type ColorPath = NestedKeysDotNotationPaths<AppTheme['colors']>;
export interface LoadingIndicatorProps extends ActivityIndicatorProps {
  color: ColorPath;
}

export interface GenericViewProps<K extends FlatNamespace> {
  ns: K;
  tKey: TKeys<K>;
}

export type ButtonConfig = {
  icon: string;
  iconProps?: SvgProps;
  iconStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export type GlobalHeaderProps = {
  title?: string;
  titleStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  showRightButton?: boolean;
  showLeftButton?: boolean;
  rightButtonConfig?: ButtonConfig;
  leftButtonConfig?: ButtonConfig;
};

export interface RadioButtonProps {
  onPress: () => void;
  isActive: boolean;
}
