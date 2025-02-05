import {Dimensions, StatusBar} from 'react-native';

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

export const width = WINDOW_WIDTH;
export const height = WINDOW_HEIGHT;

export const screenWidth = SCREEN_WIDTH;
export const screenHeight = SCREEN_HEIGHT;

export const headerHeight = 44;
export const tabBarHeight = 64;
export const statusBarHeight = StatusBar.currentHeight ?? 0;
