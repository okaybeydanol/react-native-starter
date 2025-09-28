// React & React Native
import React, { useCallback } from 'react';

// Internal Imports (Absolute)
import HomeUsersCard from '@components/tab/home/users-card/HomeUsersCard';
import type { User } from '@query/api/types';
import { useUsers } from '@query/queries/useUsers';

const useHomeUsers = () => {
  const { isLoading, isError, isFetching, data } = useUsers();

  const renderItem = useCallback(({ item }: { item: User }) => {
    return <HomeUsersCard user={item} />;
  }, []);

  const keyExtractor = useCallback(
    (item: User, index: number) => `${item.id}-${item.firstName}-${index}`,
    [],
  );

  return { isLoading, isError, isFetching, data, renderItem, keyExtractor };
};

export default useHomeUsers;
