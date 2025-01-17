import React, {useEffect, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Stores
import {useAppDispatch, useAppSelector} from '@store/index';
import {setLogin} from '@store/slices/user';

// Hooks
import useLoading from '@hooks/useLoading';

// Styles
import styles from './styles';

const SplashScreen = () => {
  // Access the login state from the Redux store
  const isLogin = useAppSelector(state => state.user.isLogin);
  const dispatch = useAppDispatch();

  // Custom hook to manage the loading state
  const {isLoading, startLoading, stopLoading} = useLoading();

  // Compute whether the app is ready based on the loading state
  const isReady = useMemo(() => !isLoading, [isLoading]);

  // Simulate a loading effect for 1 second when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => stopLoading(), 1000);
    return () => clearTimeout(timer);
  }, [stopLoading]);

  // Handle the login action
  const handleLogin = () => {
    startLoading();
    dispatch(setLogin({isLogin: true}));
  };

  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading...</Text>}

      {isReady && (
        <>
          {isLogin ? (
            <Text>SplashScreen</Text>
          ) : (
            <TouchableOpacity onPress={handleLogin}>
              <Text>Login</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default SplashScreen;
