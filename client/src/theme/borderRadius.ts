export const borderRadius = {
  s: 4,
  m: 8,
  l: 12,
  circle: '50%',
} as const;

export type BorderRadius = keyof typeof borderRadius;
