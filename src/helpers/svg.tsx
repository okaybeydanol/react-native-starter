import React from 'react';
import {StyleSheet} from 'react-native';
import {SvgProps} from 'react-native-svg';

// Type
import {SvgHelperProps} from './types';

// Tab Svg
import HomeSvg from '@components/svgs/tab/Home';
import ProfileSvg from '@components/svgs/tab/Profile';

const tabSvgs: {[key: string]: React.FC<SvgProps>} = {
  HomeScreen: HomeSvg,
  ProfileScreen: ProfileSvg,
};

const getTabSvg = ({code, style, props}: SvgHelperProps) => {
  const styles = StyleSheet.flatten(style);
  if (code in tabSvgs) {
    const FlagComponent = tabSvgs[code];
    return <FlagComponent {...props} style={styles} />;
  }
};

export {getTabSvg};
