import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@react-navigation/native';

// Stores
import {useAppSelector} from '@store/index';

// Hooks
import useLoading from '@hooks/useLoading';

// Styles
import getStyles from './styles';

// APIs
import {useLazyGetAllQuery} from '@store/api';
import SplashHeader from '@components/Splash/Header';

const SplashScreen = () => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getStyles(colors), [colors]);

  // Access the login state from the Redux store
  const isLogin = useAppSelector(state => state.user.isLogin);

  const {t} = useTranslation(['global', 'data']);

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

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header Section */}
      <SplashHeader setLoading={setLoading} />

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
            <View style={styles.productContainer}>
              <Text numberOfLines={1} style={styles.text}>
                {t('noData', {ns: 'data'})}
              </Text>
            </View>
          )
        ) : (
          <View style={styles.productContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {t('loginToView')}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;
