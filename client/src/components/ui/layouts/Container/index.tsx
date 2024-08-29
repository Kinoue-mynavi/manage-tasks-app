import React from 'react';

import { Space } from '@/theme/space';

import { Direction, Align, styles, Justify } from './style.css';

type Props = {
  children: React.ReactNode;
  direction?: Direction;
  gap?: Space;
  marginBlock?: Space;
  marginInline?: Space;
  paddingBlock?: Space;
  paddingInline?: Space;
  justifyContent?: Justify;
  alignItems?: Align;
};

export const Container: React.FC<Props> = React.memo(
  ({ children, direction = 'vertical', ...restProps }) => {
    return (
      <div className={styles({ direction, ...restProps })}>{children}</div>
    );
  },
);
