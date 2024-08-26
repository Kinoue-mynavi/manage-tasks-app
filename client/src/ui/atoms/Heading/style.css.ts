import { CSSProperties, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/theme/color';
import { fontSize } from '@/theme/fontSize';
import { fontWeight } from '@/theme/fontWeight';

export type TagName = 'h1' | 'h2' | 'h3' | 'h4';

export const styles = recipe({
  base: {
    fontWeight: fontWeight.bold,
    color: color.black,
  },
  variants: {
    color: styleVariants(color, (c) => ({ color: c })),
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
