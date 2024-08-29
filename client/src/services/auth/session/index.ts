import axiosInstance from '@/utils/axios';

type Params = {
  uid: string | undefined;
  client: string | undefined;
  accessToken: string | undefined;
};

type Common = {
  is_login: boolean;
};

type Error = {
  message: string;
  data: never;
} & Common;

type Success = {
  data: {
    id: number;
    name: string;
    email: string;
  };
  message: never;
} & Common;

type Response = Success | Error;

export const fetchSession = async (params: Params): Promise<Response> => {
  const { uid, client, accessToken } = params;

  const response = await axiosInstance.get('/auth/sessions', {
    headers: {
      'access-token': accessToken,
      client,
      uid,
    },
  });
  const responseData: Response = response.data;

  return responseData;
};
