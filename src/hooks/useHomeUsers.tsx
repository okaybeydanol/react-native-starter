// React & React Native
import React, {useCallback} from 'react';

// Internal Imports (Absolute)
import HomeUsersCard from '@components/tab/home/users-card/HomeUsersCard';
import {useGetAllUsersQuery} from '@store/api/homeApi';
import type {User} from '@store/api/types';

const useHomeUsers = () => {
  const {isLoading, isError, isFetching, data} = useGetAllUsersQuery();

  const renderItem = useCallback(({item}: {item: User}) => {
    return <HomeUsersCard user={item} />;
  }, []);

  const keyExtractor = useCallback(
    (item: User, index: number) => `${item.id}-${item.firstName}-${index}`,
    [],
  );

  return {isLoading, isError, isFetching, data, renderItem, keyExtractor};
};

export default useHomeUsers;
