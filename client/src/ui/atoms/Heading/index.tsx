import React, { useMemo } from 'react';

import { Color } from '@/theme/color';

import { styles, TagName } from './style.css';

type Props = {
  children: string;
  as: TagName;
  color?: Color;
};

export const Heading: React.FC<Props> = React.memo(
  ({ children, as = 'h1', color }) => {
    const Tag = useMemo(() => as, [as]);
    return <Tag className={styles({ tagName: as, color })}>{children}</Tag>;
  },
);
