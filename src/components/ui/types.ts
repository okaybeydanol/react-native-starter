// React & React Native
import type {
  ActivityIndicatorProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

// Third-Party Libraries
import type { FlatNamespace } from 'i18next';
import type { SvgProps } from 'react-native-svg';

// Internal Imports (Absolute)
import type { resources } from '@i18n/i18n';
import type { AppTheme } from '@theme/types';
import type { NestedKeysDotNotationPaths } from '@utils/object';

export type TKeys<K extends FlatNamespace> = NestedKeysDotNotationPaths<
  (typeof resources.tr)[K]
>;

export type ColorPath = NestedKeysDotNotationPaths<AppTheme['colors']>;
export interface LoadingIndicatorProps extends ActivityIndicatorProps {
  color: ColorPath;
  containerStyle?: StyleProp<ViewStyle>;
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
