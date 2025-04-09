// Third-Party Libraries
import type {AxiosRequestConfig} from 'axios';
import axios from 'axios';

// Internal Imports (Absolute)
import {BASE_URL} from '@constants/urls';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15000,
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

// ==================================================
// EXAMPLE REFRESH TOKEN IMPLEMENTATION FOR TANSTACK QUERY
// ==================================================

export const axiosWithRefresh = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15000,
});

// Request interceptor - Authorization header ekleyen interceptor
axiosWithRefresh.interceptors.request.use(
  config => {
    // 1. Import your Zustand store
    // import { useAuthStore } from '@query/store/slices/auth';

    // 2. Get token from Zustand store
    // const { accessToken, tokenType } = useAuthStore.getState();

    // 3. Add token to header if available
    // if (tokenType && accessToken) {
    //   config.headers.Authorization = `${tokenType} ${accessToken}`;
    // }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response interceptor - 401 hatası durumunda token yenileme işlemi
axiosWithRefresh.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    // Orijinal isteği al
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // Eğer hata 401 ise ve henüz retry yapılmadıysa
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Sonsuz döngüyü önlemek için retry flag'ini set et
      originalRequest._retry = true;

      try {
        // 1. Import your Zustand store
        // import { useAuthStore } from '@query/store/slices/auth';
        // 2. Get refresh token and actions from Zustand store
        // const { refreshToken, setAuth, logout } = useAuthStore.getState();
        // 3. Check if refresh token exists
        // if (!refreshToken) {
        //   logout();
        //   return Promise.reject(error);
        // }
        // 4. Call refresh token endpoint
        // const response = await axios.post(
        //   `${baseUrl}/auth/refresh`,
        //   {refresh_token: refreshToken},
        //   {
        //     headers: {
        //       'Content-Type': 'application/json',
        //       Accept: 'application/json',
        //     },
        //   },
        // );
        // 5. Handle successful response
        // if (response.data) {
        // 6. Update the tokens in Zustand store
        // setAuth({
        //   accessToken: response.data.access_token,
        //   tokenType: response.data.token_type,
        //   refreshToken: response.data.refresh_token,
        // });
        // 7. Update the original request header
        // if (originalRequest.headers) {
        //   originalRequest.headers.Authorization = `${response.data.token_type} ${response.data.access_token}`;
        // }
        // 8. Import queryClient (optional)
        // import { queryClient } from '@query/client';
        // 9. Invalidate queries as needed (optional)
        // queryClient.invalidateQueries({queryKey: ['user']});
        // 10. Retry the original request with new token
        // return axiosWithRefresh(originalRequest);
        // }
      } catch (refreshError) {
        // 11. Handle refresh token error
        // console.error('Token refresh failed:', refreshError);
        // 12. Import your Zustand store
        // import { useAuthStore } from '@query/store/slices/auth';
        // 13. Log out the user
        // useAuthStore.getState().logout();
        // 14. Return the original error
        // return Promise.reject(error);
      }
    }

    // 401 dışındaki hatalar veya refresh başarısız olduğunda hatayı döndür
    return Promise.reject(error);
  },
);
