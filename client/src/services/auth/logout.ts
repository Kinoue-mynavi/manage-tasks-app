import { AuthInfo } from '@/types/auth';
import axiosInstance from '@/utils/axios';

export const logout = async (params: AuthInfo) => {
  const { accessToken, client, uid } = params;
  const response = await axiosInstance.delete('/auth/sign_out', {
    headers: {
      'access-token': accessToken,
      client,
      uid,
    },
  });
  return response;
};
