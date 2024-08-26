import { CSSProperties, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { borderRadius } from '@/theme/borderRadius';
import { color } from '@/theme/color';
import { fontSize } from '@/theme/fontSize';
import { fontWeight } from '@/theme/fontWeight';
import { space } from '@/theme/space';

export type Pattern = 'primary' | 'secondary';
export type Size = 's' | 'm';

const PATTERN = {
  primary: {
    color: color.white,
    backgroundColor: color.darkBlue,
  },
  secondary: {
    color: color.darkBlue,
    backgroundColor: color.white,
  },
} as const satisfies Record<Pattern, CSSProperties>;

const SIZE = {
  s: {
    height: 36,
    minWidth: 112,
    fontSize: fontSize.s,
    paddingInline: space.m,
  },
  m: {
    height: 44,
    minWidth: 132,
    fontSize: fontSize.m,
    paddingInline: space.l,
  },
} as const satisfies Record<Size, CSSProperties>;

export const styles = recipe({
  base: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.m,
    fontWeight: fontWeight.bold,
    border: `solid 2px ${color.darkBlue}`,
    transition: '.5s',
    ':hover': {
      opacity: 0.5,
      transition: '.5s',
    },
  },
  variants: {
    pattern: styleVariants(PATTERN, (t) => t),
    size: styleVariants(SIZE, (s) => s),
  },
});
