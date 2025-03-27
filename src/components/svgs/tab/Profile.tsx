// React & React Native
import * as React from 'react';

// Third-Party Libraries
import type {SvgProps} from 'react-native-svg';
import Svg, {Path} from 'react-native-svg';

const TabProfileSvg = (props: SvgProps) => {
  return (
    <Svg width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
      <Path d="M10 4.811a3.556 3.556 0 100 7.111 3.556 3.556 0 000-7.111z" />
      <Path d="M10 .544a9.956 9.956 0 109.956 9.956A9.967 9.967 0 0010 .544zm5.683 16.303a3.557 3.557 0 00-3.55-3.503H7.867a3.557 3.557 0 00-3.55 3.504 8.533 8.533 0 1111.367 0z" />
    </Svg>
  );
};

export default TabProfileSvg;
