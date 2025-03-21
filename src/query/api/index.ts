// Middlewares
import {axiosInstance} from '@query/api/middleware';

// Types
import type {UsersResponse} from './types';

export const getAllUsers = async (): Promise<UsersResponse> => {
  const response = await axiosInstance.get<UsersResponse>('users?limit=0');
  return response.data;
};
