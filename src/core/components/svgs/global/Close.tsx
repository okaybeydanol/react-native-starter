// React & React Native
import * as React from 'react';

// Third-Party Libraries
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const GlobalCloseSvg = (props: SvgProps) => {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
      <Path
        d="M12.599 1.2l-12 12m0-12l12 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default GlobalCloseSvg;
