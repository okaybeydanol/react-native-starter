import {createApi} from '@reduxjs/toolkit/query/react';

// Middlewares
import {baseQueryAcceptJson} from './middleware';

// Types
import {UsersResponse} from './types';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: baseQueryAcceptJson,
  endpoints: builder => ({
    getAllUsers: builder.query<UsersResponse, void>({
      query: () => ({
        url: 'users?limit=0',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetAllUsersQuery} = usersApi;
