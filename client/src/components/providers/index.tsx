'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CookieProvider } from './CookieProvider';
import { GlobalStateProvider } from './GlobalStateProvider';
import { QueryClientProvider } from './QueryClientProvider';

type Props = {
  children: React.ReactNode;
};

export const AppProviders: React.FC<Props> = React.memo(({ children }) => {
  return (
    <>
      <CookieProvider>
        <GlobalStateProvider>
          <QueryClientProvider>{children}</QueryClientProvider>
        </GlobalStateProvider>
      </CookieProvider>
      <ToastContainer />
    </>
  );
});
