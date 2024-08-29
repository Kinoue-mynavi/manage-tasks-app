import React from 'react';
import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

export const GlobalStateProvider: React.FC<Props> = React.memo(
  ({ children }) => {
    return <RecoilRoot>{children}</RecoilRoot>;
  },
);
