import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { color } from '@/theme/color';
import { fontSize } from '@/theme/fontSize';
import { fontWeight } from '@/theme/fontWeight';

export const styles = recipe({
  variants: {
    color: styleVariants(color, (c) => ({ color: c })),
    size: styleVariants(fontSize, (fs) => ({ fontSize: fs })),
    weight: styleVariants(fontWeight, (fw) => ({ fontWeight: fw })),
  },
});
