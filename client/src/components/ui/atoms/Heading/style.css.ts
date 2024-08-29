import { CSSProperties, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/theme/color';
import { fontSize } from '@/theme/fontSize';
import { fontWeight } from '@/theme/fontWeight';

export type TagName = 'h1' | 'h2' | 'h3' | 'h4';
export type TextAlign = 'center' | 'right' | 'left';

const TEXT_ALIGN = {
  center: 'center',
  right: 'right',
  left: 'left',
} as const satisfies Record<TextAlign, CSSProperties['textAlign']>;

export const styles = recipe({
  base: {
    fontWeight: fontWeight.bold,
  },
  variants: {
    color: styleVariants(color, (c) => ({ color: c })),
    textAlign: styleVariants(TEXT_ALIGN, (t) => ({
      textAlign: t,
    })),
    tagName: {
      h1: {
        fontSize: fontSize.l,
      },
      h2: {
        fontSize: fontSize.ml,
      },
      h3: {
        fontSize: fontSize.m,
      },
      h4: {
        fontSize: fontSize.s,
      },
    } satisfies Record<TagName, CSSProperties>,
  },
});
