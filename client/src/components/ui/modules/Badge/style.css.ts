import { CSSProperties, styleVariants } from '@vanilla-extract/css';

import { color } from '@/theme/color';
import { space } from '@/theme/space';

export type Size = 's' | 'm';

const OUTER_FRAME = {
  s: {
    height: 28,
    borderRadius: 28 / 2,
    paddingInline: space.s,
  },
  m: {
    height: 32,
    borderRadius: 32 / 2,
    paddingInline: space.m,
  },
} as const satisfies Record<
  Size,
  Pick<CSSProperties, 'height' | 'borderRadius' | 'paddingInline'>
>;

export const styles = styleVariants(OUTER_FRAME, (outerFrame) => ({
  ...outerFrame,
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: space.xxs,
  backgroundColor: color.lightGray,
  ':hover': {
    opacity: 0.5,
    transition: '.3s',
  },
}));
