import {useQuery} from '@tanstack/react-query';

// APIs
import {getAllUsers} from '@query/api';

// Keys
import {queryKeys} from '@query/api/keys';

export const useUsers = () => {
  return useQuery({
    queryKey: queryKeys.users(),
    queryFn: getAllUsers,
  });
};
