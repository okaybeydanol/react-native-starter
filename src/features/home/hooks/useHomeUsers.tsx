// React & React Native
import {useCallback} from 'react';

// Parent Directory Imports (Relative)
import {useGetAllUsersQuery} from '../api/homeApi';
import type {User} from '../api/types';
import HomeUsersCard from '../components/users-card/HomeUsersCard';

const useHomeUsers = () => {
  const {isLoading, isError, isFetching, data} = useGetAllUsersQuery();

  const renderItem = useCallback(
    ({item}: {item: User}) => <HomeUsersCard user={item} />,
    [],
  );

  const keyExtractor = useCallback(
    (item: User, index: number) => `${item.id}-${item.firstName}-${index}`,
    [],
  );

  return {isLoading, isError, isFetching, data, renderItem, keyExtractor};
};

export default useHomeUsers;
