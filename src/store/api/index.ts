import {createApi} from '@reduxjs/toolkit/query/react';

// Middlewares
import {baseQueryAcceptJson} from './middleware';

// Types
import {ProductsAllApiResponse, ProductSingleApiResponse} from './types';

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: baseQueryAcceptJson,
  endpoints: builder => ({
    getAll: builder.query<ProductsAllApiResponse, void>({
      query: () => ({
        url: 'products?limit=0',
        method: 'GET',
      }),
    }),
    getById: builder.query<ProductSingleApiResponse, {id: string}>({
      query: ({id}) => ({
        url: `products/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useLazyGetAllQuery, useLazyGetByIdQuery} = commonApi;
