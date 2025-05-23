declare module '*.svg' {
  import type {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
