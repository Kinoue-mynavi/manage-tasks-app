import React, { useMemo } from 'react';

import { Color } from '@/theme/color';

import { styles, TagName, TextAlign } from './style.css';

type Props = {
  children: string;
  as: TagName;
  color?: Color;
  textAlign?: TextAlign;
};

export const Heading: React.FC<Props> = React.memo(
  ({ children, as = 'h1', color = 'black', textAlign }) => {
    const Tag = useMemo(() => as, [as]);
    return (
      <Tag className={styles({ tagName: as, color, textAlign })}>
        {children}
      </Tag>
    );
  },
);
