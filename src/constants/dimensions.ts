import {Dimensions, StatusBar} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export const WINDOW_WIDTH = windowWidth;
export const WINDOW_HEIGHT = windowHeight;

export const SCREEN_WIDTH = screenWidth;
export const SCREEN_HEIGHT = screenHeight;

export const HEADER_HEIGHT = 44;
export const TAB_BAR_HEIGHT = 64;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight ?? 0;
