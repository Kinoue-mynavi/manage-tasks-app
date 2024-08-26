import React from 'react';

import { Color } from '@/theme/color';
import { FontSize } from '@/theme/fontSize';
import { FontWeight } from '@/theme/fontWeight';

import { styles } from './style.css';

type StyleProps = {
  color?: Color;
  size?: FontSize;
  weight?: FontWeight;
};

type Props = {
  children: string;
} & StyleProps;

export const Text: React.FC<Props> = React.memo(
  ({ children, color = 'black', size = 'm', weight = 'normal' }) => {
    return <p className={styles({ color, size, weight })}>{children}</p>;
  },
);
