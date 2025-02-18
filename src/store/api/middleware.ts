import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Constants
import {BASE_URL} from '@constants/urls';

export const baseQueryAcceptJson = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: headers => {
    headers.set('Accept', 'application/json');
    return headers;
  },
});
