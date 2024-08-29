import { style } from '@vanilla-extract/css';

import { borderRadius } from '@/theme/borderRadius';
import { color } from '@/theme/color';
import { fontSize } from '@/theme/fontSize';
import { space } from '@/theme/space';

export const container = style({
  position: 'relative',
});

export const buttonStyle = style({
  padding: space.xs,
  ':hover': {
    opacity: 0.6,
  },
});

export const listContainerStyle = style({
  minWidth: 188,
  padding: space.xs,
  backgroundColor: color.white,
  boxShadow: `0px 5px 15px 0px ${color.lightGray}`,
  borderRadius: borderRadius.m,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'absolute',
  top: space.xxl,
  left: 0,
});

export const listItemStyle = style({
  padding: space.s,
  fontSize: fontSize.s,
  width: '100%',
  borderRadius: borderRadius.s,
  cursor: 'pointer',
  transition: '.3s',
  ':hover': {
    backgroundColor: color.paleGray,
    transition: '.3s',
  },
});
