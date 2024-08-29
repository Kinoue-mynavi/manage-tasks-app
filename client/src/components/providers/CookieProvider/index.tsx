'use client';

import React from 'react';
import { CookiesProvider } from 'react-cookie';

type Props = {
  children: React.ReactNode;
};

export const CookieProvider: React.FC<Props> = React.memo(({ children }) => {
  return <CookiesProvider>{children}</CookiesProvider>;
});
