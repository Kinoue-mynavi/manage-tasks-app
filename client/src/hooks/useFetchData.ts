import useSWR, { SWRConfiguration } from 'swr';

import fetcher from '@/utils/fetcher';

export const useFetchData = <T>(url: string, options?: SWRConfiguration) => {
  const { data, error, isValidating, mutate } = useSWR<T>(
    url,
    () => fetcher<T>(url),
    { ...options },
  );
  console.log(data);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
    isValidating,
    mutate,
  };
};
