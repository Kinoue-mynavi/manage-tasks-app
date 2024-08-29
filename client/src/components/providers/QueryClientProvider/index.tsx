import {
  QueryClient,
  QueryClientProvider as TanstackProvider,
} from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export const QueryClientProvider: React.FC<Props> = React.memo(
  ({ children }) => {
    return <TanstackProvider client={queryClient}>{children}</TanstackProvider>;
  },
);
