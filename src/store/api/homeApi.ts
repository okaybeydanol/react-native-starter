// Third-Party Libraries
import { createApi } from '@reduxjs/toolkit/query/react';

// Sibling Directory Imports (Relative)
import { baseQueryAcceptJson } from './middleware';
import type { UsersResponse } from './types';

export const homeApi = createApi({
  reducerPath: 'homeApi',
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

export const { useGetAllUsersQuery } = homeApi;
