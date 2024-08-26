export const color = {
  white: '#FFFFFF',
  black: '#333333',
  transparent: 'transparent',
  lightGray: '#DDDDDD',
  paleGray: '#EAEDF2',
  darkBlue: '#16235D',
  red: '#FF0211',
} as const satisfies Record<string, `#${string}` | 'transparent'>;

export type Color = keyof typeof color;
