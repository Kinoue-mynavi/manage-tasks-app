export const lineHeight = {
  s: 1.2,
  m: 1.4,
  l: 1.6,
  xl: 2.0,
} as const;

export type LineHeights = keyof typeof lineHeight;
