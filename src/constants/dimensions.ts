// React & React Native
import {Dimensions, StatusBar} from 'react-native';

const {width: wWidth, height: wHeight} = Dimensions.get('window');
const {width: sWidth, height: sHeight} = Dimensions.get('screen');

export const WINDOW_WIDTH = wWidth;
export const WINDOW_HEIGHT = wHeight;

export const SCREEN_WIDTH = sWidth;
export const SCREEN_HEIGHT = sHeight;

export const HEADER_HEIGHT = 44;
export const TAB_BAR_HEIGHT = 64;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight ?? 0;
