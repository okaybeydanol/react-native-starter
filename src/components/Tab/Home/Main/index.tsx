import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';

// APIs
import {useLazyGetAllQuery} from '@store/api';

// Stores
import {useAppSelector} from '@store/index';

// Styles
import getStyles from './styles';

// Types
import {HomeMainProps} from '../types';
import {Product} from '@store/api/types';

const HomeMain = ({isLoading, setLoading}: HomeMainProps) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getStyles(colors), [colors]);

  const {t} = useTranslation(['global', 'data']);

  // Access the login state from the Redux store
  const isLogin = useAppSelector(state => state.user.isLogin);

  // API hooks
  const [triggerGetAll, {data}] = useLazyGetAllQuery();

  // Simulate initial loading when the app starts
  useEffect(() => {
    if (isLogin) {
      triggerGetAll().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const renderItem = ({item}: {item: Product}) => (
    <View style={styles.productContainer}>
      <Text numberOfLines={1} style={styles.text}>
        {item.title} ({item.meta.barcode})
      </Text>
    </View>
  );

  return (
    <>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.gray[600]} />
        </View>
      ) : isLogin ? (
        data && data.products ? (
          <>
            <FlatList
              data={data.products.concat(data.products).concat(data.products)}
              contentContainerStyle={styles.contentContainer}
              keyExtractor={(item, index) => `${item.id}${index}`}
              renderItem={renderItem}
            />
          </>
        ) : (
          <View style={styles.container}>
            <View style={styles.productContainer}>
              <Text numberOfLines={1} style={styles.text}>
                {t('noData', {ns: 'data'})}
              </Text>
            </View>
          </View>
        )
      ) : (
        <View style={styles.container}>
          <View style={styles.productContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {t('loginToView')}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default HomeMain;
