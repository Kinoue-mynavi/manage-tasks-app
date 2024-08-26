import { style, styleVariants } from '@vanilla-extract/css';

export type ImageHeight = 's' | 'm' | 'l' | 'xl' | 'full';

const IMAGE_HEIGHT = {
  s: 200,
  m: 300,
  l: 400,
  xl: 500,
  full: '100%',
} as const satisfies Record<ImageHeight, number | `${number}%`>;

export const container = styleVariants(IMAGE_HEIGHT, (height) => ({
  height,
  position: 'relative',
  width: '100%',
}));

export const image = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});
