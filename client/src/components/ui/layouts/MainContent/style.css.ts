import { style } from '@vanilla-extract/css';

import { space } from '@/theme/space';

export const styles = style({
  minHeight: '90vh',
  maxWidth: 1080,
  marginInline: 'auto',
  boxSizing: 'border-box',
  paddingInline: space.m,
  marginTop: space.xl,
});
