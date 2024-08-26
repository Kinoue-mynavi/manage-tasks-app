import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/theme/color';
import { fontSize } from '@/theme/fontSize';
import { space } from '@/theme/space';

export const styles = recipe({
  base: {
    border: `1px solid ${color.lightGray}`,
    borderRadius: 6,
    paddingInline: space.m,
    maxWidth: 800,
    height: 48,
    flex: 1,
    width: '100%',
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
