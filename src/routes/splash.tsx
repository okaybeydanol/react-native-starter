import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import {DEFAULT_NAVIGATOR_OPTIONS} from '@constants/navigationConfig';

// Types
import {SplashStack} from '@routes/types';

// Screens
import SplashScreen from '@screens/Splash';

const Splash = createNativeStackNavigator<SplashStack>();
const SplashNavigator = () => {
  return (
    <Splash.Navigator
      initialRouteName="SplashScreen"
      screenOptions={DEFAULT_NAVIGATOR_OPTIONS}>
      <Splash.Screen name="SplashScreen" component={SplashScreen} />
    </Splash.Navigator>
  );
};

export default SplashNavigator;
