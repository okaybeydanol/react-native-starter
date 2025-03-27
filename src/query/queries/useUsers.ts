// Third-Party Libraries
import {useQuery} from '@tanstack/react-query';

// Internal Imports (Absolute)
import {getAllUsers} from '@query/api/apis';
import {queryKeys} from '@query/api/keys';

export const useUsers = () => {
  return useQuery({
    queryKey: queryKeys.users(),
    queryFn: getAllUsers,
  });
};
