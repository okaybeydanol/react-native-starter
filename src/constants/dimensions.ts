import {Dimensions, StatusBar} from 'react-native';

const {width: wWidth, height: wHeight} = Dimensions.get('window');
const {width: sWidth, height: sHeight} = Dimensions.get('screen');

export const windowWidth = wWidth;
export const windowHeight = wHeight;

export const screenWidth = sWidth;
export const screenHeight = sHeight;

export const headerHeight = 44;
export const tabBarHeight = 64;
export const statusBarHeight = StatusBar.currentHeight ?? 0;
