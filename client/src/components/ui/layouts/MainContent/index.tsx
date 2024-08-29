import React from 'react';

import { styles } from './style.css';

type Props = {
  children: React.ReactNode;
};

export const MainContent: React.FC<Props> = React.memo(({ children }) => {
  return <main className={styles}>{children}</main>;
});
