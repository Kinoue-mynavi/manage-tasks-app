import { CSSProperties, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { space } from '@/theme/space';

export type Direction = 'vertical' | 'horizontal';

const DIRECTION = {
  vertical: 'column',
  horizontal: 'row',
} as const satisfies Record<Direction, CSSProperties['flexDirection']>;

export type Align = 'center' | 'start' | 'end';

const ALIGN = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
} as const satisfies Record<Align, CSSProperties['alignItems']>;

export type Justify = Align | 'between';

const JUSTIFY = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
} as const satisfies Record<Justify, CSSProperties['justifyContent']>;

export const styles = recipe({
  base: {
    display: 'flex',
    width: '100%',
    boxSizing: 'border-box',
  },
  variants: {
    direction: styleVariants(DIRECTION, (d) => ({
      flexDirection: d,
    })),
    gap: styleVariants(space, (s) => ({
      gap: s,
    })),
    justifyContent: styleVariants(JUSTIFY, (a) => ({
      justifyContent: a,
    })),
    alignItems: styleVariants(ALIGN, (a) => ({
      alignItems: a,
    })),
    marginBlock: styleVariants(space, (s) => ({
      marginBlock: s,
    })),
    marginInline: styleVariants(space, (s) => ({
      marginInline: s,
    })),
    paddingBlock: styleVariants(space, (s) => ({
      paddingBlock: s,
    })),
    paddingInline: styleVariants(space, (s) => ({
      paddingInline: s,
    })),
  },
});
