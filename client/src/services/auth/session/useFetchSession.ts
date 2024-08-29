import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { useSetCurrentUser } from '@/app/state/currentUser';
import { HEADER_AUTH_KEY } from '@/constants/session';
import { useCookie } from '@/hooks/useCookie';

import { fetchSession } from '.';

export const useFetchSession = () => {
  const { cookie } = useCookie();
  const { setCurrentUser } = useSetCurrentUser();

  const accessToken = useMemo(
    () => cookie[HEADER_AUTH_KEY.accessToken],
    [cookie],
  );
  const client = useMemo(() => cookie[HEADER_AUTH_KEY.client], [cookie]);
  const uid = useMemo(() => cookie[HEADER_AUTH_KEY.uid], [cookie]);

  // Devise Auth Token認証（session確認）
  const { data } = useQuery({
    queryKey: ['auth/sessions', accessToken, client, uid],
    queryFn: async () => {
      const response = await fetchSession({ accessToken, client, uid });

      const { name, email, id } = response.data;
      setCurrentUser({ name, email, id }); // state更新

      return response;
    },
  });

  return {
    isLogin: !!data?.is_login,
  };
};
