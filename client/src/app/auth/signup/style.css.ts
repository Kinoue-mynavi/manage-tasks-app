import { style } from '@vanilla-extract/css';

import { space } from '@/theme/space';

export const formStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.xl,
  alignItems: 'center',
});
