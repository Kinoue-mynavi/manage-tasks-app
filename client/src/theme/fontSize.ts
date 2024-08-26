export const fontSize = {
  xxs: 10,
  xs: 12,
  s: 14,
  m: 16,
  ml: 20,
  l: 24,
  xl: 32,
} as const;

export type FontSize = keyof typeof fontSize;
