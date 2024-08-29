import { HEADER_AUTH_KEY } from '@/constants/session';
import { LoginSchema } from '@/schemas/auth/login';
import { User } from '@/types/user';
import axiosInstance from '@/utils/axios';

type Response = {
  data: User;
  success: boolean;
};

export const login = async (params: LoginSchema) => {
  const response = await axiosInstance.post('/auth/sign_in', params);
  const { data, headers } = response;

  const body = data as Response;
  const authInfo: Record<keyof typeof HEADER_AUTH_KEY, string> = {
    ...headers,
    accessToken: headers['access-token'],
    client: headers.client,
    uid: headers.uid,
  };

  return {
    ...response,
    header: {
      ...headers,
      ...authInfo,
    },
    body,
  };
};
