import React, {useCallback, useEffect, useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, FlatList} from 'react-native';

// APIs
import {useLazyGetAllQuery} from '@store/api';

// Stores
import {useAppSelector} from '@store/index';
import {Product} from '@store/api/types';

// Components
import ProductListItem from './ProductListItem';
import LoadingIndicator from '@components/UI/LoadingIndicator';
import LoginPrompt from './LoginPrompt';
import ErrorView from './ErrorView';
import NoDataView from './NoDataView';

// Styles
import getStyles from './styles';

// Types
import {HomeMainProps} from '../types';

const HomeMain = ({isLoading, setLoading}: HomeMainProps) => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const [triggerGetAll, {data, error}] = useLazyGetAllQuery();

  useEffect(() => {
    const fetchData = async () => {
      if (isLoggedIn) {
        try {
          await triggerGetAll().unwrap();
        } catch (err) {
          console.error('Failed to fetch products:', err);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLoggedIn, setLoading, triggerGetAll]);

  const renderItem = useCallback(
    ({item}: {item: Product}) => <ProductListItem item={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: Product) => `${item.id}-${item.brand}`,
    [],
  );

  const renderContent = () => {
    if (isLoading) {
      return <LoadingIndicator color={'tertiary.light'} />;
    }
    if (!isLoggedIn) {
      return <LoginPrompt />;
    }
    if (error) {
      return <ErrorView />;
    }
    if (!data?.products?.length) {
      return <NoDataView />;
    }

    return (
      <FlatList
        data={data.products.concat(data.products).concat(data.products)}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default HomeMain;
