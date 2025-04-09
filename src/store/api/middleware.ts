// Third-Party Libraries
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Internal Imports (Absolute)
import {BASE_URL} from '@constants/urls';

export const baseQueryAcceptJson = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: headers => {
    headers.set('Accept', 'application/json');
    return headers;
  },
});

// ==================================================
// EXAMPLE REFRESH TOKEN IMPLEMENTATION FOR RTK QUERY
// ==================================================

const baseQueryToken = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, {getState}) => {
    // Replace 'any' with your actual RootState type
    // Import RootState from your store:
    // import { RootState } from '../store';
    // where RootState is defined as:
    // export type RootState = ReturnType<typeof store.getState>;
    const access_token = (getState() as any) /* RootState */.user
      .userSessionInfo.access_token;
    const token_type = (getState() as any) /* RootState */.user.userSessionInfo
      .token_type;
    if (token_type && access_token) {
      headers.set('authorization', `${token_type} ${access_token}`);
    }
    headers.set('Accept', 'application/json');
    return headers;
  },
});

export const baseQueryWithRefreshToken: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQueryToken(args, api, extraOptions);
  // If we get a 401 Unauthorized response, try to refresh the token
  if (result?.error?.status === 401) {
    // Implement refresh token logic
    // 1. Get refresh token from state
    // const refreshToken = (api.getState() as RootState).user.userSessionInfo.refresh_token;
    // 2. Call refresh token endpoint
    const refreshResult = (await baseQueryToken(
      {
        url: 'auth/refresh',
        method: 'POST',
        // Include refresh token in request body if needed
        // body: { refresh_token: refreshToken }
      },
      api,
      extraOptions,
    )) as {data: {access_token: string; token_type: string /* other fields */}};

    if (refreshResult.data) {
      // 3. Update the access token in the store
      // Import your auth actions first:
      // import { setUserSessionInfo } from '../slices/userSlice';
      // Then dispatch the action with the new tokens:
      // api.dispatch(setUserSessionInfo(refreshResult.data));
      // 4. Retry the original query with the new access token
      // result = await baseQueryToken(args, api, extraOptions);
      // Return the result of the retry
      // return result;
    } else {
      // Handle the case where the refresh token request fails
      // Option 1: Log out the user and redirect to login
      // import { logout } from '../slices/userSlice';
      // api.dispatch(logout());
      // Option 2: Return the refresh error response
      // return refreshResult;
      // Option 3: Return the original error
      // return result;
    }
  }
  // Return the original result if no refresh was needed or if refresh failed
  return result;
};
