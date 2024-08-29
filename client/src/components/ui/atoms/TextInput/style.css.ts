import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/theme/color';
import { fontSize } from '@/theme/fontSize';
import { space } from '@/theme/space';

export const containerStyle = style({
  position: 'relative',
  width: '100%',
});

export const inputStyle = recipe({
  base: {
    border: `1px solid ${color.lightGray}`,
    borderRadius: 6,
    paddingInline: space.m,
    height: 44,
    width: '100%',
    flex: 1,
    background: color.paleGray,
    fontSize: fontSize.m,
    '::placeholder': {
      opacity: 0.4,
    },
    ':disabled': {
      opacity: 0.4,
    },
  },
  variants: {
    isError: {
      true: {
        border: `2px solid ${color.red}`,
      },
    },
  },
});

export const buttonStyle = style({
  position: 'absolute',
  right: space.m,
  top: '50%',
  transform: 'translateY(-50%)',
});
