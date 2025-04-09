// React & React Native
import * as React from 'react';

// Third-Party Libraries
import type {SvgProps} from 'react-native-svg';
import Svg, {Path} from 'react-native-svg';

const GlobalBackSvg = (props: SvgProps) => {
  return (
    <Svg width={8} height={14} viewBox="0 0 8 14" fill="none" {...props}>
      <Path
        d="M7 13.143l-6-6 6-6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default GlobalBackSvg;
