import { style } from '@vanilla-extract/css';

import { space } from '@/theme/space';

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.xxs,
  paddingBlock: space.xs,
  width: '100%',
});

export const contentStyle = style({
  width: '100%',
});
