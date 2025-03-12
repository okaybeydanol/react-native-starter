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
import CommonView from './CommonView';

// Styles
import getStyles from './styles';

// Types
import {HomeMainProps} from '../types';

const HomeMain = ({}: HomeMainProps) => {
  const {colors} = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  const [triggerGetAll, {data, isError, isLoading, isFetching}] =
    useLazyGetAllQuery();

  const fetchData = useCallback(() => {
    if (isLoggedIn) {
      try {
        triggerGetAll();
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    }
  }, [isLoggedIn, triggerGetAll]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderItem = useCallback(
    ({item}: {item: Product}) => <ProductListItem item={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: Product, index: number) => `${item.id}-${item.brand}-${index}`,
    [],
  );

  const renderContent = useMemo(() => {
    if (!isLoggedIn) {
      return <CommonView ns="global" tKey="loginToView" />;
    }
    if (isLoading || isFetching) {
      return <LoadingIndicator color={'tertiary.light'} />;
    }
    if (isError) {
      return <CommonView ns="data" tKey="error" />;
    }
    if (!data?.products?.length) {
      return <CommonView ns="data" tKey="noData" />;
    }

    // *IMPORTANT : build .env file and add it to the project don't forget
    return (
      // TODO: Add list empty component
      // TODO: Add better list component created by me
      <FlatList
        data={data.products.concat(data.products).concat(data.products)}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    );
  }, [
    data,
    isError,
    isFetching,
    isLoading,
    isLoggedIn,
    keyExtractor,
    renderItem,
    styles.contentContainer,
  ]);

  return <View style={styles.container}>{renderContent}</View>;
};

export default HomeMain;
