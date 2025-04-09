// Third-Party Libraries
import {useQuery} from '@tanstack/react-query';

// Internal Imports (Absolute)
import {getAllUsers} from '@query/api/apis';
import {queryKeys} from '@query/api/keys';
import type {UsersResponse} from '@query/api/types';

export const useUsers = () => {
  return useQuery<UsersResponse>({
    queryKey: queryKeys.users(),
    queryFn: getAllUsers,
  });
};
