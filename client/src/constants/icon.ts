import downArrow from '@public/icons/downArrow.svg';
import search from '@public/icons/search.svg';

export const ICON = {
  search,
  downArrow,
} as const satisfies Record<string, React.FC<React.SVGProps<SVGElement>>>;

export type IconName = keyof typeof ICON;
