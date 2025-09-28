// React & React Native
import React from 'react';
import { StyleSheet } from 'react-native';

// Third-Party Libraries
import type { SvgProps } from 'react-native-svg';

// Internal Imports (Absolute)
import GlobalBackSvg from '@components/svgs/global/Back';
import GlobalCloseSvg from '@components/svgs/global/Close';
import GlobalSettingsSvg from '@components/svgs/global/Settings';
import TabHomeSvg from '@components/svgs/tab/Home';
import TabProfileSvg from '@components/svgs/tab/Profile';

// Sibling Directory Imports (Relative)
import type { SvgHelperProps } from './types';

const tabSvgs: { [key: string]: React.FC<SvgProps> } = {
  HomeScreen: TabHomeSvg,
  ProfileScreen: TabProfileSvg,
};

const globalSvg: { [key: string]: React.FC<SvgProps> } = {
  settings: GlobalSettingsSvg,
  back: GlobalBackSvg,
  close: GlobalCloseSvg,
};

const getTabSvg = ({ code, style, props }: SvgHelperProps) => {
  const styles = StyleSheet.flatten(style);
  if (code in tabSvgs) {
    const FlagComponent = tabSvgs[code];
    return <FlagComponent {...props} style={styles} />;
  }
};

const getGlobalSvg = ({ code, style, props }: SvgHelperProps) => {
  const styles = StyleSheet.flatten(style);
  if (code in globalSvg) {
    const FlagComponent = globalSvg[code];
    return <FlagComponent {...props} style={styles} />;
  }
};

export { getTabSvg, getGlobalSvg };
