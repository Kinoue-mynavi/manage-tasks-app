export const breakpoint = {
  mobile: 568,
  tablet: 768,
  desktop: 1024,
} as const;

export type Breakpoints = keyof typeof breakpoint;
