import { style } from '@vanilla-extract/css';

import { color } from '@/theme/color';
import { fontSize } from '@/theme/fontSize';
import { space } from '@/theme/space';

export const containerStyle = style({
  height: 72,
  backgroundColor: color.darkBlue,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingInline: space.ml,
});

export const listContainerStyle = style({
  display: 'flex',
  gap: space.l,
});

export const listItemTextStyle = style({
  color: color.white,
  fontSize: fontSize.s,
});
