// React & React Native
import React from 'react';
import {StyleSheet} from 'react-native';

// Third-Party Libraries
import type {SvgProps} from 'react-native-svg';

// Internal Imports (Absolute)
import GlobalBackSvg from '@components/svgs/global/Back';
import GlobalCloseSvg from '@components/svgs/global/Close';
import GlobalSettingsSvg from '@components/svgs/global/Settings';

// Sibling Directory Imports (Relative)
import type {SvgHelperProps} from './types';

const globalSvg: {[key: string]: React.FC<SvgProps>} = {
  settings: GlobalSettingsSvg,
  back: GlobalBackSvg,
  close: GlobalCloseSvg,
};

const getGlobalSvg = ({code, style, props}: SvgHelperProps) => {
  const styles = StyleSheet.flatten(style);
  if (code in globalSvg) {
    const FlagComponent = globalSvg[code];
    return <FlagComponent {...props} style={styles} />;
  }
};

export {getGlobalSvg};
