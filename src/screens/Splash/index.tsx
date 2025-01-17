import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Stores
import {useAppDispatch, useAppSelector} from '@store/index';
import {setLogin} from '@store/slices/user';

// Hooks
import useLoading from '@hooks/useLoading';

// Styles
import styles from './styles';

// APIs
import {useLazyGetAllQuery} from '@store/api';

const SplashScreen = () => {
  // Access the login state from the Redux store
  const isLogin = useAppSelector(state => state.user.isLogin);
  const dispatch = useAppDispatch();

  // API hooks
  const [triggerGetAll, {data, isFetching}] = useLazyGetAllQuery();

  // Custom hook to manage the loading state
  const {isLoading, setLoading} = useLoading();

  // Simulate initial loading when the app starts
  useEffect(() => {
    if (isLogin) {
      triggerGetAll().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  // Handle login and logout actions
  const handleAuthAction = (status: boolean) => {
    dispatch(setLogin({isLogin: status}));
    if (status) {
      triggerGetAll();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => handleAuthAction(!isLogin)}
          style={styles.button}>
          <Text style={styles.text}>{isLogin ? 'Logout' : 'Login'}</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.scrollContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : isLogin ? (
          isFetching ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : data && data.products ? (
            <>
              {data.products.map(product => (
                <View key={product.id} style={styles.productContainer}>
                  <Text numberOfLines={1} style={styles.text}>
                    {product.title} ({product.meta.barcode})
                  </Text>
                </View>
              ))}
            </>
          ) : (
            <Text style={styles.text}>No data available</Text>
          )
        ) : (
          <Text style={styles.text}>Please log in to view data</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;
