// React & React Native
import React from 'react';
import { StyleSheet } from 'react-native';

// Third-Party Libraries
import type { SvgProps } from 'react-native-svg';

// Internal Imports (Absolute)
import TabHomeSvg from '@components/svgs/tab/Home';
import TabProfileSvg from '@components/svgs/tab/Profile';

// Parent Directory Imports (Relative)
import type { SvgHelperProps } from '../types';

const tabSvgs: { [key: string]: React.FC<SvgProps> } = {
  HomeScreen: TabHomeSvg,
  ProfileScreen: TabProfileSvg,
};

const getTabSvg = ({ code, style, props }: SvgHelperProps) => {
  const styles = StyleSheet.flatten(style);
  if (code in tabSvgs) {
    const FlagComponent = tabSvgs[code];
    return <FlagComponent {...props} style={styles} />;
  }
};

export { getTabSvg };
