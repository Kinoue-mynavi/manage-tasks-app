import { useCallback, useMemo } from 'react';
import { useCookies } from 'react-cookie';

type Cookie = {
  key: string;
  value: string;
};

export const useCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const cookie: Record<string, string | undefined> = useMemo(
    () => cookies,
    [cookies],
  );

  const addCookie = useCallback(
    (c: Cookie) => {
      setCookie(c.key, c.value);
    },
    [setCookie],
  );

  const addCookies = useCallback(
    (cookieList: Cookie[]) => {
      cookieList.forEach((item) => {
        addCookie(item);
      });
    },
    [addCookie],
  );

  const deleteCookie = useCallback(
    (key: string) => {
      removeCookie(key);
    },
    [removeCookie],
  );

  const deleteCookies = useCallback(
    (keys: string[]) => {
      keys.forEach((key) => {
        deleteCookie(key);
      });
    },
    [deleteCookie],
  );

  return {
    cookie,
    addCookie,
    addCookies,
    deleteCookie,
    deleteCookies,
  };
};
