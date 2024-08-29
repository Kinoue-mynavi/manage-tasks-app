import { style } from '@vanilla-extract/css';

import { color } from '@/theme/color';
import { fontSize } from '@/theme/fontSize';

export const containerStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 42,
  backgroundColor: color.lightGray,
});

export const textStyle = style({
  fontSize: fontSize.xs,
});
