import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Constants
import {baseUrl} from '@constants/urls';

export const baseQueryAcceptJson = fetchBaseQuery({
  baseUrl,
  prepareHeaders: headers => {
    headers.set('Accept', 'application/json');
    return headers;
  },
});
