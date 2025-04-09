// React & React Native
import * as React from 'react';

// Third-Party Libraries
import type {SvgProps} from 'react-native-svg';
import Svg, {Path} from 'react-native-svg';

const TabHomeSvg = (props: SvgProps) => {
  return (
    <Svg width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
      <Path d="M10 .736S3.976 5.936.61 8.752a1.014 1.014 0 00-.348.748.974.974 0 00.974.974h1.948v6.816a.974.974 0 00.973.974H7.08a.974.974 0 00.973-.974v-3.895h3.896v3.895a.974.974 0 00.973.974h2.922a.974.974 0 00.974-.974v-6.816h1.947a.974.974 0 00.974-.974.955.955 0 00-.373-.748C16.022 5.936 10 .736 10 .736z" />
    </Svg>
  );
};

export default TabHomeSvg;
