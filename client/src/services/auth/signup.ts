import { HEADER_AUTH_KEY } from '@/constants/session';
import { SignupSchema } from '@/schemas/auth/signup';
import type { User } from '@/types/user';
import axiosInstance from '@/utils/axios';

type Response = {
  data: User;
  status: string;
};

export const signup = async (params: SignupSchema) => {
  const response = await axiosInstance.post('/auth', params);
  const { data, headers } = response;

  const body = data as Response;
  const authInfo: Record<keyof typeof HEADER_AUTH_KEY, string> = {
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
