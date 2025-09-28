// React & React Native
import type { StyleProp, ViewStyle } from 'react-native';

// Third-Party Libraries
import type { SvgProps } from 'react-native-svg';

export interface SvgHelperProps {
  code: string;
  style?: StyleProp<ViewStyle>;
  props?: SvgProps;
}
