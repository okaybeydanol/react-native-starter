import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// Constants
import {windowHeight, windowWidth} from '@constants/dimensions';

// Images
import eterationLogo from '@assets/images/eteration-logo.png';

// Types
import {fontFamily} from '@constants/typography';
import {AppTheme} from '@theme/types';
import {SplashScreenProps} from './types';

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('TabNavigator', {screen: 'HomeScreen'});
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={eterationLogo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>We Are Your Custom Software Experts</Text>
          <Text style={styles.description}>
            In the fast evolving world of today’s business, ETERATION creates
            solutions and services that enable companies stay ahead of
            competition in ever changing markets.
          </Text>
        </View>
      </View>
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>
          © Copyright Brainstorming 2025. All rights reserved.
        </Text>
      </View>
    </>
  );
};

const createStyles = (colors: AppTheme['colors']) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: windowWidth * 1.3,
      height: windowHeight * 0.6,
      backgroundColor: colors.splashBackground,
      borderBottomLeftRadius: 300,
      borderBottomRightRadius: 300,
    },
    logo: {
      width: 150,
      height: 150,
    },
    textContainer: {
      marginTop: 50,
      backgroundColor: colors.background,
    },
    title: {
      color: colors.text,
      fontFamily: fontFamily.bold,
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'center',
    },
    description: {
      fontFamily: fontFamily.medium,
      color: colors.text,
      fontSize: 12,
      textAlign: 'center',
      paddingHorizontal: 40,
    },
    copyrightContainer: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    copyrightText: {
      fontFamily: fontFamily.medium,
      color: colors.text,
      fontSize: 12,
      textAlign: 'center',
    },
  });

export default SplashScreen;
