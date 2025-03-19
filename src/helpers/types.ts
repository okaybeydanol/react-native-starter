import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface SvgHelperProps {
  code: string;
  style?: StyleProp<ViewStyle>;
  props?: SvgProps;
}
